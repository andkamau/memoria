// history_processor.js

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
 * Constructs a detailed prompt for the gemini-2.5-flash-lite model to analyze browser history.
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

    const topDomains = getTopDomains(historyItems);
    const prunedHistory = historyItems.slice(0, 75);
    const prompt = createPrompt(prunedHistory, topDomains);

    let retryCount = 0;
    const maxRetries = 3;
    const baseDelay = 1000;

    while (retryCount <= maxRetries) {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${geminiApiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { responseMimeType: "application/json" }
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const errorMessage = errorData.error?.message || response.statusText;

                if (response.status === 429) {
                    throw new Error("API_QUOTA_EXCEEDED");
                } else if (response.status === 503 && retryCount < maxRetries) {
                    console.warn(`Model overloaded (503). Retrying in ${baseDelay * Math.pow(2, retryCount)}ms...`);
                    await new Promise(resolve => setTimeout(resolve, baseDelay * Math.pow(2, retryCount)));
                    retryCount++;
                    continue;
                } else if (response.status >= 500) {
                    throw new Error("API_SERVER_ERROR");
                } else if (response.status === 401 || response.status === 403) {
                    throw new Error("API_AUTH_ERROR");
                } else {
                    throw new Error(`API_ERROR: ${response.status} ${errorMessage}`);
                }
            }

            const data = await response.json();
            const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!jsonText) throw new Error("API_EMPTY_RESPONSE");

            const parsedResponse = safeJSONParse(jsonText);
            if (!parsedResponse || !Array.isArray(parsedResponse.journeys)) {
                throw new Error("API_INVALID_FORMAT");
            }

            const processedSemanticJourneys = parsedResponse.journeys.map(journey => {
                const mappedPages = journey.pages.map(page => {
                    const pageUrl = page.url || page.u;
                    const original = historyItems.find(item =>
                        item.url === pageUrl ||
                        (pageUrl && item.url.includes(pageUrl.replace(/\.\.\.$/, '')))
                    );
                    return original ? { ...page, ...original } : null;
                }).filter(p => p && p.url);
                return { ...journey, pages: mappedPages };
            }).filter(j => j.pages.length > 0);

            const topSiteJourneys = [];
            const domainTitles = parsedResponse.domainTitles || {};
            topDomains.forEach(domain => {
                const domainItems = historyItems.filter(item => {
                    try {
                        return new URL(item.url).hostname.replace('www.', '') === domain;
                    } catch (e) { return false; }
                }).slice(0, 20);
                if (domainItems.length > 0) {
                    topSiteJourneys.push({
                        title: domainTitles[domain] || `Visits to ${domain}`,
                        relevance: 1.1,
                        isTopSite: true,
                        pages: domainItems
                    });
                }
            });

            return { journeys: [...topSiteJourneys, ...processedSemanticJourneys] };

        } catch (error) {
            if (error.message === "Failed to fetch") {
                console.error("AI processing failed: Network error", error);
                if (retryCount < maxRetries) {
                    await new Promise(resolve => setTimeout(resolve, baseDelay * Math.pow(2, retryCount)));
                    retryCount++;
                    continue;
                }
                throw new Error("NETWORK_ERROR");
            }
            if (retryCount === maxRetries || !error.message.includes("503")) {
                console.error("AI processing failed:", error);
                throw error; // Re-throw the specific error type
            }
             // This part should not be reached if 503 is handled within the !response.ok block
        }
    }
    throw new Error("API_MAX_RETRIES");
}

/**
 * Tries to parse JSON, and if it fails, attempts to repair it.
 */
function safeJSONParse(text) {
    if (!text) return null;
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
 */
function repairJSON(text) {
    let repaired = text;
    // Basic repairs can be added here if needed, e.g., for trailing commas
    repaired = repaired.replace(/,\s*([}\]])/g, '$1');
    try {
        return JSON.parse(repaired);
    } catch (e2) {
        console.error("JSON repair failed:", e2.message);
        return null;
    }
}
