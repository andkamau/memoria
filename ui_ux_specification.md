# UI/UX Specification: Memoria

## 1. General Design Philosophy
The user interface should be **professional, elegant, and lightweight**. The design will borrow from the aesthetic of modern AI products like Anthropic's Claude, using a soft, professional color palette and prioritizing clarity and focus. The overall feel should be calm and sophisticated.

-   **Theme:** Light theme only for V1.
-   **Typography:** Use a standard, highly-readable sans-serif font like Roboto, Arial, or the system's default UI font. Font weights should be used to create hierarchy.
-   **Color Palette:**
    -   Background: `#F9F9F7` (a very soft, slightly warm off-white)
    -   Primary Text: `#343331` (a dark, soft brown/grey)
    -   Secondary Text (e.g., timestamps, URLs): `#6B6A68` (a muted, mid-tone brown/grey)
    -   Primary Accent (links, active tabs, buttons): `#8C6F61` (a soft, elegant brown)
    -   Borders & Dividers: `#EAE9E7` (a light, subtle warm grey)
    -   Card Background: `#FFFFFF` (white, to stand out against the off-white background)

## 2. Main Layout
The interface consists of a fixed header and a main content area.

-   **Header:** Contains the main `<h1>` title, "Memoria", and the tab navigation bar.
-   **Tab Navigation:** A bar with two tabs: "Journeys" and "All History".
    -   The active tab should have its text in the accent color (`#8C6F61`) and a thick border (`3px`) of the same color along the bottom.
    -   Inactive tabs are a medium grey (`#6B6A68`).
    -   Hovering over an inactive tab should subtly change its text color to the primary text color (`#343331`).
-   **Content Area:** This area's content changes based on the selected tab. It will also contain the link to the native browser data management page.

## 3. Component Specifications

### 3.1. Card Component (`.card`)
This is the base component for displaying Journeys.
-   **Styling:** White background (`#FFFFFF`), rounded corners (`8px`), and a very subtle box shadow (`0 1px 3px rgba(0,0,0,0.05)`).
-   **Spacing:** Consistent padding (`16px`) and margin between cards (`12px`).

### 3.2. Journey Card
-   **Structure:**
    -   **Title:** `<h3>` tag, bold, primary text color (`#343331`). This title is AI-generated.
    -   **Metadata:** A line of secondary text showing key domains or topics identified by the AI.
    -   **Controls:** The list of pages within the journey should be **collapsible**. An "Expand" button or similar control will be present to show the list.
-   **Journey Step Item:**
    -   Each `<li>` should contain the page favicon, the page title (as a link styled with the accent color), and the domain name in secondary text.

### 3.3. "All History" List View
-   This is not a card-based view but a dense list (`<ul>`).
-   **List Item (`<li>`):**
    -   A single line, laid out using flexbox for alignment.
    -   **Favicon:** `16x16px`.
    -   **Time:** Timestamp (`10:45 AM`), fixed width, secondary text color.
    -   **Page Title & URL:** Page title as a primary link (accent color on hover). The domain should be shown next to it in secondary text.

### 3.4. Search and Filter Controls
-   **Search Bar:** A standard text input field (`<input type="text">`).
    -   Should have a light border (`#EAE9E7`), which turns the accent brown (`#8C6F61`) on focus.
    -   Placeholder text: "Search history..."
-   **Filter Chips:**
    -   Styled as rounded lozenges/pills.
    -   **Inactive State:** Light grey background (`#EAE9E7`), dark grey text (`#343331`).
    -   **Active State:** Accent brown background (`#8C6F61`), white text.
    -   There should be a subtle hover effect (e.g., background darkens slightly).

### 3.5. Data Management Link
-   A discrete but clear link or button should be present, likely in the header or a corner of the content area.
-   **Text:** "Manage Browser Data"
-   **Action:** Opens `chrome://settings/clearBrowserData` in a new tab.

## 4. Onboarding Modal
-   **Appearance:** A modal dialog that overlays the center of the page. It should have a light background (`#FFFFFF`), rounded corners, and a backdrop that slightly darkens the rest of the page content.
-   **Content:**
    -   **Title (`<h2>`):** "Welcome to Memoria"
    -   **Body Text (`<p>`):** "We've automatically organized your browsing history into AI-powered 'Journeys'. Explore your recent tasks and research in a whole new way."
    -   **Dismiss Button:** A prominent button with the text "Get Started", styled with the accent brown background (`#8C6F61`). Clicking this button permanently dismisses the modal. Its state should be saved in `chrome.storage.local`.