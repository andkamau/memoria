const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 8080;

// Use middleware
app.use(express.json({ limit: '5mb' })); // Increase limit for larger history payloads
app.use(cors()); // In production, you should configure this more securely

// --- PROMPT ENGINEERING ---
function createPrompt(historyItems) {
    const formattedHistory = historyItems.map(item => `{ "title": "${(item.title || "").replace(/"/g, "'")}", "url": "${item.url}" }`).join(',\n');

    return `
You are an expert data analyst and personal assistant. Your task is to analyze a user's browsing history and group related pages into coherent "Journeys". A Journey represents a focused task, research session, or a single topic of interest.

Analyze the following list of browser history items (in JSON format):
[
${formattedHistory}
]

Based on the titles and URLs, perform the following actions:
1.  Group the items into distinct Journeys. A Journey should have at least 2 related pages. Do not include unrelated pages in a journey.
2.  For each Journey, create a short, descriptive, and insightful title (e.g., "Researching 'Manifest V3'", "Planning a Trip to Lisbon", "Shopping for a New Laptop").
3.  For each Journey, include the original page objects that belong to it.
4.  Rank the Journeys in order of relevance and significance, with the most important one appearing first. Consider factors like the number of pages, diversity of domains, and inferred user intent.
5.  Return the output as a single, clean, parseable JSON object. The JSON object should have a single key, "journeys", which is an array of journey objects.

The final JSON output should look like this:
{
  "journeys": [
    {
      "title": "Example: AI Development Research",
      "relevance": 0.9,
      "pages": [
        { "title": "Gemini API Docs", "url": "https://ai.google.dev/docs" },
        { "title": "React Tutorial", "url": "https://react.dev/learn" }
      ]
    }
  ]
}

Do not include any journeys with fewer than 2 pages. Ensure the JSON is perfectly formatted.
    `;
}

// --- API ENDPOINT ---
app.post('/process-history', async (req, res) => {
    // 1. Validate Request
    if (!req.body || !Array.isArray(req.body.history) || req.body.history.length === 0) {
        return res.status(400).json({ error: 'Invalid request: "history" array is required.' });
    }

    // 2. Securely get API Key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("GEMINI_API_KEY environment variable not set.");
        return res.status(500).json({ error: 'Internal server error: API key not configured.' });
    }

    try {
        // 3. Initialize AI Client
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        // 4. Create Prompt and Call Gemini API
        const prompt = createPrompt(req.body.history);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // 5. Parse and Validate AI Response
        // The Gemini API often wraps the JSON in markdown backticks. We need to clean that.
        const cleanedText = text.replace(/^```json\n/, '').replace(/\n```$/, '');
        const jsonResponse = JSON.parse(cleanedText);

        if (!jsonResponse || !Array.isArray(jsonResponse.journeys)) {
             throw new Error("Invalid AI response format: 'journeys' array not found.");
        }

        // 6. Send successful response back to the extension
        res.status(200).json(jsonResponse);

    } catch (error) {
        console.error("Error processing history with Gemini:", error);
        res.status(500).json({ error: 'Failed to process history with the AI model.' });
    }
});

// --- SERVER START ---
// This part is for local testing. Google Cloud Functions will use the `app` object directly.
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Memoria backend listening on port ${port}`);
        console.log("To test, send a POST request to http://localhost:8080/process-history");
    });
}

// Export the app for Google Cloud Functions
exports.memoria = app;