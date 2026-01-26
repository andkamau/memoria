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
function createPrompt(historyItems) {
    // Optimization: Only send necessary fields. Truncate long titles/URLs if needed (optional) but 
    // simply sending a cleaner list helps.
    const formattedHistory = historyItems.map(item => {
        // Simple sanitization to avoid JSON breaking characters if any slipped through
        const cleanTitle = (item.title || "Untitled").replace(/"/g, "'").replace(/\n/g, " ");
        // Send only first 100 chars of URL to save tokens if it's super long
        const cleanUrl = item.url.length > 150 ? item.url.substring(0, 150) + "..." : item.url;
        return `{"t":"${cleanTitle}","u":"${cleanUrl}"}`;
    }).join(',');

    return `
    Analyze this browser history (JSON list of {t:title, u:url}). 
    Group items into "Journeys" (related tasks/topics, min 2 items). 
    Return strictly valid JSON.
    Format: { "journeys": [ { "title": "Short Title", "relevance": 0.1-1.0, "pages": [ { "url": "exact_url_match" } ] } ] }
    
    Data: [${formattedHistory}]
    `;
}

/**
 * Simulates calling an AI model to group history items into journeys.
 * This function includes error handling and response validation.
 *
 * @param {Array<Object>} historyItems - An array of Chrome history items.
 * @returns {Promise<Object>} A promise that resolves to an object containing the processed journeys.
 * @throws {Error} If the AI response is invalid or the API call fails.
 */
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

    // Prepare history items for the prompt (limit to recent/relevant items to save tokens)
    // Reduce to 75 items to prevent token overload
    const prunedHistory = historyItems.slice(0, 75);
    const prompt = createPrompt(prunedHistory);

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

                // Check for 503 Service Unavailable (Overloaded)
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

            // Merge AI response with original history data for completeness
            // We iterate through the AI's returned journeys and try to match URLs back to the full history object
            // to get favicons and other metadata if needed.
            parsedResponse.journeys.forEach(journey => {
                journey.pages = journey.pages.map(page => {
                    // The optimized prompt might return 'u' or 'url' or just the url string if the model hallucinates a bit,
                    // but we asked for { "url": "..." }. 
                    // Let's handle 'u' just in case since we sent 'u' in the prompt.
                    const pageUrl = page.url || page.u;

                    // Fuzzy match: check if original URL contains the returned URL snippet or vice versa
                    // This is helpful if the model truncates the URL
                    const original = historyItems.find(item =>
                        item.url === pageUrl ||
                        (pageUrl && item.url.includes(pageUrl.replace(/\.\.\.$/, '')))
                    );

                    return {
                        ...page,
                        title: original ? original.title : (page.title || page.t), // Fallback to original title
                        url: original ? original.url : pageUrl,
                        ...(original || {})
                    };
                }).filter(p => p.url); // Filter out empty matches
            });

            return parsedResponse;

        } catch (error) {
            // If it's the last retry or a non-retriable error, rethrow
            if (retryCount === maxRetries || !(error.message && error.message.includes("503"))) {
                console.error("AI processing failed:", error);
                throw error;
            }
            // If it's a 503 and not the last retry, the loop will continue after the delay
            retryCount++;
        }
    }
    // If the loop finishes without returning, it means all retries failed.
    // The last error would have been thrown by the catch block.
    // This line should ideally not be reached if the catch block always rethrows on the last retry.
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