# Product Requirements Document: Memoria

## 1. Overview
This document outlines the requirements for **Memoria**, a Chrome extension that reimagines the browser history experience. The extension will replace the native Chrome history page with a more powerful, AI-native interface, helping users rediscover past browsing sessions and understand their browsing patterns through the lens of AI-curated "Journeys".

## 2. The Core Problem
The default `chrome://history` page is a flat, chronological list of visited links. While functional for finding a specific, recently visited page, it fails when users try to:
-   Rediscover a "session" of research on a particular topic.
-   Understand the thematic connections between their browsing activities.
-   Separate browsing activity by task or intent in a meaningful way.
-   Quickly parse and manage large volumes of history without getting lost in a sea of entries.

Memoria aims to solve these problems by using AI to intelligently group and present history in a more meaningful context.

## 3. Guiding Principles: AI-Native Design
-   **AI as the Core:** This extension is fundamentally AI-native. The primary grouping and presentation logic for user history will be determined by AI inference, not by simple chronological or time-based heuristics.
-   **Relevance over Chronology:** The extension will prioritize displaying history in order of relevance to the user's inferred tasks and interests.
-   **Smart Token Usage:** While we assume ample token availability for both the system and the end-user, we will make intentional technical design decisions to be efficient with token usage, avoiding low-quality or redundant data in prompts to ensure high-quality AI output.

## 4. Key Features (Functional Requirements)

### 4.1. History Page Override
-   The extension **must** completely replace the native `chrome://history` page. When a user navigates to `chrome://history`, they will be shown the Memoria interface.

### 4.2. Tabbed Interface
The main UI will be organized into two primary views, accessible via a clear tab navigation bar:
-   **Journeys (Default View):** Shows history grouped into AI-curated browsing sessions.
-   **All History:** A filterable, chronological list of all history items.

### 4.3. "Journeys" View
-   **Definition:** A "Journey" is a collection of page visits that represent a single, focused browsing session, task, or area of interest.
-   **Grouping Logic:** The core grouping logic for journeys **must** be determined solely by AI inference, using the `gemini-3-flash-preview` model. The model will analyze URLs and page titles to identify thematic connections and group them into coherent Journeys.
-   **AI-Powered Benefits:** This view will incorporate the benefits of domain grouping by using AI to identify and highlight the key domains and sources within a journey, providing a richer contextual summary.
-   **Display & Sorting:** Journeys will be displayed as individual cards, sorted in order of **relevance**, as determined by the AI. The most relevant or prominent journey will appear first.

### 4.4. "All History" View
-   **Functionality:** This view presents a traditional, chronological list of all browsing history entries.
-   **Display:** Each entry must display the page's favicon, title, URL, and visit time.
-   **Sorting:** Entries must be sorted in reverse chronological order.

### 4.5. Search and Filtering
-   A persistent search bar must be present. The search **must** query the titles and URLs of all history items.
-   The "All History" view must include filter "chips" or buttons to narrow results by date range:
    -   Today
    -   Last 7 days
    -   Last 30 days

### 4.6. Browser Data Management
-   The extension will **not** include its own deletion functionality.
-   A prominent, clearly labeled button or link must be present on the main view that directs the user to Chrome's native tool for clearing browser data (`chrome://settings/clearBrowserData`).

## 5. Non-Functional Requirements

### 5.1. Performance
-   The extension **must** load near-instantly, providing an experience competitive with the native `chrome://history` page.
-   Intentional technical design decisions, such as lazy loading of journey details or other applicable optimization techniques, must be implemented to ensure a fast and responsive UI, even when processing a large history database.

### 5.2. First-Run Experience
-   Upon the first time a user opens the new history page, a simple, non-intrusive modal or welcome message should appear. It should briefly explain the AI-powered "Journeys" feature to orient the user.

## 6. Publication Requirements
-   The extension must include a set of professional icons in the required sizes (16x16, 48x48, 128x128).
-   The final deliverable should include placeholder text for the Chrome Web Store description and a list of required screenshots to be taken.