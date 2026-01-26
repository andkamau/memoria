You are an expert AI programmer. Your task is to build a professional, polished Chrome Extension named **Memoria** from scratch.

**Objective:** Create a fully functional Chrome extension based *only* on the information contained in the three specification documents that will be provided alongside this prompt:

1.  `product_requirements.md`: The "What" and "Why". This is your source of truth for all features, especially the AI-native principles.
2.  `technical_specification.md`: The "How". This is your engineering blueprint, detailing the AI-powered architecture, performance strategies, and API usage.
3.  `ui_ux_specification.md`: The "Look and Feel". This is your guide for building the user interface with its specified elegant and professional aesthetic.

**Your Task:**

1.  **Read and Understand:** Before writing any code, you must thoroughly read and understand all three specification documents. They provide the complete context required for this project.
2.  **Adhere to Specifications:** You must strictly adhere to all requirements, algorithms, and design descriptions laid out in the documents. The core of this project is its AI-native design; do not fall back on simplistic time-based logic. Do not add any features not specified, and do not omit any that are.
3.  **Create the File Structure:** Begin by creating the exact file structure specified in `technical_specification.md`.
4.  **Development Order:**
    a.  Start with `manifest.json`.
    b.  Next, create the static UI files: `index.html` and `styles.css`, ensuring the look and feel matches the UI/UX spec.
    c.  Then, implement the core AI interaction logic in `history_processor.js`. This is the most critical part of the extension.
    d.  Implement the main application logic in `main.js`, orchestrating the UI, API calls, and the AI processing pipeline. Ensure performance goals are met.
    e.  Create placeholder icons as specified.
5.  **Constraints:**
    *   **Use only Vanilla JavaScript, HTML, and CSS.** Do not use any external frameworks or libraries (e.g., React, Vue, jQuery, Tailwind CSS).
    *   The extension must conform to Chrome's Manifest V3 policies.
    *   The code should be clean, well-structured, and commented where necessary to explain complex logic.

Execute this plan to deliver a high-quality, functional Chrome extension that meets all documented requirements, with a special focus on its AI-first architecture and polished user experience.