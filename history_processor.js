// history_processor.js

/**
 * Constructs a detailed prompt for the gemini-3-flash-preview model to analyze browser history.
 * @param {Array<Object>} historyItems - An array of Chrome history items, pruned for brevity.
 * @returns {string} The formatted prompt string.
 */
/**
 * Constructs a detailed prompt for the gemini-3-flash-preview model to analyze browser history.
 * @param {Array<Object>} historyItems - An array of Chrome history items, pruned for brevity.
 * @returns {string} The formatted prompt string.
 */
/**
 * Helper to identify top 5 domains by visit count.
 */
function getTopDomains(historyItems) {
    const domainCounts = {};
    historyItems.forEach(item => {
        try {
            const domain = new URL(item.url).hostname.replace('www.', '');
            if (!domainCounts[domain]) {
                domainCounts[domain] = 0;
            }
            // Use visitCount if available, otherwise default to 1
            domainCounts[domain] += (item.visitCount || 1);
        } catch (e) {
            // Ignore invalid URLs
        }
    });

    return Object.entries(domainCounts)
        .sort(([, countA], [, countB]) => countB - countA)
        .slice(0, 5) // Top 5
        .map(([domain]) => domain);
}

/**
 * Constructs a detailed prompt for the gemini-3-flash-preview model to analyze browser history.
 * @param {Array<Object>} historyItems - An array of Chrome history items, pruned for brevity.
 * @param {Array<string>} topDomains - List of top 5 domains to generate titles for.
 * @returns {string} The formatted prompt string.
 */
function createPrompt(historyItems, topDomains) {
// Optimization: Only send necessary fields.
    const formattedHistory = historyItems.map(item => {
        const cleanTitle = (item.title || "Untitled").replace(/"/g, "'").replace(/\n/g, " ");
        const cleanUrl = item.url.length > 150 ? item.url.substring(0, 150) + "..." : item.url;
        return `{"t":"${cleanTitle}","u":"${cleanUrl}"}`;
    }).join(',');

    const topDomainsJson = JSON.stringify(topDomains || []);

    return `
    Analyze this browser history (JSON list of {t:title, u:url}). 

    1. Group items into "Journeys" (related tasks/topics, min 2 items).
    2. For the following Top Domains: ${topDomainsJson}, generate a user-friendly, engaging title for a group containing all visits to that domain.
       Examples: "Research on Google", "Shopping on Amazon", "Development on GitHub".
    
    Return strictly valid JSON.
    Format: 
    { 
      "journeys": [ { "title": "Short Title", "relevance": 0.1-1.0, "pages": [ { "url": "exact_url_match" } ] } ],
      "domainTitles": { "google.com": "Research on Google", ... }
    }
    
    Data: [${formattedHistory}]
    `;
}

/**
 * Calls the Gemini API to group history items into journeys.
 *
 * @param {Array<Object>} historyItems - An array of Chrome history items.
 * @returns {Promise<Object>} A promise that resolves to an object containing the processed journeys.
 * @throws {Error} If the AI response is invalid or the API call fails.
 */
async function createJourneysFromHistory(historyItems) {
    if (!historyItems || historyItems.length === 0) {
        return { journeys: [] };
    }

    const { geminiApiKey } = await chrome.storage.sync.get('geminiApiKey');
    if (!geminiApiKey) {
        throw new Error("API_KEY_MISSING");
    }

    // 1. Identify Top Sites
    const topDomains = getTopDomains(historyItems);

    // Prepare history items for the prompt (limit to recent/relevant items to save tokens)
    const prunedHistory = historyItems.slice(0, 75);
    const prompt = createPrompt(prunedHistory, topDomains);

    let retryCount = 0;
    const maxRetries = 3;
    const baseDelay = 1000; // 1 second

    while (retryCount <= maxRetries) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${geminiApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }],
                    generationConfig: {
                        responseMimeType: "application/json"
                    }
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                if (response.status === 503 && retryCount < maxRetries) {
                    console.warn(`Model overloaded (503). Retrying in ${baseDelay * Math.pow(2, retryCount)}ms...`);
                    await new Promise(resolve => setTimeout(resolve, baseDelay * Math.pow(2, retryCount)));
                    retryCount++;
                    continue;
                }
                throw new Error(`API Error: ${response.status} ${errorData.error?.message || response.statusText}`);
            }

            const data = await response.json();
            const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!jsonText) {
                throw new Error("Empty response from AI model.");
            }

            const parsedResponse = safeJSONParse(jsonText);

            if (!parsedResponse || !Array.isArray(parsedResponse.journeys)) {
                throw new Error("Invalid AI response format: 'journeys' array not found.");
            }

            // --- Process Semantic Journeys ---
            const processedSemanticJourneys = parsedResponse.journeys.map(journey => {
                const mappedPages = journey.pages.map(page => {
                    const pageUrl = page.url || page.u;
                    const original = historyItems.find(item =>
                        item.url === pageUrl ||
                        (pageUrl && item.url.includes(pageUrl.replace(/\.\.\.$/, '')))
                    );

                    const pageData = {
                        ...page,
                        title: original ? original.title : (page.title || page.t),
                        url: original ? original.url : pageUrl,
                        ...(original || {})
                    };

                    // Add metadata if original item is found
                    if (original) {
                        pageData.metadata = [];
                        try {
                            pageData.domain = new URL(original.url).hostname.replace('www.', '');
                        } catch (e) {
                            pageData.domain = '';
                        }

                        if (original.typedCount > 0) {
                            pageData.metadata.push({ type: 'typed', label: 'Typed' });
                        }
                        if (original.visitCount > 5) {
                            pageData.metadata.push({ type: 'frequent', label: 'Frequent' });
                        }
                    } else {
                        pageData.metadata = [];
                        pageData.domain = '';
                    }

                    return pageData;
                }).filter(p => p.url); // Filter out empty matches

                return { ...journey, pages: mappedPages };
            }).filter(j => j.pages.length > 0);


            // --- Process Top Site Journeys ---
            const topSiteJourneys = [];
            const domainTitles = parsedResponse.domainTitles || {};

            topDomains.forEach(domain => {
                // Find ALL items for this domain from the FULL history (not just pruned)
                // Limit to, say, recent 20 items to avoid huge lists
                const domainItems = historyItems
                    .filter(item => {
                        try {
                            return new URL(item.url).hostname.replace('www.', '') === domain;
                        } catch (e) { return false; }
                    })
                    .slice(0, 20); // Cap at 20 items per top site card

                if (domainItems.length > 0) {
                    topSiteJourneys.push({
                        title: domainTitles[domain] || `Visit to ${domain}`, // AI title or fallback
                        relevance: 1.1, // > 1.0 to ensure they are pinned at the top if sorting by relevance
                        isTopSite: true, // Marker for UI if needed
                        pages: domainItems
                    });
                }
            });

            // Combine: Top Sites First, then Semantic Journeys
            return {
                journeys: [...topSiteJourneys, ...processedSemanticJourneys]
            };

        } catch (error) {
            if (retryCount === maxRetries || !(error.message && error.message.includes("503"))) {
                console.error("AI processing failed:", error);
                throw error;
            }
            retryCount++;
        }
    }
    throw new Error("Max retries reached for AI processing.");
}

/**
 * Tries to parse JSON, and if it fails, attempts to repair it.
 */
function safeJSONParse(text) {
    if (!text) return null;

    // 1. Strip Markdown code blocks if present
    let cleaned = text.trim();
    if (cleaned.startsWith('```json')) {
        cleaned = cleaned.replace(/^```json/, '').replace(/```$/, '');
    } else if (cleaned.startsWith('```')) {
        cleaned = cleaned.replace(/^```/, '').replace(/```$/, '');
    }
    cleaned = cleaned.trim();

    try {
        return JSON.parse(cleaned);
    } catch (e) {
        console.warn("Initial JSON parse failed, attempting repair...", e);
        return repairJSON(cleaned);
    }
}

/**
 * Attempts to repair malformed or truncated JSON strings.
 * @param {string} text - The malformed JSON string.
 * @returns {Object|null} The parsed object or null if repair failed.
 */
function repairJSON(text) {
    let repaired = text;

    // 1. Balance Quotes
    // Simple heuristic: Count quotes. If odd, append '"'.
    // NOTE: This checks for unescaped quotes.
    let quoteCount = 0;
    let isEscaped = false;
    for (const char of repaired) {
        if (char === '\\' && !isEscaped) {
            isEscaped = true;
        } else {
            if (char === '"' && !isEscaped) {
                quoteCount++;
            }
            isEscaped = false;
        }
    }

    if (quoteCount % 2 !== 0) {
        console.log("Detected unbalanced quotes, appending \"");
        repaired += '"';
    }

    // 2. Balance Braces/Brackets
    const stack = [];
    let inString = false;
    isEscaped = false;

    for (let i = 0; i < repaired.length; i++) {
        const char = repaired[i];

        if (char === '\\' && !isEscaped) {
            isEscaped = true;
            continue;
        }

        if (char === '"' && !isEscaped) {
            inString = !inString;
        }

        if (!inString) {
            if (char === '{' || char === '[') {
                stack.push(char);
            } else if (char === '}' || char === ']') {
                const last = stack[stack.length - 1];
                if ((char === '}' && last === '{') || (char === ']' && last === '[')) {
                    stack.pop();
                }
            }
        }

        isEscaped = false;
    }

    // Close remaining open structures
    while (stack.length > 0) {
        const last = stack.pop();
        if (last === '{') repaired += '}';
        if (last === '[') repaired += ']';
    }

    // 3. Try parsing again
    try {
        return JSON.parse(repaired);
    } catch (e) {
        // 4. Last Ditch: specific fix for trailing commas before closing braces/brackets
        // e.g. [1, 2,] -> [1, 2]
        // This regex removes a comma if it's followed by optional whitespace and then a closing bracket/brace
        repaired = repaired.replace(/,\s*([}\]])/g, '$1');
        try {
            return JSON.parse(repaired);
        } catch (e2) {
            console.error("JSON repair failed:", e.message);
            return null;
        }
    }
}