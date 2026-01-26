# Technical Specification: Memoria

## 1. Architecture Overview
This extension will be built using **Manifest V3** for the Chrome Extension platform. The architecture is designed to be AI-native, performant, and maintainable, using no external front-end libraries.

-   **UI:** The user interface will be a **Single Page Application (SPA)** contained within `index.html`.
-   **URL Override:** The extension will use the `chrome_url_overrides` manifest key to replace the native `chrome://history` page.
-   **Core Logic:** The central logic will revolve around an AI-powered processing pipeline. Raw history data will be sent to an LLM (`gemini-3-flash-preview`) for grouping and analysis.
-   **Performance:** To ensure an instantaneous load time, the initial view will be rendered with cached or minimal data, while AI processing of the full history will happen asynchronously. Techniques like lazy loading will be employed to display journey contents on demand.

## 2. File Structure
The extension will be organized into the following file structure:

```
/
|-- manifest.json
|-- index.html
|-- styles.css
|-- main.js
|-- history_processor.js
|-- /assets/
|   |-- icon16.png
|   |-- icon48.png
|   |-- icon128.png
```

-   `manifest.json`: Defines the extension's properties, permissions, and URL override.
-   `index.html`: The single HTML file for the user interface.
-   `styles.css`: Contains all CSS rules for styling the UI.
-   `main.js`: The main application script. Handles UI events, calls the history API, manages the AI processing pipeline, and renders the UI.
-   `history_processor.js`: A dedicated JavaScript module that contains the logic for interacting with the AI model and structuring the returned data.
-   `/assets/`: Contains all static assets, primarily the extension's icons.

## 3. Data Flow and AI Processing
1.  User navigates to `chrome://history`, which loads `index.html`.
2.  `main.js` is executed. It immediately renders the shell of the UI (header, tabs, etc.).
3.  `main.js` calls `chrome.history.search()` to fetch the user's history for the last 90 days.
4.  The resulting array of history items (URLs and titles) is passed to `history_processor.js`.
5.  `history_processor.js` prepares the data and sends it to the `gemini-3-flash-preview` model with a carefully crafted prompt to group items into "Journeys", assign relevant titles, and rank them by relevance.
6.  While the AI processing is in-flight, `main.js` can display a loading state or show the "All History" view by default.
7.  `history_processor.js` receives the structured JSON output from the AI model.
8.  The structured data (e.g., `{ journeys: [/*...ranked by relevance...*/] }`) is passed back to `main.js`.
9.  `main.js` receives the AI-processed data and dynamically renders the HTML for the "Journeys" view.
10. User interactions (searching, changing tabs) trigger functions in `main.js` to re-render the appropriate parts of the UI.

## 4. `manifest.json` Specification
The manifest file must contain the following key properties:
```json
{
  "manifest_version": 3,
  "name": "Memoria",
  "version": "1.0",
  "description": "An AI-powered way to explore your browsing history.",
  "permissions": [
    "history",
    "favicon"
  ],
  "chrome_url_overrides": {
    "history": "index.html"
  },
  "icons": {
    "16": "assets/icon16.png",
    "48": "assets/icon48.png",
    "128": "assets/icon128.png"
  }
}
```

## 5. Core Logic (`history_processor.js`)

### 5.1. AI-Powered Journey Grouping
This module will be responsible for the primary AI interaction.

1.  **`createJourneysFromHistory(historyItems)` function:**
    a. Takes an array of `HistoryItem` objects.
    b. Formats the `historyItems` (likely just URLs and titles) into a concise string or JSON structure suitable for an LLM prompt.
    c. Constructs a detailed prompt for the `gemini-3-flash-preview` model. The prompt will instruct the model to:
        -   Act as an expert data analyst.
        -   Group the provided list of URLs and titles into coherent "Journeys" based on semantic and thematic relationships.
        -   Generate a short, descriptive title for each Journey.
        -   Rank the Journeys in order of relevance or significance.
        -   Return the output as a clean, parseable JSON object.
    d. Sends the request to the AI model.
    e. Parses the JSON response from the model and returns the structured data to `main.js`.

## 6. Performance Strategy: Lazy Loading
-   The initial page load must be instantaneous. The UI will render its main structure immediately.
-   The "Journeys" view will initially show loading placeholders for each journey card.
-   As the AI processing completes and returns data, the journey cards will be populated with their titles and metadata.
-   The list of pages *within* each journey will not be rendered initially. They will only be rendered when the user explicitly clicks to "expand" a journey card. This avoids a massive initial DOM tree and ensures the UI remains responsive.

## 7. Chrome API Usage

-   **`chrome.history.search(query, callback)`**:
    -   `query` object should be:
        ```javascript
        {
          text: '', // An empty string fetches all history
          maxResults: 0, // 0 fetches all available results
          startTime: new Date().setDate(new Date().getDate() - 90) // 90 days ago
        }
        ```
    -   The `callback` will receive an array of `HistoryItem` objects.

-   **`chrome.tabs.create(properties)`**:
    -   Used to open the Chrome settings page.
    -   `properties` object will be `{ url: 'chrome://settings/clearBrowserData' }`.

## 8. Constraints
-   **No External Libraries:** All code must be written in vanilla JavaScript (ES6+), HTML, and CSS.
-   **Error Handling:** The application must gracefully handle potential errors from the AI model API (e.g., network issues, invalid responses) and display a user-friendly error message. It should also handle cases where the user's history is empty.