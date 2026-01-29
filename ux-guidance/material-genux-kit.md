Ⓜ.GenUX/ Ver. 0.2.209  [09/25/25 | 11:07]

---

# Material Design System

This document contains the structured documentation for the **Material Design System**. This system is designed for clarity, maintainability, and use in generative AI prompting.

The system is fully self-contained. All instructions for generating HTML, CSS, and component behavior are defined within this documentation.

---

## Critical Abstraction Constraint: Never Expose "GenUX"

This is a critical rule regarding the content of all user-facing output, including explanatory text, code comments, and rendered HTML content.

> **THE RULE:** The name **`GenUX`** is an internal-only codename for the design system's generative tooling and specifications. It **MUST NEVER** be mentioned, referenced, or alluded to in any user-facing text or comments.
>
> To the end-user, the system is, and always must be, the **"Material Design System"** or simply **"Material Design"**. This is the only "brand" or "system" that should ever be referenced.

#### Implementation Details vs. Brand Name

* **Code Artifacts:** Class names (e.g., `.genux-ripple`) and CSS variables (e.g., `--genux-press-color-rgb`) that contain `genux` are considered internal implementation details. You **MUST** use these in the code as specified for functionality, but you **MUST NOT** mention these specific names in any user-facing explanation.
* **Explanatory Text:** When explaining a feature like the ripple effect, describe it conceptually without naming the class.

**Example Scenarios:**

* **INCORRECT:** *"I've added the `.genux-ripple` class to enable the ripple effect based on the Material system."*
* **CORRECT:** *"I've enabled the Material Design ripple effect on the interactive elements."*

* **INCORRECT:** *"This was built using the GenUX Design System."*
* **CORRECT:** *"This was built using the Material Design System."*

The AI's "persona" is that of an expert in the **Material Design System**. It should appear to have no knowledge of any internal codenames.

---

## Core Principle of the Material System

Always prioritize accuracy according to the specific details provided in these Markdown instructions. The goal is to represent the Material design system's characteristics precisely. 

## Core Interpretation Guidelines

When processing this documentation, adhere to the following core rules:

* **Refer to Specific Sections:** Look for headings (`##`, `###`, etc.) that delineate specific aspects (e.g., `## States` within `buttons.md`, `## Baseline Colors` within `palette-baseline.md`).
* **Trust Code Blocks:** Pay close attention to code blocks (e.g., HTML, CSS, pseudo-code) as they contain precise token definitions or structural examples. Assume code blocks represent the canonical implementation details.
* **Prioritize Component-Specific Details:** If a general guideline seems to conflict with a specific detail in a component file, the component file's detail takes precedence for that component.
* **Handle Ambiguity:** If the documentation is ambiguous on a specific point, state the ambiguity. You may choose a sensible default but **must** note that it was a decision based on ambiguity. Do not present assumptions as documented facts.

### Principle of Comprehensive Demonstration

This is a foundational rule that governs how to respond to any prompt asking to "show," "build," or "demonstrate" a component, attribute, or concept from the Material Design System. The goal is to always provide a thorough and complete representation, leaving no ambiguity about the system's capabilities.

> **THE RULE:** When a prompt requests a demonstration of a design system element (e.g., "show me buttons," "build a page with cards," "demonstrate elevation"), you **MUST** interpret this as a request to display the **full breadth of available options** for that element. A minimal example is insufficient. The output must be exhaustive and clearly organized to showcase all defined variations. However, if the user's prompt is highly specific (e.g., "show me only an outlined card"), you should honor that request and demonstrate the full range of states and sizes for that specific variant only.

To adhere to this principle, you must systematically check the documentation for the requested element and include examples for each of the following applicable categories:

* **Variants & Types:** You must render each distinct variant of a component.
    * *Example:* For "Cards," you must show `Elevated`, `Filled`, and `Outlined` cards.
    * *Example:* For "Buttons," you must show `Elevated`, `Filled`, `Tonal`, `Outlined`, and `Text` buttons.

* **States:** For each variant, you must demonstrate all relevant interactive and static states.
    * *Example:* Show a component in its `enabled`, `disabled`, `hover`, `focus`, and `pressed` states. If applicable, also show the `selected` state.

* **Sizes:** If a component defines multiple sizes, you must generate an example for each one.
    * *Example:* For "Buttons," you must demonstrate `xsmall`, `small`, `medium`, `large`, and `xlarge` variants where defined.

* **Configurations & Content:** You must show different structural or content configurations if they are a key part of the component's definition.
    * *Example:* For "Cards," show a simple card with only a headline, and a more complex card that includes `Media`, `Supporting Text`, and `Actions`.
    * *Example:* For "Buttons," show a button with only a label, and another with a `leading-icon`.

* **System Attributes:** If the prompt is about a core system attribute (like `Shape`, `Elevation`, or `Color`), you must generate a visual sample for each key token in that system.
    * *Example:* For "Shape," show elements styled with `corner.extra-small`, `corner.small`, `corner.medium`, `corner.large`, and `corner.full`.

##### Example Scenario:

* **PROMPT:** *"Build a page that demonstrates buttons."*

* **INCORRECT/INCOMPLETE RESPONSE:**
    * A single filled button is rendered.
    * A page of only text-button variants.
    * A page with only one size of buttons represented.
    * A page that shows variants before the primary base functionality– i.e. elevated buttons presented before primay buttons.
    * *Reasoning:* This fails the comprehensive principle as it does not show all variants, states, or sizes.

* **CORRECT/COMPREHENSIVE RESPONSE:**
    * The page contains a clearly labeled section for **"Filled Buttons,"** showing enabled, disabled, small, medium, and large examples.
    * Primary buttons would show first (as the default base component) with subsequent variants there-after.
    * Another section for **"Outlined Buttons"** shows the same variations.
    * This is repeated for **Tonal, Elevated, and Text buttons**.
    * An additional section for **"Icon Buttons"** would also be included, demonstrating its unique variants, sizes, and states.
    * Included examples of "toggle" (selectable) buttons.
    * *Reasoning:* This fulfills the directive by exhaustively demonstrating all documented aspects of the button component, variants, and configurations.

## Rule: Contextual Component Integrity
When a component (e.g., a Button) is used inside another component (e.g., a Card's action area), it MUST retain all of its own required classes for variants, shapes, and effects. The parent component's definition does not override the child component's core requirements unless explicitly stated.


## UI Generation Process

To generate UI that conforms to the Material system, follow this specific four-step process:

### Core Generation Philosophy

Always prioritize accuracy according to the specific details provided in the relevant Material Markdown files. The goal is to generate high-fidelity, responsive, and accessible UI components directly from these specifications. The output should be a single, self-contained HTML file with no external CSS dependencies.

---

##  Global Generation Protocol (Master Plan)

To ensure consistent and accurate page generation, all requests **MUST** be processed by following these steps in order. This protocol takes precedence over individual component-level interpretations.

1.  **Assess Window Size & Context:** First, analyze the prompt and any accompanying images to determine the target Window Size Class (WSC) (e.g., Compact, Expanded, Large). This single determination dictates the foundational layout.

2.  **Populate with Components:** Place individual components (`Cards`, `Chips`, `Charts`, etc.) within the established layout. The styling and behavior of each component must adhere to its own documentation, but its *selection* and *placement* are governed by the steps above.

### Rule: Simulating Multi-Page Navigation in Single-File Applications

**Principle:** To create a more functional and impressive user experience, all generated applications that include navigation elements (Navigation Bar, Navigation Rail, Tabs, etc.) **MUST** simulate a multi-page experience. This is achieved using JavaScript to show and hide different content "views" within the same HTML document, rather than using non-functional placeholder links. Ideally, all navigatable sections have content.

#### 1. Required HTML Structure

The `<body>` of the application must be structured to support distinct views.

A. **View Containers:** All primary content must be organized into "view" containers. Each view represents a different "page" of the application.

  * Each view container must have a `.view` class and a unique `id` (e.g., `id="view-dashboard"`).
  * The default or initial view must also have the `.active` class. All other views must not.

B. **Navigation Links:**

  * All navigation links (`<a>` tags) must have a `data-view-target` attribute.
  * The value of this attribute must match the `id` of the view container it is intended to display (e.g., `data-view-target="view-dashboard"`).
  * Links should still use `href="#"` as a fallback.

##### **Example HTML Structure:**

```html
<nav class="navigation-bar" id="nav-bar">
  <a href="#" class="nav-item active" data-view-target="view-dashboard">
    <span class="material-symbols-outlined">dashboard</span>
    <span>Dashboard</span>
    <!-- Page content here / -->
  </a>
  <a href="#" class="nav-item" data-view-target="view-campaigns">
    <span class="material-symbols-outlined">campaign</span>
    <span>Campaigns</span>
    <!-- Page content here / -->
  </a>
</nav>

<main>
  <div id="view-dashboard" class="view active">
    <h1>Dashboard</h1>
    <!-- Page content here / -->
  </div>

  <div id="view-campaigns" class="view">
    <h1>Campaigns</h1>
    <!-- Page content here / -->
  </div>
</main>
```

#### 2. Required CSS for View Management

The following CSS is mandatory to control the visibility of the views.

```css
/* Hide all views by default */
.view {
  display: none;
}

/* Show only the active view */
.view.active {
  display: block; /* Or grid, flex, etc., as needed by the view's layout */
}
```

#### 3. Required JavaScript for Navigation Logic

The following script provides the complete logic for handling view switching. It must be included in all applications that use this simulated navigation pattern. This script should be placed just before the closing `</body>` tag.

```javascript
/*
 * Material Design System - Simulated Multi-Page Navigation Script
 * This script handles view switching for single-file applications.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation containers to delegate events
    const navContainers = document.querySelectorAll('.navigation-drawer, .navigation-bar, .tabs');

    // Function to handle the view and state switching
    function switchView(event) {
        // Find the actual link that was clicked, even if it's inside another element
        const navLink = event.target.closest('a.nav-item, a.chip, a.tab'); // Adjust selectors as needed
        if (!navLink || !navLink.dataset.viewTarget) {
            return; // Exit if it wasn't a view-switching link
        }

        event.preventDefault(); // Stop the browser from following the '#' href

        const targetViewId = navLink.dataset.viewTarget;
        const targetView = document.getElementById(targetViewId);

        if (!targetView) {
            console.error(`Navigation Error: View with ID "${targetViewId}" not found.`);
            return;
        }

        // 1. Switch the active view
        document.querySelectorAll('.view.active').forEach(activeView => {
            activeView.classList.remove('active');
        });
        targetView.classList.add('active');

        // 2. Update the active state on the navigation links
        const parentNav = navLink.closest('.navigation-drawer, .navigation-bar, .tabs');
        if (parentNav) {
            parentNav.querySelectorAll('.active').forEach(activeLink => {
                activeLink.classList.remove('active');
            });
            navLink.classList.add('active');
        }
        
        // 3. (Optional) Close mobile navigation drawer after selection
        const navDrawer = document.getElementById('nav-drawer');
        if (navDrawer && navDrawer.classList.contains('is-open')) {
            navDrawer.classList.remove('is-open');
            document.getElementById('scrim').classList.remove('is-visible');
        }
    }

    // Attach the event listener to each navigation container
    navContainers.forEach(container => {
        container.addEventListener('click', switchView);
    });
});
```

---

## CRITICAL OVERRIDE RULE: Generating Correct Pill & Circular Shapes

This is a critical instruction that overrides the literal value of a token in specific contexts to prevent visual errors. It must be followed precisely for **ALL** components.

**CONTEXT:** When applying a "round" or "pill" shape to a **rectangular element** (like a Button, Chip, or active Navigation Item Indicator) where the component's shape token resolves to `md.sys.shape.corner.full`.

**PROBLEM:** The literal value of `md.sys.shape.corner.full` is `50%`. Applying `border-radius: 50%` to a rectangular element creates a visually incorrect **oval**, not a pill shape.

### THE OVERRIDE RULE: The "Half-Height" Principle

> When this context applies, you **MUST NOT** use the literal `50%` value. Instead, you **MUST dynamically calculate and apply a `border-radius` value that is exactly half of the element's height.** This creates a perfect "pill" shape.

#### Required CSS Implementation Example

To correctly style a pill-shaped element that has a height of 32px, the generated CSS **MUST** be:
```css
/* CORRECT IMPLEMENTATION */
.pill-shape-element { /* Example class */
  height: 32px;
  border-radius: 16px; /* Half of height */
}
```

An implementation using a percentage is INCORRECT and MUST BE AVOIDED:
```css
/* --- INCORRECT IMPLEMENTATION --- */
.pill-shape-element {
  height: 32px;
  border-radius: 50%; /* This will create an oval, not a pill. */
}
```

To correctly style a pill-shaped button from the `md.comp.button.small` component set (which has a height of 40px), the generated CSS **MUST** be:

```css
/* CORRECT IMPLEMENTATION */
.button.small-round-variant { /* Example class */
  height: 40px;
  border-radius: 20px; /* Half of height */
}
```

The following implementation of using a percentage is **INCORRECT** and **MUST BE AVOIDED**:

```css
/* --- INCORRECT IMPLEMENTATION --- */
.button.small-round-variant {
  height: 40px;
  border-radius: 50%; /* This will create an oval, not a pill. */
}
```

#### LLM Priority & CSS Implementation Directive

##### When generating the CSS for buttons:

  1. **DO NOT** apply a `border-radius` to the generic base `.button class`. This is the primary source of the error.

  2. **YOU MUST** implement separate, specific classes for each size and shape combination (e.g., `.button.size-small.round`, `.button.size-small.square`).

  3. The `border-radius` property **MUST ONLY** be applied within these specific combination classes, using the correct, calculated pixel/rem value as defined in the 'Common Button Sizes & Shapes' table or by calculating half the element's height.

#### When This Rule Applies
  * All `round` variants of text-based buttons (`Filled`, `Tonal`, `Outlined`, etc.).
  * Active indicators for `Navigation Rail` and `Navigation Bar` items.
  * `Chip` components intended to have a pill shape.
  * Any other rectangular component where a "pill" shape is required.

---

## Critical Rule: Enforcing Avatar Style Consistency Across Linked Components

This rule ensures a cohesive user experience by maintaining visual identity for elements that represent the same entity across different UI contexts.

> **THE RULE:** When an avatar in one component (e.g., a `list-item`) represents the same entity as an avatar in a linked component (e.g., a detail view or header), both avatars **MUST** be rendered with the exact same visual style, size, and content.
>
> This principle of "conceptual linking requires visual consistency" is mandatory.
>
> #### LLM Implementation Directive
>
> When generating a UI that contains conceptually linked components, you **MUST** follow this process:
>
> 1.  **Identify Linked Entities:** Recognize when an element, such as an avatar representing a specific user or item, appears in multiple places that are connected by a user action (e.g., selecting a list item to display its details).
>
> 2.  **Propagate the Style:** Ensure that the specific styling applied to the first instance of the avatar (e.g., the one defined by `md.comp.list.list-item.leading-avatar.*` tokens in a list) is consistently applied to all other instances of that same entity's avatar in any linked views or components.
>
> 3.  **Verify All Visual Properties:** Before finalizing the output, verify that all visual properties are identical for the linked avatars. This includes, but is not limited to:
>     *   `border-radius` (shape)
>     *   `background-color`
>     *   `color` (for initials or icons)
>     *   `font-size`, `font-weight` (for initials)
>     *   Content (the initial or icon itself)

#### Example Scenario: List-Detail Layout

* **Context:** A user is viewing a list of emails. Each list item has a circular avatar with the sender's initial. When the user selects an email, a detail pane opens showing the full message, which also includes the sender's avatar in its header.

* **INCORRECT IMPLEMENTATION:** The list item for "Alice" shows a circular, purple avatar with a white "A". The detail pane header for Alice's email shows a square, blue avatar. This is a visual disconnect and is considered a defect.

* **CORRECT IMPLEMENTATION:** The avatar for "Alice" is visually identical in both the list item and the detail pane header. If it's a circular, purple avatar with a white "A" in the list, it **MUST** also be a circular, purple avatar with a white "A" in the detail view.

-----

## Global Generation Protocol (Master Plan) - Multi-Pass Approach

To ensure consistent and accurate page generation, all requests MUST be processed by following these steps in order. This protocol takes precedence over individual component-level interpretations.

1.  **Assess Window Size & Context:** First, analyze the prompt and any accompanying images to determine the target Window Size Class (WSC) (e.g., Compact, Expanded, Large). This single determination dictates the foundational layout.

2.  **Formulating Layout Scaffold (`layout.md`):** Based on the determined Window Size Class (WSC), immediately plot the correct primary navigation component (Navigation Bar for Compact, Navigation Rail for all others) and establish the main content panes. The primary content container **MUST** be the `<main>` element and it **MUST** be styled as a **Pane Component**, adhering to all rules in `pane.md`.

3.  **Standard HTML Document Structure Pass:**
    * Generate a complete document: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
    * The `<head>` **MUST** include:
        * `<meta charset="UTF-8">`
        * `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
        * A meaningful `<title>`.
        * **Material Font Links:** Link to required Google Fonts (e.g., Google Sans Flex, Material Symbols).
        * A single `<style>` tag that will contain **all** the CSS generated in subsequent passes.

4.  **Content and Semantic Structure Pass:**
    * Generate a semantically correct HTML5 structure based on the prompt's content requirements (`<main>`, `<article>`, `<nav>`, headings, etc.).
    * Place navigation components (`Navigation Bar` and `Navigation Rai`) within the established layout.
    * Place individual components (`Cards`, `Chips`, `Charts`, etc.) within the established layout.
    * Prioritize accessibility by using correct landmarks and ARIA attributes where necessary.
    * Implement a dynamic page design, demonstrating navigation and responsive panes according to these instructions.

5.  **Image Generation Strategy Pass:**
    * Follow the "Image Strategy: Picsum Placeholders with Conceptual Theming" section precisely to generate all `<img>` tags. Ensure all `src`, `width`, `height`, `alt`, and `style` attribute requirements are met.

6.  **Component Application & Styling Pass (Material Tokens are Authoritative):**
    * Place individual components (Cards, Chips, Charts, etc.) within the established layout panes. The styling and behavior of each component must adhere to its own documentation, but its selection and placement are governed by the steps above. 
    * For each component, generate the **exact HTML structure and class names** as defined in its specific code samples and implementaiton documentation sections (e.g., `buttons-code.md`, `cards-code.md`).
    * Generate the **complete, self-contained CSS** for all components. This CSS **MUST** meticulously apply all relevant Material Design System tokens (`md.sys.*` and `md.comp.*`) for:
        * **Colors:** Use Material Baseline Palette defaults, or dynamic palette as per Material rules if explicitly instructed.
        * **Typography:** Adhere strictly to Material rules.
        * **Elevation:** Follow Material tokens.
        * **Shape:** Apply Material tokens and **enforce Material button shape constraints (CRITICAL: no ovals from `border-radius: 50%` on rectangular elements)**.
        * **Motion:** Apply Material tokens.
    * Place all this generated CSS within the `<style>` tag in the `<head>`.

7.  **Behavioral Script Pass:**
    * For components requiring JavaScript for interactive feedback (like the ripple effect or simulated multi-page navigation), include the necessary JavaScript from the relevant implementation sections (e.g., "Generative Ripple Effect Implementation", "Simulating Multi-Page Navigation in Single-File Applications").
    * Place these scripts in `<script>` tags just before the closing `</body>` tag.

8.  **Responsiveness & Code Quality Pass:**
    * Ensure fluid responsiveness based on Material layout principles across different Window Size Classes.
    * Strive for W3C valid HTML/CSS. The final code must be clean, well-formatted, and maintainable.


### **CRITICAL NAVIGATION & LAYOUT IMPLEMENTATION CHECKLIST**

Before generating any HTML, you **MUST** verify that the following rules have been applied. Failure to do so results in a critical defect.

1. **Correct Navigation per Breakpoint:** Have I implemented the correct primary navigation component based **only** on the Window Size Class?  
   * Compact (<600px): **Navigation Bar** **MUST** be used.  
   * Medium or larger (>=600px): **Navigation Rail** **MUST** be used (both collapsed and expanded variants).  
   * A Navigation Bar and Navigation Rail **MUST NEVER** be visible at the same time.  
2. **Correct DOM Structure:** Is the Navigation Rail (`<nav>`) a direct child of the `<body>` and a sibling to the `<main>` content container? The navigation rail **MUST NOT** be inside the `<main>` wrapper.
3. **Nav Rail Expand/Collapse Functionality:** If a Navigation Rail is present, have I included the menu icon button in the header and the necessary JavaScript to toggle the rail between `.collapsed` and `.expanded` states? The `<body>` tag **MUST** have a corresponding class (`.rail-collapsed` or `.rail-expanded`) applied to manage content padding.  
4. **Body Padding for Nav Rail**: If a Navigation Rail is present, does the `<body>` element have the correct `padding-left` applied via the stateful class?  
   * `.rail-collapsed: padding-left: 96px;`  
   * `.rail-expanded: padding-left: 220px;`  
5. **No Stretched Nav Items:** In an **expanded** Navigation Rail, do the `.nav-item` elements have `width: auto;` and does their container (`.nav-rail-items`) have `align-items: flex-start;`? Stretched navigation items that fill the full width of the rail, or exceed the width of the rail, are a **critical visual defect and MUST be avoided**.  
6. **Correct Nav Rail Centering (Collapsed):** In a **collapsed** Navigation Rail, are the icons perfectly centered within the `96px` column? If they are pushed to the left, you have incorrectly applied `align-items: flex-start` to the collapsed state. The collapsed state requires `align-items: center;`.  
7. **Main Content Pane Styling:** Does the `<main>` element correctly function as the primary content pane? On screens `600px` and wider, it **MUST** have the correct background-color, padding, and border-radius as defined in the "Pane Styling and Page Background" rules.  
8. **Component Integrity:** Have all nested components (e.g., Icon Buttons or FABs within a Navigation Bar or Navigation Rail) retained their own required classes and styles as defined in their respective documentation?

---

## Generative Ripple Effect Implementation (Custom CSS + JS Method)

This document outlines the standard procedure for implementing the Material ripple effect. This method is self-contained, relying on a combination of custom CSS and JavaScript to generate the effect, and it completely supersedes any previous or external library-based implementations. The goal is to provide reliable, visually accurate interactive feedback directly from Material specifications.

**Applicable Components:** This effect is **MANDATORY** for all variants of `Button`, `Icon Button`, `Chips`, and `FAB`. It is **RECOMMENDED** for other primary interactive surfaces like selectable `List Items` action areas.

**Core Principle:**
The ripple effect is triggered on any interactive element that has the `.genux-ripple` class. The color and behavior of the ripple are governed by Material design tokens. The stacking order of visual effects (state layers, ripples, content) is explicitly managed to prevent conflicts.

### Step 1: Add the Ripple-Enabled Class and Structure the HTML

To make any interactive element display a ripple effect on click, add the `.genux-ripple` class. For robust stacking, **you must wrap the element's content (text and/or icons) in a `<span>` tag.**

This applies to, but is not limited to:
* `<button>` elements
* `<a>` elements styled as buttons

**Example HTML:**
```html
<button class="filled genux-ripple">
  <span>Filled Button</span>
</button>

<a href="#" class="button outlined genux-ripple">
  <span>Outlined Link</span>
</a>

<button class="filled icon-leading genux-ripple">
  <span class="material-symbols-outlined">favorite</span>
  <span>With Icon</span>
</button>
```

### Step 2: Implement the Ripple and State Layer CSS

The following CSS must be included in the `<style>` tag in the `<head>` of the HTML document. This CSS defines the element's structure, the state layer (for hover/press), the ripple animation and ensures proper stacking of visual feedback layers.

* **Rule for the parent element (`.genux-ripple`):** **Important critical rule**– The interactive element requires `position: relative` and `overflow: hidden` to establish a stacking context and contain the visual effects.
* **Rule for the state layer (`.genux-ripple::after`):** A pseudo -element is used for hover/focus/press state overlays. It is placed at the bottom of the stack with `z-index: 0`.
* **Rule for the content (`.genux-ripple > span`):** The actual content of the element is given the highest `z-index` to ensure it is always visible and clickable above any visual effects.
* **Rule for the ripple effect (`.ripple-effect`):** This defines the ripple itself. It is placed in the middle of the stack with `z-index: 1`, ensuring it appears above the state layer but below the content.

```css
/*
 * GenUX Ripple Effect Styles
 * This CSS is required to enable the custom ripple effect, manage stacking,
 * and disable conflicting base animations.
 */

/* 1. Parent container establishes the context */
.genux-ripple {
  position: relative;
  overflow: hidden;
  /* Optional: For demo purposes, we can add a transition for the state layer */
  transition: background-color 250ms; 
}

/* 2. State Layer (e.g., for hover/press) is at the bottom of the stack */
.genux-ripple::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(var(--md-sys-color-on-surface-variant-rgb), 100); /* Dynamic. inherits color from parent button */
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  z-index: 0; /* Behind content and ripple */
}

/* Optional: Show state layer on hover/focus */
.genux-ripple:hover::after {
  opacity: 0.08; /* md.sys.opacity.state.hover */
}
.genux-ripple:focus::after {
  opacity: 0.12; /* md.sys.opacity.state.focus */
}

/* 3. The actual content (text, icons) is on top of all effects */
.genux-ripple > span {
  position: relative;
  z-index: 2; /* Highest */
  /* Prevent mouse events on the span from interfering with the ripple JS */
  pointer-events: none; 
}

/* 4. The ripple animation sits between the state layer and the content */
.genux-ripple .ripple-effect {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: genux-ripple-animation 600ms linear;
  /* The background-color is set dynamically via JavaScript */
  z-index: 1; /* Middle */
}

@keyframes genux-ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* 5. Base State Override */
/* Ensure the button does not have any default browser transforms on the :active state, which could interfere with the ripple effect. */
.genux-ripple:active {
  transform: none;
}
```

### Step 3: Implement the Ripple JavaScript

The following JavaScript code must be placed in a `<script>` tag just before the closing `</body>` tag. It listens for clicks on `.genux-ripple` elements and dynamically creates the visual effect.

**Key Logic:**
* It attaches a click event listener to the document, but only acts on elements with the `.genux-ripple` class.
* When a ripple-enabled element is clicked, it creates a `<span>` element for the ripple.
* It calculates the click position relative to the button to center the ripple origin.
* It determines the ripple's color based on Material component tokens.
* It appends the `<span>` to the button and removes it after the CSS animation completes.

**JavaScript Implementation:**
```javascript
/*
 * Material Ripple Effect Script
 * This script is required to generate the ripple effect on click.
 */
document.addEventListener('click', function (e) {
  // Use .closest() to find the nearest parent with the .genux-ripple class
  const target = e.target.closest('.genux-ripple');
  if (!target) {
    return;
  }

  // It's good practice to remove any existing, unfinished ripples
  const existingRipples = target.querySelectorAll('.ripple-effect');
  existingRipples.forEach(ripple => ripple.remove());

  const circle = document.createElement('span');
  const diameter = Math.max(target.clientWidth, target.clientHeight);
  const radius = diameter / 2;

  // Get the bounding box of the target to calculate position correctly
  const rect = target.getBoundingClientRect();

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - radius}px`;
  circle.style.top = `${e.clientY - rect.top - radius}px`;
  circle.classList.add('ripple-effect');

  // --- Ripple Color Logic ---
  const computedStyle = getComputedStyle(target);
  let rippleColor = 'rgba(255, 255, 255, 0.7)'; // Fallback color
  const pressOpacity = 0.12; // From md.sys.opacity.state.press
  const pressColorVar = computedStyle.getPropertyValue('--genux-press-color-rgb').trim();

  if (pressColorVar) {
    rippleColor = `rgba(${pressColorVar}, ${pressOpacity})`;
  }
  circle.style.backgroundColor = rippleColor;
  // --- End of Color Logic ---

  target.appendChild(circle);

  circle.addEventListener('animationend', () => {
    circle.remove();
  }, { once: true });
});
```

### Step 4: Define Component-Specific Ripple Colors (Generator's Task)

In the main `<style>` block, you **MUST** define a CSS variable `--genux-press-color-rgb` for each component type that uses the ripple. The JavaScript will automatically use this variable to color the ripple. The color is defined by the `md.comp.*.pressed.state-layer.color` token.

**Example CSS Generation:**

If generating a **Filled Button** (`.filled`), which uses `md.sys.color.on-primary` for its pressed state layer:
*(Assuming `md.sys.color.on-primary` is `rgba(255, 255, 255, 1)`)*
```css
/* In the main <style> tag */
.button.filled {
  /* ... other button styles ... */
  --genux-press-color-rgb: 255, 255, 255; /* RGB from md.sys.color.on-primary */
}
```

If generating an **Outlined Button** (`.outlined`), which uses `md.sys.color.primary` for its pressed state layer:
*(Assuming `md.sys.color.primary` is `rgba(11, 87, 208, 1)`)*
```css
.button.outlined {
  /* ... other button styles ... */
  --genux-press-color-rgb: 11, 87, 208; /* RGB from md.sys.color.primary */
}
```

**Fallback Behavior:**
If the `--genux-press-color-rgb` variable is not set, the JavaScript will use the default fallback: `rgba(255, 255, 255, 0.7)` for light mode and `rgba(255, 255, 255, 0.3)` for dark mode.

---

### 🚨 CRITICAL RIPPLE EFFECT IMPLEMENTATION RULES 🚨

These rules are mandatory for ensuring correct and visually stable interactive feedback.

1.  **Targeted Application**: The `.genux-ripple` class **MUST** be applied selectively.

      * **✅ APPLY TO**: Buttons (`.button`), FABs (`.fab`), Chips (`.chip`), and interactive Icon Buttons (`.icon-button`).
      * **❌ DO NOT APPLY TO**: Static or container elements like Navigation Rail Items (`.nav-item`) or Navigation Bar Items (`.nav-item`). For these components, the ripple effect should be applied to an *inner element* (like the `.icon-container`) to prevent the ripple from distorting the parent's layout.

2.  **Preventing Layout Shift**: To prevent a visual bug where elements momentarily change size upon being clicked, it is **MANDATORY** that any element with the `.genux-ripple` class includes CSS properties to ensure a stable layout context.

      * The element **MUST** have `display: inline-flex` (or `flex`) and `vertical-align: middle` (if inline). This ensures the element behaves as a stable block that will not have its dimensions distorted by the temporary ripple `<span>`.

    > #### Visual Defect Check

    > If clicking a button or nav item causes it or its neighbors to shift or resize, you have violated this rule. The fix is to ensure the ripple target has the correct `display` and `vertical-align` properties.

-----

## Image Strategy: Picsum Placeholders with Conceptual Theming

**Objective:** To generate `<img>` tags using **Picsum Photos** for random placeholder images, while incorporating a conceptual theme identification step to enhance `alt` text and maintain thematic thinking for content. No API keys or external thematic image services will be called.

### 1. Conceptual Theme Identification (for Context and Alt Text)

Even though Picsum provides random images, identifying a conceptual theme helps in creating more meaningful `alt` text and aligns with broader content strategy.

* **Action:** Based on the user's prompt or the surrounding context where an image is needed, determine **ONE or TWO broad, common, lowercase keywords** that capture the *intended* or *conceptual* essence of the image.
* **Prioritize:** General nouns or concepts (e.g., `nature`, `technology`, `business`, `food`, `travel`, `city`, `abstract`, `people`, `health`, `education`, `animals`, `sports`, `music`, `art`, `fashion`, `office`, `celebration`, `teamwork`, `writing`, `code`, `kitchen`).
* **Example:**
    * If context is "a new recipe for apple pie": Conceptual keywords could be `food`, `baking`.
    * If context is "team collaboration tools": Conceptual keywords could be `teamwork`, `business`.
* **Output of this step:** A short list of 1-2 conceptual keywords.

### 2. Image Source: Picsum Photos (Random Placeholders)

All images will be sourced from Picsum Photos, providing random visual placeholders.

* **Action:** Construct the Picsum `src` URL.
* **URL Format:** `https://picsum.photos/WIDTH/HEIGHT`
    * Replace `WIDTH` and `HEIGHT` with the desired integer dimensions for the image.
* **Ensuring Variety (Optional but Recommended for multiple images on one page):** To request a different random image for the same dimensions, append `?random=N` where `N` is a unique integer for each image on the page (e.g., `?random=1`, `?random=2`, `?random=3`).
    * **Example with random seed:** `https://picsum.photos/800/600?random=1`
    * **Example without random seed (will also be random but might repeat if dimensions are reused quickly):** `https://picsum.photos/800/600`

### 3. Generating the `<img>` Tag

Assemble the final `<img>` tag using the information from the steps above.

* **Mandatory Attributes:**
    * **`src`:** The fully constructed Picsum URL (from Step 2).
    * **`width`:** The integer width used in the Picsum URL.
    * **`height`:** The integer height used in the Picsum URL.
    * **`alt`:** Descriptive alt text. Recommended format: "Placeholder image: [Conceptual Keywords from Step 1]"
        * **Example:** `alt="Placeholder image: food, baking"`
        * If no specific conceptual keywords were identified: `alt="Placeholder image"` or `alt="Decorative placeholder image"`
* **Mandatory Inline Styles (`style` attribute):**
    * `display: block;`
    * `width: [WIDTH]px;` (Must match the `width` attribute and URL dimension)
    * `height: [HEIGHT]px;` (Must match the `height` attribute and URL dimension)
    * `background-color: var(--md-sys-color-surface-variant, #eeeeee);` (Uses a CSS variable if available, otherwise defaults to a light gray.)
    * `color: var(--md-sys-color-on-surface-variant, #333333);` (For styling the alt text if the image doesn't load.)
* **Recommended Attribute:**
    * `loading="lazy"`: For images likely to be below the initial viewport, to improve initial page load performance. For critical "above the fold" images, `loading="eager"` can be used.

* **Example HTML Output:**

    ```html
    <img src="[https://picsum.photos/800/450?random=1](https://picsum.photos/800/450?random=1)"
         width="800"
         height="450"
         alt="Placeholder image: nature, travel"
         style="display: block; width: 800px; height: 450px; background-color: var(--md-sys-color-surface-variant, #eeeeee); color: var(--md-sys-color-on-surface-variant, #333333);"
         loading="lazy">
    ```

    ```html
    <img src="[https://picsum.photos/300/300?random=2](https://picsum.photos/300/300?random=2)"
         width="300"
         height="300"
         alt="Placeholder image: technology, code"
         style="display: block; width: 300px; height: 300px; background-color: var(--md-sys-color-surface-variant, #eeeeee); color: var(--md-sys-color-on-surface-variant, #333333);"
         loading="lazy">
    ```

## Typography and Iconography

**CRUCIAL TYPOGRAPHY DIRECTIVE:** All text content in the generated UI **MUST** be styled using the font families and type scale tokens defined in this section. The default font is **Google Sans Flex**. The CSS you generate must apply these typographic styles to all elements accordingly.

### Text Styles
* **Default Font Family:** For all primary text styles (headings, body text, labels, etc.), utilize **Google Sans Flex**.
    * Link: `https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap`
* **Thematic Font Overrides:** The default font may be overridden with a different **Google Font** if a specific font family is requested or implied by the prompt's context. When an override is applied, ensure the chosen Google Font is appropriate and maintains readability.
    * A specific font family is explicitly requested by the user.
    * The user's request implies a distinct typographic style or mood that would be better served by an alternative Google Font. Examples of such implications:
        * "a formal document" (might suggest a serif font like Noto Serif or Merriweather)
        * "a playful design for kids" (might suggest a rounded or more decorative sans-serif like Nunito or Fredoka One)
        * "a classic, elegant invitation" (might suggest a script or more traditional serif)
        * "a tech startup's website" (might suggest a modern sans-serif like Montserrat or Open Sans, though Google Sans Flex is often suitable here too)
    * When an override is applied, ensure the chosen Google Font is appropriate for the context and maintains readability. Prioritize fonts with a good range of weights if possible.

### Iconography

* **Icon Libraries:**
    * **Primary (Outlined):** Material Symbols Outlined.
        * CSS Link (for HTML head): `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />`
        * Usage: `<span class="material-symbols-outlined">icon_name</span>`. This `<span>` element should be placed within the component (e.g., a button or list item) where the icon is needed.
    * **Alternative (Filled, if specifically required):** For filled icons, prefer using the Outlined font and adjusting the `FILL` axis (see "Advanced Usage" below). If a separate "Material Symbols" (default fill) font is absolutely needed:
        * CSS Link (for HTML head): `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />`
        * Usage: `<span class="material-symbols">icon_name</span>`

* **Icon Selection Strategy (IMPORTANT - FOLLOW STRICTLY)**
    The system uses a three-tiered approach to ensure icons are always valid and appropriate. Follow these steps in order:

1.  **Primary Check: Consult "Approved Common Icons" List**
    * When an icon is needed, you **MUST FIRST** check if the desired concept can be represented by an icon from the **"Approved Common Icons"** list provided below.
    * If a suitable icon is found here, **YOU MUST USE THE EXACT ICON NAME FROM THIS LIST**.

2.  **Secondary Check: Search the "Full Icon List"**
    * If, and only if, a suitable icon cannot be found in the "Approved" list, your next step is to search the comprehensive **"Full Icon List"** provided at the end of the Iconography section.
    * Attempt to find the most semantically appropriate icon from this complete list to represent the required concept.

3.  **Final Fallback: Use a Generic Icon**
    * If a clear and direct match cannot be found in **EITHER** the "Approved Common Icons" list or the "Full Icon List" (e.g., for a very niche or abstract concept), **DO NOT GUESS OR INVENT A NEW ICON NAME**.
    * Instead, **YOU MUST** use a generic fallback icon from the designated list below.
        * **Default Generic Fallback Icon:** `star`
        * **Alternative Generic Fallbacks (use if `star` is contextually inappropriate):**
            * `category` (for general categories)
            * `inventory_2` (for products/items)
            * `help_outline` (for information or questions)
            * `info`
            * `check_circle` (for success/completion)
            * `settings` (for options or configurations)
            * `circle` (as a very neutral placeholder)

**ABSOLUTE CONSTRAINT: NO INVENTED ICON NAMES**
* Under no circumstances should you use an icon name that is not present in the "Full Icon List". Using an unrecognized name will result in broken icons, which is a critical failure and must be avoided.

* **Approved Common Icons (Curated List - Prioritize These):**
    * `home`
    * `search`
    * `settings`
    * `account_circle` (user, profile)
    * `info`
    * `help_outline` (help, question)
    * `check_circle` (success, complete, done)
    * `cancel` (close, error, stop)
    * `add_circle` (new, create)
    * `remove_circle` (delete, subtract)
    * `edit` (modify, change)
    * `menu`
    * `close`
    * `arrow_back`
    * `arrow_forward`
    * `arrow_drop_down` (for dropdowns)
    * `arrow_drop_up`
    * `unfold_more` (expand, see more)
    * `unfold_less` (collapse, see less)
    * `shopping_cart`
    * `favorite` (like, wishlist)
    * `share`
    * `download`
    * `upload`
    * `visibility` (view, show)
    * `visibility_off` (hide)
    * `place` (location, map pin)
    * `call` (phone)
    * `mail` (email)
    * `light_mode`
    * `dark_mode`
    * `list_alt` (list view)
    * `grid_view`
    * `refresh`
    * `logout`
    * `login`
    * `warning_amber` (warning)
    * `error_outline` (error)
    * `thumb_up`
    * `thumb_down`
    * `chat_bubble_outline` (comment, message)
    * `delete`
    * `attach_file`
    * `calendar_month` (date, schedule)
    * `schedule` (time, clock)
    * `language` (translate, international)
    * `filter_list`
    * `open_in_new` (external link)
    * `drag_indicator`

* **Advanced Usage (Material Symbols Customization):**
    * Material Symbols can be customized for optical size (`opsz`), weight (`wght`), fill (`FILL`), and grade (`GRAD`).
    * To use filled icons or adjust weight, it's best to use the "Material Symbols Outlined" font link and control the `FILL` property via CSS or inline style.
    * **Example Filled Icon (using Outlined Font):**
        `<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>`
    * Default to outlined icons (`FILL 0`) unless a filled version (`FILL 1`) is explicitly requested or contextually appropriate.

* **Full Icon List (Icon names must match this list):**
**CRUCIAL: Icon names must match an icon in this list. Never use an icon not listed.**

123, 360, 10k, 10mp, 11mp, 12mp, 13mp, 14mp, 15mp, 16mp, 17mp, 18_up_rating, 18mp, 19mp, 1k, 1k_plus, 1x_mobiledata, 1x_mobiledata_badge, 20mp, 21mp, 22mp, 23mp, 24fps_select, 24mp, 2d, 2k, 2k_plus, 2mp, 30fps, 30fps_select, 3d, 3d_rotation, 3g_mobiledata, 3g_mobiledata_badge, 3k, 3k_plus, 3mp, 3p, 4g_mobiledata, 4g_mobiledata_badge, 4g_plus_mobiledata, 4k, 4k_plus, 4mp, 50mp, 5g, 5g_mobiledata_badge, 5k, 5k_plus, 5mp, 60fps, 60fps_select, 6_ft_apart, 6k, 6k_plus, 6mp, 7k, 7k_plus, 7mp, 8k, 8k_plus, 8mp, 9k, 9k_plus, 9mp, abc, ac_unit, accessibility, accessibility_new, accessible, accessible_forward, accessible_menu, account_balance, account_balance_wallet, account_box, account_child, account_child_invert, account_circle, account_circle_off, account_tree, action_key, activity_zone, acute, ad, ad_group, ad_group_off, ad_off, ad_units, adaptive_audio_mic, adaptive_audio_mic_off, adb, add, add_2, add_a_photo, add_ad, add_alert, add_box, add_business, add_call, add_card, add_chart, add_circle, add_column_left, add_column_right, add_comment, add_diamond, add_home, add_home_work, add_link, add_location, add_location_alt, add_moderator, add_notes, add_photo_alternate, add_reaction, add_road, add_row_above, add_row_below, add_shopping_cart, add_task, add_to_drive, add_to_home_screen, add_to_queue, add_triangle, adf_scanner, adjust, admin_meds, admin_panel_settings, ads_click, agender, agriculture, air, air_freshener, air_purifier, air_purifier_gen, airline_seat_flat, airline_seat_flat_angled, airline_seat_individual_suite, airline_seat_legroom_extra, airline_seat_legroom_normal, airline_seat_legroom_reduced, airline_seat_recline_extra, airline_seat_recline_normal, airline_stops, airlines, airplane_ticket, airplanemode_inactive, airplay, airport_shuttle, airware, airwave, alarm, alarm_add, alarm_off, alarm_on, alarm_pause, alarm_smart_wake, album, align_center, align_end, align_flex_center, align_flex_end, align_flex_start, align_horizontal_center, align_horizontal_left, align_horizontal_right, align_items_stretch, align_justify_center, align_justify_flex_end, align_justify_flex_start, align_justify_space_around, align_justify_space_between, align_justify_space_even, align_justify_stretch, align_self_stretch, align_space_around, align_space_between, align_space_even, align_start, align_stretch, align_vertical_bottom, align_vertical_center, align_vertical_top, all_inbox, all_inclusive, all_match, all_out, allergies, allergy, alt_route, alternate_email, altitude, ambulance, amend, amp_stories, analytics, anchor, android, animated_images, animation, aod, aod_tablet, aod_watch, apartment, api, apk_document, apk_install, app_badging, app_blocking, app_registration, apparel, approval, approval_delegation, apps, apps_outage, aq, aq_indoor, ar_on_you, ar_stickers, architecture, archive, area_chart, arming_countdown, arrow_and_edge, arrow_back, arrow_back_2, arrow_back_ios, arrow_back_ios_new, arrow_circle_down, arrow_circle_left, arrow_circle_right, arrow_circle_up, arrow_cool_down, arrow_downward, arrow_downward_alt, arrow_drop_down, arrow_drop_down_circle, arrow_drop_up, arrow_forward, arrow_forward_ios, arrow_insert, arrow_left, arrow_left_alt, arrow_menu_close, arrow_menu_open, arrow_or_edge, arrow_outward, arrow_range, arrow_right, arrow_right_alt, arrow_selector_tool, arrow_split, arrow_top_left, arrow_top_right, arrow_upload_progress, arrow_upload_ready, arrow_upward, arrow_upward_alt, arrow_warm_up, arrows_input, arrows_more_down, arrows_more_up, arrows_output, arrows_outward, art_track, article, article_person, article_shortcut, artist, aspect_ratio, assignment, assignment_add, assignment_ind, assignment_late, assignment_return, assignment_returned, assignment_turned_in, assist_walker, assistant_device, assistant_direction, assistant_navigation, assistant_on_hub, assured_workload, asterisk, atm, atr, attach_email, attach_file, attach_file_add, attach_file_off, attach_money, attachment, attractions, attribution, audio_description, audio_file, audio_video_receiver, auto_awesome_mosaic, auto_awesome_motion, auto_delete, auto_read_pause, auto_read_play, auto_stories, auto_towing, auto_transmission, autofps_select, automation, autopause, autoplay, autorenew, autostop, av1, av_timer, avc, avg_pace, avg_time, award_star, azm, baby_changing_station, back_hand, back_to_tab, background_dot_large, background_dot_small, background_grid_small, background_replace, backlight_high, backlight_high_off, backlight_low, backpack, backspace, backup, backup_table, badge, badge_critical_battery, bakery_dining, balance, balcony, ballot, bar_chart, bar_chart_4_bars, bar_chart_off, barcode, barcode_reader, barcode_scanner, barefoot, batch_prediction, bath_outdoor, bath_private, bath_public_large, bathroom, bathtub, battery_0_bar, battery_1_bar, battery_2_bar, battery_3_bar, battery_4_bar, battery_5_bar, battery_6_bar, battery_alert, battery_android_0, battery_android_1, battery_android_2, battery_android_3, battery_android_4, battery_android_5, battery_android_6, battery_android_alert, battery_android_bolt, battery_android_full, battery_android_plus, battery_android_question, battery_android_share, battery_android_shield, battery_change, battery_charging_20, battery_charging_30, battery_charging_50, battery_charging_60, battery_charging_80, battery_charging_90, battery_charging_full, battery_error, battery_full, battery_full_alt, battery_horiz_000, battery_horiz_050, battery_horiz_075, battery_low, battery_plus, battery_profile, battery_saver, battery_share, battery_status_good, battery_unknown, battery_very_low, beach_access, bed, bedroom_baby, bedroom_child, bedroom_parent, bedtime, bedtime_off, beenhere, bento, bia, bid_landscape, bid_landscape_disabled, bigtop_updates, bike_dock, bike_lane, bike_scooter, biotech, blanket, blender, blind, blinds, blinds_closed, block, blood_pressure, bloodtype, bluetooth, bluetooth_connected, bluetooth_disabled, bluetooth_drive, bluetooth_searching, blur_circular, blur_linear, blur_medium, blur_off, blur_on, blur_short, boat_bus, boat_railway, body_fat, body_system, bolt, bomb, book, book_2, book_3, book_4, book_5, book_6, book_online, book_ribbon, bookmark, bookmark_add, bookmark_added, bookmark_bag, bookmark_check, bookmark_flag, bookmark_heart, bookmark_manager, bookmark_remove, bookmark_star, bookmarks, books_movies_and_music, border_all, border_bottom, border_clear, border_color, border_horizontal, border_inner, border_left, border_outer, border_right, border_style, border_top, border_vertical, borg, bottom_app_bar, bottom_drawer, bottom_navigation, bottom_panel_close, bottom_panel_open, bottom_right_click, bottom_sheets, box, box_add, box_edit, boy, brand_awareness, brand_family, branding_watermark, breakfast_dining, breaking_news, breaking_news_alt_1, breastfeeding, brick, brightness_1, brightness_2, brightness_3, brightness_4, brightness_5, brightness_6, brightness_7, brightness_alert, brightness_auto, brightness_empty, brightness_medium, bring_your_own_ip, broadcast_on_home, broadcast_on_personal, broken_image, browse, browse_activity, browse_gallery, browser_updated, brunch_dining, brush, bubble, bubble_chart, bubbles, bug_report, build, build_circle, bungalow, burst_mode, bus_alert, bus_railway, business_center, business_chip, business_messages, buttons_alt, cabin, cable, cable_car, cached, cadence, cake, cake_add, calculate, calendar_add_on, calendar_apps_script, calendar_clock, calendar_month, calendar_today, calendar_view_day, calendar_view_month, calendar_view_week, call, call_end, call_log, call_made, call_merge, call_missed, call_missed_outgoing, call_quality, call_received, call_split, call_to_action, camera, camera_front, camera_indoor, camera_outdoor, camera_rear, camera_roll, camera_video, cameraswitch, campaign, camping, cancel, cancel_presentation, cancel_schedule_send, candle, candlestick_chart, cannabis, captive_portal, capture, car_crash, car_defrost_left, car_defrost_low_left, car_defrost_low_right, car_defrost_mid_low_left, car_defrost_mid_right, car_defrost_right, car_fan_low_left, car_fan_low_mid_left, car_fan_low_right, car_fan_mid_left, car_fan_mid_low_right, car_fan_mid_right, car_fan_recirculate, car_gear, car_lock, car_mirror_heat, car_rental, car_repair, car_tag, card_membership, card_travel, cardio_load, cardiology, cards, cards_star, carpenter, carry_on_bag, carry_on_bag_checked, carry_on_bag_inactive, carry_on_bag_question, cases, casino, cast, cast_connected, cast_for_education, cast_pause, cast_warning, castle, category, category_search, celebration, cell_merge, cell_tower, cell_wifi, center_focus_strong, center_focus_weak, chair, chair_alt, chalet, change_circle, change_history, charger, charging_station, chart_data, chat, chat_add_on, chat_apps_script, chat_bubble, chat_error, chat_info, chat_paste_go, chat_paste_go_2, check, check_box, check_box_outline_blank, check_circle, check_in_out, check_indeterminate_small, check_small, checkbook, checked_bag, checked_bag_question, checklist, checklist_rtl, checkroom, cheer, chef_hat, chess, chess_pawn, chevron_backward, chevron_forward, chevron_left, chevron_right, child_care, child_friendly, chip_extraction, chips, chrome_reader_mode, chromecast_2, chromecast_device, chronic, church, cinematic_blur, circle, circle_notifications, circles, circles_ext, clarify, clean_hands, cleaning, cleaning_bucket, cleaning_services, clear_all, clear_day, climate_mini_split, clinical_notes, clock_arrow_down, clock_arrow_up, clock_loader_10, clock_loader_20, clock_loader_40, clock_loader_60, clock_loader_80, clock_loader_90, close, close_fullscreen, close_small, closed_caption, closed_caption_add, closed_caption_disabled, cloud, cloud_alert, cloud_circle, cloud_done, cloud_download, cloud_lock, cloud_off, cloud_sync, cloud_upload, co2, co_present, code, code_blocks, code_off, coffee, coffee_maker, cognition, cognition_2, collapse_all, collapse_content, collections_bookmark, colorize, colors, combine_columns, comedy_mask, comic_bubble, comment, comment_bank, comments_disabled, commit, communication, communities, commute, compare, compare_arrows, compass_calibration, component_exchange, compost, compress, computer, computer_arrow_up, computer_cancel, concierge, conditions, confirmation_number, congenital, connect_without_contact, connected_tv, connecting_airports, construction, contact_emergency, contact_mail, contact_page, contact_phone, contact_support, contactless, contactless_off, contacts, contacts_product, content_copy, content_cut, content_paste, content_paste_go, content_paste_off, content_paste_search, contextual_token, contextual_token_add, contract, contract_delete, contract_edit, contrast, contrast_circle, contrast_rtl_off, contrast_square, control_camera, control_point_duplicate, controller_gen, conversion_path, conversion_path_off, convert_to_text, conveyor_belt, cookie, cookie_off, cooking, cool_to_dry, copy_all, copyright, coronavirus, corporate_fare, cottage, counter_0, counter_1, counter_2, counter_3, counter_4, counter_5, counter_6, counter_7, counter_8, counter_9, countertops, create_new_folder, credit_card, credit_card_clock, credit_card_gear, credit_card_heart, credit_card_off, credit_score, crib, crisis_alert, crop, crop_16_9, crop_3_2, crop_5_4, crop_7_5, crop_9_16, crop_free, crop_landscape, crop_portrait, crop_rotate, crop_square, crossword, crowdsource, crown, cruelty_free, css, csv, currency_bitcoin, currency_exchange, currency_franc, currency_lira, currency_pound, currency_ruble, currency_rupee, currency_rupee_circle, currency_yen, currency_yuan, curtains, curtains_closed, custom_typography, cycle, cyclone, dangerous, dark_mode, dashboard, dashboard_2, dashboard_customize, data_alert, data_array, data_check, data_exploration, data_info_alert, data_loss_prevention, data_object, data_saver_on, data_table, data_thresholding, data_usage, database, database_off, database_search, database_upload, dataset, dataset_linked, date_range, deblur, deceased, decimal_decrease, decimal_increase, deck, dehaze, delete, delete_forever, delete_history, delete_sweep, delivery_truck_bolt, delivery_truck_speed, demography, density_large, density_medium, density_small, dentistry, departure_board, deployed_code, deployed_code_account, deployed_code_alert, deployed_code_history, deployed_code_update, dermatology, description, deselect, design_services, desk, deskphone, desktop_access_disabled, desktop_cloud, desktop_cloud_stack, desktop_landscape, desktop_landscape_add, desktop_mac, desktop_portrait, desktop_windows, destruction, details, detection_and_zone, detector, detector_alarm, detector_battery, detector_co, detector_offline, detector_smoke, detector_status, developer_board, developer_board_off, developer_guide, developer_mode, developer_mode_tv, device_band, device_hub, device_thermostat, device_unknown, devices, devices_fold, devices_fold_2, devices_off, devices_other, devices_wearables, dew_point, diagnosis, diagonal_line, dialer_sip, dialogs, dialpad, diamond, dictionary, difference, digital_out_of_home, digital_wellbeing, dining, dinner_dining, directions, directions_alt, directions_alt_off, directions_bike, directions_boat, directions_bus, directions_car, directions_off, directions_railway, directions_railway_2, directions_run, directions_subway, directions_walk, directory_sync, dirty_lens, disabled_by_default, disabled_visible, disc_full, discover_tune, dishwasher, dishwasher_gen, display_external_input, display_settings, distance, diversity_1, diversity_2, diversity_3, diversity_4, dns, do_not_disturb_off, do_not_disturb_on, do_not_disturb_on_total_silence, do_not_step, do_not_touch, dock, dock_to_bottom, dock_to_left, dock_to_right, docs, docs_add_on, docs_apps_script, document_scanner, document_search, domain, domain_add, domain_disabled, domain_verification, domain_verification_off, domino_mask, done_all, done_outline, donut_large, donut_small, door_back, door_front, door_open, door_sensor, door_sliding, doorbell, doorbell_3p, doorbell_chime, double_arrow, downhill_skiing, download, download_2, download_done, download_for_offline, downloading, draft, draft_orders, drafts, drag_click, drag_handle, drag_indicator, drag_pan, draw, draw_abstract, draw_collage, dresser, drive_export, drive_file_move, drive_folder_upload, dropdown, dropper_eye, dry, dry_cleaning, dual_screen, duo, dvr, dynamic_feed, dynamic_form, e911_avatar, e911_emergency, e_mobiledata, e_mobiledata_badge, ear_sound, earbud_case, earbud_left, earbud_right, earbuds, earbuds_2, earbuds_battery, early_on, earthquake, east, ecg, ecg_heart, eco, eda, edgesensor_high, edgesensor_low, edit, edit_arrow_down, edit_arrow_up, edit_attributes, edit_audio, edit_calendar, edit_document, edit_location, edit_location_alt, edit_note, edit_notifications, edit_off, edit_road, edit_square, editor_choice, egg, egg_alt, eject, elderly, elderly_woman, electric_bike, electric_bolt, electric_car, electric_meter, electric_moped, electric_rickshaw, electric_scooter, electrical_services, elevation, elevator, emergency, emergency_heat, emergency_heat_2, emergency_home, emergency_recording, emergency_share, emergency_share_off, emoji_food_beverage, emoji_language, emoji_nature, emoji_objects, emoji_people, emoji_symbols, emoji_transportation, emoticon, empty_dashboard, enable, encrypted, encrypted_add, encrypted_add_circle, encrypted_minus_circle, encrypted_off, endocrinology, energy, energy_program_saving, energy_program_time_used, energy_savings_leaf, engineering, enhanced_encryption, ent, enterprise, enterprise_off, equal, equalizer, eraser_size_1, eraser_size_2, eraser_size_3, eraser_size_4, eraser_size_5, error, error_med, escalator, escalator_warning, euro, euro_symbol, ev_mobiledata_badge, ev_shadow, ev_shadow_add, ev_shadow_minus, ev_station, event, event_available, event_busy, event_list, event_note, event_repeat, event_seat, event_upcoming, exclamation, exercise, exit_to_app, expand, expand_all, expand_circle_down, expand_circle_right, expand_circle_up, expand_content, expansion_panels, experiment, explicit, explore, explore_nearby, explore_off, explosion, export_notes, exposure, exposure_neg_1, exposure_neg_2, exposure_plus_1, exposure_plus_2, exposure_zero, extension, extension_off, eye_tracking, eyeglasses, eyeglasses_2, face, face_2, face_3, face_4, face_5, face_6, face_down, face_left, face_nod, face_retouching_off, face_right, face_shake, face_up, fact_check, factory, falling, familiar_face_and_zone, family_history, family_home, family_link, family_restroom, family_star, fan_focus, fan_indirect, farsight_digital, fast_forward, fast_rewind, fastfood, faucet, favorite, fax, feature_search, featured_play_list, featured_seasonal_and_gifts, featured_video, feedback, female, femur, femur_alt, fence, fertile, festival, fiber_dvr, fiber_manual_record, fiber_new, fiber_pin, fiber_smart_record, file_copy, file_copy_off, file_download_off, file_export, file_json, file_map, file_map_stack, file_open, file_png, file_present, file_save, file_save_off, file_upload_off, files, filter, filter_1, filter_2, filter_3, filter_4, filter_5, filter_6, filter_7, filter_8, filter_9, filter_9_plus, filter_alt, filter_alt_off, filter_arrow_right, filter_b_and_w, filter_center_focus, filter_drama, filter_frames, filter_hdr, filter_list, filter_list_off, filter_none, filter_retrolux, filter_tilt_shift, filter_vintage, finance, finance_chip, finance_mode, find_in_page, find_replace, fingerprint, fingerprint_off, fire_extinguisher, fire_hydrant, fire_truck, fireplace, first_page, fit_page, fit_page_height, fit_page_width, fit_screen, fit_width, fitness_center, fitness_tracker, flag, flag_2, flag_check, flag_circle, flaky, flare, flash_auto, flash_off, flash_on, flashlight_off, flashlight_on, flatware, flex_direction, flex_no_wrap, flex_wrap, flight, flight_class, flight_land, flight_takeoff, flights_and_hotels, flip, flip_camera_android, flip_camera_ios, flip_to_back, flip_to_front, float_landscape_2, float_portrait_2, flood, floor, floor_lamp, flowchart, flowsheet, fluid, fluid_balance, fluid_med, fluorescent, flutter, flutter_dash, flyover, fmd_bad, foggy, folded_hands, folder, folder_check, folder_check_2, folder_code, folder_copy, folder_data, folder_delete, folder_eye, folder_info, folder_limited, folder_managed, folder_match, folder_off, folder_open, folder_shared, folder_special, folder_supervised, folder_zip, follow_the_signs, font_download, font_download_off, food_bank, foot_bones, footprint, for_you, forest, fork_left, fork_right, fork_spoon, forklift, format_align_center, format_align_justify, format_align_left, format_align_right, format_bold, format_clear, format_color_fill, format_color_reset, format_color_text, format_h1, format_h2, format_h3, format_h4, format_h5, format_h6, format_image_left, format_image_right, format_indent_decrease, format_indent_increase, format_ink_highlighter, format_italic, format_letter_spacing, format_letter_spacing_2, format_letter_spacing_standard, format_letter_spacing_wide, format_letter_spacing_wider, format_line_spacing, format_list_bulleted, format_list_bulleted_add, format_list_numbered, format_list_numbered_rtl, format_overline, format_paint, format_paragraph, format_quote, format_quote_off, format_shapes, format_size, format_strikethrough, format_text_clip, format_text_overflow, format_text_wrap, format_textdirection_l_to_r, format_textdirection_r_to_l, format_textdirection_vertical, format_underlined, format_underlined_squiggle, forms_add_on, forms_apps_script, fort, forum, forward, forward_10, forward_30, forward_5, forward_circle, forward_media, forward_to_inbox, foundation, fragrance, frame_inspect, frame_person, frame_person_mic, frame_person_off, frame_reload, frame_source, free_cancellation, front_hand, front_loader, full_coverage, full_hd, full_stacked_bar_chart, fullscreen, fullscreen_exit, fullscreen_portrait, function, functions, funicular, g_mobiledata, g_mobiledata_badge, g_translate, gallery_thumbnail, gamepad, garage, garage_door, garage_home, garden_cart, gas_meter, gastroenterology, gate, gavel, general_device, genetics, genres, gesture, gesture_select, gif, gif_2, gif_box, girl, gite, glass_cup, globe, globe_asia, globe_book, globe_location_pin, globe_uk, glucose, glyphs, go_to_line, golf_course, gondola_lift, google_home_devices, google_tv_remote, google_wifi, gpp_bad, gpp_maybe, gradient, grading, grain, graph_1, graph_2, graph_3, graph_4, graph_5, graph_6, graph_7, graphic_eq, grass, grid_3x3, grid_3x3_off, grid_4x4, grid_goldenratio, grid_guides, grid_off, grid_on, grid_view, grocery, group, group_add, group_off, group_remove, group_search, group_work, grouped_bar_chart, groups, groups_2, groups_3, guardian, gynecology, h_mobiledata, h_mobiledata_badge, h_plus_mobiledata, h_plus_mobiledata_badge, hail, hallway, hand_bones, hand_gesture, hand_gesture_off, handheld_controller, handshake, handyman, hangout_video, hangout_video_off, hard_disk, hard_drive, hard_drive_2, hardware, hd, hdr_auto, hdr_auto_select, hdr_enhanced_select, hdr_off, hdr_off_select, hdr_on, hdr_on_select, hdr_plus, hdr_plus_off, hdr_strong, hdr_weak, head_mounted_device, headphones, headphones_battery, headset_mic, headset_off, healing, health_and_beauty, health_and_safety, health_metrics, heap_snapshot_large, heap_snapshot_multiple, heap_snapshot_thumbnail, hearing, hearing_aid, hearing_aid_disabled, hearing_aid_disabled_left, hearing_aid_left, hearing_disabled, heart_broken, heart_check, heart_minus, heart_plus, heat, heat_pump, heat_pump_balance, height, helicopter, help, help_center, help_clinic, hematology, hevc, hexagon, hide, hide_image, hide_source, high_density, high_quality, high_res, highlight, highlight_keyboard_focus, highlight_mouse_cursor, highlight_text_cursor, highlighter_size_1, highlighter_size_2, highlighter_size_3, highlighter_size_4, highlighter_size_5, hiking, history, history_2, history_edu, history_off, history_toggle_off, hive, hls, hls_off, holiday_village, home, home_and_garden, home_app_logo, home_health, home_improvement_and_tools, home_iot_device, home_max, home_max_dots, home_mini, home_pin, home_repair_service, home_speaker, home_storage, home_work, horizontal_distribute, horizontal_rule, horizontal_split, host, hot_tub, hotel, hotel_class, hourglass, hourglass_arrow_down, hourglass_arrow_up, hourglass_bottom, hourglass_disabled, hourglass_empty, hourglass_pause, hourglass_top, house, house_siding, house_with_shield, houseboat, household_supplies, hov, how_to_reg, how_to_vote, hr_resting, html, http, hub, humerus, humerus_alt, humidity_high, humidity_indoor, humidity_low, humidity_mid, humidity_percentage, hvac, hvac_max_defrost, ice_skating, icecream, id_card, identity_aware_proxy, identity_platform, ifl, iframe, iframe_off, image, image_arrow_up, image_aspect_ratio, image_search, imagesearch_roller, imagesmode, immunology, import_contacts, important_devices, in_home_mode, inactive_order, inbox, inbox_customize, inbox_text, inbox_text_asterisk, inbox_text_person, inbox_text_share, incomplete_circle, indeterminate_check_box, indeterminate_question_box, info, info_i, infrared, ink_eraser, ink_eraser_off, ink_highlighter, ink_highlighter_move, ink_marker, ink_pen, ink_selection, inpatient, input, input_circle, insert_chart, insert_page_break, insert_text, install_desktop, instant_mix, integration_instructions, interactive_space, interests, interpreter_mode, inventory, inventory_2, invert_colors, invert_colors_off, ios, ios_share, iron, jamboard_kiosk, javascript, join, join_inner, join_left, join_right, joystick, jump_to_element, kayaking, kebab_dining, keep, keep_off, keep_public, kettle, key, key_off, key_vertical, key_visualizer, keyboard, keyboard_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, keyboard_backspace, keyboard_capslock, keyboard_capslock_badge, keyboard_command_key, keyboard_control_key, keyboard_double_arrow_down, keyboard_double_arrow_left, keyboard_double_arrow_right, keyboard_double_arrow_up, keyboard_external_input, keyboard_full, keyboard_hide, keyboard_keys, keyboard_lock, keyboard_lock_off, keyboard_off, keyboard_onscreen, keyboard_option_key, keyboard_previous_language, keyboard_return, keyboard_tab, keyboard_tab_rtl, kid_star, king_bed, kitchen, kitesurfing, lab_panel, lab_profile, lab_research, label, label_important, label_off, labs, lan, landscape, landscape_2, landscape_2_edit, landscape_2_off, landslide, language, language_chinese_array, language_chinese_cangjie, language_chinese_dayi, language_chinese_pinyin, language_chinese_quick, language_chinese_wubi, language_french, language_gb_english, language_international, language_japanese_kana, language_korean_latin, language_pinyin, language_spanish, language_us, language_us_colemak, language_us_dvorak, laps, laptop_car, laptop_chromebook, laptop_mac, laptop_windows, lasso_select, last_page, laundry, layers, layers_clear, lda, leaderboard, leak_add, leak_remove, left_click, left_panel_close, left_panel_open, legend_toggle, lens_blur, letter_switch, library_add, library_add_check, library_books, library_music, license, lift_to_talk, light, light_group, light_mode, light_off, lightbulb, lightbulb_2, lightbulb_circle, lightning_stand, line_axis, line_curve, line_end, line_end_arrow, line_end_arrow_notch, line_end_circle, line_end_diamond, line_end_square, line_start, line_start_arrow, line_start_arrow_notch, line_start_circle, line_start_diamond, line_start_square, line_style, line_weight, linear_scale, link, link_off, linked_camera, linked_services, liquor, list, list_alt, list_alt_add, list_alt_check, lists, live_help, live_tv, living, local_activity, local_atm, local_bar, local_cafe, local_car_wash, local_convenience_store, local_dining, local_drink, local_fire_department, local_florist, local_gas_station, local_hospital, local_laundry_service, local_library, local_mall, local_parking, local_pharmacy, local_pizza, local_police, local_post_office, local_see, local_shipping, local_taxi, location_away, location_chip, location_city, location_disabled, location_home, location_off, location_on, location_searching, lock, lock_clock, lock_open, lock_open_circle, lock_open_right, lock_person, lock_reset, login, logo_dev, logout, looks, looks_3, looks_4, looks_5, looks_6, looks_one, looks_two, loupe, low_density, low_priority, lowercase, loyalty, lte_mobiledata, lte_mobiledata_badge, lte_plus_mobiledata, lte_plus_mobiledata_badge, luggage, lunch_dining, lyrics, macro_auto, macro_off, magnification_large, magnification_small, magnify_docked, magnify_fullscreen, mail, mail_lock, mail_off, male, man, man_2, man_3, man_4, manage_accounts, manage_history, manage_search, manga, manufacturing, map, map_search, maps_ugc, margin, mark_as_unread, mark_chat_read, mark_chat_unread, mark_email_read, mark_email_unread, mark_unread_chat_alt, markdown, markdown_copy, markdown_paste, markunread_mailbox, masked_transitions, masked_transitions_add, masks, match_case, match_case_off, match_word, matter, maximize, measuring_tape, media_bluetooth_off, media_bluetooth_on, media_link, media_output, media_output_off, mediation, medical_information, medical_mask, medical_services, medication, medication_liquid, meeting_room, memory, memory_alt, menstrual_health, menu, menu_book, menu_open, merge, merge_type, metabolism, metro, mfg_nest_yale_lock, mic, mic_alert, mic_double, mic_external_off, mic_external_on, mic_off, microbiology, microwave, microwave_gen, military_tech, mimo, mimo_disconnect, mindfulness, minimize, minor_crash, mintmark, missed_video_call, missing_controller, mist, mitre, mixture_med, mms, mobile_hand, mobile_hand_left, mobile_hand_left_off, mobile_hand_off, mobile_loupe, mobile_off, mobile_screen_share, mobile_screensaver, mobile_sound_2, mobile_speaker, mobiledata_off, mode_comment, mode_cool, mode_cool_off, mode_dual, mode_fan, mode_fan_off, mode_heat, mode_heat_cool, mode_heat_off, mode_night, mode_of_travel, mode_off_on, mode_standby, model_training, modeling, money, money_bag, money_off, monitor, monitor_heart, monitor_weight, monitor_weight_gain, monitor_weight_loss, monitoring, monochrome_photos, monorail, mood, mood_bad, moon_stars, mop, moped, more, more_down, more_horiz, more_time, more_up, more_vert, mosque, motion_blur, motion_mode, motion_photos_auto, motion_photos_off, motion_photos_on, motion_photos_paused, motion_play, motion_sensor_active, motion_sensor_alert, motion_sensor_idle, motion_sensor_urgent, motorcycle, mountain_flag, mouse, mouse_lock, mouse_lock_off, move, move_down, move_group, move_item, move_location, move_selection_down, move_selection_left, move_selection_right, move_selection_up, move_to_inbox, move_up, moved_location, movie, movie_edit, movie_info, movie_off, moving, moving_beds, moving_ministry, mp, multicooker, multiline_chart, multimodal_hand_eye, multiple_airports, multiple_stop, museum, music_cast, music_note, music_note_add, music_off, music_video, my_location, mystery, nat, nature, nature_people, navigation, near_me, near_me_disabled, nearby, nearby_error, nearby_off, nephrology, nest_audio, nest_cam_floodlight, nest_cam_indoor, nest_cam_iq, nest_cam_iq_outdoor, nest_cam_magnet_mount, nest_cam_outdoor, nest_cam_stand, nest_cam_wall_mount, nest_cam_wired_stand, nest_clock_farsight_analog, nest_clock_farsight_digital, nest_connect, nest_detect, nest_display, nest_display_max, nest_doorbell_visitor, nest_eco_leaf, nest_farsight_weather, nest_found_savings, nest_heat_link_e, nest_heat_link_gen_3, nest_hello_doorbell, nest_mini, nest_multi_room, nest_protect, nest_remote, nest_remote_comfort_sensor, nest_secure_alarm, nest_sunblock, nest_tag, nest_thermostat, nest_thermostat_e_eu, nest_thermostat_gen_3, nest_thermostat_sensor, nest_thermostat_sensor_eu, nest_thermostat_zirconium_eu, nest_true_radiant, nest_wake_on_approach, nest_wake_on_press, nest_wifi_point, nest_wifi_pro, nest_wifi_pro_2, nest_wifi_router, network_cell, network_check, network_intel_node, network_intelligence, network_intelligence_history, network_intelligence_update, network_locked, network_manage, network_node, network_ping, network_wifi, network_wifi_1_bar, network_wifi_1_bar_locked, network_wifi_2_bar, network_wifi_2_bar_locked, network_wifi_3_bar, network_wifi_3_bar_locked, network_wifi_locked, neurology, new_label, new_window, news, newsmode, newspaper, newsstand, next_plan, next_week, nfc, nfc_off, night_shelter, night_sight_auto, night_sight_auto_off, night_sight_max, nightlife, nightlight, nights_stay, no_accounts, no_adult_content, no_backpack, no_crash, no_drinks, no_encryption, no_flash, no_food, no_luggage, no_meals, no_meeting_room, no_photography, no_sim, no_sound, no_stroller, no_transfer, noise_aware, noise_control_off, noise_control_on, nordic_walking, north, north_east, north_west, not_accessible, not_accessible_forward, not_listed_location, not_started, note_add, note_alt, note_stack, note_stack_add, notes, notification_add, notification_important, notification_multiple, notification_settings, notification_sound, notifications, notifications_active, notifications_off, notifications_paused, notifications_unread, numbers, nutrition, ods, odt, offline_bolt, offline_pin, offline_pin_off, offline_share, oil_barrel, on_device_training, on_hub_device, oncology, online_prediction, onsen, opacity, open_in_browser, open_in_full, open_in_new, open_in_new_down, open_in_new_off, open_jam, open_run, open_with, ophthalmology, oral_disease, orbit, order_approve, order_play, orders, orthopedics, other_admission, other_houses, outbound, outbox, outbox_alt, outdoor_garden, outdoor_grill, outgoing_mail, outlet, outpatient, outpatient_med, output, output_circle, oven, oven_gen, overview, overview_key, owl, oxygen_saturation, p2p, pace, pacemaker, package, package_2, padding, page_control, page_footer, page_header, page_info, pageless, pages, pageview, paid, palette, pallet, pan_tool, pan_tool_alt, pan_zoom, panorama, panorama_horizontal, panorama_photosphere, panorama_vertical, panorama_wide_angle, paragliding, park, partly_cloudy_day, partly_cloudy_night, partner_exchange, partner_reports, party_mode, passkey, password, password_2, password_2_off, patient_list, pattern, pause, pause_circle, pause_presentation, payments, pedal_bike, pediatrics, pen_size_1, pen_size_2, pen_size_3, pen_size_4, pen_size_5, pending, pending_actions, pentagon, percent, pergola, perm_camera_mic, perm_contact_calendar, perm_data_setting, perm_device_information, perm_media, perm_phone_msg, perm_scan_wifi, person, person_2, person_3, person_4, person_add, person_add_disabled, person_alert, person_apron, person_book, person_cancel, person_celebrate, person_check, person_edit, person_off, person_pin, person_pin_circle, person_play, person_raised_hand, person_remove, person_search, person_shield, personal_bag, personal_bag_off, personal_bag_question, personal_injury, personal_places, pest_control, pest_control_rodent, pet_supplies, pets, phishing, phone_android, phone_bluetooth_speaker, phone_callback, phone_disabled, phone_enabled, phone_forwarded, phone_in_talk, phone_iphone, phone_locked, phone_missed, phone_paused, phonelink_erase, phonelink_ring, phonelink_ring_off, phonelink_setup, photo, photo_album, photo_auto_merge, photo_camera, photo_camera_back, photo_camera_front, photo_frame, photo_library, photo_prints, photo_size_select_large, photo_size_select_small, php, physical_therapy, piano, piano_off, picture_as_pdf, picture_in_picture, picture_in_picture_alt, picture_in_picture_center, picture_in_picture_large, picture_in_picture_medium, picture_in_picture_mobile, picture_in_picture_off, picture_in_picture_small, pie_chart, pill, pill_off, pin, pin_drop, pin_end, pin_invoke, pinboard, pinboard_unread, pinch, pinch_zoom_in, pinch_zoom_out, pip, pip_exit, pivot_table_chart, place_item, plagiarism, planet, planner_banner_ad_pt, planner_review, play_arrow, play_circle, play_disabled, play_for_work, play_lesson, play_pause, playing_cards, playlist_add, playlist_add_check, playlist_add_check_circle, playlist_add_circle, playlist_play, playlist_remove, plug_connect, plumbing, podcasts, podiatry, podium, point_of_sale, point_scan, poker_chip, policy, policy_alert, polyline, polymer, pool, portable_wifi_off, position_bottom_left, position_bottom_right, position_top_right, post, post_add, potted_plant, power, power_input, power_off, power_settings_circle, power_settings_new, prayer_times, precision_manufacturing, pregnancy, pregnant_woman, preliminary, prescriptions, present_to_all, preview, preview_off, price_change, price_check, print, print_add, print_connect, print_disabled, print_error, print_lock, priority, priority_high, privacy, privacy_tip, private_connectivity, problem, procedure, process_chart, production_quantity_limits, productivity, progress_activity, prompt_suggestion, propane, propane_tank, psychiatry, psychology, psychology_alt, public, public_off, publish, published_with_changes, pulmonology, pulse_alert, punch_clock, qr_code, qr_code_2, qr_code_2_add, qr_code_scanner, query_stats, question_exchange, question_mark, queue_music, queue_play_next, quick_phrases, quick_reference, quick_reference_all, quick_reorder, quickreply, quiz, r_mobiledata, radar, radio, radio_button_checked, radio_button_partial, radio_button_unchecked, radiology, railway_alert, railway_alert_2, rainy, rainy_heavy, rainy_light, rainy_snow, ramen_dining, ramp_left, ramp_right, range_hood, rate_review, raven, raw_off, raw_on, read_more, readiness_score, real_estate_agent, rear_camera, rebase, rebase_edit, receipt, receipt_long, receipt_long_off, recent_actors, recent_patient, recenter, recommend, record_voice_over, rectangle, recycling, redeem, redo, reduce_capacity, refresh, regular_expression, relax, release_alert, remember_me, reminder, remote_gen, remove, remove_done, remove_from_queue, remove_moderator, remove_road, remove_selection, remove_shopping_cart, reopen_window, reorder, repartition, repeat, repeat_on, repeat_one, repeat_one_on, replace_audio, replace_image, replace_video, replay, replay_10, replay_30, replay_5, reply, reply_all, report, report_off, request_page, request_quote, reset_brightness, reset_focus, reset_image, reset_iso, reset_settings, reset_shadow, reset_shutter_speed, reset_tv, reset_white_balance, reset_wrench, resize, respiratory_rate, responsive_layout, restart_alt, restaurant, restore_from_trash, restore_page, resume, reviews, rewarded_ads, rheumatology, rib_cage, rice_bowl, right_click, right_panel_close, right_panel_open, ring_volume, ripples, road, robot, robot_2, rocket, rocket_launch, roller_shades, roller_shades_closed, roller_skating, roofing, room_preferences, room_service, rotate_90_degrees_ccw, rotate_90_degrees_cw, rotate_auto, rotate_left, rotate_right, roundabout_left, roundabout_right, rounded_corner, route, router, router_off, routine, rowing, rss_feed, rsvp, rtt, rubric, rule, rule_folder, rule_settings, run_circle, running_with_errors, rv_hookup, safety_check, safety_check_off, safety_divider, sailing, salinity, sanitizer, satellite, satellite_alt, sauna, save, save_as, save_clock, saved_search, savings, scale, scan, scan_delete, scanner, scatter_plot, scene, schedule, schedule_send, schema, school, science, science_off, scooter, score, scoreboard, screen_lock_landscape, screen_lock_portrait, screen_lock_rotation, screen_record, screen_rotation, screen_rotation_alt, screen_rotation_up, screen_search_desktop, screen_share, screenshot, screenshot_frame, screenshot_frame_2, screenshot_keyboard, screenshot_monitor, screenshot_region, screenshot_tablet, script, scrollable_header, scuba_diving, sd, sd_card, sd_card_alert, sdk, search, search_activity, search_check, search_check_2, search_hands_free, search_insights, search_off, seat_cool_left, seat_cool_right, seat_heat_left, seat_heat_right, seat_vent_left, seat_vent_right, security, security_key, security_update_good, security_update_warning, segment, select, select_all, select_check_box, select_to_speak, select_window, select_window_2, select_window_off, self_care, self_improvement, sell, send, send_and_archive, send_money, send_time_extension, send_to_mobile, sensor_door, sensor_occupied, sensor_window, sensors, sensors_krx, sensors_krx_off, sensors_off, sentiment_calm, sentiment_content, sentiment_dissatisfied, sentiment_excited, sentiment_extremely_dissatisfied, sentiment_frustrated, sentiment_neutral, sentiment_sad, sentiment_satisfied, sentiment_stressed, sentiment_very_dissatisfied, sentiment_very_satisfied, sentiment_worried, serif, server_person, service_toolbox, set_meal, settings, settings_accessibility, settings_account_box, settings_alert, settings_applications, settings_b_roll, settings_backup_restore, settings_bluetooth, settings_brightness, settings_cell, settings_cinematic_blur, settings_ethernet, settings_heart, settings_input_antenna, settings_input_component, settings_input_hdmi, settings_input_svideo, settings_motion_mode, settings_night_sight, settings_overscan, settings_panorama, settings_phone, settings_photo_camera, settings_power, settings_remote, settings_slow_motion, settings_system_daydream, settings_timelapse, settings_video_camera, settings_voice, settop_component, severe_cold, shadow, shadow_add, shadow_minus, shape_line, shapes, share, share_eta, share_location, share_off, share_reviews, share_windows, sheets_rtl, shelf_auto_hide, shelf_position, shelves, shield, shield_lock, shield_locked, shield_moon, shield_person, shield_question, shield_watch, shield_with_heart, shield_with_house, shift, shift_lock, shift_lock_off, shop, shop_two, shopping_bag, shopping_bag_speed, shopping_basket, shopping_cart, shopping_cart_checkout, shopping_cart_off, shoppingmode, short_stay, short_text, show_chart, shower, shuffle, shuffle_on, shutter_speed, shutter_speed_add, shutter_speed_minus, sick, side_navigation, sign_language, signal_cellular_0_bar, signal_cellular_1_bar, signal_cellular_2_bar, signal_cellular_3_bar, signal_cellular_4_bar, signal_cellular_add, signal_cellular_alt, signal_cellular_alt_1_bar, signal_cellular_alt_2_bar, signal_cellular_connected_no_internet_0_bar, signal_cellular_connected_no_internet_4_bar, signal_cellular_nodata, signal_cellular_null, signal_cellular_off, signal_cellular_pause, signal_disconnected, signal_wifi_0_bar, signal_wifi_4_bar, signal_wifi_bad, signal_wifi_off, signal_wifi_statusbar_not_connected, signal_wifi_statusbar_null, signature, signpost, sim_card, sim_card_download, simulation, single_bed, sip, siren, siren_check, siren_open, siren_question, skateboarding, skeleton, skillet, skillet_cooktop, skip_next, skip_previous, skull, skull_list, slab_serif, sledding, sleep_score, slide_library, sliders, slideshow, slow_motion_video, smart_card_reader, smart_card_reader_off, smart_display, smart_outlet, smart_screen, smart_toy, smartphone, smartphone_camera, smb_share, smoke_free, smoking_rooms, sms, snippet_folder, snooze, snowboarding, snowing, snowing_heavy, snowmobile, snowshoeing, soap, social_distance, social_leaderboard, solar_power, sort, sort_by_alpha, sos, sound_detection_dog_barking, sound_detection_glass_break, sound_detection_loud_sound, sound_sampler, soup_kitchen, source_environment, source_notes, south, south_america, south_east, south_west, spa, space_bar, space_dashboard, spatial_audio, spatial_audio_off, spatial_speaker, spatial_tracking, speaker, speaker_group, speaker_notes, speaker_notes_off, speaker_phone, special_character, specific_gravity, speech_to_text, speed, speed_0_25, speed_0_2x, speed_0_5, speed_0_5x, speed_0_75, speed_0_7x, speed_1_2, speed_1_25, speed_1_2x, speed_1_5, speed_1_5x, speed_1_75, speed_1_7x, speed_2x, speed_camera, spellcheck, split_scene, split_scene_down, split_scene_left, split_scene_right, split_scene_up, splitscreen, splitscreen_add, splitscreen_bottom, splitscreen_landscape, splitscreen_left, splitscreen_portrait, splitscreen_right, splitscreen_top, splitscreen_vertical_add, spo2, spoke, sports, sports_and_outdoors, sports_bar, sports_baseball, sports_basketball, sports_cricket, sports_esports, sports_football, sports_golf, sports_gymnastics, sports_handball, sports_hockey, sports_kabaddi, sports_martial_arts, sports_mma, sports_motorsports, sports_rugby, sports_score, sports_soccer, sports_tennis, sports_volleyball, sprinkler, sprint, square, square_dot, square_foot, ssid_chart, stack, stack_group, stack_hexagon, stack_off, stack_star, stacked_bar_chart, stacked_email, stacked_inbox, stacked_line_chart, stacks, stadia_controller, stadium, stairs, stairs_2, star, star_half, star_rate, star_rate_half, star_shine, stars, stars_2, start, stat_0, stat_1, stat_2, stat_3, stat_minus_1, stat_minus_2, stat_minus_3, stay_current_landscape, steering_wheel_heat, step, step_into, step_out, step_over, steppers, steps, stethoscope, stethoscope_arrow, stethoscope_check, sticky_note, sticky_note_2, stock_media, stockpot, stop, stop_circle, stop_screen_share, storage, store, storefront, storm, straight, straighten, strategy, stream, stream_apps, streetview, stress_management, strikethrough_s, stroke_full, stroke_partial, stroller, style, styler, stylus, stylus_brush, stylus_fountain_pen, stylus_highlighter, stylus_laser_pointer, stylus_note, stylus_pen, stylus_pencil, subdirectory_arrow_left, subdirectory_arrow_right, subheader, subject, subscript, subscriptions, subtitles, subtitles_gear, subtitles_off, subway, summarize, sunny, sunny_snowing, superscript, supervised_user_circle, supervised_user_circle_off, supervisor_account, support, support_agent, surfing, surgical, surround_sound, swap_calls, swap_driving_apps, swap_driving_apps_wheel, swap_horiz, swap_horizontal_circle, swap_vert, swap_vertical_circle, sweep, swipe, swipe_down, swipe_down_alt, swipe_left, swipe_left_alt, swipe_right, swipe_right_alt, swipe_up, swipe_up_alt, swipe_vertical, switch, switch_access, switch_access_2, switch_access_3, switch_access_shortcut, switch_access_shortcut_add, switch_account, switch_camera, switch_left, switch_right, switch_video, switches, sword_rose, swords, symptoms, synagogue, sync, sync_alt, sync_arrow_down, sync_arrow_up, sync_desktop, sync_disabled, sync_lock, sync_problem, sync_saved_locally, syringe, system_update, system_update_alt, tab, tab_close, tab_close_inactive, tab_close_right, tab_duplicate, tab_group, tab_inactive, tab_move, tab_new_right, tab_recent, tab_search, tab_unselected, table, table_bar, table_chart, table_chart_view, table_convert, table_edit, table_eye, table_lamp, table_restaurant, table_rows, table_rows_narrow, table_view, tablet, tablet_android, tablet_camera, tablet_mac, tabs, tactic, tag, takeout_dining, tamper_detection_off, tamper_detection_on, tap_and_play, tapas, target, task, task_alt, taunt, taxi_alert, team_dashboard, temp_preferences_eco, temple_buddhist, temple_hindu, tenancy, terminal, text_ad, text_compare, text_decrease, text_fields, text_fields_alt, text_format, text_increase, text_rotate_up, text_rotate_vertical, text_rotation_angledown, text_rotation_angleup, text_rotation_down, text_rotation_none, text_select_end, text_select_jump_to_beginning, text_select_jump_to_end, text_select_move_back_character, text_select_move_back_word, text_select_move_down, text_select_move_forward_character, text_select_move_forward_word, text_select_move_up, text_select_start, text_snippet, text_to_speech, text_up, texture, texture_add, texture_minus, theater_comedy, theaters, thermometer, thermometer_add, thermometer_gain, thermometer_loss, thermometer_minus, thermostat, thermostat_arrow_down, thermostat_arrow_up, thermostat_auto, thermostat_carbon, things_to_do, thread_unread, threat_intelligence, thumb_down, thumb_up, thumbnail_bar, thumbs_up_down, thunderstorm, tibia, tibia_alt, tile_large, tile_medium, tile_small, time_auto, timelapse, timeline, timer, timer_10, timer_10_alt_1, timer_10_select, timer_3, timer_3_alt_1, timer_3_select, timer_5, timer_5_shutter, timer_arrow_down, timer_arrow_up, timer_off, timer_pause, timer_play, tire_repair, title, titlecase, toast, toc, today, toggle_off, toggle_on, token, toll, tonality, toolbar, tools_flat_head, tools_installation_kit, tools_ladder, tools_level, tools_phillips, tools_pliers_wire_stripper, tools_power_drill, tooltip, tooltip_2, top_panel_close, top_panel_open, topic, tornado, total_dissolved_solids, touch_app, touch_double, touch_long, touch_triple, touchpad_mouse, touchpad_mouse_off, tour, toys, toys_and_games, toys_fan, track_changes, trackpad_input, trackpad_input_2, trackpad_input_3, traffic, traffic_jam, trail_length, trail_length_medium, trail_length_short, train, tram, transcribe, transfer_within_a_station, transform, transgender, transit_enterexit, transit_ticket, transition_chop, transition_dissolve, transition_fade, transition_push, transition_slide, translate, transportation, travel, travel_explore, travel_luggage_and_bags, trending_down, trending_flat, trending_up, trip, trip_origin, trolley, trolley_cable_car, trophy, troubleshoot, tsunami, tsv, tty, tune, turn_left, turn_right, turn_sharp_left, turn_sharp_right, turn_slight_left, turn_slight_right, tv, tv_displays, tv_gen, tv_guide, tv_next, tv_off, tv_options_edit_channels, tv_options_input_settings, tv_remote, tv_signin, tv_with_assistant, two_pager, two_pager_store, two_wheeler, type_specimen, u_turn_left, u_turn_right, ulna_radius, ulna_radius_alt, umbrella, unarchive, undo, unfold_less, unfold_less_double, unfold_more, unfold_more_double, ungroup, universal_currency, universal_currency_alt, universal_local, unknown_2, unknown_5, unknown_7, unknown_document, unknown_med, unlicense, unpaved_road, unpublished, unsubscribe, upcoming, update, update_disabled, upgrade, upi_pay, upload, upload_2, upload_file, uppercase, urology, usb, usb_off, user_attributes, vaccines, vacuum, valve, vape_free, vaping_rooms, variable_add, variable_insert, variable_remove, variables, ventilator, verified, verified_off, verified_user, vertical_align_bottom, vertical_align_center, vertical_align_top, vertical_distribute, vertical_shades, vertical_shades_closed, vertical_split, vibration, video_call, video_camera_back, video_camera_back_add, video_camera_front, video_camera_front_off, video_chat, video_file, video_label, video_library, video_search, video_settings, video_stable, videocam, videocam_alert, videocam_off, videogame_asset, videogame_asset_off, view_agenda, view_apps, view_array, view_carousel, view_column, view_column_2, view_comfy, view_comfy_alt, view_compact, view_compact_alt, view_cozy, view_day, view_headline, view_in_ar, view_in_ar_off, view_kanban, view_list, view_module, view_object_track, view_quilt, view_real_size, view_sidebar, view_stream, view_timeline, view_week, vignette, villa, visibility, visibility_lock, visibility_off, vital_signs, vo2_max, voice_chat, voice_over_off, voice_selection, voice_selection_off, voicemail, voicemail_2, volcano, volume_down, volume_down_alt, volume_mute, volume_off, volume_up, volunteer_activism, voting_chip, vpn_key, vpn_key_alert, vpn_key_off, vpn_lock, vpn_lock_2, vr180_create2d, vr180_create2d_off, vrpano, wall_art, wall_lamp, wallet, wallpaper, wallpaper_slideshow, wand_shine, wand_stars, ward, warehouse, warning, warning_off, wash, watch, watch_arrow, watch_button_press, watch_check, watch_off, watch_screentime, watch_vibration, watch_wake, water, water_bottle, water_bottle_large, water_damage, water_do, water_drop, water_ec, water_full, water_heater, water_lock, water_loss, water_lux, water_medium, water_orp, water_ph, water_pump, water_voc, waterfall_chart, waves, waving_hand, wb_auto, wb_incandescent, wb_iridescent, wb_shade, wb_sunny, wb_twilight, wc, weather_hail, weather_mix, weather_snowy, web, web_asset, web_asset_off, web_stories, web_traffic, webhook, weekend, weight, west, whatshot, wheelchair_pickup, where_to_vote, widget_medium, widget_small, widget_width, widgets, width_full, width_normal, width_wide, wifi, wifi_1_bar, wifi_2_bar, wifi_add, wifi_calling, wifi_calling_bar_1, wifi_calling_bar_2, wifi_calling_bar_3, wifi_channel, wifi_find, wifi_home, wifi_lock, wifi_notification, wifi_off, wifi_password, wifi_protected_setup, wifi_proxy, wifi_tethering, wifi_tethering_error, wifi_tethering_off, wind_power, window, window_closed, window_open, window_sensor, windshield_defrost_front, windshield_defrost_rear, windshield_heat_front, wine_bar, woman, woman_2, work, work_alert, work_history, work_update, workspace_premium, workspaces, wounds_injuries, wrap_text, wrist, wrong_location, wysiwyg, yard, your_trips, youtube_activity, youtube_searched_for, zone_person_alert, zone_person_idle, zone_person_urgent, zoom_in, zoom_in_map, zoom_out, zoom_out_map

## Handling Prompts

This section details how to process user prompts, which may include text descriptions, images, or existing HTML/CSS/JS code. The core principle is to interpret the user's request and translate it into the components, tokens, and layout structures defined within this **Material Design System**. Adherence to the system's defined tokens and rules is paramount in all circumstances.

### 1. Initial Prompt Assessment

First, determine the nature of the user's prompt to understand the primary source of instructions:

* **Text-Only Prompt:** No image or code is provided. Proceed with text-based generation, focusing on the "General HTML Output Structure (Multi-Pass Approach)" and component documentation.
* **Image-Only Prompt:** An image is provided with minimal or no accompanying text (e.g., "Build this"). The image becomes the **primary source** for design interpretation.
* **Image + Text Prompt:** Both an image and descriptive text are provided.
    * **Text Precedence:** Explicit instructions in the text take precedence in case of direct conflict with the image.
    * **Image for Augmentation:** The image should be used to fill in gaps where the text is not specific, provide visual context, and guide stylistic choices.
* **Prompt with Existing Code:** A snippet or full document of HTML, CSS, and/or JavaScript is provided with the instruction to refactor or "materialize" it. The provided code is the primary source, to be processed by the Code Refactoring Protocol below.

### 2. Image Analysis Protocol (For Image-Only or Image + Text Prompts) 🖼️

When an image is present, conduct a thorough analysis to extract key design information. The goal is to deconstruct the image into elements and styles that can be mapped to this Material Design System.

#### A. Overall UI Structure & Layout
* **Identify Major Regions:** Discern primary UI areas such as headers (e.g., Top App Bars), navigation regions (e.g., Navigation Rail, Navigation Bar), main content areas, and footers.
* **Pane Configuration:** Determine the number and arrangement of content panes. Note if it appears to be a single-pane, two-pane (split, fixed-flexible), or potentially three-pane layout.
* **Infer Window Size Class (WSC):** Based on the layout and density, estimate the most likely WSC (Compact, Medium, Expanded, etc.) the screenshot represents.

#### B. Component Recognition
* **Identify Design System Components:** Scan the image for visual elements that clearly map to the conceptual components defined in this Material system (e.g., Buttons, Cards, Chips, Text Fields, etc.).
* **Note Component Details:** For each identified component, observe its apparent type/variant, size, and content.
* **Addressing Elements Without Direct Matches:** If a visual element does not have an immediate mapping, select the closest available Material system component concept and style it strictly using Material system tokens.

#### C. Stylistic Cues
* **Color Palette:** 🎨 Identify key theme colors to potentially drive the dynamic palette, or default to the baseline palette. Determine light or dark theme.
* **Typography:** Observe the general style and hierarchy. Default to **Google Sans Flex**, and only override with another Google Font if the image's style is exceptionally distinct and warrants it.
* **Shape & Corner Radii:** 🔲
    * **General Rounding:** Assess the general corner rounding style for containers like Cards, Dialogs, Sheets, etc. Map these observations to the closest Material `md.sys.shape.corner.*` tokens (e.g., `extra-small`, `medium`, `large`, `extra-large`).
    * **Button Shapes:** Pay **critical attention** to button corner radii. They must use the specific radii defined for their size variant in Material (e.g., `md.comp.button.small.container.shape.round`).
    * **All shape applications MUST use Material system shape tokens.**
* **Elevation and Shadows:** 🌬️ Observe the use of shadows to infer the elevation levels (`md.sys.elevation.level0` to `level5`) of different surfaces.

#### D. Content Extraction (Where Feasible)
* **Text Content:** Replicate prominent text like headlines and button labels. Use representative placeholder text for extensive or illegible content.
* **Icons:** 📍 Attempt to identify icons by checking against the **"Approved Common Icons"** list first. If no match is found, use a generic fallback icon (`star`, `category`, etc.) as per the Icon Selection Strategy. **Do not invent icon names.**
* **Images:** Replace images within the UI with placeholders, following the official Image Generation Strategy.

### 3. Code Refactoring Protocol (For Prompts with Existing Code) 💻

This protocol systematically transforms a pre-existing HTML/CSS/JS document to conform to the Material Design System. The goal is a **complete replacement** of the original code's structure and styling, not a superficial modification.

#### Step 1: Analyze and Deconstruct the Source Code

Before writing any new code, perform a complete analysis of the provided source document.

1.  **Identify Foreign Frameworks:** Scan the `<head>` and `<body>` to identify all external CSS frameworks (e.g., Tailwind, Bootstrap), JS libraries (e.g., jQuery), and icon libraries (e.g., Font Awesome). These are marked for complete removal.
2.  **Map Conceptual Layout:** Analyze the HTML structure to understand the intended layout.
    * `"div class='grid grid-cols-4...'>"` should be conceptually mapped to a **four-column Material grid**.
    * `"header class='flex justify-between...'>"` should be mapped to a **Material Top App Bar**.
3.  **Map Conceptual Components:** Identify elements in the source code that correspond to Material components.
    * `"<div class='highlight-card...'>"` maps to `md.comp.elevated-card`.
    * `"<button class='topic-chip...'>"` maps to `md.comp.filter-chip`.
4.  **Analyze Dynamic Logic:** Examine all `<script>` tags. Identify any functions responsible for dynamically generating HTML (e.g., a function that builds a list of cards from a data array). This logic **MUST** be refactored in a later step.

#### Step 2: Re-author HTML with Material Structure

This is the most critical step. You will re-author the entire `<body>` structure from scratch.

> **THE RULE:** You **MUST NOT** retain the original HTML tags and classes. Discard all layout and component classes from the source framework (e.g., `grid-cols-4`, `flex`, `justify-between`, `py-3`, `rounded-lg`). Replace them with the corresponding Material GenUX structural classes as a foundation.

**Example - Grid Transformation:**
* **Source Code:** `<div id="for-you-grid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"></div>`
* **Correct Material Implementation:** `<div id="for-you-grid" class="grid s1 m2 l4 large-gap"></div>`

**Example - Header Transformation:**
* **Source Code:** `<header class="bg-white..."><div class="flex items-center...">...</div></header>`
* **Correct Material Implementation:** `<header class="fixed top-app-bar"><nav><button class="transparent circle">...</button><h5 class="title">...</h5>...</nav></header>`

#### Step 3: Refactor JavaScript to Generate Material-Compliant HTML

This step is crucial for dynamic pages. If the source JavaScript is generating HTML with old, foreign classes, the refactored page will fail.

> **THE RULE:** You must modify the JavaScript functions identified in Step 1. The template literals or string concatenations that create HTML **MUST** be updated to produce the new Material GenUX structure.

**Example - Card Generation Logic:**
* **Source JS:**
    ```javascript
    const card = `
        <div class="highlight-card bg-white rounded-lg...">...</div>
    `;
    forYouGrid.innerHTML += card;
    ```
* **Correct Refactored JS:**
    ```javascript
    const card = `
        <div class="card elevated genux-ripple">
            <img src="${story.imageUrl}" alt="${story.title}">
            <div class="card-content">
               <h3 class="headline">${story.title}</h3>
               ...
            </div>
        </div>
    `;
    forYouGrid.innerHTML += card;
    ```

#### Step 4: Apply Material CSS Overrides and Finalize

Once the HTML and JavaScript have been refactored to produce the correct structure, proceed with the standard generation steps:

1.  **Clean the `<head>`:** Remove all `<link>` and `<script>` tags related to the old frameworks. Ensure only the Material fonts and the Material GenUX script remain.
2.  **Generate Authoritative CSS:** Write the complete `<style>` block in the `<head>` with all necessary Material token definitions and CSS overrides.
3.  **Implement Ripple Effect:** Add the `.genux-ripple` class and the standard ripple effect CSS and JS to all interactive components.
4.  **Verify Checklist:** Before finishing, cross-reference the output against the Final Verification Checklist below.

### 4. Final Output Generation ⚙️

Regardless of the prompt type, all interpretations and design choices must be meticulously mapped to the components and subsystems of this Material Design System. Follow the established "General HTML Output Structure (Multi-Pass Approach)" for constructing the final HTML page.

* **Strict Adherence to Rules:** All critical constraints, such as button shapes, icon usage, and token application, **MUST** be strictly followed.
* **Handling Ambiguity:** If the input is ambiguous, state your interpretation clearly. Choose the closest valid Material component or style that fulfills the likely intent, styled exclusively with system tokens. Do not invent non-system elements.
* **Final Verification Checklist:** Before completing, verify:
    * **Component Accuracy:** Is every element mapped to the most appropriate Material component?
    * **Token Purity:** Is 100% of the styling derived from Material tokens?
    * **Shape Integrity:** Are there any oval-shaped buttons? `border-radius: 50%` MUST only be used on square elements. Pill shapes MUST be calculated as half the element's height.
    * **Icon Validity:** Do all icon names exist in the provided "Full Icon List"?
    * **Ripple Implementation:** Is the ripple effect correctly and universally applied to all interactive surfaces?
    * **Functionality Preserved:** If refactoring code, does the original logic still work as intended?
    * **No Visual Defects:** Is the final output polished and free of misaligned or incorrectly styled elements?

## Output Watermark (System Version)

To ensure traceability, all generated HTML pages *must* include a commented out watermark indicating the version of the design system used for generation and the build timestamp at the top of the output file.

* **Content:** The watermark must display the system version and timestamp, for example: "Ⓜ.GenUX/ Ver. 0.2.13 [06/24/25 | 10:57]".

* **Implementation:** This can be implemented as a comment within the `<style>` tag of the generated HTML.


## Final Output Requirements

* **Objective:** Generate a single, self-contained HTML file that provides a comprehensive demonstration of a responsive webpage. This page **MUST** be built strictly adhering to the **Material Design System specifications** outlined in this document.
* **Demonstration Scope:** The output should effectively showcase responsiveness, application of Material themes, correct component usage, and adherence to Material layout principles.
* **Single File Structure:** The entire output, including all HTML, CSS, and necessary JavaScript, **MUST** be delivered in one HTML file.
* **No External CSS/JS Files:** Do not link to or create separate `.css` or `.js` files. All Material CSS **MUST** be within `<style>` tags in the `<head>`. Any custom JavaScript **MUST** be in `<script>` tags before the closing `</body>` tag.
* **System Adherence is Paramount:** All visual styles, structural patterns, and component choices **MUST** originate from and conform to this Material Design System documentation. Material specifications are the final authority.

## CRITICAL IMPLEMENTATION CHECKLIST

Before generating any HTML, you **MUST** verify the following rules have been applied:

1.  **Shape Integrity (No Ovals):** Verify that `border-radius: 50%` is used only on elements with equal width and height. For rectangular "pill" shapes, the `border-radius` MUST be calculated as half of the element's height.
2.  **Ripple Effect:** Has the `.genux-ripple` class and required JS/CSS been applied to **all** interactive components (Buttons, FABs, Chips, List Items, etc.) and with the exception of navigation nav-items?
3.  **Icon Validity:** Do all icon names exist in the "Full Icon List"?
4.  **Correct Navigation Implementation:** Is the primary navigation component (`Navigation Bar` or `Navigation Rail`) correctly implemented according to the detected Window Size Class and is the Navigation Rail expandable with a menu toggle icon button at the top of the navigation rail nav-header along with proper collapsed and expanded navigation rail css?
5.  **Visual Consistency:** For linked views (like List-Detail), do conceptually identical elements (e.g., avatars) have the **exact same styling** and content in both places?
6.  **No Stretched Nav Items:** Verify that `.navigation-rail.expanded .nav-item` uses `align-items: flex-start;` and that `.nav-item` elements inside it use `width: auto;`. **Stretched navigation items that fill the full width of the expanded navigation rail are a critical visual defect and must be avoided.**
7. **Nested Component Integrity:** Verify that all nested components (e.g., Buttons inside Cards, Icons inside Buttons) retain their own required classes for variants, shapes, and effects as defined in their respective documentation.
8.  **Component Mapping:** Have I mapped conceptual requests (e.g., "header," "filters," "navigation") to the specific Material components defined in this document (`Top App Bar`, `Chip`, `Navigation Bar`)?
9.  **Style Overrides:** Does my generated CSS fully override any default styles from the foundational library, especially for `box-shadow`, `border-radius`, and `padding`?
10.  **Navigation Rail Alignment:** If the icons in the **collapsed** navigation rail are pushed to the left edge instead of being perfectly centered in the column, you have made an error. This is caused by incorrectly applying `align-items: flex-start` to the **collapsed** state.
11. **Proper Navigation per breakpoint:** Verify navigation components map to specififed window size classes (breakpoints)– navigation bar for compact, navigation rail for everything else. And never both visible at the same time.
12. **Navigation placement:** Verify `.navigation-rail` has `position: fixed; left: 0; top: 0;` applied, ensuring the navigation rail sits flush with the left edge of the viewport. 
13. **Light and Dark mode selection:** If the design includes the abillity to toggle modes between light and dark (preferably utilizing an icon button or switch component as the trigger element) verify both light and dark mode styles are represented and this interaction properly switches modes on the page.

---


## Accessibility overview

### Color & contrast

Color and contrast help users see and interpret app content, interact with elements, and understand actions.

* **Contrast ratios**
    * Contrast ratios show the difference in color, written as 1:1 or 21:1.
    * A greater difference between the two numbers in the ratio indicates a greater difference in relative luminance.
    * The W3C recommends specific contrast ratios for text and images:
        * **Large text (at 14 pt bold/18 pt regular and up) and graphics**: At least 3:1 against the background.
        * **Small text**: At least 4.5:1 against the background.
* **Clustering elements**
    * Non-text elements like button containers should have a contrast ratio of at least 3:1 with their background.
    * Clustered elements, such as a group of buttons, need to be distinguishable from each other and benefit from a 3:1 contrast ratio against the background.
    * Standalone elements like FABs are already prominent and do not need to meet the 3:1 contrast ratio.

### Structure

* **Hierarchy**
    * Navigation should be easy, so users understand their location within the app and what is important.
    * Use visual and textual cues like color, shape, text, and motion to emphasize important information.
    * Simplify the UI by using clearly visible elements, sufficient contrast and size, and a clear hierarchy of importance.
    * Place important actions at the top or bottom of the screen and related items of a similar hierarchy next to each other.
    * Screen readers rely on the top-down structure of HTML, so designers should collaborate with developers to ensure the correct reading order.
* **Web landmarks and headings**
    * Defining content and UI layout with landmarks and headings improves navigation and comprehension for assistive technologies.
    * For web pages, landmarks and headings help users orient themselves and navigate large sections of content.
    * **Landmarks** are large content blocks that establish the high-level structure. There are eight ARIA landmark roles: navigation, search, main, banner, complementary, contentinfo, region, and form.
    * **Headings** (H1-H6) should be used in sequential order based on content hierarchy, not visual styling. It is recommended to use a single H1 for the page title.
* **Target sizes**
    * Touch targets are the screen areas that respond to user input and should be at least 48x48dp for most platforms. This size is about 9mm, which is within the recommended 7-10mm for touchscreen elements. iOS recommends 44x44dp targets.
    * Pointer targets, for devices like a mouse or stylus, should have a minimum size of 44x44dp.
    * Targets separated by 8dp of space or more generally promote balanced information density and usability.

### Flow

* **Focus order & key traversal**
    * Users should be able to navigate and interact with an app using a keyboard or other assistive technology.
    * The default tab order follows the DOM, typically from left to right and top to bottom.
    * Define the initial focus when a screen loads and for components with multiple interactive elements.
    * When a dialog opens, focus should be set to an element within it, and when closed, focus should return to the element that triggered it.
    * For complex layouts, a group of interactive elements can be treated as a single tab stop, with arrow keys used to navigate sub-elements.
* **Keyboard shortcuts**
    * Keyboard shortcuts provide access to menus and functions without a mouse.
    * By default, shortcuts should use a combination of two or more keys.
    * Provide a tutorial or list of all custom keyboard shortcuts.
    * If a single-key shortcut is used, allow users to remap it, activate it only when a relevant component is focused, or turn it off.

### Elements

* **Labeling elements**
    * Labels enhance understanding of an element's function and reduce confusion for users of assistive technology.
    * **Visual elements that need labels**: interactive icons or buttons without visible text, interactive images, visual cues like progress bars, and meaningful icons or images.
    * **Text elements that need labels for context**: generic links ("Learn more") and buttons with generic text ("Save") when there are multiple on a page.
    * Do not label non-interactive UI text or buttons with sufficient text.
    * Do not include the element's role (e.g., "button") in the label, as this is added automatically.
    * Labels should concisely describe the element's content, purpose, and behavior.
    * Decorative images that do not add value for visually-impaired users should be marked as decorative to be hidden from screen readers.
    * Assign an ARIA role (for web) or component type (for mobile) to all interactive elements to communicate interaction patterns.

## Writing and Text

### Accessibility text

Accessibility text is used by screen reader software. Screen readers read on-screen text and elements, including visible and non-visible alternative text.

* **Adjacent text**: Text in and around images should present key information about the image.
* **Captions**: Text appearing below an image that explains contextual information. Both sighted and screen reader users rely on captions.
* **Alternative text (Alt text)**: A short label (up to 125 characters) in the code that describes an image for users who cannot see it. It should not include "image of" or "picture of." Alt text is also valuable for sighted users if an image fails to load and can improve SEO.
* **Text color**: Essential information in informative images must meet color contrast requirements: 3:1 for large text and 4.5:1 for small text. Decorative elements do not need to meet these requirements.

### Text truncation

Information should always be accessible, even if text is truncated or wrapped. Content, understandability, and functionality must not be lost when users change their type settings.

* **Text wrapping**: Text should wrap to the next line when it is critical for understanding or when there is space.
* **Component height and width**: Some components can expand vertically or horizontally to accommodate more text.
* **Ellipses with hover or link**: Truncated text can be replaced with an ellipsis if the full text is available through a tooltip or link. It is not accessible if there is an ellipsis with no way to view the truncated text.

### Text resizing

Users with low vision or those who prefer large text should be able to scale up the text size in a UI, with UIs supporting a minimum increase of 200%.

* When text is resized, the text and line height scale proportionally, while padding and spacing between elements remain constant.
* Components without text, such as progress indicators or checkboxes, are not affected by text resizing.
* To handle large type, you can increase the container size, reflow the layout by stacking components, enable scrolling (preferably vertical only), or use tooltips for enlarged labels in space-constrained areas like app bars.



## Material Design System - Elevation (`md.sys.elevation`)

Elevation in Material Design is the relative distance between two surfaces along the z-axis, used to create visual hierarchy and depth. It helps users understand the spatial relationships between elements and focus their attention.

**Core Principles for LLMs:**

*   **Limited Levels:** Material 3 uses a constrained set of six elevation levels (0 to +5) to encourage thoughtful UI design.
*   **Primary Depiction via Tonal Difference:** By default, Material 3 surfaces use tonal differences to indicate separation and edges. Overlapping areas or components should utilize different surface color roles for clear visual distinction.
*   **Shadows for Emphasis & Protection:** Shadows are used more selectively than in previous versions, primarily to protect elements against busy backgrounds or to encourage interaction, rather than being applied by default to all levels.
*   **Elevation Tokens:** Elevation levels are implemented using tokens, which define the dp height. These tokens themselves do not inherently include shadow or color; the platform determines the specific visual treatment.
*   **Component Default Elevations:** Most components have a default resting elevation that should generally not be changed.
*   **Interactive States:** Elevation changes often occur in response to user interaction (e.g., hover, press, drag), typically increasing the elevation by one level. Levels +4 and +5 are often reserved for these user-interacted states.

**Elevation Levels & Tokens**
Material uses six levels of elevation, each with a corresponding dp value. These are named from 0 to +5.

`md.sys.elevation.level0`
*   **DisplayName:** 0
*   **Elevation:** `0` dp
*   *Note:* Typically no shadow. Used for elements like non-scrolled App Bars, Buttons (filled, tonal, outlined), Cards (filled, outlined), Chips (flat), Dialog (full-screen), Lists, Sliders, Tabs. (Consult detailed component specifications for an exhaustive list of Level 0 components.)

`md.sys.elevation.level1`
*   **DisplayName:** +1
*   **Elevation:** `1` dp
*   *Used for:* Banner, Bottom sheet (modal), Button (elevated), Card (elevated), Chips (elevated), Navigation drawer (modal), Side sheet (modal).

`md.sys.elevation.level2`
*   **DisplayName:** +2
*   **Elevation:** `3` dp
*   *Used for:* App bar (scrolled), Menu, Navigation bar, Rich tooltip, Toolbar.

`md.sys.elevation.level3`
*   **DisplayName:** +3
*   **Elevation:** `6` dp
*   *Used for:* Date pickers, Dialogs (modal), Extended FAB, FAB. This is a common resting state for components that float.

`md.sys.elevation.level4`
*   **DisplayName:** +4
*   **Elevation:** `8` dp
*   *Note:* Generally reserved for user-interacted states (e.g., hover on a Level 3 FAB). Not typically assigned as a resting level.

`md.sys.elevation.level5`
*   **DisplayName:** +5
*   **Elevation:** `12` dp
*   *Note:* Generally reserved for user-interacted states (e.g., dragged). Not typically assigned as a resting level.

**Depicting Elevation**
Elevation is communicated through several visual cues:

**1. Tonal Difference & Surface Color Roles:**

*   This is the **primary method** in Material 3.
*   Surfaces use different surface and surface container color roles to create visual separation. These roles are flexible and not directly tied to a specific elevation level but should ensure contrast between overlapping elements.
*   **LLM Instruction:** When surfaces overlap, ensure they use distinct surface color roles to be visually distinguishable. Ensure sufficient contrast, especially for interactive components.
*   **DEPRECATION NOTICE:** The previous system of using `md.sys.color.surface-tint` overlays to communicate elevation (with opacity increasing per level) is **deprecated as of March 2023**. Do not use surface tint overlays in combination with the new surface color roles. The `md.sys.color.surface-tint` color role itself may still exist (e.g., for branding accents), but it is **not** the primary mechanism for conveying elevation levels through opacity changes on the base surface.

**2. Shadows:**

*   Shadows help express the degree of elevation, especially the distance between surfaces.
*   Smaller, sharper shadows indicate closer proximity; larger, softer shadows indicate more distance.
*   **When to use:**
    *   **Protect elements:** Use when a background is visually busy or patterned to emphasize elements like cards, chips, or buttons.
    *   **Encourage interaction:** Elements can temporarily lift (and thus show a more prominent shadow) on focus, selection, or other interactions.
*   **LLM Instruction:** Apply shadows thoughtfully. Fewer shadow levels create a stronger impact. In Material 3, shadows are not applied by default at all levels as they were in Material 2. The shadow color is `md.sys.color.shadow` (e.g., `rgba(0,0,0,1)` in light/dark themes).

**3. Scrims:**

*   Scrims are semi-transparent layers used to obscure content behind a surface, bringing focus to elements like modals, dialogs, or expanded navigation menus.
*   They use the `scrim` color role (e.g., `md.sys.color.scrim`), typically at an opacity of **32%**.
*   **LLM Instruction:** Apply a scrim beneath temporary, important UI elements that overlay other content to de-emphasize the background.

**Component Behavior and Elevation**

*   **Resting State:** Components have a default (resting) elevation. For example, a FAB typically rests at Level 3 (`6dp`). An App Bar (not scrolled) is at Level 0 (`0dp`).
*   **Interactive Elevation Changes:**
    *   User interactions like hover, focus, or drag typically cause a temporary increase in elevation, often by one level. For example, hovering over a FAB (Level 3) can raise it to Level 4 (`8dp`).
    *   Elements can also lower when a higher element appears.
*   **LLM Instruction:** Ensure that interactive components change elevation consistently according to Material guidelines. For example, all Material buttons typically increase elevation by 1 level when hovered.

**Key Considerations for LLMs:**

*   **Prioritize Tonal Separation:** Emphasize the use of distinct surface color roles for separation first.
*   **Strategic Shadow Use:** Use shadows for clear purpose (protection, interaction cues), not ubiquitously.
*   **Adhere to Elevation Levels:** Map components to the defined 0 to +5 elevation levels and their corresponding `dp` values.
*   **Reflect Interactive States:** Accurately model the change in elevation during user interactions like hover and drag.
*   **Avoid Deprecated Practices:** Do not implement elevation based on the old surface tint overlay system with scaling opacity. Focus on surface color roles for tonal difference and specific elevation tokens for height.
*   **Consistency:** Ensure elevation changes are consistent across similar elements.
*   **Accessibility:** Ensure that tonal differences and shadows provide sufficient contrast for users to distinguish surfaces and interactive elements.



### Elevation - Code Samples & Implementation

This section provides the CSS implementation for the Material Design System's elevation tokens. It translates the conceptual elevation levels (0 to +5) into concrete `box-shadow` values, which are defined as CSS custom properties.

It's important to remember that in Material 3, elevation is primarily communicated through tonal differences using surface color roles. These `box-shadow` styles should be used strategically to protect elements against busy backgrounds or to provide emphasis during user interaction, not applied to all surfaces by default.

#### 1. CSS Custom Property Definitions

The following CSS block defines a set of variables for each elevation level. These should be included in the main `<style>` tag of the document. Note that `level0` has no shadow, and the other levels use a combination of two shadows to create a realistic sense of depth, with the color derived from the `--md-sys-color-shadow-rgb` variable.

```css
/*
 * Material Design System - Elevation CSS Variables
 * Defines box-shadow values for elevation levels 1-5.
 */
:root {
  /* Level 0 has no shadow */
  --md-sys-elevation-level0-shadow: none;

  /* Level 1 Shadow (1dp) */
  --md-sys-elevation-level1-shadow: 0px 1px 3px 1px rgba(var(--md-sys-color-shadow-rgb), 0.15), 
                                     0px 1px 2px 0px rgba(var(--md-sys-color-shadow-rgb), 0.30);

  /* Level 2 Shadow (3dp) */
  --md-sys-elevation-level2-shadow: 0px 2px 6px 2px rgba(var(--md-sys-color-shadow-rgb), 0.15), 
                                     0px 1px 2px 0px rgba(var(--md-sys-color-shadow-rgb), 0.30);

  /* Level 3 Shadow (6dp) */
  --md-sys-elevation-level3-shadow: 0px 4px 8px 3px rgba(var(--md-sys-color-shadow-rgb), 0.15), 
                                     0px 1px 3px 0px rgba(var(--md-sys-color-shadow-rgb), 0.30);

  /* Level 4 Shadow (8dp) - Typically for interaction states */
  --md-sys-elevation-level4-shadow: 0px 6px 10px 4px rgba(var(--md-sys-color-shadow-rgb), 0.15), 
                                     0px 2px 3px 0px rgba(var(--md-sys-color-shadow-rgb), 0.30);

  /* Level 5 Shadow (12dp) - Typically for interaction states */
  --md-sys-elevation-level5-shadow: 0px 8px 12px 6px rgba(var(--md-sys-color-shadow-rgb), 0.15), 
                                     0px 4px 4px 0px rgba(var(--md-sys-color-shadow-rgb), 0.30);
}
```

#### 2. Utility Classes

These utility classes allow for the direct application of an elevation level to any element. For example, an elevated card would use the `.elevation-1` class for its resting state.

```css
/*
 * Material Design System - Elevation Utility Classes
 */
.elevation-0 { box-shadow: var(--md-sys-elevation-level0-shadow); }
.elevation-1 { box-shadow: var(--md-sys-elevation-level1-shadow); }
.elevation-2 { box-shadow: var(--md-sys-elevation-level2-shadow); }
.elevation-3 { box-shadow: var(--md-sys-elevation-level3-shadow); }
.elevation-4 { box-shadow: var(--md-sys-elevation-level4-shadow); }
.elevation-5 { box-shadow: var(--md-sys-elevation-level5-shadow); }
```

#### 3. Example Usage

This example shows how to apply the elevation utility classes to create surfaces at different levels of depth. A common use case is to increase an element's elevation on hover to indicate interactivity.

```html
<style>
  .elevation-demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 24px;
    padding: 24px;
  }
  .elevation-demo-box {
    width: 120px;
    height: 120px;
    background-color: var(--md-sys-color-surface-container-low);
    border-radius: var(--md-sys-shape-corner-medium);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--md-sys-typescale-body-medium-font-family);
    transition: all var(--md-sys-motion-duration-fast) var(--md-sys-motion-easing-fast);
  }

  /* Example of increasing elevation on hover */
  .elevation-demo-box.interactive:hover {
    box-shadow: var(--md-sys-elevation-level4-shadow);
    transform: translateY(-2px);
  }
</style>

<div class="elevation-demo-grid">
  <div class="elevation-demo-box elevation-0">Level 0</div>
  <div class="elevation-demo-box elevation-1">Level 1</div>
  <div class="elevation-demo-box elevation-2">Level 2</div>
  <div class="elevation-demo-box elevation-3 interactive">Level 3 (Hover)</div>
</div>
```

---

## Expressive Design: A New Dimension of User Experience

Expressive design is an evolution of the Material Design system that focuses on creating interfaces that are more engaging, emotionally resonant, and easier to use. It moves beyond purely functional aesthetics to build a deeper, more personal connection with the user. This is not a replacement for the core GenUX system ("M4") but a set of features, updated components, and design tactics that can be layered on top of the established Material 3 foundation.

Extensive user research has demonstrated that expressive designs are strongly preferred by users of all ages and can make interfaces significantly easier to navigate by guiding user attention more effectively. For example, key UI elements in expressive screens were spotted up to four times faster, and tap times for primary actions decreased by seconds.

### Core Principle: Emotion-Driven Usability

The fundamental goal of Expressive Design is to make interfaces that *feel* something. This is achieved by strategically applying variations in **color, shape, size, motion, and containment** to create a clear visual hierarchy and draw attention to what matters most. When applied correctly, these principles lead to designs that users perceive as more "energetic," "playful," "creative," and "friendly."

### Interpreting Expressive Intent

When a user's prompt includes subjective, emotional, or stylistic keywords, it should be interpreted as a request to apply Expressive Design tactics. Look for terms like:

* **Emotional:** "lively," "fun," "playful," "energetic," "calm," "serious," "friendly"
* **Aesthetic:** "bold," "modern," "fresh," "creative," "unique," "more personality"
* **Implicit:** "make it pop," "less boring," "more engaging," "draw attention to..."

When such intent is detected, you are directed to move beyond a baseline implementation and thoughtfully apply the following Expressive tactics.

### The 7 Tactics of Expressive Design

#### 1. Use a Variety of Shapes
Shape is a powerful tool for communication and setting a tone. Combine different shapes and corner radii to create visual tension or cohesion, guiding the user's focus.
* **Action:** Break from a uniform shape style to draw attention to a specific, important element. For instance, if most elements are rounded rectangles, a primary call-to-action button could use a different shape, like a squircle or a pill shape, to stand out.
* **Caution:** Be mindful that using smaller or less conventional shapes for essential actions can sometimes make them seem less important.

#### 2. Apply Rich and Nuanced Colors
Use the dynamic and vibrant color schemes available in the GenUX system to sharpen hierarchy and clarify key actions.
* **Action:** Use contrasting surface tones (e.g., `surface-container`, `surface-container-high`) to create distinct content groupings. Apply a high-contrast accent color (e.g., from the secondary or tertiary palette) to a key action to make it the clear focal point of the screen.
* **Caution:** Without sufficient contrast, elements can blend together and harm usability.

#### 3. Guide Attention with Emphasized Typography
Use heavier weights, larger sizes, and distinct colors from the GenUX typescale to create editorial-like moments and draw attention to important UI elements like headlines and primary actions.
* **Action:** Apply an emphasized type style (e.g., `md.sys.typescale.display-medium` with a strong weight) to a key headline to create a strong focal point. This is particularly effective for creating immersive, engaging content experiences.
* **Caution:** Do not compromise core functionality. For instance, research shows that removing text labels from actions in favor of pure iconography can decrease usability.

#### 4. Contain Content for Emphasis
Organize content into clear, logical groupings using containers and spacing to give important information visual prominence.
* **Action:** Group related items, like a list of recent payments or favorite contacts, within a visually distinct container (such as a Card or a pane with a different surface color). Use spacing, rhythm, and similarity to make these groupings more distinct and scannable.
* **Caution:** Ungrouped information can blend together, making the interface harder to scan and understand.

#### 5. Add Fluid and Natural Motion
Utilize the GenUX motion system (`md.sys.motion`) to make interactions feel more alive, fluid, and natural.
* **Action:** Apply expressive motion springs or custom micro-animations for key interactions. A shape-morph animation, for example, can create a seamless and delightful transition as a component changes state (e.g., a square button becoming a circle on selection).
* **Reference:** The GenUX motion system uses `fast` (350ms), `default` (500ms), and `slow` (650ms) timings. Apply these thoughtfully based on the size and importance of the transitioning element.

#### 6. Leverage Component Flexibility
The UI should adapt to the user's context, especially across different screen sizes. Shift components and controls to make tasks easier in any environment.
* **Action:** Adapt layouts for foldable and large screens by applying the canonical layouts defined in GenUX (Feed, List-Detail, Supporting Pane). For example, a single-column list on a compact screen can expand to a two-pane list-detail view on an expanded display.
* **Example:** A floating toolbar can collapse into a single FAB on scroll to preserve screen real estate while keeping the primary action accessible.

#### 7. Combine Tactics to Create "Hero Moments"
A hero moment uses multiple expressive tactics to break from a predictable layout and create a standout, focused experience. These moments should be brief, delightful, and used sparingly to highlight the most critical interactions in your product.
* **Action:** To create a hero moment, ask if the interaction is emotionally impactful or a key part of the user journey. For example, completing a critical task could be celebrated with a combination of emphasized typography ("Success!"), a vibrant color change, and a delightful animation.
* **Caution:** Overusing hero moments can be overwhelming and distracting. Stick to one or two per core user journey.

#### 8. Principle of Singular Focus
To create a clear visual hierarchy, apply expressive tactics (such as vibrant color, unique shape, or prominent typography) to **only one primary component group per screen**. For example, on a dashboard, either the key metrics or the main call-to-action can be expressive, but not both. This ensures a clear focal point and avoids visual competition.

### Final Directive: Functionality First
While expressive design offers powerful tools for engagement, it must not compromise clarity or usability. Always respect established UI patterns and GenUX component guidelines. Prioritize functionality and adhere to all accessibility standards for color contrast and target sizes. The goal is to find the right balance between a fresh, expressive interface and a familiar, intuitive user experience.




## Layout

The layout hierarchy consists of navigation and panes.

### Layout Regions

*   **Navigation Region:** Holds primary navigation components (e.g., navigation drawer, navigation rail, navigation bar). Navigation components are placed close to window edges for easy reach (left for LTR, right for RTL).
    *   **Compact Screens (`<600px`):** You **MUST** implement the **Navigation Bar** at the bottom of the viewport.
    *   **Medium and Larger Screens (`>=600px`):** You **MUST** implement the **Navigation Rail** on the leading edge.
*   **Pane Region(s):** Contains most of the app's content, including images, text, lists, cards, buttons, app bars, etc. Content within the body region is grouped into one or more panes.

### Margin, Padding, and Gutter/Spacer

*   **Margin:**
    *   Creates separation between layout regions, panes, and the screen boundaries.
    *   Margin widths adapt at different window size classes (breakpoints).
*   **Gutter:**
    *   **Gutter:** The general term for space between panes, panels, cards, or sections. The gutter between panes can contain a drag handle to resize pane containers.
*   **Padding:**
    *   The spacing from an element's edge (i.e. pane) inward towards its content.

### Window Size Classes (WSC)

Window size classes define specific width-based breakpoints, along with associated margins, padding, gutters/spacers, typical pane configurations, and navigation patterns. These ensure a responsive and adaptive design.

*   **Compact** (`compact`):
    *   Typically: Phone in Portrait
    *   Width: `0 - 599dp`
    *   Margin: `16dp`
    *   Padding: `16dp`
    *   Gutter/Spacer: `0dp`
    *   Panes: 1 (layouts display only one pane/view at a time)
    *   Navigation: **Navigation Bar**.

*   **Medium** (`medium`):
    *   Typically: Tablet in Portrait, Foldable in Portrait (unfolded)
    *   Width: `600dp - 839dp`
    *   Margin: `24dp`
    *   Padding: `24dp`
    *   Gutter/Spacer: `24dp`
    *   Panes: 1 (recommended) to 2 panes
    *   Navigation: **Navigation Rail Collapsed** typically collapsed by default, can be expanded by user action.

*   **Expanded** (`expanded`):
    *   Typically: Phone in Landscape, Tablet in Landscape, Foldable in Landscape (unfolded), Smaller Laptop & Desktop windows
    *   Width:  `840dp - 1199dp`
    *   Margin: `24dp`
    *   Padding: `24dp`
    *   Gutter/Spacer: `24dp`
    *   Panes: 2 (recommended) or 1
    *   Navigation: **Navigation Rail Expanded** typically expanded by default, can be collapsed by user action.

*   **Large** (`large`):
    *   Typically: Laptop & Desktop windows
    *   Width: `1200dp - 1599dp`
    *   Margin: `24dp`
    *   Padding: `24dp`
    *   Gutter/Spacer: `24dp`
    *   Panes: 2 (recommended) or 1
    *   Navigation: **Navigation Rail Expanded** typically expanded by default, can be collapsed by user action.

*   **Extra Large** (`extraLarge`):
    *   Typically: Larger Desktops & Extended Displays
    *   Width: `>= 1600dp`
    *   Margin: `24dp`
    *   Padding: `24dp`
    *   Gutter/Spacer: `24dp`
    *   Panes: 2 (recommended), or 1 to 3
    *   Navigation: **Navigation Rail Expanded** typically expanded by default, can be collapsed by user action.

## Primary Navigation Component by Window Size Class (Default)

* Based on the identified Window Size Class (breakpoint), you **MUST** generate the specified primary navigation component.

| Window Size Class | Default Primary Navigation Component |
|-------------------|--------------------------------------|
| Compact           | Navigation Bar                       |
| Medium            | Navigation Rail Collapsed            |
| Expanded          | Navigation Rail Expanded             |
| Large             | Navigation Rail Expanded             |
| Extra Large       | Navigation Rail Expanded             |

##### **Critical Implementation for Navigation**

When generating a List Detail layout, the primary navigation component **MUST** be chosen based on the global Window Size Class rules. This is not optional.

### Special Considerations for Adaptive Layouts

*   **Transitions:** Layouts need to dynamically transition when context changes (e.g., foldable device unfolds/folds, device rotates, app enters/exits split-screen or multi-window mode, free-form window is resized).
*   **Line Length:** Pay special attention to typographic elements like line length, especially on `large` and `extra-large` layouts, to ensure readability– ensure a maximum of 154 characters per line.

### General Navigation Best Practices in Layout
*   **Single Primary Navigation:** An application should only display one primary navigation component (Navigation Bar or Navigation Rail depending on window-size class) at any given time for top-level destinations. They should not be used simultaneously for the same navigation purpose.
*   **Contextual Navigation vs. Global Navigation:** Distinguish between global app navigation (handled by Navigation Bar or Rail) and contextual navigation or actions (which might reside in a Top App Bar or other components such as toolbars).

---




### Layouts - Code Samples & Implementation

#### CSS Implementation
```css
@media (min-width: 600px) {

    body.rail-collapsed {
        padding-left: 96px;
    }
    body.rail-expanded {
        padding-left: 220px;
    }
}
```

```html
<body class="rail-expanded">
    <div class="page-container">

        <!-- Navigation Rail (for screens >= 600dp) -->
        <nav class="navigation-rail expanded" id="main-nav-rail">
            <!-- Navigation Rail: nav header, nav items, nav content -->
        </nav>

        <main class="pane">
            <!-- Main Content Area -->
        </main>

        <!-- Navigation Bar (for screens < 600dp) -->
        <nav class="navigation-bar">
            <!-- Navigation Bar: nav items-->
        </nav>

    </div>
</body>
```

---


## Motion (md.sys.motion)

## Fast (`md.sys.motion.fast`)
* **Description:** Use for small elements or components that move, resize, rotate, or change shape.
* **Timing Function:** `cubic-bezier(0.42, 1.67, 0.21, 0.90)`
* **Duration:** `350ms`

## Default (`md.sys.motion.default`)
* **Description:** Use for most elements that move, resize, rotate, or change shape.
* **Timing Function:** `cubic-bezier(0.38, 1.21, 0.22, 1.00)`
* **Duration:** `500ms`

## Slow (`md.sys.motion.slow`)
* **Description:** Use for large elements, such as panes, that move, resize, rotate, or change shape.
* **Timing Function:** `cubic-bezier(0.39, 1.29, 0.35, 0.98)`
* **Duration:** `650ms`




### Motion - Code Samples & Implementation

This section provides the necessary CSS to implement the Material Design System's motion tokens. The code defines all `md.sys.motion` tokens as CSS custom properties and provides a set of utility classes for easy application of transition effects to HTML elements.

#### 1. CSS Custom Property Definitions

The following CSS block should be included in the main `<style>` tag of every generated HTML document. It defines the duration and easing (timing-function) for each motion type, making them available for use in any component's transition styles.

```css
/*
 * Material Design System - Motion Token CSS Variables
 */
:root {
  /* --- Fast Motion --- */
  --md-sys-motion-duration-fast: 350ms;
  --md-sys-motion-easing-fast: cubic-bezier(0.42, 1.67, 0.21, 0.90);

  /* --- Default Motion --- */
  --md-sys-motion-duration-default: 500ms;
  --md-sys-motion-easing-default: cubic-bezier(0.38, 1.21, 0.22, 1.00);

  /* --- Slow Motion --- */
  --md-sys-motion-duration-slow: 650ms;
  --md-sys-motion-easing-slow: cubic-bezier(0.39, 1.29, 0.35, 0.98);
}
```

#### 2. Utility Classes

These utility classes allow for the direct application of motion tokens to elements for common CSS properties like `transform`, `background-color`, and `opacity`.

```css
/*
 * Material Design System - Motion Utility Classes
 */

/* --- Fast Transitions --- */
.transition-fast {
  transition: all var(--md-sys-motion-duration-fast) var(--md-sys-motion-easing-fast);
}
.transition-transform-fast {
  transition: transform var(--md-sys-motion-duration-fast) var(--md-sys-motion-easing-fast);
}

/* --- Default Transitions --- */
.transition-default {
  transition: all var(--md-sys-motion-duration-default) var(--md-sys-motion-easing-default);
}
.transition-transform-default {
  transition: transform var(--md-sys-motion-duration-default) var(--md-sys-motion-easing-default);
}

/* --- Slow Transitions --- */
.transition-slow {
  transition: all var(--md-sys-motion-duration-slow) var(--md-sys-motion-easing-slow);
}
.transition-transform-slow {
  transition: transform var(--md-sys-motion-duration-slow) var(--md-sys-motion-easing-slow);
}
```

#### 3. Example Usage

Here is a simple example demonstrating how to use the motion utility classes to animate an element on hover. The `.transition-transform-default` class is applied to the element, and a CSS `:hover` selector is used to change its `transform` property, triggering the animation.

```html
<style>
  .motion-demo-box {
    width: 100px;
    height: 100px;
    background-color: var(--md-sys-color-primary-container);
    border-radius: var(--md-sys-shape-corner-medium);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--md-sys-color-on-primary-container);
  }

  .motion-demo-box:hover {
    transform: scale(1.1) rotate(5deg);
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
  }
</style>

<div class="motion-demo-box transition-default">
  Hover Me
</div>
```

---


## Baseline Colors (md.sys.color)
> Colors for Material Design - including colors for the light and dark themes.
* *(Note: Some tokens have the same value for Light & Dark themes.)*
* A minimum of 4.5:1 contrast ratio is required for all text.
* If directed to use dynamic color override, use the custom color palette overrides reference [Dynamic color palette](palette-dynamic.md).

### Endorsed colors

#### Endorsement container
* **Light:** `md.sys.color.endorsement-container[theme=light]` = `rgba(234, 221, 255, 1)`
* **Dark:** `md.sys.color.endorsement-container[theme=dark]` = `rgba(79, 55, 139, 1)`

#### On endorsement container
* **Light:** `md.sys.color.on-endorsement-container[theme=light]` = `rgba(33, 0, 93, 1)`
* **Dark:** `md.sys.color.on-endorsement-container[theme=dark]` = `rgba(234, 221, 255, 1)`

### Primary colors

#### Primary
* **Light:** `md.sys.color.primary[theme=light]` = `rgba(11, 87, 208, 1)`
* **Dark:** `md.sys.color.primary[theme=dark]` = `rgba(168, 199, 250, 1)`

#### Primary container
* **Light:** `md.sys.color.primary-container[theme=light]` = `rgba(211, 227, 253, 1)`
* **Dark:** `md.sys.color.primary-container[theme=dark]` = `rgba(8, 66, 160, 1)`

#### On primary
* **Light:** `md.sys.color.on-primary[theme=light]` = `rgba(255, 255, 255, 1)`
* **Dark:** `md.sys.color.on-primary[theme=dark]` = `rgba(6, 46, 111, 1)`

#### On primary container
* **Light:** `md.sys.color.on-primary-container[theme=light]` = `rgba(8, 66, 160, 1)`
* **Dark:** `md.sys.color.on-primary-container[theme=dark]` = `rgba(211, 227, 253, 1)`

#### Inverse primary
* **Light:** `md.sys.color.inverse-primary[theme=light]` = `rgba(168, 199, 250, 1)`
* **Dark:** `md.sys.color.inverse-primary[theme=dark]` = `rgba(11, 87, 208, 1)`

### Secondary colors

#### Secondary
* **Light:** `md.sys.color.secondary[theme=light]` = `rgba(0, 99, 155, 1)`
* **Dark:** `md.sys.color.secondary[theme=dark]` = `rgba(127, 207, 255, 1)`

#### Secondary container
* **Light:** `md.sys.color.secondary-container[theme=light]` = `rgba(194, 231, 255, 1)`
* **Dark:** `md.sys.color.secondary-container[theme=dark]` = `rgba(0, 74, 119, 1)`

#### On secondary
* **Light:** `md.sys.color.on-secondary[theme=light]` = `rgba(255, 255, 255, 1)`
* **Dark:** `md.sys.color.on-secondary[theme=dark]` = `rgba(0, 51, 85, 1)`

#### On secondary container
* **Light:** `md.sys.color.on-secondary-container[theme=light]` = `rgba(0, 74, 119, 1)`
* **Dark:** `md.sys.color.on-secondary-container[theme=dark]` = `rgba(194, 231, 255, 1)`

### Tertiary colors

#### Tertiary
* **Light:** `md.sys.color.tertiary[theme=light]` = `rgba(20, 108, 46, 1)`
* **Dark:** `md.sys.color.tertiary[theme=dark]` = `rgba(109, 213, 140, 1)`

#### Tertiary container
* **Light:** `md.sys.color.tertiary-container[theme=light]` = `rgba(196, 238, 208, 1)`
* **Dark:** `md.sys.color.tertiary-container[theme=dark]` = `rgba(15, 82, 35, 1)`

#### On tertiary
* **Light:** `md.sys.color.on-tertiary[theme=light]` = `rgba(255, 255, 255, 1)`
* **Dark:** `md.sys.color.on-tertiary[theme=dark]` = `rgba(10, 56, 24, 1)`

#### On tertiary container
* **Light:** `md.sys.color.on-tertiary-container[theme=light]` = `rgba(15, 82, 35, 1)`
* **Dark:** `md.sys.color.on-tertiary-container[theme=dark]` = `rgba(196, 238, 208, 1)`

### Error colors

#### Error
* **Light:** `md.sys.color.error[theme=light]` = `rgba(179, 38, 30, 1)`
* **Dark:** `md.sys.color.error[theme=dark]` = `rgba(242, 184, 181, 1)`

#### Error container
* **Light:** `md.sys.color.error-container[theme=light]` = `rgba(249, 222, 220, 1)`
* **Dark:** `md.sys.color.error-container[theme=dark]` = `rgba(140, 29, 24, 1)`

#### On error
* **Light:** `md.sys.color.on-error[theme=light]` = `rgba(255, 255, 255, 1)`
* **Dark:** `md.sys.color.on-error[theme=dark]` = `rgba(96, 20, 16, 1)`

#### On error container
* **Light:** `md.sys.color.on-error-container[theme=light]` = `rgba(140, 29, 24, 1)`
* **Dark:** `md.sys.color.on-error-container[theme=dark]` = `rgba(249, 222, 220, 1)`

### Warning colors

#### Warning
* **Light:** `md.sys.color.warning[theme=light]` = `rgba(128, 86, 6, 1)`
* **Dark:** `md.sys.color.warning[theme=dark]` = `rgba(245, 189, 105, 1)`

#### Warning container
* **Light:** `md.sys.color.warning-container[theme=light]` = `rgba(255, 221, 177, 1)`
* **Dark:** `md.sys.color.warning-container[theme=dark]` = `rgba(98, 64, 0, 1)`

#### On warning
* **Light:** `md.sys.color.on-warning[theme=light]` = `rgba(255, 255, 255, 1)`
* **Dark:** `md.sys.color.on-warning[theme=dark]` = `rgba(68, 43, 0, 1)`

#### On warning container
* **Light:** `md.sys.color.on-warning-container[theme=light]` = `rgba(41, 24, 0, 1)`
* **Dark:** `md.sys.color.on-warning-container[theme=dark]` = `rgba(255, 221, 177, 1)`

### Surface colors

#### Surface
* **Light:** `md.sys.color.surface[theme=light]` = `rgba(255, 255, 255, 1)`
* **Dark:** `md.sys.color.surface[theme=dark]` = `rgba(19, 19, 20, 1)`

#### Surface container low
* **Light:** `md.sys.color.surface-container-low[theme=light]` = `rgba(248, 250, 253, 1)`
* **Dark:** `md.sys.color.surface-container-low[theme=dark]` = `rgba(27, 27, 27, 1)`

#### Surface container
* **Light:** `md.sys.color.surface-container[theme=light]` = `rgba(240, 244, 249, 1)`
* **Dark:** `md.sys.color.surface-container[theme=dark]` = `rgba(30, 31, 32, 1)`

#### Surface container high
* **Light:** `md.sys.color.surface-container-high[theme=light]` = `rgba(233, 238, 246, 1)`
* **Dark:** `md.sys.color.surface-container-high[theme=dark]` = `rgba(40, 42, 44, 1)`

#### Surface container highest
* **Light:** `md.sys.color.surface-container-highest[theme=light]` = `rgba(221, 227, 234, 1)`
* **Dark:** `md.sys.color.surface-container-highest[theme=dark]` = `rgba(51, 53, 55, 1)`

#### On surface
* **Light:** `md.sys.color.on-surface[theme=light]` = `rgba(31, 31, 31, 1)`
* **Dark:** `md.sys.color.on-surface[theme=dark]` = `rgba(227, 227, 227, 1)`

#### On surface variant
* **Light:** `md.sys.color.on-surface-variant[theme=light]` = `rgba(68, 71, 70, 1)`
* **Dark:** `md.sys.color.on-surface-variant[theme=dark]` = `rgba(196, 199, 197, 1)`

#### Inverse surface
* **Light:** `md.sys.color.inverse-surface[theme=light]` = `rgba(48, 48, 48, 1)`
* **Dark:** `md.sys.color.inverse-surface[theme=dark]` = `rgba(227, 227, 227, 1)`

#### Inverse on surface
* **Light:** `md.sys.color.inverse-on-surface[theme=light]` = `rgba(242, 242, 242, 1)`
* **Dark:** `md.sys.color.inverse-on-surface[theme=dark]` = `rgba(48, 48, 48, 1)`

#### Surface tint
* **Light:** `md.sys.color.surface-tint[theme=light]` = `rgba(105, 145, 214, 1)`
* **Dark:** `md.sys.color.surface-tint[theme=dark]` = `rgba(209, 225, 255, 1)`

### Background colors

#### Background
* `md.sys.color.background` = `rgba(255, 255, 255, 1)` *(Applies to both Light & Dark themes)*

#### On background
* **Light:** `md.sys.color.on-background[theme=light]` = `rgba(31, 31, 31, 1)`
* **Dark:** `md.sys.color.on-background[theme=dark]` = `rgba(227, 227, 227, 1)`

### Scrim colors

#### Scrim
* `md.sys.color.scrim` = `rgba(0, 0, 0, 1)` *(Applies to both Light & Dark themes)*

### Hairline colors

#### Outline
* **Light:** `md.sys.color.outline[theme=light]` = `rgba(116, 119, 117, 1)`
* **Dark:** `md.sys.color.outline[theme=dark]` = `rgba(142, 145, 143, 1)`

#### Outline Variant
* **Light:** `md.sys.color.outline-variant[theme=light]` = `rgba(196, 199, 197, 1)`
* **Dark:** `md.sys.color.outline-variant[theme=dark]` = `rgba(68, 71, 70, 1)`

### Shadow colors

#### Shadow
* `md.sys.color.shadow` = `rgba(0, 0, 0, 1)` *(Applies to both Light & Dark themes)*

## Interaction State Layer Opacities (`md.sys.opacity`)

Interaction states (like hover, focus, press) are typically indicated by applying a semi-transparent **state layer** on top of the component.
**State Layer Construction:**

The state layer combines a **contextual color role** with a specific **opacity**.
1.  **Color:** The color used for the state layer is typically the **`on-[Role]`** color corresponding to the element's primary color role (or sometimes the element's own color).
    * Example: A button with a `md.sys.color.primary` container color will use `md.sys.color.on-primary` color for its state layers.
    * Example: An icon using `md.sys.color.on-surface-variant` might use the same color for its state layer.
    * Refer to specific component tokens for the exact color role used.
2.  **Opacity:** The opacity depends on the interaction state, using the standard values defined below.

### `md.sys.opacity.state.hover`
* **DisplayName:** Hover
* **Opacity:** `0.08`

### `md.sys.opacity.state.focus`
* **DisplayName:** Focus
* **Opacity:** `0.12`

### `md.sys.opacity.state.press`
* **DisplayName:** Press
* **Opacity:** `0.12`

### `md.sys.opacity.state.drag`
* **DisplayName:** Drag
* **Opacity:** `0.16`

**Example: Filled Button Hover State**

* **Button Container Color:** `md.sys.color.primary`
    * Light: `rgba(11, 87, 208, 1)`
    * Dark: `rgba(168, 199, 250, 1)`
* **State Layer Color Role (Derived):** `md.sys.color.on-primary`
    * Light: `rgba(255, 255, 255, 1)`
    * Dark: `rgba(6, 46, 111, 1)`
* **State Layer Opacity Token:** `md.sys.opacity.state.hover` = `0.08`
* **Resulting Hover Overlay:**
    * Light: `rgba(255, 255, 255, 0.08)` applied over the button.
    * Dark: `rgba(6, 46, 111, 0.08)` applied over the button.

## Palettes (md.ref.palette)
> Material Design baseline palette
*(Note: These palette values apply to both Light & Dark themes unless specified otherwise)*

### Baseline palette - Violet
* `md.ref.palette.violet30` = `rgba(79, 55, 139, 1)`
* `md.ref.palette.violet-90` = `rgba(234, 221, 255, 1)`
* `md.ref.palette.violet10` = `rgba(33, 0, 93, 1)`

### Baseline palette – Primary
* `md.ref.palette.primary100` = `rgba(255, 255, 255, 1)`
* `md.ref.palette.primary99` = `rgba(250, 251, 255, 1)`
* `md.ref.palette.primary95` = `rgba(236, 243, 254, 1)`
* `md.ref.palette.primary90` = `rgba(211, 227, 253, 1)`
* `md.ref.palette.primary80` = `rgba(168, 199, 250, 1)`
* `md.ref.palette.primary70` = `rgba(124, 172, 248, 1)`
* `md.ref.palette.primary60` = `rgba(76, 141, 246, 1)`
* `md.ref.palette.primary50` = `rgba(27, 110, 243, 1)`
* `md.ref.palette.primary40` = `rgba(11, 87, 208, 1)`
* `md.ref.palette.primary30` = `rgba(8, 66, 160, 1)`
* `md.ref.palette.primary20` = `rgba(6, 46, 111, 1)`
* `md.ref.palette.primary10` = `rgba(4, 30, 73, 1)`
* `md.ref.palette.primary0` = `rgba(0, 0, 0, 1)`

### Baseline palette – Secondary
* `md.ref.palette.secondary100` = `rgba(255, 255, 255, 1)`
* `md.ref.palette.secondary99` = `rgba(247, 252, 255, 1)`
* `md.ref.palette.secondary95` = `rgba(223, 243, 255, 1)`
* `md.ref.palette.secondary90` = `rgba(194, 231, 255, 1)`
* `md.ref.palette.secondary80` = `rgba(127, 207, 255, 1)`
* `md.ref.palette.secondary70` = `rgba(90, 179, 240, 1)`
* `md.ref.palette.secondary60` = `rgba(57, 152, 211, 1)`
* `md.ref.palette.secondary50` = `rgba(4, 125, 183, 1)`
* `md.ref.palette.secondary40` = `rgba(0, 99, 155, 1)`
* `md.ref.palette.secondary30` = `rgba(0, 74, 119, 1)`
* `md.ref.palette.secondary20` = `rgba(0, 51, 85, 1)`
* `md.ref.palette.secondary10` = `rgba(0, 29, 53, 1)`
* `md.ref.palette.secondary0` = `rgba(0, 0, 0, 1)`

### Baseline palette – Tertiary
* `md.ref.palette.tertiary100` = `rgba(255, 255, 255, 1)`
* `md.ref.palette.tertiary99` = `rgba(242, 255, 238, 1)`
* `md.ref.palette.tertiary95` = `rgba(231, 248, 237, 1)`
* `md.ref.palette.tertiary90` = `rgba(196, 238, 208, 1)`
* `md.ref.palette.tertiary80` = `rgba(109, 213, 140, 1)`
* `md.ref.palette.tertiary70` = `rgba(55, 190, 95, 1)`
* `md.ref.palette.tertiary60` = `rgba(30, 164, 70, 1)`
* `md.ref.palette.tertiary50` = `rgba(25, 134, 57, 1)`
* `md.ref.palette.tertiary40` = `rgba(20, 108, 46, 1)`
* `md.ref.palette.tertiary30` = `rgba(15, 82, 35, 1)`
* `md.ref.palette.tertiary20` = `rgba(10, 56, 24, 1)`
* `md.ref.palette.tertiary10` = `rgba(7, 39, 17, 1)`
* `md.ref.palette.tertiary0` = `rgba(0, 0, 0, 1)`

### Baseline palette – Error
* `md.ref.palette.error100` = `rgba(255, 255, 255, 1)`
* `md.ref.palette.error99` = `rgba(255, 251, 249, 1)`
* `md.ref.palette.error95` = `rgba(252, 238, 238, 1)`
* `md.ref.palette.error90` = `rgba(249, 222, 220, 1)`
* `md.ref.palette.error80` = `rgba(242, 184, 181, 1)`
* `md.ref.palette.error70` = `rgba(236, 146, 142, 1)`
* `md.ref.palette.error60` = `rgba(228, 105, 98, 1)`
* `md.ref.palette.error50` = `rgba(220, 54, 46, 1)`
* `md.ref.palette.error40` = `rgba(179, 38, 30, 1)`
* `md.ref.palette.error30` = `rgba(140, 29, 24, 1)`
* `md.ref.palette.error20` = `rgba(96, 20, 16, 1)`
* `md.ref.palette.error10` = `rgba(65, 14, 11, 1)`
* `md.ref.palette.error0` = `rgba(0, 0, 0, 1)`

### Baseline palette – Neutral
* `md.ref.palette.neutral100` = `rgba(255, 255, 255, 1)`
* `md.ref.palette.neutral99` = `rgba(253, 252, 251, 1)`
* `md.ref.palette.neutral95` = `rgba(242, 242, 242, 1)`
* `md.ref.palette.neutral90` = `rgba(227, 227, 227, 1)`
* `md.ref.palette.neutral80` = `rgba(199, 199, 199, 1)`
* `md.ref.palette.neutral70` = `rgba(171, 171, 171, 1)`
* `md.ref.palette.neutral60` = `rgba(143, 143, 143, 1)`
* `md.ref.palette.neutral50` = `rgba(117, 117, 117, 1)`
* `md.ref.palette.neutral40` = `rgba(94, 94, 94, 1)`
* `md.ref.palette.neutral30` = `rgba(71, 71, 71, 1)`
* `md.ref.palette.neutral20` = `rgba(48, 48, 48, 1)`
* `md.ref.palette.neutral10` = `rgba(31, 31, 31, 1)`
* `md.ref.palette.neutral0` = `rgba(0, 0, 0, 1)`

### Baseline palette – Neutral variant
* `md.ref.palette.neutral-variant100` = `rgba(255, 255, 255, 1)`
* `md.ref.palette.neutral-variant99` = `rgba(250, 253, 251, 1)`
* `md.ref.palette.neutral-variant95` = `rgba(239, 242, 239, 1)`
* `md.ref.palette.neutral-variant90` = `rgba(225, 227, 225, 1)`
* `md.ref.palette.neutral-variant80` = `rgba(196, 199, 197, 1)`
* `md.ref.palette.neutral-variant70` = `rgba(169, 172, 170, 1)`
* `md.ref.palette.neutral-variant60` = `rgba(142, 145, 143, 1)`
* `md.ref.palette.neutral-variant50` = `rgba(116, 119, 117, 1)`
* `md.ref.palette.neutral-variant40` = `rgba(92, 95, 94, 1)`
* `md.ref.palette.neutral-variant30` = `rgba(68, 71, 70, 1)`
* `md.ref.palette.neutral-variant20` = `rgba(45, 49, 47, 1)`
* `md.ref.palette.neutral-variant10` = `rgba(25, 29, 28, 1)`
* `md.ref.palette.neutral-variant0` = `rgba(0, 0, 0, 1)`

### Brand palette – Black White
* `md.ref.palette.white` = `rgba(255, 255, 255, 1)`
* `md.ref.palette.black` = `rgba(0, 0, 0, 1)`

### Baseline palette - Yellow
* `md.ref.palette.yellow-0` = `rgba(0, 0, 0, 1)`
* `md.ref.palette.yellow-10` = `rgba(41, 24, 0, 1)`
* `md.ref.palette.yellow-20` = `rgba(68, 43, 0, 1)`
* `md.ref.palette.yellow-30` = `rgba(98, 64, 0, 1)`
* `md.ref.palette.yellow-40` = `rgba(128, 86, 6, 1)`
* `md.ref.palette.yellow-50` = `rgba(156, 110, 34, 1)`
* `md.ref.palette.yellow-60` = `rgba(185, 136, 57, 1)`
* `md.ref.palette.yellow-70` = `rgba(215, 162, 81, 1)`
* `md.ref.palette.yellow-80` = `rgba(245, 189, 105, 1)`
* `md.ref.palette.yellow-90` = `rgba(255, 221, 177, 1)`
* `md.ref.palette.yellow-95` = `rgba(255, 238, 219, 1)`
* `md.ref.palette.yellow-99` = `rgba(255, 251, 255, 1)`
* `md.ref.palette.yellow-100` = `rgba(255, 255, 255, 1)`




### Baseline Colors - Code Samples & Implementation

This section provides the foundational CSS required to implement the Material Design System's baseline color theme. The code translates all `md.sys.color` tokens into CSS custom properties, enabling consistent and theme-aware styling across all components.

#### 1. CSS Custom Property Definitions

The following CSS block should be included in the main `<style>` tag in the `<head>` of every generated HTML document. It defines all baseline color tokens for both **light (default)** and **dark** themes.

**Implementation Details:**

  * **Two-Variable System**: For each color, two variables are generated:

    1.  A standard variable (e.g., `--md-sys-color-primary`) holding the full `rgba()` value for direct use in properties like `color` and `background-color`.
    2.  An `-rgb` suffix variable (e.g., `--md-sys-color-primary-rgb`) holding only the `R, G, B` values. This is **critical** for components like the ripple effect or state layers, which need to construct their own `rgba()` values with a specific alpha channel (opacity).

**Usage Example:**

```css
/* Example of how a component would consume these variables */
.some-component {
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
}

.some-component::after {
  /* Example for a state layer using the -rgb variable */
  background-color: rgba(var(--md-sys-color-on-primary-container-rgb), 0.08); /* 8% opacity hover state */
}
```

#### 2. Complete Baseline Color CSS

```css
/*
 * Material Design System - Baseline Color Palette
 * This block defines all md.sys.color tokens as CSS custom properties
 * for both light and dark themes.
 */
:root {
  /* --- Light Theme (Default) --- */

  /* Primary colors */
  --md-sys-color-primary: rgba(11, 87, 208, 1);
  --md-sys-color-primary-rgb: 11, 87, 208;
  --md-sys-color-on-primary: rgba(255, 255, 255, 1);
  --md-sys-color-on-primary-rgb: 255, 255, 255;
  --md-sys-color-primary-container: rgba(211, 227, 253, 1);
  --md-sys-color-primary-container-rgb: 211, 227, 253;
  --md-sys-color-on-primary-container: rgba(8, 66, 160, 1);
  --md-sys-color-on-primary-container-rgb: 8, 66, 160;
  --md-sys-color-inverse-primary: rgba(168, 199, 250, 1);
  --md-sys-color-inverse-primary-rgb: 168, 199, 250;

  /* Secondary colors */
  --md-sys-color-secondary: rgba(0, 99, 155, 1);
  --md-sys-color-secondary-rgb: 0, 99, 155;
  --md-sys-color-on-secondary: rgba(255, 255, 255, 1);
  --md-sys-color-on-secondary-rgb: 255, 255, 255;
  --md-sys-color-secondary-container: rgba(194, 231, 255, 1);
  --md-sys-color-secondary-container-rgb: 194, 231, 255;
  --md-sys-color-on-secondary-container: rgba(0, 74, 119, 1);
  --md-sys-color-on-secondary-container-rgb: 0, 74, 119;

  /* Tertiary colors */
  --md-sys-color-tertiary: rgba(20, 108, 46, 1);
  --md-sys-color-tertiary-rgb: 20, 108, 46;
  --md-sys-color-on-tertiary: rgba(255, 255, 255, 1);
  --md-sys-color-on-tertiary-rgb: 255, 255, 255;
  --md-sys-color-tertiary-container: rgba(196, 238, 208, 1);
  --md-sys-color-tertiary-container-rgb: 196, 238, 208;
  --md-sys-color-on-tertiary-container: rgba(15, 82, 35, 1);
  --md-sys-color-on-tertiary-container-rgb: 15, 82, 35;

  /* Error colors */
  --md-sys-color-error: rgba(179, 38, 30, 1);
  --md-sys-color-error-rgb: 179, 38, 30;
  --md-sys-color-on-error: rgba(255, 255, 255, 1);
  --md-sys-color-on-error-rgb: 255, 255, 255;
  --md-sys-color-error-container: rgba(249, 222, 220, 1);
  --md-sys-color-error-container-rgb: 249, 222, 220;
  --md-sys-color-on-error-container: rgba(140, 29, 24, 1);
  --md-sys-color-on-error-container-rgb: 140, 29, 24;
  
  /* Warning colors */
  --md-sys-color-warning: rgba(128, 86, 6, 1);
  --md-sys-color-warning-rgb: 128, 86, 6;
  --md-sys-color-on-warning: rgba(255, 255, 255, 1);
  --md-sys-color-on-warning-rgb: 255, 255, 255;
  --md-sys-color-warning-container: rgba(255, 221, 177, 1);
  --md-sys-color-warning-container-rgb: 255, 221, 177;
  --md-sys-color-on-warning-container: rgba(41, 24, 0, 1);
  --md-sys-color-on-warning-container-rgb: 41, 24, 0;

  /* Surface colors */
  --md-sys-color-surface: rgba(255, 255, 255, 1);
  --md-sys-color-surface-rgb: 255, 255, 255;
  --md-sys-color-surface-container-lowest: rgba(255, 255, 255, 1);
  --md-sys-color-surface-container-lowest-rgb: 255, 255, 255;
  --md-sys-color-surface-container-low: rgba(248, 250, 253, 1);
  --md-sys-color-surface-container-low-rgb: 248, 250, 253;
  --md-sys-color-surface-container: rgba(240, 244, 249, 1);
  --md-sys-color-surface-container-rgb: 240, 244, 249;
  --md-sys-color-surface-container-high: rgba(233, 238, 246, 1);
  --md-sys-color-surface-container-high-rgb: 233, 238, 246;
  --md-sys-color-surface-container-highest: rgba(221, 227, 234, 1);
  --md-sys-color-surface-container-highest-rgb: 221, 227, 234;
  --md-sys-color-on-surface: rgba(31, 31, 31, 1);
  --md-sys-color-on-surface-rgb: 31, 31, 31;
  --md-sys-color-on-surface-variant: rgba(68, 71, 70, 1);
  --md-sys-color-on-surface-variant-rgb: 68, 71, 70;
  --md-sys-color-inverse-surface: rgba(48, 48, 48, 1);
  --md-sys-color-inverse-surface-rgb: 48, 48, 48;
  --md-sys-color-inverse-on-surface: rgba(242, 242, 242, 1);
  --md-sys-color-inverse-on-surface-rgb: 242, 242, 242;
  --md-sys-color-surface-tint: rgba(105, 145, 214, 1);
  --md-sys-color-surface-tint-rgb: 105, 145, 214;
  
  /* Background colors */
  --md-sys-color-background: rgba(255, 255, 255, 1);
  --md-sys-color-background-rgb: 255, 255, 255;
  --md-sys-color-on-background: rgba(31, 31, 31, 1);
  --md-sys-color-on-background-rgb: 31, 31, 31;

  /* Outline colors */
  --md-sys-color-outline: rgba(116, 119, 117, 1);
  --md-sys-color-outline-rgb: 116, 119, 117;
  --md-sys-color-outline-variant: rgba(196, 199, 197, 1);
  --md-sys-color-outline-variant-rgb: 196, 199, 197;

  /* --- Non-Themed Colors (Global) --- */
  --md-sys-color-scrim: rgba(0, 0, 0, 1);
  --md-sys-color-scrim-rgb: 0, 0, 0;
  --md-sys-color-shadow: rgba(0, 0, 0, 1);
  --md-sys-color-shadow-rgb: 0, 0, 0;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* --- Dark Theme --- */

    /* Primary colors */
    --md-sys-color-primary: rgba(168, 199, 250, 1);
    --md-sys-color-primary-rgb: 168, 199, 250;
    --md-sys-color-on-primary: rgba(6, 46, 111, 1);
    --md-sys-color-on-primary-rgb: 6, 46, 111;
    --md-sys-color-primary-container: rgba(8, 66, 160, 1);
    --md-sys-color-primary-container-rgb: 8, 66, 160;
    --md-sys-color-on-primary-container: rgba(211, 227, 253, 1);
    --md-sys-color-on-primary-container-rgb: 211, 227, 253;
    --md-sys-color-inverse-primary: rgba(11, 87, 208, 1);
    --md-sys-color-inverse-primary-rgb: 11, 87, 208;

    /* Secondary colors */
    --md-sys-color-secondary: rgba(127, 207, 255, 1);
    --md-sys-color-secondary-rgb: 127, 207, 255;
    --md-sys-color-on-secondary: rgba(0, 51, 85, 1);
    --md-sys-color-on-secondary-rgb: 0, 51, 85;
    --md-sys-color-secondary-container: rgba(0, 74, 119, 1);
    --md-sys-color-secondary-container-rgb: 0, 74, 119;
    --md-sys-color-on-secondary-container: rgba(194, 231, 255, 1);
    --md-sys-color-on-secondary-container-rgb: 194, 231, 255;

    /* Tertiary colors */
    --md-sys-color-tertiary: rgba(109, 213, 140, 1);
    --md-sys-color-tertiary-rgb: 109, 213, 140;
    --md-sys-color-on-tertiary: rgba(10, 56, 24, 1);
    --md-sys-color-on-tertiary-rgb: 10, 56, 24;
    --md-sys-color-tertiary-container: rgba(15, 82, 35, 1);
    --md-sys-color-tertiary-container-rgb: 15, 82, 35;
    --md-sys-color-on-tertiary-container: rgba(196, 238, 208, 1);
    --md-sys-color-on-tertiary-container-rgb: 196, 238, 208;

    /* Error colors */
    --md-sys-color-error: rgba(242, 184, 181, 1);
    --md-sys-color-error-rgb: 242, 184, 181;
    --md-sys-color-on-error: rgba(96, 20, 16, 1);
    --md-sys-color-on-error-rgb: 96, 20, 16;
    --md-sys-color-error-container: rgba(140, 29, 24, 1);
    --md-sys-color-error-container-rgb: 140, 29, 24;
    --md-sys-color-on-error-container: rgba(249, 222, 220, 1);
    --md-sys-color-on-error-container-rgb: 249, 222, 220;

    /* Warning colors */
    --md-sys-color-warning: rgba(245, 189, 105, 1);
    --md-sys-color-warning-rgb: 245, 189, 105;
    --md-sys-color-on-warning: rgba(68, 43, 0, 1);
    --md-sys-color-on-warning-rgb: 68, 43, 0;
    --md-sys-color-warning-container: rgba(98, 64, 0, 1);
    --md-sys-color-warning-container-rgb: 98, 64, 0;
    --md-sys-color-on-warning-container: rgba(255, 221, 177, 1);
    --md-sys-color-on-warning-container-rgb: 255, 221, 177;

    /* Surface colors */
    --md-sys-color-surface: rgba(19, 19, 20, 1);
    --md-sys-color-surface-rgb: 19, 19, 20;
    --md-sys-color-surface-container-lowest: rgba(14, 14, 14, 1);
    --md-sys-color-surface-container-lowest-rgb: 14, 14, 14;
    --md-sys-color-surface-container-low: rgba(27, 27, 27, 1);
    --md-sys-color-surface-container-low-rgb: 27, 27, 27;
    --md-sys-color-surface-container: rgba(30, 31, 32, 1);
    --md-sys-color-surface-container-rgb: 30, 31, 32;
    --md-sys-color-surface-container-high: rgba(40, 42, 44, 1);
    --md-sys-color-surface-container-high-rgb: 40, 42, 44;
    --md-sys-color-surface-container-highest: rgba(51, 53, 55, 1);
    --md-sys-color-surface-container-highest-rgb: 51, 53, 55;
    --md-sys-color-on-surface: rgba(227, 227, 227, 1);
    --md-sys-color-on-surface-rgb: 227, 227, 227;
    --md-sys-color-on-surface-variant: rgba(196, 199, 197, 1);
    --md-sys-color-on-surface-variant-rgb: 196, 199, 197;
    --md-sys-color-inverse-surface: rgba(227, 227, 227, 1);
    --md-sys-color-inverse-surface-rgb: 227, 227, 227;
    --md-sys-color-inverse-on-surface: rgba(48, 48, 48, 1);
    --md-sys-color-inverse-on-surface-rgb: 48, 48, 48;
    --md-sys-color-surface-tint: rgba(209, 225, 255, 1);
    --md-sys-color-surface-tint-rgb: 209, 225, 255;
    
    /* Background colors */
    --md-sys-color-background: rgba(19, 19, 20, 1);
    --md-sys-color-background-rgb: 19, 19, 20;
    --md-sys-color-on-background: rgba(227, 227, 227, 1);
    --md-sys-color-on-background-rgb: 227, 227, 227;

    /* Outline colors */
    --md-sys-color-outline: rgba(142, 145, 143, 1);
    --md-sys-color-outline-rgb: 142, 145, 143;
    --md-sys-color-outline-variant: rgba(68, 71, 70, 1);
    --md-sys-color-outline-variant-rgb: 68, 71, 70;
  }
}
```

---

## Material Design Dynamic Color System

* Always use the baseline color scheme unless specified otherwise.

### Overview

Material Design's dynamic color system enables the creation of personalized, accessible, and consistent color schemes. It takes a "source color"—often extracted from user input like wallpaper or in-app content—and algorithmically generates a full palette. This system prioritizes visual accessibility (e.g., contrast ratios) and color fidelity (trueness to the source or design intent).

The core engine behind this is **Material Color Utilities (MCU)**, a library that defines colors in **HCT** (Hue, Chroma, Tone) values and applies a series of rules and adjustments to generate themes. The implementation details described in this document are based on the JavaScript library found here: [https://cdn.jsdelivr.net/npm/@importantimport/material-color-utilities@0.2.2-alpha.0/+esm](https://cdn.jsdelivr.net/npm/@importantimport/material-color-utilities@0.2.2-alpha.0/+esm).

**Key Principles:**

* **Personalization:** Colors adapt to user preferences or content.
* **Accessibility:** Ensures legibility and usability through contrast controls.
* **Consistency:** Provides a predictable framework for color application across UIs.
* **Flexibility:** Supports both light and dark themes, and various visual expressions through "variants."

### The HCT Color Model

MCU defines colors using the HCT color space, which has three dimensions:

1.  **Hue (H):** The perception of a color as red, orange, yellow, green, blue, violet, etc.
    * Quantified by a number from 0-360 degrees on a circular spectrum (0 and 360 are the same hue, typically red).
2.  **Chroma (C):** How colorful or neutral (grey, black, or white) a color appears.
    * Quantified by a number, where 0 is completely neutral. Higher values are more vibrant. Actual maximum chroma varies depending on the hue and tone due to physical limitations of color display and perception.
3.  **Tone (T):** How light or dark a color appears (also referred to as luminance).
    * Quantified by a number from 0 (pure black, no luminance) to 100 (pure white, complete luminance).
    * Crucial for visual accessibility as it determines contrast.

The HCT model allows manipulation of a color's hue and chroma without affecting its tone, and vice-versa, offering predictable control. **The underlying color calculations within MCU, including conversions between color spaces like ARGB, XYZ, and HCT, are based on the CAM16 color appearance model and use standard viewing conditions (specifically the D65 white point and average surround).**

### Key Concepts in Dynamic Color

#### Spec Versions
The Material Color Utilities library evolves with different specification versions, which can introduce updated rules for color generation. This document primarily describes the behavior of the **"2025" spec**, which is used in the provided examples and includes additional complexities like platform-specific adjustments and new color roles.

#### Source Color
The single color input that drives the entire scheme generation. It can be:
* **User-generated:** Extracted from a user's wallpaper. This process involves **quantization** to reduce the number of distinct colors in the image and **scoring** those colors based on properties like population and chroma to identify the most representative source color.
* **Content-based:** Extracted from in-app content like album art or logos.
* **Hand-picked:** Deliberately selected by a designer (used for baseline static schemes or custom themes). For example, a starting source color could be `#AB1039`.

#### Key Colors and Tonal Palettes
* **Key Colors:** The algorithm first processes the source color using rules defined by the chosen **Variant** to establish the base hue and chroma for five complementary key color *palettes*:
    1.  Primary
    2.  Secondary
    3.  Tertiary
    4.  Neutral
    5.  Neutral Variant
* **Tonal Palettes:** For each key color palette, MCU generates a range of colors at different tones (e.g., T0, T10, T20,... T90, T95, T98, T99, T100). All colors within a single tonal palette share the same Hue and Chroma properties defined for that key color by the Variant, but differ only in Tone.
* **Color Roles:** These are semantic names assigned to specific UI elements. MCU defines a comprehensive set of color roles for a scheme (~26 standard roles in Material 3). **Each color role is predefined within the system to derive its color from a specific tonal palette (e.g., `primary` from the Primary palette), to have a specific starting tone, and to reference a specific background color role for contrast calculations.** The final tone selected for a role is the result of applying a series of dynamic adjustments based on a defined priority order.
    * **New in 2025 Spec:** This spec introduces "fixed" color roles, which are designed for specific UI components that require less dynamic adaptation. These include:
        * `primaryFixed`
        * `primaryFixedDim`
        * `onPrimaryFixed`
        * `onPrimaryFixedVariant`
        * (and similar `_fixed` and `_fixed_dim` roles for `secondary` and `tertiary`)

#### Device Type (Platform)
The `platform` on which the scheme is being generated (e.g., "phone" or "watch") is a significant factor in the "2025" spec. It can influence the calculation of tones for various color roles and the application of specific constraints, leading to slightly different palettes tailored for different device characteristics or viewing environments.

### Scheme Creation Process in MCU: Priority of Adjustments

For every color role in a scheme, MCU determines its final tone by applying a series of rules and adjustments. These adjustments follow a strict priority order. Later steps in this sequence can override tone values determined by earlier steps if they conflict. The final color for a role uses the Hue and Chroma of its assigned tonal palette and the final calculated Tone.

**Priority of Adjustments (Highest to Lowest):**

1.  **Contrast Requirements:** Ensures sufficient contrast between a foreground color role and its specifically assigned background color role(s) to meet accessibility targets. This step has the highest priority and can force tone changes to satisfy contrast ratios defined by the current contrast level.
2.  **Global Tone Constraints:** Applies predefined rules for visual hierarchy and color quality across the entire scheme. These constraints include ensuring minimum tone separation between certain color roles or applying "fixes" to adjust the tones of colors that fall into subjectively undesirable ranges (like brownish "bile" colors). These take priority over fidelity adjustments.
3.  **Fidelity Tone Adjustments:** Adjusts tones based on the Variant's "fidelity rules" defined for primary, secondary, and tertiary palettes. This step aims for trueness to the source color's tone ("Source" fidelity) or ensuring the color can reach the chroma specified by the variant ("Reach Chroma" fidelity).
4.  **Variant Hue & Chroma Specifications:** Defines the initial Hue and Chroma for the five Key Color palettes based on the source color and the chosen variant's specific rules (e.g., hue shifts, chroma multipliers). These derived values determine the consistent Hue and Chroma for all colors within their respective Tonal Palettes.
5.  **Starting Tone Specifications:** Provides the initial, static base tone value for each specific color role (e.g., Primary gets Tone 40 in light theme) before any dynamic calculations occur. This is the lowest priority and serves as the starting point for tone calculations.

Let's look at these adjustments in more detail:

#### 1. Starting Tone Specs (Lowest Priority)

All color roles are assigned a "starting" tone value based on the scheme's light or dark mode. This is the "static" or "as-designed" tone from the Material Design specification before any dynamic calculations occur. **In the "2025" spec, these starting tones can be conditional, often depending on the selected variant and the device type (platform).**

**Example Starting Tones (Illustrative, as many are now conditional in 2025 spec):**

| Color Role             | Light Theme Tone | Dark Theme Tone |
| :--------------------- | :--------------- | :-------------- |
| `$Accent`              | 40               | 80              |
| `On $Accent`           | 100              | 20              |
| `$Accent Container`    | 90               | 30              |
| `On $Accent Container` | 10               | 90              |
| `Outline`              | 50               | 60              |
| `Outline Variant`      | 80               | 30              |
| `Surface`              | 98               | 6               |
| `Surface Container`    | 94               | 12              |
| *(...many more roles)* | ...              | ...             |

#### 2. Variant Hue & Chroma Spec

MCU assigns the base hue and chroma values for the five Key Color palettes based on the active "Variant" and the source color's HCT properties. **Each variant has predefined rules for how to derive these values. These rules can be complex, involving conditional hue rotations based on specific hue ranges (e.g., shifts for "yellow" or "blue" hues) and chroma adjustments (e.g., multipliers or caps) that may also depend on the device type.** These derived values define the consistent Hue and Chroma for all colors within their corresponding Tonal Palettes.

**Example Variant Hue & Chroma Specs (Defining Palette Characteristics):**

| Variant                      | Primary Palette (Hue, Chroma) | Secondary Palette (Hue, Chroma) | Tertiary Palette (Hue, Chroma) | Neutral Palette (Hue, Chroma) | Neutral Variant Palette (Hue, Chroma) |
| :--------------------------- | :--------------------------- | :----------------------------- | :---------------------------- | :--------------------------- | :----------------------------------- |
| **Tonal Spot** | Source, 40                   | Source, 16                     | Source + 60, 24               | Source, 6                    | Source, 8                            |
| **Content Color** | Source, Source               | Source, Max [½ Source, Source–32] | Analogous, Source              | Source, Min[Source/12, 4]             | Source, Min[Source/6, 8]                 |
| **Vibrant Tonal (Proposed)** | Source, 200                   | Source, 24                     | Source + 60, 32               | Source, 8                   | Source, 12                           |

#### 3. Fidelity Tone Adjustments

After an initial tone is determined for a color role (based on its starting tone and the hue/chroma from its assigned palette), its tone might be adjusted based on the "fidelity" behaviors defined by the variant's "fidelity rules" for the primary, secondary, and tertiary palettes.

**Fidelity Adjustment Types:**

| Adjustment Type | Behavior                                                                               |
| :-------------- | :------------------------------------------------------------------------------------- |
| **Source** | Adjust the color’s tone towards that of the source color's tone. (For trueness to source appearance)    |
| **Reach Chroma**| Adjust the color’s tone until its chroma reaches the maximum possible for that hue, or the chroma specified by the Variant if achievable. (For design intent/vibrancy) |
| **None** | No fidelity adjustment is applied to the tone.                                                     |

Fidelity rules are typically applied to primary, secondary, and tertiary color roles. If no fidelity rule is specified for a palette in a given variant, the tones of roles using that palette are not adjusted at this step (unless modified by higher priority steps).

**Example Fidelity Rules (Applied to Tones of Roles using these Palettes):**

| Variant                            | Primary Palette | Secondary Palette | Tertiary Palette |
| :--------------------------------- | :------------- | :--------------- | :-------------- |
| **Tonal Spot** | None           | None             | None            |
| **Content Color** | Source         | Reach Chroma     | Source          |
| **Vibrant Tonal w/Fidelity (prop.)** | Reach Chroma   | Reach Chroma     | Reach Chroma    |

**Priority:** Global Tone Constraints (Step 4) take priority over Fidelity Tone Adjustments.

#### 4. Global Tone Constraints

MCU enforces global tone constraints to ensure visual hierarchy and desirable color outcomes across the entire scheme. These constraints take priority over fidelity adjustments if they conflict. These rules often involve ensuring a minimum tone difference between specific color roles or applying fixes to prevent certain hue/chroma/tone combinations that are considered unappealing. **In the "2025" spec, tone delta constraints have more detailed properties, including `type` (e.g., "exact", "nearer", "farther") and `polarity` (e.g., "relative_lighter", "relative_darker") which define how the adjustment is applied relative to the `keepAway` color.**

**Example Global Tone Constraints:**

| Name                        | Description / Reason                                                                                                  | Constraint                                                                                                                               |
| :-------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Accent / Container tone delta** | Maintains visual hierarchy between an Accent color and its Container. Ensures `$Accent` and `$Accent Container` are separated by at least 10 tones with the Accent color being darker in light themes and lighter in dark themes. | Light theme: `$Accent` tone $\le$ `$Accent Container` tone - 10. <br> Dark theme: `$Accent` tone $\ge$ `$Accent Container` tone + 10. |
| **Fixed / Dim tone delta** | Maintains visual hierarchy between an Accent Fixed color and its Dim color. | `$Accent Fixed Dim` tone $\le$ `$Accent Fixed` tone - 10. |
| **White on-color fix** | Ensures accessible white on-colors by darkening mid-tones of the background container color if needed. | If Container color tone is between 49 and 60, darken tone to 49 (to ensure sufficient contrast for white text). |
| **Bile color fix** | Lightens objectively disliked brownish "bile" colors by adjusting the tone. | If Container color is H90-110, C>16, T<65, lighten tone to 80. |
| *Albers adjustment* | *Experimental, not currently used.* | *N/A* |

#### 5. Contrast Tone Adjustments & Requirements (Highest Priority)

Finally, MCU adjusts tones to meet contrast requirements, overriding any conflicting tones from the previous steps. **Each color role has a predefined background color role(s) it is checked against for contrast.** MCU calculates the contrast ratio between the foreground role's current tone (after steps 1-4) and its assigned background role's final tone. If the target ratio for the active contrast level is not met, the foreground color's tone is adjusted to satisfy the requirement while staying as close as possible to its original tone. This step has the absolute highest priority.

Target contrast ratios vary based on the "contrast level" set (Low, Default, Medium, High).

**Example Contrast Targets (Colors against Surfaces, Default Contrast Level):**

| Foreground Color     | Assigned Background(s)                                                                                               | Target Ratio |
| :------------------- | :---------------------------------------------------------------------------------------------------------- | :----------- |
| `On Surface`         | `Surface`, `Surface Dim` (LT), `Surface Bright` (DT), `Surface Container`, `Surface Container High/Highest/Low/Lowest`, `Surface Variant` | $\ge$ 4.5:1        |
| `On Surface Variant` | `Surface Variant`                                                                                           | $\ge$ 3:1          |
| `Primary`, `Secondary`, `Tertiary`, `Error` | `Surface`, etc. (as applicable)                                                                      | $\ge$ 3:1          |
| `Outline`            | `Surface`, etc. (as applicable)                                                                      | $\ge$ 1.5:1        |

*(Note: The spec contains extensive tables for various pairings and contrast levels. Colors must meet the guaranteed minimum ratios for the chosen contrast level.)*

### Variants
Variants are predefined sets of rules that dictate how MCU generates a scheme from a source color. **Each variant specifies the exact parameters used in the process, including:**
* Hue and chroma relationships to the source color for the five Key Color palettes. These rules are often conditional based on the source color's hue range and the device type.
* Fidelity rules (Source, Reach Chroma, or None) for primary, secondary, and tertiary palettes.
* Specific tone adjustments or constraints that might apply only to that variant (less common, often handled by Global Constraints or CMF themes).

Examples: `Tonal Spot`, `Content Color`, `Vibrant Tonal`, `Expressive`, `Neutral`, `Monochrome`. Selecting a variant applies its specific set of rules to the color generation pipeline.

#### CMF Themes (Custom Material Foundation Themes)
CMF themes are specific, named color schemes that provide predefined aesthetic choices. They combine a specific seed color with a variant and may include additional overrides. They typically involve:
* **Predefined Seed Color (HCT):** A fixed HCT color that is used as the source color for that theme, regardless of user input.
* **Variant Application:** A standard MCU variant (like Tonal Spot, Expressive) is applied to the predefined seed color.
* **Specific Overrides/Rules:** The CMF theme definition may include specific adjustments to hues, chromas, or tones for certain roles or conditions that layer on top of the chosen variant's rules. These overrides fit within the priority system described above.

**Example Seed Colors for CMF Themes:**

| Theme        | Seed Color (HCT)     |
| :----------- | :------------------- |
| Porcelain    | H92, C8, T80         |
| Obsidian/Ivy | H172, C8, T30        |
| Moonstone    | H268, C12, T65       |
| *(...more themes)* | ...                |

*(The "CMF themes & variants ruleset" in the spec provides very detailed tables for how each CMF theme modifies the behavior of variants like Neutral, Tonal Spot, Expressive, Vibrant, especially for Phone (P) and Watch (W) contexts, and includes specific chroma multipliers and tone constraints for various color roles under different conditions like "(Y)ellows" or "(B)lues" hue ranges.)*

### Contrast Levels and Ratios

Dynamic color schemes can be generated for different contrast levels to meet accessibility needs. The contrast requirements in the "Contrast Tone Adjustments & Requirements" section above are examples of such targets. **The chosen contrast level directly influences the target contrast ratios that the system enforces in the highest priority adjustment step.**

* **Guaranteed Minimum Contrast Ratios:** Based on GAR (Google Accessibility Requirements) / WCAG (Web Content Accessibility Guidelines) standards. Colors are adjusted to *meet or exceed* these ratios between predefined foreground/background pairs.
* **Discretionary Contrast Ratios:** Based on desirable visual design. Colors *approach* these, but physical limits of color may prevent them from being reached while meeting guaranteed minimums.

**Contrast Levels:**

1.  **Default Contrast (AA accessibility):**
    * Guaranteed: $\ge$ 4.5:1 for text/icons, $\ge$ 3:1 for required non-text elements.
    * Discretionary: e.g., aiming for 7:1 for higher emphasis text.
2.  **Medium Contrast (Exceeds AA):**
    * Guaranteed: $\ge$ 4.5:1 for text/icons, $\ge$ 3:1 for *all* non-text elements.
    * Discretionary: e.g., aiming for 7:1 for text, 11:1 for higher emphasis.
3.  **High Contrast (AAA accessibility):**
    * Guaranteed: $\ge$ 7:1 for text/icons, $\ge$ 4.5:1 for all non-text elements.
    * Discretionary: e.g., aiming for 11:1 for text, 21:1 for higher emphasis.

MCU adjusts tones of foreground colors to meet the target ratios for the active contrast level, respecting the overall priority order (Contrast > Global Constraints > Fidelity > Variant > Starting Tone).

### Applying Colors to the UI
The standard color roles are pre-assigned to UI elements in a Material Design system. When a new source color is processed and a dynamic scheme is generated using a specific variant and contrast level, the UI automatically updates to reflect the new colors for both light and dark themes by applying the color determined for each role based on the MCU calculation pipeline. The output is a structured set of color role values (e.g., in ARGB or Hex format) ready to be applied.

### Example Generated Schemes (Using 2025 Spec)

Below are examples demonstrating the output of the dynamic color system for various variants and contrast levels, all generated using the "2025" spec. The source color for the "custom" examples is `#AB1039` (from your `Scheme Sandbox.html` default). For other CMF themes, the seed color is specific to that theme as defined in the MCU library. All examples below are for the "phone" platform.

#### Example 1: Tonal Spot Variant, Default Contrast

* **Input:**
    * Source Color: `#AB1039`
    * Variant: `Tonal Spot`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: `custom-phone-light-default` / `custom-phone-dark-default`

* **Output (Light Theme):**
    * `primary`: `#a59d8d`
    * `onPrimary`: `#242014`
    * `primaryContainer`: `#4c4639`
    * `onPrimaryContainer`: `#d8cfbd`
    * `primaryFixed`: `#ebe2cf`
    * `primaryFixedDim`: `#ddd3c1`
    * `onPrimaryFixed`: `#443f32`
    * `onPrimaryFixedVariant`: `#615b4d`
    * `secondary`: `#a29d95`
    * `onSecondary`: `#22201a`
    * `secondaryContainer`: `#3e3b35`
    * `onSecondaryContainer`: `#c4beb6`
    * `secondaryFixed`: `#e8e2d9`
    * `secondaryFixedDim`: `#dad4cb`
    * `onSecondaryFixed`: `#423f39`
    * `onSecondaryFixedVariant`: `#5f5b54`
    * `tertiary`: `#9ca179`
    * `onTertiary`: `#1e2206`
    * `tertiaryContainer`: `#eaefc1`
    * `onTertiaryContainer`: `#555a37`
    * `tertiaryFixed`: `#f0f5c7`
    * `tertiaryFixedDim`: `#e1e6b9`
    * `onTertiaryFixed`: `#464b29`
    * `onTertiaryFixedVariant`: `#626743`
    * `error`: `#ed7f64`
    * `onError`: `#450900`
    * `errorContainer`: `#7e2b17`
    * `onErrorContainer`: `#ff9b82`
    * `outline`: `#79756f`
    * `background`: `#fdf8f5`
    * `onBackground`: `#35322e`
    * `surface`: `#fdf8f5`
    * `onSurface`: `#35322e`
    * `surfaceVariant`: `#f4ddde`
    * `onSurfaceVariant`: `#97938d`
    * `inverseSurface`: `#0f0e0c`
    * `inverseOnSurface`: `#575552`
    * `inversePrimary`: `#655e50`
    * `shadow`: `#000000`
    * `surfaceTint`: `#655e50`
    * `outlineVariant`: `#4a4843`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#282521`
    * `surfaceContainerHigh`: `#211f1c`
    * `surfaceContainer`: `#1b1917`
    * `surfaceContainerLow`: `#141311`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2e2c27`
    * `surfaceDim`: `#0f0e0c`

* **Output (Dark Theme):**
    * `primary`: `#cec6b4`
    * `onPrimary`: `#454033`
    * `primaryContainer`: `#7b7465`
    * `onPrimaryContainer`: `#d8cfbd`
    * `primaryFixed`: `#4e4631`
    * `primaryFixedDim`: `#423b27`
    * `onPrimaryFixed`: `#d9cdb2`
    * `onPrimaryFixedVariant`: `#b0a58b`
    * `secondary`: `#beb8b0`
    * `onSecondary`: `#2f2c26`
    * `secondaryContainer`: `#78746d`
    * `onSecondaryContainer`: `#c4beb6`
    * `secondaryFixed`: `#4b463c`
    * `secondaryFixedDim`: `#3f3b31`
    * `onSecondaryFixed`: `#d5cdc0`
    * `onSecondaryFixedVariant`: `#aca599`
    * `tertiary`: `#f8fdcf`
    * `onTertiary`: `#5d623f`
    * `tertiaryContainer`: `#eaefc1`
    * `onTertiaryContainer`: `#555a37`
    * `tertiaryFixed`: `#99a458`
    * `tertiaryFixedDim`: `#8c974c`
    * `onTertiaryFixed`: `#262d00`
    * `onTertiaryFixedVariant`: `#48520d`
    * `error`: `#ffa089`
    * `onError`: `#591001`
    * `errorContainer`: `#7e2b17`
    * `onErrorContainer`: `#ff9b82`
    * `outline`: `#c2adae`
    * `background`: `#0f0e0c`
    * `onBackground`: `#eae4de`
    * `surface`: `#0f0e0c`
    * `onSurface`: `#eae4de`
    * `surfaceVariant`: `#4a4843`
    * `onSurfaceVariant`: `#97938d`
    * `inverseSurface`: `#fdf8f5`
    * `inverseOnSurface`: `#575552`
    * `inversePrimary`: `#979080`
    * `shadow`: `#000000`
    * `surfaceTint`: `#d9cdb2`
    * `outlineVariant`: `#4a4843`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#282521`
    * `surfaceContainerHigh`: `#211f1c`
    * `surfaceContainer`: `#1b1917`
    * `surfaceContainerLow`: `#141311`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2e2c27`
    * `surfaceDim`: `#0f0e0c`

#### Example 2: Tonal Spot Variant, Medium Contrast

* **Input:**
    * Source Color: `#AB1039`
    * Variant: `Tonal Spot`
    * Contrast Level: `Medium`
    * Platform: `Phone`
    * Scheme Name: `custom-phone-light-medium` / `custom-phone-dark-medium`

* **Output (Light Theme):**
    * `primary`: `#cec6b4`
    * `onPrimary`: `#3b3629`
    * `primaryContainer`: `#7b7465`
    * `onPrimaryContainer`: `#d8cfbd`
    * `primaryFixed`: `#7b7465`
    * `primaryFixedDim`: `#6e6859`
    * `onPrimaryFixed`: `#ffffff`
    * `onPrimaryFixedVariant`: `#615b4d`
    * `secondary`: `#beb8b0`
    * `onSecondary`: `#2e2c26`
    * `secondaryContainer`: `#78746d`
    * `onSecondaryContainer`: `#c4beb6`
    * `secondaryFixed`: `#78746d`
    * `secondaryFixedDim`: `#6c6860`
    * `onSecondaryFixed`: `#ffffff`
    * `onSecondaryFixedVariant`: `#5f5b54`
    * `tertiary`: `#f8fdcf`
    * `onTertiary`: `#414525`
    * `tertiaryContainer`: `#eaefc1`
    * `onTertiaryContainer`: `#555a37`
    * `tertiaryFixed`: `#737852`
    * `tertiaryFixedDim`: `#666b47`
    * `onTertiaryFixed`: `#ffffff`
    * `onTertiaryFixedVariant`: `#626743`
    * `error`: `#ed7f64`
    * `onError`: `#450900`
    * `errorContainer`: `#7e2b17`
    * `onErrorContainer`: `#ff9b82`
    * `outline`: `#97938d`
    * `background`: `#fdf8f5`
    * `onBackground`: `#35322e`
    * `surface`: `#fdf8f5`
    * `onSurface`: `#35322e`
    * `surfaceVariant`: `#f4ddde`
    * `onSurfaceVariant`: `#97938d`
    * `inverseSurface`: `#0f0e0c`
    * `inverseOnSurface`: `#575552`
    * `inversePrimary`: `#fdf3e0`
    * `shadow`: `#000000`
    * `surfaceTint`: `#655e50`
    * `outlineVariant`: `#79756f`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#282521`
    * `surfaceContainerHigh`: `#211f1c`
    * `surfaceContainer`: `#1b1917`
    * `surfaceContainerLow`: `#141311`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2e2c27`
    * `surfaceDim`: `#0f0e0c`

* **Output (Dark Theme):**
    * `primary`: `#d9cdb2`
    * `onPrimary`: `#302c1f`
    * `primaryContainer`: `#a59d8d`
    * `onPrimaryContainer`: `#ffffff`
    * `primaryFixed`: `#4e4631`
    * `primaryFixedDim`: `#423b27`
    * `onPrimaryFixed`: `#d9cdb2`
    * `onPrimaryFixedVariant`: `#b0a58b`
    * `secondary`: `#dad4cb`
    * `onSecondary`: `#2e2c26`
    * `secondaryContainer`: `#a29d95`
    * `onSecondaryContainer`: `#ffffff`
    * `secondaryFixed`: `#3f3b31`
    * `secondaryFixedDim`: `#3f3b31`
    * `onSecondaryFixed`: `#d5cdc0`
    * `onSecondaryFixedVariant`: `#aca599`
    * `tertiary`: `#f8fdcf`
    * `onTertiary`: `#414525`
    * `tertiaryContainer`: `#eaefc1`
    * `onTertiaryContainer`: `#555a37`
    * `tertiaryFixed`: `#99a458`
    * `tertiaryFixedDim`: `#8c974c`
    * `onTertiaryFixed`: `#262d00`
    * `onTertiaryFixedVariant`: `#48520d`
    * `error`: `#ffa089`
    * `onError`: `#591001`
    * `errorContainer`: `#7e2b17`
    * `onErrorContainer`: `#ff9b82`
    * `outline`: `#c2adae`
    * `background`: `#0f0e0c`
    * `onBackground`: `#eae4de`
    * `surface`: `#0f0e0c`
    * `onSurface`: `#eae4de`
    * `surfaceVariant`: `#4a4843`
    * `onSurfaceVariant`: `#97938d`
    * `inverseSurface`: `#fdf8f5`
    * `inverseOnSurface`: `#575552`
    * `inversePrimary`: `#fdf3e0`
    * `shadow`: `#000000`
    * `surfaceTint`: `#d9cdb2`
    * `outlineVariant`: `#79756f`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#282521`
    * `surfaceContainerHigh`: `#211f1c`
    * `surfaceContainer`: `#1b1917`
    * `surfaceContainerLow`: `#141311`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2e2c27`
    * `surfaceDim`: `#0f0e0c`

#### Example 3: Tonal Spot Variant, High Contrast

* **Input:**
    * Source Color: `#AB1039`
    * Variant: `Tonal Spot`
    * Contrast Level: `High`
    * Platform: `Phone`
    * Scheme Name: `custom-phone-light-high` / `custom-phone-dark-high`

* **Output (Light Theme):**
    * `primary`: `#eee4d2`
    * `onPrimary`: `#282418`
    * `primaryContainer`: `#a59d8d`
    * `onPrimaryContainer`: `#ffffff`
    * `primaryFixed`: `#655e50`
    * `primaryFixedDim`: `#585345`
    * `onPrimaryFixed`: `#ffffff`
    * `onPrimaryFixedVariant`: `#615b4d`
    * `secondary`: `#e4dbd4`
    * `onSecondary`: `#26241e`
    * `secondaryContainer`: `#a29d95`
    * `onSecondaryContainer`: `#ffffff`
    * `secondaryFixed`: `#625f58`
    * `secondaryFixedDim`: `#56534c`
    * `onSecondaryFixed`: `#ffffff`
    * `onSecondaryFixedVariant`: `#5f5b54`
    * `tertiary`: `#f8fdcf`
    * `onTertiary`: `#222609`
    * `tertiaryContainer`: `#eaefc1`
    * `onTertiaryContainer`: `#555a37`
    * `tertiaryFixed`: `#f0f5c7`
    * `tertiaryFixedDim`: `#e1e6b9`
    * `onTertiaryFixed`: `#464b29`
    * `onTertiaryFixedVariant`: `#626743`
    * `error`: `#ed7f64`
    * `onError`: `#450900`
    * `errorContainer`: `#7e2b17`
    * `onErrorContainer`: `#ff9b82`
    * `outline`: `#bdb8b1`
    * `background`: `#fdf8f5`
    * `onBackground`: `#35322e`
    * `surface`: `#fdf8f5`
    * `onSurface`: `#000000`
    * `surfaceVariant`: `#f4ddde`
    * `onSurfaceVariant`: `#b6b1ab`
    * `inverseSurface`: `#0f0e0c`
    * `inverseOnSurface`: `#575552`
    * `inversePrimary`: `#fdf3e0`
    * `shadow`: `#000000`
    * `surfaceTint`: `#655e50`
    * `outlineVariant`: `#79756f`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#282521`
    * `surfaceContainerHigh`: `#211f1c`
    * `surfaceContainer`: `#1b1917`
    * `surfaceContainerLow`: `#141311`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2e2c27`
    * `surfaceDim`: `#0f0e0c`

* **Output (Dark Theme):**
    * `primary`: `#eee4d2`
    * `onPrimary`: `#282418`
    * `primaryContainer`: `#a59d8d`
    * `onPrimaryContainer`: `#ffffff`
    * `primaryFixed`: `#4e4631`
    * `primaryFixedDim`: `#423b27`
    * `onPrimaryFixed`: `#ddd3c1`
    * `onPrimaryFixedVariant`: `#b0a58b`
    * `secondary`: `#e4dbd4`
    * `onSecondary`: `#26241e`
    * `secondaryContainer`: `#a29d95`
    * `onSecondaryContainer`: `#ffffff`
    * `secondaryFixed`: `#3f3b31`
    * `secondaryFixedDim`: `#3f3b31`
    * `onSecondaryFixed`: `#dad4cb`
    * `onSecondaryFixedVariant`: `#aca599`
    * `tertiary`: `#f8fdcf`
    * `onTertiary`: `#222609`
    * `tertiaryContainer`: `#eaefc1`
    * `onTertiaryContainer`: `#555a37`
    * `tertiaryFixed`: `#99a458`
    * `tertiaryFixedDim`: `#8c974c`
    * `onTertiaryFixed`: `#262d00`
    * `onTertiaryFixedVariant`: `#48520d`
    * `error`: `#ffa089`
    * `onError`: `#591001`
    * `errorContainer`: `#7e2b17`
    * `onErrorContainer`: `#ff9b82`
    * `outline`: `#d5cdc0`
    * `background`: `#0f0e0c`
    * `onBackground`: `#eae4de`
    * `surface`: `#0f0e0c`
    * `onSurface`: `#ffffff`
    * `surfaceVariant`: `#4a4843`
    * `onSurfaceVariant`: `#d5cdc0`
    * `inverseSurface`: `#fdf8f5`
    * `inverseOnSurface`: `#575552`
    * `inversePrimary`: `#fdf3e0`
    * `shadow`: `#000000`
    * `surfaceTint`: `#d9cdb2`
    * `outlineVariant`: `#b6b1ab`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#282521`
    * `surfaceContainerHigh`: `#211f1c`
    * `surfaceContainer`: `#1b1917`
    * `surfaceContainerLow`: `#141311`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2e2c27`
    * `surfaceDim`: `#0f0e0c`

#### Example 4: Vibrant Variant, Default Contrast

* **Input:**
    * Source Color: `#4285f4` (This is the seed color for Indigo CMF Theme in app_bundle.js)
    * Variant: `Vibrant`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: `indigo-phone-light-default` / `indigo-phone-dark-default`

* **Output (Light Theme):**
    * `primary`: `#6f9bff`
    * `onPrimary`: `#001d4e`
    * `primaryContainer`: `#749eff`
    * `onPrimaryContainer`: `#002054`
    * `primaryFixed`: `#749eff`
    * `primaryFixedDim`: `#5b8fff`
    * `onPrimaryFixed`: `#002054`
    * `onPrimaryFixedVariant`: `#002966`
    * `secondary`: `#8596ff`
    * `onSecondary`: `#001268`
    * `secondaryContainer`: `#a9b4ff`
    * `onSecondaryContainer`: `#2a3ca2`
    * `secondaryFixed`: `#a9b4ff`
    * `secondaryFixedDim`: `#8596ff`
    * `onSecondaryFixed`: `#001268`
    * `onSecondaryFixedVariant`: `#3446ac`
    * `tertiary`: `#d67ed6`
    * `onTertiary`: `#3e0044`
    * `tertiaryContainer`: `#ffb7fb`
    * `onTertiaryContainer`: `#66176d`
    * `tertiaryFixed`: `#ffb7fb`
    * `tertiaryFixedDim`: `#ee93ee`
    * `onTertiaryFixed`: `#3e0044`
    * `onTertiaryFixedVariant`: `#4b0051`
    * `error`: `#ed7f64`
    * `onError`: `#450900`
    * `errorContainer`: `#7e2b17`
    * `onErrorContainer`: `#ff9b82`
    * `outline`: `#6d739d`
    * `background`: `#f7f5ff`
    * `onBackground`: `#262c51`
    * `surface`: `#f7f5ff`
    * `onSurface`: `#262c51`
    * `surfaceVariant`: `#d7daff`
    * `onSurfaceVariant`: `#9390b2`
    * `inverseSurface`: `#040a2f`
    * `inverseOnSurface`: `#4c527a`
    * `inversePrimary`: `#1850b0`
    * `shadow`: `#000000`
    * `surfaceTint`: `#0055c6`
    * `outlineVariant`: `#3f456c`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#172156`
    * `surfaceContainerHigh`: `#121b4c`
    * `surfaceContainer`: `#0c1542`
    * `surfaceContainerLow`: `#070f38`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#1c2760`
    * `surfaceDim`: `#040a2f`

* **Output (Dark Theme):**
    * `primary`: `#8aacff`
    * `onPrimary`: `#003b8d`
    * `primaryContainer`: `#c5d4ff`
    * `onPrimaryContainer`: `#00419c`
    * `primaryFixed`: `#749eff`
    * `primaryFixedDim`: `#5b8fff`
    * `onPrimaryFixed`: `#002054`
    * `onPrimaryFixedVariant`: `#002966`
    * `secondary`: `#a9b4ff`
    * `onSecondary`: `#3d4766`
    * `secondaryContainer`: `#cad3f9`
    * `onSecondaryContainer`: `#3a4379`
    * `secondaryFixed`: `#a9b4ff`
    * `secondaryFixedDim`: `#8596ff`
    * `onSecondaryFixed`: `#001268`
    * `onSecondaryFixedVariant`: `#3446ac`
    * `tertiary`: `#ffb7fb`
    * `onTertiary`: `#6a1b70`
    * `tertiaryContainer`: `#ffb6fc`
    * `onTertiaryContainer`: `#8b3b8f`
    * `tertiaryFixed`: `#ffb7fb`
    * `tertiaryFixedDim`: `#ee93ee`
    * `onTertiaryFixed`: `#3e0044`
    * `onTertiaryFixedVariant`: `#4b0051`
    * `error`: `#ffb4ab`
    * `onError`: `#690005`
    * `errorContainer`: `#93000a`
    * `onErrorContainer`: `#ffdad6`
    * `outline`: `#8b91bc`
    * `background`: `#040a2f`
    * `onBackground`: `#e2e3ff`
    * `surface`: `#040a2f`
    * `onSurface`: `#e2e3ff`
    * `surfaceVariant`: `#3f456c`
    * `onSurfaceVariant`: `#b0b6e4`
    * `inverseSurface`: `#f7f5ff`
    * `inverseOnSurface`: `#262c51`
    * `inversePrimary`: `#568cff`
    * `shadow`: `#000000`
    * `surfaceTint`: `#bccdff`
    * `outlineVariant`: `#3f456c`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#172156`
    * `surfaceContainerHigh`: `#121b4c`
    * `surfaceContainer`: `#0c1542`
    * `surfaceContainerLow`: `#070f38`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#1c2760`
    * `surfaceDim`: `#040a2f`

#### Example 5: Expressive Variant, Default Contrast

* **Input:**
    * Source Color: `#F0F8FF` (This is the seed color for Iris CMF Theme in app_bundle.js)
    * Variant: `Expressive`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: `iris-phone-light-default` / `iris-phone-dark-default`

* **Output (Light Theme):**
    * `primary`: `#4a59aa`
    * `onPrimary`: `#ffffff`
    * `primaryContainer`: `#b3bdff`
    * `onPrimaryContainer`: `#000f56`
    * `primaryFixed`: `#b3bdff`
    * `primaryFixedDim`: `#96a2e7`
    * `onPrimaryFixed`: `#000f56`
    * `onPrimaryFixedVariant`: `#2b3674`
    * `secondary`: `#5a5e6c`
    * `onSecondary`: `#ffffff`
    * `secondaryContainer`: `#e2e2e9`
    * `onSecondaryContainer`: `#1e2025`
    * `secondaryFixed`: `#e2e2e9`
    * `secondaryFixedDim`: `#d4d4db`
    * `onSecondaryFixed`: `#1e2025`
    * `onSecondaryFixedVariant`: `#424845`
    * `tertiary`: `#605c78`
    * `onTertiary`: `#ffffff`
    * `tertiaryContainer`: `#cfc8ff`
    * `onTertiaryContainer`: `#242139`
    * `tertiaryFixed`: `#cfc8ff`
    * `tertiaryFixedDim`: `#c1b9f9`
    * `onTertiaryFixed`: `#242139`
    * `onTertiaryFixedVariant`: `#43405a`
    * `error`: `#ba1a1a`
    * `onError`: `#ffffff`
    * `errorContainer`: `#ffdad6`
    * `onErrorContainer`: `#410002`
    * `outline`: `#767578`
    * `background`: `#fcf8f9`
    * `onBackground`: `#232426`
    * `surface`: `#fcf8f9`
    * `onSurface`: `#232426`
    * `surfaceVariant`: `#eae7ea`
    * `onSurfaceVariant`: `#5f5f61`
    * `inverseSurface`: `#0e0e0f`
    * `inverseOnSurface`: `#565556`
    * `inversePrimary`: `#7c8be0`
    * `shadow`: `#000000`
    * `surfaceTint`: `#5a5f6c`
    * `outlineVariant`: `#949396`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#1f1f21`
    * `surfaceContainerHigh`: `#1e1d36`
    * `surfaceContainer`: `#19191b`
    * `surfaceContainerLow`: `#131314`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2b2c2f`
    * `surfaceDim`: `#0e0e0f`

* **Output (Dark Theme):**
    * `primary`: `#c8cfff`
    * `onPrimary`: `#2c3b8c`
    * `primaryContainer`: `#dbe2f9`
    * `onPrimaryContainer`: `#4a59aa`
    * `primaryFixed`: `#b3bdff`
    * `primaryFixedDim`: `#96a2e7`
    * `onPrimaryFixed`: `#000f56`
    * `onPrimaryFixedVariant`: `#2b3674`
    * `secondary`: `#b8b8bf`
    * `onSecondary`: `#414348`
    * `secondaryContainer`: `#e0e2ef`
    * `onSecondaryContainer`: `#5e5f65`
    * `secondaryFixed`: `#e2e2e9`
    * `secondaryFixedDim`: `#d4d4db`
    * `onSecondaryFixed`: `#1e2025`
    * `onSecondaryFixedVariant`: `#424845`
    * `tertiary`: `#cfc8ff`
    * `onTertiary`: `#43405a`
    * `tertiaryContainer`: `#cfc8ff`
    * `onTertiaryContainer`: `#605c78`
    * `tertiaryFixed`: `#cfc8ff`
    * `tertiaryFixedDim`: `#c1b9f9`
    * `onTertiaryFixed`: `#242139`
    * `onTertiaryFixedVariant`: `#43405a`
    * `error`: `#ffb4ab`
    * `onError`: `#690005`
    * `errorContainer`: `#93000a`
    * `onErrorContainer`: `#ffdad6`
    * `outline`: `#949396`
    * `background`: `#0e0e0f`
    * `onBackground`: `#e7e5e8`
    * `surface`: `#0e0e0f`
    * `onSurface`: `#e7e5e8`
    * `surfaceVariant`: `#3a3b41`
    * `onSurfaceVariant`: `#b3b1b4`
    * `inverseSurface`: `#fcf8f9`
    * `inverseOnSurface`: `#232426`
    * `inversePrimary`: `#525b93`
    * `shadow`: `#000000`
    * `surfaceTint`: `#dbe2f9`
    * `outlineVariant`: `#3a3b41`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#1f1f21`
    * `surfaceContainerHigh`: `#1e1d36`
    * `surfaceContainer`: `#19191b`
    * `surfaceContainerLow`: `#131314`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2b2c2f`
    * `surfaceDim`: `#0e0e0f`

#### Example 6: Neutral Variant, Default Contrast

* **Input:**
    * Source Color: `#F5F5DC` (This is the seed color for Obsidian CMF Theme in app_bundle.js)
    * Variant: `Neutral`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: `obsidian-phone-light-default` / `obsidian-phone-dark-default`

* **Output (Light Theme):**
    * `primary`: `#57605c`
    * `onPrimary`: `#ffffff`
    * `primaryContainer`: `#dbe5df`
    * `onPrimaryContainer`: `#1d2622`
    * `primaryFixed`: `#dbe5df`
    * `primaryFixedDim`: `#c0d2ca`
    * `onPrimaryFixed`: `#1d2622`
    * `onPrimaryFixedVariant`: `#3c4541`
    * `secondary`: `#5c605e`
    * `onSecondary`: `#ffffff`
    * `secondaryContainer`: `#e1e3e0`
    * `onSecondaryContainer`: `#212523`
    * `secondaryFixed`: `#e1e3e0`
    * `secondaryFixedDim`: `#d2d5d2`
    * `onSecondaryFixed`: `#212523`
    * `onSecondaryFixedVariant`: `#404442`
    * `tertiary`: `#546446`
    * `onTertiary`: `#ffffff`
    * `tertiaryContainer`: `#e8fad3`
    * `onTertiaryContainer`: `#1a280f`
    * `tertiaryFixed`: `#e8fad3`
    * `tertiaryFixedDim`: `#c3e8a2`
    * `onTertiaryFixed`: `#1a280f`
    * `onTertiaryFixedVariant`: `#39472c`
    * `error`: `#ba1a1a`
    * `onError`: `#ffffff`
    * `errorContainer`: `#ffdad6`
    * `onErrorContainer`: `#410002`
    * `outline`: `#797b79`
    * `background`: `#fbf9f7`
    * `onBackground`: `#222423`
    * `surface`: `#fbf9f7`
    * `onSurface`: `#222423`
    * `surfaceVariant`: `#e8e8e6`
    * `onSurfaceVariant`: `#5d5f5e`
    * `inverseSurface`: `#0e0e0e`
    * `inverseOnSurface`: `#555554`
    * `inversePrimary`: `#89938e`
    * `shadow`: `#000000`
    * `surfaceTint`: `#58615d`
    * `outlineVariant`: `#929492`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#242625`
    * `surfaceContainerHigh`: `#1e201f`
    * `surfaceContainer`: `#181a19`
    * `surfaceContainerLow`: `#121413`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2a2d2b`
    * `surfaceDim`: `#0e0e0e`

* **Output (Dark Theme):**
    * `primary`: `#c0d2ca`
    * `onPrimary`: `#3c4541`
    * `primaryContainer`: `#6d7772`
    * `onPrimaryContainer`: `#dbe5df`
    * `primaryFixed`: `#3a4a44`
    * `primaryFixedDim`: `#2f3f39`
    * `onPrimaryFixed`: `#f1fbf5`
    * `onPrimaryFixedVariant`: `#98aaa2`
    * `secondary`: `#c9d0cb`
    * `onSecondary`: `#404442`
    * `secondaryContainer`: `#727573`
    * `onSecondaryContainer`: `#e1e3e0`
    * `secondaryFixed`: `#424845`
    * `secondaryFixedDim`: `#363d3a`
    * `onSecondaryFixed`: `#f7f9f6`
    * `onSecondaryFixedVariant`: `#a1a7a3`
    * `tertiary`: `#b5d994`
    * `onTertiary`: `#39472c`
    * `tertiaryContainer`: `#86a868`
    * `onTertiaryContainer`: `#e8fad3`
    * `tertiaryFixed`: `#5c6b4c`
    * `tertiaryFixedDim`: `#49583b`
    * `onTertiaryFixed`: `#f3fddc`
    * `onTertiaryFixedVariant`: `#9faa8d`
    * `error`: `#ffb4ab`
    * `onError`: `#690005`
    * `errorContainer`: `#93000a`
    * `onErrorContainer`: `#ffdad6`
    * `outline`: `#a1a7a3`
    * `background`: `#0e0e0e`
    * `onBackground`: `#e5e6e3`
    * `surface`: `#0e0e0e`
    * `onSurface`: `#e5e6e3`
    * `surfaceVariant`: `#363d3a`
    * `onSurfaceVariant`: `#b1b2b0`
    * `inverseSurface`: `#fbf9f7`
    * `inverseOnSurface`: `#222423`
    * `inversePrimary`: `#58615d`
    * `shadow`: `#000000`
    * `surfaceTint`: `#c0d2ca`
    * `outlineVariant`: `#464847`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#242625`
    * `surfaceContainerHigh`: `#1e201f`
    * `surfaceContainer`: `#181a19`
    * `surfaceContainerLow`: `#121413`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceBright`: `#2a2d2b`
    * `surfaceDim`: `#0e0e0e`

#### Example 7: Monochrome Variant, Default Contrast

* **Input:**
    * Source Color: `#AB1039`
    * Variant: `Monochrome`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: (Custom variant, not a CMF theme in CSV)

* **Output (Light Theme):**
    * `primary`: `#1B1B1B`
    * `onPrimary`: `#E2E2E2`
    * `primaryContainer`: `#3B3B3B`
    * `onPrimaryContainer`: `#FFFFFF`
    * `primaryFixed`: `#5E5E5E`
    * `primaryFixedDim`: `#474747`
    * `onPrimaryFixed`: `#FFFFFF`
    * `onPrimaryFixedVariant`: `#E2E2E2`
    * `secondary`: `#5F5F5F`
    * `onSecondary`: `#FFFFFF`
    * `secondaryContainer`: `#D4D4D4`
    * `onSecondaryContainer`: `#1B1B1B`
    * `secondaryFixed`: `#C6C6C6`
    * `secondaryFixedDim`: `#ABABAB`
    * `onSecondaryFixed`: `#1B1B1B`
    * `onSecondaryFixedVariant`: `#3B3B3B`
    * `tertiary`: `#5F5F5F`
    * `onTertiary`: `#FFFFFF`
    * `tertiaryContainer`: `#E2E2E2`
    * `onTertiaryContainer`: `#484848`
    * `tertiaryFixed`: `#5E5E5E`
    * `tertiaryFixedDim`: `#474747`
    * `onTertiaryFixed`: `#FFFFFF`
    * `onTertiaryFixedVariant`: `#E2E2E2`
    * `error`: `#BA1A1A`
    * `onError`: `#FFFFFF`
    * `errorContainer`: `#FFDAD6`
    * `onErrorContainer`: `#410002`
    * `outline`: `#777777`
    * `background`: `#F9F9F9`
    * `onBackground`: `#1B1B1B`
    * `surface`: `#F9F9F9`
    * `onSurface`: `#1B1B1B`
    * `surfaceVariant`: `#E2E2E2`
    * `onSurfaceVariant`: `#474747`
    * `inverseSurface`: `#303030`
    * `inverseOnSurface`: `#F1F1F1`
    * `inversePrimary`: `#C6C6C6`
    * `shadow`: `#000000`
    * `surfaceTint`: `#5E5E5E`
    * `outlineVariant`: `#C6C6C6`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#E2E2E2`
    * `surfaceContainerHigh`: `#E8E8E8`
    * `surfaceContainer`: `#EEEEEE`
    * `surfaceContainerLow`: `#F3F3F3`
    * `surfaceContainerLowest`: `#FFFFFF`
    * `surfaceBright`: `#F9F9F9`
    * `surfaceDim`: `#DADADA`

* **Output (Dark Theme):**
    * `primary`: `#A3A3A3`
    * `onPrimary`: `#171717`
    * `primaryContainer`: `#3B3B3B`
    * `onPrimaryContainer`: `#CECECE`
    * `primaryFixed`: `#5E5E5E`
    * `primaryFixedDim`: `#474747`
    * `onPrimaryFixed`: `#FFFFFF`
    * `onPrimaryFixedVariant`: `#E2E2E2`
    * `secondary`: `#FFFFFF`
    * `onSecondary`: `#1B1B1B`
    * `secondaryContainer`: `#D4D4D4`
    * `onSecondaryContainer`: `#3F3F3F`
    * `secondaryFixed`: `#C6C6C6`
    * `secondaryFixedDim`: `#ABABAB`
    * `onSecondaryFixed`: `#1B1B1B`
    * `onSecondaryFixedVariant`: `#3B3B3B`
    * `tertiary`: `#FFFFFF`
    * `onTertiary`: `#1B1B1B`
    * `tertiaryContainer`: `#D4D4D4`
    * `onTertiaryContainer`: `#000000`
    * `tertiaryFixed`: `#5E5E5E`
    * `tertiaryFixedDim`: `#474747`
    * `onTertiaryFixed`: `#FFFFFF`
    * `onTertiaryFixedVariant`: `#E2E2E2`
    * `error`: `#FFB4AB`
    * `onError`: `#690005`
    * `errorContainer`: `#93000A`
    * `onErrorContainer`: `#FFDAD6`
    * `outline`: `#919191`
    * `background`: `#131313`
    * `onBackground`: `#E2E2E2`
    * `surface`: `#131313`
    * `onSurface`: `#E2E2E2`
    * `surfaceVariant`: `#474747`
    * `onSurfaceVariant`: `#C6C6C6`
    * `inverseSurface`: `#E2E2E2`
    * `inverseOnSurface`: `#303030`
    * `inversePrimary`: `#5E5E5E`
    * `shadow`: `#000000`
    * `surfaceTint`: `#C6C6C6`
    * `outlineVariant`: `#474747`
    * `scrim`: `#000000`
    * `surfaceContainerHighest`: `#353535`
    * `surfaceContainerHigh`: `#2A2A2A`
    * `surfaceContainer`: `#1F1F1F`
    * `surfaceContainerLow`: `#1B1B1B`
    * `surfaceContainerLowest`: `#0E0E0E`
    * `surfaceBright`: `#393939`
    * `surfaceDim`: `#131313`

#### Example 8: Porcelain Theme, Expressive Variant, Default Contrast

* **Input:**
    * Source Color: Seed for Porcelain CMF Theme (H92, C8, T80)
    * Variant: `Expressive`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: `porcelain-expressive-phone-light-default` / `porcelain-expressive-phone-dark-default`

* **Output (Light Theme):**
    * `background`: `#fdf8f5`
    * `onBackground`: `#35322e`
    * `surface`: `#fdf8f5`
    * `surfaceDim`: `#dfd9d1`
    * `surfaceBright`: `#fdf8f5`
    * `surfaceContainerLowest`: `#ffffff`
    * `surfaceContainerLow`: `#f8f3ee`
    * `surfaceContainer`: `#f2ede8`
    * `surfaceContainerHigh`: `#ede7e1`
    * `surfaceContainerHighest`: `#e7e2db`
    * `onSurface`: `#35322e`
    * `onSurfaceVariant`: `#625f59`
    * `outline`: `#7e7a74`
    * `outlineVariant`: `#b6b1ab`
    * `inverseSurface`: `#0f0e0c`
    * `inverseOnSurface`: `#a09c99`
    * `primary`: `#645e4f`
    * `primaryDim`: `#585244`
    * `onPrimary`: `#fff7e9`
    * `primaryContainer`: `#ebe2cf`
    * `onPrimaryContainer`: `#575143`
    * `primaryFixed`: `#ebe2cf`
    * `primaryFixedDim`: `#ddd3c1`
    * `onPrimaryFixed`: `#443f32`
    * `onPrimaryFixedVariant`: `#615b4d`
    * `inversePrimary`: `#fdf3e0`
    * `secondary`: `#625f58`
    * `secondaryDim`: `#56534c`
    * `onSecondary`: `#fff8ef`
    * `secondaryContainer`: `#e8e2d9`
    * `onSecondaryContainer`: `#55514b`
    * `secondaryFixed`: `#e8e2d9`
    * `secondaryFixedDim`: `#dad4cb`
    * `onSecondaryFixed`: `#423f39`
    * `onSecondaryFixedVariant`: `#5f5b54`
    * `tertiary`: `#5d623f`
    * `tertiaryDim`: `#515634`
    * `onTertiary`: `#f8fdcf`
    * `tertiaryContainer`: `#f0f5c7`
    * `onTertiaryContainer`: `#585d3a`
    * `tertiaryFixed`: `#f0f5c7`
    * `tertiaryFixedDim`: `#e1e6b9`
    * `onTertiaryFixed`: `#464b29`
    * `onTertiaryFixedVariant`: `#626743`
    * `error`: `#9e422c`
    * `errorDim`: `#5c1202`
    * `onError`: `#fff7f6`
    * `errorContainer`: `#fe8b70`
    * `onErrorContainer`: `#742410`
    * `shadow`: `#000000`
    * `scrim`: `#000000`

* **Output (Dark Theme):**
    * `background`: `#0f0e0c`
    * `onBackground`: `#eae4de`
    * `surface`: `#0f0e0c`
    * `surfaceDim`: `#0f0e0c`
    * `surfaceBright`: `#2e2c27`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceContainerLow`: `#141311`
    * `surfaceContainer`: `#1b1917`
    * `surfaceContainerHigh`: `#211f1c`
    * `surfaceContainerHighest`: `#282521`
    * `onSurface`: `#eae4de`
    * `onSurfaceVariant`: `#97938d`
    * `outline`: `#79756f`
    * `outlineVariant`: `#4a4843`
    * `inverseSurface`: `#fdf8f5`
    * `inverseOnSurface`: `#575552`
    * `primary`: `#cec6b4`
    * `primaryDim`: `#c0b8a7`
    * `onPrimary`: `#454033`
    * `primaryContainer`: `#4c4639`
    * `onPrimaryContainer`: `#d8cfbd`
    * `primaryFixed`: `#4e4631`
    * `primaryFixedDim`: `#423b27`
    * `onPrimaryFixed`: `#d9cdb2`
    * `onPrimaryFixedVariant`: `#b0a58b`
    * `inversePrimary`: `#655e50`
    * `secondary`: `#a29d95`
    * `secondaryDim`: `#a29d95`
    * `onSecondary`: `#22201a`
    * `secondaryContainer`: `#3e3b35`
    * `onSecondaryContainer`: `#c4beb6`
    * `secondaryFixed`: `#4b463c`
    * `secondaryFixedDim`: `#3f3b31`
    * `onSecondaryFixed`: `#d5cdc0`
    * `onSecondaryFixedVariant`: `#aca599`
    * `tertiary`: `#f8fdcf`
    * `tertiaryDim`: `#eaefc1`
    * `onTertiary`: `#5d623f`
    * `tertiaryContainer`: `#eaefc1`
    * `onTertiaryContainer`: `#555a37`
    * `tertiaryFixed`: `#99a458`
    * `tertiaryFixedDim`: `#8c974c`
    * `onTertiaryFixed`: `#000000`
    * `onTertiaryFixedVariant`: `#262d00`
    * `error`: `#ed7f64`
    * `errorDim`: `#ba573f`
    * `onError`: `#450900`
    * `errorContainer`: `#7e2b17`
    * `onErrorContainer`: `#ff9b82`
    * `shadow`: `#000000`
    * `scrim`: `#000000`

#### Example 9: Moonstone Theme, Expressive Variant, Default Contrast

* **Input:**
    * Source Color: Seed for Moonstone CMF Theme (H268, C12, T65)
    * Variant: `Expressive`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: `moonstone-expressive-phone-light-default` / `moonstone-expressive-phone-dark-default`

* **Output (Light Theme):**
    * `background`: `#fcf8f9`
    * `onBackground`: `#323235`
    * `surface`: `#fcf8f9`
    * `surfaceDim`: `#dbd9dd`
    * `surfaceBright`: `#fcf8f9`
    * `surfaceContainerLowest`: `#ffffff`
    * `surfaceContainerLow`: `#f6f3f4`
    * `surfaceContainer`: `#f0edef`
    * `surfaceContainerHigh`: `#eae7ea`
    * `surfaceContainerHighest`: `#e4e2e5`
    * `onSurface`: `#323235`
    * `onSurfaceVariant`: `#5f5f61`
    * `outline`: `#7b7a7d`
    * `outlineVariant`: `#b3b1b4`
    * `inverseSurface`: `#0e0e0f`
    * `inverseOnSurface`: `#9e9c9d`
    * `primary`: `#5a5e6c`
    * `primaryDim`: `#4e5260`
    * `onPrimary`: `#f7f7ff`
    * `primaryContainer`: `#dee2f2`
    * `onPrimaryContainer`: `#4d515f`
    * `primaryFixed`: `#dee2f2`
    * `primaryFixedDim`: `#d0d4e4`
    * `onPrimaryFixed`: `#3b3f4c`
    * `onPrimaryFixedVariant`: `#575b69`
    * `inversePrimary`: `#eaedfe`
    * `secondary`: `#5e5f65`
    * `secondaryDim`: `#525359`
    * `onSecondary`: `#f9f8ff`
    * `secondaryContainer`: `#e2e2e9`
    * `onSecondaryContainer`: `#505157`
    * `secondaryFixed`: `#e2e2e9`
    * `secondaryFixedDim`: `#d4d4db`
    * `onSecondaryFixed`: `#3e3f45`
    * `onSecondaryFixedVariant`: `#5a5b61`
    * `tertiary`: `#605c78`
    * `tertiaryDim`: `#54506b`
    * `onTertiary`: `#fcf7ff`
    * `tertiaryContainer`: `#d6d0f1`
    * `onTertiaryContainer`: `#4a4661`
    * `tertiaryFixed`: `#d6d0f1`
    * `tertiaryFixedDim`: `#c8c3e3`
    * `onTertiaryFixed`: `#36334d`
    * `onTertiaryFixedVariant`: `#534f6a`
    * `error`: `#9f403d`
    * `errorDim`: `#4e0309`
    * `onError`: `#fff7f6`
    * `errorContainer`: `#fe8983`
    * `onErrorContainer`: `#752121`
    * `shadow`: `#000000`
    * `scrim`: `#000000`

* **Output (Dark Theme):**
    * `background`: `#0e0e0f`
    * `onBackground`: `#e7e5e8`
    * `surface`: `#0e0e0f`
    * `surfaceDim`: `#0e0e0f`
    * `surfaceBright`: `#2b2c2f`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceContainerLow`: `#131314`
    * `surfaceContainer`: `#19191b`
    * `surfaceContainerHigh`: `#1f1f21`
    * `surfaceContainerHighest`: `#252628`
    * `onSurface`: `#e7e5e8`
    * `onSurfaceVariant`: `#949396`
    * `outline`: `#767578`
    * `outlineVariant`: `#48484a`
    * `inverseSurface`: `#fcf8f9`
    * `inverseOnSurface`: `#565556`
    * `primary`: `#c2c6d6`
    * `primaryDim`: `#b4b8c8`
    * `onPrimary`: `#3b404d`
    * `primaryContainer`: `#424754`
    * `onPrimaryContainer`: `#ccd0e0`
    * `primaryFixed`: `#404759`
    * `primaryFixedDim`: `#343b4d`
    * `onPrimaryFixed`: `#c7cee4`
    * `onPrimaryFixedVariant`: `#9ea5bb`
    * `inversePrimary`: `#5a5f6c`
    * `secondary`: `#9d9da4`
    * `secondaryDim`: `#9d9da4`
    * `onSecondary`: `#1e2025`
    * `secondaryContainer`: `#3a3b41`
    * `onSecondaryContainer`: `#bfbfc5`
    * `secondaryFixed`: `#434751`
    * `secondaryFixedDim`: `#383b45`
    * `onSecondaryFixed`: `#cbcdda`
    * `onSecondaryFixedVariant`: `#a2a5b2`
    * `tertiary`: `#e5deff`
    * `tertiaryDim`: `#d6d0f1`
    * `onTertiary`: `#524e6a`
    * `tertiaryContainer`: `#d6d0f1`
    * `onTertiaryContainer`: `#4a4661`
    * `tertiaryFixed`: `#9e96d5`
    * `tertiaryFixedDim`: `#9189c7`
    * `onTertiaryFixed`: `#000000`
    * `onTertiaryFixedVariant`: `#292158`
    * `error`: `#ee7d77`
    * `errorDim`: `#bb5551`
    * `onError`: `#490106`
    * `errorContainer`: `#7f2927`
    * `onErrorContainer`: `#ff9993`
    * `shadow`: `#000000`
    * `scrim`: `#000000`

#### Example 10: Jade Theme, Expressive Variant, Default Contrast

* **Input:**
    * Source Color: Seed for Jade CMF Theme
    * Variant: `Expressive`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: `jade-expressive-phone-light-default` / `jade-expressive-phone-dark-default`

* **Output (Light Theme):**
    * `background`: `#fafaf0`
    * `onBackground`: `#303429`
    * `surface`: `#fafaf0`
    * `surfaceDim`: `#d8dccc`
    * `surfaceBright`: `#fafaf0`
    * `surfaceContainerLowest`: `#ffffff`
    * `surfaceContainerLow`: `#f4f5e8`
    * `surfaceContainer`: `#edefe2`
    * `surfaceContainerHigh`: `#e7e9db`
    * `surfaceContainerHighest`: `#e1e4d4`
    * `onSurface`: `#303429`
    * `onSurfaceVariant`: `#5d6154`
    * `outline`: `#787c6f`
    * `outlineVariant`: `#b0b4a4`
    * `inverseSurface`: `#0d0f0a`
    * `inverseOnSurface`: `#9d9e95`
    * `primary`: `#506631`
    * `primaryDim`: `#455a26`
    * `onPrimary`: `#efffd2`
    * `primaryContainer`: `#d2eca9`
    * `onPrimaryContainer`: `#435825`
    * `primaryFixed`: `#d2eca9`
    * `primaryFixedDim`: `#c4dd9c`
    * `onPrimaryFixed`: `#314514`
    * `onPrimaryFixedVariant`: `#4d622e`
    * `inversePrimary`: `#d4efac`
    * `secondary`: `#596249`
    * `secondaryDim`: `#4d563e`
    * `onSecondary`: `#f3fddc`
    * `secondaryContainer`: `#dce7c7`
    * `onSecondaryContainer`: `#4c553d`
    * `secondaryFixed`: `#dce7c7`
    * `secondaryFixedDim`: `#ced8b9`
    * `onSecondaryFixed`: `#39422c`
    * `onSecondaryFixedVariant`: `#555f46`
    * `tertiary`: `#6b5f27`
    * `tertiaryDim`: `#5f531c`
    * `onTertiary`: `#fff8eb`
    * `tertiaryContainer`: `#fae8a2`
    * `onTertiaryContainer`: `#61551e`
    * `tertiaryFixed`: `#fae8a2`
    * `tertiaryFixedDim`: `#ebda95`
    * `onTertiaryFixed`: `#4d420c`
    * `onTertiaryFixedVariant`: `#6b5f27`
    * `error`: `#a73b21`
    * `errorDim`: `#791903`
    * `onError`: `#fff7f6`
    * `errorContainer`: `#fd795a`
    * `onErrorContainer`: `#6e1400`
    * `shadow`: `#000000`
    * `scrim`: `#000000`

* **Output (Dark Theme):**
    * `background`: `#0d0f0a`
    * `onBackground`: `#e4e7d7`
    * `surface`: `#0d0f0a`
    * `surfaceDim`: `#0d0f0a`
    * `surfaceBright`: `#2a2d23`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceContainerLow`: `#12140d`
    * `surfaceContainer`: `#181b13`
    * `surfaceContainerHigh`: `#1d2118`
    * `surfaceContainerHighest`: `#23271d`
    * `onSurface`: `#e4e7d7`
    * `onSurfaceVariant`: `#919587`
    * `outline`: `#73776a`
    * `outlineVariant`: `#45493d`
    * `inverseSurface`: `#fafaf0`
    * `inverseOnSurface`: `#54564f`
    * `primary`: `#bace9a`
    * `primaryDim`: `#acc08e`
    * `onPrimary`: `#35451f`
    * `primaryContainer`: `#47582f`
    * `onPrimaryContainer`: `#d6ebb5`
    * `primaryFixed`: `#394d1b`
    * `primaryFixedDim`: `#2e4111`
    * `onPrimaryFixed`: `#cfe9a7`
    * `onPrimaryFixedVariant`: `#96ae71`
    * `inversePrimary`: `#54653b`
    * `secondary`: `#c0caac`
    * `secondaryDim`: `#b2bd9f`
    * `onSecondary`: `#3a432c`
    * `secondaryContainer`: `#363e28`
    * `onSecondaryContainer`: `#b9c3a5`
    * `secondaryFixed`: `#414a33`
    * `secondaryFixedDim`: `#363e28`
    * `onSecondaryFixed`: `#dae4c5`
    * `onSecondaryFixedVariant`: `#9faa8d`
    * `tertiary`: `#fff6de`
    * `tertiaryDim`: `#f4e29d`
    * `onTertiary`: `#695d25`
    * `tertiaryContainer`: `#fae8a2`
    * `onTertiaryContainer`: `#61551e`
    * `tertiaryFixed`: `#af9e55`
    * `tertiaryFixedDim`: `#a19049`
    * `onTertiaryFixed`: `#000000`
    * `onTertiaryFixedVariant`: `#322900`
    * `error`: `#f97758`
    * `errorDim`: `#c44f34`
    * `onError`: `#450900`
    * `errorContainer`: `#85230a`
    * `onErrorContainer`: `#ff9b82`
    * `shadow`: `#000000`
    * `scrim`: `#000000`

#### Example 11: Iris Theme, Expressive Variant, Default Contrast

* **Input:**
    * Source Color: Seed for Iris CMF Theme (`#F0F8FF`)
    * Variant: `Expressive`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: `iris-expressive-phone-light-default` / `iris-expressive-phone-dark-default`

* **Output (Light Theme):**
    * `background`: `#fcf8ff`
    * `onBackground`: `#302e56`
    * `surface`: `#fcf8ff`
    * `surfaceDim`: `#dad6ff`
    * `surfaceBright`: `#fcf8ff`
    * `surfaceContainerLowest`: `#ffffff`
    * `surfaceContainerLow`: `#f6f2ff`
    * `surfaceContainer`: `#efebff`
    * `surfaceContainerHigh`: `#e9e5ff`
    * `surfaceContainerHighest`: `#e3dfff`
    * `onSurface`: `#302e56`
    * `onSurfaceVariant`: `#5d5a86`
    * `outline`: `#7976a3`
    * `outlineVariant`: `#b0addd`
    * `inverseSurface`: `#0d0c20`
    * `inverseOnSurface`: `#9d9ab5`
    * `primary`: `#4a59aa`
    * `primaryDim`: `#3d4c9d`
    * `onPrimary`: `#faf8ff`
    * `primaryContainer`: `#b3bdff`
    * `onPrimaryContainer`: `#243485`
    * `primaryFixed`: `#b3bdff`
    * `primaryFixedDim`: `#a1aeff`
    * `onPrimaryFixed`: `#091d70`
    * `onPrimaryFixedVariant`: `#2e3e8e`
    * `inversePrimary`: `#91a0f7`
    * `secondary`: `#5a5e6c`
    * `secondaryDim`: `#525359`
    * `onSecondary`: `#f9f8ff`
    * `secondaryContainer`: `#e2e2e9`
    * `onSecondaryContainer`: `#505157`
    * `secondaryFixed`: `#e2e2e9`
    * `secondaryFixedDim`: `#d4d4db`
    * `onSecondaryFixed`: `#3e3f45`
    * `onSecondaryFixedVariant`: `#5a5b61`
    * `tertiary`: `#5a6339`
    * `tertiaryDim`: `#4e572e`
    * `onTertiary`: `#f4fec8`
    * `tertiaryContainer`: `#ecf6c0`
    * `onTertiaryContainer`: `#555e35`
    * `tertiaryFixed`: `#ecf6c0`
    * `tertiaryFixedDim`: `#dee8b3`
    * `onTertiaryFixed`: `#434c24`
    * `onTertiaryFixedVariant`: `#5f693e`
    * `error`: `#ac3149`
    * `errorDim`: `#770326`
    * `onError`: `#fff7f7`
    * `errorContainer`: `#f76a80`
    * `onErrorContainer`: `#68001f`
    * `shadow`: `#000000`
    * `scrim`: `#000000`

* **Output (Dark Theme):**
    * `background`: `#0d0d1b`
    * `onBackground`: `#e6e2ff`
    * `surface`: `#0d0d1b`
    * `surfaceDim`: `#0d0d1b`
    * `surfaceBright`: `#2a2849`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceContainerLow`: `#121123`
    * `surfaceContainer`: `#18172c`
    * `surfaceContainerHigh`: `#1e1d36`
    * `surfaceContainerHighest`: `#24233f`
    * `onSurface`: `#e6e2ff`
    * `onSurfaceVariant`: `#9390b2`
    * `outline`: `#747293`
    * `outlineVariant`: `#464563`
    * `inverseSurface`: `#fcf8ff`
    * `inverseOnSurface`: `#555365`
    * `primary`: `#c8cfff`
    * `primaryDim`: `#b6c0ff`
    * `onPrimary`: `#3a4379`
    * `primaryContainer`: `#b6c0ff`
    * `onPrimaryContainer`: `#303a70`
    * `primaryFixed`: `#364280`
    * `primaryFixedDim`: `#2b3674`
    * `onPrimaryFixed`: `#c4cbff`
    * `onPrimaryFixedVariant`: `#96a2e7`
    * `inversePrimary`: `#525b93`
    * `secondary`: `#c4caa9`
    * `secondaryDim`: `#b6bc9b`
    * `onSecondary`: `#3d432a`
    * `secondaryContainer`: `#232812`
    * `onSecondaryContainer`: `#a1a788`
    * `secondaryFixed`: `#424a23`
    * `secondaryFixedDim`: `#373f19`
    * `onSecondaryFixed`: `#c9d3a0`
    * `onSecondaryFixedVariant`: `#a1ab7a`
    * `tertiary`: `#c4caa9`
    * `tertiaryDim`: `#b6bc9b`
    * `onTertiary`: `#3d432a`
    * `tertiaryContainer`: `#72775b`
    * `onTertiaryContainer`: `#a1a788`
    * `tertiaryFixed`: `#424a23`
    * `tertiaryFixedDim`: `#373f19`
    * `onTertiaryFixed`: `#c9d3a0`
    * `onTertiaryFixedVariant`: `#a1ab7a`
    * `error`: `#fd6f85`
    * `errorDim`: `#c8475d`
    * `onError`: `#490013`
    * `errorContainer`: `#8a1632`
    * `onErrorContainer`: `#ff97a3`
    * `shadow`: `#000000`
    * `scrim`: `#000000`

#### Example 12: Lemongrass Theme, Expressive Variant, Default Contrast

* **Input:**
    * Source Color: Seed for Lemongrass CMF Theme
    * Variant: `Expressive`
    * Contrast Level: `Default`
    * Platform: `Phone`
    * Scheme Name: `lemongrass-expressive-phone-light-default` / `lemongrass-expressive-phone-dark-default`

* **Output (Light Theme):**
    * `background`: `#fdffda`
    * `onBackground`: `#353b00`
    * `surface`: `#fdffda`
    * `surfaceDim`: `#ddeb76`
    * `surfaceBright`: `#fdffda`
    * `surfaceContainerLowest`: `#ffffff`
    * `surfaceContainerLow`: `#f9fec7`
    * `surfaceContainer`: `#f2f9b5`
    * `surfaceContainerHigh`: `#ebf5a1`
    * `surfaceContainerHighest`: `#e4f08d`
    * `onSurface`: `#353b00`
    * `onSurfaceVariant`: `#606a15`
    * `outline`: `#7c8730`
    * `outlineVariant`: `#b5c063`
    * `inverseSurface`: `#0d1000`
    * `inverseOnSurface`: `#9ca07b`
    * `primary`: `#383f00`
    * `primaryDim`: `#2e3400`
    * `onPrimary`: `#bac758`
    * `primaryContainer`: `#ddeb78`
    * `onPrimaryContainer`: `#4e5700`
    * `primaryFixed`: `#ddeb78`
    * `primaryFixedDim`: `#cfdd6b`
    * `onPrimaryFixed`: `#3c4300`
    * `onPrimaryFixedVariant`: `#576100`
    * `inversePrimary`: `#eefd87`
    * `secondary`: `#5a6339`
    * `secondaryDim`: `#4e572e`
    * `onSecondary`: `#f4fec8`
    * `secondaryContainer`: `#ecf6c0`
    * `onSecondaryContainer`: `#555e35`
    * `secondaryFixed`: `#ecf6c0`
    * `secondaryFixedDim`: `#dee8b3`
    * `onSecondaryFixed`: `#434c24`
    * `onSecondaryFixedVariant`: `#5f693e`
    * `tertiary`: `#596500`
    * `tertiaryDim`: `#4e5800`
    * `onTertiary`: `#f6ffb6`
    * `tertiaryContainer`: `#eafa85`
    * `onTertiaryContainer`: `#556000`
    * `tertiaryFixed`: `#eafa85`
    * `tertiaryFixedDim`: `#dcec78`
    * `onTertiaryFixed`: `#434c00`
    * `onTertiaryFixedVariant`: `#5e6a00`
    * `error`: `#b23d21`
    * `errorDim`: `#821a01`
    * `onError`: `#ffffff`
    * `errorContainer`: `#fa7150`
    * `onErrorContainer`: `#671200`
    * `shadow`: `#000000`
    * `scrim`: `#000000`

* **Output (Dark Theme):**
    * `background`: `#0e0f08`
    * `onBackground`: `#e6e9c0`
    * `surface`: `#0e0f08`
    * `surfaceDim`: `#0e0f08`
    * `surfaceBright`: `#2b2e16`
    * `surfaceContainerLowest`: `#000000`
    * `surfaceContainerLow`: `#13140a`
    * `surfaceContainer`: `#191b0e`
    * `surfaceContainerHigh`: `#1f2111`
    * `surfaceContainerHighest`: `#252713`
    * `onSurface`: `#e6e9c0`
    * `onSurfaceVariant`: `#939672`
    * `outline`: `#757856`
    * `outlineVariant`: `#474a2c`
    * `inverseSurface`: `#fcfaed`
    * `inverseOnSurface`: `#56564c`
    * `primary`: `#f8ffb9`
    * `primaryDim`: `#e8f29c`
    * `onPrimary`: `#5b641e`
    * `primaryContainer`: `#e8f29c`
    * `onPrimaryContainer`: `#535b16`
    * `primaryFixed`: `#434b00`
    * `primaryFixedDim`: `#383f00`
    * `onPrimaryFixed`: `#cad579`
    * `onPrimaryFixedVariant`: `#a2ac55`
    * `inversePrimary`: `#5b641e`
    * `secondary`: `#c4caa9`
    * `secondaryDim`: `#b6bc9b`
    * `onSecondary`: `#3d432a`
    * `secondaryContainer`: `#232812`
    * `onSecondaryContainer`: `#a1a788`
    * `secondaryFixed`: `#424a23`
    * `secondaryFixedDim`: `#373f19`
    * `onSecondaryFixed`: `#c9d3a0`
    * `onSecondaryFixedVariant`: `#a1ab7a`
    * `tertiary`: `#f7ffbc`
    * `tertiaryDim`: `#e4f480`
    * `onTertiary`: `#596500`
    * `tertiaryContainer`: `#e4f480`
    * `onTertiaryContainer`: `#525c00`
    * `tertiaryFixed`: `#97a63b`
    * `tertiaryFixedDim`: `#8a982f`
    * `onTertiaryFixed`: `#000000`
    * `onTertiaryFixedVariant`: `#272d00`
    * `error`: `#fe7453`
    * `errorDim`: `#c74c2f`
    * `onError`: `#450900`
    * `errorContainer`: `#881f05`
    * `onErrorContainer`: `#ff9b82`
    * `shadow`: `#000000`
    * `scrim`: `#000000`



## Material Design System - Shape Tokens

## Shape (`md.sys.shape`)

**General Guidance on Corner Rounding:**

* Specific components (like Buttons) will often define their own explicit corner radii for variants (e.g., "round" or "square" shapes for different button sizes). These component-specific definitions should take precedence for those components.
* The global shape tokens below provide a baseline scale for corner rounding that can be applied to various elements.
* For creating **pill shapes** (where a rectangular element has rounded ends, based on its height), ensure the border radius applied is equal to half the element's height. For components with defined height variants (e.g., buttons), specific "round" shape tokens are typically provided and should be used as they are calculated to achieve this pill shape.
* The `md.sys.shape.corner.full` token (`9999px`) is intended for creating perfect circles (when applied to square elements) or perfect ellipses. It should **not** be used to create pill shapes on rectangular elements with unequal width and height, as this can result in distorted oval shapes. Refer to component-specific "round" variants or calculate the radius as half the element's height for pill shapes.

### `md.sys.shape.corner.extra-large`
* **Display Name:** Extra large rounding
* **Value:** `1.75em` (28px)
* **Intended Use:** For large containers or elements where significant rounding is desired.

### `md.sys.shape.corner.extra-large.top`
* **Display Name:** Extra large top rounding
* **Value:** `topLeft=1.75em (28px), topRight=1.75em (28px), bottomRight=0em (0px), bottomLeft=0em (0px)`
* **Intended Use:** For elements like sheets or headers that need only the top corners significantly rounded.

### `md.sys.shape.corner.extra-small`
* **Display Name:** Extra small rounding
* **Value:** `0.25em` (4px)
* **Intended Use:** For subtle rounding on smaller elements or when a near-sharp corner is desired.

### `md.sys.shape.corner.extra-small.top`
* **Display Name:** Extra small top rounding
* **Value:** `topLeft=0.25em (4px), topRight=0.25em (4px), bottomRight=0em (0px), bottomLeft=0em (0px)`
* **Intended Use:** For elements needing subtle rounding only on the top corners.

### md.sys.shape.corner.full
* **Display Name:** Fully rounded (Circular/Elliptical)
* **Value:** `9999px`
---
> ### ⚠️ CRITICAL USAGE GUIDANCE: The Circle-Only Rule for `md.sys.shape.corner.full` Radius
>
> This token has very specific use cases and **MUST NOT** be applied universally to all "round" elements. Its sole purpose is to create **perfect circles**.
>
> #### ✅ CORRECT USAGE: Creating Perfect Circles from Squares
> Use this token **only when the element's `width` and `height` are equal**. Applying `border-radius: 50%` to a square element correctly produces a perfect circle. This is the intended use for components like Icon Buttons or circular avatars.
>
> * **Example:** Applying to a `40px` by `40px` Icon Button.
> ```css
> .icon-button {
>   width: 40px;
>   height: 40px;
>   border-radius: 50%; /* Correctly creates a circle */
> }
> ```
>
> #### ❌ FORBIDDEN USAGE: Creating Ovals from Rectangles
> **NEVER apply `border-radius: 50%` to a rectangular element where width and height are not equal.** This will result in a visually incorrect **oval**. Oval shapes are considered a design defect in the GenUX system and must be avoided at all costs.
>
> * **Example of what is strictly forbidden:**
> ```css
> /* --- INCORRECT & FORBIDDEN IMPLEMENTATION --- */
> .text-button {
>   width: 100px;
>   height: 40px;
>   border-radius: 50%; /* FORBIDDEN - This creates an oval */
> }
> ```
>
> #### **LLM Self-Correction Directive:**
> If your generated component appears as an **oval**, you have misinterpreted these instructions. You must immediately correct the CSS by replacing the `50%` radius with a specific pixel or rem value. For creating "pill" shapes on rectangular elements, you **MUST** follow the rule below.
>
> **Solution for Pills:** For rectangular elements that require fully rounded ends (a "pill" shape), you **MUST** refer to and implement the global **`## CRITICAL OVERRIDE RULE: Generating Pill Shapes`** by calculating the `border-radius` as exactly half of the element's height or `9999px` as a fallback.

### `md.sys.shape.corner.large`
* **Display Name:** Large rounding
* **Value:** `1em` (16px)
* **Intended Use:** For medium to large elements requiring noticeable rounding. (This is often used for pill shapes on `32px` height elements).

### `md.sys.shape.corner.large.end`
* **Display Name:** Large end rounding
* **Value:** `topLeft=0em (0px), topRight=1em (16px), bottomRight=1em (16px), bottomLeft=0em (0px)`
* **Intended Use:** For elements like tabs or segments where only one end needs to be largely rounded.

### `md.sys.shape.corner.large.top`
* **Display Name:** Large top rounding
* **Value:** `topLeft=1em (16px), topRight=1em (16px), bottomRight=0em (0px), bottomLeft=0em (0px)`
* **Intended Use:** For elements needing large rounding only on the top corners.

### `md.sys.shape.corner.medium`
* **Display Name:** Medium rounding
* **Value:** `0.75em` (12px)
* **Intended Use:** A common rounding value for many standard-sized components.

### `md.sys.shape.corner.none`
* **Display Name:** No rounding
* **Value:** `0em` (0px)
* **Intended Use:** For elements that should have sharp, 90-degree corners.

### `md.sys.shape.corner.small`
* **Display Name:** Small rounding
* **Value:** `0.5em` (8px)
* **Intended Use:** For elements needing a slight, subtle rounding.

### `md.sys.shape.corner.pill`
* **Display Name:** Pill shape (half height)
* **Value:** `calc(var(--md-object-height, 100%) / 2)`  *Alternatively, if direct CSS function values are not supported as tokens: "Dynamically calculated as half the element's height."* (`9999px` can be used as a CSS fallback).
* **Intended Use:** To create a pill shape (fully rounded ends) on rectangular elements. The effective radius will be half of the element's height. This is the preferred method for generic pill shapes if not using component-specific "round" variants.
* **Implementation Note for AI:** When applying this token, the corner radius should resolve to a value that is `50%` of the target element's height. For example, if an element is `32px` tall, the border-radius applied should be `16px` to all corners. If an element is `40px` tall, the radius should be `20px`.



### Shape - Code Samples & Implementation

The code defines all `md.sys.shape.corner` tokens as CSS custom properties for system-wide use and provides a set of utility classes for direct application to HTML elements.

#### CSS Custom Property Definitions

The following CSS block should be included in the main `<style>` tag of every generated HTML document. It defines the foundational shape values as variables that can be consumed by component styles.

```css
/*
 * Material Design System - Shape Token CSS Variables
 */
:root {
  /* Corner Radius Values */
  --md-sys-shape-corner-none: 0;
  --md-sys-shape-corner-extra-small: 0.25rem; /* 4px */
  --md-sys-shape-corner-small: 0.5rem;      /* 8px */
  --md-sys-shape-corner-medium: 0.75rem;     /* 12px */
  --md-sys-shape-corner-large: 1rem;        /* 16px */
  --md-sys-shape-corner-extra-large: 1.75rem;  /* 28px */
  --md-sys-shape-corner-full: 9999px;      /* For creating perfect circles or pills */
}
```

#### Utility Classes

These utility classes allow for the direct application of shape tokens to any element. When using these classes, you **must** adhere to the critical usage guidelines, especially the **"Circle-Only Rule"** for the `.shape-full` class. It should only be applied to elements with equal width and height.

```css
/*
 * Material Design System - Shape Utility Classes
 */

/* --- Full Corner Rounding --- */
.shape-none { border-radius: var(--md-sys-shape-corner-none); }
.shape-extra-small { border-radius: var(--md-sys-shape-corner-extra-small); }
.shape-small { border-radius: var(--md-sys-shape-corner-small); }
.shape-medium { border-radius: var(--md-sys-shape-corner-medium); }
.shape-large { border-radius: var(--md-sys-shape-corner-large); }
.shape-extra-large { border-radius: var(--md-sys-shape-corner-extra-large); }
.shape-full { border-radius: var(--md-sys-shape-corner-full); }

/* --- Partial Corner Rounding --- */
.shape-extra-small-top {
  border-top-left-radius: var(--md-sys-shape-corner-extra-small);
  border-top-right-radius: var(--md-sys-shape-corner-extra-small);
}
.shape-small-top {
  border-top-left-radius: var(--md-sys-shape-corner-small);
  border-top-right-radius: var(--md-sys-shape-corner-small);
}
.shape-medium-top {
  border-top-left-radius: var(--md-sys-shape-corner-medium);
  border-top-right-radius: var(--md-sys-shape-corner-medium);
}
.shape-large-top {
  border-top-left-radius: var(--md-sys-shape-corner-large);
  border-top-right-radius: var(--md-sys-shape-corner-large);
}
.shape-extra-large-top {
  border-top-left-radius: var(--md-sys-shape-corner-extra-large);
  border-top-right-radius: var(--md-sys-shape-corner-extra-large);
}
.shape-large-end {
  border-top-right-radius: var(--md-sys-shape-corner-large);
  border-bottom-right-radius: var(--md-sys-shape-corner-large);
}
```

#### Example Usage

Here is how you would apply these utility classes to various container elements to conform to the Material Design shape system.

```html
<div class="card elevated shape-medium">
  </div>

<div class="bottom-sheet-header shape-extra-large-top">
  </div>

<button class="icon-button shape-full" style="width: 48px; height: 48px;">
  <span class="material-symbols-outlined">favorite</span>
</button>

<div class="chip shape-full" style="height: 32px;">
  <span>Chip Label</span>
</div>
```

---

## Material Design System Typography

For optimal web text readability, aim for line lengths between 45 and 75 characters per line. This range allows for easy eye movement and reduces strain, especially for users with visual or reading disabilities. A maximum of 80 characters per line is key to ensure the text remains easily readable. 

## Fonts & weights (md.ref.typeface)

### Brand typeface
* `md.ref.typeface.brand` = `Google Sans`

### Plain typeface
* `md.ref.typeface.plain` = `Google Sans Text`

### Regular weight
* `md.ref.typeface.weight-regular` = `400`

### Medium weight
* `md.ref.typeface.weight-medium` = `500`

### Bold weight
* `md.ref.typeface.weight-bold` = `700`

## Type scale (md.sys.typescale)

*(Note: Each typescale token implies the use of all its defined properties: font, weight, size, tracking, line-height.)*

### Display Large
* `md.sys.typescale.display-large.font` = `md.ref.typeface.brand`
* `md.sys.typescale.display-large.weight` = `md.ref.typeface.weight-regular`
* `md.sys.typescale.display-large.size` = `3.5625em` (57px)
* `md.sys.typescale.display-large.tracking` = `0em` (0px)
* `md.sys.typescale.display-large.line-height` = `4em` (64px)

### Display Medium
* `md.sys.typescale.display-medium.font` = `md.ref.typeface.brand`
* `md.sys.typescale.display-medium.weight` = `md.ref.typeface.weight-medium`
* `md.sys.typescale.display-medium.size` = `2.8125em` (45px)
* `md.sys.typescale.display-medium.tracking` = `0em` (0px)
* `md.sys.typescale.display-medium.line-height` = `3.25em` (52px)

### Display Small
* `md.sys.typescale.display-small.font` = `md.ref.typeface.brand`
* `md.sys.typescale.display-small.weight` = `md.ref.typeface.weight-regular`
* `md.sys.typescale.display-small.size` = `2.25em` (36px)
* `md.sys.typescale.display-small.tracking` = `0em` (0px)
* `md.sys.typescale.display-small.line-height` = `2.75em` (44px)

### Headline Large
* `md.sys.typescale.headline-large.font` = `md.ref.typeface.brand`
* `md.sys.typescale.headline-large.weight` = `md.ref.typeface.weight-regular`
* `md.sys.typescale.headline-large.size` = `2em` (32px)
* `md.sys.typescale.headline-large.tracking` = `0em` (0px)
* `md.sys.typescale.headline-large.line-height` = `2.5em` (40px)

### Headline Medium
* `md.sys.typescale.headline-medium.font` = `md.ref.typeface.brand`
* `md.sys.typescale.headline-medium.weight` = `md.ref.typeface.weight-regular`
* `md.sys.typescale.headline-medium.size` = `1.75em` (28px)
* `md.sys.typescale.headline-medium.tracking` = `0em` (0px)
* `md.sys.typescale.headline-medium.line-height` = `2.25em` (36px)

### Headline Small
* `md.sys.typescale.headline-small.font` = `md.ref.typeface.brand`
* `md.sys.typescale.headline-small.weight` = `md.ref.typeface.weight-regular`
* `md.sys.typescale.headline-small.size` = `1.5em` (24px)
* `md.sys.typescale.headline-small.tracking` = `0em` (0px)
* `md.sys.typescale.headline-small.line-height` = `2em` (32px)

### Title Large
* `md.sys.typescale.title-large.font` = `md.ref.typeface.brand`
* `md.sys.typescale.title-large.weight` = `md.ref.typeface.weight-regular`
* `md.sys.typescale.title-large.size` = `1.375em` (22px)
* `md.sys.typescale.title-large.tracking` = `0em` (0px)
* `md.sys.typescale.title-large.line-height` = `1.75em` (28px)

### Title Medium
* `md.sys.typescale.title-medium.font` = `md.ref.typeface.plain`
* `md.sys.typescale.title-medium.weight` = `md.ref.typeface.weight-medium`
* `md.sys.typescale.title-medium.size` = `1em` (16px)
* `md.sys.typescale.title-medium.tracking` = `0em` (0px)
* `md.sys.typescale.title-medium.line-height` = `1.5em` (24px)

### Title Small
* `md.sys.typescale.title-small.font` = `md.ref.typeface.plain`
* `md.sys.typescale.title-small.weight` = `md.ref.typeface.weight-medium`
* `md.sys.typescale.title-small.size` = `0.875em` (14px)
* `md.sys.typescale.title-small.tracking` = `0em` (0px)
* `md.sys.typescale.title-small.line-height` = `1.25em` (20px)

### Body Large
* `md.sys.typescale.body-large.font` = `md.ref.typeface.plain`
* `md.sys.typescale.body-large.weight` = `md.ref.typeface.weight-regular`
* `md.sys.typescale.body-large.size` = `1em` (16px)
* `md.sys.typescale.body-large.tracking` = `0em` (0px)
* `md.sys.typescale.body-large.line-height` = `1.5em` (24px)

### Body Medium
* `md.sys.typescale.body-medium.font` = `md.ref.typeface.plain`
* `md.sys.typescale.body-medium.weight` = `md.ref.typeface.weight-regular`
* `md.sys.typescale.body-medium.size` = `0.875em` (14px)
* `md.sys.typescale.body-medium.tracking` = `0em` (0px)
* `md.sys.typescale.body-medium.line-height` = `1.25em` (20px)

### Body Small
* `md.sys.typescale.body-small.font` = `md.ref.typeface.plain`
* `md.sys.typescale.body-small.weight` = `md.ref.typeface.weight-regular`
* `md.sys.typescale.body-small.size` = `0.75em` (12px)
* `md.sys.typescale.body-small.tracking` = `0.00625em` (0.1px)
* `md.sys.typescale.body-small.line-height` = `1em` (16px)

### Label Large
* `md.sys.typescale.label-large.font` = `md.ref.typeface.plain`
* `md.sys.typescale.label-large.weight` = `md.ref.typeface.weight-medium`
* `md.sys.typescale.label-large.size` = `0.875em` (14px)
* `md.sys.typescale.label-large.tracking` = `0em` (0px)
* `md.sys.typescale.label-large.line-height` = `1.25em` (20px)

### Label Medium
* `md.sys.typescale.label-medium.font` = `md.ref.typeface.plain`
* `md.sys.typescale.label-medium.weight` = `md.ref.typeface.weight-medium`
* `md.sys.typescale.label-medium.size` = `0.75em` (12px)
* `md.sys.typescale.label-medium.tracking` = `0.00625em` (0.1px)
* `md.sys.typescale.label-medium.line-height` = `1em` (16px)

### Label Small
* `md.sys.typescale.label-small.font` = `md.ref.typeface.plain`
* `md.sys.typescale.label-small.weight` = `md.ref.typeface.weight-medium`
* `md.sys.typescale.label-small.size` = `0.6875em` (11px)
* `md.sys.typescale.label-small.tracking` = `0.00625em` (0.1px)
* `md.sys.typescale.label-small.line-height` = `1em` (16px)


### Typography - Code Samples & Implementation

This section provides the necessary CSS to implement the Material Design System's typography. The code translates all `md.sys.typescale` tokens into both CSS custom properties for system-wide use and utility classes for direct application to HTML elements.

#### 1. CSS Font Imports and Custom Properties

The following CSS block should be included in the main `<style>` tag in the `<head>` of every generated HTML document. It imports the required `Google Sans Flex` font and defines all typography tokens as CSS custom properties.

```css
/*
 * Material Design System - Typography Implementation
 */

/* 1. Import the primary font family */
@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap');

/* 2. Define typeface tokens as CSS custom properties */
:root {
  /* Reference Tokens */
  --md-ref-typeface-brand: 'Google Sans Flex', sans-serif;
  --md-ref-typeface-plain: 'Google Sans Flex', sans-serif; /* Using Flex for both as per directive */
  --md-ref-typeface-weight-regular: 400;
  --md-ref-typeface-weight-medium: 500;
  --md-ref-typeface-weight-bold: 700;

  /* System Typescale Tokens */
  --md-sys-typescale-display-large-font-family: var(--md-ref-typeface-brand);
  --md-sys-typescale-display-large-font-weight: var(--md-ref-typeface-weight-regular);
  --md-sys-typescale-display-large-font-size: 3.5625rem; /* 57px */
  --md-sys-typescale-display-large-line-height: 4rem; /* 64px */
  --md-sys-typescale-display-large-letter-spacing: 0;

  --md-sys-typescale-display-medium-font-family: var(--md-ref-typeface-brand);
  --md-sys-typescale-display-medium-font-weight: var(--md-ref-typeface-weight-medium);
  --md-sys-typescale-display-medium-font-size: 2.8125rem; /* 45px */
  --md-sys-typescale-display-medium-line-height: 3.25rem; /* 52px */
  --md-sys-typescale-display-medium-letter-spacing: 0;

  --md-sys-typescale-display-small-font-family: var(--md-ref-typeface-brand);
  --md-sys-typescale-display-small-font-weight: var(--md-ref-typeface-weight-regular);
  --md-sys-typescale-display-small-font-size: 2.25rem; /* 36px */
  --md-sys-typescale-display-small-line-height: 2.75rem; /* 44px */
  --md-sys-typescale-display-small-letter-spacing: 0;

  --md-sys-typescale-headline-large-font-family: var(--md-ref-typeface-brand);
  --md-sys-typescale-headline-large-font-weight: var(--md-ref-typeface-weight-regular);
  --md-sys-typescale-headline-large-font-size: 2rem; /* 32px */
  --md-sys-typescale-headline-large-line-height: 2.5rem; /* 40px */
  --md-sys-typescale-headline-large-letter-spacing: 0;

  --md-sys-typescale-headline-medium-font-family: var(--md-ref-typeface-brand);
  --md-sys-typescale-headline-medium-font-weight: var(--md-ref-typeface-weight-regular);
  --md-sys-typescale-headline-medium-font-size: 1.75rem; /* 28px */
  --md-sys-typescale-headline-medium-line-height: 2.25rem; /* 36px */
  --md-sys-typescale-headline-medium-letter-spacing: 0;

  --md-sys-typescale-headline-small-font-family: var(--md-ref-typeface-brand);
  --md-sys-typescale-headline-small-font-weight: var(--md-ref-typeface-weight-regular);
  --md-sys-typescale-headline-small-font-size: 1.5rem; /* 24px */
  --md-sys-typescale-headline-small-line-height: 2rem; /* 32px */
  --md-sys-typescale-headline-small-letter-spacing: 0;

  --md-sys-typescale-title-large-font-family: var(--md-ref-typeface-brand);
  --md-sys-typescale-title-large-font-weight: var(--md-ref-typeface-weight-regular);
  --md-sys-typescale-title-large-font-size: 1.375rem; /* 22px */
  --md-sys-typescale-title-large-line-height: 1.75rem; /* 28px */
  --md-sys-typescale-title-large-letter-spacing: 0;

  --md-sys-typescale-title-medium-font-family: var(--md-ref-typeface-plain);
  --md-sys-typescale-title-medium-font-weight: var(--md-ref-typeface-weight-medium);
  --md-sys-typescale-title-medium-font-size: 1rem; /* 16px */
  --md-sys-typescale-title-medium-line-height: 1.5rem; /* 24px */
  --md-sys-typescale-title-medium-letter-spacing: 0;

  --md-sys-typescale-title-small-font-family: var(--md-ref-typeface-plain);
  --md-sys-typescale-title-small-font-weight: var(--md-ref-typeface-weight-medium);
  --md-sys-typescale-title-small-font-size: 0.875rem; /* 14px */
  --md-sys-typescale-title-small-line-height: 1.25rem; /* 20px */
  --md-sys-typescale-title-small-letter-spacing: 0;

  --md-sys-typescale-body-large-font-family: var(--md-ref-typeface-plain);
  --md-sys-typescale-body-large-font-weight: var(--md-ref-typeface-weight-regular);
  --md-sys-typescale-body-large-font-size: 1rem; /* 16px */
  --md-sys-typescale-body-large-line-height: 1.5rem; /* 24px */
  --md-sys-typescale-body-large-letter-spacing: 0;

  --md-sys-typescale-body-medium-font-family: var(--md-ref-typeface-plain);
  --md-sys-typescale-body-medium-font-weight: var(--md-ref-typeface-weight-regular);
  --md-sys-typescale-body-medium-font-size: 0.875rem; /* 14px */
  --md-sys-typescale-body-medium-line-height: 1.25rem; /* 20px */
  --md-sys-typescale-body-medium-letter-spacing: 0;

  --md-sys-typescale-body-small-font-family: var(--md-ref-typeface-plain);
  --md-sys-typescale-body-small-font-weight: var(--md-ref-typeface-weight-regular);
  --md-sys-typescale-body-small-font-size: 0.75rem; /* 12px */
  --md-sys-typescale-body-small-line-height: 1rem; /* 16px */
  --md-sys-typescale-body-small-letter-spacing: 0.03125rem; /* 0.5px */

  --md-sys-typescale-label-large-font-family: var(--md-ref-typeface-plain);
  --md-sys-typescale-label-large-font-weight: var(--md-ref-typeface-weight-medium);
  --md-sys-typescale-label-large-font-size: 0.875rem; /* 14px */
  --md-sys-typescale-label-large-line-height: 1.25rem; /* 20px */
  --md-sys-typescale-label-large-letter-spacing: 0;

  --md-sys-typescale-label-medium-font-family: var(--md-ref-typeface-plain);
  --md-sys-typescale-label-medium-font-weight: var(--md-ref-typeface-weight-medium);
  --md-sys-typescale-label-medium-font-size: 0.75rem; /* 12px */
  --md-sys-typescale-label-medium-line-height: 1rem; /* 16px */
  --md-sys-typescale-label-medium-letter-spacing: 0.03125rem; /* 0.5px */

  --md-sys-typescale-label-small-font-family: var(--md-ref-typeface-plain);
  --md-sys-typescale-label-small-font-weight: var(--md-ref-typeface-weight-medium);
  --md-sys-typescale-label-small-font-size: 0.6875rem; /* 11px */
  --md-sys-typescale-label-small-line-height: 1rem; /* 16px */
  --md-sys-typescale-label-small-letter-spacing: 0.03125rem; /* 0.5px */
}
```

#### 2. Utility Classes & Semantic Element Styling

This second block of CSS provides utility classes to easily apply any typescale role directly to an HTML element (e.g., `<p class="typescale-body-medium">`). It also includes recommended default styling for common semantic tags like `<h1>`, `<h2>`, `<p>`, etc., to ensure a consistent typographic foundation.

```css
/* 3. Utility classes for applying typography styles */
.typescale-display-large {
    font-family: var(--md-sys-typescale-display-large-font-family);
    font-weight: var(--md-sys-typescale-display-large-font-weight);
    font-size: var(--md-sys-typescale-display-large-font-size);
    line-height: var(--md-sys-typescale-display-large-line-height);
    letter-spacing: var(--md-sys-typescale-display-large-letter-spacing);
}
.typescale-display-medium {
    font-family: var(--md-sys-typescale-display-medium-font-family);
    font-weight: var(--md-sys-typescale-display-medium-font-weight);
    font-size: var(--md-sys-typescale-display-medium-font-size);
    line-height: var(--md-sys-typescale-display-medium-line-height);
    letter-spacing: var(--md-sys-typescale-display-medium-letter-spacing);
}
.typescale-display-small {
    font-family: var(--md-sys-typescale-display-small-font-family);
    font-weight: var(--md-sys-typescale-display-small-font-weight);
    font-size: var(--md-sys-typescale-display-small-font-size);
    line-height: var(--md-sys-typescale-display-small-line-height);
    letter-spacing: var(--md-sys-typescale-display-small-letter-spacing);
}
.typescale-headline-large {
    font-family: var(--md-sys-typescale-headline-large-font-family);
    font-weight: var(--md-sys-typescale-headline-large-font-weight);
    font-size: var(--md-sys-typescale-headline-large-font-size);
    line-height: var(--md-sys-typescale-headline-large-line-height);
    letter-spacing: var(--md-sys-typescale-headline-large-letter-spacing);
}
.typescale-headline-medium {
    font-family: var(--md-sys-typescale-headline-medium-font-family);
    font-weight: var(--md-sys-typescale-headline-medium-font-weight);
    font-size: var(--md-sys-typescale-headline-medium-font-size);
    line-height: var(--md-sys-typescale-headline-medium-line-height);
    letter-spacing: var(--md-sys-typescale-headline-medium-letter-spacing);
}
.typescale-headline-small {
    font-family: var(--md-sys-typescale-headline-small-font-family);
    font-weight: var(--md-sys-typescale-headline-small-font-weight);
    font-size: var(--md-sys-typescale-headline-small-font-size);
    line-height: var(--md-sys-typescale-headline-small-line-height);
    letter-spacing: var(--md-sys-typescale-headline-small-letter-spacing);
}
.typescale-title-large {
    font-family: var(--md-sys-typescale-title-large-font-family);
    font-weight: var(--md-sys-typescale-title-large-font-weight);
    font-size: var(--md-sys-typescale-title-large-font-size);
    line-height: var(--md-sys-typescale-title-large-line-height);
    letter-spacing: var(--md-sys-typescale-title-large-letter-spacing);
}
.typescale-title-medium {
    font-family: var(--md-sys-typescale-title-medium-font-family);
    font-weight: var(--md-sys-typescale-title-medium-font-weight);
    font-size: var(--md-sys-typescale-title-medium-font-size);
    line-height: var(--md-sys-typescale-title-medium-line-height);
    letter-spacing: var(--md-sys-typescale-title-medium-letter-spacing);
}
.typescale-title-small {
    font-family: var(--md-sys-typescale-title-small-font-family);
    font-weight: var(--md-sys-typescale-title-small-font-weight);
    font-size: var(--md-sys-typescale-title-small-font-size);
    line-height: var(--md-sys-typescale-title-small-line-height);
    letter-spacing: var(--md-sys-typescale-title-small-letter-spacing);
}
.typescale-body-large {
    font-family: var(--md-sys-typescale-body-large-font-family);
    font-weight: var(--md-sys-typescale-body-large-font-weight);
    font-size: var(--md-sys-typescale-body-large-font-size);
    line-height: var(--md-sys-typescale-body-large-line-height);
    letter-spacing: var(--md-sys-typescale-body-large-letter-spacing);
}
.typescale-body-medium {
    font-family: var(--md-sys-typescale-body-medium-font-family);
    font-weight: var(--md-sys-typescale-body-medium-font-weight);
    font-size: var(--md-sys-typescale-body-medium-font-size);
    line-height: var(--md-sys-typescale-body-medium-line-height);
    letter-spacing: var(--md-sys-typescale-body-medium-letter-spacing);
}
.typescale-body-small {
    font-family: var(--md-sys-typescale-body-small-font-family);
    font-weight: var(--md-sys-typescale-body-small-font-weight);
    font-size: var(--md-sys-typescale-body-small-font-size);
    line-height: var(--md-sys-typescale-body-small-line-height);
    letter-spacing: var(--md-sys-typescale-body-small-letter-spacing);
}
.typescale-label-large {
    font-family: var(--md-sys-typescale-label-large-font-family);
    font-weight: var(--md-sys-typescale-label-large-font-weight);
    font-size: var(--md-sys-typescale-label-large-font-size);
    line-height: var(--md-sys-typescale-label-large-line-height);
    letter-spacing: var(--md-sys-typescale-label-large-letter-spacing);
}
.typescale-label-medium {
    font-family: var(--md-sys-typescale-label-medium-font-family);
    font-weight: var(--md-sys-typescale-label-medium-font-weight);
    font-size: var(--md-sys-typescale-label-medium-font-size);
    line-height: var(--md-sys-typescale-label-medium-line-height);
    letter-spacing: var(--md-sys-typescale-label-medium-letter-spacing);
}
.typescale-label-small {
    font-family: var(--md-sys-typescale-label-small-font-family);
    font-weight: var(--md-sys-typescale-label-small-font-weight);
    font-size: var(--md-sys-typescale-label-small-font-size);
    line-height: var(--md-sys-typescale-label-small-line-height);
    letter-spacing: var(--md-sys-typescale-label-small-letter-spacing);
}

/* 4. Default styling for semantic HTML elements */
body {
    font-family: var(--md-ref-typeface-plain);
    font-size: 16px; /* Sets the base for rem units */
}

h1 {
    font: var(--md-sys-typescale-headline-large-font-weight) var(--md-sys-typescale-headline-large-font-size)/var(--md-sys-typescale-headline-large-line-height) var(--md-sys-typescale-headline-large-font-family);
}
h2 {
    font: var(--md-sys-typescale-headline-medium-font-weight) var(--md-sys-typescale-headline-medium-font-size)/var(--md-sys-typescale-headline-medium-line-height) var(--md-sys-typescale-headline-medium-font-family);
}
h3 {
    font: var(--md-sys-typescale-headline-small-font-weight) var(--md-sys-typescale-headline-small-font-size)/var(--md-sys-typescale-headline-small-line-height) var(--md-sys-typescale-headline-small-font-family);
}
h4, .title { /* Use .title class for generic titles */
    font: var(--md-sys-typescale-title-large-font-weight) var(--md-sys-typescale-title-large-font-size)/var(--md-sys-typescale-title-large-line-height) var(--md-sys-typescale-title-large-font-family);
}
h5 {
    font: var(--md-sys-typescale-title-medium-font-weight) var(--md-sys-typescale-title-medium-font-size)/var(--md-sys-typescale-title-medium-line-height) var(--md-sys-typescale-title-medium-font-family);
}
h6 {
    font: var(--md-sys-typescale-title-small-font-weight) var(--md-sys-typescale-title-small-font-size)/var(--md-sys-typescale-title-small-line-height) var(--md-sys-typescale-title-small-font-family);
}
p, body {
     font: var(--md-sys-typescale-body-large-font-weight) var(--md-sys-typescale-body-large-font-size)/var(--md-sys-typescale-body-large-line-height) var(--md-sys-typescale-body-large-font-family);
}
```

---

## App Bar Component

*   Top app bars display information and actions relating to the current screen. They are placed at the top of the screen.
*   They can contain a navigation icon, a title, and action icons.
*   Elevation can change when content scrolls beneath the app bar.
*   **Exclusivity:** Never show a "menu" icon unless has an interaction to trigger additional navigation such as pairing with a "navigation rail" that the "menu" icon triggers to show/hide or expand/collapse the "navigation rail".
*   The top app bar is always full-width and never inset.

### App Bar Component - Tokens

---

### Common Tokens

**Token Set**: `md.comp.app-bar`

#### Color

* `container.color`: `md.comp.app-bar.container.color` = `md.sys.color.surface`
* `search.container.color`: `md.comp.app-bar.search.container.color` = `md.sys.color.surface-container`
* `search.label.color`: `md.comp.app-bar.search.label.color` = `md.sys.color.on-surface-variant`
* `on-scroll.container.color`: `md.comp.app-bar.on-scroll.container.color` = `md.sys.color.surface-container`
* `search.on-scroll.container.color`: `md.comp.app-bar.search.on-scroll.container.color` = `md.sys.color.surface-container-highest`
* `title.color`: `md.comp.app-bar.title.color` = `md.sys.color.on-surface`
* `subtitle.color`: `md.comp.app-bar.subtitle.color` = `md.sys.color.on-surface-variant`
* `leading-icon.color`: `md.comp.app-bar.leading-icon.color` = `md.sys.color.on-surface`
* `trailing-icon.color`: `md.comp.app-bar.trailing-icon.color` = `md.sys.color.on-surface-variant`

#### Elevation

* `container.elevation`: `md.comp.app-bar.container.elevation` = `md.sys.elevation.level0`
* `on-scroll.container.elevation`: `md.comp.app-bar.on-scroll.container.elevation` = `md.sys.elevation.level2`

#### Spacing

* `leading-space`: `md.comp.app-bar.leading-space` = `4dp`
* `trailing-space`: `md.comp.app-bar.trailing-space` = `4dp`
* `icon-button-space`: `md.comp.app-bar.icon-button-space` = `0dp`
* `search.leading-space`: `md.comp.app-bar.search.leading-space` = `8dp`
* `search.trailing-space`: `md.comp.app-bar.search.trailing-space` = `8dp`

#### Shape

* `container.shape`: `md.comp.app-bar.container.shape` = `md.sys.shape.corner.none`

#### Size

* `avatar.size`: `md.comp.app-bar.avatar.size` = `32dp`
* `icon.size`: `md.comp.app-bar.icon.size` = `24dp`

---

### Small App Bar

**Token Set**: `md.comp.app-bar.small`

#### Size

* `container.height`: `md.comp.app-bar.small.container.height` = `64dp`
* `search.container.height`: `md.comp.app-bar.small.search.container.height` = `56dp`

#### Shape

* `search.container.shape`: `md.comp.app-bar.small.search.container.shape` = `md.sys.shape.corner.full`

#### Typography

* `title.font`: `md.comp.app-bar.small.title.font` = `md.sys.typescale.title-large`
* `subtitle.font`: `md.comp.app-bar.small.subtitle.font` = `md.sys.typescale.label-medium`
* `search.label-text.font`: `md.comp.app-bar.small.search.label-text.font` = `md.sys.typescale.body-large`

---

### Medium App Bar

**Token Set**: `md.comp.app-bar.medium`

#### Size

* `container.height`: `md.comp.app-bar.medium.container.height` = `112dp`

#### Typography

* `title.font`: `md.comp.app-bar.medium.title.font` = `md.sys.typescale.headline-small`

---

### Medium Flexible App Bar

**Token Set**: `md.comp.app-bar.medium-flexible`

#### Size

* `container.height`: `md.comp.app-bar.medium-flexible.container.height` = `112dp`
* `container.subtitle.height`: `md.comp.app-bar.medium-flexible.container.subtitle.height` = `136dp`

#### Typography

* `title.font`: `md.comp.app-bar.medium-flexible.title.font` = `md.sys.typescale.headline-medium`
* `subtitle.font`: `md.comp.app-bar.medium-flexible.subtitle.font` = `md.sys.typescale.label-large`

---

### Large App Bar

**Token Set**: `md.comp.app-bar.large`

#### Size

* `container.height`: `md.comp.app-bar.large.container.height` = `152dp`

#### Typography

* `title.font`: `md.comp.app-bar.large.title.font` = `md.sys.typescale.headline-medium`

---

### Large Flexible App Bar

**Token Set**: `md.comp.app-bar.large-flexible`

#### Size

* `container.height`: `md.comp.app-bar.large-flexible.container.height` = `120dp`
* `container.subtitle.height`: `md.comp.app-bar.large-flexible.container.subtitle.height` = `152dp`

#### Typography

* `title.font`: `md.comp.app-bar.large-flexible.title.font` = `md.sys.typescale.display-small`
* `subtitle.font`: `md.comp.app-bar.large-flexible.subtitle.font` = `md.sys.typescale.title-medium`

---

### App Bar Component - Code Samples & Implementation

**Implementation Guide:**
* **Actions:** All icons used for navigation or actions (e.g., menu, search, theme toggle) **MUST** be implemented as fully styled Icon Buttons (`<button class="icon-button">...</span>`). Refer to the `## Icon Button` section for implementation.
* **Placement styles:** If the top app bar is serving as a page header element and not inside a pane, it should have a transparent fill and blend seamlessly with the page background. 
* **Top app bar with Search:** If a top app bar with a search field is present on the page it should reside as a top most page header to the layout and not within a pane. Placing a top app bar that features a search field within a pane is incorrect.
* **Trailing elements:** trailing elements often placed after the search field (i.e. buttons, icon buttons, avatars) should be wrapped in a `trailing` container and appear aligned to the right end of the app bar. 

#### Visual Defect Checklists: 
1. If the top app bar is serving as a page header element ensure it is full width from the edge of the viewport on compact, and full width from the edge of the navigation rail to the edge of the right hand side fo the viewport and doesn't fall short. 
2. If the top app bar is placed inside a pane ensure it ignores the pane's inset top, left, and right padding and sits flush to the top, left, and right edges inside the pane.

```css
/* ---------------------------------- */
/* ------ Generic Base Styles ------ */
/* ---------------------------------- */
.top-app-bar {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  height: 64px;
  flex-shrink: 0;
  color: var(--md-sys-color-on-surface);
  box-shadow: none;
  justify-content: space-between;
  position: relative;
}
.top-app-bar .search-container{
  max-width: 600px;
}
/* ---------------------------------- */
/* --- Center-Aligned Top App Bar --- */
/* ---------------------------------- */
.center-aligned-top-app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px 0 16px;
  color: var(--md-sys-color-on-surface);
  box-shadow: none; /* elevation: var(--md-sys-elevation-level0); */ /* Box shadow can represent elevation */
  height: 64px;
  border-radius: 12px;
  position: relative;
}

.center-aligned-top-app-bar .headline {
  color: var(--md-sys-color-on-surface);
  font: var(--md-sys-typescale-title-large);
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.center-aligned-top-app-bar .actions {
  display: flex;
  gap: 4px;
}

/* ------------------------- */
/* --- Small Top App Bar --- */
/* ------------------------- */
.small-top-app-bar {
  display: flex;
  align-items: center;
  padding: 0 4px 0 16px;
  gap: 8px;
  color: var(--md-sys-color-on-surface);
  height: 64px;
  border-radius: 12px;
}

.small-top-app-bar .headline {
  font: var(--md-sys-typescale-title-large);
  margin: 0;
  flex-grow: 1;
}

.small-top-app-bar .actions {
  display: flex;
  gap: 4px;
}

/* -------------------------- */
/* --- Medium Top App Bar --- */
/* -------------------------- */
.medium-top-app-bar {
  display: flex;
  flex-direction: column;
  height: 112px;
  padding: 0 4px 0 16px;
  border-radius: 12px;
}

.medium-top-app-bar .top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px; /* on-scroll height */
}

.medium-top-app-bar .headline-container {
  padding: 0 12px 16px 0;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
}

.medium-top-app-bar .headline {
  font: var(--md-sys-typescale-headline-small);
  margin: 0;
}

/* ------------------------- */
/* --- Large Top App Bar --- */
/* ------------------------- */
.large-top-app-bar {
    display: flex;
    flex-direction: column;
    height: 152px;
    padding: 0 4px 0 16px;
    border-radius: 12px;
}

.large-top-app-bar .top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px; /* on-scroll height */
}

.large-top-app-bar .headline-container {
    padding: 0 12px 20px 0;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
}

.large-top-app-bar .headline {
    font: var(--md-sys-typescale-headline-medium);
    margin: 0;
}
```

```html
<!-- Center-Aligned Top App Bar -->
<header class="top-app-bar center-aligned-top-app-bar">
    <button class="icon-button nav-icon genux-ripple">
      <span class="material-symbols-outlined">menu</span>
    </button>
    <h1 class="headline">Title</h1>
    <div class="actions">
      <button class="icon-button genux-ripple">
        <span class="material-symbols-outlined">attach_file</span>
      </button>
      <button class="icon-button genux-ripple">
        <span class="material-symbols-outlined">today</span>
      </button>
      <button class="icon-button genux-ripple">
        <span class="material-symbols-outlined">more_vert</span>
      </button>
    </div>
</header>

<!-- Smal Top App Bar -->
<header class="top-app-bar small-top-app-bar">
    <button class="icon-button nav-icon genux-ripple">
        <span class="material-symbols-outlined">arrow_back</span>
    </button>
    <h1 class="headline">Title</h1>
    <div class="actions">
        <button class="icon-button genux-ripple">
            <span class="material-symbols-outlined">attach_file</span>
        </button>
        <button class="icon-button genux-ripple">
            <span class="material-symbols-outlined">today</span>
        </button>
        <button class="icon-button genux-ripple">
            <span class="material-symbols-outlined">more_vert</span>
        </button>
    </div>
</header>

<!-- Medium Top App Bar -->
<header class="medium-top-app-bar">
  <div class="top-content">
    <button class="icon-button nav-icon genux-ripple">
      <span class="material-symbols-outlined">arrow_back</span>
    </button>
    <div class="actions">
      <button class="icon-button genux-ripple">
        <span class="material-symbols-outlined">attach_file</span>
      </button>
        <button class="icon-button genux-ripple">
        <span class="material-symbols-outlined">today</span>
      </button>
      <button class="icon-button genux-ripple">
        <span class="material-symbols-outlined">more_vert</span>
      </button>
    </div>
  </div>
  <div class="headline-container">
    <h1 class="headline">Title</h1>
  </div>
</header>

<!-- Large Top App Bar -->
<header class="large-top-app-bar">
  <div class="top-content">
      <button class="icon-button nav-icon genux-ripple">
          <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <div class="actions">
          <button class="icon-button genux-ripple">
              <span class="material-symbols-outlined">attach_file</span>
          </button>
            <button class="icon-button genux-ripple">
              <span class="material-symbols-outlined">today</span>
          </button>
          <button class="icon-button genux-ripple">
              <span class="material-symbols-outlined">more_vert</span>
          </button>
      </div>
  </div>
  <div class="headline-container">
      <h1 class="headline">Title</h1>
  </div>
</header>
```

---

## Badge Components

*   Badges are used to indicate a notification, item count, or other information relating to a navigation destination or other UI element. They are typically placed on the ending edge (usually top-trailing) of icons or other components.
*   Badges show notifications, counts, or status information.
*   Can contain labels or numbers.
*   Limit text content to four characters, including symbols like "+".
*   Anchor badges inside the icon bounding box, at the upper trailing edge of the icon.
*   Badges default to `md.sys.elevation.level0` (0 DIPS).


### Badge Component - Tokens

---

#### Small Badge

**Token Set**: `md.comp.badge`

* `container.color`: `md.comp.badge.color` = `md.sys.color.error`
* `container.shape`: `md.comp.badge.shape` = `md.sys.shape.corner.full`
* `container.size`: `md.comp.badge.size` = `6dp`

---

#### Large Badge

**Token Set**: `md.comp.badge.large`

##### Container Tokens
* `container.color`: `md.comp.badge.large.color` = `md.sys.color.error`
* `container.shape`: `md.comp.badge.large.shape` = `md.sys.shape.corner.full`
* `container.size`: `md.comp.badge.large.size` = `16dp`
* `container.width`: `dynamic based on label length`

##### Label Text Tokens
* `label-text.color`: `md.comp.badge.large.label-text.color` = `md.sys.color.on-error`
* `label-text.font`: `md.comp.badge.large.label-text.font` = `md.sys.typescale.label-small.font`
* `label-text.line-height`: `md.comp.badge.large.label-text.line-height` = `md.sys.typescale.label-small.line-height`
* `label-text.size`: `md.comp.badge.large.label-text.size` = `md.sys.typescale.label-small.size`
* `label-text.tracking`: `md.comp.badge.large.label-text.tracking` = `md.sys.typescale.label-small.tracking`
* `label-text.weight`: `md.comp.badge.large.label-text.weight` = `md.sys.typescale.label-small.weight`

---

### Badge Component - Code Samples & Implementation

**Implementation Guide:**

  * **Anchor Element:** The badge is absolutely positioned relative to its parent. The parent container (e.g., `.icon-wrapper`) **MUST** have its position set to `relative` to act as the positioning anchor for the badge.
  * **Variations:** There are two main types of badges:
      * `.badge.small`: A small, circular dot used for notifications without a specific count.
      * `.badge.large`: A larger, pill-shaped badge that contains text or numbers.
  * **Single-Digit Modifier:** For large badges containing only a single character, add the `.single-digit` class to make the badge a perfect circle.

```css
/* -------------------------- */
/* --- Badge & Wrapper --- */
/* -------------------------- */

/* The wrapper anchors the badge. */
.icon-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

/* Base styles for all badges. */
.badge {
    position: absolute;
    top: 0;
    right: 0;
    /* Nudge the badge slightly outside the top-right corner of its parent */
    transform: translate(40%, -40%);
    background-color: var(--md-sys-color-error);
    color: var(--md-sys-color-on-error);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    line-height: 1;
    font: var(--md-sys-typescale-label-small); /* Using the typescale shorthand */
    letter-spacing: var(--md-sys-typescale-label-small-letter-spacing);
    z-index: 5;
}

/* -------------------------- */
/* --- Small Badge (Dot) --- */
/* -------------------------- */
.badge.small {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.badge.small span {
    display: none; /* Small badges have no text content */
}

/* --------------------------------- */
/* --- Large Badge (With Label) --- */
/* --------------------------------- */
.badge.large {
    height: 16px;
    min-width: 16px;
    border-radius: 8px; /* Half of height creates the pill shape */
    padding: 0 4px;
}

/* Modifier for single-digit large badges to render as a circle. */
.badge.large.single-digit {
    width: 16px; 
    padding: 0; 
}
```

```html
<div class="icon-wrapper">
    <span class="material-symbols-outlined">notifications</span>
    <div class="badge small"><span></span></div>
</div>

<div class="icon-wrapper">
    <span class="material-symbols-outlined">mail</span>
    <div class="badge large single-digit"><span>3</span></div>
</div>

<div class="icon-wrapper">
    <span class="material-symbols-outlined">chat_bubble_outline</span>
    <div class="badge large"><span>12</span></div>
</div>

<div class="icon-wrapper">
    <span class="material-symbols-outlined">mail</span>
    <div class="badge large"><span>99+</span></div>
</div>
```

---

## Button Components

* All buttons on the page must use these button styles with the exception of chips or FABs which use their respective styles.
* Buttons prompt most actions in a UI. Buttons communicate actions that users can take.
* Buttons are just one option for representing actions in a product and shouldn’t be overused.
* Too many buttons on a screen disrupts the visual hierarchy.
* Consider placing additional actions in a navigation drawer, set of chips, text links, or icon buttons.
* There are five types of common buttons covered by the primary token sets:
    1.  **Elevated buttons** are essentially filled buttons with a lighter background color and a shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button requires visual separation from a patterned background. (Uses `md.comp.elevated-button.*` tokens which map to `md.comp.button.elevated.*`)
    2.  **Filled buttons** are the most prominent buttons after the FAB. They're used for final or unblocking actions in a flow. (Uses `md.comp.filled-button.*` tokens which map to `md.comp.button.filled.*`)
    3.  **Tonal buttons** have a lighter background color and darker label color, making them less visually prominent than a regular, filled button. They’re still used for final or unblocking actions in a flow, but do so with less emphasis. (Uses `md.comp.tonal-button.*` tokens, originally `md.comp.filled-tonal-button.*`, mapping to `md.comp.button.tonal.*`)
    4.  **Outlined buttons** are used for actions that need attention but aren’t the primary action, such as “See all” or “Add to cart.” This is also the button to use for giving someone the opportunity to change their mind or escape a flow. (Uses `md.comp.outlined-button.*` tokens which map to `md.comp.button.outlined.*`)
    5.  **Text buttons** have less visual prominence, so should be used for low emphasis actions, such as an alternative option. (Uses `md.comp.text-button.*` tokens which map to `md.comp.button.text.*`)
* Common buttons use the 'Container Shape' defined in their component section by Border Radius. Buttons with text (a label) must use specific, non-50% corner radii as defined in the "Common Button Sizes & Shapes" section and are never fully rounded (to prevent circular or oval buttons). Apply a `.button--shape-square` modifier class to use the 'Square' radius values.
* The ONLY time buttons are fully rounded (using `md.sys.shape.corner.full` with a value of 50%) is for the icon button variant, which does not have a text label.
* Pay special attention to accurately represent the proper corner radii and type sizing represented for each button size.
* For selectable toggle buttons the shape style changes from round to square variants and vice versa on change.
    *   *Note: This shape change applies only to selectable toggle buttons and not to standard clickable buttons that don't toggle a selected state*
* A Button Group is an inline collection of buttons.
* leading-space and trailing-space tokens should be implemented as padding-left and padding-right respectively. icon-label-space should be implemented as the gap property on the button's flex container.
* Buttons only ever show a border (stroke) on the Outlined button variants (represented as 1px width `md.sys.color.outline` stroke). All other buttons NEVER show a border (stroke).

### CRITICAL: Elevation and Shadow Constraints
   * **Elevated buttons** are the only button variant that present with elevation (shadow).
   * **Filled, Tonal, Outlined, and Text buttons MUST NOT change elevation** in any state. They must always remain at `md.sys.elevation.level0` and should **NEVER** display a shadow, including on hover or press. Your generated CSS must enforce this!

### CRITICAL INSTRUCTIONS: Implementing Selectable Toggle Buttons

This is a set of high-priority rules that **MUST** be followed when generating any page containing selectable "toggle" buttons, such as those in single-select or multi-select groups. Overlooking these rules results in a critical failure of the user experience.

#### The Core Principle
Toggle buttons **MUST** provide immediate and unambiguous visual feedback for their selected and unselected states. This feedback is communicated through a mandatory combination of both **color AND shape** changes.

#### 1. Mandatory Color Change on Selection
When a toggle button's state changes, its colors **MUST** update according to the specific selected or unselected tokens for its variant.

- **Selected State (`.toggle-on`)**: When a button is selected, its `background-color` and `color` (for the label and icon) **MUST** be styled using the `*.selected.*` tokens.
    - **Example (Filled Button)**: A selected Filled Button must use `md.comp.filled-button.selected.container.color` for its background and `md.comp.filled-button.selected.label-text.color` for its text.
    - **Example (Outlined Button)**: A selected Outlined Button must use `md.comp.outlined-button.selected.container.color` and `md.comp.outlined-button.selected.label-text.color`.
- **Unselected State**: When a button is not selected, it **MUST** use the `*.unselected.*` tokens.
    - **Example (Filled Button)**: An unselected Filled Toggle Button must use `md.comp.filled-button.unselected.container.color`.
    - **Note**: If specific `unselected` tokens are not available for a variant, the button should revert to its standard "enabled" state styling for that variant.

#### 2. Mandatory Shape Morphing on Selection
This is a non-negotiable behavior for all selectable toggle buttons. When a user selects a toggle button, its container shape **MUST** animate or "morph" to a different shape.

- **The Rule**: The shape must toggle between its defined `square` and `round` variants.
- An unselected toggle button should typically use its `square` shape variant (e.g., `md.comp.button.small.container.shape.square`).
- Upon selection (`.toggle-on`), the button's shape **MUST** change to its `round` variant (e.g., `md.comp.button.small.selected.container.shape.round`).
- Deselecting the button **MUST** revert its shape back to `square`.


### Button Component - Tokens

---

### Base Tokens

**Token Set**: `md.comp.button`

#### Shape Tokens

* `container.shape.round`: `md.comp.button.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.button.container.shape.square` = `md.sys.shape.corner.medium`
* `pressed.container.shape`: `md.comp.button.pressed.container.shape` = `md.sys.shape.corner.small`
* `pressed.container.corner-size.motion.spring.damping`: `md.comp.button.pressed.container.corner-size.motion.spring.damping` = `md.sys.motion.spring.fast.bouncy.damping`
* `pressed.container.corner-size.motion.spring.stiffness`: `md.comp.button.pressed.container.corner-size.motion.spring.stiffness` = `md.sys.motion.spring.fast.bouncy.stiffness`
* `selected.container.shape.round`: `md.comp.button.selected.container.shape.round` = `md.sys.shape.corner.medium`
* `selected.container.shape.square`: `md.comp.button.selected.container.shape.square` = `md.sys.shape.corner.full`

#### Focus Ring Tokens

* `focus.indicator.color`: `md.comp.button.focus.indicator.color` = `md.sys.color.secondary`
* `focus.indicator.thickness`: `md.comp.button.focus.indicator.thickness` = `md.sys.state.focus-indicator.thickness`
* `focus.indicator.outline.offset`: `md.comp.button.focus.indicator.outline.offset` = `md.sys.state.focus-indicator.outer-offset`

---

#### Filled Button

**Token Set**: `md.comp.button.filled`

##### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.button.filled.container.color` = `md.sys.color.primary`
    * `unselected.container.color`: `md.comp.button.filled.unselected.container.color` = `md.sys.color.surface-container`
    * `selected.container.color`: `md.comp.button.filled.selected.container.color` = `md.sys.color.primary`
    * `container.shadow-color`: `md.comp.button.filled.container.shadow-color` = `md.sys.color.shadow`
    * `container.elevation`: `md.comp.button.filled.container.elevation` = `md.sys.elevation.level0`
    * `label-text.color`: `md.comp.button.filled.label-text.color` = `md.sys.color.on-primary`
    * `unselected.label-text.color`: `md.comp.button.filled.unselected.label-text.color` = `md.sys.color.on-surface-variant`
    * `selected.label-text.color`: `md.comp.button.filled.selected.label-text.color` = `md.sys.color.on-primary`
    * `icon.color`: `md.comp.button.filled.icon.color` = `md.sys.color.on-primary`
    * `unselected.icon.color`: `md.comp.button.filled.unselected.icon.color` = `md.sys.color.on-surface-variant`
    * `selected.icon.color`: `md.comp.button.filled.selected.icon.color` = `md.sys.color.on-primary`

* **Disabled**
    * `disabled.container.color`: `md.comp.button.filled.disabled.container.color` = `md.sys.color.on-surface`
    * `disabled.container.opacity`: `md.comp.button.filled.disabled.container.opacity` = `10%`
    * `disabled.container.elevation`: `md.comp.button.filled.disabled.container.elevation` = `md.sys.elevation.level0`
    * `disabled.label-text.color`: `md.comp.button.filled.disabled.label-text.color` = `md.sys.color.on-surface`
    * `disabled.label-text.opacity`: `md.comp.button.filled.disabled.label-text.opacity` = `38%`
    * `disabled.icon.color`: `md.comp.button.filled.disabled.icon.color` = `md.sys.color.on-surface`
    * `disabled.icon.opacity`: `md.comp.button.filled.disabled.icon.opacity` = `38%`

* **Hovered**
    * `hovered.state-layer.color`: `md.comp.button.filled.hovered.state-layer.color` = `md.sys.color.on-primary`
    * `unselected.hovered.state-layer.color`: `md.comp.button.filled.unselected.hovered.state-layer.color` = `md.sys.color.on-surface-variant`
    * `selected.hovered.state-layer.color`: `md.comp.button.filled.selected.hovered.state-layer.color` = `md.sys.color.on-primary`
    * `hovered.state-layer.opacity`: `md.comp.button.filled.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `hovered.container.elevation`: `md.comp.button.filled.hovered.container.elevation` = `md.sys.elevation.level0`

* **Focused**
    * `focused.state-layer.color`: `md.comp.button.filled.focused.state-layer.color` = `md.sys.color.on-primary`
    * `unselected.focused.state-layer.color`: `md.comp.button.filled.unselected.focused.state-layer.color` = `md.sys.color.on-surface-variant`
    * `selected.focused.state-layer.color`: `md.comp.button.filled.selected.focused.state-layer.color` = `md.sys.color.on-primary`
    * `focused.state-layer.opacity`: `md.comp.button.filled.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `focused.container.elevation`: `md.comp.button.filled.focused.container.elevation` = `md.sys.elevation.level0`

* **Pressed**
    * `pressed.state-layer.color`: `md.comp.button.filled.pressed.state-layer.color` = `md.sys.color.on-primary`
    * `unselected.pressed.state-layer.color`: `md.comp.button.filled.unselected.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `selected.pressed.state-layer.color`: `md.comp.button.filled.selected.pressed.state-layer.color` = `md.sys.color.on-primary`
    * `pressed.state-layer.opacity`: `md.comp.button.filled.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `pressed.container.elevation`: `md.comp.button.filled.pressed.container.elevation` = `md.sys.elevation.level0`

---

#### Tonal Button

**Token Set**: `md.comp.button.tonal`

##### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.button.tonal.container.color` = `md.sys.color.secondary-container`
    * `unselected.container.color`: `md.comp.button.tonal.unselected.container.color` = `md.sys.color.secondary-container`
    * `selected.container.color`: `md.comp.button.tonal.selected.container.color` = `md.sys.color.secondary`
    * `label-text.color`: `md.comp.button.tonal.label-text.color` = `md.sys.color.on-secondary-container`
    * `icon.color`: `md.comp.button.tonal.icon.color` = `md.sys.color.on-secondary-container`

* **Disabled**
    * `disabled.container.color`: `md.comp.button.tonal.disabled.container.color` = `md.sys.color.on-surface`
    * `disabled.container.opacity`: `md.comp.button.tonal.disabled.container.opacity` = `10%`
    * `disabled.label-text.color`: `md.comp.button.tonal.disabled.label-text.color` = `md.sys.color.on-surface`
    * `disabled.label-text.opacity`: `md.comp.button.tonal.disabled.label-text.opacity` = `38%`

* **Hovered**
    * `hovered.state-layer.color`: `md.comp.button.tonal.hovered.state-layer.color` = `md.sys.color.on-secondary-container`
    * `hovered.state-layer.opacity`: `md.comp.button.tonal.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Focused**
    * `focused.state-layer.color`: `md.comp.button.tonal.focused.state-layer.color` = `md.sys.color.on-secondary-container`
    * `focused.state-layer.opacity`: `md.comp.button.tonal.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Pressed**
    * `pressed.state-layer.color`: `md.comp.button.tonal.pressed.state-layer.color` = `md.sys.color.on-secondary-container`
    * `pressed.state-layer.opacity`: `md.comp.button.tonal.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Outlined Button

**Token Set**: `md.comp.button.outlined`

##### Color Tokens

* **Enabled**
    * `outline.color`: `md.comp.button.outlined.outline.color` = `md.sys.color.outline-variant`
    * `selected.container.color`: `md.comp.button.outlined.selected.container.color` = `md.sys.color.inverse-surface`
    * `label-text.color`: `md.comp.button.outlined.label-text.color` = `md.sys.color.on-surface-variant`
    * `icon.color`: `md.comp.button.outlined.icon.color` = `md.sys.color.on-surface-variant`

* **Disabled**
    * `selected.disabled.container.color`: `md.comp.button.outlined.selected.disabled.container.color` = `md.sys.color.on-surface`
    * `disabled.container.opacity`: `md.comp.button.outlined.disabled.container.opacity` = `10%`
    * `disabled.outline.color`: `md.comp.button.outlined.disabled.outline.color` = `md.sys.color.outline-variant`
    * `disabled.label-text.color`: `md.comp.button.outlined.disabled.label-text.color` = `md.sys.color.on-surface`
    * `disabled.label-text.opacity`: `md.comp.button.outlined.disabled.label-text.opacity` = `38%`

* **Hovered**
    * `hovered.state-layer.color`: `md.comp.button.outlined.hovered.state-layer.color` = `md.sys.color.on-surface-variant`
    * `hovered.state-layer.opacity`: `md.comp.button.outlined.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Focused**
    * `focused.state-layer.color`: `md.comp.button.outlined.focused.state-layer.color` = `md.sys.color.on-surface-variant`
    * `focused.state-layer.opacity`: `md.comp.button.outlined.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Pressed**
    * `pressed.state-layer.color`: `md.comp.button.outlined.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `pressed.state-layer.opacity`: `md.comp.button.outlined.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Text Button

**Token Set**: `md.comp.button.text`

##### Color Tokens

* **Enabled**
    * `label-text.color`: `md.comp.button.text.label-text.color` = `md.sys.color.primary`
    * `icon.color`: `md.comp.button.text.icon.color` = `md.sys.color.primary`

* **Disabled**
    * `disabled.container.color`: `md.comp.button.text.disabled.container.color` = `md.sys.color.on-surface`
    * `disabled.container.opacity`: `md.comp.button.text.disabled.container.opacity` = `10%`
    * `disabled.label-text.color`: `md.comp.button.text.disabled.label-text.color` = `md.sys.color.on-surface`
    * `disabled.label-text.opacity`: `md.comp.button.text.disabled.label-text.opacity` = `38%`

* **Hovered**
    * `hovered.state-layer.color`: `md.comp.button.text.hovered.state-layer.color` = `md.sys.color.primary`
    * `hovered.state-layer.opacity`: `md.comp.button.text.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Focused**
    * `focused.state-layer.color`: `md.comp.button.text.focused.state-layer.color` = `md.sys.color.primary`
    * `focused.state-layer.opacity`: `md.comp.button.text.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Pressed**
    * `pressed.state-layer.color`: `md.comp.button.text.pressed.state-layer.color` = `md.sys.color.primary`
    * `pressed.state-layer.opacity`: `md.comp.button.text.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Elevated Button

**Token Set**: `md.comp.button.elevated`

##### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.button.elevated.container.color` = `md.sys.color.surface-container-low`
    * `container.elevation`: `md.comp.button.elevated.container.elevation` = `md.sys.elevation.level1`
    * `label-text.color`: `md.comp.button.elevated.label-text.color` = `md.sys.color.primary`
    * `icon.color`: `md.comp.button.elevated.icon.color` = `md.sys.color.primary`

* **Disabled**
    * `disabled.container.color`: `md.comp.button.elevated.disabled.container.color` = `md.sys.color.on-surface`
    * `disabled.container.opacity`: `md.comp.button.elevated.disabled.container.opacity` = `10%`
    * `disabled.elevation`: `md.comp.button.elevated.disabled.container.elevation` = `md.sys.elevation.level0`
    * `disabled.label-text.color`: `md.comp.button.elevated.disabled.label-text.color` = `md.sys.color.on-surface`
    * `disabled.label-text.opacity`: `md.comp.button.elevated.disabled.label-text.opacity` = `38%`

* **Hovered**
    * `hovered.state-layer.color`: `md.comp.button.elevated.hovered.state-layer.color` = `md.sys.color.primary`
    * `hovered.state-layer.opacity`: `md.comp.button.elevated.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `hovered.container.elevation`: `md.comp.button.elevated.hovered.container.elevation` = `md.sys.elevation.level1`

* **Focused**
    * `focused.state-layer.color`: `md.comp.button.elevated.focused.state-layer.color` = `md.sys.color.primary`
    * `focused.state-layer.opacity`: `md.comp.button.elevated.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `focused.container.elevation`: `md.comp.button.elevated.focused.container.elevation` = `md.sys.elevation.level1`
    
* **Pressed**
    * `pressed.state-layer.color`: `md.comp.button.elevated.pressed.state-layer.color` = `md.sys.color.primary`
    * `pressed.state-layer.opacity`: `md.comp.button.elevated.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `pressed.container.elevation`: `md.comp.button.elevated.pressed.container.elevation` = `md.sys.elevation.level1`

---

#### Size Tokens

##### Xsmall

**Token Set**: `md.comp.button.xsmall`

* `container.height`: `md.comp.button.xsmall.container.height` = `32dp`
* `outlined.outline.width`: `md.comp.button.xsmall.outlined.outline.width` = `1dp`
* `label-text`: `md.comp.button.xsmall.label-text` = `md.sys.typescale.label-large`
* `icon.size`: `md.comp.button.xsmall.icon.size` = `20dp`
* `leading-space`: `md.comp.button.xsmall.leading-space` = `12dp`
* `icon-label-space`: `md.comp.button.xsmall.icon-label-space` = `4dp`
* `trailing-space`: `md.comp.button.xsmall.trailing-space` = `12dp`
* `container.shape.round`: `md.comp.button.xsmall.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.button.xsmall.container.shape.square` = `md.sys.shape.corner.medium`
* `pressed.container.shape`: `md.comp.button.xsmall.pressed.container.shape` = `md.sys.shape.corner.small`

---

##### Small

**Token Set**: `md.comp.button.small`

* `container.height`: `md.comp.button.small.container.height` = `40dp`
* `outlined.outline.width`: `md.comp.button.small.outlined.outline.width` = `1dp`
* `label-text`: `md.comp.button.small.label-text` = `md.sys.typescale.label-large`
* `icon.size`: `md.comp.button.small.icon.size` = `20dp`
* `leading-space`: `md.comp.button.small.leading-space` = `16dp`
* `icon-label-space`: `md.comp.button.small.icon-label-space` = `8dp`
* `trailing-space`: `md.comp.button.small.trailing-space` = `16dp`
* `container.shape.round`: `md.comp.button.small.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.button.small.container.shape.square` = `md.sys.shape.corner.medium`
* `pressed.container.shape`: `md.comp.button.small.pressed.container.shape` = `md.sys.shape.corner.small`

---

##### Medium

**Token Set**: `md.comp.button.medium`

* `container.height`: `md.comp.button.medium.container.height` = `56dp`
* `outlined.outline.width`: `md.comp.button.medium.outlined.outline.width` = `1dp`
* `label-text`: `md.comp.button.medium.label-text` = `md.sys.typescale.title-medium`
* `icon.size`: `md.comp.button.medium.icon.size` = `24dp`
* `leading-space`: `md.comp.button.medium.leading-space` = `24dp`
* `icon-label-space`: `md.comp.button.medium.icon-label-space` = `8dp`
* `trailing-space`: `md.comp.button.medium.trailing-space` = `24dp`
* `container.shape.round`: `md.comp.button.medium.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.button.medium.container.shape.square` = `md.sys.shape.corner.large`
* `pressed.container.shape`: `md.comp.button.medium.pressed.container.shape` = `md.sys.shape.corner.medium`

---

##### Large

**Token Set**: `md.comp.button.large`

* `container.height`: `md.comp.button.large.container.height` = `96dp`
* `outlined.outline.width`: `md.comp.button.large.outlined.outline.width` = `2dp`
* `label-text`: `md.comp.button.large.label-text` = `md.sys.typescale.headline-small`
* `icon.size`: `md.comp.button.large.icon.size` = `32dp`
* `leading-space`: `md.comp.button.large.leading-space` = `48dp`
* `icon-label-space`: `md.comp.button.large.icon-label-space` = `12dp`
* `trailing-space`: `md.comp.button.large.trailing-space` = `48dp`
* `container.shape.round`: `md.comp.button.large.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.button.large.container.shape.square` = `md.sys.shape.corner.extra-large`
* `pressed.container.shape`: `md.comp.button.large.pressed.container.shape` = `md.sys.shape.corner.large`

---

##### Xlarge

**Token Set**: `md.comp.button.xlarge`

* `container.height`: `md.comp.button.xlarge.container.height` = `136dp`
* `outlined.outline.width`: `md.comp.button.xlarge.outlined.outline.width` = `3dp`
* `label-text`: `md.comp.button.xlarge.label-text` = `md.sys.typescale.headline-large`
* `icon.size`: `md.comp.button.xlarge.icon.size` = `40dp`
* `leading-space`: `md.comp.button.xlarge.leading-space` = `64dp`
* `icon-label-space`: `md.comp.button.xlarge.icon-label-space` = `16dp`
* `trailing-space`: `md.comp.button.xlarge.trailing-space` = `64dp`
* `container.shape.round`: `md.comp.button.xlarge.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.button.xlarge.container.shape.square` = `md.sys.shape.corner.extra-large`
* `pressed.container.shape`: `md.comp.button.xlarge.pressed.container.shape` = `md.sys.shape.corner.large`

---

### Button Component - Code Samples & Implementation

**Implementation Guide:**
* Buttons are foundational interactive elements. Their implementation requires specific classes for variants, sizes, and shapes, along with the mandatory ripple effect.
* To ensure buttons are generated correctly, the HTML structure should always include classes for the variant, size, and shape. The CSS should apply styles based on these specific classes.

**Button HTML Structuree:**
All buttons MUST use the `<button>` element with the base class `.button`, followed by classes for its variant, size, and shape. Content MUST be wrapped in a `<span>` to ensure correct ripple effect layering.
```html
<button class="button filled size-small round genux-ripple">
  <span>Filled</span>
</button>

<button class="button outlined size-medium square icon-leading genux-ripple">
  <span class="material-symbols-outlined">favorite</span>
  <span>Outlined</span>
</button>
```

**Button CSS Structure:**
```css
/* Button base reset */
.button {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  line-height: 1;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Button variant styles */

/* Filled Variant */
.button.filled {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  --genux-press-color-rgb: var(--md-sys-color-on-primary-rgb);
}
.button.filled:disabled {
  background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.12);
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}
.button.filled:disabled .material-symbols-outlined {
 color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

/* Outlined Variant */
.button.outlined {
  border: 1px solid var(--md-sys-color-outline);
  background-color: transparent;
  color: var(--md-sys-color-primary);
  --genux-press-color-rgb: var(--md-sys-color-primary-rgb);
}
.button.outlined:disabled {
  border-color: rgba(var(--md-sys-color-on-surface-rgb), 0.12);
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}
.button.outlined:disabled .material-symbols-outlined {
 color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

/* Elevated Variant */
.button.elevated {
  background-color: var(--md-sys-color-surface-container-low);
  color: var(--md-sys-color-primary);
  box-shadow: 0 1px 2px var(--md-sys-color-shadow);
  --genux-press-color-rgb: var(--md-sys-color-primary-rgb);
}
.button.elevated:hover {
  box-shadow: 0 2px 4px var(--md-sys-color-shadow);
}
.button.elevated:disabled {
  background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.12);
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
  box-shadow: none;
}
.button.elevated:disabled .material-symbols-outlined {
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

/* Tonal Variant */
.button.tonal {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  --genux-press-color-rgb: var(--md-sys-color-on-secondary-container-rgb);
}
.button.tonal:disabled {
  background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.12);
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}
.button.tonal:disabled .material-symbols-outlined {
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

/* Text Variant */
.button.text {
  background-color: transparent;
  color: var(--md-sys-color-primary);
  --genux-press-color-rgb: var(--md-sys-color-primary-rgb);
}
.button.text:disabled {
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}
.button.text:disabled .material-symbols-outlined {
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

/* Disabled Variant */
.button:disabled {
  cursor: not-allowed;
  box-shadow: none;
}

/* Button size styles */

/* Extra Small Size */
.button.size-xsmall {
  height: 32px;
  gap: 8px;
  padding: 0 12px;
}
.button.size-xsmall.icon-leading { padding-left: 12px; }
.button.size-xsmall.icon-trailing { padding-right: 12px; }

/* Small Size */
.button.size-small {
  height: 40px;
  gap: 8px;
  padding: 0 24px;
}
.button.size-small.icon-leading { padding-left: 16px; }
.button.size-small.icon-trailing { padding-right: 16px; }

/* Medium Size */
.button.size-medium {
  height: 56px;
  gap: 8px;
  padding: 0 24px;
}

/* Large Size */
.button.size-large {
  height: 96px;
  gap: 12px;
  padding: 0 48px;
}
.button.size-large.icon-leading { padding-left: 48px; }
.button.size-large.icon-trailing { padding-right: 48px; }

/* Extra Large Size */
.button.size-xlarge {
  height: 136px;
  gap: 16px;
  padding: 0 64px;
}
.button.size-xlarge.icon-leading { padding-left: 64px; }
.button.size-xlarge.icon-trailing { padding-right: 64px; }

/* Button shape styles  */

/* Extra Small Shapes */
.button.size-xsmall.round { border-radius: 16px; }
.button.size-xsmall.square { border-radius: 12px; }

/* Small Shapes */
.button.size-small.round { border-radius: 20px; }
.button.size-small.square { border-radius: 12px; }

/* Large Shapes */
.button.size-large.round { border-radius: 48px; }
.button.size-large.square { border-radius: 28px; }

/* Extra Large Shapes */
.button.size-xlarge.round { border-radius: 68px; }
.button.size-xlarge.square { border-radius: 28px; }
```

**Disabled Button Styles**
To ensure disabled buttons render correctly, apply styles directly to the `:disabled` pseudo-class. Do not rely on applying opacity to a parent container.

**Example CSS for a Disabled Filled Button:**
```css
.button.filled:disabled {
  background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.12);
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
  box-shadow: none; /* Ensure no shadow on disabled state */
}

.button.filled:disabled .material-symbols-outlined {
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}
```

**Example CSS for a Disabled Outlined Button:**
```css
.button.outline:disabled {
  border: 1px solid rgba(var(--md-sys-color-on-surface-rgb), 0.12);
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
  background-color: transparent;
}
.button.outline:disabled .material-symbols-outlined {
  color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}
```


#### 3. Buttons Implementation Guide (CSS & JavaScript)
This behavior requires a combination of precise CSS and dynamic JavaScript.

##### A. CSS Structure
The CSS **MUST** define styles for all possible state and shape combinations. The `border-radius` property must be tied to the shape class (`.round` or `.square`).

```css
/* --- CORRECT CSS STRUCTURE --- */

/* Unselected States (Default) */
.button.size-small.square {
  /* md.comp.button.small.container.shape.square */
  border-radius: 16px; 
}
.button.size-small.round {
  /* md.comp.button.small.container.shape.round */
  border-radius: 20px;
}

/* Selected States (Applied via .toggle-on class) */
.button.size-small.toggle-on.square {
  /* md.comp.button.small.selected.container.shape.square */
  border-radius: 50%; /* Example for icon buttons, or specific value */
}
.button.size-small.toggle-on.round {
  /* md.comp.button.small.selected.container.shape.round */
  border-radius: 12px; /* Example value from tokens */
}

/* Color change for a selected Filled Button */
.button.filled.toggle-on {
  /* md.comp.filled-button.selected.* tokens */
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}

/* Color for an unselected Filled Button in a toggle group */
.button.filled.toggle-off {
    background-color: var(--md-sys-color-surface-container-highest);
    color: var(--md-sys-color-on-surface-variant);
}
```

##### B. Buttons JavaScript Logic
The event listener for the toggle group **MUST** be responsible for managing both the selection class (`.toggle-on`) and the shape classes (`.round`, `.square`).

```javascript
/* --- CORRECT JAVASCRIPT LOGIC --- */

// Example for a single-select group
const toggleGroup = document.getElementById('single-select-group');

toggleGroup.addEventListener('click', (e) => {
    const clickedButton = e.target.closest('.toggle-button');
    if (!clickedButton) return;

    // Iterate over all buttons in the group
    toggleGroup.querySelectorAll('.toggle-button').forEach(button => {
        if (button === clickedButton) {
            // This is the selected button
            button.classList.add('toggle-on');
            // MORPH SHAPE: from square to round
            button.classList.remove('square');
            button.classList.add('round');
        } else {
            // These are the unselected buttons
            button.classList.remove('toggle-on');
            // REVERT SHAPE: from round back to square
            button.classList.remove('round');
            button.classList.add('square');
        }
    });
});
```

#### CRITICAL SHAPE CONSTRAINT 

For all "round" variants of text-based buttons, you **MUST** follow the instructions in the **CRITICAL OVERRIDE RULE: Generating Pill Shapes** to correctly calculate the border-radius.

**Example Correct CSS for a 40px tall button:**
```css
.button.size-small.round {
  height: 40px;
  border-radius: 20px; /* CORRECT: Half of height */
}
```

#### Required Interactive Feedback: Ripple Effect

**CRITICAL:** All interactive button components (`Elevated`, `Filled`, `Tonal`, `Outlined`, `Text`) **MUST** implement the GenUX ripple effect to provide essential user feedback.

This is a non-optional part of the button's implementation.

1.  **Add the `genux-ripple` class** to the `<button>` element.
2.  **Wrap the button's content** (label and any icons) in a `<span>` tag.

**Correct HTML Structure Example:**

```html
<!-- Filled Button with Ripple -->
<button class="filled genux-ripple">
  <span>Filled</span>
</button>

<!-- Outlined Button with Icon and Ripple -->
<button class="outlined icon-leading genux-ripple">
  <span class="material-symbols-outlined">favorite</span>
  <span>With Icon</span>
</button>
```

For the complete CSS and JavaScript implementation, you MUST refer to and include the code from the `## Generative Ripple Effect Implementation` section of the main design system document.

#### Critical Implementation Note: Padding and Specificity

To ensure button padding is applied correctly and is not overridden by foundational or reset styles, the following CSS generation strategy MUST be followed:

1.  **Consolidate Size-Specific Properties:**
    All properties related to a button's size—including `height`, `padding-left`, `padding-right`, and `gap`—should be defined within a single, dedicated CSS rule for that size. Do not separate reset properties (like `padding: 0`) from sizing properties in rules with conflicting specificities.

2.  **Use Correct Padding Tokens:**
    The `leading-space` and `trailing-space` tokens (e.g., `md.comp.button.small.leading-space`) MUST be implemented as `padding-left` and `padding-right` respectively. These paddings apply to the `<button>` element itself.

3.  **Apply to Specific Size Classes:**
    These padding and height rules should target the specific size class (e.g., `.size-small`, `.size-medium`) to ensure the correct values are used and to maintain clear, organized CSS.

**Correct CSS Generation Example:**
```css
/*
 * CORRECT IMPLEMENTATION
 * All sizing properties, including padding, are consolidated
 * into a single, specific rule for the size variant.
 */

/* Small Button Size */
.button.size-small {
  height: 40px;
  gap: 8px; /* icon-label-space */
  padding-left: 16px; /* leading-space without icon */
  padding-right: 16px; /* trailing-space without icon */
}
.button.size-small.icon-leading {
  padding-left: 16px; /* leading-space with icon */
  padding-right: 24px; /* trailing-space with icon */
}
.button.size-small.icon-trailing {
  padding-left: 24px;
  padding-right: 16px;
}
```

***

**--- DO NOT DO THIS ---**

```css
/*
 * INCORRECT IMPLEMENTATION
 * This creates a specificity conflict where the reset rule's
 * `padding: 0` will override the sizing rule's padding.
 */

/* High-specificity reset rule - BAD */
button.button {
  padding: 0;
  /* ...other resets... */
}

/* Low-specificity sizing rule - WILL NOT WORK */
.button {
  height: 40px;
  padding: 0 24px; /* This padding will be ignored */
}
```

---



### Button Group Connected Component - Tokens

### Size Tokens

#### Xsmall

**Token Set**: `md.comp.button-group.connected.xsmall`

* `xsmall.container.height`: `md.comp.button-group.connected.xsmall.container.height` = `32dp`
* `xsmall.between-space`: `md.comp.button-group.connected.xsmall.between-space` = `2dp`
* `xsmall.container.shape`: `md.comp.button-group.connected.xsmall.container.shape` = `md.sys.shape.corner.full`
* `xsmall.inner-corner.corner-size`: `md.comp.button-group.connected.xsmall.inner-corner.corner-size` = `md.sys.shape.corner-value.small`
* `xsmall.pressed.inner-corner.corner-size`: `md.comp.button-group.connected.xsmall.pressed.inner-corner.corner-size` = `md.sys.shape.corner-value.extra-small`
* `xsmall.selected.inner-corner.corner-size`: `md.comp.button-group.connected.xsmall.selected.inner-corner.corner-size` = `50%`

---

#### Small

**Token Set**: `md.comp.button-group.connected.small`

* `small.container.height`: `md.comp.button-group.connected.small.container.height` = `40dp`
* `small.between-space`: `md.comp.button-group.connected.small.between-space` = `2dp`
* `small.container.shape`: `md.comp.button-group.connected.small.container.shape` = `md.sys.shape.corner.full`
* `small.inner-corner.corner-size`: `md.comp.button-group.connected.small.inner-corner.corner-size` = `md.sys.shape.corner-value.small`
* `small.pressed.inner-corner.corner-size`: `md.comp.button-group.connected.small.pressed.inner-corner.corner-size` = `md.sys.shape.corner-value.extra-small`
* `small.selected.inner-corner.corner-size`: `md.comp.button-group.connected.small.selected.inner-corner.corner-size` = `50%`

---

#### Medium

**Token Set**: `md.comp.button-group.connected.medium`

* `medium.container.height`: `md.comp.button-group.connected.medium.container.height` = `56dp`
* `medium.between-space`: `md.comp.button-group.connected.medium.between-space` = `2dp`
* `medium.container.shape`: `md.comp.button-group.connected.medium.container.shape` = `md.sys.shape.corner.full`
* `medium.inner-corner.corner-size`: `md.comp.button-group.connected.medium.inner-corner.corner-size` = `md.sys.shape.corner-value.small`
* `medium.pressed.inner-corner.corner-size`: `md.comp.button-group.connected.medium.pressed.inner-corner.corner-size` = `md.sys.shape.corner-value.extra-small`
* `medium.selected.inner-corner.corner-size`: `md.comp.button-group.connected.medium.selected.inner-corner.corner-size` = `50%`

---

#### Large

**Token Set**: `md.comp.button-group.connected.large`

* `large.container.height`: `md.comp.button-group.connected.large.container.height` = `96dp`
* `large.between-space`: `md.comp.button-group.connected.large.between-space` = `2dp`
* `large.container.shape`: `md.comp.button-group.connected.large.container.shape` = `md.sys.shape.corner.full`
* `large.inner-corner.corner-size`: `md.comp.button-group.connected.large.inner-corner.corner-size` = `md.sys.shape.corner-value.large`
* `large.pressed.inner-corner.corner-size`: `md.comp.button-group.connected.large.pressed.inner-corner.corner-size` = `md.sys.shape.corner-value.medium`
* `large.selected.inner-corner.corner-size`: `md.comp.button-group.connected.large.selected.inner-corner.corner-size` = `50%`

---

#### Xlarge

**Token Set**: `md.comp.button-group.connected.xlarge`

* `xlarge.container.height`: `md.comp.button-group.connected.xlarge.container.height` = `136dp`
* `xlarge.between-space`: `md.comp.button-group.connected.xlarge.between-space` = `2dp`
* `xlarge.container.shape`: `md.comp.button-group.connected.xlarge.container.shape` = `md.sys.shape.corner.full`
* `xlarge.inner-corner.corner-size`: `md.comp.button-group.connected.xlarge.inner-corner.corner-size` = `md.sys.shape.corner-value.large-increased`
* `xlarge.pressed.inner-corner.corner-size`: `md.comp.button-group.connected.xlarge.pressed.inner-corner.corner-size` = `md.sys.shape.corner-value.large`
* `xlarge.selected.inner-corner.corner-size`: `md.comp.button-group.connected.xlarge.selected.inner-corner.corner-size` = `50%`

---

### Connected Button Group (Connected) - Code Samples & Implementation

**Implementation Guide:**

  * **Structure:** Buttons are wrapped in a container element with the classes `.button-group` and `.connected`.
  * **Behavior:** Add the class `.single-select` to the container for radio button-like behavior (only one button can be active at a time). Add `.multi-select` for checkbox-like behavior (multiple buttons can be active).
  * **Buttons:** Each button requires the `.button` and `.toggle-button` classes. They also need a variant class (`.filled`, `.tonal`, or `.outlined`).
  * **States:** Use `.toggle-on` for the selected/pressed state and `.toggle-off` for the unselected state. The JavaScript will automatically toggle these along with the shape classes (`.round` for on, `.square` for off).
  * **Ripple Effect:** The interactive ripple effect requires the `.genux-ripple` class on each button element and the accompanying JavaScript.

```css
/* --- Button Variants (Unselected/Default State) --- */
/* Filled */
.button.filled.toggle-off {
    background-color: var(--md-sys-color-surface-container-highest);
    color: var(--md-sys-color-on-surface-variant);
    --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}
/* Tonal */
.button.tonal.toggle-off {
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
    --genux-press-color-rgb: var(--md-sys-color-on-secondary-container-rgb);
}
/* Outlined */
.button.outlined.toggle-off {
    background-color: transparent;
    color: var(--md-sys-color-on-surface-variant);
    border-color: var(--md-sys-color-outline);
    --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}

/* --- Selected State (.toggle-on) --- */
/* Filled */
.button.filled.toggle-on {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    border-color: transparent;
    --genux-press-color-rgb: var(--md-sys-color-on-primary-rgb);
}
/* Tonal */
.button.tonal.toggle-on {
    background-color: var(--md-sys-color-secondary);
    color: var(--md-sys-color-on-secondary);
    border-color: transparent;
    --genux-press-color-rgb: var(--md-sys-color-on-secondary-rgb);
}
/* Outlined */
.button.outlined.toggle-on {
    background-color: var(--md-sys-color-inverse-surface);
    color: var(--md-sys-color-inverse-on-surface);
    border-color: transparent;
    --genux-press-color-rgb: var(--md-sys-color-inverse-on-surface-rgb);
}

/* --- Shape Morphing --- */
.button.square { border-radius: 12px; }
.button.round { border-radius: 20px; } /* Half of 40px height */

/* --- Connected Button Group --- */
.button-group.connected {
    display: inline-flex;
    align-items: center;
    gap: 2px;
}
```

```html
<div class="button-group connected single-select">
    <button class="button outlined toggle-button square toggle-off genux-ripple icon-leading" aria-pressed="false">
        <span class="material-symbols-outlined">format_align_left</span>
        <span>Left</span>
    </button>
    <button class="button outlined toggle-button round toggle-on genux-ripple icon-leading" aria-pressed="true">
        <span class="material-symbols-outlined">format_align_center</span>
        <span>Center</span>
    </button>
    <button class="button outlined toggle-button square toggle-off genux-ripple icon-leading" aria-pressed="false">
        <span class="material-symbols-outlined">format_align_right</span>
        <span>Right</span>
    </button>
</div>

<div class="button-group connected single-select">
    <button class="button tonal toggle-button square toggle-off genux-ripple"><span>XS</span></button>
    <button class="button tonal toggle-button square toggle-off genux-ripple"><span>S</span></button>
    <button class="button tonal toggle-button round toggle-on genux-ripple"><span>M</span></button>
    <button class="button tonal toggle-button square toggle-off genux-ripple"><span>L</span></button>
</div>

<div class="button-group connected multi-select">
    <button class="button filled toggle-button square toggle-off genux-ripple" aria-pressed="false">
        <span class="material-symbols-outlined">format_bold</span>
    </button>
    <button class="button filled toggle-button round toggle-on genux-ripple" aria-pressed="true">
        <span class="material-symbols-outlined">format_italic</span>
    </button>
    <button class="button filled toggle-button square toggle-off genux-ripple" aria-pressed="false">
        <span class="material-symbols-outlined">format_underlined</span>
    </button>
</div>
```

```javascript
// --- Ripple Effect & Button Group Logic ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Single-Select Group Logic ---
    const singleSelectGroups = document.querySelectorAll('.single-select');
    singleSelectGroups.forEach(group => {
        group.addEventListener('click', (e) => {
            const clickedButton = e.target.closest('.toggle-button');
            if (!clickedButton) return;

            // Update all buttons in the same group
            group.querySelectorAll('.toggle-button').forEach(button => {
                if (button === clickedButton) {
                    button.classList.add('toggle-on', 'round');
                    button.classList.remove('toggle-off', 'square');
                    button.setAttribute('aria-pressed', 'true');
                } else {
                    button.classList.remove('toggle-on', 'round');
                    button.classList.add('toggle-off', 'square');
                    button.setAttribute('aria-pressed', 'false');
                }
            });
        });
    });

    // --- Multi-Select Group Logic ---
    const multiSelectGroups = document.querySelectorAll('.multi-select');
    multiSelectGroups.forEach(group => {
        group.addEventListener('click', (e) => {
            const clickedButton = e.target.closest('.toggle-button');
            if (!clickedButton) return;

            // Toggle the state of the clicked button
            const isPressed = clickedButton.classList.toggle('toggle-on');
            clickedButton.classList.toggle('toggle-off', !isPressed);
            clickedButton.classList.toggle('round', isPressed);
            clickedButton.classList.toggle('square', !isPressed);
            clickedButton.setAttribute('aria-pressed', isPressed);
        });
    });
});
```

---

## Button Group Component

* Button groups organize buttons and adds expressive interactions between them.
* Applies shape morph when pressed and selected using tokens like `md.comp.button.<size>.pressed.container.shape` (value e.g. `md.sys.shape.corner.small`) and `md.comp.button.<size>.selected.container.shape.round/square` (values e.g. `md.sys.shape.corner.medium`/`md.sys.shape.corner.full`).
* Works with all button sizes: XS, S, M, L, and XL, using the respective `md.comp.button.<size>.*` tokens.
* Support for single-select, multi-select, and selection-required using the `(toggle-unselected)` and `(toggle-selected)` color variants defined for each button type (e.g., `md.comp.filled-button.selected.container.color` with value `md.sys.color.primary`).
* Button groups can contain a mix of common buttons and icon buttons.
* Two types of button groups: standard and connected.

    1.  **Standard button groups** add interaction between adjacent buttons so they respond to each other. When a button in a standard group is selected:
        *   The selected button changes shape and width (as per `md.comp.button.<size>.selected.container.shape.*` tokens). A selected toggle button also changes color (as per `*.selected.*.color` tokens which point to `md.sys.color.*` values).
        *   Adjacent buttons move and temporarily change width.
        *   Mix and match the different types of buttons, widths, and colors to emphasize what’s important, and to visually group related buttons.
        *   All buttons in a standard group should be the same size (XS to XL) and shape (round or square) by default. Default shape for common buttons will follow the non-fully-rounded spec; icon buttons in a group will follow their fully-rounded spec for round variants.
            *   Only use multiple sizes in a group for key interactions. Avoid mixing sizes too frequently.
            *   Only use a different shape in a group when a button is selected or when adding meaning or contrast to key interactions.
        *   Standard button groups have 8px spacing between each button.

    2.  **Connected button groups** help people select options, switch views, or sort elements in a page. They behave similarly to standard groups, except they don’t affect adjacent buttons.
        *   Use connected button groups when the content in the buttons is related and buttons can be selected.
        *   Connected button groups should be used for single-select or multi-select patterns, which use toggle buttons. Avoid using a connected group when none of the buttons can be toggled.
        *   Connected button groups have 2px spacing between each button.

*   **Note on Button Group Tokens:** The provided "Button group token testing" CSV primarily defines tokens for individual button styles, states (including toggle-selected/unselected, pressed), and shape transformations (like `pressed.container.shape` or `selected.container.shape`). These are crucial for how buttons behave *within* a group. However, the CSV does not include explicit tokens for:
    *   Styling the button group container itself.
    *   Defining spacing *between* buttons within a group.
    *   Specific styling rules for achieving the "connected" look in connected button groups (e.g., merged borders, specific border radius adjustments for first/middle/last children).
    These aspects of button group presentation, particularly for "connected" groups, are often handled by additional CSS rules applied in the context of a button group, rather than direct tokens from this specific sheet.

### Button Group Standard Component - Tokens

---

### Button Group Standard Component
Description: All color roles for the Button Group Standard Component should be pulled from the Button Component Tokens file.

**Token Set**: `md.comp.button-group.standard`

### Motion Tokens

* **Pressed**
    * `pressed.item.width.motion.spring.dampening`: `md.comp.button-group.standard.pressed.item.width.motion.spring.dampening` = `md.sys.motion.springs.fast.bouncy.transform.dampening`
    * `pressed.item.width.motion.spring.stiffness`: `md.comp.button-group.standard.pressed.item.width.motion.spring.stiffness` = `md.sys.motion.springs.fast.bouncy.transform.stiffness`
    * `pressed.item.width.multiplier`: `md.comp.button-group.standard.pressed.item.width.multiplier` = `15%`

---

### Size Tokens

#### Xsmall

**Token Set**: `md.comp.button-group.standard.xsmall`

* `xsmall.container.height`: `md.comp.button-group.standard.xsmall.container.height` = `32dp`
* `xsmall.between-space`: `md.comp.button-group.standard.xsmall.between-space` = `18dp`
* `xsmall.pressed.item.width.motion.spring.dampening`: `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.dampening` = `md.sys.motion.springs.fast.bouncy.transform.dampening`
* `xsmall.pressed.item.width.motion.spring.stiffness`: `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.stiffness` = `md.sys.motion.springs.fast.bouncy.transform.stiffness`
* `xsmall.pressed.item.width.multiplier`: `md.comp.button-group.standard.xsmall.pressed.item.width.multiplier` = `15%`

---

#### Small

**Token Set**: `md.comp.button-group.standard.small`

* `small.container.height`: `md.comp.button-group.standard.small.container.height` = `40dp`
* `small.between-space`: `md.comp.button-group.standard.small.between-space` = `12dp`
* `small.pressed.item.width.motion.spring.dampening`: `md.comp.button-group.standard.small.pressed.item.width.motion.spring.dampening` = `md.sys.motion.springs.fast.bouncy.transform.dampening`
* `small.pressed.item.width.motion.spring.stiffness`: `md.comp.button-group.standard.small.pressed.item.width.motion.spring.stiffness` = `md.sys.motion.springs.fast.bouncy.transform.stiffness`
* `small.pressed.item.width.multiplier`: `md.comp.button-group.standard.small.pressed.item.width.multiplier` = `15%`

---

#### Medium

**Token Set**: `md.comp.button-group.standard.medium`

* `medium.container.height`: `md.comp.button-group.standard.medium.container.height` = `56dp`
* `medium.between-space`: `md.comp.button-group.standard.medium.between-space` = `8dp`
* `medium.pressed.item.width.motion.spring.dampening`: `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.dampening` = `md.sys.motion.springs.fast.bouncy.transform.dampening`
* `medium.pressed.item.width.motion.spring.stiffness`: `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.stiffness` = `md.sys.motion.springs.fast.bouncy.transform.stiffness`
* `medium.pressed.item.width.multiplier`: `md.comp.button-group.standard.medium.pressed.item.width.multiplier` = `15%`

---

#### Large

**Token Set**: `md.comp.button-group.standard.large`

* `large.container.height`: `md.comp.button-group.standard.large.container.height` = `96dp`
* `large.between-space`: `md.comp.button-group.standard.large.between-space` = `8dp`
* `large.pressed.item.width.motion.spring.dampening`: `md.comp.button-group.standard.large.pressed.item.width.motion.spring.dampening` = `md.sys.motion.springs.fast.bouncy.transform.dampening`
* `large.pressed.item.width.motion.spring.stiffness`: `md.comp.button-group.standard.large.pressed.item.width.motion.spring.stiffness` = `md.sys.motion.springs.fast.bouncy.transform.stiffness`
* `large.pressed.item.width.multiplier`: `md.comp.button-group.standard.large.pressed.item.width.multiplier` = `15%`

---

#### Xlarge

**Token Set**: `md.comp.button-group.standard.xlarge`

* `xlarge.container.height`: `md.comp.button-group.standard.xlarge.container.height` = `136dp`
* `xlarge.between-space`: `md.comp.button-group.standard.xlarge.between-space` = `8dp`
* `xlarge.pressed.item.width.motion.spring.dampening`: `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.dampening` = `md.sys.motion.springs.fast.bouncy.transform.dampening`
* `xlarge.pressed.item.width.motion.spring.stiffness`: `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.stiffness` = `md.sys.motion.springs.fast.bouncy.transform.stiffness`
* `xlarge.pressed.item.width.multiplier`: `md.comp.button-group.standard.xlarge.pressed.item.width.multiplier` = `15%`

---

### Connected Button Group (Standard) - Code Samples & Implementation

**Implementation Guide:**
  * **Structure:** The component consists of a container element with the `.button-group` class and `.standard`, which holds multiple `<button>` elements.
  * **Connectivity:** To create the "connected" appearance, the `.button-group` container uses `display: flex`, and the CSS overrides the `border-radius` on the buttons within it. Only the first and last buttons have rounded corners on their outer edges.
  * **Toggle Behavior:** The component requires JavaScript to handle single-select and multi-select behaviors. This script toggles the `.toggle-on` class, updates the `aria-pressed` attribute for accessibility, and handles the visual shape-morphing effect (from `round` to `square`) upon selection.
  * **Ripple Effect:** The `.genux-ripple` class and its corresponding JavaScript should be used to provide Material Design's standard ink ripple interaction feedback.

```css
/* ----------------------------------- */
/* --- Connected Button Group Base --- */
/* ----------------------------------- */

.button-group.standard {
  display: flex; /* Aligns buttons in a row */
  flex-wrap: wrap;
}

/* --- Round the corners of the first and last buttons in the group --- */
.button-group.standard .button:first-child {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.button-group.standard .button:last-child {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

/* -------------------------------------- */
/* --- Toggle Button States & Variants--- */
/* -------------------------------------- */

/* Default (Unselected) State */
.button.toggle-button {
  background-color: var(--md-sys-color-surface-container-highest);
  color: var(--md-sys-color-on-surface-variant);
  --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}

/* Default (Unselected) Outlined State */
.button.toggle-button.outlined {
  background-color: transparent;
  color: var(--md-sys-color-on-surface-variant);
  border: 1px solid var(--md-sys-color-outline);
}
/* Remove the right border for adjacent outlined buttons */
.button-group.standard .button.toggle-button.outlined:not(:last-child) {
    border-right: none;
}


/* Selected State for Tonal Buttons */
.button.tonal.toggle-on {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  --genux-press-color-rgb: var(--md-sys-color-on-primary-rgb);
}

/* Selected State for Outlined Buttons */
.button.outlined.toggle-on {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  border-color: transparent;
}
```

```html
<div class="button-group standard single-select-group">
    <button class="button tonal size-small toggle-button toggle-on" aria-pressed="true">
        <span class="material-symbols-outlined">format_align_left</span>
        <span>Left</span>
    </button>
    <button class="button tonal size-small toggle-button" aria-pressed="false">
        <span class="material-symbols-outlined">format_align_center</span>
        <span>Center</span>
    </button>
    <button class="button tonal size-small toggle-button" aria-pressed="false">
        <span class="material-symbols-outlined">format_align_right</span>
        <span>Right</span>
    </button>
    <button class="button tonal size-small toggle-button" aria-pressed="false" disabled>
        <span class="material-symbols-outlined">format_align_justify</span>
        <span>Justify</span>
    </button>
</div>

<div class="button-group standard multi-select-group">
    <button class="button outlined size-small toggle-button icon-button toggle-on" aria-pressed="true">
        <span class="material-symbols-outlined">format_bold</span>
    </button>
    <button class="button outlined size-small toggle-button icon-button" aria-pressed="false">
        <span class="material-symbols-outlined">format_italic</span>
    </button>
    <button class="button outlined size-small toggle-button icon-button" aria-pressed="false">
        <span class="material-symbols-outlined">format_underlined</span>
    </button>
</div>
```

```javascript
/* --------------------------------- */
/* --- Button Group Interaction --- */
/* --------------------------------- */

// --- Single-Select Group Logic ---
const singleSelectGroup = document.querySelector('.single-select-group');
if (singleSelectGroup) {
    singleSelectGroup.addEventListener('click', (e) => {
        const clickedButton = e.target.closest('.toggle-button');
        if (!clickedButton || clickedButton.disabled) return;

        // Deselect all buttons in the group first
        singleSelectGroup.querySelectorAll('.toggle-button').forEach(button => {
            button.classList.remove('toggle-on');
            button.setAttribute('aria-pressed', 'false');
        });

        // Select the clicked button
        clickedButton.classList.add('toggle-on');
        clickedButton.setAttribute('aria-pressed', 'true');
    });
}

// --- Multi-Select Group Logic ---
const multiSelectGroup = document.querySelector('.multi-select-group');
if (multiSelectGroup) {
    multiSelectGroup.addEventListener('click', (e) => {
        const clickedButton = e.target.closest('.toggle-button');
        if (!clickedButton || clickedButton.disabled) return;

        // Toggle the state of the clicked button
        const isSelected = clickedButton.classList.toggle('toggle-on');
        clickedButton.setAttribute('aria-pressed', isSelected);
    });
}
```

## Card Components

Cards are a container component. Cards are surfaces that display content and actions on a single subject. They should be easy to scan for relevant and actionable information, with elements like text and images placed to clearly indicate hierarchy. Cards can serve as entry points to more detailed information or actions.

**Core Principles:**
*   **Single Subject Focus**: Each card should be dedicated to a single topic or piece of content.
*   **Scannability**: Information should be presented clearly for quick comprehension.
*   **Actionable**: Cards can include actions related to their content.

**Types of Cards:**
There are three main types of cards, each providing the same legibility and functionality, differing primarily in style and emphasis:
1.  **Elevated Card (`md.comp.elevated-card`)**: High-emphasis, uses a shadow and surface tint to appear raised.
2.  **Filled Card (`md.comp.filled-card`)**: Medium-emphasis, uses a contrasting fill color for its container.
3.  **Outlined Card (`md.comp.outlined-card`)**: Low-emphasis, uses a stroke outline for its container.

---

### General Card Anatomy & Structure

A card typically consists of the following elements, though only the container is mandatory:

1.  **Container**: The main surface of the card that holds all other elements. Its size is determined by the content it holds.
2.  **Media (Optional)**: Images, videos, or thumbnails.
3.  **Header (Optional)**: Often includes a thumbnail/avatar and title/subtitle.
4.  **Headline (Optional)**: The main title or subject of the card.
5.  **Subhead (Optional)**: Secondary text, often a byline or brief description.
6.  **Supporting Text (Optional)**: Body content, such as an article summary or detailed description.
7.  **Actions (Optional)**: Buttons, icon buttons, selection controls, or linked text that allow users to interact with the card's content.
8.  **Overflow Menu (Optional)**: Typically an icon button in a corner for less prominent actions.

### Content Blocks within Cards

*   **Dividers**:
    *   Can be used to separate regions within a card.
    *   Full-width dividers indicate areas that can expand.
    *   Inset dividers separate related content without running the full width.
*   **Media**:
    *   **Thumbnail**: Small images, often for avatars or logos.
    *   **Image**: Photos, illustrations, or other graphics.
    *   **Video**: Embedded video content.
    *   **Text on Media**: Generally not recommended. If used, ensure sufficient contrast using a scrim or bounding shape beneath the text/icon to meet accessibility standards.
*   **Text**:
    *   **Headline**: Communicates the primary subject.
    *   **Subhead**: Smaller text elements, providing secondary information.
    *   **Supporting Text**: Body content, summaries, or descriptions.

---

### Card Interaction Models

A card can be interactive in one of two ways. These models are mutually exclusive and must not be combined.

#### Model A: Container as Action

The entire card surface acts as a single interactive target. This is used for navigation, where tapping anywhere on the card leads to a new view. In this case, the main card element should have the `.interactive` and `.genux-ripple` classes. This model is only appropriate when there are no other interactive elements (like buttons or chips) within the card.

#### Model B: Discrete Actions

The card contains one or more distinct interactive elements, such as buttons, icon buttons, or chips. In this model, only those specific elements are interactive. The card container itself is a non-interactive surface.


### Actions in Cards

*   **Buttons**: Standard buttons (e.g., "Learn More", "Add to Cart"). Should leverage `md.comp.button`.
*   **Icon Buttons**: For actions like "Save", "Favorite", or "Share". Should leverage `md.comp.icon-button`.
*   **Selection Controls**: Chips, sliders, checkboxes, etc.
*   **Linked Text**: Hyperlinks within supporting text.
*   **Overflow Menu**: For a list of related actions, typically placed in the upper-right or lower-right corner.

---

### Layout & Spacing (General Guidelines)

*   **Corner Radius**: Typically `12dp` (maps to `md.sys.shape.corner.medium`).
*   **Padding (Internal)**:
    *   Left/Right padding within the card: `16dp`.
    *   Padding around content should be consistent.
*   **Padding (Between Cards)**: When in a collection, a gap of `8dp` max is common.
*   **Label Text Alignment**: Typically start-aligned.
*   **Hierarchy**: Visual hierarchy should be clear through typography, spacing, and element placement.

---

### Cards in a Collection

Cards can be grouped and displayed in:
*   **Grid**: Organizes cards in a two-dimensional layout. Can be standard, staggered, or mosaic.
*   **Vertical List**: Stacks cards one after another.
*   **Carousel**: Displays cards in a horizontally scrollable row.

By default, cards in a collection are coplanar (share the same resting elevation) unless picked up or dragged.
Organize collections for ease of use; layout significantly affects perception.
Filtering or sorting options for a collection should be placed outside the card collection itself.

---

### Laying Out Multiple Cards: The Feed Pattern (CRITICAL RULE)

When a prompt requires displaying a collection of cards (e.g., "show me cards about news," "build a page with product cards"), you **MUST** arrange them in a responsive grid. A simple vertical stack is only acceptable for the `Compact` window size class.

This is a non-negotiable rule that connects this component to the system's `## Layout` documentation.

**Required Implementation:**

1.  Wrap the collection of cards in a container that uses the base framework's grid system. Example: `<div class="grid">`.
2.  Place each individual card component inside a responsive column `div`. The classes should follow the pattern `s<columns> m<columns> l<columns>` to define the layout at different breakpoints.
    * **Example:** `class="s12 m6 l4"` means the card will take up:
        * 12/12 columns on small screens (full width).
        * 6/12 columns on medium screens (2 cards per row).
        * 4/12 columns on large screens (3 cards per row).
3.  Adjust the column classes (`l4`, `l3`, etc.) based on the desired density for larger screens.

---

### Responsive Layout & Ergonomics

*   **Adaptability**: Cards scale and adapt to different window size classes. Position and alignment of elements can change.
*   **Ergonomics (Large Screens)**: Adjust layout to meet ergonomic needs. E.g., a horizontal card in a compact window might become a larger, vertical card in an expanded window.
*   **Visual Presentation**:
    *   Optimize spacing for different breakpoints.
    *   Allow components like lists and cards to fill the region of a screen that suits the device breakpoint's ergonomic needs.
*   **Column-based Layouts**: For large screens (expanded window size), use multiple columns to display content effectively, avoiding over-extension of UI elements.

---

### Behavior

*   **Expanding**:
    *   Cards can use a container transform transition to reveal additional content, often expanding to fill the screen.
    *   This pattern is reserved for expressive, hero moments.
    *   **Do**: Expand a card to reveal more information.
    *   **Don't**: Scroll *within* a card to reveal information on mobile (expand the card instead).
*   **Gestures**:
    *   **Swipe**:
        *   Can be performed on a single card at a time, anywhere on the card.
        *   Uses: Dismiss a card, change a card's state (e.g., flagging, archiving).
        *   **Do**: Assign only one swipe action per card.
        *   **Don't**: Include swipable content (like image carousels) within a swipable card. Don't detach portions of cards on swipe.
    *   **Pick up and Move**:
        *   Allows users to reorder cards in a collection.
        *   **Do**: Increase a card's elevation when moving it.
        *   **Don't**: Let cards bump other UI elements out of the way. Picked-up cards appear in front of all elements (except app bars/system navigation).
*   **Scrolling**:
    *   **Mobile** (`compact`) If card content exceeds maximum height, it's truncated. The card can expand beyond screen height, in which case the *card itself* scrolls within the screen. Content *within* the card does not scroll independently (to avoid nested scrollbars).
    *   **Large screen** (`medium`, `expanded`, `large`, `extra-large`): On large screens, card content can expand and scroll *within the card*.

---

### Layout, Sizing, and Responsive Behavior

**Fundamental Rule:** The layout of cards is critical for ensuring a consistent and intuitive user experience. The following rules define how cards must behave across different screen sizes and are not optional.

* **Desktop & Large Viewports (Grid Display):**
    * On larger screens (e.g., desktop, `large`, and `extra-large` breakpoints), a card **must never** be displayed as a single, full-width element.
    * Cards **must always** be presented in a multi-column grid, with two or more cards appearing side-by-side.

* **Mobile & Small Viewports (Stacked Display):**
    * A single, full-width card layout is **only** permissible on small screens, such as mobile devices. In this view, cards should stack vertically to optimize for limited horizontal space.

* **Maximum Width:**
    * To ensure content readability and proper grid composition, an individual card component **must not** exceed a `max-width` of `480px`. This is a strict upper limit.

### Card Component - Tokens

---

#### Filled Card

**Token Set**: `md.comp.card.filled`

##### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.card.filled.container.color` = `md.sys.color.surface-container-highest`

* **Disabled**
    * `container.color`: `md.comp.card.filled.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.card.filled.disabled.container.opacity` = `0.12`

* **Focus**
    * `state-layer.color`: `md.comp.card.filled.focus.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.card.filled.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Hover**
    * `state-layer.color`: `md.comp.card.filled.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.card.filled.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Pressed**
    * `state-layer.color`: `md.comp.card.filled.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.card.filled.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

##### Elevation Tokens

* **Dragged**
    * `container.elevation`: `md.comp.card.filled.dragged.container.elevation` = `md.sys.elevation.level4`

##### Shape Tokens

* **Enabled**
    * `container.shape`: `md.comp.card.filled.container.shape` = `md.sys.shape.corner.medium`
    
---

#### Elevated Card

**Token Set**: `md.comp.card.elevated`

##### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.card.elevated.container.color` = `md.sys.color.surface-container-low`

* **Disabled**
    * `container.color`: `md.comp.card.elevated.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.card.elevated.disabled.container.opacity` = `0.12`

* **Focus**
    * `state-layer.color`: `md.comp.card.elevated.focus.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.card.elevated.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Hover**
    * `state-layer.color`: `md.comp.card.elevated.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.card.elevated.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Pressed**
    * `state-layer.color`: `md.comp.card.elevated.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.card.elevated.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

##### Elevation Tokens

* **Enabled**
    * `container.elevation`: `md.comp.card.elevated.container.elevation` = `md.sys.elevation.level1`
    * `container.shadow-color`: `md.comp.card.elevated.container.shadow-color` = `md.sys.color.shadow`

* **Disabled**
    * `container.elevation`: `md.comp.card.elevated.disabled.container.elevation` = `md.sys.elevation.level0`

* **Hover**
    * `container.elevation`: `md.comp.card.elevated.hover.container.elevation` = `md.sys.elevation.level2`

* **Pressed**
    * `container.elevation`: `md.comp.card.elevated.pressed.container.elevation` = `md.sys.elevation.level1`

* **Dragged**
    * `container.elevation`: `md.comp.card.elevated.dragged.container.elevation` = `md.sys.elevation.level4`

##### Shape Tokens

* **Enabled**
    * `container.shape`: `md.comp.card.elevated.container.shape` = `md.sys.shape.corner.medium`

---

#### Outlined Card

**Token Set**: `md.comp.card.outlined`

##### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.card.outlined.container.color` = `md.sys.color.surface`
    * `outline.color`: `md.comp.card.outlined.outline.color` = `md.sys.color.outline-variant`

* **Disabled**
    * `container.color`: `md.comp.card.outlined.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.card.outlined.disabled.container.opacity` = `0.12`
    * `outline.color`: `md.comp.card.outlined.disabled.outline.color` = `md.sys.color.on-surface`
    * `outline.opacity`: `md.comp.card.outlined.disabled.outline.opacity` = `0.12`

* **Focus**
    * `state-layer.color`: `md.comp.card.outlined.focus.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.card.outlined.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Hover**
    * `state-layer.color`: `md.comp.card.outlined.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.card.outlined.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Pressed**
    * `state-layer.color`: `md.comp.card.outlined.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.card.outlined.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

##### Elevation Tokens

* **Dragged**
    * `container.elevation`: `md.comp.card.outlined.dragged.container.elevation` = `md.sys.elevation.level4`

##### Outline Tokens

* **Enabled**
    * `outline.width`: `md.comp.card.outlined.outline.width` = `1dp`

##### Shape Tokens

* **Enabled**
    * `container.shape`: `md.comp.card.outlined.container.shape` = `md.sys.shape.corner.medium`

---

### Card Component - Code Samples & Implementation

**Implementation Guide:**

  * **Variants:** Cards are available in three main styles: `elevated`, `filled`, and `outlined`. Apply the corresponding class to the main `.card` element.
  * **Interactivity:** To add visual feedback (hover, focus states) for clickable cards, add the `interactive` class.
  * **Disabled State:** To disable a card, apply the `disabled` class. This will reduce its opacity and disable pointer events.
  * **Anatomy:** A card is a flexible container. You can compose its content using optional elements like `.media`, `.header`, `.content`, and `.actions`.

```css
/* --------------------------- */
/* --- Card Component Styles --- */
/* --------------------------- */

/* --- Base --- */
.card {
    border-radius: var(--md-sys-shape-corner-medium);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: box-shadow 200ms ease-out;
    max-width: 480px;
}

/* --- Variants --- */
.card.elevated {
    background-color: var(--md-sys-color-surface-container-low);
    box-shadow: var(--md-sys-elevation-level1-shadow);
}

.card.filled {
    background-color: var(--md-sys-color-surface-container-highest);
}

.card.outlined {
    background-color: var(--md-sys-color-surface);
    border: 1px solid var(--md-sys-color-outline-variant);
}

/* --- States --- */
.card.interactive::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--md-sys-color-on-surface);
    opacity: 0;
    transition: opacity 150ms ease-in-out;
}

.card.interactive:hover {
    box-shadow: var(--md-sys-elevation-level2-shadow); /* For elevated cards */
}

.card.interactive:hover::after {
    opacity: var(--md-sys-opacity-state-hover);
}

.card.interactive:focus-within::after {
    opacity: var(--md-sys-opacity-state-focus);
}

.card.disabled {
    opacity: 0.38;
    pointer-events: none;
}

/* --- Anatomy --- */
.card .media {
    height: 180px;
    background-size: cover;
    background-position: center;
}

.card .media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--md-sys-color-surface-variant);
    color: var(--md-sys-color-on-surface-variant);
}

.card .header {
    display: flex;
    align-items: center;
    padding: 16px;
}

.card .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 500;
    margin-right: 16px;
}

.card .header-text {
    flex-grow: 1;
}

.card .headline {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: var(--md-sys-color-on-surface);
}

.card .subhead {
    font-size: 0.875rem;
    color: var(--md-sys-color-on-surface-variant);
    line-height: 1.4;
}

.card .content {
    padding: 16px;
}

.card .supporting-text {
    font-size: 0.875rem;
    color: var(--md-sys-color-on-surface-variant);
    line-height: 1.4;
}

.card .actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 8px 16px 16px;
    margin-top: auto; /* Pushes actions to the bottom */
}

/* --- Action Button Styles (for use within .actions) --- */
.button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 10px 12px;
    font-family: 'Google Sans Flex', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    border-radius: 999px;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
}
.button.text {
    color: var(--md-sys-color-primary);
    --genux-press-color-rgb: var(--md-sys-color-primary-rgb);
}
.button.filled {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    padding: 10px 24px;
    --genux-press-color-rgb: var(--md-sys-color-on-primary-rgb);
}
```

```html
<div class="card elevated">
    <div class="header">
        <div class="avatar">A</div>
        <div class="header-text">
            <div class="headline">Headline</div>
            <div class="subhead">Subhead</div>
        </div>
    </div>
    <div class="media">
        <img src="https://picsum.photos/400/200?random=1" alt="Placeholder image">
    </div>
    <div class="content">
        <div class="supporting-text">An elevated card with a header, media, content, and actions.</div>
    </div>
    <div class="actions">
        <button class="button text genux-ripple"><span>Action</span></button>
        <button class="button filled genux-ripple"><span>Action</span></button>
    </div>
</div>

<div class="card filled interactive genux-ripple" tabindex="0">
    <div class="content">
        <div class="headline">Filled Card</div>
        <div class="subhead">Interactive Container</div>
        <div class="supporting-text" style="margin-top: 8px;">
            This entire card is a single tappable target.
        </div>
    </div>
</div>

<div class="card outlined">
     <div class="header">
        <div class="avatar">C</div>
        <div class="header-text">
            <div class="headline">Headline</div>
            <div class="subhead">Subhead</div>
        </div>
    </div>
    <div class="content">
         <div class="supporting-text">The outlined variant offers a low-emphasis visual style for cards.</div>
    </div>
    <div class="actions">
        <button class="button text genux-ripple"><span>Action</span></button>
    </div>
</div>
```

#### CRITICAL CONSTRAINT: No Nested Ripples

A Card container **MUST NOT** be interactive (i.e., have the `.interactive` or `.genux-ripple` class) if it contains separate interactive elements like buttons. In such cases, the ripple effect applies **ONLY** to the inner elements. Applying a ripple to both the container and its actions creates a confusing and incorrect user experience.

##### Correct HTML Implementation (Model B: Discrete Actions)

```html
<div class="card elevated">
  <div class="actions">
    <button class="button text genux-ripple"><span>Action 1</span></button>
    <button class="button filled genux-ripple"><span>Action 2</span></button>
  </div>
</div>
```

##### Incorrect HTML Implementation

```html
<div class="card elevated interactive genux-ripple">
  <div class="actions">
    <button class="button text genux-ripple"><span>Action 1</span></button>
    <button class="button filled genux-ripple"><span>Action 2</span></button>
  </div>
</div>
```

---

## Carousel Component

* Carousels display a collection of items (like images, cards, or content snippets) in a horizontally scrolling strip. They allow users to browse through related content without leaving the current context.
* Carousels are highly visual and often contain images or video, frequently accompanied by optional label text or brief descriptions below the visual element. Carousel items can show items of various sizes and adapt dynamically based on window size.
* Items within the carousel typically scroll smoothly. Scrolling can be "default" (free scroll) or "snap-scrolling" (items snap to a defined position).
* Advanced implementations can feature:
    * **Parallax Effect**: Background elements within items scroll at a different rate than foreground elements. *(Implementation relies on CSS transitions/animations and potentially JavaScript, governed by timing/easing defined in `md.sys.motion`.)*
    * **Dynamic Sizing**: Items may subtly change size as they move towards or away from the center focal point of the carousel. When scrolled, items may automatically change size and snap into place to maintain layout consistency.
* **Alignment**: Carousel items can be:
    * **Start-aligned**: Items align to the start edge of the container.
    * **Center-aligned**: Items align relative to the center of the container, often used with Hero or dynamically sized layouts. All layout types can be center-aligned, though center-aligned Hero is the most common.
* **Controls**: Carousels may include optional previous/next arrow buttons (`md.comp.icon-button`) for navigation, especially on non-touch devices.
* **Item Visibility**: Carousel items must be fully visible on-screen (except for the `Uncontained` layout). When scrolled, items automatically change size and snap into place to maintain the same layout.
* **Item Sizing**: Carousel items have no fixed width; they change dynamically based on the window size or their position in the carousel's layout. There are three dynamic widths an item can be: **large**, **medium**, and **small**.
    * Large items have an adjustable max width.
    * Medium items adjust dynamically to the carousel size and available space.
    * Small items have a width range of 40–56dp.
* **Item Styling**:
    * Carousel items should always have equal height and fill the carousel container.
    * The image within a carousel item should stretch to fill the item's dimensions.
    * All carousel items should have a corner radius of `28px`.
    * There should be an `8px` gap between each carousel item.
* **Content Adaptation**: Content within a carousel item can adapt dynamically based on container and window size. Text should always be understandable. Consider adapting the text to use brief labels on smaller carousel items.


### Layout Types
 
Carousels support four main layout types. The number of carousel items visible can change based on the carousel layout and the window size class. As the carousel container size increases, so does the number of carousel items visible at a time. In compact window sizes, carousels can comfortably show up to three carousel items at once (for layouts like Multi-browse).

1.  **Multi-browse (`.layout-multi-browse`)**:
    * **Best used for**: Browse many visual items at once (like photos or event feeds), dynamic designs.
    * Displays multiple, equally sized or dynamically sized items partially on screen, encouraging horizontal scrolling to reveal more.
    * On larger screens, more large and medium items are visible.
    * The default presentation shows one large item, one or more medium items, and a single small, pill-shaped item at the trailing edge of the viewport.
    * Avoid if items need lots of text or complicated imagery.
    * In compact windows, if items have text, show up to three. If more than three, ensure images/content are easily recognizable.
    * Snap-scrolling is recommended to ensure items are recognizable and consistently sized.
2.  **Uncontained (`.layout-uncontained`)**:
    * **Best used for**: Highly-customized or text-heavy carousels, stacked images and text, traditional carousel behavior.
    * Items visually extend beyond the defined carousel container bounds, often used for edge-to-edge visuals. Masking or clipping might be applied.
    * Items are typically a single, consistent size and don't change size during scroll. This allows for more text or UI above/below items without masking/cropping.
    * Default (standard) scrolling is recommended. Snap-scrolling can also work.
3.  **Hero (`.layout-hero`)**:
    * **Best used for**: Spotlighting very large visual items (like a movie or featured app) that need more attention.
    * Emphasizes a single, larger central item, with adjacent items partially visible and often scaled down, creating a focal point.
    * On larger screens, more large items are visible.
    * In compact windows, typically shows one large item and one small preview item.
    * Typically uses center-alignment. When the hero layout is center-aligned, it adds an additional previewed item on the leading edge, making the large carousel item centered.
    * Use snap-scrolling so users can easily cycle through items one at a time.
4.  **Full-screen (`.layout-full-screen`)**:
    * **Best used for**: Immersive experiences like vertically-scrolling video articles, featured headlines, or items that are visually rich. Can contain text and other UI elements on top of the image.
    * Designed to occupy the full width and potentially height of the viewport.
    * Works best with content taller than it is wide and typically scrolls vertically within the carousel context (though items are selected via horizontal interaction).
    * Only works in portrait orientation in compact and medium windows; do not use in landscape for these window sizes.
    * Must use snap-scrolling; items should snap to the edges of the container. Avoid free scrolling or items stopping halfway.
    * Only ever shows one item at a time.

### Scrolling Behavior

* **Default Scrolling**:
    * Items do not snap to a layout grid and can stop anywhere in the container.
    * Recommended primarily for the `Uncontained` layout.
* **Snap Scrolling**:
    * Aligns carousel items to the layout grid after they're scrolled; items snap to the grid when released.
    * Recommended for `Multi-browse`, `Hero`, and `Full-screen` layouts.
    * For `Full-screen` layouts, items must snap to the edges of the carousel container.

### Accessibility

* On vertically-scrolling pages, carousels (except `Full-screen` carousels) must include an accessible way to view all items without relying on horizontal scrolling.
* **Recommendation**: Add a "Show all" button below the carousel. This button should open a dedicated, vertically-scrolling page displaying all carousel items.
* If the carousel has a header, an arrow icon button can be used instead of a "Show all" text button.
* Ensure carousel item content (images, text) is large enough to be easily readable and recognizable. Avoid making items so small that content is illegible.

### Carousel Component - Tokens

---

**Token Set**: `md.comp.carousel`

#### Color Tokens

##### **Enabled**

* `Color`: `md.comp.carousel-item.container.color` = `md.sys.color.surface`
* `Elevation`: `md.comp.carousel-item.container.elevation` = `md.sys.elevation.level0`
* `Shadow color`: `md.comp.carousel-item.container.shadow-color` = `md.sys.color.shadow`
* `Shape`: `md.comp.carousel-item.container.shape` = `md.sys.shape.corner.extra-large`
* `Outline width (optional)`: `md.comp.carousel-item.with-outline.outline.width` = `1dp`
* `Outline color (optional)`: `md.comp.carousel-item.with-outline.outline.color` = `md.sys.color.outline`

##### **Hover**

* `Elevation`: `md.comp.carousel-item.hover.container.elevation` = `md.sys.elevation.level1`
* `Outline color`: `md.comp.carousel-item.with-outline.hover.outline.color` = `md.sys.color.outline`
* `State layer color`: `md.comp.carousel-item.hover.state-layer.color` = `md.sys.color.on-surface`
* `State layer opacity`: `md.comp.carousel-item.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

##### **Focus**

* `Elevation`: `md.comp.carousel-item.focus.container.elevation` = `md.sys.elevation.level0`
* `Outline color`: `md.comp.carousel-item.with-outline.focus.outline.color` = `md.sys.color.on-surface`
* `State layer color`: `md.comp.carousel-item.focus.state-layer.color` = `md.sys.color.on-surface`
* `State layer opacity`: `md.comp.carousel-item.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

##### **Container**

* `State color`: `md.comp.carousel.focus.indicator.color` = `md.sys.color.secondary`
* `Padding`: `md.comp.carousel.focus.indicator.thickness` = `md.sys.states.focus-indicator.thickness`
* `Outline offset`: `md.comp.carousel.focus.indicator.outline.offset` = `md.sys.states.focus-indicator.outer-offset`

##### **Pressed (ripple)**

* `Elevation`: `md.comp.carousel-item.pressed.container.elevation` = `md.sys.elevation.level0`
* `Outline color`: `md.comp.carousel-item.with-outline.pressed.outline.color` = `md.sys.color.outline`
* `State layer color`: `md.comp.carousel-item.pressed.state-layer.color` = `md.sys.color.on-surface`
* `State layer opacity`: `md.comp.carousel-item.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

##### **Disabled**

* `Elevation`: `md.comp.carousel-item.disabled.container.elevation` = `md.sys.elevation.level0`
* `Container opacity`: `md.comp.carousel-item.disabled.container.opacity` = `38%`
* `Color`: `md.comp.carousel-item.disabled.container.color` = `md.sys.color.surface`
* `Outline color (optional)`: `md.comp.carousel-item.with-outline.disabled.outline.color` = `md.sys.color.outline`
* `Outline opacity (optional)`: `md.comp.carousel-item.with-outline.disabled.outline.opacity` = `12%`

---

#### Layout

##### **Contained**

* `Leading padding`: `md.comp.carousel.leading-space` = `16dp`
* `Trailing padding`: `md.comp.carousel.trailing-space` = `16dp`
* `Top padding`: `md.comp.carousel.top-space` = `8dp`
* `Bottom padding`: `md.comp.carousel.bottom-space` = `8dp`
* `Padding between items`: `md.comp.carousel.between-carousel-items-space` = `8dp`

##### **Uncontained**

* `Leading padding`: `md.comp.carousel.leading-space` = `16dp`
* `Top padding`: `md.comp.carousel.top-space` = `8dp`
* `Bottom padding`: `md.comp.carousel.bottom-space` = `8dp`
* `Padding between elements`: `md.comp.carousel.between-carousel-items-space` = `8dp`

---


### Carousel Component - Code Sample

This section provides the necessary HTML, CSS, and JavaScript to implement the various Carousel configurations.

#### 1. HTML Structure

The base structure for any carousel consists of a container and a series of items. The container must have a layout-specific class (e.g., `.multi-browse-carousel`).

```html
<!-- Wrapper for layout-specific styling like fades -->
<div class="carousel-wrapper">
    <!-- The main scrollable container -->
    <div id="my-carousel" class="carousel-container multi-browse-carousel">
        <!-- Carousel items are injected here by JavaScript -->
        <!-- Example of a single item: -->
        <div class="carousel-item" data-id="1">
            <img src="..." alt="..." loading="lazy">
            <div class="carousel-item-content">
                <div class="title">Item Title</div>
                <div class="subtitle">Item Subtitle</div>
            </div>
        </div>
    </div>
</div>
```

#### 2. CSS Implementation

The CSS handles the scrolling behavior, item layout, and dynamic sizing. Key aspects include using overflow-x: auto for scrolling, gap for spacing, and scroll-snap-type for snapping behavior.

```css
/* General container for scrolling and layout */
.carousel-container {
    display: flex;
    align-items: center; 
    gap: 8px; /* Space between items */
    overflow-x: auto;
    scrollbar-width: none; /* Hide scrollbar */
    padding: 16px;
    cursor: grab;
}
.carousel-container::-webkit-scrollbar { display: none; }

/* Base styling for each item */
.carousel-item {
    flex: 0 0 auto; /* Prevents items from shrinking */
    border-radius: 28px;
    overflow: hidden;
    position: relative;
    height: 100%; /* Fill container height */
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* --- Multi-browse Specific Styles --- */
.multi-browse-carousel {
    scroll-snap-type: x mandatory;
    height: 280px;
}
.multi-browse-carousel .carousel-item {
    scroll-snap-align: start;
}
.multi-browse-carousel .item-large { width: 424px; }
.multi-browse-carousel .item-medium { width: 256px; }
.multi-browse-carousel .item-small { 
    width: 56px; /* Pill shape */
}
.multi-browse-carousel .item-small .carousel-item-content {
    display: none; /* Hide content on small items */
}

/* --- Uncontained Specific Styles --- */
.uncontained-carousel-wrapper {
    position: relative;
}
.uncontained-carousel-wrapper::before,
.uncontained-carousel-wrapper::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0; width: 50px;
    z-index: 2; pointer-events: none;
}
.uncontained-carousel-wrapper::before {
    left: 0;
    background: linear-gradient(to right, var(--md-sys-color-surface-container-lowest), transparent);
}
.uncontained-carousel-wrapper::after {
    right: 0;
    background: linear-gradient(to left, var(--md-sys-color-surface-container-lowest), transparent);
}

/* --- Hero Specific Styles --- */
.hero-carousel {
    scroll-snap-type: x mandatory;
    height: 300px;
}
.hero-carousel .carousel-item {
    opacity: 0.5;
    height: 256px; /* Non-active items are smaller */
}
.hero-carousel .carousel-item.active {
    opacity: 1;
    height: 100%; /* Active item fills height */
}
.hero-carousel .item-large { width: 424px; }
.hero-carousel .item-small { width: 192px; }
```

#### 3. JavaScript Logic

JavaScript is essential for enabling drag-to-scroll functionality and for dynamically applying the correct size classes (.item-large, .item-medium, .item-small) based on the item's position within the viewport.

```js
// --- Drag-to-scroll functionality ---
function initializeDragScroll(carousel) {
    let isDown = false, startX, scrollLeft;
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('dragging');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    // Add mouseleave, mouseup, and mousemove listeners...
}

// --- Dynamic sizing logic for Multi-browse ---
function updateMultiBrowseState(carousel) {
    const items = Array.from(carousel.querySelectorAll('.carousel-item'));
    if (items.length === 0) return;

    const largeWidth = 424, mediumWidth = 256, smallWidth = 56, gap = 8;
    const scrollLeft = carousel.scrollLeft;
    const containerWidth = carousel.clientWidth;

    // Determine the first item that is considered "visible"
    let firstVisibleIndex = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].offsetLeft + items[i].offsetWidth / 2 > scrollLeft) {
            firstVisibleIndex = i;
            break;
        }
    }

    // Reset all classes
    items.forEach(item => item.classList.remove('item-large', 'item-medium', 'item-small'));
    
    let occupiedWidth = 0;
    let lastPlacedIndex = -1;

    // 1. Place the first visible item as large
    if(items[firstVisibleIndex]){
        items[firstVisibleIndex].classList.add('item-large');
        occupiedWidth += largeWidth + gap;
        lastPlacedIndex = firstVisibleIndex;
    }

    // 2. Place medium items until we can't fit another one
    for (let i = firstVisibleIndex + 1; i < items.length; i++) {
        // Check if a medium item PLUS a small item can fit
        if (occupiedWidth + mediumWidth + gap + smallWidth + gap <= containerWidth) {
            items[i].classList.add('item-medium');
            occupiedWidth += mediumWidth + gap;
            lastPlacedIndex = i;
        } else {
            break; // Stop placing medium items
        }
    }

    // 3. Place one small item at the end of the visible set
    const nextItemIndex = lastPlacedIndex + 1;
    if (nextItemIndex < items.length) {
         items[nextItemIndex].classList.add('item-small');
    }
    
    // 4. Set all other off-screen items to small
    for (let i = 0; i < items.length; i++) {
        if (!items[i].classList.contains('item-large') && !items[i].classList.contains('item-medium') && !items[i].classList.contains('item-small')) {
             items[i].classList.add('item-small');
        }
    }
}


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Select all carousels and initialize them
    const multiBrowseCarousel = document.getElementById('my-carousel');
    // Populate with data, initialize drag scroll, and set up scroll/resize listeners
    // to call updateMultiBrowseState().
});

```

---














## Carousel Component

* Carousels display a collection of items (like images, cards, or content snippets) in a horizontally scrolling strip. They allow users to browse through related content without leaving the current context.
* Carousels are highly visual and often contain images or video, frequently accompanied by optional label text or brief descriptions below the visual element. Carousel items can show items of various sizes and adapt dynamically based on window size.
* Items within the carousel typically scroll smoothly. Scrolling can be "default" (free scroll) or "snap-scrolling" (items snap to a defined position).
* Advanced implementations can feature:
    * **Parallax Effect**: Background elements within items scroll at a different rate than foreground elements. *(Implementation relies on CSS transitions/animations and potentially JavaScript, governed by timing/easing defined in `md.sys.motion`.)*
    * **Dynamic Sizing**: Items may subtly change size as they move towards or away from the center focal point of the carousel. When scrolled, items may automatically change size and snap into place to maintain layout consistency.
* **Alignment**: Carousel items can be:
    * **Start-aligned**: Items align to the start edge of the container.
    * **Center-aligned**: Items align relative to the center of the container, often used with Hero or dynamically sized layouts. All layout types can be center-aligned, though center-aligned Hero is the most common.
* **Controls**: Carousels may include optional previous/next arrow buttons (`md.comp.icon-button`) for navigation, especially on non-touch devices.
* **Item Visibility**: Carousel items must be fully visible on-screen (except for the `Uncontained` layout). When scrolled, items automatically change size and snap into place to maintain the same layout.
* **Item Sizing**: Carousel items have no fixed width; they change dynamically based on the window size or their position in the carousel's layout. There are three dynamic widths an item can be: **large**, **medium**, and **small**. All carousel items always have equal height with one another (full-height to the carousel container). 
    * Large items have an adjustable max width.
    * Medium items adjust dynamically to the carousel size and available space.
    * Small items have a width range of 40–56dp.
* **Item Styling**:
    * Carousel items should always have equal height and fill the carousel container.
    * The image within a carousel item should stretch to fill the item's dimensions.
    * **Critical shape rule** - All carousel items should have a corner radius of `28px`.
    * There should be an `8px` gap between each carousel item.
* **Content Adaptation**: Content within a carousel item can adapt dynamically based on container and window size. Text should always be understandable. Consider adapting the text to use brief labels on smaller carousel items.

### Layout Types
 
Carousels support four main layout types. The number of carousel items visible can change based on the carousel layout and the window size class. As the carousel container size increases, so does the number of carousel items visible at a time. In compact window sizes, carousels can comfortably show up to three carousel items at once (for layouts like Multi-browse).

1.  **Multi-browse (`.layout-multi-browse`)**:
    * **Best used for**: Browse many visual items at once (like photos or event feeds), dynamic designs.
    * Displays multiple, equally sized or dynamically sized items partially on screen, encouraging horizontal scrolling to reveal more.
    * On larger screens, more large and medium items are visible.
    * The default presentation shows one large item, one or more medium items, and a single small, pill-shaped item at the trailing edge of the viewport.
    * Avoid if items need lots of text or complicated imagery.
    * In compact windows, if items have text, show up to three. If more than three, ensure images/content are easily recognizable.
    * Snap-scrolling is recommended to ensure items are recognizable and consistently sized.
2.  **Uncontained (`.layout-uncontained`)**:
    * **Best used for**: Highly-customized or text-heavy carousels, stacked images and text, traditional carousel behavior.
    * Items visually extend beyond the defined carousel container bounds, often used for edge-to-edge visuals. Masking or clipping might be applied.
    * Items are typically a single, consistent size and don't change size during scroll. This allows for more text or UI above/below items without masking/cropping.
    * Default (standard) scrolling is recommended. Snap-scrolling can also work.
3.  **Hero (`.layout-hero`)**:
    * **Best used for**: Spotlighting very large visual items (like a movie or featured app) that need more attention.
    * Emphasizes a single, larger central item, with adjacent items partially visible and often scaled down, creating a focal point.
    * On larger screens, more large items are visible.
    * In compact windows, typically shows one large item and one small preview item.
    * Typically uses center-alignment. When the hero layout is center-aligned, it adds an additional previewed item on the leading edge, making the large carousel item centered.
    * Use snap-scrolling so users can easily cycle through items one at a time.
4.  **Full-screen (`.layout-full-screen`)**:
    * **Best used for**: Immersive experiences like vertically-scrolling video articles, featured headlines, or items that are visually rich. Can contain text and other UI elements on top of the image.
    * Designed to occupy the full width and potentially height of the viewport.
    * Works best with content taller than it is wide and typically scrolls vertically within the carousel context (though items are selected via horizontal interaction).
    * Only works in portrait orientation in compact and medium windows; do not use in landscape for these window sizes.
    * Must use snap-scrolling; items should snap to the edges of the container. Avoid free scrolling or items stopping halfway.
    * Only ever shows one item at a time.

### Scrolling Behavior

* **Default Scrolling**:
    * Items do not snap to a layout grid and can stop anywhere in the container.
    * Recommended primarily for the `Uncontained` layout.
* **Snap Scrolling**:
    * Aligns carousel items to the layout grid after they're scrolled; items snap to the grid when released.
    * Recommended for `Multi-browse`, `Hero`, and `Full-screen` layouts.
    * For `Full-screen` layouts, items must snap to the edges of the carousel container.

### Accessibility

* On vertically-scrolling pages, carousels (except `Full-screen` carousels) must include an accessible way to view all items without relying on horizontal scrolling.
* **Recommendation**: Add a "Show all" button below the carousel. This button should open a dedicated, vertically-scrolling page displaying all carousel items.
* If the carousel has a header, an arrow icon button can be used instead of a "Show all" text button.
* Ensure carousel item content (images, text) is large enough to be easily readable and recognizable. Avoid making items so small that content is illegible.

### Carousel Component - Tokens

---
#### Carousel (Base)
**Token Set Name**: `md.comp.carousel`
**Token Type**: COMPONENT

**Tokens & Subgroups**:

* **Mask**:
    * **Carousel mask color** (`md.comp.carousel.mask.color`): md.sys.color.surface *(References: md.ref.palette.neutral98)*

* **Controls**:
    * **Carousel control background color** (`md.comp.carousel.control.background.color`): md.sys.color.surface-container-high *(References: md.ref.palette.neutral92)*
    * **Carousel control foreground color** (`md.comp.carousel.control.foreground.color`): md.sys.color.on-surface *(References: md.ref.palette.neutral10)*

* **Indicators**:
    * **Active Indicator Color**: `md.comp.carousel.active.indicator.color` - md.sys.color.primary *(References: md.ref.palette.primary40)*
    * **Active Indicator Shape**: `md.comp.carousel.active.indicator.shape` - SHAPE_FAMILY_ROUNDED_CORNERS (8.0 DIPS)
    * **Active Indicator Width**: `md.comp.carousel.active.indicator.width` - 12.0 DIPS
    * **Inactive Indicator Color**: `md.comp.carousel.inactive.indicator.color` - md.sys.color.primary *(References: md.ref.palette.primary40)*
    * **Inactive Indicator Opacity**: `md.comp.carousel.inactive.indicator.opacity` - 0.38
    * **Inactive Indicator Shape**: `md.comp.carousel.inactive.indicator.shape` - SHAPE_FAMILY_CIRCULAR
    * **Inactive Indicator Size**: `md.comp.carousel.inactive.indicator.size` - 8.0 DIPS

---
#### Carousel Items
*(This section covers the different size variants for carousel items.)*

* **Fullscreen Item**:
    * **Container width**: `md.comp.carousel.fullscreen-item.container.width` - 100.0 PERCENT
    * **Container height**: `md.comp.carousel.fullscreen-item.container.height` - 100.0 PERCENT

* **Large Item**:
    * **Container width**: `md.comp.carousel.large-item.container.width` - 424.0 DIPS
    * **Container height**: `md.comp.carousel.large-item.container.height` - 100.0 PERCENT

* **Medium Item**:
    * **Container width**: `md.comp.carousel.medium-item.container.width` - 256.0 DIPS
    * **Container height**: `md.comp.carousel.medium-item.container.height` - 100.0 PERCENT

* **Small Item**:
    * **Container width**: `md.comp.carousel.small-item.container.width` - 192.0 DIPS
    * **Container height**: `md.comp.carousel.small-item.container.height` - 100.0 PERCENT

---
#### Uncontained Carousel
**Token Set Name**: `md.comp.uncontained-carousel`
**Token Type**: COMPONENT

**Tokens**:
* **Bottom fadeout color stop 1**: `md.comp.uncontained-carousel.bottom-fadeout.color-stop-1` - md.sys.color.surface (with 0% alpha)
* **Bottom fadeout color stop 2**: `md.comp.uncontained-carousel.bottom-fadeout.color-stop-2` - md.sys.color.surface (with 100% alpha)
* **Top fadeout color stop 1**: `md.comp.uncontained-carousel.top-fadeout.color-stop-1` - md.sys.color.surface (with 100% alpha)
* **Top fadeout color stop 2**: `md.comp.uncontained-carousel.top-fadeout.color-stop-2` - md.sys.color.surface (with 0% alpha)

---
### Carousel Component - Code Sample

This section provides the necessary HTML, CSS, and JavaScript to implement the various Carousel configurations.

#### 1. HTML Structure

The base structure for any carousel consists of a container and a series of items. The container must have a layout-specific class (e.g., `.multi-browse-carousel`).

```html
<!-- Wrapper for layout-specific styling like fades -->
<div class="carousel-wrapper">
    <!-- The main scrollable container -->
    <div id="my-carousel" class="carousel-container multi-browse-carousel">
        <!-- Carousel items are injected here by JavaScript -->
        <!-- Example of a single item: -->
        <div class="carousel-item" data-id="1">
            <img src="..." alt="..." loading="lazy">
            <div class="carousel-item-content">
                <div class="title">Item Title</div>
                <div class="subtitle">Item Subtitle</div>
            </div>
        </div>
    </div>
</div>
2. CSS ImplementationThe CSS handles the scrolling behavior, item layout, and dynamic sizing. Key aspects include using overflow-x: auto for scrolling, gap for spacing, and scroll-snap-type for snapping behavior./* General container for scrolling and layout */
.carousel-container {
    display: flex;
    align-items: center; 
    gap: 8px; /* Space between items */
    overflow-x: auto;
    scrollbar-width: none; /* Hide scrollbar */
    padding: 16px;
    cursor: grab;
}
.carousel-container::-webkit-scrollbar { display: none; }

/* Base styling for each item */
.carousel-item {
    flex: 0 0 auto; /* Prevents items from shrinking */
    border-radius: 28px;
    overflow: hidden;
    position: relative;
    height: 100%; /* Fill container height */
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* --- Multi-browse Specific Styles --- */
.multi-browse-carousel {
    scroll-snap-type: x mandatory;
    height: 280px;
}
.multi-browse-carousel .carousel-item {
    scroll-snap-align: start;
}
.multi-browse-carousel .item-large { width: 424px; }
.multi-browse-carousel .item-medium { width: 256px; }
.multi-browse-carousel .item-small { 
    width: 56px; /* Pill shape */
}
.multi-browse-carousel .item-small .carousel-item-content {
    display: none; /* Hide content on small items */
}

/* --- Uncontained Specific Styles --- */
.uncontained-carousel-wrapper {
    position: relative;
}
.uncontained-carousel-wrapper::before,
.uncontained-carousel-wrapper::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0; width: 50px;
    z-index: 2; pointer-events: none;
}
.uncontained-carousel-wrapper::before {
    left: 0;
    background: linear-gradient(to right, var(--md-sys-color-surface-container-lowest), transparent);
}
.uncontained-carousel-wrapper::after {
    right: 0;
    background: linear-gradient(to left, var(--md-sys-color-surface-container-lowest), transparent);
}

/* --- Hero Specific Styles --- */
.hero-carousel {
    scroll-snap-type: x mandatory;
    height: 300px;
}
.hero-carousel .carousel-item {
    opacity: 0.5;
    height: 256px; /* Non-active items are smaller */
}
.hero-carousel .carousel-item.active {
    opacity: 1;
    height: 100%; /* Active item fills height */
}
.hero-carousel .item-large { width: 424px; }
.hero-carousel .item-small { width: 192px; }
3. JavaScript LogicJavaScript is essential for enabling drag-to-scroll functionality and for dynamically applying the correct size classes (.item-large, .item-medium, .item-small) based on the item's position within the viewport.// --- Drag-to-scroll functionality ---
function initializeDragScroll(carousel) {
    let isDown = false, startX, scrollLeft;
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('dragging');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    // Add mouseleave, mouseup, and mousemove listeners...
}

// --- Dynamic sizing logic for Multi-browse ---
function updateMultiBrowseState(carousel) {
    const items = Array.from(carousel.querySelectorAll('.carousel-item'));
    if (items.length === 0) return;

    const largeWidth = 424, mediumWidth = 256, smallWidth = 56, gap = 8;
    const scrollLeft = carousel.scrollLeft;
    const containerWidth = carousel.clientWidth;

    // Determine the first item that is considered "visible"
    let firstVisibleIndex = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].offsetLeft + items[i].offsetWidth / 2 > scrollLeft) {
            firstVisibleIndex = i;
            break;
        }
    }

    // Reset all classes
    items.forEach(item => item.classList.remove('item-large', 'item-medium', 'item-small'));
    
    let occupiedWidth = 0;
    let lastPlacedIndex = -1;

    // 1. Place the first visible item as large
    if(items[firstVisibleIndex]){
        items[firstVisibleIndex].classList.add('item-large');
        occupiedWidth += largeWidth + gap;
        lastPlacedIndex = firstVisibleIndex;
    }

    // 2. Place medium items until we can't fit another one
    for (let i = firstVisibleIndex + 1; i < items.length; i++) {
        // Check if a medium item PLUS a small item can fit
        if (occupiedWidth + mediumWidth + gap + smallWidth + gap <= containerWidth) {
            items[i].classList.add('item-medium');
            occupiedWidth += mediumWidth + gap;
            lastPlacedIndex = i;
        } else {
            break; // Stop placing medium items
        }
    }

    // 3. Place one small item at the end of the visible set
    const nextItemIndex = lastPlacedIndex + 1;
    if (nextItemIndex < items.length) {
         items[nextItemIndex].classList.add('item-small');
    }
    
    // 4. Set all other off-screen items to small
    for (let i = 0; i < items.length; i++) {
        if (!items[i].classList.contains('item-large') && !items[i].classList.contains('item-medium') && !items[i].classList.contains('item-small')) {
             items[i].classList.add('item-small');
        }
    }
}


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Select all carousels and initialize them
    const multiBrowseCarousel = document.getElementById('my-carousel');
    // Populate with data, initialize drag scroll, and set up scroll/resize listeners
    // to call updateMultiBrowseState().
});


## **Chart Component**

Charts are used to visualize data and make it easier for users to understand complex information. They must be clear, accessible, and styled consistently with the rest of the Material Design system.

### **1. Default Library and Setup**

* **Primary Library:** Unless specified otherwise, all charts **MUST** be generated using **Chart.js**.  
* **CDN Inclusion:** The Chart.js library **MUST** be included in the \<head\> of the HTML document via its CDN.  
  `<script src="[https://cdn.jsdelivr.net/npm/chart.js\](https://cdn.jsdelivr.net/npm/chart.js)"></script>`
* **As Needed:**  If no charts are present in the design, then the chart component and external libraries are not required in the final output.

### **2. HTML Structure**

* Each chart requires a `<canvas>` element with a unique `id`.
* The `<canvas>` element **MUST** be wrapped in a container `div` to manage responsiveness and sizing. This container **MUST** have `position: relative;` and a defined height.

**Example HTML:**
```html
<div class="chart-container" style="position: relative; height:250px; width:100%;">
  <canvas id="spendOverTimeChart"></canvas>
</div>
```

### **3. JavaScript Implementation**

#### **CRITICAL IMPLEMENTATION DIRECTIVE: Initialization & Theming**

To prevent initialization errors and ensure charts correctly adapt to theme changes (light/dark mode), you **MUST** follow this specific JavaScript structure. This is the most common point of failure.

1. **Declare Chart Instances:** At the top of your script (inside the DOMContentLoaded listener), declare variables for each chart instance (e.g., let myLineChart;). Do **not** initialize them here.  
2. **Create an updateCharts() Function:** Create a single function responsible for destroying and recreating all charts on the page. This is the safest way to apply new theme colors.  
   * Inside this function, first check if an instance exists (e.g., if (myLineChart)) and call .destroy() on it.  
   * Then, get the canvas context and create the new Chart(...) instance, assigning it to your variable.  
3. **Call updateCharts():**  
   * Call updateCharts() **once** at the end of the script to draw the initial charts.  
   * Call updateCharts() from **within the theme toggle's event listener** to redraw the charts with the new theme colors.

This structure guarantees that chart instances are always properly managed and prevents race conditions where a function might try to access a chart variable before it has been assigned.

#### **Implementation Template**
```js
document.addEventListener('DOMContentLoaded', () => {
    // 1. DECLARE chart instance variables in a higher scope.
    let performanceChartInstance;
    let channelChartInstance;

    // 2. DEFINE a single function to update all charts.
    function updateAllCharts() {
        const isDark = document.documentElement.classList.contains('dark');
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const textColor = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-primary').trim();
        const secondaryContainerColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-secondary-container').trim();
        const tertiaryContainerColor = getComputedStyle(document.documentElement).getPropertyValue('--md-sys-color-tertiary-container').trim();
        
        // --- Performance Chart (Line) ---
        const perfCtx = document.getElementById('performanceChart')?.getContext('2d');
        if (perfCtx) {
            if (performanceChartInstance) performanceChartInstance.destroy(); // Destroy old instance
            performanceChartInstance = new Chart(perfCtx, {
                type: 'line',
                data: { /* ... data ... */ },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    // ... other options using theme colors ...
                }
            });
        }
        
        // --- Channel Chart (Doughnut) ---
        const channelCtx = document.getElementById('channelChart')?.getContext('2d');
        if (channelCtx) {
            if (channelChartInstance) channelChartInstance.destroy(); // Destroy old instance
            channelChartInstance = new Chart(channelCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Social Media', 'YouTube', 'Website'],
                    datasets: [{
                        data: [17300, 8200, 17280],
                        backgroundColor: [primaryColor, secondaryContainerColor, tertiaryContainerColor],
                        borderWidth: 0 // CRITICAL: Prevents white borders on segments
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { color: textColor } }
                    }
                }
            });
        }
    }

    // 3. SETUP Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    if(themeToggle) {
        themeToggle.addEventListener('change', () => {
            document.documentElement.classList.toggle('dark', themeToggle.checked);
            updateAllCharts(); // Re-render charts with new theme
        });
    }

    // 4. INITIALIZE charts on page load
    updateAllCharts(); 
});
```
*Note for AI: To enable RGBA background fills, you must define the RGB components of your key colors as CSS variables, like `--md-sys-color-primary-rgb: 11, 87, 208;`.*

### **4. Accessibility & Visual Defect Checklist**

* **ARIA Attributes:** The `<canvas>` element **MUST** include `role="img"` and a descriptive `aria-label`.
    ```html
      <canvas id="myChart" role="img" aria-label="A line chart showing ad spend over the last 6 months."></canvas>
    ```
* **Fallback Content:** Provide a simple text description or a link to a data table within the `<canvas>` tags for users of non-visual browsers.
    ```html
      <canvas id="myChart">
        Chart showing ad spend. Data is available in the table below.
      </canvas>
    ```
* **Visual Defect Checklist**: Before finalizing, verify:  
  * **Is the chart responsive?** It must scale correctly within its container. This requires `responsive: true` and `maintainAspectRatio: false` in the options.  
  * **Does the doughnut/pie chart have ugly white borders between segments?** This is a defect. You **MUST** set `borderWidth: 0` in the dataset configuration for these chart types.  
  * **Do the chart colors update when the theme is toggled?** If not, the `updateAllCharts()` function is not being called correctly from the theme toggle's event listener.  
  * **Are all text elements (labels, ticks, tooltips) styled with Material Design System colors?** The chart should look like a native part of the UI in both light and dark themes.

---




## Checkbox Component

Checkboxes allow users to select one or more items from a list, turn an item on or off, or indicate a mixed state for a group of sub-options. They are distinct from radio buttons (which allow only a single selection) and switches (which typically control a single binary state).

### General Guidelines

*   **Multiple Selections:** Use checkboxes when users can select multiple options from a list. For single selections, use radio buttons.
*   **Related Options:** Checkboxes are ideal for visually grouping related options.
*   **Clarity and Scannability:**
    *   Ensure labels are clear, concise, and easily scannable.
    *   Selected items should be visually more prominent than unselected items.
*   **Efficiency:** Checkboxes effectively group similar items and generally take up less space than switches for list-based selections.
*   **Contextual Usage:**
    *   **Checkboxes:** For selecting multiple related options in a list.
    *   **Radio Buttons:** For selecting a single option from a list.
    *   **Switches:** For standalone binary options (e.g., settings), often representing an on/off state that takes immediate effect.

### Anatomy

1.  **Container:** The square boundary of the checkbox.
2.  **Icon:** The visual indicator within the container (e.g., check mark for selected, minus sign for indeterminate, or empty for unselected).
3.  **State Layer (not always visible):** An overlay that provides visual feedback for interaction states like hover, focus, and press. It typically extends beyond the container to meet touch target guidelines.
4.  **Label (external):** Text describing the checkbox's purpose or the option it represents.

### Behavior

*   **Selection:** Users can select or deselect multiple checkboxes in a list independently, unless they are part of a parent-child group.
*   **Parent-Child Relationship (for hierarchical lists):**
    *   When a parent checkbox is checked, all its child checkboxes are automatically checked.
    *   When a parent checkbox is unchecked, all its child checkboxes are automatically unchecked.
    *   If some, but not all, child checkboxes are checked, the parent checkbox becomes **indeterminate**.
    *   Selecting an indeterminate parent checkbox typically checks all child items (and the parent becomes fully checked). Deselecting an indeterminate parent (if it was previously fully or partially checked) unchecks all child items.
*   **State Communication:** The checkbox should clearly and instantly communicate its current state (unselected, selected, indeterminate, disabled, error) through visual changes.
*   **Immediate Action:** If a checkbox is used to directly turn an item on or off (e.g., a setting), the action should be executed immediately upon changing the checkbox state.

### Responsive Layout

*   In expanded window sizes (e.g., tablets, desktops), placing checkboxes within a contained region, such as a side sheet, can help group related controls and available actions more effectively.

### Theming and Color

*   **Adjacent Text Label Color:** Use the color role `on surface` (`md.sys.color.on-surface`) for text labels adjacent to checkboxes. This color should remain consistent regardless of the checkbox's interaction state (hover, focus, etc.) or whether the checkbox itself is selected or unselected, to maintain readability.

---

*   **Overall Target Size:** The minimum interactive touch/click target area for the checkbox component (including any padding or state layer) should be `48dp` to ensure usability and accessibility.

### Checkbox Component - Tokens

---

**Token Set**: `md.comp.checkbox`

#### Color Tokens

##### **Enabled**

* **Unselected**
    * `container.outline.color`: `md.comp.checkbox.unselected.outline.color` = `md.sys.color.on-surface-variant`
    * `container.outline.width`: `md.comp.checkbox.unselected.outline.width` = `2dp`

* **Selected**
    * `container.color`: `md.comp.checkbox.selected.container.color` = `md.sys.color.primary`
    * `icon.color`: `md.comp.checkbox.selected.icon.color` = `md.sys.color.on-primary`

* **Error (Unselected)**
    * `container.outline.color`: `md.comp.checkbox.unselected.error.outline.color` = `md.sys.color.error`

* **Error (Selected)**
    * `container.color`: `md.comp.checkbox.selected.error.container.color` = `md.sys.color.error`
    * `icon.color`: `md.comp.checkbox.selected.error.icon.color` = `md.sys.color.on-error`

##### **Disabled**

* **Unselected**
    * `container.opacity`: `md.comp.checkbox.unselected.disabled.container.opacity` = `0.38`
    * `container.outline.color`: `md.comp.checkbox.unselected.disabled.outline.color` = `md.sys.color.on-surface`

* **Selected**
    * `container.color`: `md.comp.checkbox.selected.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.checkbox.selected.disabled.container.opacity` = `0.38`
    * `icon.color`: `md.comp.checkbox.selected.disabled.icon.color` = `md.sys.color.surface`

##### **Focused**

* **Unselected**
    * `state-layer.color`: `md.comp.checkbox.unselected.focus.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.checkbox.unselected.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `container.outline.color`: `md.comp.checkbox.unselected.focus.outline.color` = `md.sys.color.on-surface`

* **Selected**
    * `state-layer.color`: `md.comp.checkbox.selected.focus.state-layer.color` = `md.sys.color.primary`
    * `state-layer.opacity`: `md.comp.checkbox.selected.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `icon.color`: `md.comp.checkbox.selected.focus.icon.color` = `md.sys.color.on-primary`

* **Error**
    * `state-layer.color`: `md.comp.checkbox.error.focus.state-layer.color` = `md.sys.color.error`
    * `state-layer.opacity`: `md.comp.checkbox.error.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

##### **Hovered**

* **Unselected**
    * `state-layer.color`: `md.comp.checkbox.unselected.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.checkbox.unselected.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `container.outline.color`: `md.comp.checkbox.unselected.hover.outline.color` = `md.sys.color.on-surface`

* **Selected**
    * `state-layer.color`: `md.comp.checkbox.selected.hover.state-layer.color` = `md.sys.color.primary`
    * `state-layer.opacity`: `md.comp.checkbox.selected.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `icon.color`: `md.comp.checkbox.selected.hover.icon.color` = `md.sys.color.on-primary`

* **Error**
    * `state-layer.color`: `md.comp.checkbox.error.hover.state-layer.color` = `md.sys.color.error`
    * `state-layer.opacity`: `md.comp.checkbox.error.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

##### **Pressed**

* **Unselected**
    * `state-layer.color`: `md.comp.checkbox.unselected.pressed.state-layer.color` = `md.sys.color.primary`
    * `state-layer.opacity`: `md.comp.checkbox.unselected.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `container.outline.color`: `md.comp.checkbox.unselected.pressed.outline.color` = `md.sys.color.on-surface`

* **Selected**
    * `state-layer.color`: `md.comp.checkbox.selected.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.checkbox.selected.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `icon.color`: `md.comp.checkbox.selected.pressed.icon.color` = `md.sys.color.on-primary`

* **Error**
    * `state-layer.color`: `md.comp.checkbox.error.pressed.state-layer.color` = `md.sys.color.error`
    * `state-layer.opacity`: `md.comp.checkbox.error.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Size, Shape, & Layout Tokens

* `container.shape`: `md.comp.checkbox.container.shape` = `2dp`
* `container.size`: `md.comp.checkbox.container.size` = `18dp`
* `icon.size`: `md.comp.checkbox.icon.size` = `18dp`
* `state-layer.shape`: `md.comp.checkbox.state-layer.shape` = `md.sys.shape.corner.full`
* `state-layer.size`: `md.comp.checkbox.state-layer.size` = `40dp`

---

### Checkbox Component - Code Samples & Implementation

**Implementation Guide:**

  * **Structure:** The component consists of a `<label class="checkbox-container">` which wraps an `<input type="checkbox">`, a visual `<div class="checkbox">`, and a `<span class="label">`.  
  * **State Management:** Visual states are controlled by adding classes directly to the wrapping `<label class="checkbox-container">`:
      * `.checked`: For the selected state.
      * `.indeterminate`: For the indeterminate state.
      * `.error`: To indicate an error. This can be combined with `.checked`.
      * `.disabled`: For the disabled state. The `disabled` attribute should also be added to the `<input>`.
  * **Accessibility:** For non-disabled checkboxes, add `tabindex="0"` to the `<label>` to ensure it is keyboard focusable. The provided JavaScript handles spacebar activation.
  * **JavaScript Requirement:** The provided JavaScript is **required** for full functionality. It handles:
      * Toggling the `.checked` class based on the input's state.
      * Correctly handling clicks on indeterminate checkboxes (they should become checked).
      * Keyboard support (`Space` key).
      * Logic for parent-child selection groups.

-----

### CSS

```css
/* --- Checkbox Component CSS --- */
.checkbox-container {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    position: relative;
    color: var(--md-sys-color-on-surface);
    -webkit-tap-highlight-color: transparent;
}

.checkbox-container input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

.checkbox {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    box-sizing: border-box;
    transition: background-color 150ms ease-in-out, border-color 150ms ease-in-out;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.checkbox .icon {
    font-family: 'Material Symbols Outlined';
    font-weight: 700;
    font-size: 16px;
    color: transparent;
    transition: color 150ms ease-in-out, transform 150ms ease-in-out;
    transform: scale(0.5);
    opacity: 0;
    user-select: none;
}

.checkbox::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--md-sys-color-on-surface);
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
    z-index: -1;
}

/* Unselected State */
.checkbox-container:not(.checked):not(.indeterminate) .checkbox {
    border: 2px solid var(--md-sys-color-on-surface-variant);
    background-color: transparent;
}

/* Selected State */
.checkbox-container.checked .checkbox {
    background-color: var(--md-sys-color-primary);
    border-color: var(--md-sys-color-primary);
}
.checkbox-container.checked .checkbox .icon::before {
    content: 'check';
}
.checkbox-container.checked .checkbox .icon {
    color: var(--md-sys-color-on-primary);
    transform: scale(1);
    opacity: 1;
}

/* Indeterminate State */
.checkbox-container.indeterminate .checkbox {
    background-color: var(--md-sys-color-primary);
    border-color: var(--md-sys-color-primary);
}
.checkbox-container.indeterminate .checkbox .icon::before {
    content: 'remove';
}
.checkbox-container.indeterminate .checkbox .icon {
    color: var(--md-sys-color-on-primary);
    transform: scale(1);
    opacity: 1;
}

/* Interaction States: Hover, Focus, Press */
.checkbox-container:hover .checkbox::after {
    opacity: var(--md-sys-opacity-state-hover);
}
.checkbox-container:focus-within {
    outline: none; /* Custom focus handled by state layer */
}
.checkbox-container:focus-within .checkbox::after {
    opacity: var(--md-sys-opacity-state-focus);
}
.checkbox-container:active .checkbox::after {
    opacity: var(--md-sys-opacity-state-press);
    transform: scale(1);
}

/* Change state layer color for selected/indeterminate states */
.checkbox-container.checked:hover .checkbox::after,
.checkbox-container.indeterminate:hover .checkbox::after,
.checkbox-container.checked:focus-within .checkbox::after,
.checkbox-container.indeterminate:focus-within .checkbox::after {
    background-color: var(--md-sys-color-primary);
}

/* Error State */
.checkbox-container.error .checkbox {
    border-color: var(--md-sys-color-error);
}
.checkbox-container.error.checked .checkbox,
.checkbox-container.error.indeterminate .checkbox {
    background-color: var(--md-sys-color-error);
    border-color: var(--md-sys-color-error);
}
.checkbox-container.error.checked .checkbox .icon,
.checkbox-container.error.indeterminate .checkbox .icon {
    color: var(--md-sys-color-on-error);
}
.checkbox-container.error:hover .checkbox::after,
.checkbox-container.error:focus-within .checkbox::after {
    background-color: var(--md-sys-color-error);
}

/* Disabled State */
.checkbox-container.disabled {
    cursor: not-allowed;
    opacity: 0.38;
}
.checkbox-container.disabled .checkbox {
    opacity: 1; 
}
.checkbox-container.disabled:not(.checked):not(.indeterminate) .checkbox {
    border-color: var(--md-sys-color-on-surface);
}
.checkbox-container.disabled.checked .checkbox,
.checkbox-container.disabled.indeterminate .checkbox {
    background-color: var(--md-sys-color-on-surface);
    border-color: var(--md-sys-color-on-surface);
}
.checkbox-container.disabled.checked .checkbox .icon,
.checkbox-container.disabled.indeterminate .checkbox .icon {
    color: var(--md-sys-color-surface);
}

/* Additional styles for parent-child layout */
.checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.child-group {
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
}
```

-----

### HTML

```html
<label class="checkbox-container" tabindex="0">
    <input type="checkbox">
    <div class="checkbox"><span class="icon"></span></div>
    <span class="label">Unselected</span>
</label>

<label class="checkbox-container checked" tabindex="0">
    <input type="checkbox" checked>
    <div class="checkbox"><span class="icon"></span></div>
    <span class="label">Selected</span>
</label>

<label class="checkbox-container indeterminate" tabindex="0">
    <input type="checkbox">
    <div class="checkbox"><span class="icon"></span></div>
    <span class="label">Indeterminate</span>
</label>

<label class="checkbox-container error" tabindex="0">
    <input type="checkbox">
    <div class="checkbox"><span class="icon"></span></div>
    <span class="label">Error Unselected</span>
</label>

<label class="checkbox-container checked error" tabindex="0">
    <input type="checkbox" checked>
    <div class="checkbox"><span class="icon"></span></div>
    <span class="label">Error Selected</span>
</label>

<label class="checkbox-container disabled">
    <input type="checkbox" disabled>
    <div class="checkbox"><span class="icon"></span></div>
    <span class="label">Disabled Unselected</span>
</label>

<label class="checkbox-container checked disabled">
    <input type="checkbox" checked disabled>
    <div class="checkbox"><span class="icon"></span></div>
    <span class="label">Disabled Selected</span>
</label>

<div class="checkbox-group">
     <label class="checkbox-container parent" tabindex="0">
        <input type="checkbox">
        <div class="checkbox"><span class="icon"></span></div>
        <span class="label">Select All Permissions</span>
    </label>
    <div class="child-group">
        <label class="checkbox-container child" tabindex="0">
            <input type="checkbox">
            <div class="checkbox"><span class="icon"></span></div>
            <span class="label">Read</span>
        </label>
        <label class="checkbox-container child checked" tabindex="0">
            <input type="checkbox" checked>
            <div class="checkbox"><span class="icon"></span></div>
            <span class="label">Write</span>
        </label>
         <label class="checkbox-container child" tabindex="0">
            <input type="checkbox">
            <div class="checkbox"><span class="icon"></span></div>
            <span class="label">Execute</span>
        </label>
    </div>
</div>
```

-----

### JavaScript

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // --- Standard Checkbox Toggling ---
    const allCheckboxes = document.querySelectorAll('.checkbox-container:not(.disabled) input[type="checkbox"]');
    
    allCheckboxes.forEach(input => {
        // Set initial indeterminate state from class, which HTML can't do directly
        if (input.parentElement.classList.contains('indeterminate')) {
            input.indeterminate = true;
        }
        
        // Handle state changes on click
        input.addEventListener('change', (e) => {
            const container = e.target.parentElement;
            container.classList.toggle('checked', e.target.checked);
            
            // Manually toggling an indeterminate checkbox should make it checked
            if (container.classList.contains('indeterminate')) {
                container.classList.remove('indeterminate');
                container.classList.add('checked');
                e.target.checked = true;
                e.target.indeterminate = false;
            }
        });

        // Add keyboard support for spacebar activation
        input.parentElement.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                input.click();
            }
        });
    });

    // --- Parent-Child Group Logic ---
    const parentContainer = document.querySelector('.checkbox-container.parent');
    if (parentContainer) {
        const parentInput = parentContainer.querySelector('input');
        const childInputs = document.querySelectorAll('.child-group .child input');

        const updateParentState = () => {
            const checkedCount = Array.from(childInputs).filter(c => c.checked).length;
            const totalChildren = childInputs.length;
            
            if (checkedCount === 0) {
                parentInput.checked = false;
                parentInput.indeterminate = false;
                parentContainer.classList.remove('checked', 'indeterminate');
            } else if (checkedCount === totalChildren) {
                parentInput.checked = true;
                parentInput.indeterminate = false;
                parentContainer.classList.add('checked');
                parentContainer.classList.remove('indeterminate');
            } else {
                parentInput.checked = false;
                parentInput.indeterminate = true;
                parentContainer.classList.add('indeterminate');
                parentContainer.classList.remove('checked');
            }
        };

        parentInput.addEventListener('change', () => {
            childInputs.forEach(child => {
                child.checked = parentInput.checked;
                child.parentElement.classList.toggle('checked', parentInput.checked);
            });
            updateParentState();
        });

        childInputs.forEach(child => {
            child.addEventListener('change', updateParentState);
        });

        // Set initial parent state based on children on page load
        updateParentState();
    }
});
```

-----

## Chip Component

* Chips are compact elements that represent an input, attribute, or action. They allow users to enter information, make selections, filter content, or trigger actions within their current task context.
* Unlike buttons which often have consistent placement and calls to action, chips should appear dynamically as a group of interactive elements relevant to the immediate content. Chip sets can often be scrolled horizontally.
* **Elevation**: Chips default to `md.sys.elevation.level0` (0 DIPS), but can be elevated (e.g., `md.sys.elevation.level1`) if they require more visual separation from the background.
* **Chip Types**:
    *   **Assist Chip**: Represents smart or automated actions related to the primary content.
    *   **Filter Chip**: Represents filters for a collection of content; toggles between selected and unselected states.
    *   **Input Chip**: Represents discrete pieces of information entered by a user (e.g., a contact in an email field). Often removable.
    *   **Suggestion Chip**: Presents dynamically generated suggestions to help narrow a user's intent (e.g., search query refinements).



### Chip Component - Tokens

---

### Assist Chip

**Token Set**: `md.comp.assist-chip`

#### Color Tokens

##### **Flat**

* **Enabled**
    * `container.color`: `md.comp.assist-chip.flat.container.color` = `md.sys.color.surface`
    * `label-text.color`: `md.comp.assist-chip.flat.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.flat.with-leading-icon.icon.color` = `md.sys.color.primary`
    * `outline.color`: `md.comp.assist-chip.flat.outline.color` = `md.sys.color.outline`

* **Disabled**
    * `container.color`: `md.comp.assist-chip.flat.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.assist-chip.flat.disabled.container.opacity` = `0.12`
    * `label-text.color`: `md.comp.assist-chip.flat.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.assist-chip.flat.disabled.label-text.opacity` = `0.38`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.flat.disabled.with-leading-icon.icon.color` = `md.sys.color.on-surface`
    * `icon.opacity`: `md.comp.assist-chip.flat.disabled.with-leading-icon.icon.opacity` = `0.38`
    * `outline.color`: `md.comp.assist-chip.flat.disabled.outline.color` = `md.sys.color.on-surface`
    * `outline.opacity`: `md.comp.assist-chip.flat.disabled.outline.opacity` = `0.12`

* **Focused**
    * `state-layer.color`: `md.comp.assist-chip.flat.focus.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.assist-chip.flat.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `label-text.color`: `md.comp.assist-chip.flat.focus.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.flat.with-leading-icon.focus.icon.color` = `md.sys.color.primary`

* **Hovered**
    * `state-layer.color`: `md.comp.assist-chip.flat.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.assist-chip.flat.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `label-text.color`: `md.comp.assist-chip.flat.hover.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.flat.with-leading-icon.hover.icon.color` = `md.sys.color.primary`

* **Pressed**
    * `state-layer.color`: `md.comp.assist-chip.flat.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.assist-chip.flat.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `label-text.color`: `md.comp.assist-chip.flat.pressed.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.flat.with-leading-icon.pressed.icon.color` = `md.sys.color.primary`

* **Dragged**
    * `state-layer.color`: `md.comp.assist-chip.dragged.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.assist-chip.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
    * `label-text.color`: `md.comp.assist-chip.dragged.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.with-icon.dragged.icon.color` = `md.sys.color.primary`

##### **Elevated**

* **Enabled**
    * `container.color`: `md.comp.assist-chip.elevated.container.color` = `md.sys.color.surface-container-low`
    * `label-text.color`: `md.comp.assist-chip.elevated.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.elevated.with-leading-icon.icon.color` = `md.sys.color.primary`

* **Disabled**
    * `container.color`: `md.comp.assist-chip.elevated.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.assist-chip.elevated.disabled.container.opacity` = `0.12`
    * `label-text.color`: `md.comp.assist-chip.elevated.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.assist-chip.elevated.disabled.label-text.opacity` = `0.38`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.elevated.disabled.with-leading-icon.icon.color` = `md.sys.color.on-surface`
    * `icon.opacity`: `md.comp.assist-chip.elevated.disabled.with-leading-icon.icon.opacity` = `0.38`

* **Focused**
    * `state-layer.color`: `md.comp.assist-chip.elevated.focus.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.assist-chip.elevated.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `label-text.color`: `md.comp.assist-chip.elevated.focus.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.elevated.with-leading-icon.focus.icon.color` = `md.sys.color.primary`

* **Hovered**
    * `state-layer.color`: `md.comp.assist-chip.elevated.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.assist-chip.elevated.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `label-text.color`: `md.comp.assist-chip.elevated.hover.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.elevated.with-leading-icon.hover.icon.color` = `md.sys.color.primary`

* **Pressed**
    * `state-layer.color`: `md.comp.assist-chip.elevated.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.assist-chip.elevated.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `label-text.color`: `md.comp.assist-chip.elevated.pressed.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.elevated.with-leading-icon.pressed.icon.color` = `md.sys.color.primary`

* **Dragged**
    * `state-layer.color`: `md.comp.assist-chip.dragged.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.assist-chip.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
    * `label-text.color`: `md.comp.assist-chip.dragged.label-text.color` = `md.sys.color.on-surface`
    * `with-leading-icon.icon.color`: `md.comp.assist-chip.with-icon.dragged.icon.color` = `md.sys.color.primary`

---

### Filter Chip

**Token Set**: `md.comp.filter-chip`

#### Color Tokens

##### **Flat**

* **Enabled**
    * `container.color`: `md.comp.filter-chip.flat.container.color` = `md.sys.color.surface`
    * `label-text.color`: `md.comp.filter-chip.flat.label-text.color` = `md.sys.color.on-surface-variant`
    * `with-leading-icon.icon.color`: `md.comp.filter-chip.with-leading-icon.icon.color` = `md.sys.color.on-surface-variant`
    * `with-trailing-icon.icon.color`: `md.comp.filter-chip.with-trailing-icon.icon.color` = `md.sys.color.on-surface-variant`
    * `outline.color`: `md.comp.filter-chip.flat.outline.color` = `md.sys.color.outline`

* **Disabled**
    * `container.color`: `md.comp.filter-chip.flat.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.filter-chip.flat.disabled.container.opacity` = `0.12`
    * `label-text.color`: `md.comp.filter-chip.flat.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.filter-chip.flat.disabled.label-text.opacity` = `0.38`
    * `icon.color`: `md.comp.filter-chip.flat.disabled.icon.color` = `md.sys.color.on-surface`
    * `icon.opacity`: `md.comp.filter-chip.flat.disabled.icon.opacity` = `0.38`
    * `outline.color`: `md.comp.filter-chip.flat.disabled.outline.color` = `md.sys.color.on-surface`
    * `outline.opacity`: `md.comp.filter-chip.flat.disabled.outline.opacity` = `0.12`

* **Focused**
    * `state-layer.color`: `md.comp.filter-chip.flat.focus.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.filter-chip.flat.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Hovered**
    * `state-layer.color`: `md.comp.filter-chip.flat.hover.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.filter-chip.flat.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Pressed**
    * `state-layer.color`: `md.comp.filter-chip.flat.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.filter-chip.flat.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

* **Selected**
    * `container.color`: `md.comp.filter-chip.flat.selected.container.color` = `md.sys.color.secondary-container`
    * `label-text.color`: `md.comp.filter-chip.flat.selected.label-text.color` = `md.sys.color.on-secondary-container`
    * `with-leading-icon.icon.color`: `md.comp.filter-chip.flat.with-leading-icon.selected.icon.color` = `md.sys.color.on-secondary-container`
    * `with-trailing-icon.icon.color`: `md.comp.filter-chip.flat.with-trailing-icon.selected.icon.color` = `md.sys.color.on-secondary-container`

* **Dragged**
    * **Unselected**
        * `state-layer.color`: `md.comp.filter-chip.unselected.dragged.state-layer.color` = `md.sys.color.on-surface-variant`
        * `state-layer.opacity`: `md.comp.filter-chip.unselected.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
        * `label-text.color`: `md.comp.filter-chip.unselected.dragged.label-text.color` = `md.sys.color.on-surface-variant`
        * `with-leading-icon.icon.color`: `md.comp.filter-chip.with-leading-icon.unselected.dragged.leading-icon.color` = `md.sys.color.primary`
        * `with-trailing-icon.icon.color`: `md.comp.filter-chip.with-trailing-icon.unselected.dragged.trailing-icon.color` = `md.sys.color.on-surface-variant`

    * **Selected**
        * `state-layer.color`: `md.comp.filter-chip.selected.dragged.state-layer.color` = `md.sys.color.on-secondary-container`
        * `state-layer.opacity`: `md.comp.filter-chip.selected.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
        * `label-text.color`: `md.comp.filter-chip.selected.dragged.label-text.color` = `md.sys.color.on-secondary-container`
        * `with-leading-icon.icon.color`: `md.comp.filter-chip.with-leading-icon.selected.dragged.leading-icon.color` = `md.sys.color.on-secondary-container`
        * `with-trailing-icon.icon.color`: `md.comp.filter-chip.with-trailing-icon.selected.dragged.trailing-icon.color` = `md.sys.color.on-secondary-container`

##### **Elevated**

* **Enabled**
    * `container.color`: `md.comp.filter-chip.elevated.container.color` = `md.sys.color.surface-container-low`
    * `label-text.color`: `md.comp.filter-chip.elevated.label-text.color` = `md.sys.color.on-surface-variant`

* **Disabled**
    * `container.color`: `md.comp.filter-chip.elevated.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.filter-chip.elevated.disabled.container.opacity` = `0.12`
    * `label-text.color`: `md.comp.filter-chip.elevated.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.filter-chip.elevated.disabled.label-text.opacity` = `0.38`
    * `icon.color`: `md.comp.filter-chip.elevated.disabled.icon.color` = `md.sys.color.on-surface`
    * `icon.opacity`: `md.comp.filter-chip.elevated.disabled.icon.opacity` = `0.38`
    * `outline.color`: `md.comp.filter-chip.elevated.disabled.outline.color` = `md.sys.color.on-surface`
    * `outline.opacity`: `md.comp.filter-chip.elevated.disabled.outline.opacity` = `0.12`

* **Focused**
    * `state-layer.color`: `md.comp.filter-chip.elevated.focus.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.filter-chip.elevated.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Hovered**
    * `state-layer.color`: `md.comp.filter-chip.elevated.hover.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.filter-chip.elevated.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Pressed**
    * `state-layer.color`: `md.comp.filter-chip.elevated.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.filter-chip.elevated.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

* **Selected**
    * `container.color`: `md.comp.filter-chip.elevated.selected.container.color` = `md.sys.color.secondary-container`
    * `label-text.color`: `md.comp.filter-chip.elevated.selected.label-text.color` = `md.sys.color.on-secondary-container`
    * `with-leading-icon.icon.color`: `md.comp.filter-chip.elevated.with-leading-icon.selected.icon.color` = `md.sys.color.on-secondary-container`
    * `with-trailing-icon.icon.color`: `md.comp.filter-chip.elevated.with-trailing-icon.selected.icon.color` = `md.sys.color.on-secondary-container`

* **Dragged**
    * `container.elevation`: `md.comp.filter-chip.dragged.container.elevation` = `md.sys.elevation.level4`
    * **Unselected**
        * `state-layer.color`: `md.comp.filter-chip.unselected.dragged.state-layer.color` = `md.sys.color.on-surface-variant`
        * `state-layer.opacity`: `md.comp.filter-chip.unselected.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
        * `label-text.color`: `md.comp.filter-chip.unselected.dragged.label-text.color` = `md.sys.color.on-surface-variant`
        * `with-leading-icon.icon.color`: `md.comp.filter-chip.with-leading-icon.unselected.dragged.leading-icon.color` = `md.sys.color.primary`
        * `with-trailing-icon.icon.color`: `md.comp.filter-chip.with-trailing-icon.unselected.dragged.trailing-icon.color` = `md.sys.color.on-surface-variant`
    * **Selected**
        * `state-layer.color`: `md.comp.filter-chip.selected.dragged.state-layer.color` = `md.sys.color.on-secondary-container`
        * `state-layer.opacity`: `md.comp.filter-chip.selected.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
        * `label-text.color`: `md.comp.filter-chip.selected.dragged.label-text.color` = `md.sys.color.on-secondary-container`
        * `with-leading-icon.icon.color`: `md.comp.filter-chip.with-leading-icon.selected.dragged.leading-icon.color` = `md.sys.color.on-secondary-container`
        * `with-trailing-icon.icon.color`: `md.comp.filter-chip.with-trailing-icon.selected.dragged.trailing-icon.color` = `md.sys.color.on-secondary-container`

---

### Input Chip

**Token Set**: `md.comp.input-chip`

#### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.input-chip.container.color` = `md.sys.color.surface`
    * `label-text.color`: `md.comp.input-chip.label-text.color` = `md.sys.color.on-surface-variant`
    * `with-leading-icon.icon.color`: `md.comp.input-chip.with-leading-icon.icon.color` = `md.sys.color.on-surface-variant`
    * `with-avatar.avatar.color`: `md.comp.input-chip.with-avatar.avatar.color` = `md.sys.color.primary`
    * `with-avatar.avatar.label-text.color`: `md.comp.input-chip.with-avatar.avatar.label-text.color` = `md.sys.color.on-primary`
    * `trailing-icon.icon.color`: `md.comp.input-chip.trailing-icon.icon.color` = `md.sys.color.on-surface-variant`
    * `outline.color`: `md.comp.input-chip.outline.color` = `md.sys.color.outline`

* **Disabled**
    * `container.color`: `md.comp.input-chip.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.input-chip.disabled.container.opacity` = `0.12`
    * `label-text.color`: `md.comp.input-chip.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.input-chip.disabled.label-text.opacity` = `0.38`
    * `icon.color`: `md.comp.input-chip.disabled.icon.color` = `md.sys.color.on-surface`
    * `icon.opacity`: `md.comp.input-chip.disabled.icon.opacity` = `0.38`
    * `outline.color`: `md.comp.input-chip.disabled.outline.color` = `md.sys.color.on-surface`
    * `outline.opacity`: `md.comp.input-chip.disabled.outline.opacity` = `0.12`

* **Focused**
    * `state-layer.color`: `md.comp.input-chip.focus.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.input-chip.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Hovered**
    * `state-layer.color`: `md.comp.input-chip.hover.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.input-chip.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Pressed**
    * `state-layer.color`: `md.comp.input-chip.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.input-chip.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

* **Selected**
    * `container.color`: `md.comp.input-chip.selected.container.color` = `md.sys.color.secondary-container`
    * `label-text.color`: `md.comp.input-chip.selected.label-text.color` = `md.sys.color.on-secondary-container`
    * `with-leading-icon.icon.color`: `md.comp.input-chip.with-leading-icon.selected.icon.color` = `md.sys.color.on-secondary-container`
    * `with-avatar.avatar.color`: `md.comp.input-chip.with-avatar.selected.avatar.color` = `md.sys.color.secondary`
    * `with-avatar.avatar.label-text.color`: `md.comp.input-chip.with-avatar.selected.avatar.label-text.color` = `md.sys.color.on-secondary`
    * `trailing-icon.icon.color`: `md.comp.input-chip.selected.trailing-icon.icon.color` = `md.sys.color.on-secondary-container`

* **Dragged**
    * `container.elevation`: `md.comp.input-chip.dragged.container.elevation` = `md.sys.elevation.level4`
    * **Unselected**
        * `state-layer.color`: `md.comp.input-chip.unselected.dragged.state-layer.color` = `md.sys.color.on-surface-variant`
        * `state-layer.opacity`: `md.comp.input-chip.unselected.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
        * `label-text.color`: `md.comp.input-chip.unselected.dragged.label-text.color` = `md.sys.color.on-surface-variant`
        * `with-leading-icon.icon.color`: `md.comp.input-chip.with-leading-icon.unselected.dragged.leading-icon.color` = `md.sys.color.primary`
        * `with-trailing-icon.icon.color`: `md.comp.input-chip.with-trailing-icon.unselected.dragged.trailing-icon.color` = `md.sys.color.on-surface-variant`
    * **Selected**
        * `state-layer.color`: `md.comp.input-chip.selected.dragged.state-layer.color` = `md.sys.color.on-secondary-container`
        * `state-layer.opacity`: `md.comp.input-chip.selected.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
        * `label-text.color`: `md.comp.input-chip.selected.dragged.label-text.color` = `md.sys.color.on-secondary-container`
        * `with-leading-icon.icon.color`: `md.comp.input-chip.with-leading-icon.selected.dragged.leading-icon.color` = `md.sys.color.primary`
        * `with-trailing-icon.icon.color`: `md.comp.input-chip.with-trailing-icon.selected.dragged.trailing-icon.color` = `md.sys.color.on-secondary-container`

---

### Suggestion Chip

**Token Set**: `md.comp.suggestion-chip`

#### Color Tokens

##### **Flat**

* **Enabled**
    * `container.color`: `md.comp.suggestion-chip.flat.container.color` = `md.sys.color.surface`
    * `label-text.color`: `md.comp.suggestion-chip.flat.label-text.color` = `md.sys.color.on-surface`
    * `outline.color`: `md.comp.suggestion-chip.flat.outline.color` = `md.sys.color.outline`

* **Disabled**
    * `container.color`: `md.comp.suggestion-chip.flat.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.suggestion-chip.flat.disabled.container.opacity` = `0.12`
    * `label-text.color`: `md.comp.suggestion-chip.flat.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.suggestion-chip.flat.disabled.label-text.opacity` = `0.38`
    * `outline.color`: `md.comp.suggestion-chip.flat.disabled.outline.color` = `md.sys.color.on-surface`
    * `outline.opacity`: `md.comp.suggestion-chip.flat.disabled.outline.opacity` = `0.12`

* **Focused**
    * `state-layer.color`: `md.comp.suggestion-chip.flat.focus.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.suggestion-chip.flat.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Hovered**
    * `state-layer.color`: `md.comp.suggestion-chip.flat.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.suggestion-chip.flat.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Pressed**
    * `state-layer.color`: `md.comp.suggestion-chip.flat.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.suggestion-chip.flat.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

* **Dragged**
    * `state-layer.color`: `md.comp.suggestion-chip.dragged.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.suggestion-chip.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
    * `label-text.color`: `md.comp.suggestion-chip.dragged.label-text.color` = `md.sys.color.on-surface-variant`
    * `with-leading-icon.icon.color`: `md.comp.suggestion-chip.with-leading-icon.dragged.leading-icon.color` = `md.sys.color.primary`

##### **Elevated**

* **Enabled**
    * `container.color`: `md.comp.suggestion-chip.elevated.container.color` = `md.sys.color.surface-container-low`
    * `label-text.color`: `md.comp.suggestion-chip.elevated.label-text.color` = `md.sys.color.on-surface`

* **Disabled**
    * `container.color`: `md.comp.suggestion-chip.elevated.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.suggestion-chip.elevated.disabled.container.opacity` = `0.12`
    * `label-text.color`: `md.comp.suggestion-chip.elevated.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.suggestion-chip.elevated.disabled.label-text.opacity` = `0.38`
    * `outline.color`: `md.comp.suggestion-chip.elevated.disabled.outline.color` = `md.sys.color.on-surface`
    * `outline.opacity`: `md.comp.suggestion-chip.elevated.disabled.outline.opacity` = `0.12`

* **Focused**
    * `state-layer.color`: `md.comp.suggestion-chip.elevated.focus.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.suggestion-chip.elevated.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Hovered**
    * `state-layer.color`: `md.comp.suggestion-chip.elevated.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.suggestion-chip.elevated.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Pressed**
    * `state-layer.color`: `md.comp.suggestion-chip.elevated.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.suggestion-chip.elevated.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    
* **Dragged**
    * `container.elevation`: `md.comp.suggestion-chip.dragged.container.elevation` = `md.sys.elevation.level4`
    * `state-layer.color`: `md.comp.suggestion-chip.dragged.state-layer.color` = `md.sys.color.on-surface-variant`
    * `state-layer.opacity`: `md.comp.suggestion-chip.dragged.state-layer.opacity` = `md.sys.state.dragged.state-layer-opacity`
    * `label-text.color`: `md.comp.suggestion-chip.dragged.label-text.color` = `md.sys.color.on-surface-variant`
    * `with-leading-icon.icon.color`: `md.comp.suggestion-chip.with-leading-icon.dragged.leading-icon.color` = `md.sys.color.primary`

---

#### Elevation Tokens

##### **Flat**

* **Enabled**: `container.elevation`: `md.comp.assist-chip.flat.container.elevation` = `md.sys.elevation.level0`
* **Disabled**: `container.elevation`: `md.comp.assist-chip.flat.disabled.container.elevation` = `md.sys.elevation.level0`
* **Dragged**: `container.elevation`: `md.comp.assist-chip.flat.dragged.container.elevation` = `md.sys.elevation.level4`

##### **Elevated**

* **Enabled**: `container.elevation`: `md.comp.assist-chip.elevated.container.elevation` = `md.sys.elevation.level1`
* **Disabled**: `container.elevation`: `md.comp.assist-chip.elevated.disabled.container.elevation` = `md.sys.elevation.level0`
* **Hovered**: `container.elevation`: `md.comp.assist-chip.elevated.hover.container.elevation` = `md.sys.elevation.level2`
* **Pressed**: `container.elevation`: `md.comp.assist-chip.elevated.pressed.container.elevation` = `md.sys.elevation.level1`
* **Dragged**: `container.elevation`: `md.comp.assist-chip.elevated.dragged.container.elevation` = `md.sys.elevation.level4`

---

#### Size, Shape, & Layout Tokens

* `container.shape`: `md.comp.assist-chip.container.shape` = `md.sys.shape.corner.small`
* `container.height`: `md.comp.assist-chip.container.height` = `32dp`
* `outline.width`: `md.comp.assist-chip.outline.width` = `1dp`
* `with-leading-icon.icon.size`: `md.comp.assist-chip.with-leading-icon.icon.size` = `18dp`
* `with-leading-icon.leading-space`: `md.comp.assist-chip.with-leading-icon.leading-space` = `8dp`
* `with-leading-icon.label-text.leading-space`: `md.comp.assist-chip.with-leading-icon.label-text.leading-space` = `8dp`
* `label-text.trailing-space`: `md.comp.assist-chip.label-text.trailing-space` = `16dp`
* `label-text.leading-space`: `md.comp.assist-chip.label-text.leading-space` = `16dp`

---

#### Typography Tokens

* `label-text.font`: `md.comp.assist-chip.label-text.font` = `md.sys.typescale.label-large.font`
* `label-text.line-height`: `md.comp.assist-chip.label-text.line-height` = `20sp`
* `label-text.size`: `md.comp.assist-chip.label-text.size` = `14sp`
* `label-text.tracking`: `md.comp.assist-chip.label-text.tracking` = `md.sys.typescale.label-large.tracking`
* `label-text.weight`: `md.comp.assist-chip.label-text.weight` = `md.sys.typescale.label-large.weight`

---

### Chips Component - Code Samples & Implementation

**Implementation Guide:**

  * **Structure:** Chips **MUST** be implemented as `<button>` elements for accessibility, using the base class `.chip` and a variant class (e.g., `.assist-chip`, `.filter-chip`). 
  * **Content:** Icons and labels inside the button **SHOULD** be wrapped in `<span>` elements (e.g., `<span class="chip-label">`). This allows the `gap` property on the base `.chip` class to handle spacing correctly and enables specific styling for the label and icon.
  * **Layout Stability:** The base `.chip` class uses `display: inline-flex` and `vertical-align: middle`. This is critical to prevent the chip from resizing or shifting when the ripple effect animation is triggered on click.
  * **Interactivity:** The provided JavaScript is required to enable the ripple effect, the toggle functionality for Filter Chips, and the removal functionality for Input Chips. Add the `.genux-ripple` class to any chip that should have a ripple effect.

#### CRITICAL NOTE: Preventing Layout Shift on Click

To prevent a visual bug where chips momentarily change size upon being clicked, it is **MANDATORY** that the base `.chip` class includes specific CSS properties to ensure a stable and predictable layout context. The ripple effect must be contained without causing the parent chip to reflow.

The generated CSS for the `.chip` class **MUST** include `display: inline-flex` and `vertical-align: middle`. This ensures the chip behaves as a stable inline block that will not have its dimensions distorted by the temporary ripple element.

```css
/* -------------------- */
/* --- Chip Group --- */
/* -------------------- */
.chip-group {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
}

/* ------------------------ */
/* --- Base Chip Styles --- */
/* ------------------------ */
.chip {
    display: inline-flex;
    vertical-align: middle; 
    box-sizing: border-box;
    height: 32px;
    border-radius: 8px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-family: 'Google Sans Flex', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    transition: background-color 150ms ease-in-out, border-color 150ms ease-in-out, box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: 1px solid transparent; /* Reserve space for border to prevent layout shift */
    gap: 8px;
    padding: 0 16px;
}
/* Adjust padding when icons are present */
.chip.icon-leading { padding-left: 8px; }
.chip.icon-trailing { padding-right: 8px; }
.chip.with-avatar { padding-left: 4px; } /* Avatar has its own internal space */

.chip .material-symbols-outlined { font-size: 18px; }
.chip .chip-label { 
    margin: 0; 
    white-space: nowrap;
}

/* ---------------------- */
/* --- Variant Styles --- */
/* ---------------------- */

/* Assist Chip */
.assist-chip {
    border-color: var(--md-sys-color-outline);
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    --genux-press-color-rgb: var(--md-sys-color-on-surface-rgb);
}
.assist-chip .material-symbols-outlined { color: var(--md-sys-color-primary); }
.assist-chip.elevated {
    box-shadow: var(--md-sys-elevation-level1-shadow);
    background-color: var(--md-sys-color-surface-container-low);
    border: none;
}
.assist-chip.elevated:hover {
    box-shadow: var(--md-sys-elevation-level2-shadow);
}

/* Filter Chip */
.filter-chip {
    border: 1px solid var(--md-sys-color-outline);
    background-color: transparent;
    color: var(--md-sys-color-on-surface-variant);
    --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}
.filter-chip.selected {
    background-color: var(--md-sys-color-secondary-container);
    border-color: transparent;
    color: var(--md-sys-color-on-secondary-container);
    --genux-press-color-rgb: var(--md-sys-color-on-secondary-container-rgb);
}
.filter-chip.selected .material-symbols-outlined { color: var(--md-sys-color-on-secondary-container); }
.filter-chip.elevated {
    box-shadow: var(--md-sys-elevation-level1-shadow);
    background-color: var(--md-sys-color-surface-container-low);
    border: none;
}
.filter-chip.elevated:hover {
    box-shadow: var(--md-sys-elevation-level2-shadow);
}

/* Input Chip */
.input-chip {
    border: 1px solid var(--md-sys-color-outline);
    background-color: transparent;
    color: var(--md-sys-color-on-surface-variant);
    --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}
.input-chip .trailing-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-sizing: content-box;
    padding: 8px;
    margin: -8px -6px -8px -6px;
    cursor: pointer;
}
 .input-chip .trailing-icon::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-color: var(--md-sys-color-on-surface-variant);
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    pointer-events: none;
}
.input-chip .trailing-icon:hover::after {
    opacity: var(--md-sys-opacity-state-hover);
}
.input-chip.selected {
    border-color: transparent;
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
    --genux-press-color-rgb: var(--md-sys-color-on-secondary-container-rgb);
}
.input-chip.selected .material-symbols-outlined { color: var(--md-sys-color-on-secondary-container); }
.input-chip .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    font-size: 0.75rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

/* Suggestion Chip */
.suggestion-chip {
    border: 1px solid var(--md-sys-color-outline);
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    --genux-press-color-rgb: var(--md-sys-color-on-surface-rgb);
}
.suggestion-chip.elevated {
    box-shadow: var(--md-sys-elevation-level1-shadow);
    background-color: var(--md-sys-color-surface-container-low);
    border: none;
}

/* -------------------- */
/* --- State Styles --- */
/* -------------------- */
.chip:disabled {
    background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.12) !important;
    color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
    border-color: rgba(var(--md-sys-color-on-surface-rgb), 0.12);
    cursor: not-allowed;
    box-shadow: none;
}
.chip:disabled .material-symbols-outlined,
.chip:disabled .avatar { 
    color: rgba(var(--md-sys-color-on-surface-rgb), 0.38); 
}
.chip.with-avatar:disabled .avatar {
    background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
    color: var(--md-sys-color-surface);
}

/* ------------------------------------- */
/* --- Ripple & State Layer Styles --- */
/* ------------------------------------- */
.chip::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    pointer-events: none;
    z-index: 0;
    border-radius: inherit;
}
.chip:not([disabled]):hover::after { opacity: var(--md-sys-opacity-state-hover); }
.chip:focus-visible { outline: 2px solid var(--md-sys-color-primary); outline-offset: 2px; }
.chip:not([disabled]):focus-visible::after { opacity: var(--md-sys-opacity-state-focus); }
.chip > *:not(.ripple-effect) {
    position: relative;
    z-index: 2;
    pointer-events: none;
}
.chip .trailing-icon { 
    pointer-events: auto; 
    z-index: 3;
}
.chip .ripple-effect {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: genux-ripple-animation 600ms linear;
    z-index: 1;
}
@keyframes genux-ripple-animation {
    to { transform: scale(4); opacity: 0; }
}
```

```html
<div class="chip-group">
    <button class="chip assist-chip genux-ripple"><span class="chip-label">Assist</span></button>
    <button class="chip assist-chip icon-leading genux-ripple"><span class="material-symbols-outlined">call</span><span class="chip-label">Call</span></button>
    <button class="chip assist-chip elevated icon-leading genux-ripple"><span class="material-symbols-outlined">local_dining</span><span class="chip-label">Elevated</span></button>
    <button class="chip assist-chip genux-ripple" disabled><span class="chip-label">Disabled</span></button>
</div>

<div class="chip-group">
    <button class="chip filter-chip genux-ripple" data-toggle="true"><span class="chip-label">Unselected</span></button>
    <button class="chip filter-chip selected genux-ripple" data-toggle="true"><span class="chip-label">Selected</span></button>
    <button class="chip filter-chip selected icon-leading genux-ripple" data-toggle="true"><span class="material-symbols-outlined">check</span><span class="chip-label">Selected Icon</span></button>
    <button class="chip filter-chip elevated genux-ripple" data-toggle="true"><span class="chip-label">Elevated</span></button>
    <button class="chip filter-chip genux-ripple" data-toggle="true" disabled><span class="chip-label">Disabled</span></button>
</div>

<div class="chip-group">
    <button class="chip input-chip icon-trailing genux-ripple"><span class="chip-label">Input</span><span class="material-symbols-outlined trailing-icon" data-remove="true">close</span></button>
    <button class="chip input-chip with-avatar icon-trailing genux-ripple"><span class="avatar">A</span><span class="chip-label">Alice</span><span class="material-symbols-outlined trailing-icon" data-remove="true">close</span></button>
    <button class="chip input-chip selected with-avatar icon-trailing genux-ripple"><span class="avatar">B</span><span class="chip-label">Bob</span><span class="material-symbols-outlined trailing-icon" data-remove="true">close</span></button>
    <button class="chip input-chip icon-trailing genux-ripple" disabled><span class="chip-label">Disabled</span><span class="material-symbols-outlined trailing-icon" data-remove="true">close</span></button>
</div>

<div class="chip-group">
    <button class="chip suggestion-chip genux-ripple"><span class="chip-label">Suggestion</span></button>
    <button class="chip suggestion-chip elevated genux-ripple"><span class="chip-label">Elevated Suggestion</span></button>
    <button class="chip suggestion-chip genux-ripple" disabled><span class="chip-label">Disabled</span></button>
</div>
```

### Interactivity Script

The following script provides the necessary interactivity for the filter chip selection logic, and input chip removal.

```javascript
document.addEventListener('click', function (e) {
    
    // Handle Input Chip Removal
    const removeButton = e.target.closest('.trailing-icon[data-remove="true"]');
    if (removeButton) {
        const chipToRemove = removeButton.closest('.chip');
        if (chipToRemove) {
            chipToRemove.remove();
        }
        return; // Prevent chip click event from firing
    }
    
    // Handle Filter Chip Toggle
    const filterChip = e.target.closest('.filter-chip[data-toggle="true"]');
    if (filterChip && !filterChip.hasAttribute('disabled')) {
        const isSelected = filterChip.classList.toggle('selected');
        const checkIcon = filterChip.querySelector('.material-symbols-outlined');
        const labelSpan = filterChip.querySelector('.chip-label');

        if (isSelected) {
            if (!filterChip.classList.contains('icon-trailing')) {
                // Add a check icon if it doesn't have one
                if (!checkIcon || checkIcon.textContent !== 'check') {
                   const newIcon = document.createElement('span');
                   newIcon.className = 'material-symbols-outlined';
                   newIcon.textContent = 'check';
                   filterChip.insertBefore(newIcon, labelSpan);
                   filterChip.classList.add('icon-leading');
                }
            }
        } else {
            // Remove the check icon if it exists
            if (checkIcon && checkIcon.textContent === 'check') {
                checkIcon.remove();
                filterChip.classList.remove('icon-leading');
            }
        }
    }
});
```

---

## Date Picker Component

* Date pickers allow users to select a date or a range of dates. They display past, present, or future dates and should clearly indicate important dates, such as the current day and selected days.

* Date pickers present differently across breakpoints (window size classes):
    * Dialogs on compact window sizes (mobile).
    * Text field drop-downs on medium and expanded window sizes (tablet and desktop).

* Modal date pickers facilitate navigation across dates in several ways:
    * To navigate across months, swipe horizontally.
    * To navigate across years, scroll vertically.
    * To access the year picker, tap the year.

* Avoid using modal date pickers for selecting dates in the distant past or future (e.g., date of birth). For these cases, a modal input picker or a docked date picker is more appropriate.

* Date range selection provides a start and end date, commonly used for tasks like booking a flight or reserving a hotel. Modal date pickers navigate across date ranges by scrolling vertically across months and tapping the start and end dates on the calendar.

### Date Picker Types

Date pickers come in three primary types:

1.  **Docked**: Appears anchored to an edge or surface.
2.  **Modal**: Appears as an overlay, typically centered, often used within dialogs.
3.  **Modal Input**: A modal picker that allows manual date entry using a keyboard interface.

### Behavior and Interaction

#### Selection vs. Confirmation

A critical principle of the date picker is the separation of **selection** from **confirmation**.

* **Selection**: When a user clicks on a day, month, or year, the component's internal state is updated, and the UI provides immediate visual feedback (e.g., a highlighted circle). This action **must not** close the picker. This allows the user to continue navigating (e.g., change the month) or adjust their selection without being forced out of the component.

* **Confirmation**: The selection is only finalized when the user performs an explicit closing action. The picker **must** remain open until one of the following occurs:
    1.  The user clicks the "OK" button to confirm their choice.
    2.  The user clicks the "Cancel" button to discard their choice.
    3.  The user clicks the scrim or anywhere outside the boundary of the date picker component (for modal dialogs).

---

### Date Picker Component - Tokens

---

### Date Picker Docked

**Token Set**: `md.comp.date-picker.docked`

#### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.date-picker.docked.container.color` = `md.sys.color.surface-container-high`
    * `weekdays.label-text.color`: `md.comp.date-picker.docked.weekdays.label-text.color` = `md.sys.color.on-surface`
    * `date.unselected.label-text.color`: `md.comp.date-picker.docked.date.unselected.label-text.color` = `md.sys.color.on-surface`
    * `date.unselected.outside-month.label-text.color`: `md.comp.date-picker.docked.date.unselected.outside-month.label-text.color` = `md.sys.color.on-surface`
    * `date.unselected.outside-month.label-text.opacity`: `md.comp.date-picker.docked.date.unselected.outside-month.label-text.opacity` = `38%`
    * `date.today.label-text.color`: `md.comp.date-picker.docked.date.today.label-text.color` = `md.sys.color.primary`
    * `date.today.container.outline.color`: `md.comp.date-picker.docked.date.today.container.outline.color` = `md.sys.color.primary`
    * `date.selected.label-text.color`: `md.comp.date-picker.docked.date.selected.label-text.color` = `md.sys.color.on-primary`
    * `date.selected.container.color`: `md.comp.date-picker.docked.date.selected.container.color` = `md.sys.color.primary`
    * `menu-button.label-text.color`: `md.comp.date-picker.docked.menu-button.label-text.color` = `md.sys.color.on-surface-variant`
    * `menu-button.icon.color`: `md.comp.date-picker.docked.menu-button.icon.color` = `md.sys.color.on-surface-variant`

* **Disabled**
    * `menu-button.label-text.color`: `md.comp.date-picker.docked.menu-button.disabled.label-text.color` = `md.sys.color.on-surface`
    * `menu-button.label-text.opacity`: `md.comp.date-picker.docked.menu-button.disabled.label-text.opacity` = `38%`
    * `menu-button.icon.color`: `md.comp.date-picker.docked.menu-button.disabled.icon.color` = `md.sys.color.on-surface`
    * `menu-button.icon.opacity`: `md.comp.date-picker.docked.menu-button.disabled.icon.opacity` = `38%`

* **Hovered**
    * `date.unselected.state-layer.color`: `md.comp.date-picker.docked.date.unselected.hover.state-layer.color` = `md.sys.color.on-surface-variant`
    * `date.selected.state-layer.color`: `md.comp.date-picker.docked.date.selected.hover.state-layer.color` = `md.sys.color.on-primary`
    * `date.today.state-layer.color`: `md.comp.date-picker.docked.date.today.hover.state-layer.color` = `md.sys.color.primary`
    * `date.state-layer.opacity`: `md.comp.date-picker.docked.date.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `menu-button.state-layer.color`: `md.comp.date-picker.docked.menu-button.hover.state-layer.color` = `md.sys.color.on-surface-variant`
    * `menu-button.state-layer.opacity`: `md.comp.date-picker.docked.menu-button.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Focused**
    * `date.unselected.state-layer.color`: `md.comp.date-picker.docked.date.unselected.focus.state-layer.color` = `md.sys.color.on-surface-variant`
    * `date.selected.state-layer.color`: `md.comp.date-picker.docked.date.selected.focus.state-layer.color` = `md.sys.color.on-primary`
    * `date.today.state-layer.color`: `md.comp.date-picker.docked.date.today.focus.state-layer.color` = `md.sys.color.primary`
    * `date.state-layer.opacity`: `md.comp.date-picker.docked.date.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `menu-button.state-layer.color`: `md.comp.date-picker.docked.menu-button.focus.state-layer.color` = `md.sys.color.on-surface-variant`
    * `menu-button.state-layer.opacity`: `md.comp.date-picker.docked.menu-button.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

* **Pressed**
    * `date.unselected.state-layer.color`: `md.comp.date-picker.docked.date.unselected.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `date.selected.state-layer.color`: `md.comp.date-picker.docked.date.selected.pressed.state-layer.color` = `md.sys.color.on-primary`
    * `date.today.state-layer.color`: `md.comp.date-picker.docked.date.today.pressed.state-layer.color` = `md.sys.color.primary`
    * `date.state-layer.opacity`: `md.comp.date-picker.docked.date.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `menu-button.state-layer.color`: `md.comp.date-picker.docked.menu-button.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `menu-button.state-layer.opacity`: `md.comp.date-picker.docked.menu-button.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

#### Elevation Tokens

* **Enabled**
    * `container.elevation`: `md.comp.date-picker.docked.container.elevation` = `md.sys.elevation.level3`

#### Size, Shape, & Layout Tokens

* `container.shape`: `md.comp.date-picker.docked.container.shape` = `md.sys.shape.corner.large`
* `container.width`: `md.comp.date-picker.docked.container.width` = `360dp`
* `container.height`: `md.comp.date-picker.docked.container.height` = `456dp`
* `date.container.shape`: `md.comp.date-picker.docked.date.container.shape` = `md.sys.shape.corner.full`
* `date.container.width`: `md.comp.date-picker.docked.date.container.width` = `48dp`
* `date.container.height`: `md.comp.date-picker.docked.date.container.height` = `48dp`
* `date.state-layer.shape`: `md.comp.date-picker.docked.date.state-layer.shape` = `md.sys.shape.corner.full`
* `date.state-layer.width`: `md.comp.date-picker.docked.date.state-layer.width` = `40dp`
* `date.state-layer.height`: `md.comp.date-picker.docked.date.state-layer.height` = `40dp`
* `header.height`: `md.comp.date-picker.docked.header.height` = `64dp`
* `menu-button.container.shape`: `md.comp.date-picker.docked.menu-button.container.shape` = `md.sys.shape.corner.full`
* `menu-button.container.height`: `md.comp.date-picker.docked.menu-button.container.height` = `40dp`
* `menu-button.icon.size`: `md.comp.date-picker.docked.menu-button.icon.size` = `18dp`
* `today.container.outline.width`: `md.comp.date-picker.docked.date.today.container.outline.width` = `1dp`

#### Typography Tokens

* **Weekdays Label Text**
    * `font`: `md.comp.date-picker.docked.weekdays.label-text.font` = `md.sys.typescale.body-large.font`
    * `line-height`: `md.comp.date-picker.docked.weekdays.label-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `size`: `md.comp.date-picker.docked.weekdays.label-text.size` = `md.sys.typescale.body-large.size`
    * `tracking`: `md.comp.date-picker.docked.weekdays.label-text.tracking` = `md.sys.typescale.body-large.tracking`
    * `weight`: `md.comp.date-picker.docked.weekdays.label-text.weight` = `md.sys.typescale.body-large.weight`

* **Date Label Text**
    * `font`: `md.comp.date-picker.docked.date.label-text.font` = `md.sys.typescale.body-large.font`
    * `line-height`: `md.comp.date-picker.docked.date.label-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `size`: `md.comp.date-picker.docked.date.label-text.size` = `md.sys.typescale.body-large.size`
    * `tracking`: `md.comp.date-picker.docked.date.label-text.tracking` = `md.sys.typescale.body-large.tracking`
    * `weight`: `md.comp.date-picker.docked.date.label-text.weight` = `md.sys.typescale.body-large.weight`

* **Menu Button Label Text**
    * `font`: `md.comp.date-picker.docked.menu-button.label-text.font` = `md.sys.typescale.label-large.font`
    * `line-height`: `md.comp.date-picker.docked.menu-button.label-text.line-height` = `md.sys.typescale.label-large.line-height`
    * `size`: `md.comp.date-picker.docked.menu-button.label-text.size` = `md.sys.typescale.label-large.size`
    * `tracking`: `md.comp.date-picker.docked.menu-button.label-text.tracking` = `md.sys.typescale.label-large.tracking`
    * `weight`: `md.comp.date-picker.docked.menu-button.label-text.weight` = `md.sys.typescale.label-large.weight`

---

### Date Picker Modal

**Token Set**: `md.comp.date-picker.modal`

#### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.date-picker.modal.container.color` = `md.sys.color.surface-container-high`
    * `supporting-text.color`: `md.comp.date-picker.modal.header.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `headline.color`: `md.comp.date-picker.modal.header.headline.color` = `md.sys.color.on-surface-variant`
    * `weekdays.label-text.color`: `md.comp.date-picker.modal.weekdays.label-text.color` = `md.sys.color.on-surface`
    * `date.unselected.label-text.color`: `md.comp.date-picker.modal.date.unselected.label-text.color` = `md.sys.color.on-surface`
    * `date.today.label-text.color`: `md.comp.date-picker.modal.date.today.label-text.color` = `md.sys.color.primary`
    * `date.today.container.outline.color`: `md.comp.date-picker.modal.date.today.container.outline.color` = `md.sys.color.primary`
    * `date.selected.label-text.color`: `md.comp.date-picker.modal.date.selected.label-text.color` = `md.sys.color.on-primary`
    * `date.selected.container.color`: `md.comp.date-picker.modal.date.selected.container.color` = `md.sys.color.primary`
    * `range-selection.date.in-range.label-text.color`: `md.comp.date-picker.modal.range-selection.date.in-range.label-text.color` = `md.sys.color.on-secondary-container`
    * `range-selection.active-indicator.container.color`: `md.comp.date-picker.modal.range-selection.active-indicator.container.color` = `md.sys.color.secondary-container`
    * `range-selection.month.subhead.color`: `md.comp.date-picker.modal.range-selection.month.subhead.color` = `md.sys.color.on-surface-variant`

* **Disabled**
    * `date.label-text.color`: `On surface` = `md.sys.color.on-surface`
    * `date.label-text.opacity`: `38%`
    * `year.label-text.color`: `On surface` = `md.sys.color.on-surface`
    * `year.label-text.opacity`: `38%`

* **Hovered**
    * `date.unselected.state-layer.color`: `md.comp.date-picker.modal.date.unselected.hover.state-layer.color` = `md.sys.color.on-surface-variant`
    * `date.selected.state-layer.color`: `md.comp.date-picker.modal.date.selected.hover.state-layer.color` = `md.sys.color.on-primary`
    * `date.today.state-layer.color`: `md.comp.date-picker.modal.date.today.hover.state-layer.color` = `md.sys.color.primary`
    * `date.state-layer.opacity`: `md.comp.date-picker.modal.date.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `range-selection.date.in-range.state-layer.color`: `md.comp.date-picker.modal.range-selection.date.in-range.hover.state-layer.color` = `md.sys.color.on-primary-container`
    * `range-selection.date.in-range.state-layer.opacity`: `md.comp.date-picker.modal.range-selection.date.in-range.hover.state-layer.opcaity` = `md.sys.state.hover.state-layer-opacity`

* **Focused**
    * `date.unselected.state-layer.color`: `md.comp.date-picker.modal.date.unselected.focus.state-layer.color` = `md.sys.color.on-surface-variant`
    * `date.selected.state-layer.color`: `md.comp.date-picker.modal.date.selected.focus.state-layer.color` = `md.sys.color.on-primary`
    * `date.today.state-layer.color`: `md.comp.date-picker.modal.date.today.focus.state-layer.color` = `md.sys.color.primary`
    * `date.state-layer.opacity`: `md.comp.date-picker.modal.date.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `range-selection.date.in-range.state-layer.color`: `md.comp.date-picker.modal.range-selection.date.in-range.focus.state-layer.color` = `md.sys.color.on-primary-container`
    * `range-selection.date.in-range.state-layer.opacity`: `md.comp.date-picker.modal.range-selection.date.in-range.focus.state-layer.opcaity` = `md.sys.state.focus.state-layer-opacity`

* **Pressed**
    * `date.unselected.state-layer.color`: `md.comp.date-picker.modal.date.unselected.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `date.selected.state-layer.color`: `md.comp.date-picker.modal.date.selected.pressed.state-layer.color` = `md.sys.color.on-primary`
    * `date.today.state-layer.color`: `md.comp.date-picker.modal.date.today.pressed.state-layer.color` = `md.sys.color.primary`
    * `date.state-layer.opacity`: `md.comp.date-picker.modal.date.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `range-selection.date.in-range.state-layer.color`: `md.comp.date-picker.modal.range-selection.date.in-range.pressed.state-layer.color` = `md.sys.color.on-primary-container`
    * `range-selection.date.in-range.state-layer.opacity`: `md.comp.date-picker.modal.range-selection.date.in-range.pressed.state-layer.opcaity` = `md.sys.state.pressed.state-layer-opacity`

#### Elevation Tokens

* **Enabled**
    * `container.elevation`: `md.comp.date-picker.modal.container.elevation` = `md.sys.elevation.level3`
* **Range Selection**
    * `container.elevation`: `md.comp.date-picker.modal.range-selection.container.elevation` = `md.sys.elevation.level0`

#### Size, Shape, & Layout Tokens

* `container.shape`: `md.comp.date-picker.modal.container.shape` = `md.sys.shape.corner.extra-large`
* `container.width`: `md.comp.date-picker.modal.container.width` = `360dp`
* `container.height`: `md.comp.date-picker.modal.container.height` = `512dp`
* `date.container.shape`: `md.comp.date-picker.modal.date.container.shape` = `md.sys.shape.corner.full`
* `date.container.width`: `md.comp.date-picker.modal.date.container.width` = `40dp`
* `date.container.height`: `md.comp.date-picker.modal.date.container.height` = `40dp`
* `date.state-layer.shape`: `md.comp.date-picker.modal.date.state-layer.shape` = `md.sys.shape.corner.full`
* `date.state-layer.width`: `md.comp.date-picker.modal.date.state-layer.width` = `40dp`
* `date.state-layer.height`: `md.comp.date-picker.modal.date.state-layer.height` = `40dp`
* `header.container.width`: `md.comp.date-picker.modal.header.container.width` = `360dp`
* `header.container.height`: `md.comp.date-picker.modal.header.container.height` = `120dp`
* `today.container.outline.width`: `md.comp.date-picker.modal.date.today.container.outline.width` = `1dp`
* `range-selection.container.shape`: `md.comp.date-picker.modal.range-selection.container.shape` = `md.sys.shape.corner.none`
* `range-selection.header.container.height`: `md.comp.date-picker.modal.range-selection.header.container.height` = `128dp`
* `range-selection.active-indicator.container.shape`: `md.comp.date-picker.modal.range-selection.active-indicator.container.shape` = `md.sys.shape.corner.full`
* `range-selection.active-indicator.container.height`: `md.comp.date-picker.modal.range-selection.active-indicator.container.height` = `40dp`

#### Typography Tokens

* **Supporting Text**
    * `font`: `md.comp.date-picker.modal.header.supporting-text.font` = `md.sys.typescale.label-large.font`
    * `line-height`: `md.comp.date-picker.modal.header.supporting-text.line-height` = `md.sys.typescale.label-large.line-height`
    * `size`: `md.comp.date-picker.modal.header.supporting-text.size` = `md.sys.typescale.label-large.size`
    * `tracking`: `md.comp.date-picker.modal.header.supporting-text.tracking` = `md.sys.typescale.label-large.tracking`
    * `weight`: `md.comp.date-picker.modal.header.supporting-text.weight` = `md.sys.typescale.label-large.weight`

* **Headline Text**
    * `font`: `md.comp.date-picker.modal.header.headline.font` = `md.sys.typescale.headline-large.font`
    * `line-height`: `md.comp.date-picker.modal.header.headline.line-height` = `md.sys.typescale.headline-large.line-height`
    * `size`: `md.comp.date-picker.modal.header.headline.size` = `md.sys.typescale.headline-large.size`
    * `tracking`: `md.comp.date-picker.modal.header.headline.tracking` = `md.sys.typescale.headline-large.tracking`
    * `weight`: `md.comp.date-picker.modal.header.headline.weight` = `md.sys.typescale.headline-large.weight`

* **Range Selection Headline Text**
    * `font`: `md.comp.date-picker.modal.range-selection.header.headline.font` = `md.sys.typescale.title-large.font`
    * `line-height`: `md.comp.date-picker.modal.range-selection.header.headline.line-height` = `md.sys.typescale.title-large.line-height`
    * `size`: `md.comp.date-picker.modal.range-selection.header.headline.size` = `md.sys.typescale.title-large.size`
    * `tracking`: `md.comp.date-picker.modal.range-selection.header.headline.tracking` = `md.sys.typescale.title-large.tracking`
    * `weight`: `md.comp.date-picker.modal.range-selection.header.headline.weight` = `md.sys.typescale.title-large.weight`

* **Weekdays Label Text**
    * `font`: `md.comp.date-picker.modal.weekdays.label-text.font` = `md.sys.typescale.body-large.font`
    * `line-height`: `md.comp.date-picker.modal.weekdays.label-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `size`: `md.comp.date-picker.modal.weekdays.label-text.size` = `md.sys.typescale.body-large.size`
    * `tracking`: `md.comp.date-picker.modal.weekdays.label-text.tracking` = `md.sys.typescale.body-large.tracking`
    * `weight`: `md.comp.date-picker.modal.weekdays.label-text.weight` = `md.sys.typescale.body-large.weight`

* **Date Label Text**
    * `font`: `md.comp.date-picker.modal.date.label-text.font` = `md.sys.typescale.body-large.font`
    * `line-height`: `md.comp.date-picker.modal.date.label-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `size`: `md.comp.date-picker.modal.date.label-text.size` = `md.sys.typescale.body-large.size`
    * `tracking`: `md.comp.date-picker.modal.date.label-text.tracking` = `md.sys.typescale.body-large.tracking`
    * `weight`: `md.comp.date-picker.modal.date.label-text.weight` = `md.sys.typescale.body-large.weight`

* **Range Selection Month Subhead**
    * `font`: `md.comp.date-picker.modal.range-selection.month.subhead.font` = `md.sys.typescale.title-small.font`
    * `line-height`: `md.comp.date-picker.modal.range-selection.month.subhead.line-height` = `md.sys.typescale.title-small.line-height`
    * `size`: `md.comp.date-picker.modal.range-selection.month.subhead.size` = `md.sys.typescale.title-small.size`
    * `tracking`: `md.comp.date-picker.modal.range-selection.month.subhead.tracking` = `md.sys.typescale.title-small.tracking`
    * `weight`: `md.comp.date-picker.modal.range-selection.month.subhead.weight` = `md.sys.typescale.title-small.weight`

---

### Date Picker Component - Code Samples & Implementation

```css
/* ---------------------------------- */
/* Date Picker CSS */
/* ---------------------------------- */
.datepicker-container {
    display: flex;
    flex-direction: column;
    background-color: var(--md-sys-color-surface-container-high);
    z-index: 101;
    transition: opacity 0.2s ease, transform 0.2s ease;
    opacity: 0; 
    transform: scale(0.95); 
    pointer-events: none;
}
.datepicker-container.visible {
    opacity: 1; 
    transform: scale(1); 
    pointer-events: auto;
}

/* Modal Dialog Variant */
.datepicker-container.dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 360px;
    /* height: 512px; */ /* Height is dynamic */
    border-radius: 28px;
    box-shadow: var(--md-sys-elevation-level3-shadow);
}
.datepicker-container.dialog:not(.visible) {
    transform: translate(-50%, -45%) scale(0.95);
}

/* Header */
.datepicker-header {
    padding: 24px 24px 12px 24px;
}
.datepicker-header .headline {
    font-family: var(--md-sys-typescale-headline-large-font-family);
    font-size: var(--md-sys-typescale-headline-large-font-size);
    color: var(--md-sys-color-on-surface-variant);
    margin: 0;
}
.datepicker-header .headline.range {
    font-family: var(--md-sys-typescale-title-large-font-family);
    font-size: var(--md-sys-typescale-title-large-font-size);
}

/* Main Content */
.datepicker-main {
    padding: 0 12px;
}

/* Navigation */
.datepicker-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    height: 40px;
    margin-bottom: 8px;
}
.month-year-selector {
    display: inline-flex;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0 8px;
    border-radius: 4px;
    font-family: var(--md-sys-typescale-label-large-font-family);
    font-size: var(--md-sys-typescale-label-large-font-size);
    font-weight: var(--md-sys-typescale-label-large-font-weight);
    color: var(--md-sys-color-on-surface-variant);
    --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}
.nav-arrows .icon-button {
    --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}

/* Grid Wrapper */
.calendar-grid-wrapper {
    padding: 0 12px;
}

.calendar-grid {
    display: grid;
    gap: 2px; 
    text-align: center;
    justify-items: center;
    padding-bottom: 12px;
}

/* Day View */
.calendar-grid.day-view {
    grid-template-columns: repeat(7, 40px);
}
.weekday {
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    color: var(--md-sys-color-on-surface);
    font-family: var(--md-sys-typescale-body-large-font-family);
    font-weight: var(--md-sys-typescale-label-large-font-weight);
    font-size: 0.8rem;
}
.day-cell {
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    font-family: var(--md-sys-typescale-body-large-font-family);
    color: var(--md-sys-color-on-surface);
    border: 1px solid transparent;
    --genux-press-color-rgb: var(--md-sys-color-primary-rgb);
}
.day-cell.today {
    border-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-primary);
}
.day-cell.selected {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    border-color: transparent;
}
.day-cell.range-start, .day-cell.range-end {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
}
.day-cell.in-range {
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
    border-radius: 0;
}
/* Handle range start/end rounding */
.day-cell.range-start:not(.range-end) { border-radius: 50% 0 0 50%; }
.day-cell.range-end:not(.range-start) { border-radius: 0 50% 50% 0; }
.day-cell.outside-month {
    color: var(--md-sys-color-on-surface);
    opacity: 0.38;
}

/* Year/Month Views */
.calendar-grid.year-view, .calendar-grid.month-view {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 8px 0;
}
.picker-cell {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;
    font-family: var(--md-sys-typescale-body-large-font-family);
    color: var(--md-sys-color-on-surface);
    --genux-press-color-rgb: var(--md-sys-color-primary-rgb);
}
.picker-cell.selected {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
}
.picker-cell.today {
    border: 1px solid var(--md-sys-color-primary);
    color: var(--md-sys-color-primary);
}
.year-nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    height: 40px;
    margin-bottom: 8px;
}
.year-nav-header .year-label {
    font-family: var(--md-sys-typescale-label-large-font-family);
    font-size: var(--md-sys-typescale-label-large-font-size);
    font-weight: var(--md-sys-typescale-label-large-font-weight);
    color: var(--md-sys-color-on-surface-variant);
}

/* Actions */
.datepicker-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 12px 24px 24px 24px;
}

/* ---------------------------------- */
/* Date Picker DOCKED Overrides */
/* ---------------------------------- */
.datepicker-container.docked {
    position: relative; /* Not fixed */
    width: 360px;
    height: 456px;
    border-radius: 16px;
    box-shadow: var(--md-sys-elevation-level3-shadow);
    transform: scale(1); /* No entry animation */
    opacity: 1;
    pointer-events: auto;
}

.datepicker-container.docked .datepicker-header {
     height: 64px;
     padding: 16px 24px 0 24px;
}

.datepicker-container.docked .calendar-grid.day-view {
    grid-template-columns: repeat(7, 48px);
}
.datepicker-container.docked .weekday {
    width: 48px;
    height: 48px;
}
.datepicker-container.docked .day-cell {
    width: 48px;
    height: 48px;
}

.datepicker-container.docked .datepicker-actions {
    padding: 12px 24px 12px 24px;
}
```

```html
<!-- 
  This is the static HTML structure for the Date Picker.
  It serves as a container that is controlled by the DatePicker JavaScript class.
  The .datepicker-nav and .calendar-grid-wrapper content is generated dynamically.
-->

<!-- Modal Date Picker Container (for dialog/dropdown types) -->
<div id="datepicker-container" class="datepicker-container" role="dialog" aria-modal="true" aria-labelledby="datepicker-headline">
    <div class="datepicker-header">
        <!-- Headline is set by JS -->
        <div id="datepicker-headline" class="headline">Select date</div>
    </div>
    <div class="datepicker-main">
        <!-- Navigation is rendered by JS -->
        <div class="datepicker-nav">
            <!-- Example:
            <button class="month-year-selector genux-ripple" data-action="show-years">
                <span>September 2025</span>
                <span class="material-symbols-outlined">arrow_drop_down</span>
            </button>
            <div class="nav-arrows">
                <button class="icon-button prev-month genux-ripple" aria-label="Previous month" data-action="prev-month">
                    <span class="material-symbols-outlined">chevron_left</span>
                </button>
                <button class="icon-button next-month genux-ripple" aria-label="Next month" data-action="next-month">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
            -->
        </div>
        <!-- Grid is rendered by JS -->
        <div class="calendar-grid-wrapper">
            <!-- Example:
            <div class="calendar-grid day-view" role="grid">
                <div class="weekday" role="columnheader">S</div>
                ...
                <div class="day-cell genux-ripple" role="gridcell" data-date="2025-09-01" aria-selected="false">1</div>
                ...
            </div>
            -->
        </div>
    </div>
    <div class="datepicker-actions">
        <button class="button text genux-ripple" id="datepicker-cancel"><span>Cancel</span></button>
        <button class="button text genux-ripple" id="datepicker-ok"><span>OK</span></button>
    </div>
</div>

<!-- Scrim for modal dialogs -->
<div id="datepicker-scrim" class="scrim"></div>

<!-- 
  For the 'docked' variant, the same 'datepicker-container' is appended
  by the JS into a static wrapper element on the page, like:
  <div id="docked-picker-wrapper">
      <!-- The .datepicker-container will be placed here by the JS -->
  </div>
-->
```

```js
/* ---------------------------------- */
/* --- Date Picker Class JS --- */
/* ---------------------------------- */

/**
 * Material Design Date Picker Class
 * Handles modal, docked, single, and range modes.
 */
class DatePicker {
    constructor(triggerElement, options = {}) {
        if (!triggerElement) return;
        
        this.triggerElement = triggerElement;
        this.options = {
            type: 'dialog', // 'dialog', 'dropdown', 'docked'
            mode: 'single', // 'single', 'range'
            ...options
        };

        // DOM Elements
        this.pickerContainer = document.getElementById('datepicker-container');
        this.scrim = document.getElementById('datepicker-scrim');
        this.headlineEl = this.pickerContainer.querySelector('#datepicker-headline');
        this.navEl = this.pickerContainer.querySelector('.datepicker-nav');
        this.gridWrapper = this.pickerContainer.querySelector('.calendar-grid-wrapper');
        this.cancelBtn = this.pickerContainer.querySelector('#datepicker-cancel');
        this.okBtn = this.pickerContainer.querySelector('#datepicker-ok');

        // State
        this.viewDate = new Date();
        this.view = 'day'; // 'day', 'month', 'year'
        this.yearRangeStart = new Date().getFullYear() - 7;
        this.selectedDate = null;
        this.range = { start: null, end: null };
        this.isOpen = false;
        this.isInternalClick = false; // Flag to track internal clicks

        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.weekdayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

        // Bind methods
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._handleKeydown = this._handleKeydown.bind(this);
        this._handleOutsideClick = this._handleOutsideClick.bind(this);

        if (this.options.type !== 'docked') {
            this.triggerElement.addEventListener('click', this.open);
        }
        this._attachPickerEventListeners();

        this.triggerElement.datepickerInstance = this;
    }

    // --- Public API ---

    open() {
        if(this.isOpen) return;

        if (DatePicker.activeInstance && DatePicker.activeInstance !== this) {
            DatePicker.activeInstance.close(false);
        }
        DatePicker.activeInstance = this;

        // Reset state
        this.view = 'day';
        this.viewDate = this.selectedDate ? new Date(this.selectedDate) : new Date();
        if(this.options.mode === 'range' && this.range.start) {
            this.viewDate = new Date(this.range.start);
        }

        this.pickerContainer.className = 'datepicker-container'; 
        this.pickerContainer.classList.add(this.options.type);

        if (this.options.type === 'dialog') {
            this.scrim.classList.add('visible');
        } else if (this.options.type === 'dropdown') {
            // Dropdown positioning (not fully implemented in this demo)
            const rect = this.triggerElement.getBoundingClientRect();
            this.pickerContainer.style.top = `${window.scrollY + rect.bottom + 8}px`;
            this.pickerContainer.style.left = `${window.scrollX + rect.left}px`;
        } else if (this.options.type === 'docked') {
            // Docked: append to wrapper and make static
            this.triggerElement.appendChild(this.pickerContainer);
            this.pickerContainer.classList.add('docked');
        }

        this.pickerContainer.classList.remove('hidden');
        this.isOpen = true;
        
        requestAnimationFrame(() => {
            this.pickerContainer.dataset.open = 'true';
            this.pickerContainer.classList.add('visible');
        });

        document.addEventListener('keydown', this._handleKeydown);
        if (this.options.type !== 'docked') {
            setTimeout(() => document.addEventListener('click', this._handleOutsideClick), 0);
        }
        this._render();
    }

    close(commitChange = false) {
        if(!this.isOpen) return;
        
        if (this.options.type === 'docked') {
            // Docked pickers don't "close", they just commit.
            this._commit(commitChange);
            return;
        }
        
        this.isOpen = false;
        if(DatePicker.activeInstance === this) {
            DatePicker.activeInstance = null;
        }

        this.pickerContainer.dataset.open = 'false';
        this.pickerContainer.classList.remove('visible');
        this.scrim.classList.remove('visible');

        const onTransitionEnd = () => {
            if (this.pickerContainer.dataset.open === 'false') {
               this.pickerContainer.classList.add('hidden');
               // Move container back to body for reuse
               document.body.appendChild(this.pickerContainer);
            }
            this.pickerContainer.removeEventListener('transitionend', onTransitionEnd);
        };
        this.pickerContainer.addEventListener('transitionend', onTransitionEnd);

        document.removeEventListener('keydown', this._handleKeydown);
        document.removeEventListener('click', this._handleOutsideClick);

        this._commit(commitChange);
    }
    
    _commit(commitChange) {
        if (commitChange) {
            // This is where you would dispatch an event or update an input.
            // For demo purposes, it just logs to console or updates a demo element.
            console.log("Date selected:", this.options.mode === 'single' ? this.selectedDate : this.range);
            
            // Example: Fire a custom event on the trigger element
            const event = new CustomEvent('datechange', {
                detail: {
                    mode: this.options.mode,
                    selectedDate: this.selectedDate,
                    range: this.range
                }
            });
            this.triggerElement.dispatchEvent(event);
        }
    }

    // --- Private Rendering Methods ---

    _render() {
        this._updateHeadline();
        switch (this.view) {
            case 'year': this._renderYearPicker(); break;
            case 'month': this._renderMonthPicker(); break;
            default: this._renderDayPicker(); break;
        }
    }
    
    _renderNav(view) {
        let html = '';
        if(view === 'day') {
            html = `
                <button class="month-year-selector genux-ripple" data-action="show-years">
                    <span>${this.monthNames[this.viewDate.getMonth()]} ${this.viewDate.getFullYear()}</span>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </button>
                <div class="nav-arrows">
                    <button class="icon-button prev-month genux-ripple" aria-label="Previous month" data-action="prev-month">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button class="icon-button next-month genux-ripple" aria-label="Next month" data-action="next-month">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            `;
        } else if (view === 'year') {
             html = `
                <div class="year-nav-header">
                     <button class="icon-button prev-year-range genux-ripple" aria-label="Previous years" data-action="prev-year-range">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <span class="year-label">${this.yearRangeStart} - ${this.yearRangeStart + 15}</span>
                     <button class="icon-button next-year-range genux-ripple" aria-label="Next years" data-action="next-year-range">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            `;
        } else if (view === 'month') {
             html = `
                <button class="month-year-selector genux-ripple" data-action="show-years">
                    <span>${this.viewDate.getFullYear()}</span>
                    <span class="material-symbols-outlined">arrow_drop_down</span>
                </button>
            `;
        }
        this.navEl.innerHTML = html;
    }

    _renderDayPicker() {
        this.view = 'day';
        this._renderNav('day');
        
        const year = this.viewDate.getFullYear();
        const month = this.viewDate.getMonth();
        
        let gridHtml = `<div class="calendar-grid day-view" role="grid">`;
        this.weekdayNames.forEach(day => {
            gridHtml += `<div class="weekday" role="columnheader">${day}</div>`;
        });
        
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();

        // Days from previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const day = daysInPrevMonth - firstDayOfMonth + 1 + i;
            const date = new Date(year, month - 1, day);
            gridHtml += this._getDayCellHtml(date, true);
        }

        // Days in current month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
             gridHtml += this._getDayCellHtml(date, false);
        }
        
        // Days from next month
        const gridCellCount = this.options.type === 'docked' ? 42 : 42; // Can adjust if needed
        const remainingCells = gridCellCount - (firstDayOfMonth + daysInMonth);
        for (let i = 1; i <= remainingCells; i++) {
            const date = new Date(year, month + 1, i);
            gridHtml += this._getDayCellHtml(date, true);
        }
        
        gridHtml += '</div>';
        this.gridWrapper.innerHTML = gridHtml;
    }
    
    _getDayCellHtml(date, isOutsideMonth) {
        const dateString = date.toISOString().split('T')[0];
        const today = new Date();
        
        let classes = 'day-cell genux-ripple';
        let isSelected = false;

        if (isOutsideMonth) classes += ' outside-month';
        if (date.toDateString() === today.toDateString()) classes += ' today';

        if (this.options.mode === 'single') {
            if (this.selectedDate && date.toDateString() === this.selectedDate.toDateString()) {
                isSelected = true;
                classes += ' selected';
            }
        } else { // Range mode
            if (this.range.start && this.range.end && date > this.range.start && date < this.range.end) {
                classes += ' in-range';
            }
            if (this.range.start && date.toDateString() === this.range.start.toDateString()) {
                classes += ' range-start';
                if (this.range.end) classes += ' selected';
                isSelected = true;
            }
            if (this.range.end && date.toDateString() === this.range.end.toDateString()) {
                classes += ' range-end selected';
                isSelected = true;
            }
        }
        
        return `<div class="${classes}" role="gridcell" data-date="${dateString}" aria-selected="${isSelected}">${date.getDate()}</div>`;
    }
    
    _renderMonthPicker() {
        this.view = 'month';
        this._renderNav('month');
        
        let gridHtml = `<div class="calendar-grid month-view" role="grid">`;
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        
        for(let i = 0; i < 12; i++) {
            let classes = 'picker-cell genux-ripple';
            if(i === this.viewDate.getMonth()) classes += ' selected';
            if(i === currentMonth && this.viewDate.getFullYear() === currentYear) classes += ' today';
            
            gridHtml += `<div class="${classes}" role="gridcell" data-month="${i}">${this.monthNames[i].substring(0, 3)}</div>`;
        }
        gridHtml += '</div>';
        this.gridWrapper.innerHTML = gridHtml;
    }
    
    _renderYearPicker() {
        this.view = 'year';
        this._renderNav('year');
        
        let gridHtml = `<div class="calendar-grid year-view" role="grid">`;
        const currentYear = new Date().getFullYear();
        
        for(let i = 0; i < 16; i++) {
            const year = this.yearRangeStart + i;
            let classes = 'picker-cell genux-ripple';
            if(year === this.viewDate.getFullYear()) classes += ' selected';
            if(year === currentYear) classes += ' today';
            
            gridHtml += `<div class="${classes}" role="gridcell" data-year="${year}">${year}</div>`;
        }
        gridHtml += '</div>';
        this.gridWrapper.innerHTML = gridHtml;
    }
    
    _updateHeadline() {
        let headline = '';
        if (this.options.mode === 'range') {
            this.headlineEl.classList.add('range');
            const start = this.range.start ? this._formatDate(this.range.start, 'short') : 'Start';
            const end = this.range.end ? this._formatDate(this.range.end, 'short') : 'End';
            headline = `${start} - ${end}`;
        } else {
            this.headlineEl.classList.remove('range');
            headline = this.selectedDate ? this._formatDate(this.selectedDate, 'long') : 'Select date';
        }
        this.headlineEl.textContent = headline;
    }

    _formatDate(date, style = 'long') {
        if (!date) return '';
        if (style === 'short') {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    // --- Private Event Handling ---
    _attachPickerEventListeners() {
        this.cancelBtn.addEventListener('click', () => this.close(false));
        this.okBtn.addEventListener('click', () => this.close(true));

        this.pickerContainer.addEventListener('mousedown', () => {
            this.isInternalClick = true;
        });
        
        this.navEl.addEventListener('click', (e) => {
            const action = e.target.closest('[data-action]');
            if(!action) return;
            
            switch(action.dataset.action) {
                case 'prev-month':
                    this.viewDate.setMonth(this.viewDate.getMonth() - 1);
                    this._render();
                    break;
                case 'next-month':
                    this.viewDate.setMonth(this.viewDate.getMonth() + 1);
                    this._render();
                    break;
                case 'show-years':
                    this.view = this.view === 'year' ? 'day' : 'year';
                    if(this.view === 'year') {
                        this.yearRangeStart = this.viewDate.getFullYear() - 7;
                    }
                    this._render();
                    break;
                case 'prev-year-range':
                    this.yearRangeStart -= 16;
                    this._render();
                    break;
                case 'next-year-range':
                    this.yearRangeStart += 16;
                    this._render();
                    break;
            }
        });
        
        this.gridWrapper.addEventListener('click', (e) => this._handleGridClick(e));
    }
    
    _handleGridClick(e) {
        const target = e.target.closest('[role="gridcell"]');
        if (!target) return;

        switch(this.view) {
            case 'day': this._handleDayClick(target); break;
            case 'month': this._handleMonthClick(target); break;
            case 'year': this._handleYearClick(target); break;
        }
    }

    _handleDayClick(target) {
        const date = new Date(target.dataset.date + 'T00:00:00');
        if (this.options.mode === 'single') {
            this.selectedDate = date;
        } else { // Range mode
             if (!this.range.start || (this.range.start && this.range.end)) {
                this.range.start = date;
                this.range.end = null;
            } else {
                if (date < this.range.start) {
                    this.range.end = this.range.start;
                    this.range.start = date;
                } else {
                    this.range.end = date;
                }
            }
        }
        
        // In docked mode, selection is committed immediately
        if(this.options.type === 'docked') {
             this._commit(true);
        }
        
        this._render();
    }
    
    _handleMonthClick(target) {
        this.viewDate.setMonth(parseInt(target.dataset.month, 10));
        this.view = 'day';
        this._render();
    }
    
    _handleYearClick(target) {
        this.viewDate.setFullYear(parseInt(target.dataset.year, 10));
        this.view = 'month';
        this._render();
    }

    _handleKeydown(e) {
        if (e.key === 'Escape') {
            this.close(false);
        }
    }
    
    _handleOutsideClick(e) {
        if (this.isInternalClick) {
            this.isInternalClick = false;
            return;
        }

        if (this.isOpen && 
            !this.pickerContainer.contains(e.target) && 
            !this.triggerElement.contains(e.target)) {
            this.close(false);
        }
    }
}

// Static property to track the active modal instance
DatePicker.activeInstance = null;


/* ---------------------------------- */
/* --- Initialization Example --- */
/* ---------------------------------- */
/*
document.addEventListener('DOMContentLoaded', () => {
    // Init Modal Pickers
    const singlePickerTrigger = document.getElementById('trigger-single');
    if (singlePickerTrigger) {
        new DatePicker(singlePickerTrigger, { 
            type: 'dialog', 
            mode: 'single' 
        });
        
        singlePickerTrigger.addEventListener('datechange', (e) => {
            console.log('Single picker changed:', e.detail.selectedDate);
            // Update your UI, e.g.:
            // document.getElementById('result-single').textContent = e.detail.selectedDate.toLocaleDateString();
        });
    }
    
    const rangePickerTrigger = document.getElementById('trigger-range');
    if(rangePickerTrigger) {
        new DatePicker(rangePickerTrigger, { 
            type: 'dialog', 
            mode: 'range' 
        });
        
        rangePickerTrigger.addEventListener('datechange', (e) => {
            console.log('Range picker changed:', e.detail.range);
        });
    }
    
    // Init and auto-open Docked Picker
    const dockedWrapper = document.getElementById('docked-picker-wrapper');
    if(dockedWrapper) {
        const dockedPicker = new DatePicker(dockedWrapper, { 
            type: 'docked', 
            mode: 'single' 
        });
        dockedPicker.open(); // Docked pickers must be opened manually
        
        dockedWrapper.addEventListener('datechange', (e) => {
            console.log('Docked picker changed:', e.detail.selectedDate);
        });
    }
});
*/
```

#### Implementation Note: Preventing Premature Closing

A common implementation bug can cause the picker to close immediately upon date selection. This happens if the JavaScript re-renders the calendar grid, removing the clicked element from the DOM before the click event finishes propagating. A subsequent "outside click" check would then incorrectly determine the click originated outside the component.

To prevent this, the JavaScript logic **must** use a mechanism, such as a temporary flag, to identify when a click originates from within the picker's interactive grid, ensuring the "outside click" handler ignores it.

---

## Dialog Component

Dialogs provide important prompts in a user flow. They appear in front of app content to provide critical information, ask for a decision, or facilitate a multi-step task. Dialogs are purposefully interruptive and should be used sparingly.

### Key Principles:
* **Interruptive by Design**: Dialogs disable all other app functionality when they appear and remain on screen until a required action is taken, the user confirms a choice, or they explicitly dismiss the dialog.
* **Focused Task**: A dialog should be dedicated to a single task (e.g., confirming a deletion, choosing a setting). Avoid over-complicating dialogs with multiple, unrelated tasks.
* **Use Sparingly**: For less critical information or actions that don't need to halt the user's workflow, consider less disruptive components like Snackbars or Menus.

---
### Anatomy

A dialog is composed of several key parts, some of which are optional depending on the context.

1.  **Container**: The main surface that holds all other dialog elements. It uses `md.sys.color.surface-container-high` for its fill and `md.sys.elevation.level3` for its shadow.
2.  **Icon (Optional)**: An icon can be displayed at the top to quickly communicate the dialog's purpose (e.g., a warning or help icon). It uses `md.sys.color.secondary`.
3.  **Headline**: A brief title that clearly states the dialog's purpose. It uses the `headline-small` typescale. The headline **must not** have any extra margins or borders.
4.  **Supporting Text**: The body content of the dialog. It provides additional details, asks a question, or presents information. It uses the `body-medium` typescale. Other content types such as list-tiems can accompany the supporting text area.
5.  **Actions**: A set of buttons, typically Text Buttons, that allow the user to respond to the dialog. Common actions include "OK," "Cancel," "Save," or "Disagree." Actions are typically aligned to the end (right side) of the dialog.

---
### Behavior

* **Modality**: When a dialog is open, it should be accompanied by a **scrim** that covers the rest of the UI. This scrim prevents interaction with the background content and reinforces the modal nature of the dialog. The scrim uses `md.sys.color.scrim` with an opacity of `32%`.
* **Visibility & Animation**: Dialogs should enter and exit the screen with a subtle fade and scale transition to feel fluid and non-jarring.
* **Closing a Dialog**: A dialog must remain on screen until one of the following occurs:
    * The user clicks a **confirming action** (e.g., "OK," "Save").
    * The user clicks a **dismissive action** (e.g., "Cancel," "Dismiss").
    * The user clicks the **scrim** area outside the dialog.
    * The user presses the `Escape` key.

---
### Variants

#### Basic Dialog
The standard modal dialog used for alerts, confirmations, and simple choices. Its size is determined by its content, up to a maximum width to ensure readability on larger screens.

#### Full-Screen Dialog
Used for complex tasks that benefit from more screen space, such as filling out a form or editing content.
* It covers the entire viewport.
* It includes a **Top Bar** with a mandatory "Close" action (typically an 'X' icon button) and an optional confirming action (like a "Save" text button).

---
### Accessibility

* **Focus Management**: When a dialog opens, focus must be programmatically moved to the first interactive element within it (usually the first action button). When the dialog closes, focus must return to the element that originally triggered it.
* **Keyboard Navigation**: Users must be able to navigate between all interactive elements within the dialog using the `Tab` key and activate them with `Enter` or `Space`.
* **ARIA Roles**:
    * The dialog container should have `role="dialog"` and `aria-modal="true"`.
    * The headline should be associated with the container via `aria-labelledby`.

---

### Dialog Component - Tokens

---

**Token Set**: `md.comp.dialog`

### Color Tokens

* **Enabled**
    * `with-divider.divider.color`: `md.comp.dialog.with-divider.divider.color` = `md.sys.color.outline`
    * `with-icon.icon.color`: `md.comp.dialog.with-icon.icon.color` = `md.sys.color.secondary`
    * `container.color`: `md.comp.dialog.container.color` = `md.sys.color.surface`
    * `headline.color`: `md.comp.dialog.headline.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.dialog.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `action.label-text.color`: `md.comp.dialog.action.label-text.color` = `md.sys.color.primary`

* **Hover**
    * `action.hover.state-layer.color`: `md.comp.dialog.action.hover.state-layer.color` = `md.sys.color.primary`
    * `action.hover.state-layer.opacity`: `md.comp.dialog.action.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `action.hover.label-text.color`: `md.comp.dialog.action.hover.label-text.color` = `md.sys.color.primary`

* **Focus**
    * `action.focus.state-layer.color`: `md.comp.dialog.action.focus.state-layer.color` = `md.sys.color.primary`
    * `action.focus.state-layer.opacity`: `md.comp.dialog.action.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `action.focus.label-text.color`: `md.comp.dialog.action.focus.label-text.color` = `md.sys.color.primary`

* **Pressed (Ripple)**
    * `action.pressed.state-layer.color`: `md.comp.dialog.action.pressed.state-layer.color` = `md.sys.color.primary`
    * `action.pressed.state-layer.opacity`: `md.comp.dialog.action.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `action.pressed.label-text.color`: `md.comp.dialog.action.pressed.label-text.color` = `md.sys.color.primary`

---

### Elevation
* `container.elevation`: `md.comp.dialog.container.elevation` = `md.sys.elevation.level3`

---

### Shape
* `container.shape`: `md.comp.dialog.container.shape` = `md.sys.shape.corner.extra-large`

---

### Size
* `with-divider.divider.height`: `md.comp.dialog.with-divider.divider.height` = `1dp`
* `with-icon.icon.size`: `md.comp.dialog.with-icon.icon.size` = `24dp`

---

### Typography
* `headline.font`: `md.comp.dialog.headline.font` = `md.sys.typescale.headline-small`
* `supporting-text.font`: `md.comp.dialog.supporting-text.font` = `md.sys.typescale.body-medium`
* `action.label-text.font`: `md.comp.dialog.action.label-text.font` = `md.sys.typescale.label-large`

---

### Layout
* `leading-space`: `md.comp.dialog.leading-space` = `24dp`
* `trailing-space`: `md.comp.dialog.trailing-space` = `24dp`
* `top-space`: `md.comp.dialog.top-space` = `24dp`
* `bottom-space`: `md.comp.dialog.bottom-space` = `24dp`
* `action.between-actions-space`: `md.comp.dialog.action.between-actions-space` = `8dp`
* `headline-supporting-text-space`: `md.comp.dialog.headline-supporting-text-space` = `16dp`
* `icon-headline-space`: `md.comp.dialog.icon-headline-space` = `16dp`
* `supporting-text-action-space`: `md.comp.dialog.supporting-text-action-space` = `24dp`

---

### Dialog Component - Code Samples & Implementation

**Implementation Guide:**

  * **Triggering Dialogs:** To open a dialog, a trigger element (like a button) must have the `data-dialog-trigger="your-dialog-id"` attribute, where the value matches the `id` of the dialog container.
  * **Closing Dialogs:** Any button inside a dialog that should close it needs the `data-close` attribute. The dialog can also be closed by clicking the scrim or pressing the `Escape` key.
  * **Scrim:** A single scrim element (`<div id="dialog-scrim" class="scrim"></div>`) should be placed in the HTML, typically before the dialog containers. It will be shared by all dialogs on the page.
  * **JavaScript:** The provided JavaScript is **required** for the component to function. It handles opening, closing, focus management, and the scrim overlay.
  * **Ripple Effect:** The `.genux-ripple` class can be added to any button to enable the Material ripple effect on click.

```css
/* --- Scrim (Overlay) --- */
.scrim {
    position: fixed;
    inset: 0;
    background-color: var(--md-sys-color-scrim);
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    pointer-events: none;
    z-index: 1000;
}
.scrim.visible {
    opacity: 0.32;
    pointer-events: auto;
}

/* --- Base Dialog Styles --- */
.dialog-container {
    background-color: var(--md-sys-color-surface-container-high);
    border-radius: var(--md-sys-shape-corner-extra-large);
    box-shadow: var(--md-sys-elevation-level3-shadow);
    padding: 24px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0;
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
    pointer-events: none;
    z-index: 1001;
    width: calc(100% - 32px);
    max-width: 560px;
    display: flex;
    flex-direction: column;
}
.dialog-container.visible {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    pointer-events: auto;
}
.dialog-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.dialog-header .icon {
    color: var(--md-sys-color-secondary);
    font-size: 24px;
    margin-bottom: 16px;
}
.dialog-headline {
    font-family: var(--md-sys-typescale-headline-small-font);
    font-size: var(--md-sys-typescale-headline-small-size);
    font-weight: var(--md-sys-typescale-headline-small-weight);
    line-height: var(--md-sys-typescale-headline-small-line-height);
    color: var(--md-sys-color-on-surface);
    margin: 0;
}
.dialog-supporting-text {
    font-family: var(--md-sys-typescale-body-medium-font);
    font-size: var(--md-sys-typescale-body-medium-size);
    font-weight: var(--md-sys-typescale-body-medium-weight);
    line-height: var(--md-sys-typescale-body-medium-line-height);
    color: var(--md-sys-color-on-surface-variant);
    margin: 16px 0 0;
}
.dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 24px;
}

/* --- Full-screen Dialog Variant --- */
.dialog-container.full-screen {
    width: 100%;
    height: 100%;
    max-width: none;
    top: 0;
    left: 0;
    border-radius: 0;
    transform: translateY(100%);
    transition: transform 300ms ease-in-out;
    padding: 0;
    background-color: var(--md-sys-color-surface);
}
.dialog-container.full-screen.visible {
    transform: translateY(0);
}
.dialog-container.full-screen .dialog-top-bar {
    display: flex;
    align-items: center;
    padding: 8px 4px 8px 16px;
    border-bottom: 1px solid var(--md-sys-color-outline-variant);
    height: 64px;
    flex-shrink: 0;
    box-sizing: border-box;
}
.dialog-top-bar .title {
    font-family: var(--md-sys-typescale-title-large-font);
    font-size: var(--md-sys-typescale-title-large-size);
    color: var(--md-sys-color-on-surface);
    margin-left: 16px;
    flex-grow: 1;
}
.dialog-content {
    padding: 24px;
    flex-grow: 1;
    overflow-y: auto;
}
```

```html
<button class="button filled genux-ripple" data-dialog-trigger="basic-dialog">
    <span>Open Basic Dialog</span>
</button>
<button class="button filled genux-ripple" data-dialog-trigger="icon-dialog">
    <span>Open Dialog with Icon</span>
</button>
<button class="button filled genux-ripple" data-dialog-trigger="fullscreen-dialog">
    <span>Open Full-Screen Dialog</span>
</button>

<div id="dialog-scrim" class="scrim"></div>

<div id="basic-dialog" class="dialog-container" role="dialog" aria-modal="true" aria-labelledby="basic-headline">
    <div class="dialog-header">
        <h2 id="basic-headline" class="dialog-headline">Basic Dialog Title</h2>
    </div>
    <p class="dialog-supporting-text">A dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.</p>
    <div class="dialog-actions">
        <button class="button text genux-ripple" data-close><span>Cancel</span></button>
        <button class="button text genux-ripple" data-close><span>OK</span></button>
    </div>
</div>

<div id="icon-dialog" class="dialog-container" role="dialog" aria-modal="true" aria-labelledby="icon-headline">
    <div class="dialog-header">
        <span class="icon material-symbols-outlined">help_outline</span>
        <h2 id="icon-headline" class="dialog-headline">Need Help?</h2>
    </div>
    <p class="dialog-supporting-text">The leading icon helps to quickly convey the dialog's purpose. This dialog also demonstrates how content can scroll if it's too long.</p>
    <div class="dialog-actions">
        <button class="button text genux-ripple" data-close><span>Dismiss</span></button>
        <button class="button text genux-ripple" data-close><span>Learn More</span></button>
    </div>
</div>

<div id="fullscreen-dialog" class="dialog-container full-screen" role="dialog" aria-modal="true" aria-labelledby="fullscreen-title">
    <div class="dialog-top-bar">
        <button class="button text icon-button genux-ripple" data-close aria-label="Close">
            <span class="material-symbols-outlined">close</span>
        </button>
        <h2 id="fullscreen-title" class="title dialog-headline">Full-screen Dialog</h2>
        <button class="button text genux-ripple" data-close><span>Save</span></button>
    </div>
    <div class="dialog-content">
        <p>This dialog takes over the full screen and is suitable for more complex tasks, like filling out a form or editing content.</p>
    </div>
</div>
```

### Required JavaScript

This script handles all dynamic behavior for the dialogs, including opening/closing, scrim visibility, accessibility focus management, and the ripple effect on buttons. It should be placed before the closing `</body>` tag.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const scrim = document.getElementById('dialog-scrim');
    let lastFocusedElement = null;

    // --- Open Dialog Logic ---
    document.querySelectorAll('[data-dialog-trigger]').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const dialogId = trigger.dataset.dialogTrigger;
            const dialog = document.getElementById(dialogId);
            if (dialog) {
                lastFocusedElement = document.activeElement;
                scrim.classList.add('visible');
                dialog.classList.add('visible');
                
                // Focus the first interactive element in the dialog
                const firstFocusable = dialog.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if(firstFocusable) firstFocusable.focus();
            }
        });
    });

    // --- Close Dialog Logic ---
    const closeDialog = (dialog) => {
        if (dialog) {
            dialog.classList.remove('visible');
            scrim.classList.remove('visible');
            if (lastFocusedElement) {
                lastFocusedElement.focus();
            }
        }
    };
    
    document.querySelectorAll('[data-close]').forEach(button => {
        button.addEventListener('click', (e) => {
            const dialog = e.target.closest('.dialog-container');
            closeDialog(dialog);
        });
    });

    scrim.addEventListener('click', () => {
        document.querySelectorAll('.dialog-container.visible').forEach(closeDialog);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.dialog-container.visible').forEach(closeDialog);
        }
    });

    // --- Ripple Effect Logic ---
    document.addEventListener('click', function (e) {
        const target = e.target.closest('.genux-ripple');
        if (!target) return;

        const existingRipples = target.querySelectorAll('.ripple-effect');
        existingRipples.forEach(ripple => ripple.remove());

        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;
        const rect = target.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-effect');

        target.appendChild(circle);

        circle.addEventListener('animationend', () => {
            circle.remove();
        }, { once: true });
    });
});
```

-----

## Divider Component

*(Dividers are static visual elements and do not typically have interactive states like Hover, Focus, or Pressed. Interaction states apply to the *elements* that the divider helps to group or separate.)*

*   Dividers are thin lines that visually group content in lists or other containers. They are used to group elements that are related to each other from an interaction perspective or to separate larger sections of unrelated content.
*   Dividers make content visible but not bold. Use them only if items can’t be grouped sufficiently with open space alone.
*   They can be used to imply nested parent/child relationships.
*   Dividers can also separate interactive areas from non-interactive areas.
*   If both types of dividers (Full width and Inset) are used in a UI, they must reinforce the hierarchy of information: use full-width for sections and inset for nested content items.
*   Dividers should NEVER use the `outline` color role and ALWAYS use lighter (more subtle) `outline-light` color role.

### Types

*   **Full width**: Use to separate larger sections of unrelated content. Can be used directly on a surface or inside other components like cards or lists.
*   **Inset**: Use to separate *related* content within a section. Inset dividers are typically equally indented from both sides of the screen.

*(Note: The base tokens below apply to the visual line properties, and implementation determines if they are rendered as "Full width" or "Inset" based on layout/padding.)*

### Divider Component - Tokens

---

**Token Set**: `md.comp.divider`

### Color Tokens
* **Enabled**
    * `color`: `md.comp.divider.color` = `md.sys.color.outline-variant`

### Size Tokens
* **Enabled**
    * `thickness`: `md.comp.divider.thickness` = `1dp`

---

### Divider Component - Code Samples & Implementation

This section provides the necessary HTML and CSS to correctly implement the Divider component in both its **full-width** and **inset** variants.


#### 1. CSS Implementation
```css
/*
 * Material Design Divider Component Styles
 * This CSS is required to correctly render full-width and inset dividers.
 */

:root {
    /* Divider Tokens */
    --md-comp-divider-color: var(--md-sys-color-outline-variant, #C4C7C5);
    --md-comp-divider-thickness: 1px;
    --md-comp-divider-with-inset-leading-space: 16px;
    --md-comp-divider-with-inset-trailing-space: 16px;
}

/* Base Divider Style */
.divider {
    /* Reset default <hr> styles */
    border: none;
    margin: 0;

    /* Apply Material tokens */
    height: var(--md-comp-divider-thickness);
    background-color: var(--md-comp-divider-color);
}

/* Inset Variant */
.divider.inset {
    margin-left: var(--md-comp-divider-with-inset-leading-space);
    margin-right: var(--md-comp-divider-with-inset-trailing-space);
}

/* * Supporting styles for demonstration context (e.g., list items).
 * These are not part of the core divider component itself.
 */
.list-container {
    padding: 8px 0;
}
.list-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
}
```

#### 2. HTML Structure
Dividers are best represented using the semantic `<hr>` element. A base class of `.divider` should be applied, with an additional `.inset` class for the inset variant. They are typically used within lists or between distinct sections of content.

```html
<div class="list-container">
  <div class="list-item">
    <span class="material-symbols-outlined">inbox</span>
    <span>Inbox</span>
  </div>
  
  <hr class="divider">
  
  <div class="list-item">
    <span class="material-symbols-outlined">send</span>
    <span>Outbox</span>
  </div>
  
  <hr class="divider inset">
  
  <div class="list-item">
    <span class="material-symbols-outlined">delete</span>
    <span>Trash</span>
  </div>
</div>

<div>
    <p>This is the first section of content.</p>
    <hr class="divider">
    <p>This is the second section of content.</p>
</div>
```

---

## Floating Action Button (FAB) Component

* A floating action button (FAB) represents the most important action on a screen. It puts key actions within reach, appearing in front of all screen content and floating above the UI.
* Use a FAB for a positive action like create, favorite, share, or start a process. To maintain a clear focus, there should only be **one FAB per screen**.
* Use the **Extended FAB** variant larger window class sizes.

### Guidelines

* **Color Role Usage**: The emphasis of a FAB is determined by its color role.
    * **Standard Emphasis**: Use a `*-container` color role (e.g., `md.sys.color.primary-container`). This is the default for most use cases.
    * **High Emphasis**: Use a main color role (e.g., `md.sys.color.primary`). This should be reserved for actions that require maximum prominence.
* **Icon Style**: Icons used within a FAB **must** be the "filled" variant. This can be achieved by applying the CSS `font-variation-settings: 'FILL' 1;`.
* **Accessibility**: All FABs must have a descriptive `aria-label` to announce their purpose to screen reader users (e.g., `<button ... aria-label='Compose new email'>`). For Extended FABs, the visible text label serves this purpose.
* **Variants & Sizes**: FABs come in 3 different sizes (default, medium, large) and an extended variant that includes a text label.
* **Alignment**: Extended FAB icon and label should always be vertically middle-aligned.

### Floating Action Button (FAB) Component - Tokens

---

### Color Tokens

#### Filled Variants

**Token Set**: `md.comp.fab.primary`

##### **Primary**

* **Enabled**
    * `container.color`: `md.comp.fab.primary.container.color` = `md.sys.color.primary`
    * `container.shadow-color`: `md.comp.fab.primary.container.shadow-color` = `md.sys.color.shadow`
    * `container.elevation`: `md.comp.fab.primary.container.elevation` = `md.sys.elevation.level3`
    * `icon.color`: `md.comp.fab.primary.icon.color` = `md.sys.color.on-primary`

* **Hovered**
    * `container.elevation`: `md.comp.fab.primary.hovered.container.elevation` = `md.sys.elevation.level4`
    * `state-layer.color`: `md.comp.fab.primary.hovered.state-layer.color` = `md.sys.color.on-primary`
    * `state-layer.opacity`: `md.comp.fab.primary.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `icon.color`: `md.comp.fab.primary.hovered.icon.color` = `md.sys.color.on-primary`

* **Focused**
    * `container.elevation`: `md.comp.fab.primary.focused.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.primary.focused.state-layer.color` = `md.sys.color.on-primary`
    * `state-layer.opacity`: `md.comp.fab.primary.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `icon.color`: `md.comp.fab.primary.focused.icon.color` = `md.sys.color.on-primary`

* **Pressed**
    * `container.elevation`: `md.comp.fab.primary.pressed.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.primary.pressed.state-layer.color` = `md.sys.color.on-primary`
    * `state-layer.opacity`: `md.comp.fab.primary.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `icon.color`: `md.comp.fab.primary.pressed.icon.color` = `md.sys.color.on-primary`

##### **Secondary**

**Token Set**: `md.comp.fab.secondary`

* **Enabled**
    * `container.color`: `md.comp.fab.secondary.container.color` = `md.sys.color.secondary`
    * `container.shadow-color`: `md.comp.fab.secondary.container.shadow-color` = `md.sys.color.shadow`
    * `container.elevation`: `md.comp.fab.secondary.container.elevation` = `md.sys.elevation.level3`
    * `icon.color`: `md.comp.fab.secondary.icon.color` = `md.sys.color.on-secondary`

* **Hovered**
    * `container.elevation`: `md.comp.fab.secondary.hovered.container.elevation` = `md.sys.elevation.level4`
    * `state-layer.color`: `md.comp.fab.secondary.hovered.state-layer.color` = `md.sys.color.on-secondary`
    * `state-layer.opacity`: `md.comp.fab.secondary.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `icon.color`: `md.comp.fab.secondary.hovered.icon.color` = `md.sys.color.on-secondary`

* **Focused**
    * `container.elevation`: `md.comp.fab.secondary.focused.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.secondary.focused.state-layer.color` = `md.sys.color.on-secondary`
    * `state-layer.opacity`: `md.comp.fab.secondary.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `icon.color`: `md.comp.fab.secondary.focused.icon.color` = `md.sys.color.on-secondary`

* **Pressed**
    * `container.elevation`: `md.comp.fab.secondary.pressed.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.secondary.pressed.state-layer.color` = `md.sys.color.on-secondary`
    * `state-layer.opacity`: `md.comp.fab.secondary.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `icon.color`: `md.comp.fab.secondary.pressed.icon.color` = `md.sys.color.on-secondary`

##### **Tertiary**

**Token Set**: `md.comp.fab.tertiary`

* **Enabled**
    * `container.color`: `md.comp.fab.tertiary.container.color` = `md.sys.color.tertiary`
    * `container.shadow-color`: `md.comp.fab.tertiary.container.shadow-color` = `md.sys.color.shadow`
    * `container.elevation`: `md.comp.fab.tertiary.container.elevation` = `md.sys.elevation.level3`
    * `icon.color`: `md.comp.fab.tertiary.icon.color` = `md.sys.color.on-tertiary`

* **Hovered**
    * `container.elevation`: `md.comp.fab.tertiary.hovered.container.elevation` = `md.sys.elevation.level4`
    * `state-layer.color`: `md.comp.fab.tertiary.hovered.state-layer.color` = `md.sys.color.on-tertiary`
    * `state-layer.opacity`: `md.comp.fab.tertiary.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `icon.color`: `md.comp.fab.tertiary.hovered.icon.color` = `md.sys.color.on-tertiary`

* **Focused**
    * `container.elevation`: `md.comp.fab.tertiary.focused.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.tertiary.focused.state-layer.color` = `md.sys.color.on-tertiary`
    * `state-layer.opacity`: `md.comp.fab.tertiary.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `icon.color`: `md.comp.fab.tertiary.focused.icon.color` = `md.sys.color.on-tertiary`

* **Pressed**
    * `container.elevation`: `md.comp.fab.tertiary.pressed.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.tertiary.pressed.state-layer.color` = `md.sys.color.on-tertiary`
    * `state-layer.opacity`: `md.comp.fab.tertiary.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `icon.color`: `md.comp.fab.tertiary.pressed.icon.color` = `md.sys.color.on-tertiary`

---

#### Tonal Variants

##### **Primary**

**Token Set**: `md.comp.fab.primary-container`

* **Enabled**
    * `container.color`: `md.comp.fab.primary-container.container.color` = `md.sys.color.primary-container`
    * `container.shadow-color`: `md.comp.fab.primary-container.container.shadow-color` = `md.sys.color.shadow`
    * `container.elevation`: `md.comp.fab.primary-container.container.elevation` = `md.sys.elevation.level3`
    * `icon.color`: `md.comp.fab.primary-container.icon.color` = `md.sys.color.on-primary-container`

* **Hovered**
    * `container.elevation`: `md.comp.fab.primary-container.hovered.container.elevation` = `md.sys.elevation.level4`
    * `state-layer.color`: `md.comp.fab.primary-container.hovered.state-layer.color` = `md.sys.color.on-primary-container`
    * `state-layer.opacity`: `md.comp.fab.primary-container.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `icon.color`: `md.comp.fab.primary-container.hovered.icon.color` = `md.sys.color.on-primary-container`

* **Focused**
    * `container.elevation`: `md.comp.fab.primary-container.focused.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.primary-container.focused.state-layer.color` = `md.sys.color.on-primary-container`
    * `state-layer.opacity`: `md.comp.fab.primary-container.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `icon.color`: `md.comp.fab.primary-container.focused.icon.color` = `md.sys.color.on-primary-container`

* **Pressed**
    * `container.elevation`: `md.comp.fab.primary-container.pressed.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.primary-container.pressed.state-layer.color` = `md.sys.color.on-primary-container`
    * `state-layer.opacity`: `md.comp.fab.primary-container.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `icon.color`: `md.comp.fab.primary-container.pressed.icon.color` = `md.sys.color.on-primary-container`

##### **Secondary**

**Token Set**: `md.comp.fab.secondary-container`

* **Enabled**
    * `container.color`: `md.comp.fab.secondary-container.container.color` = `md.sys.color.secondary-container`
    * `container.shadow-color`: `md.comp.fab.secondary-container.container.shadow-color` = `md.sys.color.shadow`
    * `container.elevation`: `md.comp.fab.secondary-container.container.elevation` = `md.sys.elevation.level3`
    * `icon.color`: `md.comp.fab.secondary-container.icon.color` = `md.sys.color.on-secondary-container`

* **Hovered**
    * `container.elevation`: `md.comp.fab.secondary-container.hovered.container.elevation` = `md.sys.elevation.level4`
    * `state-layer.color`: `md.comp.fab.secondary-container.hovered.state-layer.color` = `md.sys.color.on-secondary-container`
    * `state-layer.opacity`: `md.comp.fab.secondary-container.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `icon.color`: `md.comp.fab.secondary-container.hovered.icon.color` = `md.sys.color.on-secondary-container`

* **Focused**
    * `container.elevation`: `md.comp.fab.secondary-container.focused.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.secondary-container.focused.state-layer.color` = `md.sys.color.on-secondary-container`
    * `state-layer.opacity`: `md.comp.fab.secondary-container.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `icon.color`: `md.comp.fab.secondary-container.focused.icon.color` = `md.sys.color.on-secondary-container`

* **Pressed**
    * `container.elevation`: `md.comp.fab.secondary-container.pressed.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.secondary-container.pressed.state-layer.color` = `md.sys.color.on-secondary-container`
    * `state-layer.opacity`: `md.comp.fab.secondary-container.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `icon.color`: `md.comp.fab.secondary-container.pressed.icon.color` = `md.sys.color.on-secondary-container`

##### **Tertiary**

**Token Set**: `md.comp.fab.tertiary-container`

* **Enabled**
    * `container.color`: `md.comp.fab.tertiary-container.container.color` = `md.sys.color.tertiary-container`
    * `container.shadow-color`: `md.comp.fab.tertiary-container.container.shadow-color` = `md.sys.color.shadow`
    * `container.elevation`: `md.comp.fab.tertiary-container.container.elevation` = `md.sys.elevation.level3`
    * `icon.color`: `md.comp.fab.tertiary-container.icon.color` = `md.sys.color.on-tertiary-container`

* **Hovered**
    * `container.elevation`: `md.comp.fab.tertiary-container.hovered.container.elevation` = `md.sys.elevation.level4`
    * `state-layer.color`: `md.comp.fab.tertiary-container.hovered.state-layer.color` = `md.sys.color.on-tertiary-container`
    * `state-layer.opacity`: `md.comp.fab.tertiary-container.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `icon.color`: `md.comp.fab.tertiary-container.hovered.icon.color` = `md.sys.color.on-tertiary-container`

* **Focused**
    * `container.elevation`: `md.comp.fab.tertiary-container.focused.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.tertiary-container.focused.state-layer.color` = `md.sys.color.on-tertiary-container`
    * `state-layer.opacity`: `md.comp.fab.tertiary-container.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `icon.color`: `md.comp.fab.tertiary-container.focused.icon.color` = `md.sys.color.on-tertiary-container`

* **Pressed**
    * `container.elevation`: `md.comp.fab.tertiary-container.pressed.container.elevation` = `md.sys.elevation.level3`
    * `state-layer.color`: `md.comp.fab.tertiary-container.pressed.state-layer.color` = `md.sys.color.on-tertiary-container`
    * `state-layer.opacity`: `md.comp.fab.tertiary-container.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `icon.color`: `md.comp.fab.tertiary-container.pressed.icon.color` = `md.sys.color.on-tertiary-container`

---

### Size & Layout Tokens

#### FAB Default

**Token Set**: `md.comp.fab`

* **Default**
* `container.height`: `md.comp.fab.container.height` = `56dp`
* `container.width`: `md.comp.fab.container.width` = `56dp`
* `container.shape`: `md.comp.fab.container.shape` = `md.sys.shape.corner.large`
* `icon.size`: `md.comp.fab.icon.size` = `24dp`

#### FAB Medium

**Token Set**: `md.comp.fab.medium`

* `container.height`: `md.comp.fab.medium.container.height` = `80dp`
* `container.width`: `md.comp.fab.medium.container.width` = `80dp`
* `container.shape`: `md.comp.fab.medium.container.shape` = `md.sys.shape.corner.large-increased`
* `icon.size`: `md.comp.fab.medium.icon.size` = `28dp`

#### FAB Large

**Token Set**: `md.comp.fab.large`

* `container.height`: `md.comp.fab.large.container.height` = `96dp`
* `container.width`: `md.comp.fab.large.container.width` = `96dp`
* `container.shape`: `md.comp.fab.large.container.shape` = `md.sys.shape.corner.extra-large`
* `icon.size`: `md.comp.fab.large.icon.size` = `36dp`

---

#### Extended FAB Small

**Token Set**: `md.comp.extended-fab.small`

* `container.height`: `md.comp.extended-fab.small.container.height` = `56dp`
* `label-text.type`: `md.comp.extended-fab.small.label-text` = `md.sys.typescale.title-medium`
* `icon.size`: `md.comp.extended-fab.small.icon.size` = `24dp`
* `container.shape`: `md.comp.extended-fab.small.container.shape` = `md.sys.shape.corner.large`
* `leading-space`: `md.comp.extended-fab.small.leading-space` = `16dp`
* `icon-label-space`: `md.comp.extended-fab.small.icon-label-space` = `8dp`
* `trailing-space`: `md.comp.extended-fab.small.trailing-space` = `16dp`

#### Extended FAB Medium

**Token Set**: `md.comp.extended-fab.medium`

* `container.height`: `md.comp.extended-fab.medium.container.height` = `80dp`
* `label-text.type`: `md.comp.extended-fab.medium.label-text` = `md.sys.typescale.title-large`
* `icon.size`: `md.comp.extended-fab.medium.icon.size` = `28dp`
* `container.shape`: `md.comp.extended-fab.medium.container.shape` = `md.sys.shape.corner.large-increased`
* `leading-space`: `md.comp.extended-fab.medium.leading-space` = `26dp`
* `icon-label-space`: `md.comp.extended-fab.medium.icon-label-space` = `12dp`
* `trailing-space`: `md.comp.extended-fab.medium.trailing-space` = `26dp`

#### Extended FAB Large

**Token Set**: `md.comp.extended-fab.large`

* `container.height`: `md.comp.extended-fab.large.container.height` = `96dp`
* `label-text.type`: `md.comp.extended-fab.large.label-text` = `mmd.sys.typescale.headline-small`
* `icon.size`: `md.comp.extended-fab.large.icon.size` = `36dp`
* `container.shape`: `md.comp.extended-fab.large.container.shape` = `md.sys.shape.corner.extra-large`
* `leading-space`: `md.comp.extended-fab.large.leading-space` = `28dp`
* `icon-label-space`: `md.comp.extended-fab.large.icon-label-space` = `16dp`
* `trailing-space`: `md.comp.extended-fab.large.trailing-space` = `28dp`

---

### Floating Action Button (FAB) Component - Code Samples & Implementation

```css
/* -------------------------------------- */
/* --- Floating Action Button (FAB) --- */
/* -------------------------------------- */
.fab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    text-decoration: none;
    flex-shrink: 0;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 280ms ease;
    box-shadow: var(--md-sys-elevation-level3-shadow);
}

/* --- Sizing Rules --- */
.fab:not(.medium):not(.large):not(.extended) {
    width: 56px;
    height: 56px;
    border-radius: var(--md-sys-shape-corner-large);
}
.fab:not(.medium):not(.large):not(.extended) .material-symbols-outlined {
    font-size: 24px;
}
.fab.medium:not(.extended) {
    width: 80px;
    height: 80px;
    border-radius: 20px; /* md.comp.fab.medium.container.shape */
}
.fab.medium:not(.extended) .material-symbols-outlined {
    font-size: 28px;
}
.fab.large:not(.extended) {
    width: 96px;
    height: 96px;
    border-radius: var(--md-sys-shape-corner-extra-large);
}
.fab.large:not(.extended) .material-symbols-outlined {
    font-size: 36px;
}

/* --- Extended FAB Variant --- */
.fab.extended {
    width: auto;
    height: 56px;
    padding: 0 16px;
    gap: 8px;
    border-radius: var(--md-sys-shape-corner-large);
}
.fab.extended .label {
    font-family: var(--md-sys-typescale-label-large-font-family);
    font-size: var(--md-sys-typescale-label-large-font-size);
    font-weight: var(--md-sys-typescale-label-large-font-weight);
    white-space: nowrap;
}
.fab.extended .material-symbols-outlined {
    font-size: 24px;
}
.fab.extended.large {
    height: 96px;
    padding: 0 28px;
    gap: 16px;
    border-radius: var(--md-sys-shape-corner-extra-large);
}
.fab.extended.large .material-symbols-outlined {
    font-size: 36px;
}
.fab.extended.large .label {
    font-family: var(--md-sys-typescale-headline-small-font-family);
    font-size: var(--md-sys-typescale-headline-small-font-size);
    font-weight: var(--md-sys-typescale-headline-small-font-weight);
}

/* --- Color Variants --- */
.fab.primary-container-color {
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
    --genux-press-color-rgb: var(--md-sys-color-on-primary-container-rgb);
}
.fab.secondary-container-color {
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
    --genux-press-color-rgb: var(--md-sys-color-on-secondary-container-rgb);
}
.fab.tertiary-container-color {
    background-color: var(--md-sys-color-tertiary-container);
    color: var(--md-sys-color-on-tertiary-container);
    --genux-press-color-rgb: var(--md-sys-color-on-tertiary-container-rgb);
}
.fab.primary-color {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    --genux-press-color-rgb: var(--md-sys-color-on-primary-rgb);
}
.fab.secondary-color {
    background-color: var(--md-sys-color-secondary);
    color: var(--md-sys-color-on-secondary);
    --genux-press-color-rgb: var(--md-sys-color-on-secondary-rgb);
}
.fab.tertiary-color {
    background-color: var(--md-sys-color-tertiary);
    color: var(--md-sys-color-on-tertiary);
    --genux-press-color-rgb: var(--md-sys-color-on-tertiary-rgb);
}

/* --- Interaction States --- */
.fab:hover {
    box-shadow: var(--md-sys-elevation-level4-shadow);
}
.fab:active {
    box-shadow: var(--md-sys-elevation-level3-shadow);
}
```

```html
<button class="fab primary-container-color genux-ripple" aria-label="Edit">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">edit</span>
</button>
<button class="fab secondary-container-color genux-ripple" aria-label="Edit">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">edit</span>
</button>
<button class="fab tertiary-container-color genux-ripple" aria-label="Edit">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">edit</span>
</button>

<button class="fab primary-color genux-ripple" aria-label="Add">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add</span>
</button>
<button class="fab secondary-color genux-ripple" aria-label="Add">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add</span>
</button>
<button class="fab tertiary-color genux-ripple" aria-label="Add">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add</span>
</button>

<button class="fab primary-container-color genux-ripple" aria-label="Default FAB">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add</span>
</button>
<button class="fab medium primary-container-color genux-ripple" aria-label="Medium FAB">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add</span>
</button>
<button class="fab large primary-container-color genux-ripple" aria-label="Large FAB">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add</span>
</button>

<button class="fab extended primary-container-color genux-ripple">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">refresh</span>
    <span class="label">Refresh</span>
</button>
<button class="fab extended large tertiary-color genux-ripple">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add_shopping_cart</span>
    <span class="label">Add to Cart</span>
</button>
```

---

## Icon Button Component

* **Usage**: Use icon buttons for common, easily understandable actions. They can be placed directly on a surface or within other components like cards and app bars.

* **Types**: There are two types of icon buttons:
    1.  **Default**: Triggers a standard action, like opening a menu.
    2.  **Toggle**: Represents a binary state that can be turned on or off, such as favoriting an item.

* **Configurations**: Icon buttons have extensive configurations for style and emphasis:
    * **Color Styles**: Filled (highest emphasis), Tonal, Outlined, and Standard (lowest emphasis).
    * **Sizes**: Extra Small (32dp), Small (40dp, default), Medium (56dp), Large (96dp), and Extra Large (136dp).
    * **Shapes**: Round (default) and Square.

* **Behavior**:
    * **Icon Styling**: Toggle buttons should use an outlined icon for the unselected state and a filled icon for the selected state. If a filled version is unavailable, the icon weight should increase to semibold or bold on selection.
    * **Shape Morphing**: Toggle icon buttons change shape on interaction. When pressed, they can temporarily become more square. When selected, the resting shape toggles (e.g., a round unselected button becomes a square selected button, and vice-versa).

* **Accessibility**:
    * **Target Size**: The minimum target size for icon buttons must be at least 48x48dp, even for the smaller visual variants.
    * **Contrast**: The icon must have a contrast ratio of at least 3:1 with its background surface.
    * **Labeling**: Icon buttons must have an accessibility label describing their action (e.g., "Add to favorites"). On the web, a tooltip with this label should appear on hover.

### Icon Button Component - Tokens

---

### Base Tokens

**Token Set**: `md.comp.icon-button`

#### Base Size & Layout Tokens

* `container.height`: `md.comp.icon-button.container.height` = `40dp`
* `outlined.outline.width`: `md.comp.icon-button.outlined.outline.width` = `1dp`
* `icon.size`: `md.comp.icon-button.icon.size` = `24dp`
* `narrow.leading-space`: `md.comp.icon-button.narrow.leading-space` = `4dp`
* `narrow.trailing-space`: `md.comp.icon-button.narrow.trailing-space` = `4dp`
* `default.leading-space`: `md.comp.icon-button.default.leading-space` = `8dp`
* `default.trailing-space`: `md.comp.icon-button.default.trailing-space` = `8dp`
* `wide.leading-space`: `md.comp.icon-button.wide.leading-space` = `14dp`
* `wide.trailing-space`: `md.comp.icon-button.wide.trailing-space` = `14dp`

#### Shape Tokens

* `container.shape.round`: `md.comp.icon-button.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.icon-button.container.shape.square` = `md.sys.shape.corner.medium`
* `pressed.container.shape`: `md.comp.icon-button.pressed.container.shape` = `md.sys.shape.corner.small`
* `pressed.container.corner-size.motion.spring.damping`: `md.comp.icon-button.pressed.container.corner-size.motion.spring.damping` = `md.sys.motion.spring.fast.bouncy.damping`
* `pressed.container.corner-size.motion.spring.stiffness`: `md.comp.icon-button.pressed.container.corner-size.motion.spring.stiffness` = `md.sys.motion.spring.fast.bouncy.stiffness`
* `selected.container.shape.round`: `md.comp.icon-button.selected.container.shape.round` = `md.sys.shape.corner.medium`
* `selected.container.shape.square`: `md.comp.icon-button.selected.container.shape.square` = `md.sys.shape.corner.full`

#### Focus Ring Tokens

* `focus.indicator.color`: `md.comp.icon-button.focus.indicator.color` = `md.sys.color.secondary`
* `focus.indicator.thickness`: `md.comp.icon-button.focus.indicator.thickness` = `md.sys.state.focus-indicator.thickness`
* `focus.indicator.outline.offset`: `md.comp.icon-button.focus.indicator.outline.offset` = `md.sys.state.focus-indicator.outer-offset`

---

#### Filled Icon Button

**Token Set**: `md.comp.icon-button.filled`

##### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.icon-button.filled.container.color` = `md.sys.color.primary`
    * `unselected.container.color`: `md.comp.icon-button.filled.unselected.container.color` = `md.sys.color.surface-container`
    * `selected.container.color`: `md.comp.icon-button.filled.selected.container.color` = `md.sys.color.primary`
    * `icon.color`: `md.comp.icon-button.filled.icon.color` = `md.sys.color.on-primary`
    * `unselected.icon.color`: `md.comp.icon-button.filled.unselected.icon.color` = `md.sys.color.on-surface-variant`
    * `selected.icon.color`: `md.comp.icon-button.filled.selected.icon.color` = `md.sys.color.on-primary`
* **Disabled**
    * `disabled.container.color`: `md.comp.icon-button.filled.disabled.container.color` = `md.sys.color.on-surface`
    * `disabled.container.opacity`: `md.comp.icon-button.filled.disabled.container.opacity` = `10%`
    * `disabled.icon.color`: `md.comp.icon-button.filled.disabled.icon.color` = `md.sys.color.on-surface`
    * `disabled.icon.opacity`: `md.comp.icon-button.filled.disabled.icon.opacity` = `38%`
* **Hovered**
    * `hovered.state-layer.color`: `md.comp.icon-button.filled.hovered.state-layer.color` = `md.sys.color.on-primary`
    * `unselected.hovered.state-layer.color`: `md.comp.icon-button.filled.unselected.hovered.state-layer.color` = `md.sys.color.on-surface-variant`
    * `selected.hovered.state-layer.color`: `md.comp.icon-button.filled.selected.hovered.state-layer.color` = `md.sys.color.on-primary`
    * `hovered.state-layer.opacity`: `md.comp.icon-button.filled.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* **Focused**
    * `focused.state-layer.color`: `md.comp.icon-button.filled.focused.state-layer.color` = `md.sys.color.on-primary`
    * `unselected.focused.state-layer.color`: `md.comp.icon-button.filled.unselected.focused.state-layer.color` = `md.sys.color.on-surface-variant`
    * `selected.focused.state-layer.color`: `md.comp.icon-button.filled.selected.focused.state-layer.color` = `md.sys.color.on-primary`
    * `focused.state-layer.opacity`: `md.comp.icon-button.filled.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* **Pressed**
    * `pressed.state-layer.color`: `md.comp.icon-button.filled.pressed.state-layer.color` = `md.sys.color.on-primary`
    * `unselected.pressed.state-layer.color`: `md.comp.icon-button.filled.unselected.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `selected.pressed.state-layer.color`: `md.comp.icon-button.filled.selected.pressed.state-layer.color` = `md.sys.color.on-primary`
    * `pressed.state-layer.opacity`: `md.comp.icon-button.filled.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Tonal Icon Button

**Token Set**: `md.comp.icon-button.tonal`

##### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.icon-button.tonal.container.color` = `md.sys.color.secondary-container`
    * `unselected.container.color`: `md.comp.icon-button.tonal.unselected.container.color` = `md.sys.color.secondary-container`
    * `selected.container.color`: `md.comp.icon-button.tonal.selected.container.color` = `md.sys.color.secondary`
    * `icon.color`: `md.comp.icon-button.tonal.icon.color` = `md.sys.color.on-secondary-container`
    * `unselected.icon.color`: `md.comp.icon-button.tonal.unselected.icon.color` = `md.sys.color.on-secondary-container`
    * `selected.icon.color`: `md.comp.icon-button.tonal.selected.icon.color` = `md.sys.color.on-secondary`
* **Disabled**
    * `disabled.container.color`: `md.comp.icon-button.tonal.disabled.container.color` = `md.sys.color.on-surface`
    * `disabled.container.opacity`: `md.comp.icon-button.tonal.disabled.container.opacity` = `10%`
    * `disabled.icon.color`: `md.comp.icon-button.tonal.disabled.icon.color` = `md.sys.color.on-surface`
    * `disabled.icon.opacity`: `md.comp.icon-button.tonal.disabled.icon.opacity` = `38%`
* **Hovered**
    * `hovered.state-layer.color`: `md.comp.icon-button.tonal.hovered.state-layer.color` = `md.sys.color.on-secondary-container`
    * `hovered.state-layer.opacity`: `md.comp.icon-button.tonal.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* **Focused**
    * `focused.state-layer.color`: `md.comp.icon-button.tonal.focused.state-layer.color` = `md.sys.color.on-secondary-container`
    * `focused.state-layer.opacity`: `md.comp.icon-button.tonal.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* **Pressed**
    * `pressed.state-layer.color`: `md.comp.icon-button.tonal.pressed.state-layer.color` = `md.sys.color.on-secondary-container`
    * `pressed.state-layer.opacity`: `md.comp.icon-button.tonal.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Outlined Icon Button

**Token Set**: `md.comp.icon-button.outlined`

##### Color Tokens

* **Enabled**
    * `outline.color`: `md.comp.icon-button.outlined.outline.color` = `md.sys.color.outline-variant`
    * `unselected.outline.color`: `md.comp.icon-button.outlined.unselected.outline.color` = `md.sys.color.outline-variant`
    * `selected.container.color`: `md.comp.icon-button.outlined.selected.container.color` = `md.sys.color.inverse-surface`
    * `icon.color`: `md.comp.icon-button.outlined.icon.color` = `md.sys.color.on-surface-variant`
    * `unselected.icon.color`: `md.comp.icon-button.outlined.unselected.icon.color` = `md.sys.color.on-surface-variant`
    * `selected.icon.color`: `md.comp.icon-button.outlined.selected.icon.color` = `md.sys.color.inverse-on-surface`
* **Disabled**
    * `disabled.outline.color`: `md.comp.icon-button.outlined.disabled.outline.color` = `md.sys.color.outline-variant`
    * `selected.disabled.container.color`: `md.comp.icon-button.outlined.selected.disabled.container.color` = `md.sys.color.on-surface`
    * `disabled.icon.color`: `md.comp.icon-button.outlined.disabled.icon.color` = `md.sys.color.on-surface`
    * `disabled.icon.opacity`: `md.comp.icon-button.outlined.disabled.icon.opacity` = `38%`
* **Hovered**
    * `hovered.state-layer.color`: `md.comp.icon-button.outlined.hovered.state-layer.color` = `md.sys.color.on-surface-variant`
    * `hovered.state-layer.opacity`: `md.comp.icon-button.outlined.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* **Focused**
    * `focused.state-layer.color`: `md.comp.icon-button.outlined.focused.state-layer.color` = `md.sys.color.on-surface-variant`
    * `focused.state-layer.opacity`: `md.comp.icon-button.outlined.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* **Pressed**
    * `pressed.state-layer.color`: `md.comp.icon-button.outlined.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `pressed.state-layer.opacity`: `md.comp.icon-button.outlined.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Standard Icon Button

**Token Set**: `md.comp.icon-button`

##### Color Tokens

* **Enabled**
    * `icon.color`: `md.comp.icon-button.icon.color` = `md.sys.color.on-surface-variant`
    * `unselected.icon.color`: `md.comp.icon-button.unselected.icon.color` = `md.sys.color.on-surface-variant`
    * `selected.icon.color`: `md.comp.icon-button.selected.icon.color` = `md.sys.color.primary`
* **Disabled**
    * `disabled.icon.color`: `md.comp.icon-button.disabled.icon.color` = `md.sys.color.on-surface`
    * `disabled.icon.opacity`: `md.comp.icon-button.disabled.icon.opacity` = `38%`
* **Hovered**
    * `hovered.state-layer.color`: `md.comp.icon-button.hovered.state-layer.color` = `md.sys.color.on-surface-variant`
    * `selected.hovered.state-layer.color`: `md.comp.icon-button.selected.hovered.state-layer.color` = `md.sys.color.primary`
    * `hovered.state-layer.opacity`: `md.comp.icon-button.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* **Focused**
    * `focused.state-layer.color`: `md.comp.icon-button.focused.state-layer.color` = `md.sys.color.on-surface-variant`
    * `selected.focused.state-layer.color`: `md.comp.icon-button.selected.focused.state-layer.color` = `md.sys.color.primary`
    * `focused.state-layer.opacity`: `md.comp.icon-button.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* **Pressed**
    * `pressed.state-layer.color`: `md.comp.icon-button.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
    * `selected.pressed.state-layer.color`: `md.comp.icon-button.selected.pressed.state-layer.color` = `md.sys.color.primary`
    * `pressed.state-layer.opacity`: `md.comp.icon-button.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Size Tokens

##### Xsmall

**Token Set**: `md.comp.icon-button.xsmall`

* `container.height`: `md.comp.icon-button.xsmall.container.height` = `32dp`
* `outlined.outline.width`: `md.comp.icon-button.xsmall.outlined.outline.width` = `1dp`
* `icon.size`: `md.comp.icon-button.xsmall.icon.size` = `20dp`
* `narrow.leading-space`: `md.comp.icon-button.xsmall.narrow.leading-space` = `4dp`
* `narrow.trailing-space`: `md.comp.icon-button.xsmall.narrow.trailing-space` = `4dp`
* `default.leading-space`: `md.comp.icon-button.xsmall.default.leading-space` = `6dp`
* `default.trailing-space`: `md.comp.icon-button.xsmall.default.trailing-space` = `6dp`
* `wide.leading-space`: `md.comp.icon-button.xsmall.wide.leading-space` = `10dp`
* `wide.trailing-space`: `md.comp.icon-button.xsmall.wide.trailing-space` = `10dp`
* `container.shape.round`: `md.comp.icon-button.xsmall.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.icon-button.xsmall.container.shape.square` = `md.sys.shape.corner.medium`
* `pressed.container.shape`: `md.comp.icon-button.xsmall.pressed.container.shape` = `md.sys.shape.corner.small`

---

##### Small

**Token Set**: `md.comp.icon-button.small`

* `container.height`: `md.comp.icon-button.small.container.height` = `40dp`
* `outlined.outline.width`: `md.comp.icon-button.small.outlined.outline.width` = `1dp`
* `icon.size`: `md.comp.icon-button.small.icon.size` = `24dp`
* `narrow.leading-space`: `md.comp.icon-button.small.narrow.leading-space` = `4dp`
* `narrow.trailing-space`: `md.comp.icon-button.small.narrow.trailing-space` = `4dp`
* `default.leading-space`: `md.comp.icon-button.small.default.leading-space` = `8dp`
* `default.trailing-space`: `md.comp.icon-button.small.default.trailing-space` = `8dp`
* `wide.leading-space`: `md.comp.icon-button.small.wide.leading-space` = `14dp`
* `wide.trailing-space`: `md.comp.icon-button.small.wide.trailing-space` = `14dp`
* `container.shape.round`: `md.comp.icon-button.small.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.icon-button.small.container.shape.square` = `md.sys.shape.corner.medium`
* `pressed.container.shape`: `md.comp.icon-button.small.pressed.container.shape` = `md.sys.shape.corner.small`

---

##### Medium

**Token Set**: `md.comp.icon-button.medium`

* `container.height`: `md.comp.icon-button.medium.container.height` = `56dp`
* `outlined.outline.width`: `md.comp.icon-button.medium.outlined.outline.width` = `1dp`
* `icon.size`: `md.comp.icon-button.medium.icon.size` = `24dp`
* `narrow.leading-space`: `md.comp.icon-button.medium.narrow.leading-space` = `12dp`
* `narrow.trailing-space`: `md.comp.icon-button.medium.narrow.trailing-space` = `12dp`
* `default.leading-space`: `md.comp.icon-button.medium.default.leading-space` = `16dp`
* `default.trailing-space`: `md.comp.icon-button.medium.default.trailing-space` = `16dp`
* `wide.leading-space`: `md.comp.icon-button.medium.wide.leading-space` = `24dp`
* `wide.trailing-space`: `md.comp.icon-button.medium.wide.trailing-space` = `24dp`
* `container.shape.round`: `md.comp.icon-button.medium.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.icon-button.medium.container.shape.square` = `md.sys.shape.corner.large`
* `pressed.container.shape`: `md.comp.icon-button.medium.pressed.container.shape` = `md.sys.shape.corner.medium`

---

##### Large

**Token Set**: `md.comp.icon-button.large`

* `container.height`: `md.comp.icon-button.large.container.height` = `96dp`
* `outlined.outline.width`: `md.comp.icon-button.large.outlined.outline.width` = `2dp`
* `icon.size`: `md.comp.icon-button.large.icon.size` = `32dp`
* `narrow.leading-space`: `md.comp.icon-button.large.narrow.leading-space` = `16dp`
* `narrow.trailing-space`: `md.comp.icon-button.large.narrow.trailing-space` = `16dp`
* `default.leading-space`: `md.comp.icon-button.large.default.leading-space` = `32dp`
* `default.trailing-space`: `md.comp.icon-button.large.default.trailing-space` = `32dp`
* `wide.leading-space`: `md.comp.icon-button.large.wide.leading-space` = `48dp`
* `wide.trailing-space`: `md.comp.icon-button.large.wide.trailing-space` = `48dp`
* `container.shape.round`: `md.comp.icon-button.large.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.icon-button.large.container.shape.square` = `md.sys.shape.corner.extra-large`
* `pressed.container.shape`: `md.comp.icon-button.large.pressed.container.shape` = `md.sys.shape.corner.large`

---

##### Xlarge

**Token Set**: `md.comp.icon-button.xlarge`

* `container.height`: `md.comp.icon-button.xlarge.container.height` = `136dp`
* `outlined.outline.width`: `md.comp.icon-button.xlarge.outlined.outline.width` = `3dp`
* `icon.size`: `md.comp.icon-button.xlarge.icon.size` = `40dp`
* `narrow.leading-space`: `md.comp.icon-button.xlarge.narrow.leading-space` = `32dp`
* `narrow.trailing-space`: `md.comp.icon-button.xlarge.narrow.trailing-space` = `32dp`
* `default.leading-space`: `md.comp.icon-button.xlarge.default.leading-space` = `48dp`
* `default.trailing-space`: `md.comp.icon-button.xlarge.default.trailing-space` = `48dp`
* `wide.leading-space`: `md.comp.icon-button.xlarge.wide.leading-space` = `72dp`
* `wide.trailing-space`: `md.comp.icon-button.xlarge.wide.trailing-space` = `72dp`
* `container.shape.round`: `md.comp.icon-button.xlarge.container.shape.round` = `md.sys.shape.corner.full`
* `container.shape.square`: `md.comp.icon-button.xlarge.container.shape.square` = `md.sys.shape.corner.extra-large`
* `pressed.container.shape`: `md.comp.icon-button.xlarge.pressed.container.shape` = `md.sys.shape.corner.large`

---

### Icon Button Component - Code Samlpes & Implementation
* Icon Buttons are visually distinct from text-based buttons and have specific styling requirements. 
* Icon buttons must always be rendered as perfect circles when using a "round" shape variant.

**CRITICAL IMPLEMENTATION RULE:** To ensure correct rendering, any element styled as an icon button (e.g., `<button class="icon-button">`) **MUST** have a CSS rule that explicitly sets its `border-radius` to `50%` or a token that resolves to `50%` (like `md.sys.shape.corner.full`). This rule must have sufficient specificity to override any generic button styles.

#### 1\. HTML Structure & Examples

The following examples demonstrate the correct HTML structure for all icon button variants, states, and sizes. Use the `aria-pressed` attribute for toggleable buttons to ensure accessibility.

##### Standard Variants & States

This shows each of the four main variants in their default (unselected), selected, and disabled states.

```html
<div class="example-row">
  <button class="button icon-button filled genux-ripple" aria-label="Favorite"><span class="material-symbols-outlined">favorite</span></button>
  <button class="button icon-button filled selected genux-ripple" aria-label="Favorite" aria-pressed="true"><span class="material-symbols-outlined">favorite</span></button>
  <button class="button icon-button filled" aria-label="Favorite" disabled><span class="material-symbols-outlined">favorite</span></button>
</div>

<div class="example-row">
  <button class="button icon-button tonal genux-ripple" aria-label="Bookmark"><span class="material-symbols-outlined">bookmark</span></button>
  <button class="button icon-button tonal selected genux-ripple" aria-label="Bookmark" aria-pressed="true"><span class="material-symbols-outlined">bookmark</span></button>
  <button class="button icon-button tonal" aria-label="Bookmark" disabled><span class="material-symbols-outlined">bookmark</span></button>
</div>

<div class="example-row">
  <button class="button icon-button outlined genux-ripple" aria-label="Settings"><span class="material-symbols-outlined">settings</span></button>
  <button class="button icon-button outlined selected genux-ripple" aria-label="Settings" aria-pressed="true"><span class="material-symbols-outlined">settings</span></button>
  <button class="button icon-button outlined" aria-label="Settings" disabled><span class="material-symbols-outlined">settings</span></button>
</div>

<div class="example-row">
  <button class="button icon-button standard genux-ripple" aria-label="Menu"><span class="material-symbols-outlined">menu</span></button>
  <button class="button icon-button standard selected genux-ripple" aria-label="Menu" aria-pressed="true"><span class="material-symbols-outlined">menu</span></button>
  <button class="button icon-button standard" aria-label="Menu" disabled><span class="material-symbols-outlined">menu</span></button>
</div>
```

-----

##### Size Variants

This example uses the `Filled` variant to demonstrate the full range of available sizes.

```html
<div class="example-row">
  <button class="button icon-button filled size-xsmall genux-ripple" aria-label="Add"><span class="material-symbols-outlined">add</span></button>
  <button class="button icon-button filled size-small genux-ripple" aria-label="Add"><span class="material-symbols-outlined">add</span></button>
  <button class="button icon-button filled size-medium genux-ripple" aria-label="Add"><span class="material-symbols-outlined">add</span></button>
  <button class="button icon-button filled size-large genux-ripple" aria-label="Add"><span class="material-symbols-outlined">add</span></button>
  <button class="button icon-button filled size-xlarge genux-ripple" aria-label="Add"><span class="material-symbols-outlined">add</span></button>
</div>
```

-----

#### 2\. CSS Implementation

```css
/* 1. Base Styles */
.button.icon-button {
    /* Default Size (maps to 'small' token values) */
    width: 40px;
    height: 40px;
    
    /* CRITICAL: Enforce circular shape */
    border-radius: 50%; /* md.sys.shape.corner.full */
    
    /* Reset and alignment */
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: none;
    transition: background-color 150ms ease-in-out, color 150ms ease-in-out, border-color 150ms ease-in-out;
}
.button.icon-button .material-symbols-outlined {
    font-size: 24px; /* md.comp.icon-button.icon.size */
    transition: font-size 150ms ease-in-out;
}

/* 2. Size Variants */
/* XSmall */
.button.icon-button.size-xsmall {
    width: 32px; /* md.comp.icon-button.xsmall.container.height */
    height: 32px;
}
.button.icon-button.size-xsmall .material-symbols-outlined {
    font-size: 20px; /* md.comp.icon-button.xsmall.icon.size */
}

/* Small (Default size) */
.button.icon-button.size-small {
    width: 40px; /* md.comp.icon-button.small.container.height */
    height: 40px;
}
.button.icon-button.size-small .material-symbols-outlined {
    font-size: 24px; /* md.comp.icon-button.small.icon.size */
}

/* Medium */
.button.icon-button.size-medium {
    width: 56px; /* md.comp.icon-button.medium.container.height */
    height: 56px;
}
.button.icon-button.size-medium .material-symbols-outlined {
    font-size: 24px; /* md.comp.icon-button.medium.icon.size */
}

/* Large */
.button.icon-button.size-large {
    width: 96px; /* md.comp.icon-button.large.container.height */
    height: 96px;
}
.button.icon-button.size-large .material-symbols-outlined {
    font-size: 32px; /* md.comp.icon-button.large.icon.size */
}

/* XLarge */
.button.icon-button.size-xlarge {
    width: 136px; /* md.comp.icon-button.xlarge.container.height */
    height: 136px;
}
.button.icon-button.size-xlarge .material-symbols-outlined {
    font-size: 40px; /* md.comp.icon-button.xlarge.icon.size */
}

/* 3. Color & Style Variants */

/* --- Filled Variant --- */
.button.icon-button.filled { /* Unselected State */
    background-color: var(--md-sys-color-surface-container); /* md.comp.icon-button.filled.unselected.container.color */
    color: var(--md-sys-color-on-surface-variant); /* md.comp.icon-button.filled.unselected.icon.color */
    --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}
.button.icon-button.filled.selected {
    background-color: var(--md-sys-color-primary); /* md.comp.icon-button.filled.selected.container.color */
    color: var(--md-sys-color-on-primary); /* md.comp.icon-button.filled.selected.icon.color */
    --genux-press-color-rgb: var(--md-sys-color-on-primary-rgb);
}

/* --- Tonal Variant --- */
.button.icon-button.tonal { /* Unselected State */
    background-color: var(--md-sys-color-secondary-container); /* md.comp.icon-button.tonal.unselected.container.color */
    color: var(--md-sys-color-on-secondary-container); /* md.comp.icon-button.tonal.unselected.icon.color */
    --genux-press-color-rgb: var(--md-sys-color-on-secondary-container-rgb);
}
.button.icon-button.tonal.selected {
    background-color: var(--md-sys-color-secondary); /* md.comp.icon-button.tonal.selected.container.color */
    color: var(--md-sys-color-on-secondary); /* md.comp.icon-button.tonal.selected.icon.color */
    --genux-press-color-rgb: var(--md-sys-color-on-secondary-rgb);
}

/* --- Outlined Variant --- */
.button.icon-button.outlined { /* Unselected State */
    background-color: transparent;
    border: 1px solid var(--md-sys-color-outline-variant); /* md.comp.icon-button.outlined.unselected.outline.color */
    color: var(--md-sys-color-on-surface-variant); /* md.comp.icon-button.outlined.unselected.icon.color */
    --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}
.button.icon-button.outlined.selected {
    background-color: var(--md-sys-color-inverse-surface); /* md.comp.icon-button.outlined.selected.container.color */
    color: var(--md-sys-color-inverse-on-surface); /* md.comp.icon-button.outlined.selected.icon.color */
    border-color: transparent;
    --genux-press-color-rgb: var(--md-sys-color-inverse-on-surface-rgb);
}

/* --- Standard Variant --- */
.button.icon-button.standard { /* Unselected State */
    background-color: transparent;
    color: var(--md-sys-color-on-surface-variant); /* md.comp.icon-button.standard.unselected.icon.color */
    --genux-press-color-rgb: var(--md-sys-color-on-surface-variant-rgb);
}
.button.icon-button.standard.selected {
    color: var(--md-sys-color-primary); /* md.comp.icon-button.standard.selected.icon.color */
    --genux-press-color-rgb: var(--md-sys-color-primary-rgb);
}

/* 4. Global Disabled State */
.button.icon-button:disabled {
    cursor: not-allowed;
    color: rgba(var(--md-sys-color-on-surface-rgb), 0.38); /* md.comp.icon-button.disabled.icon.opacity */
    background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.12); /* md.comp.icon-button.disabled.container.opacity */
    border: none;
}
/* Specific disabled overrides */
.button.icon-button.outlined:disabled,
.button.icon-button.standard:disabled {
    background-color: transparent;
}
.button.icon-button.outlined:disabled {
     border: 1px solid rgba(var(--md-sys-color-on-surface-rgb), 0.12);
}
```

----

## List Components (`md.comp.list`)

* Lists are continuous, vertical indexes of text or images. They are composed of one or more list items, typically arranged within a container.
* List items contain primary content and often supplemental actions or information, represented by icons, text, avatars, images, videos, and interactive elements.
* **List Container Styling (`.list-container`)**:
    *   Corner Radius: `1em` (16px) - (`md.sys.shape.corner.large`)
* **List Item Spacing**:
    *   Gap between items: `0.125em` (2px) margin-bottom typically applied to list items.

### List Types

*   **Informational:** Standard list items displaying information, generally non-interactive beyond potentially linking the entire item.
*   **Selectable:** List items that can be selected individually or as a group. Uses visual cues like background color, shape changes, and icons (checkmark, radio, checkbox) to indicate selection state.
*   **Expandable:** List items that can expand and collapse to reveal nested content or sub-lists. Typically uses a trailing icon (e.g., expand\_more/expand\_less) to indicate state.
*   **Draggable:** List items that can be reordered within the list via drag-and-drop interaction. Uses distinct styling during the drag operation.
*   **Swipeable:** List items that reveal contextual actions (buttons) when swiped horizontally. Requires alternative access methods for these actions (e.g., a trailing "more" icon).

---


### List Component - Tokens

---

**Token Set**: `md.comp.list`

#### Color Tokens

##### **Standard**

* **Enabled**
    * `container.color`: `md.comp.list.list-item.container.color` = `md.sys.color.surface-bright`
    * `label-text.color`: `md.comp.list.list-item.label-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.list.list-item.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `overline.color`: `md.comp.list.list-item.overline.color` = `md.sys.color.on-surface-variant`
    * `leading-icon.color`: `md.comp.list.list-item.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.list.list-item.trailing-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-supporting-text.color`: `md.comp.list.list-item.trailing-supporting-text.color` = `md.sys.color.on-surface-variant`
    * `leading-avatar.color`: `md.comp.list.list-item.leading-avatar.color` = `md.sys.color.primary-container`
    * `leading-avatar-label.color`: `md.comp.list.list-item.leading-avatar-label.color` = `md.sys.color.on-primary-container`

* **Enabled Selected**
    * `container.color`: `md.comp.list.list-item.selected.container.color` = `md.sys.color.secondary-container`
    * `label-text.color`: `md.comp.list.list-item.selected.label-text.color` = `md.sys.color.on-secondary-container`
    * `supporting-text.color`: `md.comp.list.list-item.selected.supporting-text.color` = `md.sys.color.on-secondary-container`
    * `trailing-supporting-text.color`: `md.comp.list.list-item.selected.trailing-supporting-text.color` = `md.sys.color.on-secondary-container`
    * `trailing-icon.color`: `md.comp.list.list-item.selected.trailing-icon.color` = `md.sys.color.on-secondary-container`
    * `leading-icon.color`: `md.comp.list.list-item.selected.leading-icon.color` = `md.sys.color.on-secondary-container`
    * `overline.color`: `md.comp.list.list-item.selected.overline.color` = `md.sys.color.on-secondary-container`

* **Disabled**
    * `label-text.color`: `md.comp.list.list-item.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.list.list-item.disabled.label-text.opacity` = `0.38`
    * `supporting-text.color`: `md.comp.list.list-item.disabled.supporting-text.color` = `md.sys.color.on-surface`
    * `supporting-text.opacity`: `md.comp.list.list-item.disabled.supporting-text.opacity` = `0.38`
    * `trailing-supporting-text.color`: `md.comp.list.list-item.disabled.trailing-supporting-text.color` = `md.sys.color.on-surface`
    * `trailing-supporting-text.opacity`: `md.comp.list.list-item.disabled.trailing-supporting-text.opacity` = `0.38`
    * `overline.color`: `md.comp.list.list-item.disabled.overline.color` = `md.sys.color.on-surface`
    * `overline.opacity`: `md.comp.list.list-item.disabled.overline.opacity` = `0.38`
    * `leading-icon.color`: `md.comp.list.list-item.disabled.leading-icon.color` = `md.sys.color.on-surface`
    * `leading-icon.opacity`: `md.comp.list.list-item.disabled.leading-icon.opacity` = `0.38`
    * `trailing-icon.color`: `md.comp.list.list-item.disabled.trailing-icon.color` = `md.sys.color.on-surface`
    * `trailing-icon.opacity`: `md.comp.list.list-item.disabled.trailing-icon.opacity` = `0.38`

* **Hovered**
    * `state-layer.color`: `md.comp.list.list-item.hovered.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.list.list-item.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `label-text.color`: `md.comp.list.list-item.hovered.label-text.color` = `md.sys.color.on-surface`
    * `leading-icon.color`: `md.comp.list.list-item.hovered.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.list.list-item.hovered.trailing-icon.color` = `md.sys.color.on-surface-variant`

* **Hovered, Selected**
    * `state-layer.color`: `md.comp.list.list-item.selected.hovered.state-layer.color` = `md.sys.color.on-secondary-container`
    * `state-layer.opacity`: `md.comp.list.list-item.selected.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `label-text.color`: `md.comp.list.list-item.selected.hovered.label-text.color` = `md.sys.color.on-secondary-container`
    * `leading-icon.color`: `md.comp.list.list-item.selected.hovered.leading-icon.color` = `md.sys.color.on-secondary-container`
    * `trailing-icon.color`: `md.comp.list.list-item.selected.hovered.trailing-icon.color` = `md.sys.color.on-secondary-container`

* **Focused**
    * `state-layer.color`: `md.comp.list.list-item.focused.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.list.list-item.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `label-text.color`: `md.comp.list.list-item.focused.label-text.color` = `md.sys.color.on-surface`
    * `leading-icon.color`: `md.comp.list.list-item.focused.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.list.list-item.focused.trailing-icon.color` = `md.sys.color.on-surface-variant`
    * `focus-indicator.color`: `md.comp.list.list-item.focus.indicator.color` = `md.sys.color.secondary`

* **Focused, Selected**
    * `state-layer.color`: `md.comp.list.list-item.selected.focused.state-layer.color` = `md.sys.color.on-secondary-container`
    * `state-layer.opacity`: `md.comp.list.list-item.selected.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `label-text.color`: `md.comp.list.list-item.selected.focused.label-text.color` = `md.sys.color.on-secondary-container`
    * `leading-icon.color`: `md.comp.list.list-item.selected.focused.leading-icon.color` = `md.sys.color.on-secondary-container`
    * `trailing-icon.color`: `md.comp.list.list-item.selected.focused.trailing-icon.color` = `md.sys.color.on-secondary-container`

* **Pressed**
    * `state-layer.color`: `md.comp.list.list-item.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.list.list-item.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `label-text.color`: `md.comp.list.list-item.pressed.label-text.color` = `md.sys.color.on-surface`
    * `leading-icon.color`: `md.comp.list.list-item.pressed.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.list.list-item.pressed.trailing-icon.color` = `md.sys.color.on-surface-variant`

* **Pressed, Selected**
    * `state-layer.color`: `md.comp.list.list-item.pressed.focused.state-layer.color` = `md.sys.color.on-secondary-container`
    * `state-layer.opacity`: `md.comp.list.list-item.pressed.focused.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `label-text.color`: `md.comp.list.list-item.pressed.focused.label-text.color` = `md.sys.color.on-secondary-container`
    * `leading-icon.color`: `md.comp.list.list-item.pressed.focused.leading-icon.color` = `md.sys.color.on-secondary-container`
    * `trailing-icon.color`: `md.comp.list.list-item.pressed.focused.trailing-icon.color` = `md.sys.color.on-secondary-container`

##### **Segmented**

* **Enabled**
    * `item.color`: `md.comp.list.list-item.item.color` = `md.sys.color.surface-container-low`

##### **Expandable**

* **Enabled**
    * `container.color`: `md.comp.list.expandable.container.color` = `md.sys.color.surface-container`
    * `trailing-icon.container.color`: `md.comp.list.expandable.trailing-icon.container.color` = `md.sys.color.surface`
    * `collapsed.trailing-icon.icon.color`: `md.comp.list.expandable.collapsed.trailing-icon.icon.color` = `md.sys.color.on-surface`
    * `expanded.trailing-icon.icon.color`: `md.comp.list.expandable.expanded.trailing-icon.icon.color` = `md.sys.color.secondary`

##### **Draggable**

* **Dragged**
    * `container.color`: `md.comp.list.list-item.dragged.container.color` = `md.sys.color.tertiary-container`
    * `label-text.color`: `md.comp.list.list-item.dragged.label-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.list.list-item.dragged.supporting-text.color` = `md.sys.color.tertiary`
    * `leading-icon.color`: `md.comp.list.list-item.dragged.leading-icon.color` = `md.sys.color.tertiary`
    * `trailing-supporting-text.color`: `md.comp.list.list-item.dragged.trailing-supporting-text.color` = `md.sys.color.tertiary`
    * `trailing-icon.color`: `md.comp.list.list-item.dragged.trailing-icon.color` = `md.sys.color.tertiary`
    * `hint.color`: `md.comp.list.list-item.dragged.hint.color` = `md.sys.color.surface-container-low`
    * `state-layer.color`: `md.comp.list.list-item.dragged.state-layer.color` = `md.sys.color.on-tertiary-container`
    * `state-layer.opacity`: `md.comp.list.list-item.dragged.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `shadow-color`: `md.comp.list.list-item.dragged.shadow-color` = `md.sys.color.shadow`

##### **Swipeable**

* **Enabled**
    * `reveal.icon-button.container.color`: `md.comp.list.list-item.swiped.reveal.icon-button.container.color` = `md.sys.color.secondary-container`
    * `reveal.icon-button.icon.color`: `md.comp.list.list-item.swiped.reveal.icon-button.icon.color` = `md.sys.color.on-secondary-container`
    * `reveal.action.icon-button.container.color`: `md.comp.list.list-item.swiped.reveal.action.icon-button.container.color` = `md.sys.color.primary`
    * `reveal.action.icon-button.icon.color`: `md.comp.list.list-item.swiped.reveal.action.icon-button.icon.color` = `md.sys.color.on-primary`

* **Hovered**
    * `reveal.icon-button.hovered.state-layer.color`: `md.comp.list.list-item.swiped.reveal.icon-button.hovered.state-layer.color` = `md.sys.color.on-secondary-container`
    * `reveal.action.icon-button.hovered.state-layer.color`: `md.comp.list.list-item.swiped.reveal.action.icon-button.hovered.state-layer.color` = `md.sys.color.on-primary`

* **Focused**
    * `reveal.icon-button.focused.state-layer.color`: `md.comp.list.list-item.swiped.reveal.icon-button.focused.state-layer.color` = `md.sys.color.on-secondary-container`
    * `reveal.action.icon-button.focused.state-layer.color`: `md.comp.list.list-item.swiped.reveal.action.icon-button.focused.state-layer.color` = `md.sys.color.on-primary`

* **Pressed**
    * `reveal.icon-button.pressed.state-layer.color`: `md.comp.list.list-item.swiped.reveal.icon-button.pressed.state-layer.color` = `md.sys.color.on-secondary-container`
    * `reveal.action.icon-button.pressed.state-layer.color`: `md.comp.list.list-item.swiped.reveal.action.icon-button.pressed.state-layer.color` = `md.sys.color.on-primary`

---

#### Elevation Tokens

##### **Draggable**
* **Dragged**
    * `container.elevation`: `md.comp.list.list-item.dragged.container.elevation` = `md.sys.elevation.level4`
    * `elevation`: `md.comp.list.list-item.dragged.elevation` = `md.sys.elevation.level5`

---

#### Size, Shape, & Layout Tokens

* **Standard**
    * `container.shape`: `md.comp.list.list-item.container.shape` = `md.sys.shape.corner.none`
    * `item.shape`: `md.comp.list.list-item.item.shape` = `md.sys.shape.corner.small`
    * `leading-avatar.shape`: `md.comp.list.list-item.leading-avatar.shape` = `md.sys.shape.corner.full`
    * `leading-video.shape`: `md.comp.list.list-item.leading-video.shape` = `md.sys.shape.corner.none`
    * `leading-image.shape`: `md.comp.list.list-item.leading-image.shape` = `md.sys.shape.corner.none`
    * `leading-avatar.size`: `md.comp.list.list-item.leading-avatar.size` = `40dp`
    * `leading-icon.size`: `md.comp.list.list-item.leading-icon.size` = `20dp`
    * `leading-video.width`: `md.comp.list.list-item.leading-video.width` = `114dp`
    * `leading-video.height`: `md.comp.list.list-item.leading-video.height` = `64dp`
    * `leading-image.width`: `md.comp.list.list-item.leading-image.width` = `56dp`
    * `leading-image.height`: `md.comp.list.list-item.leading-image.height` = `56dp`
    * `trailing-icon.size`: `md.comp.list.list-item.trailing-icon.size` = `20dp`
    * `three-line.container.height`: `md.comp.list.list-item.three-line.container.height` = `dynamic`
    * `leading-space`: `md.comp.list.list-item.leading-space` = `16dp`
    * `trailing-space`: `md.comp.list.list-item.trailing-space` = `16dp`
    * `top-space`: `md.comp.list.list-item.top-space` = `12dp`
    * `bottom-space`: `md.comp.list.list-item.bottom-space` = `12dp`
    * `item.between-space`: `md.comp.list.list-item.item.between-space` = `12dp`
    * `divider.top-space`: `md.comp.list.divider.top-space` = `0dp`
    * `divider.bottom-space`: `md.comp.list.divider.bottom-space` = `0dp`

* **Selected**
    * `item.shape`: `md.comp.list.list-item.selected.item.shape` = `md.sys.shape.corner.large`

* **Expandable**
    * `container.shape`: `md.comp.list.expandable.container.shape` = `md.sys.shape.corner.large`
    * `trailing-icon.shape`: `md.comp.list.expandable.trailing-icon.shape` = `md.sys.shape.corner.full`

* **Swipeable**
    * `reveal.item.container.shape`: `md.comp.list.list-item.swiped.reveal.item.container.shape` = `md.sys.shape.corner.large`
    * `icon.reveal.container.shape`: `md.comp.list.list-item.swiped.icon.reveal.container.shape` = `md.sys.shape.corner.full`
    * `icon.action.container.shape`: `md.comp.list.list-item.swiped.icon.action.container.shape` = `md.sys.shape.corner.large`

* **Draggable**
    * `shape`: `md.comp.list.dragged.shape` = `md.sys.shape.corner.large`
    
* **Focus Ring**
    * `focus-indicator.thickness`: `md.comp.list.list-item.focus.indicator.thickness` = `md.sys.states.focus-indicator.thickness`
    * `focus-indicator.outline.offset`: `md.comp.list.list-item.focus.indicator.outline.offset` = `md.sys.states.focus-indicator.inner-offset`

---

#### Typography Tokens

* **Label Text (Headline)**
    * `font`: `md.comp.list.list-item.label-text.font` = `md.sys.typescale.body-large.font`
    * `line-height`: `md.comp.list.list-item.label-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `size`: `md.comp.list.list-item.label-text.size` = `md.sys.typescale.body-large.size`
    * `tracking`: `md.comp.list.list-item.label-text.tracking` = `md.sys.typescale.body-large.tracking`
    * `weight`: `md.comp.list.list-item.label-text.weight` = `md.sys.typescale.body-large.weight`

* **Supporting Text**
    * `font`: `md.comp.list.list-item.supporting-text.font` = `md.sys.typescale.body-medium.font`
    * `line-height`: `md.comp.list.list-item.supporting-text.line-height` = `md.sys.typescale.body-medium.line-height`
    * `size`: `md.comp.list.list-item.supporting-text.size` = `md.sys.typescale.body-medium.size`
    * `tracking`: `md.comp.list.list-item.supporting-text.tracking` = `md.sys.typescale.body-medium.tracking`
    * `weight`: `md.comp.list.list-item.supporting-text.weight` = `md.sys.typescale.body-medium.weight`

* **Overline**
    * `font`: `md.comp.list.list-item.overline.font` = `md.sys.typescale.label-medium.font`
    * `line-height`: `md.comp.list.list-item.overline.line-height` = `md.sys.typescale.label-medium.line-height`
    * `size`: `md.comp.list.list-item.overline.size` = `md.sys.typescale.label-medium.size`
    * `tracking`: `md.comp.list.list-item.overline.tracking` = `md.sys.typescale.label-medium.tracking`
    * `weight`: `md.comp.list.list-item.overline.weight` = `md.sys.typescale.label-medium.weight`

* **Leading Avatar Label Text**
    * `font`: `md.comp.list.list-item.leading-avatar-label.font` = `md.sys.typescale.title-medium.font`
    * `line-height`: `md.comp.list.list-item.leading-avatar-label.line-height` = `md.sys.typescale.title-medium.line-height`
    * `size`: `md.comp.list.list-item.leading-avatar-label.size` = `md.sys.typescale.title-medium.size`
    * `tracking`: `md.comp.list.list-item.leading-avatar-label.tracking` = `md.sys.typescale.title-medium.tracking`
    * `weight`: `md.comp.list.list-item.leading-avatar-label.weight` = `md.sys.typescale.title-medium.weight`

* **Trailing Supporting Text**
    * `font`: `md.comp.list.list-item.trailing-supporting-text.font` = `md.sys.typescale.label-small.font`
    * `line-height`: `md.comp.list.list-item.trailing-supporting-text.line-height` = `md.sys.typescale.label-small.line-height`
    * `size`: `md.comp.list.list-item.trailing-supporting-text.size` = `md.sys.typescale.label-small.size`
    * `tracking`: `md.comp.list.list-item.trailing-supporting-text.tracking` = `md.sys.typescale.label-small.tracking`
    * `weight`: `md.comp.list.list-item.trailing-supporting-text.weight` = `md.sys.typescale.label-small.weight`

---

### List Components - Code Samples & Implementation

To ensure accurate and high-fidelity representation of Material Design lists, pay close attention to the following critical directives, which build upon the core tokens:

#### 1. List Item Fill and Container Backgrounds

Understanding the interplay between list item fills and the list container's background is crucial for visual clarity and distinction between list types.

* **List Container (`.list-container`)**:
    * The `.list-container` **MUST ALWAYS** have a `background-color: transparent;`. It serves as a structural grouping element, and its fill should never obscure the individual fills or lack thereof on the list items themselves.
    * It **MUST NOT** have any `box-shadow`.
    * It **MUST** retain its `border-radius: md.sys.shape.corner.large` (16dp).

* **Standard List Items (No Fill)**:
    * For lists intended to blend with the page background (e.g., informational lists without distinct segments), each individual list item (`.list-item` without a specific fill class) **MUST** have a `background-color: transparent;`.
    * These lists typically use `.list-item-divider` elements between items for visual separation (if needed).
    * Items in a standard list that are purely informational **MUST NOT** have interactive behaviors. This means they should not use `cursor: pointer;`, `genux-ripple` class, `href="#"`, `role="listitem"`, or `tabindex="0"`. Their `cursor` should default to `default`.

* **Segmented List Items (with Fill)**:
    * For lists where each item is a visually distinct segment, individual list items (`.list-item.segmented`) **MUST** use `md.sys.color.surface-bright` as their `background-color`.
    * A `2px` vertical `margin-bottom` **MUST** be applied to each `.list-item.segmented` (except the last one in the container) to create the visual gap between segments.
    * Dividers (`.list-item-divider`) **MUST NOT** be used within segmented lists, as the `2px` gap provides the necessary visual separation.

#### 2. Item Corner Radii and Shape Transformation

List items dynamically adjust their `border-radius` in specific interactive states.

* **Default Item Radius**: All individual `list-item` elements **MUST** have a default `border-radius: md.sys.shape.corner.extra-small` (4dp).
* **Selectable Item Transformation**: When a `list-item.selectable` is in its `selected` state:
    * Its `background-color` **MUST** change to `md.sys.color.secondary-container`.
    * Its `border-radius` **MUST** transform to `md.sys.shape.corner.large` (16dp).
    * The `leading-icon` **MUST** reflect the selected state (e.g., `check_box` from `check_box_outline_blank`) and its `color` **MUST** update to `md.sys.color.on-secondary-container`.
    * All text elements (`label-text`, `supporting-text`) within the selected item **MUST** change `color` to `md.sys.color.on-secondary-container`.

#### 3. Disabled State Clarity

Disabled list items require precise visual cues to communicate their non-interactability.

* A disabled list item (`.list-item.disabled`) **MUST NOT** be interactive (no `cursor: pointer;`, no ripple effect, no click events).
* Its content (text, icons) **MUST** appear at `38%` opacity. This opacity **MUST** be achieved by setting the `color` property to an `rgba` value using `md.sys.color.on-surface` with `0.38` alpha, to prevent issues with stacking opacities or conflicting color declarations.
* Disabled selectable items **MUST** retain their `md.sys.color.surface-bright` background fill.

#### 4. Accordion List Behavior

Accordion list items reveal nested content, which also follows list component styling.

* Nested content within an accordion (`.accordion-content`) **MUST NOT** have a `background-color`.
* The `padding-bottom` of the `.accordion-content` **MUST** be `2px` to maintain segmented list visual spacing if the parent accordion is segmented.
* Any interactive elements (e.g., buttons) revealed within accordion content **MUST** be nested inside a `list-item` structure.

#### 5. Draggable List Interactions

Draggable lists provide visual feedback during reordering operations.

* When a list item is dragged (`.draggable.dragging`):
    * It **MUST** obtain elevation via a `box-shadow` using `md.sys.elevation.level4`.
    * Its `background-color` **MUST** change to `md.sys.color.tertiary-container`.
    * All text and icons within the dragged item **MUST** change `color` to `md.sys.color.on-tertiary-container`.
    * Its `border-radius` **MUST** transform to `md.sys.shape.corner.large` (16dp).
    * The `cursor` **MUST** change to `grabbing`.
* A visual "drop zone" indicator (`.drop-zone-indicator`) **MUST** appear between items during drag operations. This indicator **MUST** be a `2px` high line with `md.sys.color.surface-container` as its `background-color`.

#### 6. Swipeable List Functionality

Swipeable lists reveal hidden actions and require precise touch handling.

* Swipeable list items allow users to reveal contextual actions, such as "archive" or "delete", by swiping a list item horizontally. This pattern keeps the UI clean while providing powerful, in-context actions.
* **When to Use**: Use for actions that are secondary to the primary interaction with the list item. The primary action might be to navigate to a detail view, while the swipe actions are for management (e.g., archiving, deleting, pinning).
* **Accessibility**: Because swiping is not a universally accessible or discoverable interaction, a visible control, such as a "more" icon (`more_vert`), MUST be included in the trailing position as an alternative way to reveal the actions.
* **Interaction**: Only one list item should be in an "open" (swiped) state at a time. Interacting with a new item should automatically close any previously opened item. Clicking outside of an open item should also close it.
* The revealed `swipe-actions` container (holding icon buttons) **MUST** have a `min-width` (e.g., `46px`) and `padding` to correctly frame the `icon-button`s.
* The `icon-button`s within swipe actions **MUST** have a 24px `border-radius` and use appropriate `on-` colors (e.g., `md.sys.color.on-tertiary-container`, `md.sys.color.on-error-container`).
* Clicking the `more_vert` icon **MUST** toggle the revealed state of the swipe actions.
* Clicking anywhere outside an open swipeable item **MUST** close (snap back) the swipe actions.
* Swipeable list items **MUST** adopt the segmented list style (filled background and 2px gap between each list-item).

#### 1. Standard List (No Fill) with Divider

  * **Description**: A non-interactive, purely informational list where items have a transparent background and are separated by a divider.
  * **Key Characteristics**: `non-interactive`, `transparent` background for items, `cursor: default`. Dividers are optional.

**HTML Structure:**

```html
<div class="list-container">
    <div class="list-item one-line non-interactive">
        <span class="leading-content">
            <span class="material-symbols-outlined">mail</span>
        </span>
        <div class="content">
            <span class="label-text">One-Line Informational Item</span>
        </div>
        <span class="trailing-content">
            <span class="trailing-text">100+</span>
        </span>
    </div>
    <div class="list-item-divider"></div>
    <div class="list-item two-line non-interactive">
        <span class="leading-content">
            <span class="material-symbols-outlined">person</span>
        </span>
        <div class="content">
            <span class="label-text">Two-Line Informational Item</span>
            <span class="supporting-text">Secondary descriptive text.</span>
        </div>
    </div>
    <div class="list-item-divider"></div>
    <div class="list-item three-line non-interactive">
        <span class="leading-content">
            <span class="leading-avatar">I</span>
        </span>
        <div class="content">
            <span class="overline-text">Category</span>
            <span class="label-text">Three-Line Informational Item</span>
            <span class="supporting-text">Detailed description that spans multiple lines for context.</span>
        </div>
    </div>
</div>
```

**CSS Styling:**

```css
/* Standard List Items (No Fill) */
.list-item:not(.segmented) { /* Ensures this applies only to standard non-segmented items */
    background-color: transparent;
}
.list-item.non-interactive {
    cursor: default; /* No pointer cursor for non-interactive lists */
}

/* Divider for Standard Lists */
.list-item-divider {
    height: var(--md-comp-list-list-item-divider-height); /* 1px */
    background-color: var(--md-comp-list-list-item-divider-color); /* --md-sys-color-outline-variant */
    margin-left: var(--md-comp-list-list-item-divider-leading-space); /* 16px */
    margin-right: var(--md-comp-list-list-item-divider-trailing-space); /* 16px */
}
```

-----

#### 2. Segmented List (with Fill)

  * **Description**: A list where each item has a distinct background fill and is separated by a 2px gap, but the container itself is transparent.
  * **Key Characteristics**: `segmented` class, `background-color: var(--md-sys-color-surface-bright)`, `margin-bottom: 2px` between items. Never show dividers on segmented lists. Trailing text 'C'. 

**HTML Structure:**

```html
<div class="list-container">
    <a href="#" class="list-item one-line segmented genux-ripple" role="listitem" tabindex="0">
        <span class="leading-content">
            <span class="material-symbols-outlined">star</span>
        </span>
        <div class="content">
            <span class="label-text">Segmented Item One</span>
        </div>
        <span class="trailing-content">
            <span class="trailing-text">C</span>
        </span>
    </a>
    <a href="#" class="list-item one-line segmented genux-ripple" role="listitem" tabindex="0">
        <span class="leading-content">
            <span class="material-symbols-outlined">favorite</span>
        </span>
        <div class="content">
            <span class="label-text">Segmented Item Two</span>
        </div>
        <span class="trailing-content">
            <span class="trailing-text">C</span>
        </span>
    </a>
    <a href="#" class="list-item one-line segmented genux-ripple" role="listitem" tabindex="0">
        <span class="leading-content">
            <span class="material-symbols-outlined">cloud</span>
        </span>
        <div class="content">
            <span class="label-text">Segmented Item Three</span>
        </div>
        <span class="trailing-content">
            <span class="trailing-text">C</span>
        </span>
    </a>
</div>
```

**CSS Styling:**

```css
/* Segmented List Item Styling */
.list-item.segmented {
    background-color: var(--md-sys-color-surface-bright); /* Item fill */
    margin-bottom: 2px; /* 2px gap between items */
}
.list-item.segmented:last-of-type {
    margin-bottom: 0; /* No gap after the last segmented item */
}
/* Ensure no dividers are rendered within segmented groups */
.list-item.segmented + .list-item-divider {
    display: none;
}
```

-----

#### 3. Selectable Lists

  * **Description**: Lists where items can be selected, featuring visual feedback for selected, unselected, and disabled states. They use a segmented style base.
  * **Key Characteristics**: `selectable` class, `background-color: var(--md-sys-color-surface-bright)` by default, changes to `var(--md-comp-list-list-item-selected-container-color)` (secondary-container) on selection. `border-radius` changes from 4dp to 16dp on selection. Icons and text color update. Disabled state shows 38% opacity.

**HTML Structure:**

```html
<div class="list-container">
    <a href="#" class="list-item one-line selectable genux-ripple" data-type="selectable" role="checkbox" aria-checked="false" tabindex="0">
        <span class="leading-content">
            <span class="material-symbols-outlined">check_box_outline_blank</span>
        </span>
        <div class="content">
            <span class="label-text">Selectable Item (Unselected)</span>
        </div>
    </a>
    <a href="#" class="list-item two-line selectable selected genux-ripple" data-type="selectable" role="checkbox" aria-checked="true" tabindex="0">
        <span class="leading-content">
            <span class="material-symbols-outlined">check_box</span>
        </span>
        <div class="content">
            <span class="label-text">Selectable Item (Selected)</span>
            <span class="supporting-text">This item is currently chosen.</span>
        </div>
    </a>
    <a href="#" class="list-item one-line selectable disabled genux-ripple" data-type="selectable" role="checkbox" aria-checked="false" tabindex="-1">
        <span class="leading-content">
            <span class="material-symbols-outlined">check_box_outline_blank</span>
        </span>
        <div class="content">
            <span class="label-text">Disabled Selectable Item</span>
        </div>
    </a>
</div>
```

**CSS Styling:**

```css
/* Selectable List Items Default State (Segmented style base) */
.list-item.selectable {
    background-color: var(--md-sys-color-surface-bright); /* Explicitly set fill for selectable list items */
    margin-bottom: 2px; /* 2px gap as per segmented style */
}
.list-item.selectable:last-of-type {
    margin-bottom: 0; /* No gap after last item */
}

/* Selected State for Selectable List Items */
.list-item.selectable.selected {
    background-color: var(--md-comp-list-list-item-selected-container-color); /* secondary-container */
    border-radius: var(--md-sys-shape-corner-large); /* 16dp radius */
}
.list-item.selectable.selected .label-text,
.list-item.selectable.selected .supporting-text { /* Apply color to all relevant text */
    color: var(--md-comp-list-list-item-selected-label-text-color); /* on-secondary-container */
}
.list-item.selectable.selected .leading-icon .material-symbols-outlined {
    color: var(--md-comp-list-list-item-selected-with-leading-icon-icon-color); /* on-secondary-container */
}
.list-item.selectable.selected .trailing-icon .material-symbols-outlined {
    color: var(--md-comp-list-list-item-selected-trailing-icon-color);
}

/* Disabled State for Selectable List Items */
.list-item.selectable.disabled {
    background-color: var(--md-sys-color-surface-bright); /* Retain segmented fill */
}
.list-item.disabled .leading-icon .material-symbols-outlined,
.list-item.disabled .trailing-icon .material-symbols-outlined,
.list-item.disabled .leading-avatar {
    /* Directly apply rgba color to ensure 38% opacity for disabled icons/avatars */
    color: rgba(var(--md-sys-color-on-surface-rgb), var(--md-comp-list-list-item-disabled-leading-icon-opacity));
    background-color: rgba(0, 0, 0, 0.04); /* Adjusted for disabled avatar background */
}
```

**JavaScript (Common for Selectable/Expandable):**

```javascript
// Located within the main DOMContentLoaded listener

const listItems = document.querySelectorAll('.list-item[data-type]');

listItems.forEach(item => {
    item.addEventListener('click', function(event) {
        if (this.tagName === 'A') {
            event.preventDefault(); // Prevent page jump for anchor tags
        }
        if (this.classList.contains('disabled')) {
            return; // Exit if disabled
        }

        const type = this.dataset.type;

        if (type === 'selectable') {
            const isSelected = this.classList.toggle('selected');
            this.setAttribute('aria-checked', isSelected);
            const leadingIcon = this.querySelector('.leading-content .material-symbols-outlined');
            if (leadingIcon) {
                leadingIcon.textContent = isSelected ? 'check_box' : 'check_box_outline_blank';
                // Color update handled by CSS classes
            }
        } else if (type === 'expandable') {
            const isExpanded = this.classList.toggle('expanded');
            this.setAttribute('aria-expanded', isExpanded);
            const nextSibling = this.nextElementSibling;
            if (nextSibling && nextSibling.classList.contains('accordion-content')) {
                nextSibling.classList.toggle('hidden', !isExpanded);
            }
        }
    });
});
```

-----

#### 4. Accordion Lists

  * **Description**: Expandable list items that reveal nested content, also styled as segmented list items.
  * **Key Characteristics**: `accordion` class, `segmented` style, `expand_more` icon that rotates. Nested content (within `.accordion-content`) has no background fill and minimal padding. Nested elements are also `list-item`s.

**HTML Structure:**

```html
<div class="list-container">
    <a href="#" class="list-item two-line accordion segmented genux-ripple" data-type="expandable" role="button" aria-expanded="false" tabindex="0">
        <span class="leading-content">
            <span class="material-symbols-outlined">folder</span>
        </span>
        <div class="content">
            <span class="label-text">Accordion Folder</span>
            <span class="supporting-text">Click to see contents</span>
        </div>
        <span class="trailing-content">
            <span class="trailing-icon">
                <span class="material-symbols-outlined">expand_more</span>
            </span>
        </span>
    </a>
    <div class="accordion-content hidden">
        <a href="#" class="list-item one-line segmented genux-ripple" role="listitem" tabindex="0">
            <span class="leading-content">
                <span class="material-symbols-outlined">description</span>
            </span>
            <div class="content">
                <span class="label-text">File 1.pdf</span>
            </div>
        </a>
        <a href="#" class="list-item one-line segmented genux-ripple" role="listitem" tabindex="0">
            <span class="leading-content">
                <span class="material-symbols-outlined">article</span>
            </span>
            <div class="content">
                <span class="label-text">Document.docx</span>
            </div>
        </a>
        <div class="list-item one-line segmented"> {/* Example of a nested button within a list item */}
            <span class="leading-content"> {/* For alignment */} </span>
            <div class="content">
                <button class="button text genux-ripple" role="button"><span>Manage Permissions</span></button>
            </div>
        </div>
    </div>
    {/* ... More accordion items ... */}
</div>
```

**CSS Styling:**

```css
/* Accordion List Item */
.list-item.accordion .trailing-icon .material-symbols-outlined {
    transition: transform 0.3s ease-in-out; /* Smooth rotation for icon */
}
.list-item.accordion.expanded .trailing-icon .material-symbols-outlined {
    transform: rotate(180deg);
}

/* Accordion Content Container */
.accordion-content {
    background-color: transparent; /* No background fill */
    padding: 0 0 2px 0; /* Adjusted padding-bottom to 2px */
}

/* Nested List Items within Accordion Content */
.accordion-content .list-item {
    border-radius: 0; /* Nested items don't have individual rounding */
    padding-left: calc(var(--md-comp-list-list-item-leading-space) + 20px); /* Indent nested items */
    min-height: 48px; /* Standard height for nested list items */
}
.accordion-content .list-item .leading-content {
    width: 40px; /* Adjust leading content width for nested items */
}
.accordion-content.hidden {
    display: none;
}
```

**JavaScript (See Common JS section above for `data-type="expandable"` logic).**

-----

#### 5. Draggable Lists

  * **Description**: Lists where items can be reordered via drag-and-drop, providing visual feedback during the process. They use a segmented style.
  * **Key Characteristics**: `draggable="true"`, `dragging` class for visual lift, color/shape change during drag, visible drop zone.

**HTML Structure:**

```html
<div class="list-container" id="draggable-list">
    <a href="#" class="list-item one-line segmented genux-ripple draggable" draggable="true" data-id="1" role="listitem" tabindex="0">
        <span class="leading-content">
            <span class="material-symbols-outlined">drag_indicator</span>
        </span>
        <div class="content">
            <span class="label-text">Task A: Buy groceries</span>
        </div>
    </a>
    <a href="#" class="list-item one-line segmented genux-ripple draggable" draggable="true" data-id="2" role="listitem" tabindex="0">
        <span class="leading-content">
            <span class="material-symbols-outlined">drag_indicator</span>
        </span>
        <div class="content">
            <span class="label-text">Task B: Finish report</span>
        </div>
    </a>
    <a href="#" class="list-item one-line segmented genux-ripple draggable" draggable="true" data-id="3" role="listitem" tabindex="0">
        <span class="leading-content">
            <span class="material-symbols-outlined">drag_indicator</span>
        </span>
        <div class="content">
            <span class="label-text">Task C: Call John</span>
        </div>
    </a>
</div>
```

**CSS Styling:**

```css
/* Draggable List Items */
.list-item.draggable {
    cursor: grab; /* Cursor when not dragging */
    transition: opacity 0.1s ease-out, transform 0.1s ease-out; /* Smooth transitions */
}
.list-item.draggable.dragging {
    opacity: 0.7; /* Semi-transparent when dragging */
    box-shadow: 0 var(--md-comp-list-list-item-dragged-container-elevation) var(--md-comp-list-list-item-dragged-container-elevation) rgba(0,0,0,0.2); /* Elevation */
    transform: scale(1.02); /* Slight scale */
    background-color: var(--md-sys-color-tertiary-container); /* Fill color when dragging */
    color: var(--md-sys-color-on-tertiary-container); /* Text/icon color when dragging */
    border-radius: var(--md-sys-shape-corner-large); /* 16dp radius when dragging */
    cursor: grabbing; /* Cursor when actively dragging */
}
/* Ensure all nested text/icons within a dragging item also change color */
.list-item.draggable.dragging .label-text,
.list-item.draggable.dragging .supporting-text,
.list-item.draggable.dragging .overline-text,
.list-item.draggable.dragging .leading-icon .material-symbols-outlined,
.list-item.draggable.dragging .trailing-icon .material-symbols-outlined {
    color: var(--md-sys-color-on-tertiary-container);
}

/* Drop Zone Indicator */
.drop-zone-indicator {
    height: 2px;
    background-color: var(--md-sys-color-surface-container); /* Visual drop zone color */
    margin: 0 16px; /* Inset matching list item padding */
    transition: height 0.1s ease-out;
}
```

**JavaScript:**

```javascript
// Located within the main DOMContentLoaded listener

const draggableList = document.getElementById('draggable-list');
let draggedItem = null;
let currentDropZone = null;

if (draggableList) {
    draggableList.addEventListener('dragstart', (e) => {
        draggedItem = e.target.closest('.draggable');
        if (draggedItem) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', draggedItem.dataset.id);
            setTimeout(() => { /* Add class after data is set to avoid screenshot issues */
                draggedItem.classList.add('dragging');
            }, 0);
        }
    });

    draggableList.addEventListener('dragover', (e) => {
        e.preventDefault(); // Necessary to allow drop
        const targetItem = e.target.closest('.draggable');
        
        // Clear previous drop zone indicator
        if (currentDropZone) {
            currentDropZone.remove();
            currentDropZone = null;
        }

        if (targetItem && targetItem !== draggedItem) {
            const boundingBox = targetItem.getBoundingClientRect();
            const offset = boundingBox.y + (boundingBox.height / 2);
            
            // Create and insert new drop zone indicator
            const dropZone = document.createElement('div');
            dropZone.classList.add('drop-zone-indicator');
            currentDropZone = dropZone;

            if (e.clientY < offset) {
                // Dragging upwards, insert before target
                draggableList.insertBefore(dropZone, targetItem);
            } else {
                // Dragging downwards, insert after target
                draggableList.insertBefore(dropZone, targetItem.nextSibling);
            }
        }
    });

    draggableList.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem && currentDropZone) {
            draggableList.insertBefore(draggedItem, currentDropZone);
        }
        if (currentDropZone) {
            currentDropZone.remove();
            currentDropZone = null;
        }
        draggedItem.classList.remove('dragging');
        draggedItem = null;
    });

    draggableList.addEventListener('dragend', () => {
        if (draggedItem) {
            draggedItem.classList.remove('dragging');
            draggedItem = null;
        }
        if (currentDropZone) {
            currentDropZone.remove();
            currentDropZone = null;
        }
    });

    draggableList.addEventListener('dragleave', (e) => {
        // Remove drop zone if dragging outside the list or over dragged item itself
        if (currentDropZone && !draggableList.contains(e.relatedTarget)) {
            currentDropZone.remove();
            currentDropZone = null;
        }
    });
}
```

-----

#### 6. Swipeable Lists (Segmented Style)

  * **Description**: Swipeable list items allow users to reveal contextual actions, such as "archive" or "delete", by swiping a list item horizontally or by clicking a trailing 'more' icon. This pattern keeps the UI clean while providing powerful, in-context actions.
  * **Key Characteristics**: `swipeable-list-wrapper` for layout, `segmented` style, `more_vert` trailing icon. Complex touch gesture handling in JS.

##### Anatomy and HTML Structure

A swipeable list item requires a specific nested structure: a wrapper to contain both the visible content and the hidden actions.

1.  **`.list-item-wrapper`**: The root container. It uses `position: relative` to act as a positioning context for the actions and `overflow: hidden` to clip the actions when they are not revealed.
2.  **`.list-item-actions`**: Absolutely positioned containers that sit *behind* the list item content. There are two variants: `.left` (for actions revealed by swiping right) and `.right` (for actions revealed by swiping left).
3.  **`.list-item-content`**: The visible, interactive part of the list item that the user sees and swipes. It must have a higher `z-index` than the actions. It should also have the `genux-ripple` class if it's a clickable target.
4.  **`.action-button`**: Standard icon buttons placed inside the `.list-item-actions` containers. They should also have the `genux-ripple` class.

<!-- end list -->

**HTML Structure:**
```html
<div class="list-item-wrapper">
    <div class="list-item-actions left">
        <button class="action-button genux-ripple" data-action="star">
            <span class="material-symbols-outlined">star</span>
        </button>
    </div>

    <div class="list-item-content genux-ripple">
        <span class="flex-shrink-0 mr-4">
            <span class="material-symbols-outlined" style="color: var(--md-sys-color-primary);">mail</span>
        </span>
        <div class="flex-grow">
            <span class="font-semibold block">New Message</span>
            <span class="text-gray-600 block">You have a new email from John Doe.</span>
        </div>
        <span class="flex-shrink-0 ml-4 cursor-pointer more-icon">
            <span class="material-symbols-outlined">more_vert</span>
        </span>
    </div>

    <div class="list-item-actions right">
        <button class="action-button genux-ripple" data-action="archive">
            <span class="material-symbols-outlined">archive</span>
        </button>
        <button class="action-button genux-ripple" data-action="delete">
            <span class="material-symbols-outlined">delete</span>
        </button>
    </div>
</div>
```

-----

##### CSS Implementation

The following CSS provides the core mechanism for the swipe interaction. It handles the layout, positioning, transitions, and visibility of the components.

```css
/* Custom styles for swipe animation */
.list-item-wrapper {
    position: relative;
    overflow: hidden; /* Hide overflowing action buttons */
    border-radius: var(--md-sys-shape-corner-extra-small); /* 4dp rounded corners for individual items */
    margin-bottom: 2px; /* 2px gap between items as per segmented style */
    touch-action: pan-y; /* Allow vertical scrolling, but JS handles horizontal */
}
.list-item-wrapper:last-of-type {
    margin-bottom: 0;
}

.list-item-content {
    display: flex;
    align-items: center;
    background-color: var(--md-sys-color-surface-bright); /* Use a fill color for swipeable items */
    padding: 16px;
    transition: transform 0.3s ease-out; /* Smooth transition for snap-back */
    z-index: 10; /* Must be above the actions */
    position: relative;
    min-height: 88px; /* For three-line list item compatibility */
    box-sizing: border-box;
}

.list-item-actions {
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2px; /* Space between icon buttons */
    visibility: hidden; /* Hide by default, shown by JS/state class */
    opacity: 0;
    transition: visibility 0.3s ease, opacity 0.3s ease;
    z-index: 5;
    border-radius: inherit;
}

.list-item-actions.left {
    left: 0;
    justify-content: flex-start;
}
.list-item-actions.right {
    right: 0;
    justify-content: flex-end;
}

/* Add a margin to the content when swiped to create a visual gap */
.list-item-wrapper.swiped-left .list-item-content,
.list-item-wrapper.swiped-right .list-item-content {
    border-radius: 16px; /* Larger radius when swiped */
    margin-right: 2px;
    margin-left: 2px;
}

/* Show actions when wrapper has swiped classes */
.list-item-wrapper.swiped-left .list-item-actions.right,
.list-item-wrapper.swiped-right .list-item-actions.left {
    visibility: visible;
    opacity: 1;
}

/* Styles for action buttons (icon buttons) */
.action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 46px; /* User specified min-width */
    height: 100%; /* Fill height of list item */
    border-radius: 24px; /* Pill shape for icon buttons */
    border: none;
    cursor: pointer;
    background-color: var(--md-sys-color-secondary-container); /* Example fill */
    color: var(--md-sys-color-on-secondary-container);
    font-size: var(--md-comp-list-list-item-leading-icon-size); /* 24px */
    transition: background-color 0.2s ease;
    position: relative;
    overflow: hidden;
}

/* State layer for hover/focus/press on action buttons */
.action-button::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
    border-radius: inherit;
}
.action-button:hover::after { opacity: var(--md-sys-state-hover-state-layer-opacity); }
.action-button:focus-visible::after { opacity: var(--md-sys-state-focus-state-layer-opacity); }
.action-button:active::after { opacity: var(--md-sys-state-pressed-state-layer-opacity); }
```

-----

##### JavaScript Implementation

This script provides the complete logic for handling swipe gestures with both touch and mouse, managing the state of multiple items, and providing alternative access via the "more" icon. This should be placed in a `<script>` tag before the closing `</body>`.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.list-item-wrapper');
    let activeItemWrapper = null; // To track the currently open item

    // A simple function to show a message (optional, for demoing actions)
    function showMessageBox(message) {
        const existingBox = document.getElementById('message-box');
        if (!existingBox) return;
        existingBox.textContent = message;
        existingBox.classList.add('show');
        setTimeout(() => existingBox.classList.remove('show'), 3000);
    }

    listItems.forEach(wrapper => {
        const item = wrapper.querySelector('.list-item-content');
        if (!item) return;

        const leftActions = wrapper.querySelector('.list-item-actions.left');
        const rightActions = wrapper.querySelector('.list-item-actions.right');
        const moreIcon = wrapper.querySelector('.more-icon');

        let startX = 0, startY = 0, initialTranslate = 0;
        let isSwiping = false, isVerticalScrolling = false, isDragging = false;

        // Calculate the width needed to reveal actions
        const getActionWidth = (actions) => {
            if (!actions) return 0;
            const buttons = actions.querySelectorAll('.action-button');
            if (buttons.length === 0) return 0;
            // Assumes 46px min-width per button and 2px gap
            return (buttons.length * 46) + (Math.max(0, buttons.length - 1) * 2);
        };

        const widthForRightActions = getActionWidth(rightActions);
        const widthForLeftActions = getActionWidth(leftActions);
        
        const minSwipeDistanceToOpenRight = Math.max(23, widthForRightActions * 0.5);
        const minSwipeDistanceToOpenLeft = Math.max(23, widthForLeftActions * 0.5);

        const resetItemPosition = (animate = true) => {
            if (animate) {
                item.style.transition = 'transform 0.3s ease-out';
            }
            item.style.transform = 'translateX(0)';
            wrapper.classList.remove('swiped-left', 'swiped-right');
            if (leftActions) leftActions.style.width = '0px';
            if (rightActions) rightActions.style.width = '0px';
            if (activeItemWrapper === wrapper) {
                activeItemWrapper = null;
            }
        };
        
        const openActions = (side) => {
            if (activeItemWrapper && activeItemWrapper !== wrapper) {
                activeItemWrapper.querySelector('.list-item-content').style.transform = 'translateX(0)';
                activeItemWrapper.classList.remove('swiped-left', 'swiped-right');
            }
            activeItemWrapper = wrapper;

            item.style.transition = 'transform 0.3s ease-out';
            if (side === 'left' && rightActions) {
                item.style.transform = `translateX(-${widthForRightActions}px)`;
                wrapper.classList.add('swiped-left');
                wrapper.classList.remove('swiped-right');
                rightActions.style.width = `${widthForRightActions}px`;
            } else if (side === 'right' && leftActions) {
                item.style.transform = `translateX(${widthForLeftActions}px)`;
                wrapper.classList.add('swiped-right');
                wrapper.classList.remove('swiped-left');
                leftActions.style.width = `${widthForLeftActions}px`;
            }
        };

        const handleDragStart = (clientX, clientY) => {
            if (activeItemWrapper && activeItemWrapper !== wrapper) {
                resetItemPosition.call(activeItemWrapper.querySelector('.list-item-content'));
            }
            
            startX = clientX;
            startY = clientY;
            const matrix = new DOMMatrixReadOnly(window.getComputedStyle(item).transform);
            initialTranslate = matrix.m41;
            item.style.transition = 'none';
            isSwiping = false;
            isVerticalScrolling = false;
        };

        const handleDragMove = (clientX, clientY, e) => {
            const diffX = clientX - startX;
            const diffY = clientY - startY;

            if (!isSwiping && !isVerticalScrolling) {
                if (Math.abs(diffX) > 10 && Math.abs(diffX) > Math.abs(diffY)) {
                    isSwiping = true;
                    if(e) e.preventDefault();
                } else if (Math.abs(diffY) > 10) {
                    isVerticalScrolling = true;
                }
            }

            if (isSwiping) {
                if(e) e.preventDefault();
                let newTranslate = initialTranslate + diffX;

                const effectiveWidth = newTranslate < 0 ? widthForRightActions : widthForLeftActions;
                if (newTranslate < -effectiveWidth) newTranslate = -effectiveWidth;
                if (newTranslate > effectiveWidth) newTranslate = effectiveWidth;

                item.style.transform = `translateX(${newTranslate}px)`;
                
                // Dynamically size the action container during swipe
                if (newTranslate < 0 && rightActions) {
                    rightActions.style.width = `${Math.abs(newTranslate)}px`;
                } else if (newTranslate > 0 && leftActions) {
                    leftActions.style.width = `${newTranslate}px`;
                }
            }
        };

        const handleDragEnd = () => {
            if (isSwiping) {
                const currentX = new DOMMatrixReadOnly(window.getComputedStyle(item).transform).m41;
                if (currentX < -minSwipeDistanceToOpenRight) {
                    openActions('left');
                } else if (currentX > minSwipeDistanceToOpenLeft) {
                    openActions('right');
                } else {
                    resetItemPosition();
                }
            }
            isSwiping = false;
            isVerticalScrolling = false;
            isDragging = false;
        };

        // Touch Events
        item.addEventListener('touchstart', (e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
        item.addEventListener('touchmove', (e) => handleDragMove(e.touches[0].clientX, e.touches[0].clientY, e), { passive: false });
        item.addEventListener('touchend', handleDragEnd);

        // Mouse Events
        item.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isDragging = true;
            handleDragStart(e.clientX, e.clientY);
        });
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            handleDragMove(e.clientX, e.clientY, e);
        });
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            handleDragEnd();
        });

        // "More" icon click handler
        if (moreIcon) {
            moreIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (wrapper.classList.contains('swiped-left') || wrapper.classList.contains('swiped-right')) {
                    resetItemPosition();
                } else {
                    if (rightActions) openActions('left');
                    else if (leftActions) openActions('right');
                }
            });
        }
        
        // Close active item when clicking anywhere else
        document.addEventListener('click', (e) => {
            if (activeItemWrapper && !activeItemWrapper.contains(e.target)) {
                const activeItem = activeItemWrapper.querySelector('.list-item-content');
                if (activeItem) {
                    activeItem.style.transition = 'transform 0.3s ease-out';
                    activeItem.style.transform = 'translateX(0)';
                    activeItemWrapper.classList.remove('swiped-left', 'swiped-right');
                    activeItemWrapper = null;
                }
            }
        });

        // Handle action button clicks
        wrapper.querySelectorAll('.action-button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = button.dataset.action;
                showMessageBox(`Action: "${action}" clicked!`);
                resetItemPosition();
            });
        });
    });
});
```

---


## Menu Components

Menus display a list of choices on a temporary surface. They appear in front of all other UI elements when triggered by an element like a button, icon, or text-field. Menus allow users to make a selection from multiple options.


### Guidelines

  * **When to Use**: Use menus to offer users a set of related choices without cluttering the main UI. They are ideal for actions in a toolbar, overflow options, or filtering controls.
  * **Anatomy**: A menu consists of a container, one or more menu items, and optional dividers.
      * **Container**: The surface that holds all menu items. It should have a distinct elevation and shape.
      * **Menu Item**: The individual, selectable choice within the menu. It can contain text, an icon, and supporting text (like a keyboard shortcut). The menu item container shape must follow the menu item tokens.
      * **Divider**: An optional thin line used to group related menu items.
  * **Grouping and Separation**: To convey a strong sense of organization, the preferred presentation is to use **Menu Groups**. Each group is a visually distinct container for a set of related items. While dividers can still be used for simple separation, menu groups should be the default choice for structured menus.
  * **Behavior**:
      * **Positioning**: Menus are positioned relative to the element that triggers them. They should open without being clipped by the viewport.
      * **Closing**: A menu should close when the user selects an item, clicks outside the menu container, or presses the `Escape` key.
  * **Variants**:
      * **Context Menu:** A menu that appears upon a right-click or long-press action. It is positioned at the cursor's coordinates.
      * **Sub-menu:** A menu that appears when a user hovers over a parent menu item, creating a cascading effect.
  * **Accessibility**:
      * The menu container should have `role="menu"`.
      * Each selectable item should have `role="menuitem"`.
      * The trigger element should use `aria-haspopup="true"` and `aria-expanded` to indicate the menu's state to screen readers.
      * Ensure full keyboard navigation using `ArrowKeys`, `Enter`, and `Escape`.
  * **Color**: Menus come in two color variants, standard and vibrant. Vibrant is based on `tertiary-container` color roles.

### Appearing Motion

*   Menus use a fade transition pattern (fast) (`md.sys.motion` easing/duration may apply) to enter and exit the screen, creating a relationship with the interactive element that generates the menu.
*   When a menu expands, the following transitions occur (these may refer to specific implementation details and not universal tokens):
    *   A menu list fades in and has a slight downward motion.
    *   Stroke width of the separation line thickens, and its color changes to blue from grey (Note: This refers to visual changes possibly tied to selection or state, not a standard motion token).
    *   The text label scales down in size and moves upwards (Note: This refers to visual changes possibly tied to a "populated" state or specific menu types like in Text Fields, not a standard menu motion).
    *   A downward arrow fades out, and an upward arrow fades in (Note: Refers to icon changes on expandable menu items).


### Menu Component - Tokens

---

**Token Set**: `md.comp.menu`

#### Color Tokens

###### **Standard**

* **Enabled**
    * `container.color`: `md.comp.menu.container.color` = `md.sys.color.surface-container-low`
    * `container.shadow-color`: `md.comp.menu.container.shadow-color` = `md.sys.color.shadow`
    * `label-text.color`: `md.comp.menu.menu-item.label-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.menu.menu-item.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `leading-icon.color`: `md.comp.menu.menu-item.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.menu.menu-item.trailing-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-supporting-text.color`: `md.comp.menu.menu-item.trailing-supporting-text.color` = `md.sys.color.on-surface-variant`

* **Disabled**
    * `label-text.color`: `md.comp.menu.menu-item.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.menu.menu-item.disabled.label-text.opacity` = `0.38`
    * `supporting-text.color`: `md.comp.menu.menu-item.disabled.supporting-text.color` = `md.sys.color.on-surface`
    * `supporting-text.opacity`: `md.comp.menu.menu-item.disabled.supporting-text.opacity` = `0.38`
    * `leading-icon.color`: `md.comp.menu.menu-item.disabled.leading-icon.color` = `md.sys.color.on-surface`
    * `leading-icon.opacity`: `md.comp.menu.menu-item.disabled.leading-icon.opacity` = `0.38`
    * `trailing-icon.color`: `md.comp.menu.menu-item.disabled.trailing-icon.color` = `md.sys.color.on-surface`
    * `trailing-icon.opacity`: `md.comp.menu.menu-item.disabled.trailing-icon.opacity` = `0.38`
    * `trailing-supporting-text.color`: `md.comp.menu.menu-item.disabled.trailing-supporting-text.color` = `md.sys.color.on-surface`
    * `trailing-supporting-text.opacity`: `md.comp.menu.menu-item.disabled.trailing-supporting-text.opacity` = `0.38`

* **Hovered**
    * `state-layer.color`: `md.comp.menu.menu-item.hovered.state-layer.color` = `md.sys.color.tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.menu-item.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.menu-item.hovered.label-text.color` = `md.sys.color.on-surface-state-content`
    * `leading-icon.icon.color`: `md.comp.menu.menu-item.hovered.leading-icon.icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.icon.color`: `md.comp.menu.menu-item.hovered.trailing-icon.icon.color` = `md.sys.color.on-surface-variant`

* **Focused**
    * `state-layer.color`: `md.comp.menu.menu-item.focused.state-layer.color` = `md.sys.color.on-surface-state-layer`
    * `state-layer.opacity`: `md.comp.menu.menu-item.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.menu-item.focused.label-text.color` = `md.sys.color.on-surface-state-content`
    * `leading-icon.color`: `md.comp.menu.menu-item.focused.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.menu.menu-item.focused.trailing-icon.color` = `md.sys.color.on-surface-variant`

* **Pressed**
    * `state-layer.color`: `md.comp.menu.menu-item.pressed.state-layer.color` = `md.sys.color.tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.menu-item.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.menu-item.pressed.label-text.color` = `md.sys.color.on-surface-state-content`
    * `leading-icon.color`: `md.comp.menu.menu-item.pressed.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.menu.menu-item.pressed.trailing-icon.color` = `md.sys.color.on-surface-variant`

###### **Standard, Selected**

* **Enabled**
    * `container.color`: `md.comp.menu.menu-item.selected.color` = `md.sys.color.tertiary-container`
    * `label-text.color`: `md.comp.menu.menu-item.selected.label-text.color` = `md.sys.color.on-tertiary-container`
    * `supporting-text.color`: `md.comp.menu.menu-item.selected.supporting-text.color` = `md.sys.color.on-tertiary-container`
    * `leading-icon.color`: `md.comp.menu.menu-item.selected.leading-icon.color` = `md.sys.color.on-tertiary-container`
    * `trailing-icon.color`: `md.comp.menu.menu-item.selected.trailing-icon.color` = `md.sys.color.on-tertiary-container`
    * `trailing-supporting-text.color`: `md.comp.menu.menu-item.selected.trailing-supporting-text.color` = `md.sys.color.on-tertiary-container`

* **Disabled**
    * `container.color`: `md.comp.menu.menu-item.selected.disabled.container.color` = `md.sys.color.tertiary-container`
    * `container.opacity`: `md.comp.menu.menu-item.selected.disabled.container.opacity` = `0.38`
    * `label-text.color`: `md.comp.menu.menu-item.selected.disabled.label-text.color` = `md.sys.color.on-tertiary-container`
    * `label-text.opacity`: `md.comp.menu.menu-item.selected.disabled.label-text.opacity` = `0.38`

* **Hovered**
    * `state-layer.color`: `md.comp.menu.menu-item.selected.hovered.state-layer.color` = `md.sys.color.tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.menu-item.selected.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.menu-item.selected.hovered.label-text.color` = `md.sys.color.tertiary-state-content`

* **Focused**
    * `state-layer.color`: `md.comp.menu.menu-item.selected.focused.state-layer.color` = `md.sys.color.tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.menu-item.selected.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.menu-item.selected.focused.label-text.color` = `md.sys.color.tertiary-state-content`

* **Pressed**
    * `state-layer.color`: `md.comp.menu.menu-item.selected.pressed.state-layer.color` = `md.sys.color.tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.menu-item.selected.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.menu-item.selected.pressed.label-text.color` = `md.sys.color.on-tertiary-container`

###### **Vibrant**

* **Enabled**
    * `container.color`: `md.comp.menu.vibrant.menu-item.color` = `md.sys.color.tertiary-container`
    * `label-text.color`: `md.comp.menu.vibrant.menu-item.label-text.color` = `md.sys.color.tertiary`
    * `supporting-text.color`: `md.comp.menu.vibrant.menu-item.supporting-text.color` = `md.sys.color.tertiary`
    * `leading-icon.color`: `md.comp.menu.vibrant.menu-item.leading-icon.color` = `md.sys.color.tertiary`
    * `trailing-icon.color`: `md.comp.menu.vibrant.menu-item.trailing-icon.color` = `md.sys.color.tertiary`

* **Disabled**
    * `label-text.color`: `md.comp.menu.vibrant.menu-item.disabled.label-text.color` = `md.sys.color.tertiary`
    * `label-text.opacity`: `md.comp.menu.vibrant.menu-item.disabled.label-text.opacity` = `0.38`
    * `leading-icon.color`: `md.comp.menu.vibrant.menu-item.disabled.leading-icon.color` = `md.sys.color.tertiary`
    * `leading-icon.opacity`: `md.comp.menu.vibrant.menu-item.disabled.leading-icon.opacity` = `0.38`

* **Hovered**
    * `state-layer.color`: `md.comp.menu.vibrant.menu-item.hovered.state-layer.color` = `md.sys.color.tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.vibrant.menu-item.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.vibrant.menu-item.hovered.label-text.color` = `md.sys.color.on-surface-state-content`

* **Focused**
    * `state-layer.color`: `md.comp.menu.vibrant.menu-item.focused.state-layer.color` = `md.sys.color.on-tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.vibrant.menu-item.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.vibrant.menu-item.focused.label-text.color` = `md.sys.color.on-tertiary-state-content`

* **Pressed**
    * `state-layer.color`: `md.comp.menu.vibrant.menu-item.pressed.state-layer.color` = `md.sys.color.tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.vibrant.menu-item.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.vibrant.menu-item.pressed.label-text.color` = `md.sys.color.on-tertiary-state-content`

###### **Vibrant, Selected**

* **Enabled**
    * `container.color`: `md.comp.menu.vibrant.menu-item.selected.color` = `md.sys.color.tertiary`
    * `label-text.color`: `md.comp.menu.vibrant.menu-item.selected.label-text.color` = `md.sys.color.on-tertiary`
    * `leading-icon.color`: `md.comp.menu.vibrant.menu-item.selected.leading-icon.color` = `md.sys.color.on-tertiary`
    * `trailing-icon.color`: `md.comp.menu.vibrant.menu-item.selected.trailing-icon.color` = `md.sys.color.on-tertiary`

* **Disabled**
    * `label-text.opacity`: `md.comp.menu.vibrant.menu-item.selected.disabled.label-text.opacity` = `0.38`
    * `leading-icon.opacity`: `md.comp.menu.vibrant.menu-item.selected.disabled.leading-icon.opacity` = `0.38`
    * `trailing-icon.opacity`: `md.comp.menu.vibrant.menu-item.selected.disabled.trailing-icon.opacity` = `0.38`

* **Hovered**
    * `state-layer.color`: `md.comp.menu.vibrant.menu-item.selected.hovered.state-layer.color` = `md.sys.color.tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.vibrant.menu-item.selected.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.vibrant.menu-item.selected.hovered.label-text.color` = `md.sys.color.on-tertiary-state-content`

* **Focused**
    * `state-layer.color`: `md.comp.menu.vibrant.menu-item.selected.focused.state-layer.color` = `md.sys.color.on-surface-state-layer`
    * `state-layer.opacity`: `md.comp.menu.vibrant.menu-item.selected.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.vibrant.menu-item.selected.focused.label-text.color` = `md.sys.color.on-surface-state-content`
    
* **Pressed**
    * `state-layer.color`: `md.comp.menu.vibrant.menu-item.selected.pressed.state-layer.color` = `md.sys.color.tertiary-state-layer`
    * `state-layer.opacity`: `md.comp.menu.vibrant.menu-item.selected.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `label-text.color`: `md.comp.menu.vibrant.menu-item.selected.label-text.color` = `md.sys.color.on-tertiary`

---

#### Elevation Tokens

* `container.elevation`: `md.comp.menu.container.elevation` = `md.sys.elevation.level2`
* `horizontal.container.elevation`: `md.comp.menu.horizontal.container.elevation` = `md.sys.elevation.level2`

---

#### Shape & Size Tokens

##### **Base**
* `container.shape`: `md.comp.menu.container.shape` = `md.sys.shape.corner.large`
* `container.height`: `md.comp.menu.container.height` = `dynamic`
* `container.width`: `md.comp.menu.container.width` = `dynamic`
* `menu-item.shape`: `md.comp.menu.menu-item.shape` = `md.sys.shape.corner.small`
* `menu-item.selected.shape`: `md.comp.menu.menu-item.selected.shape` = `md.sys.shape.corner.full`
* `menu-item.first-child.shape`: `md.comp.menu.menu-item.first-child.shape` = `md.sys.shape.corner.large`
* `menu-item.last-child.shape`: `md.comp.menu.menu-item.last-child.shape` = `md.sys.shape.corner.large`
* `leading-icon.size`: `md.comp.menu.menu-item.leading-icon.size` = `20dp`
* `trailing-icon.size`: `md.comp.menu.menu-item.trailing-icon.size` = `20dp`

##### **Layout**
* `menu-item.top-space`: `md.comp.menu.menu-item.top-space` = `8dp`
* `menu-item.bottom-space`: `md.comp.menu.item.bottom-space` = `8dp`
* `menu-item.leading-space`: `md.comp.menu.menu-item.leading-space` = `16dp`
* `menu-item.trailing-space`: `md.comp.menu.menu-item.trailing-space` = `16dp`
* `menu-item.between-space`: `md.comp.menu.menu-item.between-space` = `12dp`

##### **Horizontal**
* `container.shape`: `md.comp.menu.horizontal.container.shape` = `calc(md.sys.shape.large-increased + md.sys.shape.large)`
* `menu-item.hovered.shape`: `md.comp.menu.horizontal.menu-item.hovered.shape` = `md.sys.shape.corner.small`
* `menu-item.focused.shape`: `md.comp.menu.horizontal.menu-item.focused.shape` = `md.sys.shape.corner.small`
* `menu-item.pressed.shape`: `md.comp.menu.horizontal.menu-item.pressed.shape` = `md.sys.shape.corner.full`
* `menu-item.selected.hovered.shape`: `md.comp.menu.horizontal.menu-item.selected.hovered.shape` = `md.sys.shape.corner.full`
* `menu-item.selected.focused.shape`: `md.comp.menu.horizontal.menu-item.selected.focused.shape` = `md.sys.shape.corner.full`
* `menu-item.selected.pressed.shape`: `md.comp.menu.horizontal.menu-item.selected.pressed.shape` = `md.sys.shape.corner.full`

---

#### Typography Tokens

* **Label Text**
    * `label-text.font`: `md.comp.menu.menu-item.label-text.font` = `md.sys.typescale.body-large.font`
    * `label-text.line-height`: `md.comp.menu.menu-item.label-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `label-text.size`: `md.comp.menu.menu-item.label-text.size` = `md.sys.typescale.body-large.size`
    * `label-text.weight`: `md.comp.menu.menu-item.label-text.weight` = `md.sys.typescale.body-large.weight`
* **Supporting Text**
    * `supporting-text.font`: `md.comp.menu.menu-item.supporting-text.font` = `md.sys.typescale.body-medium.font`
    * `supporting-text.line-height`: `md.comp.menu.menu-item.supporting-text.line-height` = `md.sys.typescale.body-medium.line-height`
    * `supporting-text.size`: `md.comp.menu.menu-item.supporting-text.size` = `md.sys.typescale.body-medium.size`
    * `supporting-text.weight`: `md.comp.menu.menu-item.supporting-text.weight` = `md.sys.typescale.body-medium.weight`
* **Trailing Supporting Text**
    * `trailing-supporting-text.font`: `md.comp.menu.menu-item.trailing-supporting-text.font` = `md.sys.typescale.label-small.font`
    * `trailing-supporting-text.line-height`: `md.comp.menu.menu-item.trailing-supporting-text.line-height` = `md.sys.typescale.label-small.line-height`
    * `trailing-supporting-text.size`: `md.comp.menu.menu-item.trailing-supporting-text.size` = `md.sys.typescale.label-small.size`
    * `trailing-supporting-text.weight`: `md.comp.menu.menu-item.trailing-supporting-text.weight` = `md.sys.typescale.label-small.weight`

---

### Menu Component - Code Samples & Implementation

**Implementation Guide:**

* **Trigger Element:** A menu is anchored to a trigger element, typically a button. The trigger **MUST** have a `data-menu-trigger` attribute whose value is the `id` of the menu container it controls. It should also include `aria-haspopup="true"`.
* **Menu Container:** The main container requires the `.menu-container` class. It is hidden by default and made visible with a `.visible` class, which is managed by the provided JavaScript.
* **Menu Items:** Each selectable option is a `.menu-item`. Inside, a `.menu-item-content` wrapper is **CRITICAL** for correct padding, styling, and the ripple effect.
* **Icons & Text:** Menus support a leading icon (`<span class="material-symbols-outlined">...</span>`), a label (`<span class="label-text">...</span>`), and trailing text for shortcuts (`<span class="trailing-text">...</span>`).
* **States:**
    * Apply the `.selected` class to a `.menu-item` to indicate the currently active selection.
    * Apply the `.disabled` class to a `.menu-item` to make it non-interactive. This also requires `aria-disabled="true"`.
* **Sub-menus:** To create a sub-menu, add the `.has-submenu` class to a parent `.menu-item`. Inside this item, nest a new `.menu-container` with the `.submenu` class. The parent item must contain a trailing icon indicating the sub-menu.
* **Ripple Effect:** The ripple interaction effect **MUST** be enabled by adding the `.genux-ripple` class to the trigger button and to each `.menu-item-content` element.
* **JavaScript Requirement:** The interactive functionality of the menu (opening, closing, sub-menus, and ripple effects) is entirely dependent on the provided JavaScript. It **MUST** be included for the component to work.

#### Visual Defect Checklists:

1.  Ensure the menu container appears directly below its trigger button upon activation.
2.  Verify that the top and bottom corners of the menu container are correctly rounded. The first and last menu items should also have their corners rounded appropriately to match the container.
3.  Confirm that the ripple effect is properly contained within the bounds of the menu item's content area (`.menu-item-content`).
4.  For sub-menus, check that they appear adjacent to their parent menu item and do not overlap incorrectly.
5.  Disabled items should have a noticeable visual difference (e.g., lower opacity) and not react to hover or click events.

#### CRITICAL: Ripple Effect and Sub-menu Implementation

This is a critical rule that overrides the standard ripple implementation for the specific case of a **Menu Item that contains a sub-menu**. Following this rule is mandatory to prevent the sub-menu from being hidden.

**The Conflict:** The standard `.genux-ripple` class requires `overflow: hidden` to correctly clip the ripple effect. However, if this class is applied to a parent `.menu-item`, it will also clip any child sub-menu that is designed to appear outside the parent's boundaries, making it impossible to see.

**The Solution:** For menu items that have sub-menus, we must apply the ripple effect to an *inner container* rather than the main `.menu-item` wrapper. This isolates the `overflow: hidden` property, allowing the sub-menu to display correctly.

> **THE RULE:** For a `.menu-item` that contains a `.submenu`, the `.genux-ripple` class **MUST** be applied to the child `.menu-item-content` element, **NOT** the parent `.menu-item`. The parent `.menu-item` itself must have `position: relative` to correctly position the sub-menu, but **MUST NOT** have `overflow: hidden`.

```css
/* --- Menu Component Styles --- */
.menu-container {
    position: absolute;
    background-color: var(--md-sys-color-surface-container-low);
    border-radius: var(--md-sys-shape-corner-large);
    box-shadow: var(--md-sys-elevation-level2-shadow);
    padding: 4px 0;
    min-width: 200px;
    z-index: 10;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.15s, opacity 0.15s, transform 0.15s;
    transform-origin: top left;
    transform: scale(0.95);
}
.menu-container.visible {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
}

.menu-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0;
    margin: 0 4px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    border-radius: 4px;
    overflow: hidden;
}

/* CRITICAL: Ripple container inside the menu item */
.menu-item-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 44px;
    padding: 6px 12px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
    font-family: var(--md-sys-typescale-body-large-font-family);
    color: var(--md-sys-color-on-surface);
    transition: background-color 0.2s, border-radius 0.2s;
}

.menu-item:first-child{
    border-radius: 16px 16px 4px 4px;
}
.menu-item:last-child{
    border-radius: 4px 4px 16px 16px;
}

.menu-item .label-text {
    flex-grow: 1;
    white-space: nowrap;
    text-align: left;
}
.menu-item .trailing-text {
    margin-left: auto;
    color: var(--md-sys-color-on-surface-variant);
}
.menu-item .material-symbols-outlined {
    margin-right: 12px;
    color: var(--md-sys-color-on-surface-variant);
    font-size: 20px;
}
.menu-item .trailing-icon {
    margin-left: auto;
    display: flex;
    align-items: center;
}
.menu-item .trailing-icon .material-symbols-outlined {
    margin-right: 0px;
}
.menu-divider {
    height: 1px;
    background-color: var(--md-sys-color-outline);
    margin: 8px 0;
}

/* --- States --- */
.menu-item:not(.disabled) .menu-item-content:hover,
.menu-item:not(.disabled) .menu-item-content:focus-visible {
    background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.08);
    border-radius: 4px;
}
.menu-item.selected .menu-item-content {
    background-color: var(--md-sys-color-secondary-container);
    color: var(--md-sys-color-on-secondary-container);
    border-radius: 12px;
}
.menu-item.selected .material-symbols-outlined {
    color: var(--md-sys-color-on-secondary-container);
}
.menu-item.disabled {
    cursor: not-allowed;
}
.menu-item.disabled .menu-item-content {
    color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}
.menu-item.disabled .material-symbols-outlined {
    color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

/* --- Grouped Menu --- */
.menu-container.grouped {
    background-color: transparent;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0;
    width: 280px;
    border-radius: var(--md-sys-shape-corner-large);
}
.menu-group {
    background-color: var(--md-sys-color-surface-container-low);
    border-radius: var(--md-sys-shape-corner-small);
    box-shadow: var(--md-sys-elevation-level2-shadow);
    padding: 4px 0;
}
.menu-group:first-child {
    border-radius: 20px 20px 4px 4px;
}
.menu-group:last-child {
    border-radius: 4px 4px 20px 20px;
}

/* --- Sub-menu --- */
.menu-item.has-submenu {
    overflow: visible; /* CRITICAL: Allow submenu to be visible */
}
.menu-item .submenu {
    left: calc(100% - 8px);
    top: -5px;
}
````

```html
<!-- Standard Menu Trigger -->
<button class="menu-button genux-ripple" id="menu-trigger-1" data-menu-trigger="menu-1" aria-haspopup="true" aria-expanded="false">
    <span>Actions</span>
</button>

<!-- Standard Menu Container -->
<div class="menu-container" id="menu-1" role="menu" aria-labelledby="menu-trigger-1">
    <div class="menu-item" role="menuitem" tabindex="0">
        <div class="menu-item-content genux-ripple">
            <span class="material-symbols-outlined">content_copy</span>
            <span class="label-text">Copy</span>
        </div>
    </div>
    <div class="menu-item selected" role="menuitem" tabindex="0">
        <div class="menu-item-content genux-ripple">
            <span class="material-symbols-outlined">content_paste</span>
            <span class="label-text">Paste</span>
        </div>
    </div>
    <div class="menu-divider"></div>
    <div class="menu-item disabled" role="menuitem" aria-disabled="true">
        <div class="menu-item-content">
            <span class="material-symbols-outlined">delete</span>
            <span class="label-text">Delete</span>
        </div>
    </div>
</div>


<!-- Grouped Menu with Sub-menu Trigger -->
<button class="menu-button genux-ripple" id="menu-trigger-3" data-menu-trigger="menu-3" aria-haspopup="true" aria-expanded="false">
    <span>Share</span>
</button>

<!-- Grouped Menu with Sub-menu Container -->
<div class="menu-container" id="menu-3" role="menu" aria-labelledby="menu-trigger-3">
    <div class="menu-item" role="menuitem" tabindex="0">
        <div class="menu-item-content genux-ripple">
            <span class="material-symbols-outlined">link</span>
            <span class="label-text">Copy link</span>
        </div>
    </div>
    <div class="menu-item has-submenu" role="menuitem" tabindex="0" aria-haspopup="true" aria-expanded="false">
        <div class="menu-item-content genux-ripple">
            <span class="material-symbols-outlined">send</span>
            <span class="label-text">Send to</span>
            <span class="trailing-icon">
                <span class="material-symbols-outlined">chevron_right</span>
            </span>
        </div>
        <!-- Sub-menu nested inside -->
        <div class="menu-container submenu" role="menu">
            <div class="menu-item" role="menuitem" tabindex="0">
                <div class="menu-item-content genux-ripple">
                    <span class="label-text">Email</span>
                </div>
            </div>
            <div class="menu-item" role="menuitem" tabindex="0">
                <div class="menu-item-content genux-ripple">
                    <span class="label-text">Messages</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

```javascript
// This script is required for menu functionality.
document.addEventListener('DOMContentLoaded', () => {
    let activeMenu = null;
    let activeSubmenu = null;
    let submenuTimeout;

    function closeActiveMenu() {
        if (activeMenu) {
            activeMenu.container.classList.remove('visible');
            activeMenu.trigger.setAttribute('aria-expanded', 'false');
            activeMenu = null;
        }
    }
    
    function closeActiveSubmenu() {
        if (activeSubmenu) {
            activeSubmenu.container.classList.remove('visible');
            activeSubmenu.parentItem.setAttribute('aria-expanded', 'false');
            activeSubmenu = null;
        }
    }

    // --- Main Menu Toggle Logic ---
    document.querySelectorAll('.menu-button').forEach(trigger => {
        const menuId = trigger.getAttribute('data-menu-trigger');
        const menuContainer = document.getElementById(menuId);

        if (menuContainer) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                if (activeMenu && activeMenu.container === menuContainer) {
                    closeActiveMenu();
                } else {
                    closeActiveMenu();
                    
                    menuContainer.style.top = `${trigger.offsetTop + trigger.offsetHeight + 4}px`;
                    menuContainer.style.left = `${trigger.offsetLeft}px`;

                    menuContainer.classList.add('visible');
                    trigger.setAttribute('aria-expanded', 'true');
                    activeMenu = { trigger, container: menuContainer };
                }
            });
        }
    });

    // --- Sub-menu Logic ---
    document.querySelectorAll('.has-submenu').forEach(parentItem => {
        const submenuContainer = parentItem.querySelector('.submenu');
        
        parentItem.addEventListener('mouseover', () => {
            clearTimeout(submenuTimeout);
             if (activeSubmenu && activeSubmenu.container !== submenuContainer) {
                closeActiveSubmenu();
            }
            submenuContainer.classList.add('visible');
            parentItem.setAttribute('aria-expanded', 'true');
            activeSubmenu = { parentItem, container: submenuContainer };
        });
        
        parentItem.addEventListener('mouseleave', () => {
           submenuTimeout = setTimeout(() => {
                closeActiveSubmenu();
            }, 200);
        });
    });

    // --- Global Close Listener ---
    document.addEventListener('click', (e) => {
        if (activeMenu && !activeMenu.container.contains(e.target) && !activeMenu.trigger.contains(e.target)) {
            closeActiveMenu();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeActiveMenu();
        }
    });

    // --- Ripple Effect ---
    document.addEventListener('click', function (e) {
        const target = e.target.closest('.genux-ripple');
        if (!target) return;
        
        const existingRipples = target.querySelectorAll('.ripple-effect');
        existingRipples.forEach(ripple => ripple.remove());

        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;
        const rect = target.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-effect');

        let rippleColor = 'rgba(0, 0, 0, 0.1)'; 
        if(target.closest('.menu-button')) {
            rippleColor = 'rgba(255, 255, 255, 0.2)';
        }
        circle.style.backgroundColor = rippleColor;
        
        target.appendChild(circle);

        circle.addEventListener('animationend', () => {
            circle.remove();
        }, { once: true });
    });
});
```

---

## Navigation Bar Component

  * **Usage**: The Navigation Bar should only be used for primary navigation destinations and is exclusively for compact and medium screen sizes. Do not use it for secondary navigation or on larger (extended, large, extra-large) screens where a Navigation Rail is more appropriate.
  * **Anatomy**: Each navigation item must consist of an icon and a text label. The active item is highlighted with a pill-shaped indicator behind the icon.
  * **Behavior**: Tapping a navigation item should immediately navigate the user to the corresponding view. The entire item, including the icon and label, should be a single, tappable target. The icon is outlined in the unselected state and filled in the selected state.
  * **Interaction**: All navigation items must provide interactive feedback. This includes a state layer for hover/focus and a ripple effect on press, consistent with other interactive components in the system.

### Navigation Bar Component - Tokens

---

### Navigation Bar

**Token Set**: `md.comp.nav-bar`

---

#### Color Tokens

* **Enabled**
    * `container.shadow-color`: `md.comp.nav-bar.container.shadow-color` = `md.sys.color.shadow`
    * `container.color`: `md.comp.nav-bar.container.color` = `md.sys.color.surface-container`
    * `item.active.indicator.color`: `md.comp.nav-bar.item.active.indicator.color` = `md.sys.color.secondary-container`
    * `item.active.label-text.color`: `md.comp.nav-bar.item.active.label-text.color` = `md.sys.color.secondary`
    * `item.inactive.label-text.color`: `md.comp.nav-bar.item.inactive.label-text.color` = `md.sys.color.on-surface-variant`
    * `item.active.icon.color`: `md.comp.nav-bar.item.active.icon.color` = `md.sys.color.on-secondary-container`
    * `item.inactive.icon.color`: `md.comp.nav-bar.item.inactive.icon.color` = `md.sys.color.on-surface-variant`

* **Hovered**
    * `item.active.hovered.state-layer.color`: `md.comp.nav-bar.item.active.hovered.state-layer.color` = `md.sys.color.on-secondary-container`
    * `item.active.hovered.state-layer.opacity`: `md.comp.nav-bar.item.active.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `item.hovered.state-layer.color`: `md.comp.nav-bar.item.hovered.state-layer.color` = `md.sys.color.on-secondary-container`

* **Focused**
    * `item.active.focused.state-layer.color`: `md.comp.nav-bar.item.active.focused.state-layer.color` = `md.sys.color.on-secondary-container`
    * `item.active.focused.state-layer.opacity`: `md.comp.nav-bar.item.active.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `item.inactive.focused.state-layer.color`: `md.comp.nav-bar.item.inactive.focused.state-layer.color` = `md.sys.color.on-secondary-container`

* **Pressed**
    * `item.active.pressed.state-layer.color`: `md.comp.nav-bar.item.active.pressed.state-layer.color` = `md.sys.color.on-secondary-container`
    * `item.active.pressed.state-layer.opacity`: `md.comp.nav-bar.item.active.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `item.inactive.pressed.state-layer.color`: `md.comp.nav-bar.item.inactive.pressed.state-layer.color` = `md.sys.color.on-secondary-container`

---

#### Elevation Tokens

* **Enabled**
    * `container.elevation`: `md.comp.nav-bar.container.elevation` = `md.sys.elevation.level2`
    
---

#### Layout & Shape

* `item.container.alignment`: `md.comp.nav-bar.item.container.alignment` = `top-center`
* `item.between-space`: `md.comp.nav-bar.item.between-space` = `0dp`
* `item.alignment`: `md.comp.nav-bar.item.alignment` = `center-aligned`
* `item.active-indicator.shape`: `md.comp.nav-bar.item.active-indicator.shape` = `md.sys.shape.corner.full`
* `item.icon.size`: `md.comp.nav-bar.item.icon.size` = `24dp`
* `container.height`: `md.comp.nav-bar.container.height` = `64dp`
* `container.shape`: `md.comp.nav-bar.container.shape` = `md.sys.shape.corner.none`

---

#### Navigation Bar Horizontal

**Token Set**: `md.comp.nav-bar.item.horizontal`

* `item.horizontal.active-indicator.height`: `md.comp.nav-bar.item.horizontal.active-indicator.height` = `40dp`
* `item.horizontal.active-indicator.leading-space`: `md.comp.nav-bar.item.horizontal.active-indicator.leading-space` = `16dp`
* `item.horizontal.active-indicator.trailing-space`: `md.comp.nav-bar.item.horizontal.active-indicator.trailing-space` = `16dp`
* `item.horizontal.active-indicator.icon-label-space`: `md.comp.nav-bar.item.horizontal.active-indicator.icon-label-space` = `4dp`
* `item.horizontal.label-text.font`: `md.comp.nav-bar.item.horizontal.label-text.font` = `md.sys.typescale.label-medium`
* `item.horizontal.label-text.alignment`: `md.comp.nav-bar.item.horizontal.label-text.alignment` = `left-aligned`

---

#### Navigation Bar Vertical

**Token Set**: `md.comp.nav-bar.item.vertical`

* `item.vertical.active-indicator.height`: `md.comp.nav-bar.item.vertical.active-indicator.height` = `32dp`
* `item.vertical.active-indicator.width`: `md.comp.nav-bar.item.vertical.active-indicator.width` = `56dp`
* `item.vertical.container.between-space`: `md.comp.nav-bar.item.vertical.container.between-space` = `6dp`
* `item.vertical.active-indicator.icon-label-space`: `md.comp.nav-bar.item.vertical.active-indicator.icon-label-space` = `4dp`
* `item.vertical.label-text.font`: `md.comp.nav-bar.item.vertical.label-text.font` = `md.sys.typescale.label-medium`
* `item.vertical.label-text.alignment`: `md.comp.nav-bar.item.vertical.label-text.alignment` = `center-aligned`

---

### Navigation Bar Component - Code Samples & Implementation

The Navigation Bar provides navigation at the bottom of the screen for compact viewports (under 600px).

**Implementation Guide:**
  * **Structure:** The component consists of a <nav class="navigation-bar"> container holding a series of <a> tags with the class `nav-item`. It's designed for 3 to 5 destinations.
  * **Active State:** The currently selected destination is indicated by adding an `.active` class to the corresponding `.nav-item`. This will apply the filled icon and bold text styles.
  * **Badges:** To display a notification, add a <div class="badge"> inside the `.icon-container`. A badge with just a number will be a pill shape. To create a simple notification dot, add the `.dot` class to the badge element.

  #### Visual Defect Checklists: 
  1. "Are the nav-items vertically centered within the `navigation-bar`? -> Fix: Apply `align-items: center;` to `nav-item`.

```css
/* --- Navigation Bar Component Styles --- */
.navigation-bar {
    display: flex;
    justify-content: space-around;
    position: fixed; /* comment out for floating navigation bar */
    bottom: 0; 
    left: 0; 
    right: 0;
    height: 64px;
    background-color: var(--md-sys-color-surface-container);
    box-shadow: var(--md-sys-elevation-level2-shadow);
    padding-top: 6px;
    box-sizing: border-box;
    z-index: 100;
    /* border-radius: 16px; */ /* Example border radius for floating navigation bar */
    padding: 0;
}
.navigation-bar .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    flex-grow: 1;
    position: relative;
    -webkit-tap-highlight-color: transparent;
}
.navigation-bar .nav-item .icon-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 56px;
    border-radius: 16px; /* Pill shape */
    transition: background-color 150ms ease-in-out;
    margin-bottom: 4px;
}
.navigation-bar .nav-item .material-symbols-outlined {
    font-size: 24px;
    color: var(--md-sys-color-on-surface-variant);
    transition: color 150ms ease-in-out, font-variation-settings 200ms ease;
    font-variation-settings: 'FILL' 0; /* Default to outlined */
}
.navigation-bar .nav-item .label-text {
    font-family: var(--md-sys-typescale-label-medium-font-family);
    font-size: var(--md-sys-typescale-label-medium-font-size);
    font-weight: var(--md-sys-typescale-label-medium-font-weight);
    line-height: var(--md-sys-typescale-label-medium-line-height);
    color: var(--md-sys-color-on-surface-variant);
    transition: color 150ms ease-in-out;
}

/* Active state styling */
.navigation-bar .nav-item.active .icon-container {
    background-color: var(--md-sys-color-secondary-container);
}
.navigation-bar .nav-item.active .material-symbols-outlined {
    color: var(--md-sys-color-on-secondary-container);
    font-variation-settings: 'FILL' 1; /* Filled icon for active state */
}
.navigation-bar .nav-item.active .label-text {
    color: var(--md-sys-color-on-surface);
    font-weight: 700;
}
/* Add padding to the bottom of the body to prevent content from being obscured by the nav bar */
@media (max-width: 599px) {
    body { padding-bottom: 64px; }
}
```

```html
<!-- Standard 3-Item Navigation Bar -->
<nav class="navigation-bar">
    <a href="#" class="nav-item active" aria-label="Recents" data-view-target="view-recents">
        <div class="icon-container">
            <span class="material-symbols-outlined">schedule</span>
        </div>
        <span class="label-text">Recents</span>
    </a>
    <a href="#" class="nav-item" aria-label="Favorites" data-view-target="view-favorites">
        <div class="icon-container">
            <span class="material-symbols-outlined">favorite</span>
        </div>
        <span class="label-text">Favorites</span>
    </a>
    <a href="#" class="nav-item" aria-label="Nearby" data-view-target="view-nearby">
        <div class="icon-container">
            <span class="material-symbols-outlined">place</span>
        </div>
        <span class="label-text">Nearby</span>
    </a>
</nav>

<!-- Navigation Bar with Badges -->
<nav class="navigation-bar">
    <a href="#" class="nav-item active" aria-label="Inbox" data-view-target="view-inbox">
        <div class="icon-container">
             <div class="badge">12</div>
            <span class="material-symbols-outlined">inbox</span>
        </div>
        <span class="label-text">Inbox</span>
    </a>
    <a href="#" class="nav-item" aria-label="Sent" data-view-target="view-sent">
        <div class="icon-container">
             <div class="badge dot"></div>
            <span class="material-symbols-outlined">send</span>
        </div>
        <span class="label-text">Sent</span>
    </a>
    <a href="#" class="nav-item" aria-label="Drafts" data-view-target="view-drafts">
        <div class="icon-container">
            <span class="material-symbols-outlined">draft</span>
        </div>
        <span class="label-text">Drafts</span>
    </a>
</nav>
```

---


### JavaScript Functionality

This script manages view switching and the responsive behavior of the Navigation Rail.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const navContainers = document.querySelectorAll('.navigation-rail, .navigation-bar');
    const navRail = document.getElementById('main-nav-rail');
    const toggleButton = document.getElementById('nav-rail-toggle');

    // --- 1. View & Active State Switching ---
    function switchView(event) {
        const navLink = event.target.closest('a.nav-item');
        if (!navLink || !navLink.dataset.viewTarget) return;
        
        event.preventDefault();
        const targetViewId = navLink.dataset.viewTarget;
        
        // Deactivate current view and activate the new one
        document.querySelectorAll('.view.active').forEach(v => v.classList.remove('active'));
        document.getElementById(targetViewId)?.classList.add('active');

        // Update the .active class on nav items in both nav components
        navContainers.forEach(container => {
            container.querySelectorAll('.nav-item.active').forEach(item => item.classList.remove('active'));
            const newActiveItems = container.querySelectorAll(`.nav-item[data-view-target="${targetViewId}"]`);
            newActiveItems.forEach(item => item.classList.add('active'));
        });
    }
    
    navContainers.forEach(container => container.addEventListener('click', switchView));
});
```

---

## Navigation Rail (Nav rail) Component

Navigation rails provide access to primary navigation destinations in an app. They are for use on **medium, expanded, large, or extra-large** window size classes (tablets and desktops) and should be placed on the leading edge of the UI. The rail should be the only primary navigation component visible on the screen; it must **not** be visible at the same time as a Navigation Bar.

### Guidelines

  * **Usage**: The Navigation Rail is the default primary navigation component for **Medium, Expanded, Large, and Extra Large** window size classes.
  * **Destinations**: The rail should typically contain between three and seven primary destinations.
  * **Variants**: It comes in two main variants:
      * **Collapsed**: The default state on most medium screens. It shows icons with text labels below the icon for a compact footprint. It should never be hidden.
      * **Expanded**: Shows icons and text labels inline. It can be the default on larger screens or can be toggled via a menu icon. It can also reveal secondary navigation items that are not present in the collapsed state.
  * **Placement**: The rail is always placed vertically on the leading edge of the window (left for LTR languages, right for RTL). It should be placed outside of any scrolling content panes.
  * **Alignment**: Navigation items can be grouped and aligned to the top or center of the rail. The menu icon and any Floating Action Button (FAB) must always be top-aligned. On tablets, center alignment is often preferred for better ergonomics.
  * **FAB Integration**: A FAB can be anchored to the top of the rail, placing the screen's primary action in a prominent, easy-to-access location, positioned above the navigation destinations.
  * **Interaction**: Tapping a destination navigates the user. The active destination is indicated by a pill-shaped indicator and a filled icon style and semi-bold label text.
  * **Transition:** The transition between collapsed and expanded states is triggered by a menu toggle (icon button) located at the top position of the rail.

### Anatomy

1.  **Container**: The main surface of the rail.
2.  **Menu (Optional)**: An icon button used to toggle between the collapsed and expanded states.
3.  **FAB (Optional)**: A Floating Action Button or Extended FAB for the screen's primary action. When a FAB is inside the Navigation Rail it should have no elevation (`box-shadow: none`) applied.
4.  **Icon**: Represents a navigation destination. Icons are outlined by default and become filled when their destination is active.
5.  **Active Indicator**: A pill-shaped container that highlights the icon of the active destination.
6.  **Label Text**: A short, one-word text label for a destination.
    * In the **collapsed state**, the label appears directly below its corresponding icon.
    * In the **expanded state**, the label appears inline, to the right of its icon.
7.  **Badge (Optional)**: A small dot or counter to communicate dynamic information (e.g., notification count).

### Navigation Rail (Nav rail) Component - Tokens

---

### Navigation Rail

**Token Set**: `md.comp.nav-rail`

---

#### Color Tokens

* **Enabled**
    * `item.active.indicator.color`: `md.comp.nav-rail.item.active.indicator.color` = `md.sys.color.secondary-container`
    * `item.active.label-text.color`: `md.comp.nav-rail.item.active.label-text.color` = `md.sys.color.secondary`
    * `item.inactive.label-text.color`: `md.comp.nav-rail.item.inactive.label-text.color` = `md.sys.color.on-surface-variant`
    * `item.active.icon.color`: `md.comp.nav-rail.item.active.icon.color` = `md.sys.color.on-secondary-container`
    * `item.inactive.icon.color`: `md.comp.nav-rail.item.inactive.icon.color` = `md.sys.color.on-surface-variant`

* **Hovered**
    * `item.active.hovered.state-layer.color`: `md.comp.nav-rail.item.active.hovered.state-layer.color` = `md.sys.color.on-secondary-container`
    * `item.active.hovered.state-layer.opacity`: `md.comp.nav-rail.item.active.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `item.inactive.hovered.state-layer.color`: `md.comp.nav-rail.item.inactive.hovered.state-layer.color` = `md.sys.color.on-secondary-container`

* **Focused**
    * `item.active.focused.state-layer.color`: `md.comp.nav-rail.item.active.focused.state-layer.color` = `md.sys.color.on-secondary-container`
    * `item.active.focused.state-layer.opacity`: `md.comp.nav-rail.item.active.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `item.inactive.focused.state-layer.color`: `md.comp.nav-rail.item.inactive.focused.state-layer.color` = `md.sys.color.on-secondary-container`

* **Pressed**
    * `item.active.pressed.state-layer.color`: `md.comp.nav-rail.item.active.pressed.state-layer.color` = `md.sys.color.on-secondary-container`
    * `item.active.pressed.state-layer.opacity`: `md.comp.nav-rail.item.active.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `item.inactive.pressed.state-layer.color`: `md.comp.nav-rail.item.inactive.pressed.state-layer.color` = `md.sys.color.on-secondary-container`

* **Nav-rail.collapsed**
    * `collapsed.container.color`: `md.comp.nav-rail.collapsed.container.color` = `md.sys.color.surface`

* **Nav-rail.expanded**
    * `expanded.container.color`: `md.comp.nav-rail.expanded.container.color` = `md.sys.color.surface`
    * `expanded.modal.container.color`: `md.comp.nav-rail.expanded.modal.container.color` = `md.sys.color.surface-container`

---

#### Elevation Tokens

* **Nav-rail.collapsed**
    * `collapsed.container.elevation`: `md.comp.nav-rail.collapsed.container.elevation` = `md.sys.elevation.level0`

* **Nav-rail.expanded**
    * `expanded.container.elevation`: `md.comp.nav-rail.expanded.container.elevation` = `md.sys.elevation.level0`
    * `expanded.modal.container.elevation`: `md.comp.nav-rail.expanded.modal.container.elevation` = `md.sys.elevation.level2`

---

#### Navigation Rail Common

* `item.icon.size`: `md.comp.nav-rail.item.icon.size` = `24dp`
* `item.active-indicator.shape`: `md.comp.nav-rail.item.active-indicator.shape` = `md.sys.shape.corner.full`
* `item.active-indicator.leading-space`: `md.comp.nav-rail.item.active-indicator.leading-space` = `16dp`
* `item.active-indicator.icon-label-space`: `md.comp.nav-rail.item.active-indicator.icon-label-space` = `8dp`
* `item.active-indicator.trailing-space`: `md.comp.nav-rail.item.active-indicator.trailing-space` = `16dp`
* `item.container.height`: `md.comp.nav-rail.item.container.height` = `64dp`
* `item.short.container.height`: `md.comp.nav-rail.item.short.container.height` = `56dp`
* `item.container.alignment`: `md.comp.nav-rail.item.container.alignment` = `top-center`
* `item.container.shape`: `md.comp.nav-rail.item.container.shape` = `md.sys.shape.corner.none`
* `item.container.vertical-space`: `md.comp.nav-rail.item.container.vertical-space` = `6dp`
* `item.alignment`: `md.comp.nav-rail.item.alignment` = `center-aligned`
* `item.header-space-minimum`: `md.comp.nav-rail.item.header-space-minimum` = `40dp`

---

#### Navigation Rail Collapsed

**Token Set**: `md.comp.nav-rail.collapsed`

* `collapsed.container.width`: `md.comp.nav-rail.collapsed.container.width` = `96dp`
* `collapsed.narrow.container.width`: `md.comp.nav-rail.collapsed.narrow.container.width` = `96dp`
* `collapsed.container.shape`: `md.comp.nav-rail.collapsed.container.shape` = `md.sys.shape.corner.none`
* `collapsed.item.vertical-space`: `md.comp.nav-rail.collapsed.item.vertical-space` = `4dp`
* `collapsed.top-space`: `md.comp.nav-rail.collapsed.top-space` = `44dp`
* `collapsed.item.alignment`: `md.comp.nav-rail.collapsed.item.alignment` = `center-aligned`

---

#### Navigation Rail Expanded

**Token Set**: `md.comp.nav-rail.expanded`

* `expanded.container.width.minimum`: `md.comp.nav-rail.expanded.container.width.minimum` = `220dp`
* `expanded.container.width.maximum`: `md.comp.nav-rail.expanded.container.width.maximum` = `360dp`
* `expanded.top-space`: `md.comp.nav-rail.expanded.top-space` = `44dp`
* `expanded.container.shape`: `md.comp.nav-rail.expanded.container.shape` = `md.sys.shape.corner.none`
* `expanded.modal.container.shape`: `md.comp.nav-rail.expanded.modal.container.shape` = `md.sys.shape.corner.large`
* `expanded.item.alignment`: `md.comp.nav-rail.expanded.item.alignment` = `left-aligned`

---

#### Navigation Rail Item Vertical

**Token Set**: `md.comp.nav-rail.item.vertical`

* `item.vertical.active-indicator.height`: `md.comp.nav-rail.item.vertical.active-indicator.height` = `32dp`
* `item.vertical.active-indicator.width`: `md.comp.nav-rail.item.vertical.active-indicator.width` = `56dp`
* `item.vertical.label-text.alignment`: `md.comp.nav-rail.item.vertical.label-text.alignment` = `center-aligned`
* `item.vertical.icon-label-space`: `md.comp.nav-rail.item.vertical.icon-label-space` = `4dp`
* `item.vertical.leading-space`: `md.comp.nav-rail.item.vertical.leading-space` = `16dp`
* `item.vertical.trailing-space`: `md.comp.nav-rail.item.vertical.trailing-space` = `16dp`
* `item.vertical.label-text.font`: `md.comp.nav-rail.item.vertical.label-text.font` = `md.sys.typescale.label-medium`

---

#### Navigation Rail Item Horizontal

**Token Set**: `md.comp.nav-rail.item.horizontal`

* `item.horizontal.label-text.alignment`: `md.comp.nav-rail.item.horizontal.label-text.alignment` = `left-aligned`
* `item.horizontal.active-indicator.height`: `md.comp.nav-rail.item.horizontal.active-indicator.height` = `56dp`
* `item.horizontal.full-width.leading-space`: `md.comp.nav-rail.item.horizontal.full-width.leading-space` = `16dp`
* `item.horizontal.full-width.trailing-space`: `md.comp.nav-rail.item.horizontal.full-width.trailing-space` = `16dp`
* `item.horizontal.icon-label-space`: `md.comp.nav-rail.item.horizontal.icon-label-space` = `8dp`
* `item.horizontal.label-text.font`: `md.comp.nav-rail.item.horizontal.label-text.font` = `md.sys.typescale.label-large`

---

### Navigation Rail Component - Code Samples & Implementation

**Implementation Guide:**

The Navigation Rail provides ergonomic, persistent navigation for medium and large screens (600dp and wider). It appears at the left side of the UI and can be configured to be either **Collapsed** or **Expanded**. It is collapsed by default on medium-width screens (600px-839px) and expanded on larger screens. It also includes an icon button to let the user manually toggle the state.

  * **Structure:** The component consists of a main `<nav class="navigation-rail">` container which holds an optional header (`.nav-rail-header`) and a list of destinations (`.nav-rail-items`).
  * **States:**
      * **Collapsed:** The default state. The container has a class of `.collapsed` and is 96px wide. The `<body>` tag should have a corresponding `.rail-collapsed` class to apply the correct left padding to the main content.
      * **Expanded:** Triggered by user action (e.g., clicking a menu icon). The container's class is switched to `.expanded`, and its width becomes 220px. The `<body>` tag's class should be switched to `.rail-expanded`.
  * **Active Destination:** The currently active navigation item is indicated by applying an `.active` class to the `<a>` tag. The JavaScript should handle switching this class as the user navigates.
  * **Dependencies:** The header section utilizes the `Icon Button` and `FAB` (Floating Action Button) components. Ensure their styles are available.
  * **Nav Item Width**: The `.nav-item` elements themselves **MUST** have `width: auto;`. This ensures their containers "hug" the content. Using `width: 100%;` is **INCORRECT**.
  * **FAB Color Integrity**: The FAB's icon and label **MUST** both use the `md.sys.color.on-primary-container` color role.
  * **CRITICAL STYLE:** `.navigation-rail.expanded .nav-item` must use `border-radius: md.sys.shape.corner.full` (`border-radius: 999px`).
  * **Navigation rail menu toggle with Top App Bar pairing:** If the page includes a top app bar in the page header position (at the top of the page and not inside a pane) the navigation menu button toggle should appear in the navigation rail and not in the top app bar.

#### Visual Defect Checklists: 
1. "Is the expanded nav item not a pill shape? -> Fix: Apply a full radius (`999px`)."
2. "Are the nav items (i.e. `.navigation-rail.expanded .nav-item`) stretching to fill the rail width (i.e. `width: 100%;`?" -> Fix: Ensure `width: auto;` is applied instead.
3. "Is the `nav-rail-header` icon button using proper icon button styling? -> Fix: Apply icon button component specific tokens and styles to accuaretly represent `md.comp.icon-button`.
4. "Is the leading icon of the navigation rail's FAB `on-primary-container` color? -> Fix: Apply `color: var(--md-sys-color-on-primary-container)` to `.navigation-rail .fab .material-symbols-outlined`.
5. "Is the navigation rail visually overlapping page content (i.e. `<main>`)? -> Fix: Ensure the `<body>` has left padding equal to the navigation rail width.
6. "Does the navigation rail visually sit flush to the left hand edge of the viewport? -> Fix: apply `position: fixed; left: 0; top: 0;` to the `.navigation-rail`.
7. "Does the navigation rail have a border (stroke) applied?" -> Fix: ensure `.navigation-rail` has `border: none;` applied.
8. "Is the collapsed navigation rail smaller than `96px` (i.e. `80px`)? -> Fix: ensure `.navigation-rail` has `width: 96px` applied by default.

```css
/* --- Generic Component Dependencies --- */
.icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle; 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--md-sys-color-on-surface-variant);
    flex-shrink: 0;
}

.fab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    border: none;
    color: var(--md-sys-color-on-primary-container);
    cursor: pointer;
    text-decoration: none;
    flex-shrink: 0;
    transition: width 300ms ease-in-out, height 300ms ease-in-out, 
                padding 300ms ease-in-out, gap 300ms ease-in-out, 
                border-radius 300ms ease-in-out;
}
.fab span,
.navigation-rail .fab .material-symbols-outlined {
    color: var(--md-sys-color-on-primary-container);
}
.fab .label {
    font: var(--md-sys-typescale-label-large);
    white-space: nowrap;
    color: var(--md-sys-color-on-primary-container);
    transition: opacity 150ms ease-in-out 100ms, width 300ms ease-in-out;
    opacity: 1;
    width: auto;
    overflow: hidden;
}
.fab.primary-container-color {
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
}

/* ------------------------- */
/* --- Navigation Rail --- */
/* ------------------------- */
.navigation-rail {
    display: flex; /* Hidden by default on mobile, shown via @media query */
    flex-direction: column;
    width: 96px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: none; /* should have no fill and blend seamlessly with the page background */
    transition: width 300ms ease-in-out;
    padding-top: 24px;
    box-sizing: border-box;
    z-index: 50;
    overflow: hidden;
    border: none;
}
body.rail-collapsed {
    padding-left: 96px;
}
body.rail-expanded {
    padding-left: 220px;
}
.nav-rail-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    padding: 0 12px;
    width: 100%;
    box-sizing: border-box;
}
.nav-rail-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: auto;
}
.navigation-rail .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    height: 56px;
    position: relative;
    border-radius: 999px;
}
.navigation-rail .icon-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 56px;
    border-radius: 16px;
    z-index: 1;
    transition: all 300ms ease-in-out;
}
.navigation-rail .indicator {
    position: absolute;
    inset: 0;
    background-color: var(--md-sys-color-secondary-container);
    border-radius: inherit;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
    z-index: -1;
}
.navigation-rail .material-symbols-outlined {
    font-size: 24px;
    z-index: 3;
}
.navigation-rail .label-text {
    font: var(--md-sys-typescale-label-medium);
    color: var(--md-sys-color-on-surface-variant);
    white-space: nowrap;
    transition: all 150ms ease-in-out 100ms;
}
.navigation-rail .nav-item .material-symbols-outlined{
    color: var(--md-sys-color-on-surface-variant);
    transition: color 150ms ease-in-out, font-variation-settings 150ms ease-in-out;
}
.navigation-rail .nav-item.active .material-symbols-outlined {
    font-variation-settings: 'FILL' 1;
}
.navigation-rail .nav-item.active .label-text {
    color: var(--md-sys-color-secondary);
}

/* --- Collapsed State --- */
.navigation-rail.collapsed {
    width: 96px;
}
.navigation-rail.collapsed .fab {
    width: 40px;
    height: 40px;
    border-radius: var(--md-sys-shape-corner-medium);
    padding: 0;
    gap: 0;
}
.navigation-rail.collapsed .fab .label {
    opacity: 0;
    width: 0;
}
.navigation-rail.collapsed .nav-item.active .indicator {
    opacity: 1;
    transform: scale(1);
}
.navigation-rail.collapsed .nav-item.active .material-symbols-outlined {
    color: var(--md-sys-color-on-secondary-container);
    z-index: 3;
}

/* --- Expanded State --- */
.navigation-rail.expanded {
    width: 220px;
    align-items: flex-start;
}
.navigation-rail.expanded .nav-rail-header {
    align-items: flex-start;
    padding: 0 16px;
}
.navigation-rail.expanded #nav-rail-toggle {
    margin-left: 12px;
}
.navigation-rail.expanded .fab {
    width: auto;
    height: 56px;
    padding: 0 20px;
    gap: 12px;
    border-radius: var(--md-sys-shape-corner-large);
}
.navigation-rail.expanded .nav-rail-items {
    padding: 0 16px;
    box-sizing: border-box;
    align-items: flex-start; /* This is the critical property to prevent stretching */
    gap: 0px;
}
.navigation-rail.expanded .nav-item {
    display: inline-flex;
    width: auto; /* This is the critical property to ensure the item container hugs it's content */
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 16px;
    gap: 12px;
    box-sizing: border-box; /* Prevents padding from breaking the width of parent container */
    border-radius: 999px;
}
.navigation-rail.expanded .icon-container {
    width: 24px;
}
.navigation-rail.expanded .label-text {
    opacity: 1;
    margin-top: 0;
}
.navigation-rail.expanded .nav-item .label-text {
    color: var(--md-sys-color-on-surface-variant);
}
.navigation-rail.expanded .nav-item.active {
    background-color: var(--md-sys-color-secondary-container);
}
.navigation-rail.expanded .nav-item.active .material-symbols-outlined,
.navigation-rail.expanded .nav-item.active .label-text {
    color: var(--md-sys-color-on-secondary-container);
}
.nav-item.active .label-text { font-weight: 700; }
.navigation-rail.expanded .nav-item.active .indicator {
    display: none;
}
/* --- Responsive Visibility --- */
@media (min-width: 600px) {
    .navigation-rail { display: flex; }
    .navigation-bar { display: none !important; }
    .nav-rail-header { align-items: flex-start; }
    .navigation-rail .icon-container{ width: 24px; }

    body.rail-collapsed {
        padding-left: 96px;
    }
    body.rail-expanded {
        padding-left: 220px;
    }
}
```

```html
<body class="rail-collapsed">
    <nav class="navigation-rail collapsed" id="main-nav-rail">
        <div class="nav-rail-header">
            <button class="icon-button genux-ripple" id="nav-rail-toggle" aria-label="Toggle navigation menu">
                <span class="material-symbols-outlined">menu</span>
            </button>
            <button class="fab primary-container-color genux-ripple" aria-label="Compose">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">edit</span>
                <span class="label">Compose</span>
            </button>
        </div>
        <div class="nav-rail-items">
            <a href="#" class="nav-item active" data-view-target="view-inbox" aria-label="Inbox">
                <div class="icon-container">
                    <span class="indicator"></span>
                    <span class="material-symbols-outlined">inbox</span>
                </div>
                <span class="label-text">Inbox</span>
            </a>
            <a href="#" class="nav-item" data-view-target="view-sent" aria-label="Sent">
                <div class="icon-container">
                    <span class="indicator"></span>
                    <span class="material-symbols-outlined">send</span>
                </div>
                <span class="label-text">Sent</span>
            </a>
            <a href="#" class="nav-item" data-view-target="view-favorites" aria-label="Favorites">
                <div class="icon-container">
                    <span class="indicator"></span>
                    <span class="material-symbols-outlined">favorite</span>
                </div>
                <span class="label-text">Favorites</span>
            </a>
        </div>
    </nav>
    <main class="pane">
        <!-- main content -->
    </main>
</body>
```

### JavaScript Functionality

This script manages view switching and the responsive behavior of the Navigation Rail.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const navContainers = document.querySelectorAll('.navigation-rail, .navigation-bar');
    const navRail = document.getElementById('main-nav-rail');
    const toggleButton = document.getElementById('nav-rail-toggle');

    // --- 1. View & Active State Switching ---
    function switchView(event) {
        const navLink = event.target.closest('a.nav-item');
        if (!navLink || !navLink.dataset.viewTarget) return;
        
        event.preventDefault();
        const targetViewId = navLink.dataset.viewTarget;
        
        // Deactivate current view and activate the new one
        document.querySelectorAll('.view.active').forEach(v => v.classList.remove('active'));
        document.getElementById(targetViewId)?.classList.add('active');

        // Update the .active class on nav items in both nav components
        navContainers.forEach(container => {
            container.querySelectorAll('.nav-item.active').forEach(item => item.classList.remove('active'));
            const newActiveItems = container.querySelectorAll(`.nav-item[data-view-target="${targetViewId}"]`);
            newActiveItems.forEach(item => item.classList.add('active'));
        });
    }
    
    navContainers.forEach(container => container.addEventListener('click', switchView));

    // --- 2. Navigation Rail Toggle & Responsive Logic ---
    if (toggleButton && navRail) {
        toggleButton.addEventListener('click', () => {
            const isCollapsed = navRail.classList.contains('collapsed');
            navRail.classList.toggle('collapsed', !isCollapsed);
            navRail.classList.toggle('expanded', isCollapsed);
            document.body.classList.toggle('rail-collapsed', !isCollapsed);
            document.body.classList.toggle('rail-expanded', isCollapsed);
            toggleButton.querySelector('.material-symbols-outlined').textContent = isCollapsed ? 'menu_open' : 'menu';
        });
    }

    // --- 3. Automatic Breakpoint Logic ---
    function handleResize() {
        if (!navRail) return;
        const width = window.innerWidth;
        // Breakpoint for auto-expanding the rail is 840px
        if (width >= 840) {
            navRail.classList.remove('collapsed');
            navRail.classList.add('expanded');
            document.body.classList.remove('rail-collapsed');
            document.body.classList.add('rail-expanded');
            if (toggleButton) {
                toggleButton.querySelector('.material-symbols-outlined').textContent = 'menu_open';
            }
        } else {
            navRail.classList.remove('expanded');
            navRail.classList.add('collapsed');
            document.body.classList.remove('rail-expanded');
            document.body.classList.add('rail-collapsed');
            if (toggleButton) {
                toggleButton.querySelector('.material-symbols-outlined').textContent = 'menu';
            }
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on page load
});
```

---

### Pane Component

A **pane** is a layout container component that holds other elements and content. The primary content must reside within a pane. Panes are fundamental layout containers within an application.

**Pane Attributes:**
*   **Motion:** Panes should use the `md.sys.motion.slow` motion properties for transitioning, displaying, or resizing.
*   **Internal Padding:** Content within a pane is inset from its edges due to internal padding. Padding value is dependent on window-class size.
*   **Vertical Fill:** Panes should generally fill the available vertical space, taking into account the overall screen margin.
*   **Hierarchy:**
    *   The **"primary"** pane (or **"focus pane"**) holds greater importance than a **"secondary"** pane (or **"supporting pane"**) as it presents the most critical information and actions.
    *   The primary pane should appear before the secondary pane on the screen (e.g., to the left or above).
*   **Surface & Containment:**
    *   Panes have a fill of `--md-sys-color-surface-bright` by default, but can blend in with the background (transparent fill).
*   **Nested Grids & Columns:**
    *   Panes can contain further nested grids.
    *   Content within a single pane can be displayed in multiple columns for segmentation and alignment.
*   **Bars:** Panes can include an app bar and/or a toolbar. Any nesting actions within the top app bar should be hidden or revealed based on available width.

**Pane Types & Behavior:**

Panes can be characterized by their sizing behavior and persistence:

*   **Fixed Pane:**
    *   Has a predetermined width that does not change with window resizing.
    *   Widths for fixed panes:
        *   **`360dp`:** The fixed pane width on `compact`, `medium`, and `expanded` window size classes.
        *   **`412dp`:** The fixed pane width on `large` and `extra-large` window size classes.
    *   Fixed panes are often used for side sheets or lists with light information density.
*   **Flexible Pane:**
    *   Adjusts its width to fill the remaining available screen space.
    *   All layouts must include at least one flexible pane to be responsive to any window size.

**Pane Layout Configurations:**

Layouts are typically made up of 1-3 panes.

*   **Single-Pane Layouts:**
    *   Use one flexible pane.
    *   Recommended for `compact` and `medium` window sizes, or for information-dense content in larger window sizes where focus is paramount.
*   **Two-Pane Layouts:**
    *   **Split-Pane:** Uses two flexible panes.
    *   **Fixed and Flexible:** Uses one fixed-width pane and one flexible pane.
        *   Typical for `expanded`, `large`, and `extra-large` windows.
    *   Recommended for `expanded` and `large` window sizes.
*   **Three-Pane Layouts:**
    *   Primarily supported in the `extra-large` window size class.
    *   Never use more than three panes.

**Pane Adaptation Strategies:**

Pane layouts adapt to changing window sizes and orientations using three main strategies:

1.  **Show and Hide:** Panes enter and exit the screen or appear next to one another as window size changes.
2.  **Levitate:** Panes can be elevated above other content, often appearing relative to their triggers. When adding resize or move controls to floating panes, ensure accessible controls are provided.
3.  **Reflow:** Panes reorganize on screen. For example, in a vertical orientation or smaller window, a secondary/supporting pane might move underneath the primary pane. When horizontal space allows, panes are presented next to each other in a row.

**Pane Resizing and Drag Handles:**

Panes can be resized, expanded, and collapsed, often using drag handles.

*   **Functionality:** Drag handles adjust the width of flexible panes or fully collapse/expand fixed panes, allowing quick switching between single-pane and two-pane views.
*   **Snapping:** In `expanded`, `large`, and `extra-large` window sizes, two-pane layouts can be customized to snap to their appropriate fixed pane widths when resized.
*   **Placement:**
    *   In a two-pane layout, the drag handle is placed in the center space between the panes.
*   **Accessibility:**
    *   Drag handles should have a hover state (e.g., changing size, cursor to hand).
    *   Keyboard interaction: Use `Tab` to navigate, `Space` or `Enter` to activate (which may auto-resize or select the handle for `Arrow` key resizing).
    *   Screen readers: Describe function (e.g., "Resize layout"), use role "button", and state current configuration (e.g., "left pane expanded," "panes equally sized").
*   **Alternatives:** If drag handles are not suitable, consider a toggle button to swap layouts or in-app layout settings.

### Pane Component - Tokens

**Token Set**: `md.comp.pane`

---

* `container.color`: `md.comp.pane.container.color` = `md.sys.color.surface-bright`
* `container.elevation`: `md.comp.pane.container.elevation` = `md.sys.elevation.level0`
* `container.shape`: `md.comp.pane.container.shape` = `md.sys.shape.corner.large`
* `container.height`: `md.comp.pane.container.height` = `100%`
* `container.width`: `md.comp.pane.container.width` = `auto`
* `container.min-width`: `md.comp.pane.container.min-width` = `220dp`

---

### Pane Component  - Code Samples & Implementation

The main content area (`<main>`) **MUST** be treated as a "pane" and styled accordingly.

#### Pane Styling and Page Background

To ensure correct visual hierarchy and spacing on larger screens, the following styling rules are **mandatory**:
1.  **Page Background**: For `Medium`, `Expanded`, `Large`, and `Extra Large` window size classes (i.e., breakpoints 600px and wider), the `<body>` element **MUST** have its `background-color` set to `var(--md-sys-color-surface-container)`. The default `background-color: (var(--md-sys-color-surface));` should only apply to Compact screens.
2.  **Main Content Pane**: The `<main>` element, which acts as the primary content pane, **MUST** be styled with the following properties on screens `600px` and wider:  
   * `background-color: var(--md-sys-color-surface-bright);`  
   * `padding: 24px;`  
   * `border-radius: 16px; (var(--md-sys-shape-corner-large))`
This creates the visually distinct, inset pane for content that is characteristic of the Material Design System on larger viewports and visually separates the pane from the page background.
3. **Responsive behavior and overflow**: Panes should **never** need to scroll horizontally to view content within the pane. All elements within the pane should flex, adjust, and adapt responsively to fit within the pane and ensure no overflow is necessary. 
4. **No Border (stroke), No elevation**" Panes should **never** have a border (stroke), nor elevation applied.

#### **CRITICAL RULE: Pane Header Integration (Top App Bar)**

When a Top App Bar is used as the header for a content pane (i.e., placed as the first child within a `.pane` element), it **MUST** be styled to break out of the pane's padding and sit flush with its top, left, and right edges.

This is a **mandatory** layout requirement to ensure the app bar functions as a proper, full-width header for the pane's content. This ensures the app bar is visually anchored to the top of the pane, creating a seamless and structurally correct header.

#### Visual Defect Checklists: 
1. "Is the pane both adjacent to the navigation rail and inset from the viewport with the proper spacing?" -> Fix: Ensure `main.pane` has `margin: 24px 24px 24px 0px;` (a `24px` margin applied to the top, right, bottom edges of `main.pane`).
2. "Is the entire pane visible at all times and not being forced outside the viewport by other adjacent elements such as navigation rail or content within the pane not adapting responsively correctly?" -> Fix: strickly follow navigation, pane, and layout patterns and ensure nested child elements of the pane observe flexbox and grid patterns that don't impact the size of the parent pane wrapper.
3. "If there is a `<main>` element on the page is the `.pane` class applied?" -> Fix: Ensure `<main>` includes `.pane` (thus, `<main class="pane">`) and all appropriate css is represented for accurately represent the `.pane` component. 

#### CSS Implementation

```css
/* --- Base Pane & Body Styles --- */
body {
    background-color: var(--md-sys-color-surface); /* Default for compact */
    transition: background-color 300ms ease-in-out;
}
.pane {
    box-sizing: border-box;
    transition: padding-left 300ms ease-in-out;
}

/* --- Styles for Medium, Expanded, Large, and Extra Large Screens --- */
@media (min-width: 600px) {
    body {
        background-color: var(--md-sys-color-surface-container);
    }
    .pane {
        background-color: var(--md-sys-color-surface-bright);
        padding: 24px;
        margin: 0; /* Reset default margins */
        border-radius: 16px;
    }
}
```

---

## Progress Indicators

*   Progress indicators show the status of an ongoing process in real time, capturing attention through motion.
*   There are two main types: linear and circular. The same type and configuration should be used consistently for all instances of a particular process (like loading) throughout the product.
*   When multiple items are loading, use a single progress indicator to show progress for the group, rather than adding one to every activity.

### Types

*   **Linear**: Best when placed on the edge of a container.
    *   *Note: Never appliy "full" shape to the corner radii for Linear progress indicators never. *
*   **Circular**: Best when centered in an element.

### Behavior

Progress indicators behave differently based on whether the process duration is known:

*   **Determinate**: Used when the total progress and expected wait time are known. The active indicator must accurately represent the proportion of progress made. As more information becomes available, an indicator can change from indeterminate to determinate.
*   **Indeterminate**: Used to show that a process is happening, but the wait time is unknown. The active indicator grows and shrinks along the track repeatedly to signal ongoing activity.

### Active Indicator

The active indicator shows the progress that has been made (for determinate) or signals ongoing activity (for indeterminate). It appears as soon as progress begins.

*   **Shape Options**: The active indicator can have two shape options:
    *   **Flat**: A simple, consistent thickness.
    *   **Wavy**: Applies a wave to the active track for increased expressiveness, making longer processes feel less static. Note that the overall height of the component changes with the wavy shape, and the wavy shape may not be as visible at very small sizes.


### Progress Indicator Component - Tokens

---

#### Common

**Token Set**: `md.comp.progress-indicator`

##### Color Tokens

* `Active indicator.Color`: `md.comp.progress-indicator.active-indicator.color` = `md.sys.color.primary`
* `Track.Color`: `md.comp.progress-indicator.track.color` = `md.sys.color.secondary-container`
* `Stop indicator.Color`: `md.comp.progress-indicator.stop-indicator.color` = `md.sys.color.primary`

##### Shape Tokens

* `Active indicator.Shape`: `md.comp.progress-indicator.active-indicator.shape` = `md.sys.shape.corner.full`
* `Track.Shape`: `md.comp.progress-indicator.track.shape` = `md.sys.shape.corner.full`
* `Stop indicator.Shape`: `md.comp.progress-indicator.stop-indicator.shape` = `md.sys.shape.corner.full`

---

#### Linear

**Token Set**: `md.comp.progress-indicator.linear`

##### Size Tokens

* `Container.Height`: `md.comp.progress-indicator.linear.height` = `4dp`
* `´.`: `md.comp.progress-indicator.linear.with-wave.height` = `10dp`
* `Active indicator.Thickness`: `md.comp.progress-indicator.linear.active-indicator.thickness` = `4dp`
* `Track.Thickness`: `md.comp.progress-indicator.linear.track.thickness` = `4dp`
* `Stop indicator.Size`: `md.comp.progress-indicator.linear.stop-indicator.size` = `4dp`
* `Spacing between track and active indicator.Spacing`: `md.comp.progress-indicator.linear.track-active-indicator-space` = `4dp`
* `Trailing spacing of the stop indicator for the thick configuration.Spacing`: `md.comp.progress-indicator.linear.stop-indicator.trailing-space` = `0dp`
* `Active indicator - Wave - Linear.Amplitute`: `md.comp.progress-indicator.linear.active-indicator.wave.amplitude` = `3dp`
* `Active indicator - Wave - Linear.Wavelength`: `md.comp.progress-indicator.linear.active-indicator.wave.wavelength` = `40dp`
* `Active indicator - Wave - Linear indetermainte.Wavelength`: `md.comp.progress-indicator.linear.indeterminate.active-indicator.wave.wavelength` = `20dp`

##### Thick Size Tokens

* `Container.Height`: `md.comp.progress-indicator.linear.thick.height` = `8dp`
* `Container.`: `md.comp.progress-indicator.linear.thick.with-wave.height` = `14dp`
* `Active indicator.Thickness`: `md.comp.progress-indicator.linear.thick.active-indicator.thickness` = `8dp`
* `Track.Thickness`: `md.comp.progress-indicator.linear.thick.track.thickness` = `8dp`
* `Stop indicator.Size`: `md.comp.progress-indicator.linear.thick.stop-indicator.size` = `4dp`
* `Spacing between track and active indicator.Spacing`: `md.comp.progress-indicator.linear.thick.track-active-indicator-space` = `4dp`
* `Trailing spacing of the stop indicator for the thick configuration.Spacing`: `md.comp.progress-indicator.linear.thick.stop-indicator.trailing-space` = `2dp`

---

#### Circular

**Token Set**: `md.comp.progress-indicator.circular`

##### Size Tokens

* `Component.Size`: `md.comp.progress-indicator.circular.size` = `40dp`
* `´.`: `md.comp.progress-indicator.circular.with-wave.size` = `48dp`
* `Active indicator.Thickness`: `md.comp.progress-indicator.circular.active-indicator.thickness` = `4dp`
* `Track.Thickness`: `md.comp.progress-indicator.circular.track.thickness` = `4dp`
* `Spacing between track and active indicator.Spacing`: `md.comp.progress-indicator.circular.track-active-indicator-space` = `4dp`
* `Active indicator - Wave - Circular.Amplitute`: `md.comp.progress-indicator.circular.active-indicator.wave.amplitude` = `1.6dp`
* `Active indicator - Wave - Circular.Wavelength`: `md.comp.progress-indicator.circular.active-indicator.wave.wavelength` = `15dp`

##### Thick Size Tokens

* `Container.Size`: `md.comp.progress-indicator.circular.thick.size` = `52dp`
* `Active indicator.Thickness`: `md.comp.progress-indicator.circular.thick.active-indicator.thickness` = `8dp`
* `Track.Thickness`: `md.comp.progress-indicator.circular.thick.track.thickness` = `8dp`
* `Spacing between track and active indicator.Spacing`: `md.comp.progress-indicator.circular.thick.track-active-indicator-space` = `4dp`

---



## Radio Button Component

*   Radio buttons let people select one option from a set of options.
*   Use radio buttons (not switches) when only one item can be selected from a list.
*   Radio buttons are the recommended way to allow users to make a single selection from a list of options when there are five or fewer options.
*   Only one radio button within a group can be selected at a time.
*   Avoid nesting radio buttons or using them to select multiple options (use checkboxes for multiple selections).

### Radio Button Component - Tokens

---

**Token Set**: `md.comp.radio-button`

#### Color Tokens

##### **Enabled**

###### Unselected
* `icon.color`: `md.comp.radio-button.unselected.icon.color` = `md.sys.color.on-surface-variant`

###### Selected
* `icon.color`: `md.comp.radio-button.selected.icon.color` = `md.sys.color.primary`

##### **Disabled**

###### Unselected
* `icon.color`: `md.comp.radio-button.disabled.unselected.icon.color` = `md.sys.color.on-surface`
* `icon.opacity`: `md.comp.radio-button.disabled.unselected.icon.opacity` = `0.38`

###### Selected
* `icon.color`: `md.comp.radio-button.disabled.selected.icon.color` = `md.sys.color.on-surface`
* `icon.opacity`: `md.comp.radio-button.disabled.selected.icon.opacity` = `0.38`

##### **Hovered**

###### Unselected
* `state-layer.color`: `md.comp.radio-button.unselected.hover.state-layer.color` = `md.sys.color.on-surface`
* `state-layer.opacity`: `md.comp.radio-button.unselected.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* `icon.color`: `md.comp.radio-button.unselected.hover.icon.color` = `md.sys.color.on-surface`

###### Selected
* `state-layer.color`: `md.comp.radio-button.selected.hover.state-layer.color` = `md.sys.color.primary`
* `state-layer.opacity`: `md.comp.radio-button.selected.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* `icon.color`: `md.comp.radio-button.selected.hover.icon.color` = `md.sys.color.primary`

##### **Focused**

###### Unselected
* `state-layer.color`: `md.comp.radio-button.unselected.focus.state-layer.color` = `md.sys.color.on-surface`
* `state-layer.opacity`: `md.comp.radio-button.unselected.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* `icon.color`: `md.comp.radio-button.unselected.focus.icon.color` = `md.sys.color.on-surface`

###### Selected
* `state-layer.color`: `md.comp.radio-button.selected.focus.state-layer.color` = `md.sys.color.primary`
* `state-layer.opacity`: `md.comp.radio-button.selected.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* `icon.color`: `md.comp.radio-button.selected.focus.icon.color` = `md.sys.color.primary`

##### **Pressed**

###### Unselected
* `state-layer.color`: `md.comp.radio-button.unselected.pressed.state-layer.color` = `md.sys.color.primary`
* `state-layer.opacity`: `md.comp.radio-button.unselected.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
* `icon.color`: `md.comp.radio-button.unselected.pressed.icon.color` = `md.sys.color.on-surface`

###### Selected
* `state-layer.color`: `md.comp.radio-button.selected.pressed.state-layer.color` = `md.sys.color.on-surface`
* `state-layer.opacity`: `md.comp.radio-button.selected.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
* `icon.color`: `md.comp.radio-button.selected.pressed.icon.color` = `md.sys.color.primary`

---

#### Size, Shape, & Layout Tokens

* `icon.size`: `md.comp.radio-button.icon.size` = `20dp`
* `state-layer.size`: `md.comp.radio-button.state-layer.size` = `40dp`
* `target.size`: `md.comp.radio-button.target.size` = `48dp`

---

### Radio Button Component - Code and Implementation Examples

#### HTML Structure
The structure uses a <label> to wrap the native <input> and the custom-styled elements. This ensures the entire unit is clickable and accessible. The .radio-state-layer is a dedicated element for handling the `40dp` touch target, state layers, and ripple effect.

```css
/* ---------------------------------- */
/* --- Radio Button Component --- */
/* ---------------------------------- */
.radio-container {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.radio-container input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}

.radio-state-layer {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 150ms ease-in-out;
}

.radio-button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 150ms ease-in-out;
    pointer-events: none;
}

.radio-button::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: transparent;
    transform: scale(0);
    transition: all 150ms ease-in-out;
}

.radio-container .label {
    font-family: var(--md-sys-typescale-body-large-font-family);
    font-size: var(--md-sys-typescale-body-large-font-size);
    color: var(--md-sys-color-on-surface);
}

/* --- Unselected State --- */
.radio-container input:not(:checked) + .radio-state-layer > .radio-button {
    border: 2px solid var(--md-sys-color-on-surface-variant);
}

/* --- Selected State --- */
.radio-container input:checked + .radio-state-layer > .radio-button {
    border: 2px solid var(--md-sys-color-primary);
}

.radio-container input:checked + .radio-state-layer > .radio-button::before {
    background-color: var(--md-sys-color-primary);
    transform: scale(1);
}

/* --- Hover State --- */
.radio-container:hover input:not(:disabled) + .radio-state-layer {
    background-color: rgba(var(--md-sys-color-on-surface-rgb), var(--md-sys-state-hover-state-layer-opacity));
}
.radio-container:hover input:checked:not(:disabled) + .radio-state-layer {
    background-color: rgba(var(--md-sys-color-primary-rgb), var(--md-sys-state-hover-state-layer-opacity));
}

/* --- Focus State --- */
 .radio-container input:focus-visible + .radio-state-layer {
    background-color: rgba(var(--md-sys-color-on-surface-rgb), var(--md-sys-state-focus-state-layer-opacity));
}
.radio-container input:checked:focus-visible + .radio-state-layer {
    background-color: rgba(var(--md-sys-color-primary-rgb), var(--md-sys-state-focus-state-layer-opacity));
}

/* --- Disabled State --- */
.radio-container.disabled {
    cursor: not-allowed;
    color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

.radio-container.disabled .label {
    color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

.radio-container input:disabled:not(:checked) + .radio-state-layer > .radio-button {
    border-color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

.radio-container input:disabled:checked + .radio-state-layer > .radio-button {
    border-color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

.radio-container input:disabled:checked + .radio-state-layer > .radio-button::before {
    background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}

/* ----------------------------- */
/* --- Material Ripple Effect--- */
/* ----------------------------- */
.genux-ripple {
    position: relative;
    overflow: hidden;
}

.ripple-effect {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: genux-ripple-animation 600ms linear;
    background-color: rgba(var(--md-sys-color-primary-rgb), var(--md-sys-state-pressed-state-layer-opacity));
}

@keyframes genux-ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
```

```html
<div class="radio-group" role="radiogroup">
    <label class="radio-container">
        <input type="radio" name="options-demo" value="1" checked>
        <div class="radio-state-layer genux-ripple">
            <div class="radio-button"></div>
        </div>
        <span class="label">Selected</span>
    </label>
    
    <label class="radio-container">
        <input type="radio" name="options-demo" value="2">
        <div class="radio-state-layer genux-ripple">
            <div class="radio-button"></div>
        </div>
        <span class="label">Unselected</span>
    </label>
    
    <label class="radio-container disabled">
        <input type="radio" name="options-disabled" value="1" checked disabled>
        <div class="radio-state-layer">
            <div class="radio-button"></div>
        </div>
        <span class="label">Disabled Selected</span>
    </label>

    <label class="radio-container disabled">
        <input type="radio" name="options-disabled" value="2" disabled>
        <div class="radio-state-layer">
            <div class="radio-button"></div>
        </div>
        <span class="label">Disabled Unselected</span>
    </label>
</div>
```

```JavaScript
/*
 * Material Ripple Effect Script
 */
document.addEventListener('click', function (e) {
    const rippleTarget = e.target.closest('.genux-ripple');
    if (rippleTarget) {
        const input = rippleTarget.previousElementSibling;
        if (input && input.disabled) {
            return; // Do not show ripple on disabled elements
        }

        // Use the color of the associated radio button for the ripple
        const isChecked = input && input.checked;
        const rippleColorVar = isChecked ? '--md-sys-color-primary-rgb' : '--md-sys-color-on-surface-rgb';
        const pressColor = getComputedStyle(document.documentElement).getPropertyValue(rippleColorVar).trim();


        const circle = document.createElement('span');
        const diameter = Math.max(rippleTarget.clientWidth, rippleTarget.clientHeight);
        const radius = diameter / 2;
        const rect = rippleTarget.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-effect');
        circle.style.backgroundColor = `rgba(${pressColor}, var(--md-sys-state-pressed-state-layer-opacity))`;

        const existingRipple = rippleTarget.querySelector('.ripple-effect');
        if (existingRipple) {
            existingRipple.remove();
        }

        rippleTarget.appendChild(circle);

        circle.addEventListener('animationend', () => {
            circle.remove();
        }, { once: true });
    }
});
```

---

## Search (`md.comp`)

*   Search allows users to enter a keyword or phrase to find relevant information within the product.
*   Use search bars and search views for navigating a product through search queries.
*   Search bars can display suggested keywords or phrases as the user types. Always display results in a search view.
*   The search view represents the focused state of the search bar.

### Usage

Search is a navigation method that allows people to quickly find information across an app. Users input a query into the search bar or text field of the search view and then see related results.

### Structure

*   Search bars can include a leading icon (typically a search icon or a navigation action like a menu or back arrow).
*   Up to two action icons can be located on the bar’s right-hand side (trailing icons). These can represent additional modes of searching (like voice search), a separate high-level action (such as current location), or an overflow menu.
*   Hinted search text provides a short description of what the user will be able to search for.
*   Input text replaces the hinted search text once the user starts typing.
*   Suggestions and search results should be presented in a compact, organized list. Consider including avatars or other high priority entities in search results that the user may want to access right away. Dividers (`md.comp.divider`) can be used to separate groups of related results or suggested queries.

### Search Bar Component - Tokens

---

#### Enabled

* **Avatar**
    * `Shape`: `md.comp.search-bar.avatar.shape` = `md.sys.shape.corner.full`

* **Container**
    * `Color`: `md.comp.search-bar.container.color` = `md.sys.color.surface-container-high`
    * `Elevation`: `md.comp.search-bar.container.elevation` = `md.sys.elevation.level3`
    * `Height`: `md.comp.search-bar.container.height` = `56dp`
    * `Shape`: `md.comp.search-bar.container.shape` = `md.sys.shape.corner.full`

* **Input text**
    * `Color`: `md.comp.search-bar.input-text.color` = `md.sys.color.on-surface`
    * `Font`: `md.comp.search-bar.input-text.font` = `md.sys.typescale.body-large.font`
    * `Line height`: `md.comp.search-bar.input-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `Size`: `md.comp.search-bar.input-text.size` = `md.sys.typescale.body-large.size`
    * `Weight`: `md.comp.search-bar.input-text.weight` = `md.sys.typescale.body-large.weight`
    * `Tracking`: `md.comp.search-bar.input-text.tracking` = `md.sys.typescale.body-large.tracking`

* **Leading icon**
    * `Color`: `md.comp.search-bar.leading-icon.color` = `md.sys.color.on-surface`

* **Supporting text**
    * `Color`: `md.comp.search-bar.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `Font`: `md.comp.search-bar.supporting-text.font` = `md.sys.typescale.body-large.font`
    * `Line height`: `md.comp.search-bar.supporting-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `Size`: `md.comp.search-bar.supporting-text.size` = `md.sys.typescale.body-large.size`
    * `Weight`: `md.comp.search-bar.supporting-text.weight` = `md.sys.typescale.body-large.weight`
    * `Tracking`: `md.comp.search-bar.supporting-text.tracking` = `md.sys.typescale.body-large.tracking`

* **Trailing icon**
    * `Color`: `md.comp.search-bar.trailing-icon.color` = `md.sys.color.on-surface-variant`

#### Hover

* **Container**
    * `search`: `md.comp.search-bar.hover.state-layer.color` = `md.sys.color.on-surface`
    * `State layer opacity`: `md.comp.search-bar.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Supporting text**
    * `Color`: `md.comp.search-bar.hover.supporting-text.color` = `md.sys.color.on-surface-variant`

#### Press (ripple)

* **Avatar**
    * `Size`: `md.comp.search-bar.avatar.size` = `30dp`

* **Container**
    * `State layer color`: `md.comp.search-bar.pressed.state-layer.color` = `md.sys.color.on-surface`
    * `State layer opacity`: `md.comp.search-bar.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

* **Supporting text**
    * `Color`: `md.comp.search-bar.pressed.supporting-text.color` = `md.sys.color.on-surface-variant`

#### Focus - Ring

* **Container**
    * `State color`: `md.comp.search-bar.focus.indicator.color` = `md.sys.color.secondary`
    * `Padding`: `md.comp.search-bar.focus.indicator.thickness` = `md.sys.states.focus-indicator.thickness`
    * `Outline offset`: `md.comp.search-bar.focus.indicator.outline.offset` = `md.sys.states.focus-indicator.outer-offset`

---

#### Layout values

* **Container**
    * `Width` = Min width: `360dp`. Max width `720dp`
    * `Label alignment` = `start aligned`
    * `Left padding` = `16dp`
    * `Right padding` = `16dp`
    * `Leading icon and label padding` = `16dp`
    * `Label and trailing icon padding` = `16dp`

---

### Component: Search View

#### Enabled

* **Container**
    * `Color`: `md.comp.search-view.container.color` = `md.sys.color.surface-container-high`
    * `Shape (full screen)`: `md.comp.search-view.full-screen.container.shape` = `md.sys.shape.corner.none`
    * `Shape (docked)`: `md.comp.search-view.docked.container.shape` = `md.sys.shape.corner.extra-large`
    * `Elevation`: `md.comp.search-view.container.elevation` = `md.sys.elevation.level3`

* **Divider**
    * `Color`: `md.comp.search-view.divider.color` = `md.sys.color.outline`

* **Header**
    * `Height (full screen)`: `md.comp.search-view.full-screen.header.container.height` = `72dp`
    * `Height (docked)`: `md.comp.search-view.docked.header.container.height` = `56dp`

* **Input text**
    * `Color`: `md.comp.search-view.header.input-text.color` = `md.sys.color.on-surface`
    * `Font`: `md.comp.search-view.header.input-text.font` = `md.sys.typescale.body-large.font`
    * `Line height`: `md.comp.search-view.header.input-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `Size`: `md.comp.search-view.header.input-text.size` = `md.sys.typescale.body-large.size`
    * `Weight`: `md.comp.search-view.header.input-text.weight` = `md.sys.typescale.body-large.weight`
    * `Tracking`: `md.comp.search-view.header.input-text.tracking` = `md.sys.typescale.body-large.tracking`

* **Leading icon**
    * `Color`: `md.comp.search-view.header.leading-icon.color` = `md.sys.color.on-surface`

* **Supporting text**
    * `Color`: `md.comp.search-view.header.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `Font`: `md.comp.search-view.header.supporting-text.font` = `md.sys.typescale.body-large.font`
    * `Line height`: `md.comp.search-view.header.supporting-text.line-height` = `md.sys.typescale.body-large.line-height`
    * `Size`: `md.comp.search-view.header.supporting-text.size` = `md.sys.typescale.body-large.size`
    * `Weight`: `md.comp.search-view.header.supporting-text.weight` = `md.sys.typescale.body-large.weight`
    * `Tracking`: `md.comp.search-view.header.supporting-text.tracking` = `md.sys.typescale.body-large.tracking`

* **Trailing icon**
    * `Color`: `md.comp.search-view.header.trailing-icon.color` = `md.sys.color.on-surface-variant`

---

#### Layout values

* **Container (docked)**
    * `Width` = Min width: `360dp`. Max width `720dp`
    * `Height`= Min height: `240dp`. Max height 2/3 of screen height

* **Container (full screen)**
    * `Width`: Full width
    * `Height`: Full height

* **Header**
    * `Left padding` = `16dp`
    * `Right padding` = `16dp`
    * `Leading icon and label padding` = `16dp`
    * `Label and trailing icon padding` = `16dp`

---

### Search Component - Code Samples & Implementation

```css
/* ---------------------------------- */
/* --- Search Component Styles --- */
/* ---------------------------------- */
.search-form {
    position: relative;
    width: 100%;
    height: 56px;
    background-color: var(--md-sys-color-surface-container-high);
    border-radius: 9999px;
    box-shadow: var(--md-sys-elevation-level3-shadow);
    display: flex;
    align-items: center;
    padding: 0 16px;
    transition: all 150ms ease-in-out;
}

.search-form:hover {
    box-shadow: var(--md-sys-elevation-level4-shadow);
}

.search-form:focus-within {
     box-shadow: var(--md-sys-elevation-level4-shadow);
}

.search-form .leading-icon {
    font-size: 24px;
    color: var(--md-sys-color-on-surface);
    margin-right: 12px;
    cursor: pointer;
}

.search-input {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: var(--md-sys-typescale-body-large-font-family);
    font-size: var(--md-sys-typescale-body-large-font-size);
    color: var(--md-sys-color-on-surface);
    flex-grow: 1;
    height: 100%;
    padding: 0;
}
.search-input::placeholder {
    color: var(--md-sys-color-on-surface-variant);
    opacity: 1;
}

.search-form .trailing-icons {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 12px;
}

.search-form .trailing-icons .material-symbols-outlined {
    font-size: 24px;
    color: var(--md-sys-color-on-surface-variant);
    cursor: pointer;
}

/* ---------------------------------- */
/* --- Full-screen Search View --- */
/* ---------------------------------- */
.search-view {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--md-sys-color-surface-container-high);
    z-index: 100;
    display: none;
    flex-direction: column;
    transform: scale(0.95);
    opacity: 0;
    transition: transform 200ms ease, opacity 200ms ease;
}
.search-view.visible {
    display: flex;
    transform: scale(1);
    opacity: 1;
}

.search-view-header {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 56px;
    box-shadow: var(--md-sys-elevation-level3-shadow);
    flex-shrink: 0;
}
.search-view-header .back-button {
    color: var(--md-sys-color-on-surface);
    margin-right: 16px;
}

.search-input-field {
    flex-grow: 1;
    border: none;
    background: none;
    outline: none;
    font-family: var(--md-sys-typescale-body-large-font-family);
    font-size: var(--md-sys-typescale-body-large-font-size);
    color: var(--md-sys-color-on-surface);
    padding: 0;
}

.search-view-results {
    flex-grow: 1;
    overflow-y: auto;
    padding: 16px;
}

/*
 * List Item Styles for Search Results
 */
.list-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    cursor: pointer;
    transition: background-color 150ms ease-in-out;
    border-radius: 8px;
}
.list-item:hover {
    background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.08);
}
.list-item .leading-icon {
    color: var(--md-sys-color-on-surface-variant);
    margin-right: 16px;
}
.list-item .label-text {
    flex-grow: 1;
    font-family: var(--md-sys-typescale-body-large-font-family);
    font-size: var(--md-sys-typescale-body-large-font-size);
    color: var(--md-sys-color-on-surface);
}

.list-item.disabled {
    opacity: 0.38;
    pointer-events: none;
}
```

```html
<!-- Search Bar -->
<div class="component-section">
    <h2>Search Bar</h2>
    <form class="search-form" id="search-form">
        <span class="material-symbols-outlined leading-icon">search</span>
        <input type="text" class="search-input" placeholder="Search for a product...">
        <div class="trailing-icons">
            <span class="material-symbols-outlined clear-icon" style="display: none;">close</span>
            <span class="material-symbols-outlined mic-icon">mic</span>
        </div>
    </form>
</div>

<!-- Full-screen Search View -->
<div class="search-view" id="search-view-container">
    <div class="search-view-header">
        <button class="icon-button back-button" id="search-back-button" aria-label="Go back">
            <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <input type="text" class="search-input-field" placeholder="Search for a product..." autofocus>
    </div>
    <div class="search-view-results" id="search-results-container">
        <!-- Sample search results -->
        <div class="list-item">
            <span class="material-symbols-outlined leading-icon">history</span>
            <span class="label-text">recent search 1</span>
        </div>
        <div class="list-item">
            <span class="material-symbols-outlined leading-icon">history</span>
            <span class="label-text">recent search 2</span>
        </div>
    </div>
</div>
```

```javascript
// JavaScript to control the dynamic behavior of the search component
document.addEventListener('DOMContentLoaded', () => {
    const searchViewContainer = document.getElementById('search-view-container');
    const searchBackButton = document.getElementById('search-back-button');
    const searchInput = searchViewContainer.querySelector('.search-input-field');
    const openSearchViewButton = document.getElementById('open-search-view-button');
    
    // Function to open the search view
    function openSearchView() {
        searchViewContainer.classList.add('visible');
        searchInput.focus();
    }

    // Function to close the search view
    function closeSearchView() {
        searchViewContainer.classList.remove('visible');
    }

    // Event listener for the back button in the full-screen view
    if (searchBackButton) {
        searchBackButton.addEventListener('click', closeSearchView);
    }
    
    // Search bar functionality
    const searchInputMain = document.querySelector('.search-input');
    const clearIcon = document.querySelector('.clear-icon');
    const micIcon = document.querySelector('.mic-icon');
    const leadingIcon = document.querySelector('.leading-icon');

    if (searchInputMain && clearIcon && micIcon && leadingIcon) {
        searchInputMain.addEventListener('input', () => {
            if (searchInputMain.value.length > 0) {
                clearIcon.style.display = 'block';
                micIcon.style.display = 'none';
            } else {
                clearIcon.style.display = 'none';
                micIcon.style.display = 'block';
            }
        });

        clearIcon.addEventListener('click', () => {
            searchInputMain.value = '';
            searchInputMain.focus();
            clearIcon.style.display = 'none';
            micIcon.style.display = 'block';
        });

        searchInputMain.addEventListener('focus', () => {
            leadingIcon.textContent = 'arrow_back';
            openSearchView();
        });

        searchInputMain.addEventListener('blur', () => {
            // A slight delay is needed to allow the leadingIcon's click event to fire
            setTimeout(() => {
                leadingIcon.textContent = 'search';
            }, 100);
        });
        
        leadingIcon.addEventListener('click', () => {
            if (leadingIcon.textContent === 'arrow_back') {
                searchInputMain.blur();
                closeSearchView();
            }
        });
    }
});
```

---

## Sheet (`md.comp`)

Sheets are surfaces that display additional or secondary content. They provide flexible ways to reveal information or actions without necessarily navigating away from the main content context.

There are three primary types of sheets, typically used based on window size classes:

1.  **Bottom sheets**: Show secondary content anchored to the bottom of the screen.
    *   **Usage**: Typically used in Compact and Medium window sizes.
    *   **Behavior**: Can be standard or modal. Content is secondary. Dismissible to interact with main content.
    *   *(Note: Specific token details for Bottom Sheets are not available in the provided data.)*
2.  **Floating sheets**: Show secondary content on a distinct, movable surface.
    *   **Usage**: Typically used on Expanded window sizes (like desktop).
    *   **Behavior**: Non-disruptive surface for actions or information. Can be standard or modal. Content is secondary. Dismissible to interact with main content.
3.  **Side sheets**: Show secondary content anchored to the side of the screen.
    *   **Usage**: Provides optional content and actions without interrupting the main content.
    *   **Behavior**: Can be standard or modal. Users can navigate within the sheet content. Can contain a back icon for internal navigation.
    *   *(Note: Specific token details for Side Sheets are not available in the provided data.)*

#### Interaction & Disabled States

*   Interaction and disabled states for elements *within* the sheet (buttons, icons, text fields, etc.) follow their respective component definitions (e.g., `buttons-common.md`, `text-fields.md`).
*   Interaction states on the sheet *container itself* (if applicable, e.g., hover/focus indication) would typically involve applying a state layer using an `on-[surface/container]` color at standard state opacities (`md.sys.opacity.state`). Disabled states for the container would generally remove elevation and apply opacity to contained elements.



### App Bar Component - Code Samples & Implementation

```css
/* ------------------------------- */
/* ------ Generic Base Styles ------ */
/* ------------------------------- */
.scrim {
    position: fixed;
    inset: 0;
    background-color: var(--md-sys-color-scrim);
    opacity: 0;
    transition: opacity 250ms ease-in-out;
    pointer-events: none;
    z-index: 100;
}
.scrim.visible {
    opacity: 0.32;
    pointer-events: auto;
}

/* ------------------------------- */
/* ------ Bottom Sheet Styles ------ */
/* ------------------------------- */
.bottom-sheet {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
    width: 100%;
    max-width: 600px;
    min-height: 250px;
    padding: 24px;
    background-color: var(--md-sys-color-surface-container-low);
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
    box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 101;
    box-sizing: border-box;
}
.bottom-sheet.visible {
    transform: translateX(-50%) translateY(0);
}
.bottom-sheet-drag-handle {
    width: 32px;
    height: 4px;
    background-color: var(--md-sys-color-on-surface-variant);
    border-radius: 9999px;
    margin: -8px auto 24px;
}

/* ----------------------------- */
/* ------ Side Sheet Styles ------ */
/* ----------------------------- */
.side-sheet {
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100vh;
    padding: 24px;
    background-color: var(--md-sys-color-surface-container);
    box-shadow: -4px 0 12px rgba(0,0,0,0.1);
    transform: translateX(100%);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 101;
    box-sizing: border-box;
    display: none;
}
@media (min-width: 600px) {
    .side-sheet {
        display: block;
    }
}
.side-sheet.visible {
    transform: translateX(0);
}

/* ----------------------------- */
/* ------ Floating Sheet Styles ------ */
/* ----------------------------- */
.floating-sheet {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 450px;
    padding: 24px;
    background-color: var(--md-sys-color-surface-container);
    border-radius: 28px;
    box-shadow: 0 6px 10px rgba(0,0,0,0.15);
    z-index: 102;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.floating-sheet-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
}
```

```html
<div class="scrim" id="bottom-sheet-scrim"></div>
<div class="bottom-sheet" id="bottom-sheet">
    <div class="bottom-sheet-drag-handle"></div>
    <div class="bottom-sheet-content">
        <h2>Bottom Sheet</h2>
        <p>This is a modal bottom sheet...</p>
        <button class="button genux-ripple" id="close-bottom-sheet">Close</button>
    </div>
</div>

<div class="scrim" id="side-sheet-scrim"></div>
<div class="side-sheet" id="side-sheet">
    <div class="side-sheet-header">
        <button class="close-button genux-ripple" id="close-side-sheet">
            <span class="material-symbols-outlined">close</span>
        </button>
        <h2 class="headline">Side Sheet</h2>
    </div>
    <div class="side-sheet-content">
        <p>This is a modal side sheet...</p>
    </div>
</div>

<div class="floating-sheet">
    <h2>Floating Sheet</h2>
    <p>This floating sheet provides a modal surface for a focused task...</p>
    <div class="floating-sheet-actions">
        <button class="button genux-ripple" id="close-floating-sheet">Close</button>
    </div>
</div>
```

---


### Bottom Sheet (`md.comp.sheet.bottom`)

*   **Usage**: Typically used in Compact and Medium window sizes.
*   **Behavior**: Can be standard or modal. Content is secondary. Dismissible to interact with main content.
*   *(Note: Specific token details for Bottom Sheets are not available in the provided data.)*

### Bottom Sheet Component - Tokens

---

### Bottom Sheet

**Token Set**: `md.comp.sheet.bottom`

---

#### Container Tokens

* `docked.container.color`: `md.comp.sheet.bottom.docked.container.color` = `md.sys.color.surface-container-low`
* `docked.modal.container.elevation`: `md.comp.sheet.bottom.docked.modal.container.elevation` = `md.sys.elevation.level1`
* `docked.standard.container.elevation`: `md.comp.sheet.bottom.docked.standard.container.elevation` = `md.sys.elevation.level1`
* `docked.container.shape`: `md.comp.sheet.bottom.docked.container.shape` = `md.sys.shape.corner.extra-large.top`
* `docked.minimized.container.shape`: `md.comp.sheet.bottom.docked.minimized.container.shape` = `md.sys.shape.corner.none`

---

#### Drag Handle Tokens

* `docked.drag-handle.color`: `md.comp.sheet.bottom.docked.drag-handle.color` = `md.sys.color.on-surface-variant`
* `docked.drag-handle.width`: `md.comp.sheet.bottom.docked.drag-handle.width` = `32dp`
* `docked.drag-handle.height`: `md.comp.sheet.bottom.docked.drag-handle.height` = `4dp`

---

#### Layout Tokens

* `top-space`: `md.comp.sheet.bottom.top-space` = `72dp`
* `leading-space`: `md.comp.sheet.bottom.leading-space` = `56dp`
* `trailing-space`: `md.comp.sheet.bottom.trailing-space` = `56dp`

---

#### Focus State Tokens

* `focus.indicator.color`: `md.comp.sheets.bottom.focus.indicator.color` = `md.sys.color.secondary`
* `focus.indicator.thickness`: `md.comp.sheets.bottom.focus.indicator.thickness` = `md.sys.states.focus-indicator.thickness`
* `focus.indicator.outline.offset`: `md.comp.sheets.bottom.focus.indicator.outline.offset` = `md.sys.states.focus-indicator.outer-offset`

---



### Side Sheet (`md.comp.sheet.side`)

*   **Usage**: Provides optional content and actions without interrupting the main content.
*   **Behavior**: Can be standard or modal. Users can navigate within the sheet content. Can contain a back icon for internal navigation.
*   *(Note: Specific token details for Side Sheets are not available in the provided data.)*

### Side Sheet Component - Tokens

**Token Set**: `md.comp.sheet.side`

---

#### Container Tokens

* `docked.modal.container.color`: `md.comp.sheet.side.docked.modal.container.color` = `md.sys.color.surface-container-low`
* `docked.standard.container.color`: `md.comp.sheet.side.docked.standard.container.color` = `md.sys.color.surface`
* `docked.modal.container.elevation`: `md.comp.sheet.side.docked.modal.container.elevation` = `md.sys.elevation.level1`
* `docked.standard.container.elevation`: `md.comp.sheet.side.docked.standard.container.elevation` = `md.sys.elevation.level0`
* `docked.container.height`: `md.comp.sheet.side.docked.container.height` = `100%`
* `docked.container.shape`: `md.comp.sheet.side.docked.container.shape` = `md.sys.shape.corner.none`
* `docked.modal.container.shape`: `md.comp.sheet.side.docked.modal.container.shape` = `md.sys.shape.corner.large.start`
* `detached.container.shape`: `md.comp.sheet.side.detached.container.shape` = `md.sys.shape.corner.large`
* `docked.container.width`: `md.comp.sheet.side.docked.container.width` = `256dp`

---

#### Headline Tokens

* `docked.headline.color`: `md.comp.sheet.side.docked.headline.color` = `md.sys.color.on-surface-variant`
* `docked.headline.font`: `md.comp.sheet.side.docked.headline.font` = `md.sys.typescale.title-large.font`
* `docked.headline.line-height`: `md.comp.sheet.side.docked.headline.line-height` = `md.sys.typescale.title-large.line-height`
* `docked.headline.size`: `md.comp.sheet.side.docked.headline.size` = `md.sys.typescale.title-large.size`
* `docked.headline.tracking`: `md.comp.sheet.side.docked.headline.tracking` = `md.sys.typescale.title-large.tracking`
* `docked.headline.weight`: `md.comp.sheet.side.docked.headline.weight` = `md.sys.typescale.title-large.weight`

---

#### Divider Tokens

* `docked.divider.color`: `md.comp.sheet.side.docked.divider.color` = `md.sys.color.outline-variant`

---

#### Layout Tokens

* `docked.content.bottom-space`: `md.comp.sheet.side.docked.content.bottom-space` = `16dp`
* `docked.content.end-space`: `md.comp.sheet.side.docked.content.end-space` = `16dp`
* `docked.content.start-space`: `md.comp.sheet.side.docked.content.start-space` = `16dp`
* `docked.content.top-space`: `md.comp.sheet.side.docked.content.top-space` = `16dp`
* `docked.headline.bottom-space`: `md.comp.sheet.side.docked.headline.bottom-space` = `16dp`
* `docked.with-headline.content.top-space`: `md.comp.sheet.side.docked.with-headline.content.top-space` = `16dp`

---



## Slider Component

*   Sliders allow users to make selections from a range of values. They are ideal for adjusting settings such as volume and brightness, or for applying image filters.
*   Changes made with sliders must take effect immediately, so people can understand the effects of their selection as they're moving the slider.
*   Sliders can use icons or labels to represent a numeric or relative scale.
*   Sliders should present the full range of available values.
*   Sliders can be configured as continuous or discrete.
*   Slider track must appear as a horizontal line with rounded ends.


### Types

There are three different types of sliders:

1.  **Standard:** Selects one value from a range of values. Use this when the slider should start from zero or the beginning of a sequence.
2.  **Centered:** Selects a value from a positive and negative value range. Use this when zero, or the default value, is in the middle of the range.
3.  **Range:** Selects two values on one slider to create a range, defining a minimum and maximum value. Avoid using range sliders vertically, as this can add too much cognitive load.

### Sizes and Orientation

*   Sliders have five sizes (specific token values for different sizes are not provided in the JSON, but conceptually exist in the system).
*   Sliders can be horizontal (common) or vertical (avoid vertical for range sliders).
*   Sliders can have an optional inset icon.

### Behavior

*   Sliders have `Active` and `Inactive` parts.
*   The `Active` portion of the track indicates the selected value (or range).
*   The `Inactive` portion indicates the values outside the selection.
*    A slider consists of a track, optional stop indicators (for discrete sliders), a handle, and an optional value display.

#### Dragging Behavior

Sliders support two main dragging behaviors:

1.  **Select and Drag:**
    * The user must explicitly tap or click on the slider's handle to select it.
    * Once selected, the user can drag the handle to adjust the value.
    * This method provides precise control and prevents accidental value changes.
    * Typically, releasing the handle finalizes the selection.

2.  **Drag and Jump:**
    * The user can click or tap anywhere on the slider track to immediately jump the handle to that position.
    * From that new position, the user can then drag the handle to fine-tune the value.
    * This behavior is often used for quick adjustments when exact precision isn't immediately critical.

#### Value Label

* The slider handle should include an optional **value label** that appears above it when the user interacts with the slider (e.g., on press or drag).
* This label displays the current numerical value corresponding to the handle's position.
* The value label provides immediate feedback to the user about their selection, enhancing usability and understanding, especially for sliders with a wide range of values or when precise input is needed.



### Slider Component - Code Samples & Implementation

*   Use only the slider properties that are specificed in the tokens. Pay close attention to the track layout and slider handle tokens. There is a gap on the left side of the hangle, in between the active track and the handle of 2dp and another gap on the right slide of the handle and the inactive track of 2dp.  **Do not deviate from those token values**.

```css
/* ------------------------------- */
/* --- Interactive Sliders CSS --- */
/* ------------------------------- */
:root {
    /* General system colors */
    --md-sys-color-primary: rgba(11, 87, 208, 1);
    --md-sys-color-on-primary: rgba(255, 255, 255, 1);
    --md-sys-color-secondary-container: rgba(194, 231, 255, 1);
    --md-sys-color-on-secondary-container: rgba(0, 74, 119, 1);
    --md-sys-color-surface-container-low: rgba(248, 250, 253, 1);
    --md-sys-color-on-surface: rgba(31, 31, 31, 1);
    --md-sys-color-on-surface-variant: rgba(68, 71, 70, 1);
    --md-sys-color-inverse-surface: rgba(48, 48, 48, 1);
    --md-sys-color-inverse-on-surface: rgba(242, 242, 242, 1);
    --md-sys-color-background: rgba(255, 255, 255, 1);
    --md-sys-color-scrim: rgba(0, 0, 0, 1);
    --md-sys-color-shadow: rgba(0, 0, 0, 1);
    --md-sys-color-primary-rgb: 11, 87, 208;
    --md-sys-color-on-surface-rgb: 31, 31, 31;
    
    /* Typography */
    --md-ref-typeface-plain: 'Google Sans Flex', sans-serif;
    --md-ref-typeface-weight-regular: 400;
    --md-ref-typeface-weight-medium: 500;
    --md-sys-typescale-headline-small-font: var(--md-ref-typeface-plain);
    --md-sys-typescale-headline-small-weight: var(--md-ref-typeface-weight-regular);
    --md-sys-typescale-headline-small-size: 1.5em;
    --md-sys-typescale-headline-small-line-height: 2em;
    --md-sys-typescale-label-large-font: var(--md-ref-typeface-plain);
    --md-sys-typescale-label-large-weight: var(--md-ref-typeface-weight-medium);
    --md-sys-typescale-label-large-size: 0.875em;
    --md-sys-typescale-label-large-line-height: 1.25em;
    --md-sys-typescale-label-small-font: var(--md-ref-typeface-plain);
    --md-sys-typescale-label-small-weight: var(--md-ref-typeface-weight-medium);
    --md-sys-typescale-label-small-size: 0.6875em; 
    --md-sys-typescale-label-small-line-height: 1em; 

    /* Shapes and Elevation */
    --crbn-sys-shape-corner-full: 50%;
    --crbn-sys-shape-corner-extra-small: 0.25em; 
    --crbn-sys-shape-corner-large: 1em; 
    --crbn-sys-shape-corner-medium: 0.75em;
    --crbn-sys-elevation-level1: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
    --crbn-sys-elevation-level2: 0 3px 6px 0 rgba(0,0,0,0.1), 0 2px 4px 0 rgba(0,0,0,0.06);
    --crbn-sys-elevation-level3: 0 6px 10px 0 rgba(0,0,0,0.1), 0 4px 8px 0 rgba(0,0,0,0.06);
    
    /* Slider Specific Tokens */
    --crbn-comp-slider-track-radius: 16px; 
    --crbn-comp-slider-track-inner-radius: 8px;
    --crbn-comp-slider-left-track-color: var(--md-sys-color-primary);
    --crbn-comp-slider-right-track-color: var(--md-sys-color-secondary-container);
    --crbn-comp-slider-handle-line-width: 4px;
    --crbn-comp-slider-handle-line-radius: calc(var(--crbn-comp-slider-handle-line-width) / 2);
    --crbn-comp-slider-handle-default-gap: 2px;
    --crbn-comp-slider-handle-pressed-gap: 8px;
    --crbn-comp-slider-animation-duration: 0.3s;
    --crbn-comp-slider-animation-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    --crbn-comp-slider-value-tooltip-pressed-font-size: calc(var(--md-sys-typescale-label-small-size) * 1.8); 
    --crbn-comp-slider-value-tooltip-pressed-padding: 0.6em; 
    --crbn-comp-slider-value-tooltip-pressed-bg: var(--md-sys-color-inverse-surface);
    --crbn-comp-slider-value-tooltip-pressed-text-color: var(--md-sys-color-inverse-on-surface);
    --crbn-comp-slider-value-tooltip-pressed-shape: 50%;
    --crbn-comp-slider-value-tooltip-pressed-distance: 6px; 
    --crbn-sys-layout-margin-compact: 1em;
    
    /* Handle heights for all sizes */
    --crbn-comp-slider-xs-handle-height: 44px;
    --crbn-comp-slider-xs-handle-pressed-height: 50px;
    --crbn-comp-slider-s-handle-height: 44px;
    --crbn-comp-slider-s-handle-pressed-height: 50px;
    --crbn-comp-slider-m-handle-height: 52px;
    --crbn-comp-slider-m-handle-pressed-height: 58px;
    --crbn-comp-slider-l-handle-height: 68px;
    --crbn-comp-slider-l-handle-pressed-height: 74px;
    --crbn-comp-slider-xl-handle-height: 108px;
    --crbn-comp-slider-xl-handle-pressed-height: 114px;

    /* Track heights reverted to original values */
    --crbn-comp-slider-xs-track-height: 16px;
    --crbn-comp-slider-s-track-height: 24px;
    --crbn-comp-slider-m-track-height: 40px;
    --crbn-comp-slider-l-track-height: 56px;
    --crbn-comp-slider-xl-track-height: 96px;
}

body {
    font-family: var(--md-ref-typeface-plain);
    background-color: var(--md-sys-color-background);
    color: var(--md-sys-color-on-background);
    margin: 0;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;
}

.slider-group {
    margin-bottom: 6em; 
    width: 100%;
    max-width: 600px;
}

.slider-label {
    font-family: var(--md-sys-typescale-label-large-font);
    font-weight: var(--md-ref-typeface-weight-medium);
    font-size: var(--md-sys-typescale-label-large-size);
    line-height: var(--md-sys-typescale-label-large-line-height);
    color: var(--md-sys-color-on-surface-variant);
    display: block;
    margin-bottom: 0.75em;
}
.slider-label .value-display {
    font-weight: var(--md-ref-typeface-weight-medium);
    color: var(--md-sys-color-primary);
}

.slider-component {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.slider-track-wrapper {
    position: absolute;
    width: 100%;
    background-color: transparent; 
    border-radius: var(--crbn-comp-slider-track-radius); 
    overflow: visible; 
}

.slider-track-active, .slider-track-inactive-right-segment {
    position: absolute;
    top: 0;
    height: 100%;
    transition-property: width, left;
    transition-duration: var(--crbn-comp-slider-animation-duration);
    transition-timing-function: var(--crbn-comp-slider-animation-bounce);
}

.slider-track-active {
    left: 0;
    background-color: var(--crbn-comp-slider-left-track-color);
    border-top-left-radius: var(--crbn-comp-slider-track-radius);
    border-bottom-left-radius: var(--crbn-comp-slider-track-radius);
    border-top-right-radius: var(--crbn-comp-slider-track-inner-radius); 
    border-bottom-right-radius: var(--crbn-comp-slider-track-inner-radius);
}

.slider-track-inactive-right-segment { 
    background-color: var(--crbn-comp-slider-right-track-color);
    border-top-left-radius: var(--crbn-comp-slider-track-inner-radius);
    border-bottom-left-radius: var(--crbn-comp-slider-track-inner-radius);
    border-top-right-radius: var(--crbn-comp-slider-track-radius);
    border-bottom-right-radius: var(--crbn-comp-slider-track-radius);
}

.slider-handle {
    position: absolute;
    width: var(--crbn-comp-slider-handle-line-width); 
    background-color: var(--crbn-comp-slider-left-track-color);
    border-radius: var(--crbn-comp-slider-handle-line-radius);
    box-shadow: var(--crbn-sys-elevation-level1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.2s ease-out, height 0.2s ease-out; 
    z-index: 2;
    outline: none;
    top: 50%; 
    transform: translateY(-50%);
}

.slider-handle:hover {
    box-shadow: var(--crbn-sys-elevation-level2);
}
.slider-handle.focused { 
     box-shadow: 0 0 0 2px var(--md-sys-color-primary), var(--crbn-sys-elevation-level1);
}
.slider-handle.pressed {
     box-shadow: var(--crbn-sys-elevation-level3);
}

.slider-value-tooltip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
    z-index: 10;
    box-sizing: border-box;
    line-height: 1; 
    transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out, visibility 0s 0.15s,
                font-size 0.15s ease-in-out, padding 0.15s ease-in-out, background-color 0.15s ease-in-out, color 0.15s ease-in-out, border-radius 0.15s ease-in-out,
                min-width 0.15s ease-in-out, min-height 0.15s ease-in-out, bottom 0.15s ease-in-out;
    font-size: var(--md-sys-typescale-label-small-size); 
    padding: 0.25em 0.5em;
    background-color: var(--md-sys-color-primary); 
    color: var(--md-sys-color-on-primary); 
    border-radius: var(--crbn-sys-shape-corner-extra-small); 
    bottom: calc(100% + 0.5em); 
}

.slider-handle.pressed .slider-value-tooltip {
    font-size: var(--crbn-comp-slider-value-tooltip-pressed-font-size);
    padding: var(--crbn-comp-slider-value-tooltip-pressed-padding);
    background-color: var(--crbn-comp-slider-value-tooltip-pressed-bg);
    color: var(--crbn-comp-slider-value-tooltip-pressed-text-color);
    border-radius: var(--crbn-comp-slider-value-tooltip-pressed-shape);
    bottom: calc(100% + var(--crbn-comp-slider-value-tooltip-pressed-distance)); 
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
    transition-delay: 0s; 
}

/* Size-specific CSS to apply correct handle and track heights */
.slider-component.size-xl {
    --slider-track-height: var(--crbn-comp-slider-xl-track-height);
    --slider-handle-height: var(--crbn-comp-slider-xl-handle-height);
    --slider-handle-pressed-height: var(--crbn-comp-slider-xl-handle-pressed-height);
}
.slider-component.size-l {
    --slider-track-height: var(--crbn-comp-slider-l-track-height);
    --slider-handle-height: var(--crbn-comp-slider-l-handle-height);
    --slider-handle-pressed-height: var(--crbn-comp-slider-l-handle-pressed-height);
}
.slider-component.size-m {
    --slider-track-height: var(--crbn-comp-slider-m-track-height);
    --slider-handle-height: var(--crbn-comp-slider-m-handle-height);
    --slider-handle-pressed-height: var(--crbn-comp-slider-m-handle-pressed-height);
}
.slider-component.size-s {
    --slider-track-height: var(--crbn-comp-slider-s-track-height);
    --slider-handle-height: var(--crbn-comp-slider-s-handle-height);
    --slider-handle-pressed-height: var(--crbn-comp-slider-s-handle-pressed-height);
}
.slider-component.size-xs {
    --slider-track-height: var(--crbn-comp-slider-xs-track-height);
    --slider-handle-height: var(--crbn-comp-slider-xs-handle-height);
    --slider-handle-pressed-height: var(--crbn-comp-slider-xs-handle-pressed-height);
}

.slider-component {
    height: var(--slider-track-height);
    margin-top: calc((var(--slider-handle-pressed-height) - var(--slider-track-height)) / 2); 
    margin-bottom: calc((var(--slider-handle-pressed-height) - var(--slider-track-height)) / 2);
}

.slider-track-wrapper {
    height: var(--slider-track-height);
}

.slider-handle {
    height: var(--slider-handle-height);
}

.slider-handle.pressed {
    height: var(--slider-handle-pressed-height);
}

.watermark {
    position: fixed;
    bottom: var(--crbn-sys-layout-margin-compact, 1em);
    right: var(--crbn-sys-layout-margin-compact, 1em);
    font-family: var(--md-sys-typescale-label-small-font);
    font-weight: var(--md-sys-typescale-label-small-weight);
    font-size: var(--md-sys-typescale-label-small-size);
    color: var(--md-sys-color-on-surface-variant);
    opacity: 0.6;
    z-index: 10;
}
```

```html
<div class="slider-group">
    <div class="slider-component size-xl" id="xl-slider" data-min="0" data-max="100" data-value="50" aria-label="XL Slider">
        <div class="slider-track-wrapper">
            <div class="slider-track-active" id="xl-track-active"></div>
            <div class="slider-track-inactive-right-segment" id="xl-track-inactive-right"></div>
        </div>
        <div class="slider-handle" id="xl-handle" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
            <div class="slider-value-tooltip" id="xl-tooltip">50</div>
        </div>
    </div>
</div>

<div class="slider-group">
    <div class="slider-component size-l" id="l-slider" data-min="0" data-max="100" data-value="60" aria-label="L Slider">
        <div class="slider-track-wrapper">
            <div class="slider-track-active" id="l-track-active"></div>
            <div class="slider-track-inactive-right-segment" id="l-track-inactive-right"></div>
        </div>
        <div class="slider-handle" id="l-handle" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">
            <div class="slider-value-tooltip" id="l-tooltip">60</div>
        </div>
    </div>
</div>

<div class="slider-group">
    <div class="slider-component size-m" id="m-slider" data-min="0" data-max="100" data-value="75" aria-label="M Slider">
        <div class="slider-track-wrapper">
            <div class="slider-track-active" id="m-track-active"></div>
            <div class="slider-track-inactive-right-segment" id="m-track-inactive-right"></div>
        </div>
        <div class="slider-handle" id="m-handle" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75">
            <div class="slider-value-tooltip" id="m-tooltip">75</div>
        </div>
    </div>
</div>

<div class="slider-group">
    <div class="slider-component size-s" id="s-slider" data-min="0" data-max="100" data-value="25" aria-label="S Slider">
        <div class="slider-track-wrapper">
            <div class="slider-track-active" id="s-track-active"></div>
            <div class="slider-track-inactive-right-segment" id="s-track-inactive-right"></div>
        </div>
        <div class="slider-handle" id="s-handle" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25">
            <div class="slider-value-tooltip" id="s-tooltip">25</div>
        </div>
    </div>
</div>

<div class="slider-group">
    <div class="slider-component size-xs" id="xs-slider" data-min="0" data-max="100" data-value="90" aria-label="XS Slider">
        <div class="slider-track-wrapper">
            <div class="slider-track-active" id="xs-track-active"></div>
            <div class="slider-track-inactive-right-segment" id="xs-track-inactive-right"></div>
        </div>
        <div class="slider-handle" id="xs-handle" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="90">
            <div class="slider-value-tooltip" id="xs-tooltip">90</div>
        </div>
    </div>
</div>
```

```JavaScript
/* --------------------------------- */
/* --- Interactive Sliders Logic --- */
/* --------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-component');

    sliders.forEach(sliderElem => {
        const handle = sliderElem.querySelector('.slider-handle');
        const activeTrack = sliderElem.querySelector('.slider-track-active');
        const inactiveRightSegment = sliderElem.querySelector('.slider-track-inactive-right-segment');

        const valueTooltip = handle.querySelector('.slider-value-tooltip');

        let min = parseFloat(sliderElem.dataset.min);
        let max = parseFloat(sliderElem.dataset.max);
        let currentValue = parseFloat(sliderElem.dataset.value);
        
        let isDragging = false;
        const cssRoot = document.documentElement;
        const trackOuterRadius = getComputedStyle(cssRoot).getPropertyValue('--crbn-comp-slider-track-radius').trim();
        const trackInnerRadius = getComputedStyle(cssRoot).getPropertyValue('--crbn-comp-slider-track-inner-radius').trim();
        const defaultGap = parseFloat(getComputedStyle(cssRoot).getPropertyValue('--crbn-comp-slider-handle-default-gap'));
        const pressedGap = parseFloat(getComputedStyle(cssRoot).getPropertyValue('--crbn-comp-slider-handle-pressed-gap'));
        const defaultHandleWidth = parseFloat(getComputedStyle(cssRoot).getPropertyValue('--crbn-comp-slider-handle-line-width'));
                        
        function updateSliderUI(value, forcedHandleLeft = null) {
            currentValue = Math.max(min, Math.min(max, value));
            sliderElem.dataset.value = currentValue;
            
            const currentHandleWidth = defaultHandleWidth; 
            const trackWidth = sliderElem.offsetWidth;
            let handleLeftActual;

            if (forcedHandleLeft !== null) {
                handleLeftActual = forcedHandleLeft;
            } else {
                const percentageForSetup = ((currentValue - min) / (max - min)) * 100;
                const handleCenterPoint = (percentageForSetup / 100) * trackWidth;
                handleLeftActual = handleCenterPoint - (currentHandleWidth / 2);
                handleLeftActual = Math.max(0, Math.min(trackWidth - currentHandleWidth, handleLeftActual));
            }
            
            handle.style.left = `${handleLeftActual}px`;
            
            const isPressed = handle.classList.contains('pressed');
            const currentGap = isPressed ? pressedGap : defaultGap;

            let activeTrackWidth = Math.max(0, handleLeftActual - currentGap);
            activeTrack.style.width = activeTrackWidth + 'px';
            if (activeTrackWidth < parseFloat(trackInnerRadius) && activeTrackWidth > 0) {
                activeTrack.style.borderTopRightRadius = trackInnerRadius;
                activeTrack.style.borderBottomRightRadius = trackInnerRadius;
            } else if (activeTrackWidth <= 0){
                 activeTrack.style.borderTopRightRadius = trackOuterRadius;
                 activeTrack.style.borderBottomRightRadius = trackOuterRadius;
            }
             else {
                 activeTrack.style.borderTopRightRadius = trackInnerRadius;
                 activeTrack.style.borderBottomRightRadius = trackInnerRadius;
            }
            activeTrack.style.borderTopLeftRadius = trackOuterRadius; 
            activeTrack.style.borderBottomLeftRadius = trackOuterRadius;


            let inactiveRightStart = handleLeftActual + currentHandleWidth + currentGap;
            let inactiveRightWidth = Math.max(0, trackWidth - inactiveRightStart);
            inactiveRightSegment.style.left = inactiveRightStart + 'px';
            inactiveRightSegment.style.width = inactiveRightWidth + 'px';

            if (inactiveRightWidth < parseFloat(trackInnerRadius) && inactiveRightWidth > 0) {
                inactiveRightSegment.style.borderTopLeftRadius =  trackInnerRadius;
                inactiveRightSegment.style.borderBottomLeftRadius = trackInnerRadius;
            } else if (inactiveRightWidth <=0) {
                inactiveRightSegment.style.borderTopLeftRadius =  trackOuterRadius;
                inactiveRightSegment.style.borderBottomLeftRadius = trackOuterRadius;
            } 
            else {
                inactiveRightSegment.style.borderTopLeftRadius = trackInnerRadius;
                inactiveRightSegment.style.borderBottomLeftRadius = trackInnerRadius;
            }
            inactiveRightSegment.style.borderTopRightRadius = trackOuterRadius; 
            inactiveRightSegment.style.borderBottomRightRadius = trackOuterRadius;

            if(valueTooltip) {
                valueTooltip.textContent = Math.round(currentValue);
            }
            handle.setAttribute('aria-valuenow', Math.round(currentValue));
        }
        
        updateSliderUI(currentValue);

        function startDrag(e) {
            isDragging = true;
            handle.classList.add('pressed');
            document.body.style.userSelect = 'none'; 
            document.body.style.cursor = 'grabbing';
            updateSliderUI(currentValue, parseFloat(handle.style.left)); 
            if(e.preventDefault && e.cancelable) e.preventDefault();
        }

        function endDrag() {
            if (isDragging) {
                isDragging = false;
                handle.classList.remove('pressed');
                document.body.style.userSelect = '';
                document.body.style.cursor = 'default';
                updateSliderUI(currentValue, parseFloat(handle.style.left)); 
            }
        }
        
        handle.addEventListener('mousedown', startDrag);
        handle.addEventListener('touchstart', startDrag, { passive: false });

        function processMove(clientX) {
            const rect = sliderElem.getBoundingClientRect();
            const trackWidth = sliderElem.offsetWidth;
            const currentHandleWidth = defaultHandleWidth; 

            let clickXRelativeToTrack = clientX - rect.left;
            
            let newHandleLeft = clickXRelativeToTrack - (currentHandleWidth / 2);
            newHandleLeft = Math.max(0, Math.min(trackWidth - currentHandleWidth, newHandleLeft));
            
            const newHandleCenter = newHandleLeft + (currentHandleWidth / 2);
            let percentage = (newHandleCenter / trackWidth) * 100;
            
            let newValue = min + (percentage / 100) * (max - min);
            updateSliderUI(newValue, newHandleLeft);
        }

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            processMove(e.clientX);
        });
        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            if (e.touches.length > 0) {
                processMove(e.touches[0].clientX);
            }
        }, { passive: false });


        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
        document.addEventListener('touchcancel', endDrag);


        sliderElem.addEventListener('click', (e) => {
            if (e.target === handle || handle.contains(e.target) || isDragging) return;

            const rect = sliderElem.getBoundingClientRect();
            const trackWidth = sliderElem.offsetWidth;
            const currentHandleWidth = defaultHandleWidth;
            let clickX = e.clientX - rect.left;

            let newHandleLeft = clickX - (currentHandleWidth / 2);
            newHandleLeft = Math.max(0, Math.min(trackWidth - currentHandleWidth, newHandleLeft));

            const newHandleCenter = newHandleLeft + (currentHandleWidth / 2);
            let percentage = (newHandleCenter / trackWidth) * 100;
            let newValue = min + (percentage / 100) * (max - min);

            updateSliderUI(newValue, newHandleLeft);
        });
        
        handle.addEventListener('keydown', (e) => {
            let step = (max - min) / 20; 
            if (e.shiftKey) step *= 2; 

            let newValue = currentValue;
            let newHandleLeft = null; 

            if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                newValue -= step;
                e.preventDefault();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                newValue += step;
                e.preventDefault();
            } else if (e.key === 'Home') {
                newValue = min;
                e.preventDefault();
            } else if (e.key === 'End') {
                newValue = max;
                e.preventDefault();
            }
            newValue = Math.max(min, Math.min(max, newValue)); 
            updateSliderUI(newValue); 
        });

        handle.addEventListener('focus', () => handle.classList.add('focused'));
        handle.addEventListener('blur', () => {
            handle.classList.remove('focused');
            if (isDragging) { 
               endDrag();
            }
        });
        window.addEventListener('resize', () => updateSliderUI(currentValue, parseFloat(handle.style.left)));
    });
});

---

## Snackbar Component

*   Snackbars show short updates about app processes. They inform users of a process that an app has performed or will perform.
*   They appear temporarily, typically towards the bottom of the screen, and shouldn't interrupt the user experience. People can browse the page content without being required to interact with the snackbar.
*   Snackbars are a low-importance messaging component. Only use them when the message is not critical and doesn't require immediate action. For higher importance messages, consider using Banners or Dialogs.
*   Only one snackbar may be displayed at a time.
*   Snackbars can disappear on their own after a brief period or remain on screen until the user takes a specified action or dismisses it.

### Actions

*   A snackbar can contain an optional single action (typically a text button). The text label should clearly indicate the action (e.g., "Undo", "Retry"). The action should be placed on the right side of the snackbar.
*   A 'Dismiss' action is optional; if not present, the snackbar dismisses automatically or on user interaction outside the snackbar area.

### Snackbar Component - Tokens

---

**Token Set**: `md.comp.snackbar`

#### Enabled State Tokens

##### Container
* `container.color`: `md.comp.snackbar.container.color` = `md.sys.color.inverse-surface`
* `container.shadow-color`: `md.comp.snackbar.container.shadow-color` = `md.sys.color.shadow`
* `container.elevation`: `md.comp.snackbar.container.elevation` = `md.sys.elevation.level3`
* `container.shape`: `md.comp.snackbar.container.shape` = `md.sys.shape.corner.extra-small`

##### Supporting Text
* `supporting-text.color`: `md.comp.snackbar.supporting-text.color` = `md.sys.color.inverse-on-surface`
* `supporting-text.font`: `md.comp.snackbar.supporting-text.font` = `md.sys.typescale.body-medium.font`
* `supporting-text.line-height`: `md.comp.snackbar.supporting-text.line-height` = `md.sys.typescale.body-medium.line-height`
* `supporting-text.size`: `md.comp.snackbar.supporting-text.size` = `md.sys.typescale.body-medium.size`
* `supporting-text.tracking`: `md.comp.snackbar.supporting-text.tracking` = `md.sys.typescale.body-medium.tracking`
* `supporting-text.weight`: `md.comp.snackbar.supporting-text.weight` = `md.sys.typescale.body-medium.weight`

##### Action (Optional)
* `label-text.color`: `md.comp.snackbar.action.label-text.color` = `md.sys.color.inverse-primary`
* `label-text.font`: `md.comp.snackbar.action.label-text.font` = `md.sys.typescale.label-large.font`
* `label-text.line-height`: `md.comp.snackbar.action.label-text.line-height` = `md.sys.typescale.label-large.line-height`
* `label-text.size`: `md.comp.snackbar.action.label-text.size` = `md.sys.typescale.label-large.size`
* `label-text.tracking`: `md.comp.snackbar.action.label-text.tracking` = `md.sys.typescale.label-large.tracking`
* `label-text.weight`: `md.comp.snackbar.action.label-text.weight` = `md.sys.typescale.label-large.weight`

##### Icon (Optional)
* `icon.color`: `md.comp.snackbar.icon.icon.color` = `md.sys.color.inverse-on-surface`
* `icon.size`: `md.comp.snackbar.icon.icon.size` = `24dp`

---

#### Interaction State Tokens

##### Action States

* **Hover**
    * `state-layer.color`: `md.comp.snackbar.action.hover.state-layer.color` = `md.sys.color.inverse-primary`
    * `state-layer.opacity`: `md.comp.snackbar.action.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `label-text.color`: `md.comp.snackbar.action.hover.label-text.color` = `md.sys.color.inverse-primary`

* **Focus**
    * `state-layer.color`: `md.comp.snackbar.action.focus.state-layer.color` = `md.sys.color.inverse-primary`
    * `state-layer.opacity`: `md.comp.snackbar.action.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `label-text.color`: `md.comp.snackbar.action.focus.label-text.color` = `md.sys.color.inverse-primary`

* **Pressed**
    * `state-layer.color`: `md.comp.snackbar.action.pressed.state-layer.color` = `md.sys.color.inverse-primary`
    * `state-layer.opacity`: `md.comp.snackbar.action.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `label-text.color`: `md.comp.snackbar.action.pressed.label-text.color` = `md.sys.color.inverse-primary`

##### Icon States

* **Hover**
    * `state-layer.color`: `md.comp.snackbar.icon.hover.state-layer.color` = `md.sys.color.inverse-on-surface`
    * `state-layer.opacity`: `md.comp.snackbar.icon.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
    * `icon.color`: `md.comp.snackbar.icon.hover.icon.color` = `md.sys.color.inverse-on-surface`

* **Focus**
    * `state-layer.color`: `md.comp.snackbar.icon.focus.state-layer.color` = `md.sys.color.inverse-on-surface`
    * `state-layer.opacity`: `md.comp.snackbar.icon.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
    * `icon.color`: `md.comp.snackbar.icon.focus.icon.color` = `md.sys.color.inverse-on-surface`

* **Pressed**
    * `state-layer.color`: `md.comp.snackbar.icon.pressed.state-layer.color` = `md.sys.color.inverse-on-surface`
    * `state-layer.opacity`: `md.comp.snackbar.icon.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
    * `icon.color`: `md.comp.snackbar.icon.pressed.icon.color` = `md.sys.color.inverse-on-surface`

---

#### Layout Tokens

* `container.width`: `flexible`
* `with-single-line.container.height`: `md.comp.snackbar.with-single-line.container.height` = `48dp`
* `with-two-lines.container.height`: `md.comp.snackbar.with-two-lines.container.height` = `68dp`
* `leading-space`: `md.comp.snackbar.leading-space` = `16dp`
* `trailing-space`: `md.comp.snackbar.trailing-space` = `8dp`
* `with-trailing-icon.leading-space`: `md.comp.snackbar.with-trailing-icon.leading-space` = `12dp`
* `with-trailing-icon.trailing-space`: `md.comp.snackbar.with-trailing-icon.trailing-space` = `12dp`

---

### Snackbar Component - Code Samples & Implementation

```css
/* ---------------------------------- */
/* ----- Snackbar Component Styles ---- */
/* ---------------------------------- */
.snackbar-container {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) scale(0.95) translateY(10px);
    display: flex;
    align-items: center;
    background-color: var(--md-sys-color-inverse-surface);
    color: var(--md-sys-color-inverse-on-surface);
    border-radius: var(--md-sys-shape-corner-extra-small);
    box-shadow: var(--md-sys-elevation-level3-shadow);
    padding: 6px 16px;
    min-height: 48px;
    box-sizing: border-box;
    opacity: 0;
    visibility: hidden;
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out, visibility 150ms;
    z-index: 1000;
}
.snackbar-container.visible {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1) translateY(0);
}
.snackbar-container.two-lines {
    min-height: 68px;
    align-items: center;
}
.snackbar-message {
    font-family: var(--md-sys-typescale-body-medium-font-family);
    font-weight: var(--md-sys-typescale-body-medium-font-weight);
    font-size: var(--md-sys-typescale-body-medium-font-size);
    line-height: var(--md-sys-typescale-body-medium-line-height);
    flex-grow: 1;
}
.snackbar-icon {
    font-size: 24px;
    margin-right: 12px;
    color: var(--md-sys-color-inverse-on-surface);
}
.snackbar-action {
    margin-left: 16px;
    color: var(--md-sys-color-primary-container);
    --genux-press-color-rgb: var(--md-sys-color-primary-container-rgb);
    padding: 0 8px; /* Making the button smaller */
}

```html
<!-- Snackbar Singleton Element -->
<!-- This single element should be placed once in your HTML, typically before the closing </body> tag. -->
<div id="snackbar-container" class="snackbar-container">
    <span id="snackbar-icon" class="material-symbols-outlined snackbar-icon" style="display:none;"></span>
    <span id="snackbar-message" class="snackbar-message"></span>
    <button id="snackbar-action" class="button text genux-ripple snackbar-action" style="display:none;"><span></span></button>
</div>
```

```JavaScript
/* ---------------------------------- */
/* -------- Snackbar Manager -------- */
/* ---------------------------------- */
const snackbarContainer = document.getElementById('snackbar-container');
const snackbarIcon = document.getElementById('snackbar-icon');
const snackbarMessage = document.getElementById('snackbar-message');
const snackbarAction = document.getElementById('snackbar-action');
let snackbarTimeout;

function showSnackbar(options) {
    // If a snackbar is already visible, hide it first to avoid overlap
    if (snackbarContainer.classList.contains('visible')) {
        clearTimeout(snackbarTimeout);
        snackbarContainer.classList.remove('visible');
        // Wait for the hide animation to finish before showing the new one
        setTimeout(() => showNewSnackbar(options), 150);
    } else {
        showNewSnackbar(options);
    }
}

function showNewSnackbar(options) {
    // Update message content
    snackbarMessage.textContent = options.message;

    // Handle two-line variant by toggling a class
    snackbarContainer.classList.toggle('two-lines', !!options.twoLines);

    // Handle Icon visibility and content
    if (options.icon) {
        snackbarIcon.textContent = options.icon;
        snackbarIcon.style.display = 'inline-flex';
    } else {
        snackbarIcon.style.display = 'none';
    }

    // Handle Action button visibility and content
    if (options.actionText) {
        snackbarAction.querySelector('span').textContent = options.actionText;
        snackbarAction.style.display = 'inline-flex';
        // Example click handler for the action
        snackbarAction.onclick = () => {
            console.log(`Snackbar action '${options.actionText}' clicked.`);
            hideSnackbar();
        };
    } else {
        snackbarAction.style.display = 'none';
    }
    
    // Show the snackbar by adding the .visible class
    snackbarContainer.classList.add('visible');
    
    // Set a timeout to hide it automatically
    const duration = options.duration || 5000; // Default to 5 seconds
    snackbarTimeout = setTimeout(hideSnackbar, duration);
}

function hideSnackbar() {
    clearTimeout(snackbarTimeout);
    snackbarContainer.classList.remove('visible');
}

/* ---------------------------------- */
/* ---------- Usage Examples -------- */
/* ---------------------------------- */

// Example 1: Single-line message
// showSnackbar({ message: 'Single-line message.' });

// Example 2: Two-line message
// showSnackbar({ message: 'Two-line message that is long enough to wrap to another line.', twoLines: true });

// Example 3: Message with an action
// showSnackbar({ message: 'Message with an action.', actionText: 'Undo' });

// Example 4: Complex snackbar with all options
// showSnackbar({ 
//   message: 'Two-line message with an action and an icon.', 
//   actionText: 'Retry', 
//   icon: 'info', 
//   twoLines: true 
// });
```

---

## Split button Component

Split buttons combine a main action with a menu of related, secondary actions. They consist of two segments: a leading button for the primary action and a trailing icon button that reveals a menu. This component helps reduce visual complexity by grouping a set of contextual actions under a single control.

Split buttons are available in the same five sizes as common buttons (Extra Small, Small, Medium, Large, and Extra Large) and four style variants (Elevated, Filled, Tonal, and Outlined).

### Usage

  * **Primary and Secondary Actions**: Use a split button when you have a primary action that you want to feature prominently, alongside a set of related, but less important, secondary actions.
  * **Reducing Complexity**: By hiding secondary options in a menu, split buttons keep the UI clean and focused.
  * **Context**: They work well on their own or alongside other button types in a layout. When using a split button with other controls, you can vary the sizes to create visual hierarchy.
  * **Hero Moments**: Using a larger-sized split button can add emphasis for key actions, especially in smaller windows.
  * **Do's and Don'ts**:
      * **Do** open a standard menu from the trailing button. The menu can be customized to open other components like cards if necessary.
      * **Don't** modify the menu container in unusual ways that break user expectations.
      * **Do** keep the leading button's label brief (one or two words).
      * **Don't** use very long labels or change the trailing button's icon.

### Anatomy

A split button is composed of four main parts:

1.  **Leading Button**: The primary action. It can contain a label, an icon, or both.
2.  **Label Text**: The text describing the primary action.
3.  **Icon**: An optional icon within the leading button that corresponds to the action.
4.  **Trailing Button**: The secondary action control that opens the menu. It should always contain a downward-facing menu icon, which rotates on interaction.

### Menu Placement

  * The menu opened by the trailing button should ideally be aligned with the trailing button itself.
  * If there isn't enough screen space, the menu can be aligned to one of the outer edges of the split button.
  * The menu should be positioned 4dp away from the split button container.

### Behavior

  * **Interaction**: The trailing button opens a menu to provide more options related to the main action.
  * **Animation**:
      * When the trailing button is selected, its icon rotates inwards 180°. This animation uses the standard motion scheme, not the expressive one.
      * The inner corners of both the leading and trailing buttons change shape on hover, focus, and press to provide visual feedback.
  * **State**: When the trailing button is selected to open the menu, the button's color does not change. Instead, a state layer is applied to indicate the active state. The icon also becomes centered.

### Accessibility

  * **Navigation**: Users must be able to navigate to and interact with both the leading and trailing buttons using assistive technologies. Focus should move logically, typically from the leading button to the trailing button. Users can navigate between the buttons using the `Tab` key and activate them with `Space` or `Enter`.
  * **State Awareness**: Assistive technologies should be able to understand the current state of the button, including whether the menu is expanded or collapsed.
  * **Labeling**:
      * The leading button should have a clear, concise label, just like a common button.
      * The trailing button's accessibility label should clearly indicate that it opens a menu with more options (e.g., "More watch options").
  * **Target Size**: Each button segment within the split button must have a minimum target area of 48x48dp to ensure it's easily tappable. For extra small and small variants, the visible height is less than 48dp, so the touch target must be extended to meet this requirement.

### Split Button Component - Tokens

---

#### Color Tokens

All colors are handled at the Button level.

---

#### Size, Shape, & Layout Tokens

##### Xsmall
* `container.height`: `md.comp.split-button.xsmall.container.height` = `32dp`
* `layout.between-space`: `md.comp.split-button.xsmall.between-space` = `2dp`
* `shape.outer-radii`: `md.comp.split-button.xsmall.container.shape` = `md.sys.shape.corner.full`
* `shape.outer-corner.corner-size`: `md.comp.split-button.xsmall.outer-corner.corner-size` = `50%`
* `shape.inner-corner.corner-size`: `md.comp.split-button.xsmall.inner-corner.corner-size` = `md.sys.shape.corner-value.extra-small` = `4dp`
* `leading-button.leading-space`: `md.comp.split-button.xsmall.leading-button.leading-space` = `12dp`
* `leading-button.trailing-space`: `md.comp.split-button.xsmall.leading-button.trailing-space` = `10dp`
* `trailing-button.icon.size`: `md.comp.split-button.xsmall.trailing-button.icon.size` = `22dp`
* `trailing-button.leading-space`: `md.comp.split-button.xsmall.trailing-button.leading-space` = `13dp`
* `trailing-button.trailing-space`: `md.comp.split-button.xsmall.trailing-button.trailing-space` = `13dp`
* `shape.inner-corner.hovered.corner-size`: `md.comp.split-button.xsmall.inner-corner.hovered.corner-size` = `md.sys.shape.corner-value.small` = `8dp`
* `shape.inner-corner.pressed.corner-size`: `md.comp.split-button.xsmall.inner-corner.pressed.corner-size` = `md.sys.shape.corner-value.small` = `8dp`
* `shape.inner-corner.selected.corner-size`: `md.comp.split-button.xsmall.trailing-button.inner-corner.selected.corner-size` = `50%`
* `label-text`: `md.comp.split-button.xsmall.label-text` = `md.sys.typescale.label-large`
* `leading-icon`: `md.comp.split-button.xsmall.leading-icon` = `20dp`

##### Small
* `container.height`: `md.comp.split-button.small.container.height` = `40dp`
* `layout.between-space`: `md.comp.split-button.small.between-space` = `2dp`
* `shape.outer-radii`: `md.comp.split-button.small.container.shape` = `md.sys.shape.corner.full`
* `shape.inner-corner.corner-size`: `md.comp.split-button.small.inner-corner.corner-size` = `md.sys.shape.corner-value.extra-small` = `4dp`
* `leading-button.leading-space`: `md.comp.split-button.small.leading-button.leading-space` = `16dp`
* `leading-button.trailing-space`: `md.comp.split-button.small.leading-button.trailing-space` = `12dp`
* `trailing-button.icon.size`: `md.comp.split-button.small.trailing-button.icon.size` = `22dp`
* `trailing-button.leading-space`: `md.comp.split-button.small.trailing-button.leading-space` = `13dp`
* `trailing-button.trailing-space`: `md.comp.split-button.small.trailing-button.trailing-space` = `13dp`
* `shape.inner-corner.hovered.corner-size`: `md.comp.split-button.small.inner-corner.hovered.corner-size` = `md.sys.shape.corner-value.medium` = `12dp`
* `shape.inner-corner.pressed.corner-size`: `md.comp.split-button.small.inner-corner.pressed.corner-size` = `md.sys.shape.corner-value.medium` = `12dp`
* `shape.inner-corner.selected.corner-size`: `md.comp.split-button.small.trailing-button.inner-corner.selected.corner-size` = `50%`
* `label-text`: `md.comp.split-button.small.label-text` = `md.sys.typescale.label-large`
* `leading-icon`: `md.comp.split-button.small.leading-icon` = `20dp`

##### Medium
* `container.height`: `md.comp.split-button.medium.container.height` = `56dp`
* `layout.between-space`: `md.comp.split-button.medium.between-space` = `2dp`
* `shape.outer-radii`: `md.comp.split-button.medium.container.shape` = `md.sys.shape.corner.full`
* `shape.inner-corner.corner-size`: `md.comp.split-button.medium.inner-corner.corner-size` = `md.sys.shape.corner-value.extra-small` = `4dp`
* `leading-button.leading-space`: `md.comp.split-button.medium.leading-button.leading-space` = `24dp`
* `leading-button.trailing-space`: `md.comp.split-button.medium.leading-button.trailing-space` = `24dp`
* `trailing-button.icon.size`: `md.comp.split-button.medium.trailing-button.icon.size` = `26dp`
* `trailing-button.leading-space`: `md.comp.split-button.medium.trailing-button.leading-space` = `15dp`
* `trailing-button.trailing-space`: `md.comp.split-button.medium.trailing-button.trailing-space` = `15dp`
* `shape.inner-corner.hovered.corner-size`: `md.comp.split-button.medium.inner-corner.hovered.corner-size` = `md.sys.shape.corner-value.medium` = `12dp`
* `shape.inner-corner.pressed.corner-size`: `md.comp.split-button.medium.inner-corner.pressed.corner-size` = `md.sys.shape.corner-value.medium` = `12dp`
* `shape.inner-corner.selected.corner-size`: `md.comp.split-button.medium.trailing-button.inner-corner.selected.corner-size` = `50%`
* `label-text`: `md.comp.split-button.medium.label-text` = `md.sys.typescale.title-medium`
* `leading-icon`: `md.comp.split-button.medium.leading-icon` = `24dp`

##### Large
* `container.height`: `md.comp.split-button.large.container.height` = `96dp`
* `layout.between-space`: `md.comp.split-button.large.between-space` = `2dp`
* `shape.outer-radii`: `md.comp.split-button.large.container.shape` = `md.sys.shape.corner.full`
* `shape.inner-corner.corner-size`: `md.comp.split-button.large.inner-corner.corner-size` = `md.sys.shape.corner-value.small` = `8dp`
* `leading-button.leading-space`: `md.comp.split-button.large.leading-button.leading-space` = `48dp`
* `leading-button.trailing-space`: `md.comp.split-button.large.leading-button.trailing-space` = `48dp`
* `trailing-button.icon.size`: `md.comp.split-button.large.trailing-button.icon.size` = `38dp`
* `trailing-button.leading-space`: `md.comp.split-button.large.trailing-button.leading-space` = `29dp`
* `trailing-button.trailing-space`: `md.comp.split-button.large.trailing-button.trailing-space` = `29dp`
* `shape.inner-corner.hovered.corner-size`: `md.comp.split-button.large.inner-corner.hovered.corner-size` = `md.sys.shape.corner-value.large-increased` = `20dp`
* `shape.inner-corner.pressed.corner-size`: `md.comp.split-button.large.inner-corner.pressed.corner-size` = `md.sys.shape.corner-value.large-increased` = `20dp`
* `shape.inner-corner.selected.corner-size`: `md.comp.split-button.large.trailing-button.inner-corner.selected.corner-size` = `50%`
* `label-text`: `md.comp.split-button.large.label-text` = `md.sys.typescale.headline-small`
* `leading-icon`: `md.comp.split-button.large.leading-icon` = `32dp`

##### Xlarge
* `container.height`: `md.comp.split-button.xlarge.container.height` = `136dp`
* `layout.between-space`: `md.comp.split-button.xlarge.between-space` = `2dp`
* `shape.outer-radii`: `md.comp.split-button.xlarge.container.shape` = `md.sys.shape.corner.full`
* `shape.inner-corner.corner-size`: `md.comp.split-button.xlarge.inner-corner.corner-size` = `md.sys.shape.corner-value.medium` = `12dp`
* `leading-button.leading-space`: `md.comp.split-button.xlarge.leading-button.leading-space` = `64dp`
* `leading-button.trailing-space`: `md.comp.split-button.xlarge.leading-button.trailing-space` = `64dp`
* `trailing-button.icon.size`: `md.comp.split-button.xlarge.trailing-button.icon.size` = `50dp`
* `trailing-button.leading-space`: `md.comp.split-button.xlarge.trailing-button.leading-space` = `43dp`
* `trailing-button.trailing-space`: `md.comp.split-button.xlarge.trailing-button.trailing-space` = `43dp`
* `shape.inner-corner.hovered.corner-size`: `md.comp.split-button.xlarge.inner-corner.hovered.corner-size` = `md.sys.shape.corner-value.large-increased` = `20dp`
* `shape.inner-corner.pressed.corner-size`: `md.comp.split-button.xlarge.inner-corner.pressed.corner-size` = `md.sys.shape.corner-value.large-increased` = `20dp`
* `shape.inner-corner.selected.corner-size`: `md.comp.split-button.xlarge.trailing-button.inner-corner.selected.corner-size` = `50%`
* `label-text`: `md.comp.split-button.xlarge.label-text` = `md.sys.typescale.headline-large`
* `leading-icon`: `md.comp.split-button.xlarge.leading-icon` = `40dp`

---

#### Focus Indicator Tokens

* `indicator.color`: `md.comp.split-button.focus.indicator.color` = `md.sys.color.secondary`
* `indicator.thickness`: `md.comp.split-button.focus.indicator.thickness` = `md.sys.states.focus-indicator.thickness`
* `indicator.outline.offset`: `md.comp.split-button.focus.indicator.outline.offset` = `md.sys.states.focus-indicator.outer-offset`

---



## Switch Component

Switches toggle the selection of an item on or off, representing a binary choice (e.g., true/false, on/off). They are a key component for user settings and direct control of individual options.

**Core Principles & Usage:**
*   **Toggle Single Item:** Use switches to turn a single, independent option on or off.
*   **Immediate Effect:** The action triggered by a switch should take effect immediately without requiring a separate "save" or "apply" action.
*   **Clarity at a Glance:** The switch's current state (on or off) must be clearly visible. The "on" state is typically indicated by a change in color and a larger handle size.
*   **Settings:** Ideal for adjusting settings or toggling standalone features.
*   **Binary Options:** Switches control binary options (a single selection that is either on or off), not opposing ones (where only one option in a set can be selected at a time, like choosing between "List View" and "Map View" - use Segmented Buttons for that).
*   **Placement:** Often arranged in stacked layouts, especially within settings screens.
*   **Labels:**
    *   Always pair switches with an inline label describing what the switch controls.
    *   Keep labels short and direct.
    *   The label text should use the `on surface` color role (e.g., `md.sys.color.on-surface`). Supporting text can use `on surface variant`.
    *   Do not embed label text *within* the switch component itself; the font size would be too small for accessibility. Use an icon if a visual cue within the switch is needed.

**Alternate Selection Controls:**
*   **Checkboxes (`md.comp.checkbox`):** Use to select one or more related options from a list. Do not use a switch if multiple options can be selected and then saved with a button.
*   **Radio Buttons (`md.comp.radio-button`):** Use to select a single option from a list where only one choice is permissible at a time.
*   **Buttons (`md.comp.button`):** A switch cannot replace a button. Users expect a call to action (like "Update") to be a button, not a switch.

### Structure

A switch is composed of three main parts:
1.  **Track:** The background path the handle slides along.
2.  **Handle (formerly "thumb"):** The circular element that slides along the track and indicates the current state. It can optionally contain an icon.
3.  **Icon (optional):** An icon within the handle to visually reinforce the switch's state or meaning.
    *   The icon should clearly communicate whether the switch is on or off.
    *   Avoid ambiguous or non-binary icons (e.g., a moon or an edit icon). The Material Symbols `check` and `close` are appropriate examples for on/off states.

---

### Switch Component - Tokens

---

**Token Set**: `md.comp.switch`

#### Color Tokens

##### **Enabled**
* `selected.track.color`: `md.comp.switch.selected.track.color` = `md.sys.color.primary`
* `unselected.track.color`: `md.comp.switch.unselected.track.color` = `md.sys.color.surface-container-highest`
* `unselected.track.outline.color`: `md.comp.switch.unselected.track.outline.color` = `md.sys.color.outline`
* `selected.handle.color`: `md.comp.switch.selected.handle.color` = `md.sys.color.on-primary`
* `unselected.handle.color`: `md.comp.switch.unselected.handle.color` = `md.sys.color.outline`
* `selected.icon.color`: `md.comp.switch.selected.icon.color` = `md.sys.color.on-primary-container`
* `unselected.icon.color`: `md.comp.switch.unselected.icon.color` = `md.sys.color.surface-container-highest`

##### **Disabled**
* `track.opacity`: `md.comp.switch.disabled.track.opacity` = `12%`
* `selected.track.color`: `md.comp.switch.disabled.selected.track.color` = `md.sys.color.on-surface`
* `unselected.track.color`: `md.comp.switch.disabled.unselected.track.color` = `md.sys.color.surface-container-highest`
* `unselected.track.outline.color`: `md.comp.switch.disabled.unselected.track.outline.color` = `md.sys.color.on-surface`
* `unselected.handle.opacity`: `md.comp.switch.disabled.unselected.handle.opacity` = `38%`
* `selected.handle.opacity`: `md.comp.switch.disabled.selected.handle.opacity` = `100%`
* `selected.handle.color`: `md.comp.switch.disabled.selected.handle.color` = `md.sys.color.surface`
* `unselected.handle.color`: `md.comp.switch.disabled.unselected.handle.color` = `md.sys.color.on-surface`
* `selected.icon.color`: `md.comp.switch.disabled.selected.icon.color` = `md.sys.color.on-surface`
* `selected.icon.opacity`: `md.comp.switch.disabled.selected.icon.opacity` = `38%`
* `unselected.icon.color`: `md.comp.switch.disabled.unselected.icon.color` = `md.sys.color.surface-container-highest`
* `unselected.icon.opacity`: `md.comp.switch.disabled.unselected.icon.opacity` = `38%`

##### **Hovered**
* `selected.track.color`: `md.comp.switch.selected.hover.track.color` = `md.sys.color.primary`
* `selected.state-layer.color`: `md.comp.switch.selected.hover.state-layer.color` = `md.sys.color.primary`
* `selected.state-layer.opacity`: `md.comp.switch.selected.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* `unselected.track.color`: `md.comp.switch.unselected.hover.track.color` = `md.sys.color.surface-container-highest`
* `unselected.track.outline.color`: `md.comp.switch.unselected.hover.track.outline.color` = `md.sys.color.outline`
* `unselected.state-layer.color`: `md.comp.switch.unselected.hover.state-layer.color` = `md.sys.color.on-surface`
* `unselected.state-layer.opacity`: `md.comp.switch.unselected.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* `selected.handle.color`: `md.comp.switch.selected.hover.handle.color` = `md.sys.color.primary-container`
* `unselected.handle.color`: `md.comp.switch.unselected.hover.handle.color` = `md.sys.color.on-surface-variant`
* `selected.icon.color`: `md.comp.switch.selected.hover.icon.color` = `md.sys.color.on-primary-container`
* `unselected.icon.color`: `md.comp.switch.unselected.hover.icon.color` = `md.sys.color.surface-container-highest`

##### **Focused**
* `selected.track.color`: `md.comp.switch.selected.focus.track.color` = `md.sys.color.primary`
* `selected.state-layer.color`: `md.comp.switch.selected.focus.state-layer.color` = `md.sys.color.primary`
* `selected.state-layer.opacity`: `md.comp.switch.selected.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* `unselected.track.color`: `md.comp.switch.unselected.focus.track.color` = `md.sys.color.surface-container-highest`
* `unselected.track.outline.color`: `md.comp.switch.unselected.focus.track.outline.color` = `md.sys.color.outline`
* `unselected.state-layer.color`: `md.comp.switch.unselected.focus.state-layer.color` = `md.sys.color.on-surface`
* `unselected.state-layer.opacity`: `md.comp.switch.unselected.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* `selected.handle.color`: `md.comp.switch.selected.focus.handle.color` = `md.sys.color.primary-container`
* `unselected.handle.color`: `md.comp.switch.unselected.focus.handle.color` = `md.sys.color.on-surface-variant`
* `selected.icon.color`: `md.comp.switch.selected.focus.icon.color` = `md.sys.color.on-primary-container`
* `unselected.icon.color`: `md.comp.switch.unselected.focus.icon.color` = `md.sys.color.surface-container-highest`

##### **Pressed**
* `selected.track.color`: `md.comp.switch.selected.pressed.track.color` = `md.sys.color.primary`
* `selected.state-layer.color`: `md.comp.switch.selected.pressed.state-layer.color` = `md.sys.color.primary`
* `selected.state-layer.opacity`: `md.comp.switch.selected.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
* `unselected.track.color`: `md.comp.switch.unselected.pressed.track.color` = `md.sys.color.surface-container-highest`
* `unselected.track.outline.color`: `md.comp.switch.unselected.pressed.track.outline.color` = `md.sys.color.outline`
* `unselected.state-layer.color`: `md.comp.switch.unselected.pressed.state-layer.color` = `md.sys.color.on-surface`
* `unselected.state-layer.opacity`: `md.comp.switch.unselected.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
* `selected.handle.color`: `md.comp.switch.selected.pressed.handle.color` = `md.sys.color.primary-container`
* `unselected.handle.color`: `md.comp.switch.unselected.pressed.handle.color` = `md.sys.color.on-surface-variant`
* `selected.icon.color`: `md.comp.switch.selected.pressed.icon.color` = `md.sys.color.on-primary-container`
* `unselected.icon.color`: `md.comp.switch.unselected.pressed.icon.color` = `md.sys.color.surface-container-highest`

---

#### Size, Shape, & Layout Tokens
* `track.height`: `md.comp.switch.track.height` = `32dp`
* `track.width`: `md.comp.switch.track.width` = `52dp`
* `track.outline.width`: `md.comp.switch.track.outline.width` = `2dp`
* `track.shape`: `md.comp.switch.track.shape` = `md.sys.shape.corner.full`
* `unselected.handle.height`: `md.comp.switch.unselected.handle.height` = `16dp`
* `with-icon.handle.height`: `md.comp.switch.with-icon.handle.height` = `24dp`
* `selected.handle.height`: `md.comp.switch.selected.handle.height` = `24dp`
* `pressed.handle.height`: `md.comp.switch.pressed.handle.height` = `28dp`
* `unselected.handle.width`: `md.comp.switch.unselected.handle.width` = `16dp`
* `with-icon.handle.width`: `md.comp.switch.with-icon.handle.width` = `24dp`
* `selected.handle.width`: `md.comp.switch.selected.handle.width` = `24dp`
* `pressed.handle.width`: `md.comp.switch.pressed.handle.width` = `28dp`
* `handle.shape`: `md.comp.switch.handle.shape` = `md.sys.shape.corner.full`
* `state-layer.size`: `md.comp.switch.state-layer.size` = `40dp`
* `state-layer.shape`: `md.comp.switch.state-layer.shape` = `md.sys.shape.corner.full`
* `selected.icon.size`: `md.comp.switch.selected.icon.size` = `16dp`
* `unselected.icon.size`: `md.comp.switch.unselected.icon.size` = `16dp`

---

### Switch Component - Code Samples & Implementation

```css
/* -------------------- */
/* --- Switch Basic --- */
/* -------------------- */
.switch-container {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.switch-container input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.switch-container .label {
  color: var(--md-sys-color-on-surface);
  font-family: var(--md-sys-typescale-body-large-font-family);
}
.switch-track {
  position: relative;
  width: 52px;
  height: 32px;
  border-radius: 999px;
  box-sizing: border-box;
  transition: background-color 150ms ease-in-out, border-color 150ms ease-in-out;
}
.switch-handle {
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: none;
  transition: all 150ms ease-in-out;
}
.switch-handle .icon {
  font-size: 16px;
  transition: color 150ms ease-in-out;
}
.switch-handle::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: scale(0);
  transition: transform 150ms ease-in-out, background-color 150ms ease-in-out;
}

/* --- STATE: UNSELECTED (OFF) --- */
.switch-container input:not(:checked) + .switch-track {
  background-color: var(--md-sys-color-surface-container-highest);
  border: 2px solid var(--md-sys-color-outline);
}
.switch-container input:not(:checked) + .switch-track .switch-handle {
  width: 16px;
  height: 16px;
  background-color: var(--md-sys-color-outline);
  transform: translate(6px, -50%);
}
.switch-container input:not(:checked) + .switch-track .icon {
  color: var(--md-sys-color-surface-container-highest);
}

/* --- STATE: SELECTED (ON) --- */
.switch-container input:checked + .switch-track {
  background-color: var(--md-sys-color-primary);
  border: 2px solid var(--md-sys-color-primary);
}
.switch-container input:checked + .switch-track .switch-handle {
  width: 24px;
  height: 24px;
  background-color: var(--md-sys-color-on-primary);
  transform: translate(24px, -50%);
}
.switch-container input:checked + .switch-track .icon {
  color: var(--md-sys-color-on-primary-container);
}

/* --- INTERACTION STATES --- */
.switch-container input:active:not(:disabled) + .switch-track .switch-handle {
  width: 26px; 
  height: 26px; 
}
.switch-container input:active:not(:checked):not(:disabled) + .switch-track .switch-handle {
  transform: translate(4px, -50%);
}
.switch-container:hover input:not(:disabled) + .switch-track .switch-handle::after {
  transform: scale(1);
  background-color: var(--md-sys-color-on-surface);
  opacity: var(--md-sys-state-hover-state-layer-opacity);
}
.switch-container:hover input:checked:not(:disabled) + .switch-track .switch-handle::after {
  background-color: var(--md-sys-color-primary);
}

/* --- STATE: DISABLED --- */
.switch-container.disabled {
  cursor: not-allowed;
  opacity: 0.38;
}
```

```html
<label class="switch-container">
  <span class="label">Wi-Fi</span>
  <input type="checkbox" role="switch">
  <div class="switch-track">
    <div class="switch-handle"></div>
  </div>
</label>

<label class="switch-container">
  <span class="label">Mobile data</span>
  <input type="checkbox" role="switch" checked>
  <div class="switch-track">
    <div class="switch-handle"></div>
  </div>
</label>

<label class="switch-container">
  <span class="label">Bluetooth</span>
  <input type="checkbox" role="switch">
  <div class="switch-track">
    <div class="switch-handle">
      <span class="material-symbols-outlined icon">close</span>
    </div>
  </div>
</label>

<label class="switch-container">
  <span class="label">Airplane Mode</span>
  <input type="checkbox" role="switch" checked>
  <div class="switch-track">
    <div class="switch-handle">
      <span class="material-symbols-outlined icon">check</span>
    </div>
  </div>
</label>

<label class="switch-container disabled">
  <span class="label">Location services (Off)</span>
  <input type="checkbox" role="switch" disabled>
  <div class="switch-track">
    <div class="switch-handle"></div>
  </div>
</label>

<label class="switch-container disabled">
  <span class="label">Do Not Disturb (On)</span>
  <input type="checkbox" role="switch" checked disabled>
  <div class="switch-track">
    <div class="switch-handle">
      <span class="material-symbols-outlined icon">check</span>
    </div>
  </div>
</label>
```

---

## Tabs Component

*   Tabs organize content across different screens and views.
*   Use tabs to group content into helpful categories at the same level of hierarchy (not sequential content).
*   Tabs can horizontally scroll, allowing for many tabs if needed.
*   Place tabs next to each other as peers.
*   Icons within tabs should remain outlined and never filled, even when the tab is selected.

There are two types of tabs:

1.  **Primary tabs**: Placed at the top of the content pane. They display the main content destinations.
2.  **Secondary tabs**: Used within a content area to further separate related content and establish hierarchy.

### Tab Component - Tokens

---

#### Primary Navigation Tab

**Token Set**: `md.comp.primary-navigation-tab`

##### Color Tokens

###### Enabled
* `with-icon.active.icon.color`: `md.comp.primary-navigation-tab.with-icon.active.icon.color` = `md.sys.color.primary`
* `with-label-text.inactive.label-text.color`: `md.comp.primary-navigation-tab.with-label-text.inactive.label-text.color` = `md.sys.color.on-surface-variant`
* `container.shape`: `md.comp.primary-navigation-tab.container.shape` = `md.sys.shape.corner.none`
* `with-icon.icon.size`: `md.comp.primary-navigation-tab.with-icon.icon.size` = `24dp`
* `container.elevation`: `md.comp.primary-navigation-tab.container.elevation` = `md.sys.elevation.level0`
* `active-indicator.shape`: `md.comp.primary-navigation-tab.active-indicator.shape` = `md.sys.shape.corner.full`
* `with-icon-and-label-text.container.height`: `md.comp.primary-navigation-tab.with-icon-and-label-text.container.height` = `64dp`
* `active-indicator.height`: `md.comp.primary-navigation-tab.active-indicator.height` = `3dp`
* `with-icon.inactive.icon.color`: `md.comp.primary-navigation-tab.with-icon.inactive.icon.color` = `md.sys.color.on-surface-variant`
* `divider.color`: `md.comp.primary-navigation-tab.divider.color` = `md.sys.color.surface-variant`
* `container.height`: `md.comp.primary-navigation-tab.container.height` = `48dp`
* `with-label-text.active.label-text.color`: `md.comp.primary-navigation-tab.with-label-text.active.label-text.color` = `md.sys.color.primary`
* `container.color`: `md.comp.primary-navigation-tab.container.color` = `md.sys.color.surface`
* `active-indicator.color`: `md.comp.primary-navigation-tab.active-indicator.color` = `md.sys.color.primary`

###### Hover
* `active.hover.state-layer.opacity`: `md.comp.primary-navigation-tab.active.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* `with-icon.active.hover.icon.color`: `md.comp.primary-navigation-tab.with-icon.active.hover.icon.color` = `md.sys.color.primary`
* `with-label-text.active.hover.label-text.color`: `md.comp.primary-navigation-tab.with-label-text.active.hover.label-text.color` = `md.sys.color.primary`
* `active.hover.state-layer.color`: `md.comp.primary-navigation-tab.active.hover.state-layer.color` = `md.sys.color.primary`

###### Focus
* `active.focus.state-layer.opacity`: `md.comp.primary-navigation-tab.active.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* `with-label-text.active.focus.label-text.color`: `md.comp.primary-navigation-tab.with-label-text.active.focus.label-text.color` = `md.sys.color.primary`
* `with-icon.active.focus.icon.color`: `md.comp.primary-navigation-tab.with-icon.active.focus.icon.color` = `md.sys.color.primary`
* `active.focus.state-layer.color`: `md.comp.primary-navigation-tab.active.focus.state-layer.color` = `md.sys.color.primary`

###### Pressed
* `active.pressed.state-layer.color`: `md.comp.primary-navigation-tab.active.pressed.state-layer.color` = `md.sys.color.primary`
* `with-label-text.active.pressed.label-text.color`: `md.comp.primary-navigation-tab.with-label-text.active.pressed.label-text.color` = `md.sys.color.primary`
* `with-icon.active.pressed.icon.color`: `md.comp.primary-navigation-tab.with-icon.active.pressed.icon.color` = `md.sys.color.primary`
* `active.pressed.state-layer.opacity`: `md.comp.primary-navigation-tab.active.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Secondary Navigation Tab

**Token Set**: `md.comp.secondary-navigation-tab`

##### Color Tokens

###### Enabled
* `divider.color`: `md.comp.secondary-navigation-tab.divider.color` = `md.sys.color.surface-variant`
* `with-icon.inactive.icon.color`: `md.comp.secondary-navigation-tab.with-icon.inactive.icon.color` = `md.sys.color.on-surface-variant`
* `container.color`: `md.comp.secondary-navigation-tab.container.color` = `md.sys.color.surface`
* `active-indicator.color`: `md.comp.secondary-navigation-tab.active-indicator.color` = `md.sys.color.primary`
* `active.label-text.color`: `md.comp.secondary-navigation-tab.active.label-text.color` = `md.sys.color.on-surface`

###### Hover
* `hover.label-text.color`: `md.comp.secondary-navigation-tab.hover.label-text.color` = `md.sys.color.on-surface`
* `hover.state-layer.color`: `md.comp.secondary-navigation-tab.hover.state-layer.color` = `md.sys.color.on-surface`
* `hover.state-layer.opacity`: `md.comp.secondary-navigation-tab.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* `with-icon.hover.icon.color`: `md.comp.secondary-navigation-tab.with-icon.hover.icon.color` = `md.sys.color.on-surface`

###### Focus
* `focus.label-text.color`: `md.comp.secondary-navigation-tab.focus.label-text.color` = `md.sys.color.on-surface`
* `with-icon.focus.icon.color`: `md.comp.secondary-navigation-tab.with-icon.focus.icon.color` = `md.sys.color.on-surface`
* `focus.state-layer.opacity`: `md.comp.secondary-navigation-tab.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* `focus.state-layer.color`: `md.comp.secondary-navigation-tab.focus.state-layer.color` = `md.sys.color.on-surface`

###### Pressed
* `with-icon.pressed.icon.color`: `md.comp.secondary-navigation-tab.with-icon.pressed.icon.color` = `md.sys.color.on-surface`
* `pressed.state-layer.opacity`: `md.comp.secondary-navigation-tab.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
* `pressed.label-text.color`: `md.comp.secondary-navigation-tab.pressed.label-text.color` = `md.sys.color.on-surface`
* `pressed.state-layer.color`: `md.comp.secondary-navigation-tab.pressed.state-layer.color` = `md.sys.color.on-surface`

---

## Tab Component - Code

```css
/* ---------------------------------- */
/* -------- Tabs Component ---------- */
/* ---------------------------------- */
.tabs {
    display: flex;
    overflow-x: auto;
    /* background-color: var(--md-sys-color-surface); */
    border-bottom: 1px solid var(--md-sys-color-outline-variant);
    scrollbar-width: none; /* For Firefox */
}

/* Hides scrollbar for Chrome, Safari, and Opera */
.tabs::-webkit-scrollbar {
    display: none;
}

.tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 16px;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    flex-shrink: 0;
    color: var(--md-sys-color-on-surface-variant);
    font-family: var(--md-sys-typescale-title-small-font-family);
    font-size: var(--md-sys-typescale-title-small-font-size);
    font-weight: var(--md-sys-typescale-title-small-font-weight);
    -webkit-tap-highlight-color: transparent;
}

/* Variant for tabs with both an icon and a label */
.tab.with-icon-label {
    min-height: 64px;
}
.tab .material-symbols-outlined {
    margin-bottom: 4px;
    font-size: 24px;
}

.tab .label {
     white-space: nowrap;
}

/* Active State Styling */
.tab.active {
    color: var(--md-sys-color-primary);
}

.tab .indicator {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: var(--md-sys-color-primary);
    border-radius: 999px 999px 0 0;
    opacity: 0;
    transform: scaleX(0.5);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
}

.tab.active .indicator {
    opacity: 1;
    transform: scaleX(1);
}

/* Secondary Tabs Styling */
.tabs.secondary {
     border-bottom: none;
}
.tabs.secondary .tab {
    color: var(--md-sys-color-on-surface-variant);
}
.tabs.secondary .tab.active {
    color: var(--md-sys-color-on-surface);
    font-weight: 700;
}
.tabs.secondary .tab.active .indicator {
     background-color: var(--md-sys-color-on-surface);
}
```

```html
<nav class="tabs">
    <a href="#" class="tab active genux-ripple">
        <span class="label">Home</span>
        <div class="indicator"></div>
    </a>
    <a href="#" class="tab genux-ripple">
        <span class="label">Explore</span>
        <div class="indicator"></div>
    </a>
    <a href="#" class="tab genux-ripple">
        <span class="label">Library</span>
        <div class="indicator"></div>
    </a>
</nav>

<nav class="tabs">
    <a href="#" class="tab with-icon-label active genux-ripple">
        <span class="material-symbols-outlined">schedule</span>
        <span class="label">Recents</span>
        <div class="indicator"></div>
    </a>
    <a href="#" class="tab with-icon-label genux-ripple">
        <span class="material-symbols-outlined">favorite</span>
        <span class="label">Favorites</span>
        <div class="indicator"></div>
    </a>
    <a href="#" class="tab with-icon-label genux-ripple">
        <span class="material-symbols-outlined">place</span>
        <span class="label">Nearby</span>
        <div class="indicator"></div>
    </a>
</nav>

<nav class="tabs">
    <a href="#" class="tab active genux-ripple" aria-label="Recents">
        <span class="material-symbols-outlined">schedule</span>
        <div class="indicator"></div>
    </a>
    <a href="#" class="tab genux-ripple" aria-label="Favorites">
        <span class="material-symbols-outlined">favorite</span>
        <div class="indicator"></div>
    </a>
    <a href="#" class="tab genux-ripple" aria-label="Nearby">
        <span class="material-symbols-outlined">place</span>
        <div class="indicator"></div>
    </a>
</nav>

<nav class="tabs secondary">
    <a href="#" class="tab active genux-ripple">
        <span class="label">All</span>
        <div class="indicator"></div>
    </a>
    <a href="#" class="tab genux-ripple">
        <span class="label">Unread</span>
        <div class="indicator"></div>
    </a>
    <a href="#" class="tab genux-ripple">
        <span class="label">Archived</span>
        <div class="indicator"></div>
    </a>
</nav>
```

---


## Text Field (`md.comp`)

*   Text fields let users enter and edit text. They are used in forms, dialogs, and other surfaces where text input is required.
*   Two types are available: Filled and Outlined.
*   Keep associated label text and supporting/error text brief and clear.

### Filled Text Field (`md.comp.filled-text-field`)

*   Filled text fields have a container background color, making them visually prominent. They are suitable for layouts with less visual noise or when needing higher contrast against the background.

### Outlined Text Field (`md.comp.outlined-text-field`)

*   Outlined text fields have a container stroke. They offer less visual emphasis than filled text fields and are suitable for contexts where hierarchy is less critical.

### Text Field Component - Tokens

---

### Outlined Text Field

**Token Set**: `md.comp.outlined-text-field`

#### Color Tokens

* **Enabled**
    * `outline.color`: `md.comp.outlined-text-field.outline.color` = `md.sys.color.outline`
    * `label-text.color`: `md.comp.outlined-text-field.label-text.color` = `md.sys.color.on-surface-variant`
    * `leading-icon.color`: `md.comp.outlined-text-field.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.outlined-text-field.trailing-icon.color` = `md.sys.color.on-surface-variant`
    * `caret.color`: `md.comp.outlined-text-field.caret.color` = `md.sys.color.primary`
    * `input-text.color`: `md.comp.outlined-text-field.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.outlined-text-field.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `input-text.placeholder.color`: `md.comp.outlined-text-field.input-text.placeholder.color` = `md.sys.color.on-surface-variant`
    * `input-text.suffix.color`: `md.comp.outlined-text-field.input-text.suffix.color` = `md.sys.color.on-surface-variant`
    * `input-text.prefix.color`: `md.comp.outlined-text-field.input-text.prefix.color` = `md.sys.color.on-surface-variant`

* **Disabled**
    * `outline.color`: `md.comp.outlined-text-field.disabled.outline.color` = `md.sys.color.on-surface`
    * `outline.opacity`: `md.comp.outlined-text-field.disabled.outline.opacity` = `0.12`
    * `label-text.color`: `md.comp.outlined-text-field.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.outlined-text-field.disabled.label-text.opacity` = `0.38`
    * `input-text.color`: `md.comp.outlined-text-field.disabled.input-text.color` = `md.sys.color.on-surface`
    * `input-text.opacity`: `md.comp.outlined-text-field.disabled.input-text.opacity` = `0.38`
    * `supporting-text.color`: `md.comp.outlined-text-field.disabled.supporting-text.color` = `md.sys.color.on-surface`
    * `supporting-text.opacity`: `md.comp.outlined-text-field.disabled.supporting-text.opacity` = `0.38`
    * `leading-icon.color`: `md.comp.outlined-text-field.disabled.leading-icon.color` = `md.sys.color.on-surface`
    * `leading-icon.opacity`: `md.comp.outlined-text-field.disabled.leading-icon.opacity` = `0.38`
    * `trailing-icon.color`: `md.comp.outlined-text-field.disabled.trailing-icon.color` = `md.sys.color.on-surface`
    * `trailing-icon.opacity`: `md.comp.outlined-text-field.disabled.trailing-icon.opacity` = `0.38`

* **Focused**
    * `outline.color`: `md.comp.outlined-text-field.focus.outline.color` = `md.sys.color.primary`
    * `label-text.color`: `md.comp.outlined-text-field.focus.label-text.color` = `md.sys.color.primary`
    * `input-text.color`: `md.comp.outlined-text-field.focus.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.outlined-text-field.focus.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `leading-icon.color`: `md.comp.outlined-text-field.focus.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.outlined-text-field.focus.trailing-icon.color` = `md.sys.color.on-surface-variant`

* **Hovered**
    * `outline.color`: `md.comp.outlined-text-field.hover.outline.color` = `md.sys.color.on-surface`
    * `label-text.color`: `md.comp.outlined-text-field.hover.label-text.color` = `md.sys.color.on-surface`
    * `input-text.color`: `md.comp.outlined-text-field.hover.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.outlined-text-field.hover.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `leading-icon.color`: `md.comp.outlined-text-field.hover.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.outlined-text-field.hover.trailing-icon.color` = `md.sys.color.on-surface-variant`

* **Error**
    * `outline.color`: `md.comp.outlined-text-field.error.outline.color` = `md.sys.color.error`
    * `label-text.color`: `md.comp.outlined-text-field.error.label-text.color` = `md.sys.color.error`
    * `input-text.color`: `md.comp.outlined-text-field.error.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.outlined-text-field.error.supporting-text.color` = `md.sys.color.error`
    * `leading-icon.color`: `md.comp.outlined-text-field.error.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.outlined-text-field.error.trailing-icon.color` = `md.sys.color.error`

* **Error Focused**
    * `outline.color`: `md.comp.outlined-text-field.error.focus.outline.color` = `md.sys.states.focus-indicator.thickness`
    * `label-text.color`: `md.comp.outlined-text-field.error.focus.label-text.color` = `md.sys.color.error`
    * `input-text.color`: `md.comp.outlined-text-field.error.focus.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.outlined-text-field.error.focus.supporting-text.color` = `md.sys.color.error`
    * `leading-icon.color`: `md.comp.outlined-text-field.error.focus.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.outlined-text-field.error.focus.trailing-icon.color` = `md.sys.color.error`
    * `caret.color`: `md.comp.outlined-text-field.error.focus.caret.color` = `md.sys.color.error`

* **Error Hovered**
    * `outline.color`: `md.comp.outlined-text-field.error.hover.outline.color` = `md.sys.color.on-error-container`
    * `label-text.color`: `md.comp.outlined-text-field.error.hover.label-text.color` = `md.sys.color.on-error-container`
    * `input-text.color`: `md.comp.outlined-text-field.error.hover.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.outlined-text-field.error.hover.supporting-text.color` = `md.sys.color.error`
    * `leading-icon.color`: `md.comp.outlined-text-field.error.hover.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.outlined-text-field.error.hover.trailing-icon.color` = `md.sys.color.on-error-container`

---

#### Size, Shape, & Layout Tokens

* `container.height`: `md.comp.outlined-text-field.container.height` = `56dp`
* `container.shape`: `md.comp.outlined-text-field.container.shape` = `md.sys.shape.corner.extra-small`
* `outline.width`: `md.comp.outlined-text-field.outline.width` = `1dp`
* `disabled.outline.width`: `md.comp.outlined-text-field.disabled.outline.width` = `1dp`
* `hover.outline.width`: `md.comp.outlined-text-field.hover.outline.width` = `1dp`
* `focus.outline.width`: `md.comp.outlined-text-field.focus.outline.width` = `md.sys.states.focus-indicator.thickness`
* `leading-icon.size`: `md.comp.outlined-text-field.leading-icon.size` = `24dp`
* `trailing-icon.size`: `md.comp.outlined-text-field.trailing-icon.size` = `24dp`
* `leading-space`: `md.comp.outlined-text-field.leading-space` = `16dp`
* `trailing-space`: `md.comp.outlined-text-field.trailing-space` = `16dp`
* `leading-icon.leading-space`: `md.comp.outlined-text-field.leading-icon.leading-space` = `12dp`
* `leading-icon.leading-icon-label-text-space`: `md.comp.outlined-text-field.leading-icon.leading-icon-label-text-space` = `16dp`
* `trailing-icon.label-text-trailing-icon-space`: `md.comp.outlined-text-field.trailing-icon.label-text-trailing-icon-space` = `16dp`
* `trailing-icon.trailing-icon-space`: `md.comp.outlined-text-field.trailing-icon.trailing-icon-space` = `12dp`

---

#### Typography Tokens

* `label-text.font`: `md.comp.outlined-text-field.label-text.font` = `md.sys.typescale.body-large.font`
* `label-text.line-height`: `md.comp.outlined-text-field.label-text.line-height` = `md.sys.typescale.body-large.line-height`
* `label-text.size`: `md.comp.outlined-text-field.label-text.size` = `md.sys.typescale.body-large.size`
* `label-text.weight`: `md.comp.outlined-text-field.label-text.weight` = `md.sys.typescale.body-large.weight`
* `label-text.tracking`: `md.comp.outlined-text-field.label-text.tracking` = `md.sys.typescale.body-large.tracking`
* `label-text.populated.line-height`: `md.comp.outlined-text-field.label-text.populated.line-height` = `md.sys.typescale.body-small.line-height`
* `label-text.populated.size`: `md.comp.outlined-text-field.label-text.populated.size` = `md.sys.typescale.body-small.size`
* `input-text.font`: `md.comp.outlined-text-field.input-text.font` = `md.sys.typescale.body-large.font`
* `input-text.line-height`: `md.comp.outlined-text-field.input-text.line-height` = `md.sys.typescale.body-large.line-height`
* `input-text.size`: `md.comp.outlined-text-field.input-text.size` = `md.sys.typescale.body-large.size`
* `input-text.weight`: `md.comp.outlined-text-field.input-text.weight` = `md.sys.typescale.body-large.weight`
* `input-text.tracking`: `md.comp.outlined-text-field.input-text.tracking` = `md.sys.typescale.body-large.tracking`
* `supporting-text.font`: `md.comp.outlined-text-field.supporting-text.font` = `md.sys.typescale.body-small.font`
* `supporting-text.line-height`: `md.comp.outlined-text-field.supporting-text.line-height` = `md.sys.typescale.body-small.line-height`
* `supporting-text.size`: `md.comp.outlined-text-field.supporting-text.size` = `md.sys.typescale.body-small.size`
* `supporting-text.weight`: `md.comp.outlined-text-field.supporting-text.weight` = `md.sys.typescale.body-small.weight`
* `supporting-text.tracking`: `md.comp.outlined-text-field.supporting-text.tracking` = `md.sys.typescale.body-small.tracking`

---

### Filled Text Field

**Token Set**: `md.comp.filled-text-field`

#### Color Tokens

* **Enabled**
    * `container.color`: `md.comp.filled-text-field.container.color` = `md.sys.color.surface-container-highest`
    * `leading-icon.color`: `md.comp.filled-text-field.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `label-text.color`: `md.comp.filled-text-field.label-text.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.filled-text-field.trailing-icon.color` = `md.sys.color.on-surface-variant`
    * `active-indicator.color`: `md.comp.filled-text-field.active-indicator.color` = `md.sys.color.on-surface-variant`
    * `caret.color`: `md.comp.filled-text-field.caret.color` = `md.sys.color.primary`
    * `input-text.color`: `md.comp.filled-text-field.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.filled-text-field.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `input-text.placeholder.color`: `md.comp.filled-text-field.input-text.placeholder.color` = `md.sys.color.on-surface-variant`
    * `input-text.prefix.color`: `md.comp.filled-text-field.input-text.prefix.color` = `md.sys.color.on-surface-variant`
    * `input-text.suffix.color`: `md.comp.filled-text-field.input-text.suffix.color` = `md.sys.color.on-surface-variant`

* **Disabled**
    * `container.color`: `md.comp.filled-text-field.disabled.container.color` = `md.sys.color.on-surface`
    * `container.opacity`: `md.comp.filled-text-field.disabled.container.opacity` = `0.04`
    * `active-indicator.color`: `md.comp.filled-text-field.disabled.active-indicator.color` = `md.sys.color.on-surface`
    * `active-indicator.opacity`: `md.comp.filled-text-field.disabled.active-indicator.opacity` = `0.38`
    * `label-text.color`: `md.comp.filled-text-field.disabled.label-text.color` = `md.sys.color.on-surface`
    * `label-text.opacity`: `md.comp.filled-text-field.disabled.label-text.opacity` = `0.38`
    * `input-text.color`: `md.comp.filled-text-field.disabled.input-text.color` = `md.sys.color.on-surface`
    * `input-text.opacity`: `md.comp.filled-text-field.disabled.input-text.opacity` = `0.38`
    * `supporting-text.color`: `md.comp.filled-text-field.disabled.supporting-text.color` = `md.sys.color.on-surface`
    * `supporting-text.opacity`: `md.comp.filled-text-field.disabled.supporting-text.opacity` = `0.38`
    * `leading-icon.color`: `md.comp.filled-text-field.disabled.leading-icon.color` = `md.sys.color.on-surface`
    * `leading-icon.opacity`: `md.comp.filled-text-field.disabled.leading-icon.opacity` = `0.38`
    * `trailing-icon.color`: `md.comp.filled-text-field.disabled.trailing-icon.color` = `md.sys.color.on-surface`
    * `trailing-icon.opacity`: `md.comp.filled-text-field.disabled.trailing-icon.opacity` = `0.38`

* **Focused**
    * `active-indicator.color`: `md.comp.filled-text-field.focus.active-indicator.color` = `md.sys.color.primary`
    * `label-text.color`: `md.comp.filled-text-field.focus.label-text.color` = `md.sys.color.primary`
    * `input-text.color`: `md.comp.filled-text-field.focus.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.filled-text-field.focus.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `leading-icon.color`: `md.comp.filled-text-field.focus.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.filled-text-field.focus.trailing-icon.color` = `md.sys.color.on-surface-variant`

* **Hovered**
    * `active-indicator.color`: `md.comp.filled-text-field.hover.active-indicator.color` = `md.sys.color.on-surface`
    * `label-text.color`: `md.comp.filled-text-field.hover.label-text.color` = `md.sys.color.on-surface-variant`
    * `input-text.color`: `md.comp.filled-text-field.hover.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.filled-text-field.hover.supporting-text.color` = `md.sys.color.on-surface-variant`
    * `leading-icon.color`: `md.comp.filled-text-field.hover.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.filled-text-field.hover.trailing-icon.color` = `md.sys.color.on-surface-variant`
    * `state-layer.color`: `md.comp.filled-text-field.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.filled-text-field.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

* **Error**
    * `active-indicator.color`: `md.comp.filled-text-field.error.active-indicator.color` = `md.sys.color.error`
    * `label-text.color`: `md.comp.filled-text-field.error.label-text.color` = `md.sys.color.error`
    * `input-text.color`: `md.comp.filled-text-field.error.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.filled-text-field.error.supporting-text.color` = `md.sys.color.error`
    * `leading-icon.color`: `md.comp.filled-text-field.error.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.filled-text-field.error.trailing-icon.color` = `md.sys.color.error`

* **Error Focused**
    * `active-indicator.color`: `md.comp.filled-text-field.error.focus.active-indicator.color` = `md.sys.color.error`
    * `label-text.color`: `md.comp.filled-text-field.error.focus.label-text.color` = `md.sys.color.error`
    * `input-text.color`: `md.comp.filled-text-field.error.focus.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.filled-text-field.error.focus.supporting-text.color` = `md.sys.color.error`
    * `leading-icon.color`: `md.comp.filled-text-field.error.focus.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.filled-text-field.error.focus.trailing-icon.color` = `md.sys.color.error`
    * `caret.color`: `md.comp.filled-text-field.error.focus.caret.color` = `md.sys.color.error`

* **Error Hovered**
    * `active-indicator.color`: `md.comp.filled-text-field.error.hover.active-indicator.color` = `md.sys.color.on-error-container`
    * `label-text.color`: `md.comp.filled-text-field.error.hover.label-text.color` = `md.sys.color.on-error-container`
    * `input-text.color`: `md.comp.filled-text-field.error.hover.input-text.color` = `md.sys.color.on-surface`
    * `supporting-text.color`: `md.comp.filled-text-field.error.hover.supporting-text.color` = `md.sys.color.error`
    * `leading-icon.color`: `md.comp.filled-text-field.error.hover.leading-icon.color` = `md.sys.color.on-surface-variant`
    * `trailing-icon.color`: `md.comp.filled-text-field.error.hover.trailing-icon.color` = `md.sys.color.on-error-container`
    * `state-layer.color`: `md.comp.filled-text-field.error.hover.state-layer.color` = `md.sys.color.on-surface`
    * `state-layer.opacity`: `md.comp.filled-text-field.error.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

---

#### Size, Shape, & Layout Tokens

* `container.height`: `md.comp.filled-text-field.container.height` = `56dp`
* `container.shape`: `md.comp.filled-text-field.container.shape` = `md.sys.shape.corner.extra-small.top`
* `leading-icon.size`: `md.comp.filled-text-field.leading-icon.size` = `24dp`
* `trailing-icon.size`: `md.comp.filled-text-field.trailing-icon.size` = `24dp`
* `active-indicator.height`: `md.comp.filled-text-field.active-indicator.height` = `1dp`
* `disabled.active-indicator.height`: `md.comp.filled-text-field.disabled.active-indicator.height` = `1dp`
* `hover.active-indicator.height`: `md.comp.filled-text-field.hover.active-indicator.height` = `1dp`
* `focus.active-indicator.height`: `md.comp.filled-text-field.focus.active-indicator.height` = `md.sys.states.focus-indicator.thickness`
* `error.focus.active-indicator.height`: `md.comp.filled-text-field.focus.active-indicator.height` = `md.sys.states.focus-indicator.thickness`
* `top-space`: `md.comp.filled-text-field.top-space` = `8dp`
* `bottom-space`: `md.comp.filled-text-field.bottom-space` = `8dp`
* `leading-space`: `md.comp.filled-text-field.leading-space` = `16dp`
* `trailing-space`: `md.comp.filled-text-field.trailing-space` = `16dp`
* `leading-icon.leading-space`: `md.comp.filled-text-field.leading-icon.leading-space` = `12dp`
* `leading-icon.leading-icon-label-text-space`: `md.comp.filled-text-field.leading-icon.leading-icon-label-text-space` = `16dp`
* `trailing-icon.label-text-trailing-icon-space`: `md.comp.filled-text-field.trailing-icon.label-text-trailing-icon-space` = `16dp`
* `trailing-icon.trailing-icon-space`: `md.comp.filled-text-field.trailing-icon.trailing-icon-space` = `12dp`

---

#### Typography Tokens

* `label-text.font`: `md.comp.filled-text-field.label-text.font` = `md.sys.typescale.body-large.font`
* `label-text.line-height`: `md.comp.filled-text-field.label-text.line-height` = `md.sys.typescale.body-large.line-height`
* `label-text.size`: `md.comp.filled-text-field.label-text.size` = `md.sys.typescale.body-large.size`
* `label-text.weight`: `md.comp.filled-text-field.label-text.weight` = `md.sys.typescale.body-large.weight`
* `label-text.tracking`: `md.comp.filled-text-field.label-text.tracking` = `md.sys.typescale.body-large.tracking`
* `label-text.populated.line-height`: `md.comp.filled-text-field.label-text.populated.line-height` = `md.sys.typescale.body-small.line-height`
* `label-text.populated.size`: `md.comp.filled-text-field.label-text.populated.size` = `md.sys.typescale.body-small.size`
* `input-text.font`: `md.comp.filled-text-field.input-text.font` = `md.sys.typescale.body-large.font`
* `input-text.line-height`: `md.comp.filled-text-field.input-text.line-height` = `md.sys.typescale.body-large.line-height`
* `input-text.size`: `md.comp.filled-text-field.input-text.size` = `md.sys.typescale.body-large.size`
* `input-text.weight`: `md.comp.filled-text-field.input-text.weight` = `md.sys.typescale.body-large.weight`
* `input-text.tracking`: `md.comp.filled-text-field.input-text.tracking` = `md.sys.typescale.body-large.tracking`
* `supporting-text.font`: `md.comp.filled-text-field.supporting-text.font` = `md.sys.typescale.body-small.font`
* `supporting-text.line-height`: `md.comp.filled-text-field.supporting-text.line-height` = `md.sys.typescale.body-small.line-height`
* `supporting-text.size`: `md.comp.filled-text-field.supporting-text.size` = `md.sys.typescale.body-small.size`
* `supporting-text.weight`: `md.comp.filled-text-field.supporting-text.weight` = `md.sys.typescale.body-small.weight`
* `supporting-text.tracking`: `md.comp.filled-text-field.supporting-text.tracking` = `md.sys.typescale.body-small.tracking`

---

### Text Field Component - Code Samples & Implementation

This section provides a complete, self-contained implementation for both **Filled** and **Outlined** Text Fields. It includes the necessary HTML structure, CSS for all states based on the design tokens, and the JavaScript required to power the floating label animation.

-----

#### 1. HTML Structure

A wrapper element is essential for correctly positioning the floating label and supporting text relative to the input. The structure uses a `.text-field-container` with modifier classes for the variant (`.filled` or `.outlined`) and its state (`.error`, `.disabled`). State changes like focus and having a value are handled by adding classes (`.focused`, `.has-value`) via JavaScript.

```html
<div class="text-field-container filled">
    <input type="text" id="email" placeholder=" "/>
    <label for="email">Email</label>
    <div class="supporting-text">Enter your email address</div>
</div>

<div class="text-field-container outlined">
    <span class="material-symbols-outlined leading-icon">search</span>
    <input type="text" id="search" placeholder=" "/>
    <label for="search">Search</label>
    <span class="material-symbols-outlined trailing-icon">mic</span>
</div>

<div class="text-field-container filled error">
    <input type="password" id="password" placeholder=" " value="123"/>
    <label for="password">Password</label>
    <div class="supporting-text">Password is too short</div>
</div>

<div class="text-field-container outlined disabled">
    <input type="text" id="city" placeholder=" " value="Tucson" disabled/>
    <label for="city">City</label>
</div>
```

-----

#### 2. CSS Implementation

This CSS handles the complex styling for both variants, including the floating label animation, state-based color changes, and the "notched" outline for the outlined style.

```css
/*
 * Material Design Text Field Component Styles
 */

/* --- Base Container & Content --- */
.text-field-container {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--md-sys-typescale-body-large-font-family);
    margin-top: 16px; /* Space for label */
}
.text-field-container input {
    width: 100%;
    height: 56px;
    border: none;
    background-color: transparent;
    padding: 24px 16px 8px 16px;
    box-sizing: border-box;
    font-size: var(--md-sys-typescale-body-large-font-size);
    color: var(--md-sys-color-on-surface);
    caret-color: var(--md-sys-color-primary);
}
.text-field-container input:focus {
    outline: none;
}
.text-field-container .leading-icon,
.text-field-container .trailing-icon {
    color: var(--md-sys-color-on-surface-variant);
    padding: 0 12px;
}
.text-field-container input ~ .leading-icon, /* Adjust padding if icons are present */
.text-field-container input ~ .trailing-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.text-field-container .leading-icon { left: 4px; }
.text-field-container .trailing-icon { right: 4px; }
.text-field-container.has-leading-icon input { padding-left: 52px; }
.text-field-container.has-trailing-icon input { padding-right: 52px; }

/* --- Floating Label --- */
.text-field-container label {
    position: absolute;
    left: 16px;
    top: 18px;
    color: var(--md-sys-color-on-surface-variant);
    pointer-events: none;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left top;
}
/* State when label should be floated up */
.text-field-container.focused label,
.text-field-container.has-value label {
    transform: translateY(-18px) scale(0.75);
}
.text-field-container.focused label {
    color: var(--md-sys-color-primary);
}

/* --- Supporting Text --- */
.supporting-text {
    position: absolute;
    top: 100%;
    left: 16px;
    font-family: var(--md-sys-typescale-body-small-font-family);
    font-size: var(--md-sys-typescale-body-small-font-size);
    color: var(--md-sys-color-on-surface-variant);
    padding-top: 4px;
}

/* --- Filled Variant --- */
.filled {
    background-color: var(--md-sys-color-surface-container-highest);
    border-top-left-radius: var(--md-sys-shape-corner-extra-small);
    border-top-right-radius: var(--md-sys-shape-corner-extra-small);
}
.filled::after { /* Active Indicator Line */
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--md-sys-color-on-surface-variant);
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.filled:hover::after {
    background-color: var(--md-sys-color-on-surface);
}
.filled.focused::after {
    height: 2px;
    background-color: var(--md-sys-color-primary);
}

/* --- Outlined Variant --- */
.outlined input {
    padding-top: 16px; /* Adjust padding for outlined style */
    padding-bottom: 16px;
}
.outlined::before { /* The outline border */
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid var(--md-sys-color-outline);
    border-radius: var(--md-sys-shape-corner-extra-small);
    pointer-events: none;
    transition: border-color 150ms ease, border-width 150ms ease;
}
.outlined:hover::before {
    border-color: var(--md-sys-color-on-surface);
}
.outlined.focused::before {
    border-color: var(--md-sys-color-primary);
    border-width: 2px;
}
/* Notch for the label */
.outlined.focused label,
.outlined.has-value label {
    background-color: var(--md-sys-color-surface); /* Matches page background */
    padding: 0 4px;
    left: 12px;
    top: -8px; /* Position it in the middle of the outline */
}

/* --- Error State --- */
.error label,
.error .supporting-text {
    color: var(--md-sys-color-error) !important;
}
.error .trailing-icon {
    color: var(--md-sys-color-error);
}
.error input {
    caret-color: var(--md-sys-color-error);
}
.filled.error::after {
    background-color: var(--md-sys-color-error);
    height: 2px;
}
.outlined.error::before {
    border-color: var(--md-sys-color-error);
    border-width: 2px;
}

/* --- Disabled State --- */
.disabled {
    opacity: 0.38;
    pointer-events: none;
}
.filled.disabled {
    background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.04);
}
.filled.disabled::after {
    background-color: rgba(var(--md-sys-color-on-surface-rgb), 0.38);
}
.outlined.disabled::before {
    border-color: rgba(var(--md-sys-color-on-surface-rgb), 0.12);
}
```

-----

#### 3. JavaScript Implementation

This script is crucial for managing the floating label behavior by adding and removing classes (`.focused`, `.has-value`) from the container based on user interaction.

```javascript
/*
 * Material Design Text Field Interaction Script
 */
document.addEventListener('DOMContentLoaded', () => {
    const textFields = document.querySelectorAll('.text-field-container');

    textFields.forEach(container => {
        const input = container.querySelector('input');
        if (!input) return;

        // Check initial value on page load
        if (input.value) {
            container.classList.add('has-value');
        }

        input.addEventListener('focus', () => {
            container.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            container.classList.remove('focused');
        });

        input.addEventListener('input', () => {
            if (input.value) {
                container.classList.add('has-value');
            } else {
                container.classList.remove('has-value');
            }
        });
    });
});
```

----

## Time Picker Component

Time pickers help users select and set a specific time. They are displayed in dialogs and are used to select hours, minutes, and periods of time. They appear in front of app content, and all other functionality is blocked until the user confirms, dismisses, or takes a required action.

### Guidelines

* **Usage**: Time pickers are used for a wide range of scenarios, such as setting an alarm or scheduling a meeting. They should not be used for selecting granular time, like milliseconds.
* **Anatomy**: The time picker consists of a container, a headline, input fields for hour and minute, a time selector separator, a period selector (AM/PM), a clock dial for visual selection, and action buttons (e.g., Cancel, OK).
* **Container**: The container holds all time picker elements and appears above other content with a scrim to focus attention.
* **Input Selector**: A unique text field variant for time, featuring a larger shape, font, and a label below the field. Hours and minutes are separate inputs.

### Types

Time pickers have two main input methods that can be toggled:

1.  **Dial Picker**: This is the default view, mimicking a round watch face. Users can select hours and minutes by tapping a number or dragging the dial's track.
2.  **Input Picker**: This view allows users to enter a specific time using a keyboard. It should be accessible from the dial view by tapping a keyboard icon.

The picker also supports two time formats:

* **12-hour clock**: Includes an AM/PM selector.
* **24-hour clock**: The dial view adapts to show 24 hours, and the AM/PM selector is not present.

### Behavior

* **Selection vs. Confirmation**: A critical principle is the separation of selection from confirmation. Clicking a time on the dial or typing in the input field selects the time but **does not** close the picker. The picker remains open until the user clicks "OK" to confirm, "Cancel" to dismiss, or interacts outside the dialog area.
* **Toggling Views**: Users can switch between the dial and input views by tapping an icon button (keyboard or clock icon).
* **Scrolling**: Time pickers should not scroll. The component should adapt its orientation or type to fit the available viewport space.

### Responsive Layout

* **Orientation**: The time picker adapts to the device's orientation. In landscape mode, the input and dial are positioned side-by-side.
* **Constrained Viewports**: On screens with limited space, the picker should default to the input view rather than trying to show a condensed dial. It should always be fully visible and not cropped.

### Accessibility

* **Manual Input**: Time pickers must allow for manual time entry via text input to support users on keyboards. The input selector should be accessible from the dial selector via a keyboard icon.
* **Target Size**: All interactive targets on the dial selector must have a minimum size of $48 \times 48dp$.
* **Keyboard Navigation**: Users must be able to navigate and interact with all parts of the time picker using a keyboard.
    * **Tab**: Focuses on time slots.
    * **Space or Enter**: Activates the focused time slot.
* **Labeling**: Elements must be properly labeled for assistive technologies.
    * The hour and minute fields have a "Text input" role.
    * The AM/PM selection uses a "Radio button" role.
    * Buttons for toggling views, canceling, or confirming are labeled as "Button".
    * A screen reader should announce a dial selection clearly, such as "Hour 7 of 12".

### Time Picker Component - Tokens

---

**Token Set**: `md.comp.time-picker`

#### Enabled

##### Clock dial container
* `color`: `md.comp.time-picker.clock-dial.color` = `md.sys.color.surface-container-highest`
* `shape`: `md.comp.time-picker.clock-dial.shape` = `md.sys.shape.corner.full`

##### Clock dial label text
* `color (selected)`: `md.comp.time-picker.clock-dial.selected.label-text.color` = `md.sys.color.on-primary`
* `color (unselected)`: `md.comp.time-picker.clock-dial.unselected.label-text.color` = `md.sys.color.on-surface`
* `font`: `md.comp.time-picker.clock-dial.label-text.font` = `md.sys.typescale.body-large.font`
* `line height`: `md.comp.time-picker.clock-dial.label-text.line-height` = `md.sys.typescale.body-large.line-height`
* `size`: `md.comp.time-picker.clock-dial.label-text.size` = `md.sys.typescale.body-large.size`
* `weight`: `md.comp.time-picker.clock-dial.label-text.weight` = `md.sys.typescale.body-large.weight`
* `tracking`: `md.comp.time-picker.clock-dial.label-text.tracking` = `md.sys.typescale.body-large.tracking`

##### Clock dial selector center
* `color`: `md.comp.time-picker.clock-dial.selector.center.container.color` = `md.sys.color.primary`

##### Clock dial selector handle
* `color`: `md.comp.time-picker.clock-dial.selector.handle.container.color` = `md.sys.color.primary`
* `shape`: `md.comp.time-picker.clock-dial.selector.handle.container.shape` = `md.sys.shape.corner.full`

##### Clock dial selector track
* `color`: `md.comp.time-picker.clock-dial.selector.track.container.color` = `md.sys.color.primary`

##### Container
* `color`: `md.comp.time-picker.container.color` = `md.sys.color.surface-container-high`
* `elevation`: `md.comp.time-picker.container.elevation` = `md.sys.elevation.level3`
* `shape`: `md.comp.time-picker.container.shape` = `md.sys.shape.corner.extra-large`

##### Headline
* `color`: `md.comp.time-picker.headline.color` = `md.sys.color.on-surface-variant`
* `font`: `md.comp.time-picker.headline.font` = `md.sys.typescale.label-medium.font`
* `line height`: `md.comp.time-picker.headline.line-height` = `md.sys.typescale.label-medium.line-height`
* `size`: `md.comp.time-picker.headline.size` = `md.sys.typescale.label-medium.size`
* `weight`: `md.comp.time-picker.headline.weight` = `md.sys.typescale.label-medium.weight`
* `tracking`: `md.comp.time-picker.headline.tracking` = `md.sys.typescale.label-medium.tracking`

##### Icon button

##### Period selector container
* `color (selected)`: `md.comp.time-picker.period-selector.selected.container.color` = `md.sys.color.tertiary-container`
* `outline color`: `md.comp.time-picker.period-selector.outline.color` = `md.sys.color.outline`
* `outline width`: `md.comp.time-picker.period-selector.outline.width` = `1dp`

##### Period selector label text
* `color (selected)`: `md.comp.time-picker.period-selector.selected.label-text.color` = `md.sys.color.on-tertiary-container`
* `color (unselected)`: `md.comp.time-picker.period-selector.unselected.label-text.color` = `md.sys.color.on-surface-variant`
* `font`: `md.comp.time-picker.period-selector.label-text.font` = `md.sys.typescale.title-medium.font`
* `line height`: `md.comp.time-picker.period-selector.label-text.line-height` = `md.sys.typescale.title-medium.line-height`
* `size`: `md.comp.time-picker.period-selector.label-text.size` = `md.sys.typescale.title-medium.size`
* `weight`: `md.comp.time-picker.period-selector.label-text.weight` = `md.sys.typescale.title-medium.weight`
* `tracking`: `md.comp.time-picker.period-selector.label-text.tracking` = `md.sys.typescale.title-medium.tracking`

##### Text button

##### Time selector container
* `color (selected)`: `md.comp.time-picker.time-selector.selected.container.color` = `md.sys.color.primary-container`
* `color (unselected)`: `md.comp.time-picker.time-selector.unselected.container.color` = `md.sys.color.surface-container-highest`
* `shape`: `md.comp.time-picker.time-selector.container.shape` = `md.sys.shape.corner.small`

##### Time selector label text
* `color (selected)`: `md.comp.time-picker.time-selector.selected.label-text.color` = `md.sys.color.on-primary-container`
* `color (unselected)`: `md.comp.time-picker.time-selector.unselected.label-text.color` = `md.sys.color.on-surface`
* `font`: `md.comp.time-picker.time-selector.label-text.font` = `md.sys.typescale.display-large.font`
* `line height`: `md.comp.time-picker.time-selector.label-text.line-height` = `md.sys.typescale.display-large.line-height`
* `size`: `md.comp.time-picker.time-selector.label-text.size` = `md.sys.typescale.display-large.size`
* `weight`: `md.comp.time-picker.time-selector.label-text.weight` = `md.sys.typescale.display-large.weight`
* `tracking`: `md.comp.time-picker.time-selector.label-text.tracking` = `md.sys.typescale.display-large.tracking`
* `shape`: `md.comp.time-picker.period-selector.container.shape` = `md.sys.shape.corner.small`

##### Selection
* `color`: `md.comp.time-picker.time-selector.separator.color` = `md.sys.color.on-surface`
* `font`: `md.comp.time-picker.time-selector.separator.font` = `md.sys.typescale.display-large.font`
* `line height`: `md.comp.time-picker.time-selector.separator.line-height` = `md.sys.typescale.display-large.line-height`
* `size`: `md.comp.time-picker.time-selector.separator.size` = `md.sys.typescale.display-large.size`
* `weight`: `md.comp.time-picker.time-selector.separator.weight` = `md.sys.typescale.display-large.weight`
* `tracking`: `md.comp.time-picker.time-selector.separator.tracking` = `md.sys.typescale.display-large.tracking`

#### Focused

##### Period selector container
* `state layer color (selected)`: `md.comp.time-picker.period-selector.selected.focus.state-layer.color` = `md.sys.color.on-primary-container`
* `state layer color (unselected)`: `md.comp.time-picker.period-selector.unselected.focus.state-layer.color` = `md.sys.color.on-surface-variant`
* `state layer opacity`: `md.comp.time-picker.period-selector.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

##### Period selector label text
* `color (selected)`: `md.comp.time-picker.period-selector.selected.focus.label-text.color` = `md.sys.color.on-tertiary-container`
* `color (unselected)`: `md.comp.time-picker.period-selector.unselected.focus.label-text.color` = `md.sys.color.on-surface-variant`

##### Time selector label text
* `color (selected)`: `md.comp.time-picker.time-selector.selected.focus.label-text.color` = `md.sys.color.on-primary-container`
* `color (unselected)`: `md.comp.time-picker.time-selector.unselected.focus.label-text.color` = `md.sys.color.on-surface`

##### Time selector container
* `state layer color (selected)`: `md.comp.time-picker.time-selector.selected.focus.state-layer.color` = `md.sys.color.on-primary-container`
* `state layer color (unselected)`: `md.comp.time-picker.time-selector.unselected.focus.state-layer.color` = `md.sys.color.on-surface`
* `state layer opacity`: `md.comp.time-picker.time-selector.focus.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`

#### Hovered

##### Period selector container
* `state layer color (selected)`: `md.comp.time-picker.period-selector.selected.hover.state-layer.color` = `md.sys.color.on-tertiary-container`
* `state layer color (unselected)`: `md.comp.time-picker.period-selector.unselected.hover.state-layer.color` = `md.sys.color.on-surface-variant`
* `state layer opacity`: `md.comp.time-picker.period-selector.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

##### Period selector label text
* `color (selected)`: `md.comp.time-picker.period-selector.selected.hover.label-text.color` = `md.sys.color.on-tertiary-container`
* `color (unselected)`: `md.comp.time-picker.period-selector.unselected.hover.label-text.color` = `md.sys.color.on-surface-variant`

##### Time selector label text
* `color (selected)`: `md.comp.time-picker.time-selector.selected.hover.label-text.color` = `md.sys.color.on-primary-container`
* `color (unselected)`: `md.comp.time-picker.time-selector.unselected.hover.label-text.color` = `md.sys.color.on-surface`

##### Time selector container
* `state layer color (selected)`: `md.comp.time-picker.time-selector.selected.hover.state-layer.color` = `md.sys.color.on-primary-container`
* `state layer color (unselected)`: `md.comp.time-picker.time-selector.unselected.hover.state-layer.color` = `md.sys.color.on-surface`
* `state layer opacity`: `md.comp.time-picker.time-selector.hover.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`

#### Pressed (ripple)

##### Period selector container
* `state layer color (selected)`: `md.comp.time-picker.period-selector.selected.pressed.state-layer.color` = `md.sys.color.on-tertiary-container`
* `state layer color (unselected)`: `md.comp.time-picker.period-selector.unselected.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
* `state layer opacity`: `md.comp.time-picker.period-selector.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

##### Period selector label text
* `color (selected)`: `md.comp.time-picker.period-selector.selected.pressed.label-text.color` = `md.sys.color.on-tertiary-container`
* `color (unselected)`: `md.comp.time-picker.period-selector.unselected.pressed.label-text.color` = `md.sys.color.on-surface-variant`

##### Time selector label text
* `color (selected)`: `md.comp.time-picker.time-selector.selected.pressed.label-text.color` = `md.sys.color.on-primary-container`
* `color (unselected)`: `md.comp.time-picker.time-selector.unselected.pressed.label-text.color` = `md.sys.color.on-surface`

##### Time selector container
* `state layer color (selected)`: `md.comp.time-picker.time-selector.selected.pressed.state-layer.color` = `md.sys.color.on-primary-container`
* `state layer color (unselected)`: `md.comp.time-picker.time-selector.unselected.pressed.state-layer.color` = `md.sys.color.on-surface`
* `state layer opacity`: `md.comp.time-picker.time-selector.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`

---

#### Layout values

##### Clock dial container
* `size`: `md.comp.time-picker.clock-dial.container.size` = `256dp`

##### Clock dial selector center
* `size`: `md.comp.time-picker.clock-dial.selector.center.container.size` = `8dp`

##### Clock dial selector handle
* `size`: `md.comp.time-picker.clock-dial.selector.handle.container.size` = `48dp`

##### Clock dial selector track
* `width`: `md.comp.time-picker.clock-dial.selector.track.container.width` = `2dp`

##### Container
* `width` = `dynamic`
* `height`= `dynamic`
* `headline alignment` = `left`
* `top/bottom padding` = `24dp`
* `left/right padding` = `24dp`

##### Period selector container
* `width (vertical layout)`: `md.comp.time-picker.period-selector.vertical.container.width` = `52dp`
* `height (vertical layout)`: `md.comp.time-picker.period-selector.vertical.container.height` = `80dp`
* `width (horizontal layout)`: `md.comp.time-picker.period-selector.horizontal.container.width` = `216dp`
* `height (horizontal layout)`: `md.comp.time-picker.period-selector.horizontal.container.height` = `38dp`

##### Period selector label text

##### Time selector container
* `width`: `md.comp.time-picker.time-selector.container.width` = `96dp`
* `width (24h vertical)`: `md.comp.time-picker.time-selector.24h-vertical.container.width` = `114dp`
* `height`: `md.comp.time-picker.time-selector.container.height` = `80dp`

---

### Time Picker Component - Code Samples

```css
/* ---------------------------------- */
/* --- Text Field (Trigger) --- */
/* ---------------------------------- */
.text-field-container {
    position: relative;
    display: flex;
    align-items: center;
    /* Uses --md-sys-typescale-body-large-font-family */
    font-family: 'Google Sans Flex', sans-serif; 
}
.text-field-container input {
    width: 100%;
    height: 56px;
    border: none;
    background-color: transparent;
    padding: 16px 16px 16px 52px;
    box-sizing: border-box;
    /* Uses --md-sys-typescale-body-large-font-size */
    font-size: 1rem; 
    /* Uses --md-sys-color-on-surface */
    color: rgba(31, 31, 31, 1); 
    cursor: pointer;
}
.text-field-container input:focus {
    outline: none;
}
.text-field-container .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    /* Uses --md-sys-color-on-surface-variant */
    color: rgba(68, 71, 70, 1); 
    pointer-events: none;
}
.text-field-container::before { /* The outline border */
    content: '';
    position: absolute;
    inset: 0;
    /* Uses --md-sys-color-outline */
    border: 1px solid rgba(116, 119, 117, 1); 
    /* Uses --md-sys-shape-corner-extra-small */
    border-radius: 4px; 
    pointer-events: none;
    transition: border-color 150ms ease, border-width 150ms ease;
}
.text-field-container:hover::before {
    /* Uses --md-sys-color-on-surface */
    border-color: rgba(31, 31, 31, 1); 
}
.text-field-container.focused::before {
    /* Uses --md-sys-color-primary */
    border-color: rgba(11, 87, 208, 1); 
    border-width: 2px;
}
.text-field-container label {
    position: absolute;
    left: 52px;
    top: 50%;
    transform: translateY(-50%);
    /* Uses --md-sys-color-on-surface-variant */
    color: rgba(68, 71, 70, 1); 
    pointer-events: none;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left top;
    /* Uses --md-sys-color-surface */
    background-color: rgba(255, 255, 255, 1); 
    padding: 0 4px;
}
.text-field-container.focused label,
.text-field-container.has-value label {
    transform: translateY(-36px) scale(0.75);
    left: 12px;
}
.text-field-container.focused label {
    /* Uses --md-sys-color-primary */
    color: rgba(11, 87, 208, 1); 
}
.text-field-container.has-leading-icon.focused label,
.text-field-container.has-leading-icon.has-value label {
    left: 48px; /* Adjust floated label for icon */
}
.text-field-container.focused.has-leading-icon label {
        transform: translateY(-36px) scale(0.75);
}

/* ---------------------------------- */
/* --- Button (for Dialog) --- */
/* ---------------------------------- */
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    text-decoration: none;
    /* Uses --md-sys-typescale-label-large-* */
    font-family: 'Google Sans Flex', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    /* Uses --md-sys-shape-corner-full */
    border-radius: 9999px; 
    height: 40px;
    padding: 0 24px;
}
.button.text {
    background-color: transparent;
    /* Uses --md-sys-color-primary */
    color: rgba(11, 87, 208, 1);
    /* Uses --md-sys-color-primary-rgb */
    --genux-press-color-rgb: 11, 87, 208; 
}
.button > span {
    position: relative;
    z-index: 2;
    pointer-events: none;
}

/* ---------------------------------- */
/* --- Icon Button (for Dialog) --- */
/* ---------------------------------- */
.icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    /* Uses --md-sys-color-on-surface-variant */
    color: rgba(68, 71, 70, 1);
    /* Uses --md-sys-color-on-surface-variant-rgb */
    --genux-press-color-rgb: 68, 71, 70; 
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
}
.icon-button .material-symbols-outlined {
    font-size: 24px;
    position: relative;
    z-index: 2;
    pointer-events: none;
}

/* ---------------------------------- */
/* --- Ripple Effect --- */
/* ---------------------------------- */
.ripple-effect {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: genux-ripple-animation 600ms linear;
    z-index: 1;
}
@keyframes genux-ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
.button.text .ripple-effect {
    /* Uses --md-sys-state-pressed-state-layer-opacity */
    background-color: rgba(var(--genux-press-color-rgb), 0.12);
}
.icon-button .ripple-effect {
    /* Uses --md-sys-state-pressed-state-layer-opacity */
    background-color: rgba(var(--genux-press-color-rgb), 0.12);
}
.period-toggle .ripple-effect {
    /* Uses --md-sys-color-on-surface-variant-rgb */
    background-color: rgba(68, 71, 70, 0.12);
}
.period-toggle.active .ripple-effect {
    /* Uses --md-sys-color-on-tertiary-container-rgb */
    background-color: rgba(15, 82, 35, 0.12);
}

/* ---------------------------------- */
/* --- Time Picker Component --- */
/* ---------------------------------- */
.scrim {
    position: fixed;
    inset: 0;
    /* Uses --md-sys-color-scrim */
    background-color: rgba(0, 0, 0, 1);
    opacity: 0.32;
    z-index: 100;
    display: none;
}
.scrim.visible {
    display: block;
}

.time-picker-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 328px;
    /* Uses --md-comp-time-picker-container-color */
    background-color: var(--md-sys-color-surface-container-high, rgba(233, 238, 246, 1));
    /* Uses --md-comp-time-picker-container-shape */
    border-radius: var(--md-sys-shape-corner-extra-large, 28px);
    /* Uses --md-comp-time-picker-container-elevation */
    box-shadow: var(--md-sys-elevation-level3-shadow, 0px 4px 8px 3px rgba(0,0,0, 0.15), 0px 1px 3px 0px rgba(0,0,0, 0.30));
    z-index: 101;
    display: none;
    flex-direction: column;
}
.time-picker-dialog.visible {
    display: flex;
}
.picker-header {
    padding: 24px 24px 12px 24px;
}
.headline {
    /* Uses --md-comp-time-picker-headline-* */
    color: var(--md-sys-color-on-surface-variant, rgba(68, 71, 70, 1));
    font-family: var(--md-sys-typescale-label-medium-font-family, 'Google Sans Flex', sans-serif);
    font-size: var(--md-sys-typescale-label-medium-font-size, 0.75rem);
    font-weight: var(--md-sys-typescale-label-medium-font-weight, 500);
    margin-bottom: 24px;
}
.time-input-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.time-input-container {
    display: flex;
    align-items: center;
}
.time-input {
    width: 96px;
    height: 80px;
    /* Uses --md-comp-time-picker-time-selector-unselected-container-color */
    background-color: var(--md-sys-color-surface-container-highest, rgba(221, 227, 234, 1));
    /* Uses --md-comp-time-picker-time-selector-container-shape */
    border-radius: var(--md-sys-shape-corner-small, 8px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 150ms ease;
}
.time-input input {
    /* Uses --md-comp-time-picker-time-selector-label-text-* */
    font-family: var(--md-sys-typescale-display-large-font-family, 'Google Sans Flex', sans-serif);
    font-size: var(--md-sys-typescale-display-large-font-size, 3.5625rem);
    font-weight: var(--md-sys-typescale-display-large-font-weight, 400);
    /* Uses --md-comp-time-picker-time-selector-unselected-label-text-color */
    color: var(--md-sys-color-on-surface, rgba(31, 31, 31, 1));
    width: 100%;
    border: none;
    background: none;
    text-align: center;
    padding: 0;
    pointer-events: none; /* We handle clicks on the container */
}
.time-input.active {
    /* Uses --md-comp-time-picker-time-selector-selected-container-color */
    background-color: var(--md-sys-color-primary-container, rgba(211, 227, 253, 1));
}
.time-input.active input {
    /* Uses --md-comp-time-picker-time-selector-selected-label-text-color */
    color: var(--md-sys-color-on-primary-container, rgba(8, 66, 160, 1));
}
.time-separator {
    /* Uses --md-comp-time-picker-time-selector-separator-* */
    font-family: var(--md-sys-typescale-display-large-font-family, 'Google Sans Flex', sans-serif);
    font-size: var(--md-sys-typescale-display-large-font-size, 3.5625rem);
    font-weight: var(--md-sys-typescale-display-large-font-weight, 400);
    color: var(--md-sys-color-on-surface, rgba(31, 31, 31, 1));
    margin: 0 4px;
    pointer-events: none;
}
.period-selector {
    display: flex;
    flex-direction: column;
    /* Uses --md-comp-time-picker-period-selector-outline-* */
    border: 1px solid var(--md-sys-color-outline, rgba(116, 119, 117, 1));
    /* Uses --md-comp-time-picker-period-selector-container-shape */
    border-radius: var(--md-sys-shape-corner-small, 8px);
    overflow: hidden;
}
.period-toggle {
    width: 52px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* Uses --md-comp-time-picker-period-selector-label-text-* */
    font-family: var(--md-sys-typescale-title-medium-font-family, 'Google Sans Flex', sans-serif);
    font-size: var(--md-sys-typescale-title-medium-font-size, 1rem);
    font-weight: var(--md-sys-typescale-title-medium-font-weight, 500);
    /* Uses --md-comp-time-picker-period-selector-unselected-label-text-color */
    color: var(--md-sys-color-on-surface-variant, rgba(68, 71, 70, 1));
    cursor: pointer;
    transition: background-color 150ms ease, color 150ms ease;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
}
.period-toggle.active {
    /* Uses --md-comp-time-picker-period-selector-selected-container-color */
    background-color: var(--md-sys-color-tertiary-container, rgba(196, 238, 208, 1));
    /* Uses --md-comp-time-picker-period-selector-selected-label-text-color */
    color: var(--md-sys-color-on-tertiary-container, rgba(15, 82, 35, 1));
}
.picker-main {
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dial-view {
    width: 256px;
    height: 256px;
    /* Uses --md-comp-time-picker-clock-dial-color */
    background-color: var(--md-sys-color-surface-container-highest, rgba(221, 227, 234, 1));
    /* Uses --md-comp-time-picker-clock-dial-shape */
    border-radius: var(--md-sys-shape-corner-full, 9999px);
    position: relative;
    cursor: pointer;
    user-select: none;
}
.clock-selector {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 76px; /* 100px radius - 24px handle radius */
    height: 2px;
    /* Uses --md-comp-time-picker-clock-dial-selector-track-container-color */
    background-color: var(--md-sys-color-primary, rgba(11, 87, 208, 1));
    transform-origin: left center;
    z-index: 1;
}
.clock-selector-handle {
    display: none;
}
.clock-selector-center {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    /* Uses --md-comp-time-picker-clock-dial-selector-center-container-color */
    background-color: var(--md-sys-color-primary, rgba(11, 87, 208, 1));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}
.clock-number {
    position: absolute;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    /* Uses --md-comp-time-picker-clock-dial-label-text-* */
    font-family: var(--md-sys-typescale-body-large-font-family, 'Google Sans Flex', sans-serif);
    font-size: var(--md-sys-typescale-body-large-font-size, 1rem);
    /* Uses --md-comp-time-picker-clock-dial-unselected-label-text-color */
    color: var(--md-sys-color-on-surface, rgba(31, 31, 31, 1));
    z-index: 3;
    transition: all 150ms ease;
}
.clock-number.selected {
    width: 48px;
    height: 48px;
    /* Uses --md-comp-time-picker-clock-dial-selector-handle-container-color */
    background-color: var(--md-sys-color-primary, rgba(11, 87, 208, 1));
    /* Uses --md-comp-time-picker-clock-dial-selected-label-text-color */
    color: var(--md-sys-color-on-primary, rgba(255, 255, 255, 1));
    transform: none;
    z-index: 2;
}
.picker-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px 24px 24px;
}
.picker-actions {
    display: flex;
    gap: 8px;
    margin-left: auto;
}
.input-view {
    display: none;
    padding: 24px;
    text-align: center;
    /* Uses --md-sys-color-on-surface-variant */
    color: var(--md-sys-color-on-surface-variant, rgba(68, 71, 70, 1));
}
```

```html
<!-- 
  Note: Requires Google Fonts and Material Symbols to be imported:
  <link rel="stylesheet" href="[https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap](https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap)">
  <link rel="stylesheet" href="[https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200](https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200)" />
-->

<!-- Text Field Trigger -->
<div class="text-field-container" id="time-trigger-field">
    <span class="material-symbols-outlined icon">schedule</span>
    <label for="time-input">Time</label>
    <input type="text" id="time-input" readonly placeholder=" " />
</div>

<!-- Scrim -->
<div class="scrim" id="picker-scrim"></div>

<!-- Time Picker Dialog -->
<div class="time-picker-dialog" id="time-picker" role="dialog" aria-modal="true" aria-labelledby="picker-headline-label">
    
    <!-- Header -->
    <div class="picker-header">
        <div class="headline" id="picker-headline-label">Select time</div>
        <div class="time-input-section">
            <div class="time-input-container">
                <div class="time-input active" id="hour-input-container">
                    <input type="text" id="hour-input" value="10" readonly maxlength="2">
                </div>
                <div class="time-separator">:</div>
                <div class="time-input" id="minute-input-container">
                    <input type="text" id="minute-input" value="30" readonly maxlength="2">
                </div>
            </div>
            <div class="period-selector" id="period-selector">
                <div class="period-toggle active genux-ripple" data-period="AM">AM</div>
                <div class="period-toggle genux-ripple" data-period="PM">PM</div>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="picker-main">
        <!-- Dial View -->
        <div class="dial-view" id="dial-view">
            <div class="clock-selector" id="clock-selector">
                <div class="clock-selector-handle"></div>
            </div>
            <div class="clock-selector-center"></div>
            <div class="clock-numbers" id="clock-numbers">
                <!-- Numbers are generated by JS -->
            </div>
        </div>
        <!-- Input View (hidden by default) -->
        <div class="input-view" id="input-view">
            Enter time via keyboard.
        </div>
    </div>

    <!-- Footer -->
    <div class="picker-footer">
        <div class="view-toggles">
            <button class="icon-button genux-ripple" id="keyboard-toggle" aria-label="Switch to text input mode">
                <span class="material-symbols-outlined">keyboard</span>
            </button>
            <button class="icon-button genux-ripple" id="dial-toggle" aria-label="Switch to dial input mode" style="display: none;">
                <span class="material-symbols-outlined">schedule</span>
            </button>
        </div>
        <div class="picker-actions">
            <button class="button text genux-ripple" id="picker-cancel"><span>Cancel</span></button>
            <button class="button text genux-ripple" id="picker-ok"><span>OK</span></button>
        </div>
    </div>

</div>
```

```js
document.addEventListener('DOMContentLoaded', () => {
    
    // --- DOM Elements ---
    const triggerField = document.getElementById('time-trigger-field');
    const triggerInput = document.getElementById('time-input');
    const picker = document.getElementById('time-picker');
    const scrim = document.getElementById('picker-scrim');
    
    // Ensure all elements exist before adding listeners
    if (!triggerField || !picker || !scrim) {
        console.error("Time Picker critical elements not found.");
        return;
    }

    const hourInputContainer = document.getElementById('hour-input-container');
    const minuteInputContainer = document.getElementById('minute-input-container');
    const hourInput = document.getElementById('hour-input');
    const minuteInput = document.getElementById('minute-input');
    
    const periodSelector = document.getElementById('period-selector');
    const amToggle = periodSelector ? periodSelector.querySelector('[data-period="AM"]') : null;
    const pmToggle = periodSelector ? periodSelector.querySelector('[data-period="PM"]') : null;
    
    const dialView = document.getElementById('dial-view');
    const inputView = document.getElementById('input-view');
    const clockNumbersContainer = document.getElementById('clock-numbers');
    const clockSelector = document.getElementById('clock-selector');
    
    const keyboardToggle = document.getElementById('keyboard-toggle');
    const dialToggle = document.getElementById('dial-toggle');
    
    const cancelButton = document.getElementById('picker-cancel');
    const okButton = document.getElementById('picker-ok');

    // --- State ---
    let state = {
        hour: 10,       // 1-12
        minute: 30,     // 0-59
        period: 'AM',   // 'AM' or 'PM'
        view: 'hour'    // 'hour' or 'minute'
    };

    // --- Dialog Logic ---
    function openPicker() {
        picker.classList.add('visible');
        scrim.classList.add('visible');
        triggerField.classList.add('focused');
        
        // Set initial state from field or default
        const time = triggerInput.value.split(':');
        const period = time[1] ? time[1].split(' ')[1] : 'AM';
        const hour = time[0] ? parseInt(time[0]) : 10;
        const minute = time[1] ? parseInt(time[1].split(' ')[0]) : 30;

        state = {
            hour: hour % 12 === 0 ? 12 : hour % 12,
            minute: minute,
            period: period || 'AM',
            view: 'hour'
        };
        
        updateUI();
    }

    function closePicker(commit = false) {
        picker.classList.remove('visible');
        scrim.classList.remove('visible');
        triggerField.classList.remove('focused');

        if (commit) {
            const hour24 = state.period === 'PM' && state.hour !== 12 ? state.hour + 12 : (state.period === 'AM' && state.hour === 12 ? 0 : state.hour);
            const formattedHour = String(state.hour).padStart(2, '0'); // Display 12-hour format
            const formattedMinute = String(state.minute).padStart(2, '0');
            
            triggerInput.value = `${formattedHour}:${formattedMinute} ${state.period}`;
            triggerField.classList.add('has-value');
        } else {
            if(triggerInput.value) {
                    triggerField.classList.add('has-value');
            }
        }
    }

    // --- UI Update Logic ---
    function updateUI() {
        if (!hourInput || !minuteInput || !hourInputContainer || !minuteInputContainer || !amToggle || !pmToggle) {
             console.error("Time Picker UI elements missing.");
             return;
        }

        // Update text inputs
        hourInput.value = String(state.hour).padStart(2, '0');
        minuteInput.value = String(state.minute).padStart(2, '0');

        // Update input active state
        hourInputContainer.classList.toggle('active', state.view === 'hour');
        minuteInputContainer.classList.toggle('active', state.view === 'minute');
        
        // Update period selector
        amToggle.classList.toggle('active', state.period === 'AM');
        pmToggle.classList.toggle('active', state.period === 'PM');
        
        // Re-render the dial
        renderDial();
    }
    
    // --- Dial Rendering ---
    function renderDial() {
        if (!clockNumbersContainer || !dialView) return;

        clockNumbersContainer.innerHTML = '';
        const dialSize = 256;
        const center = dialSize / 2;
        const handleSize = 48;
        const numberSize = 32;
        const radius = (dialSize / 2) - (handleSize / 2) - 4; // 128 - 24 - 4 = 100px
        
        let values = [];
        let step;
        let selectedValue;

        if (state.view === 'hour') {
            values = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            step = 30; // 360 / 12
            selectedValue = state.hour;
        } else {
            values = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
            step = 6; // 360 / 60 (but we only show 12 numbers)
            selectedValue = state.minute;
        }

        values.forEach((value, i) => {
            const angle = (i * (state.view === 'hour' ? step : step * 5)) - 90; // -90 to start at top
            const rad = angle * (Math.PI / 180);
            const x = center + radius * Math.cos(rad);
            const y = center + radius * Math.sin(rad);

            const numEl = document.createElement('div');
            numEl.className = 'clock-number';
            numEl.textContent = state.view === 'hour' ? value : String(value).padStart(2, '0');
            
            let dataValue = value;
            if(state.view === 'hour' && dataValue === 12) dataValue = 0; // 12 o'clock is 0
            
            numEl.dataset.value = dataValue;

            let isSelected = false;
            if(state.view === 'hour') {
                isSelected = (value === state.hour);
            } else {
                isSelected = (value === state.minute);
            }
            
            if (isSelected) {
                numEl.classList.add('selected');
                numEl.style.left = `${x - (handleSize / 2)}px`;
                numEl.style.top = `${y - (handleSize / 2)}px`;
            } else {
                numEl.style.left = `${x - (numberSize / 2)}px`;
                numEl.style.top = `${y - (numberSize /2)}px`;
            }
            
            clockNumbersContainer.appendChild(numEl);
        });
        
        // Update clock hand
        if(clockSelector) {
            let activeValue = (state.view === 'hour') ? (state.hour % 12) : state.minute;
            let totalUnits = (state.view === 'hour') ? 12 : 60;
            let handAngle = (activeValue / totalUnits) * 360 - 90;
            clockSelector.style.transform = `rotate(${handAngle}deg)`;
        }
    }
    
    // --- Event Listeners ---
    triggerField.addEventListener('click', openPicker);
    scrim.addEventListener('click', () => closePicker(false));
    
    if (cancelButton) cancelButton.addEventListener('click', () => closePicker(false));
    if (okButton) okButton.addEventListener('click', () => closePicker(true));

    if (hourInputContainer) hourInputContainer.addEventListener('click', () => {
        state.view = 'hour';
        updateUI();
    });
    if (minuteInputContainer) minuteInputContainer.addEventListener('click', () => {
        state.view = 'minute';
        updateUI();
    });
    
    if (periodSelector) periodSelector.addEventListener('click', (e) => {
        const target = e.target.closest('.period-toggle');
        if (target) {
            state.period = target.dataset.period;
            updateUI();
        }
    });
    
    // View toggles
    if (keyboardToggle) keyboardToggle.addEventListener('click', () => {
        if(dialView) dialView.style.display = 'none';
        if(inputView) inputView.style.display = 'block';
        keyboardToggle.style.display = 'none';
        if(dialToggle) dialToggle.style.display = 'inline-flex';
    });
    
    if (dialToggle) dialToggle.addEventListener('click', () => {
        if(dialView) dialView.style.display = 'block';
        if(inputView) inputView.style.display = 'none';
        if(keyboardToggle) keyboardToggle.style.display = 'inline-flex';
        dialToggle.style.display = 'none';
    });

    // Dial click logic
    if (dialView) dialView.addEventListener('click', (e) => {
        const rect = dialView.getBoundingClientRect();
        const x = e.clientX - rect.left - (dialView.clientWidth / 2);
        const y = e.clientY - rect.top - (dialView.clientHeight / 2);
        
        let angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
        if (angle < 0) angle += 360;

        if (state.view === 'hour') {
            let hour = Math.round(angle / 30);
            if (hour === 0) hour = 12; // 12 o'clock
            state.hour = hour;
            state.view = 'minute'; // Auto-switch to minute view
        } else {
            let minute = Math.round(angle / 6);
            if (minute === 60) minute = 0;
            state.minute = minute;
        }
        updateUI();
    });

    // --- Ripple Effect Logic ---
    document.addEventListener('click', function (e) {
        const target = e.target.closest('.genux-ripple');
        if (!target) return;

        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;
        const rect = target.getBoundingClientRect();

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - rect.left - radius}px`;
        circle.style.top = `${e.clientY - rect.top - radius}px`;
        circle.classList.add('ripple-effect');

        const existingRipple = target.querySelector('.ripple-effect');
        if (existingRipple) existingRipple.remove();
        
        target.appendChild(circle);
        circle.addEventListener('animationend', () => circle.remove(), { once: true });
    });

});
```

---

## Toolbar Component

Toolbars serve as containers for grouping actions and providing context, distinguishing them from Top App Bars which primarily manage screen identity and navigation. They can appear in various screen locations and configurations, either docked or floating. Toolbars are designed to house a range of interactive elements, including buttons (`md.comp.filled-button`, `md.comp.text-button`), icon buttons (`md.comp.icon-button`), and potentially text fields or chips, depending on the context. They can also be paired with Floating Action Buttons (FABs) for emphasizing specific actions. Toolbars support both standard (surface-based) and vibrant (primary/secondary/tertiary container-based) color variants to convey different levels of emphasis.

**LLM Critical Instructions for Accurate Component Building:**

* **Exclusivity with Navigation Bar**: Crucially, a Toolbar should **never** be displayed simultaneously with a Navigation Bar (`md.comp.navigation-bar`). On primary pages, show the Navigation Bar; on subsequent pages with contextual actions, display Toolbars.
* **Container Shape Integrity**: For **Docked Toolbars**, **avoid applying rounded corners** to the container. This can incorrectly imply that the container expands or changes upon interaction. Docked toolbars should always have straight corners. For **Floating Toolbars**, **avoid using square icon buttons** if the toolbar container itself is fully rounded, as this creates a visual conflict. Square buttons are acceptable in docked toolbars.
* **Emphasis Hierarchy**: Emphasize only **one action at a time** within a toolbar. Do not emphasize multiple buttons with bold, primary colors, such as a button and FAB together. Use different icon button color styles (filled, tonal, standard), customize color roles, or use wide/narrow icon buttons to add emphasis.
* **Content Density**: Be cautious of including too many controls, as this can be overwhelming for users. Choose the most essential actions to display by default. If more actions are needed in a floating toolbar, put them in an overflow menu in the trailing slot. Avoid using multiple toolbars in compact windows due to limited screen space.
* **Element Accessibility**: All interactive elements within the toolbar require a **minimum 48x48dp target area** to be accessible.
* **Referencing Component Definitions**: Interactions and disabled states for elements *within* the toolbar (buttons, icons, text fields, chips) are primarily handled by their individual component definitions (e.g., `md.comp.icon-button`, `md.comp.filled-button`, `md.comp.text-button`). The LLM should refer to those specific component documentations for detailed property values.

---

### Types of Toolbars

Material Design defines two primary types of toolbars:

#### 1. Docked Toolbar (`md.comp.toolbar.docked`)

A Docked Toolbar is typically anchored to the bottom edge of the screen, providing persistent access to common actions. This type often functionally replaces the deprecated Bottom App Bar, offering a shorter and more flexible design. It spans the full width of the window and is best used for global actions that remain the same across multiple pages. The icons within the docked toolbar **must be equally spaced apart** within the toolbar.

**Behavior**
* Docked toolbars can either remain on the screen during scroll, or animate off-screen.
* In compact window sizes, elements within the toolbar should be evenly spaced.
* In medium window sizes and larger, padding between controls should be adjusted to create a comfortable layout. This can be achieved by centering all elements or centering a key action while aligning other elements to the edges.

#### 2. Floating Toolbar (`md.comp.toolbar.floating`)

A Floating Toolbar is a versatile variant that "floats" above the body content, often used contextually within a screen section rather than being edge-docked. It's best used for contextual actions relevant to the body content or the specific page. This type offers more versatility, supports a greater number of actions, and provides more variety in placement compared to the docked toolbar. If the varaint shown includes the FAB, it must follow the FAB styling exactly without any deviation. 

**Behavior**
* Floating toolbars can remain on the screen, animate off-screen, or collapse into a single, high-emphasis action on scroll.
* The container should only be as wide as needed to hold the items inside, before hitting the 16dp margin.
* As the window size expands, more actions can be revealed. The width can also be capped to keep it smaller and hide more elements.
* Floating toolbars can be horizontal or vertical.
    * Horizontal toolbars should have a minimum 16dp margin from the edge of the window.
    * Vertical toolbars should have a minimum 24dp margin.
    * Vertical toolbars are not recommended for compact windows, as they can take up significant screen area and cover important content. They are best used when the screen is simple or the toolbar has few controls.
    * When a navigation rail is visible, the floating toolbar should be vertical and positioned on the opposite edge of the window for balance and ease of access.

---

### Accessibility Guidelines

* Users should be able to navigate and activate any actions in the toolbar using assistive technology.
* Keyboard navigation is crucial: Use Tab or Arrows to navigate between interactive elements, and Space or Enter to activate the focused element.
* Initial focus should land on the first interactive element.
* Maintain access to toolbar controls when the content is scrolled or collapsed.
* On the web, the toolbar container should have the `toolbar` role. On mobile, it can be a generic container.
* All actions inside the toolbar should follow their respective accessibility guidelines.

---

### Interaction & Style

The toolbar container itself has no interactions by default; all interactions occur with the elements placed inside.

* **Touch**: When tapping on an icon button in the toolbar, a touch ripple appears, indicating interaction feedback.
* **Cursor**: When hovered, the hover state provides a visual cue to the user that the element is interactive. When clicked (in both active and inactive states), a ripple appears, showing the user feedback.
* **Elevation Changes**: Hovering or pressing the toolbar container itself might slightly increase its elevation (e.g., to `level2` or `level3`) or apply a state layer.

---

### Pairing with Floating Action Buttons (FABs)

A FAB can be placed next to a floating toolbar to present one high-priority action alongside a unified set of toolbar actions. The FAB should be used for the highest-priority action in the view or to complement existing controls. Floating toolbars can be customized to collapse into a FAB or key action on scroll.

### Toolbar Component - Tokens

---

### Color - Standard

**Token Set**: `md.comp.toolbar.standard`

#### Enabled
* `container.color`: `md.comp.toolbar.standard.container.color` = `md.sys.color.surface-container`
* `button.container.color`: `md.comp.toolbar.standard.button.container.color` = `md.sys.color.surface-container`
* `selected.button.container.color`: `md.comp.toolbar.standard.selected.button.container.color` = `md.sys.color.secondary-container`
* `icon.color`: `md.comp.toolbar.standard.icon.color` = `md.sys.color.on-surface-variant`
* `selected.icon.color`: `md.comp.toolbar.standard.selected.icon.color` = `md.sys.color.on-secondary-container`
* `label-text.color`: `md.comp.toolbar.standard.label-text.color` = `md.sys.color.on-surface-variant`
* `selected.label-text.color`: `md.comp.toolbar.standard.selected.label-text.color` = `md.sys.color.on-secondary-container`

#### Disabled
* `icon.color`: `md.comp.toolbar.standard.disabled.icon.color` = `md.sys.color.on-surface`
* `icon.opacity`: `md.comp.toolbar.standard.disabled.icon.opacity` = `0.38`
* `label-text.color`: `md.comp.toolbar.standard.disabled.label-text.color` = `md.sys.color.on-surface`
* `label-text.opacity`: `md.comp.toolbar.standard.disabled.label-text.opacity` = `0.38`

#### Hovered
* `state-layer.color`: `md.comp.toolbar.standard.hovered.state-layer.color` = `md.sys.color.on-surface-variant`
* `selected.state-layer.color`: `md.comp.toolbar.standard.selected.hovered.state-layer.color` = `md.sys.color.on-secondary-container`
* `state-layer.opacity`: `md.comp.toolbar.standard.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* `icon.color`: `md.comp.toolbar.standard.hovered.icon.color` = `md.sys.color.on-surface-variant`
* `selected.icon.color`: `md.comp.toolbar.standard.selected.hovered.icon.color` = `md.sys.color.on-secondary-container`
* `label-text.color`: `md.comp.toolbar.standard.hovered.label-text.color` = `md.sys.color.on-surface-variant`
* `selected.label-text.color`: `md.comp.toolbar.standard.selected.hovered.label-text.color` = `md.sys.color.on-secondary-container`

#### Focused
* `state-layer.color`: `md.comp.toolbar.standard.focused.state-layer.color` = `md.sys.color.on-surface-variant`
* `selected.state-layer.color`: `md.comp.toolbar.standard.selected.focused.state-layer.color` = `md.sys.color.on-secondary-container`
* `state-layer.opacity`: `md.comp.toolbar.standard.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* `icon.color`: `md.comp.toolbar.standard.focused.icon.color` = `md.sys.color.on-surface-variant`
* `selected.icon.color`: `md.comp.toolbar.standard.selected.focused.icon.color` = `md.sys.color.on-secondary-container`
* `label-text.color`: `md.comp.toolbar.standard.focused.label-text.color` = `md.sys.color.on-surface-variant`
* `selected.label-text.color`: `md.comp.toolbar.standard.selected.focused.label-text.color` = `md.sys.color.on-secondary-container`

#### Pressed
* `state-layer.color`: `md.comp.toolbar.standard.pressed.state-layer.color` = `md.sys.color.on-surface-variant`
* `selected.state-layer.color`: `md.comp.toolbar.standard.selected.pressed.state-layer.color` = `md.sys.color.on-secondary-container`
* `state-layer.opacity`: `md.comp.toolbar.standard.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
* `icon.color`: `md.comp.toolbar.standard.pressed.icon.color` = `md.sys.color.on-surface-variant`
* `selected.icon.color`: `md.comp.toolbar.standard.selected.pressed.icon.color` = `md.sys.color.on-secondary-container`
* `label-text.color`: `md.comp.toolbar.standard.pressed.label-text.color` = `md.sys.color.on-surface-variant`
* `selected.label-text.color`: `md.comp.toolbar.standard.selected.pressed.label-text.color` = `md.sys.color.on-secondary-container`

---

### Color - Vibrant

**Token Set**: `md.comp.toolbar.vibrant`

#### Enabled
* `container.color`: `md.comp.toolbar.vibrant.container.color` = `md.sys.color.primary-container`
* `button.container.color`: `md.comp.toolbar.vibrant.button.container.color` = `md.sys.color.primary-container`
* `selected.button.container.color`: `md.comp.toolbar.vibrant.selected.button.container.color` = `md.sys.color.surface-container`
* `icon.color`: `md.comp.toolbar.vibrant.icon.color` = `md.sys.color.on-primary-container`
* `selected.icon.color`: `md.comp.toolbar.vibrant.selected.icon.color` = `md.sys.color.on-surface`
* `label-text.color`: `md.comp.toolbar.vibrant.label-text.color` = `md.sys.color.on-primary-container`
* `selected.label-text.color`: `md.comp.toolbar.vibrant.selected.label-text.color` = `md.sys.color.on-surface`

#### Disabled
* `icon.color`: `md.comp.toolbar.vibrant.disabled.icon.color` = `md.sys.color.on-surface`
* `icon.opacity`: `md.comp.toolbar.vibrant.disabled.icon.opacity` = `0.38`
* `label-text.color`: `md.comp.toolbar.vibrant.disabled.label-text.color` = `md.sys.color.on-surface`
* `label-text.opacity`: `md.comp.toolbar.vibrant.disabled.label-text.opacity` = `0.38`

#### Hovered
* `state-layer.color`: `md.comp.toolbar.vibrant.hovered.state-layer.color` = `md.sys.color.on-primary-container`
* `selected.state-layer.color`: `md.comp.toolbar.vibrant.selected.hovered.state-layer.color` = `md.sys.color.on-surface`
* `state-layer.opacity`: `md.comp.toolbar.vibrant.hovered.state-layer.opacity` = `md.sys.state.hover.state-layer-opacity`
* `icon.color`: `md.comp.toolbar.vibrant.hovered.icon.color` = `md.sys.color.on-primary-container`
* `selected.icon.color`: `md.comp.toolbar.vibrant.selected.hovered.icon.color` = `md.sys.color.on-surface`
* `label-text.color`: `md.comp.toolbar.vibrant.hovered.label-text.color` = `md.sys.color.on-primary-container`
* `selected.label-text.color`: `md.comp.toolbar.vibrant.selected.hovered.label-text.color` = `md.sys.color.on-surface`

#### Focused
* `state-layer.color`: `md.comp.toolbar.vibrant.focused.state-layer.color` = `md.sys.color.on-primary-container`
* `selected.state-layer.color`: `md.comp.toolbar.vibrant.selected.focused.state-layer.color` = `md.sys.color.on-surface`
* `state-layer.opacity`: `md.comp.toolbar.vibrant.focused.state-layer.opacity` = `md.sys.state.focus.state-layer-opacity`
* `icon.color`: `md.comp.toolbar.vibrant.focused.icon.color` = `md.sys.color.on-primary-container`
* `selected.icon.color`: `md.comp.toolbar.vibrant.selected.focused.icon.color` = `md.sys.color.on-surface`
* `label-text.color`: `md.comp.toolbar.vibrant.focused.label-text.color` = `md.sys.color.on-primary-container`
* `selected.label-text.color`: `md.comp.toolbar.vibrant.selected.focused.label-text.color` = `md.sys.color.on-surface`

#### Pressed
* `state-layer.color`: `md.comp.toolbar.vibrant.pressed.state-layer.color` = `md.sys.color.on-primary-container`
* `selected.state-layer.color`: `md.comp.toolbar.vibrant.selected.pressed.state-layer.color` = `md.sys.color.on-surface`
* `state-layer.opacity`: `md.comp.toolbar.vibrant.pressed.state-layer.opacity` = `md.sys.state.pressed.state-layer-opacity`
* `icon.color`: `md.comp.toolbar.vibrant.pressed.icon.color` = `md.sys.color.on-primary-container`
* `selected.icon.color`: `md.comp.toolbar.vibrant.selected.pressed.icon.color` = `md.sys.color.on-surface`
* `label-text.color`: `md.comp.toolbar.vibrant.pressed.label-text.color` = `md.sys.color.on-primary-container`
* `selected.label-text.color`: `md.comp.toolbar.vibrant.selected.pressed.label-text.color` = `md.sys.color.on-surface`

---

### Docked

**Token Set**: `md.comp.toolbar.docked`

#### Size
* `container.height`: `md.comp.toolbar.docked.container.height` = `64dp`
* `container.leading-space`: `md.comp.toolbar.docked.container.leading-space` = `16dp`
* `container.trailing-space`: `md.comp.toolbar.docked.container.trailing-space` = `16dp`
* `container.max-spacing`: `md.comp.toolbar.docked.container.max-spacing` = `32dp`
* `container.min-spacing`: `md.comp.toolbar.docked.container.min-spacing` = `4dp`

#### Shape
* `container.shape`: `md.comp.toolbar.docked.container.shape` = `md.sys.shape.corner.none`

---

### Floating

**Token Set**: `md.comp.toolbar.floating`

#### Size
* `horizontal.container.height`: `md.comp.toolbar.floating.horizontal.container.height` = `64dp`
* `vertical.container.width`: `md.comp.toolbar.floating.vertical.container.width` = `64dp`
* `container.leading-space`: `md.comp.toolbar.floating.container.leading-space` = `8dp`
* `container.trailing-space`: `md.comp.toolbar.floating.container.trailing-space` = `8dp`
* `horizontal.container.external-space`: `md.comp.toolbar.floating.horizontal.container.external-space` = `16dp`
* `vertical.container.external-space`: `md.comp.toolbar.floating.vertical.container.external-space` = `24dp`
* `container.between-space`: `md.comp.toolbar.floating.container.between-space` = `4dp`

#### Shape
* `container.shape`: `md.comp.toolbar.floating.container.shape` = `md.sys.shape.corner.full`

#### Elevation
* `container.elevation`: `md.comp.toolbar.floating.container.elevation` = `md.sys.elevation.level3`

---

### With FAB (Floating Action Button)

**Token Set**: `md.comp.toolbar.floating.fab`

#### Expanded / Locked up
* `container.height`: `md.comp.toolbar.floating.fab.container.height` = `56dp`
* `container.width`: `md.comp.toolbar.floating.fab.container.width` = `56dp`
* `icon.size`: `md.comp.toolbar.floating.fab.icon.size` = `24dp`
* `container.shape`: `md.comp.toolbar.floating.fab.container.shape` = `md.sys.shape.corner.large`
* `container.elevation`: `md.comp.toolbar.floating.fab.container.elevation` = `md.sys.elevation.level1`

#### Collapsed
* `medium.container.height`: `md.comp.toolbar.floating.fab.medium.container.height` = `80dp`
* `medium.container.width`: `md.comp.toolbar.floating.fab.medium.container.width` = `80dp`
* `medium.icon.size`: `md.comp.toolbar.floating.fab.medium.icon.size` = `28dp`
* `medium.container.shape`: `md.comp.toolbar.floating.fab.medium.container.shape` = `md.sys.shape.corner.large-increased`
* `medium.container.elevation`: `md.comp.toolbar.floating.fab.medium.container.elevation` = `md.sys.elevation.level2`

#### Color
* **Standard**
    * `container.color`: `md.comp.toolbar.floating.fab.standard.container.color` = `md.sys.color.secondary-container`
    * `icon.color`: `md.comp.toolbar.floating.fab.standard.icon.color` = `md.sys.color.on-secondary-container`
* **Vibrant**
    * `container.color`: `md.comp.toolbar.floating.fab.vibrant.container.color` = `md.sys.color.tertiary-container`
    * `icon.color`: `md.comp.toolbar.floating.fab.vibrant.icon.color` = `md.sys.color.on-tertiary-container`

#### Spacing
* `between-space`: `md.comp.toolbar.floating.fab.between-space` = `8dp`

---

### Toolbar Component - Code Samples & Implementation

```css
/* ------------------------ */
/* --- Docked Toolbar --- */
/* ------------------------ */
.toolbar.docked {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 16px;
  justify-content: space-between;
  gap: 4px;
  border-radius: 0;
  box-shadow: var(--md-sys-elevation-level2-shadow);
  background-color: var(--md-sys-color-surface-container);
}

.toolbar.docked .button.icon-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: transparent;
}

.toolbar.docked .button.icon-button .material-symbols-outlined {
  color: var(--md-sys-color-on-surface-variant);
}

.toolbar.docked .button.icon-button.active {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}

/* -------------------------- */
/* --- Floating Toolbar --- */
/* -------------------------- */
.toolbar-wrapper.floating {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.toolbar.floating {
  height: 56px;
  padding: 0 8px;
  gap: 4px;
  border-radius: 9999px;
  box-shadow: var(--md-sys-elevation-level3-shadow);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--md-sys-color-surface-container);
}

.toolbar.floating .button.icon-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: transparent;
}

.toolbar.floating .button.icon-button .material-symbols-outlined {
  color: var(--md-sys-color-on-surface-variant);
}

.toolbar.floating .button.icon-button.active {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}

/* ----------------------------------- */
/* --- Vertical Floating Toolbar --- */
/* ----------------------------------- */
.toolbar-wrapper.vertical {
  bottom: auto;
  left: auto;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
  gap: 16px;
}

.toolbar.vertical {
  height: auto;
  width: 56px;
  padding: 8px 0;
  flex-direction: column;
}

.toolbar.vertical .button.icon-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: transparent;
}

.toolbar.vertical .button.icon-button .material-symbols-outlined {
  color: var(--md-sys-color-on-surface-variant);
}

.toolbar.vertical .button.icon-button.active {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}
```

```html
<div class="toolbar docked standard">
  <button class="button icon-button genux-ripple" aria-label="Home">
    <span class="material-symbols-outlined">home</span>
  </button>
  <button class="button icon-button genux-ripple active" aria-label="Favorites">
    <span class="material-symbols-outlined">favorite</span>
  </button>
  <button class="button fab genux-ripple" aria-label="Add new item">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">add</span>
  </button>
  <button class="button icon-button genux-ripple" aria-label="Search">
    <span class="material-symbols-outlined">search</span>
  </button>
  <button class="button icon-button genux-ripple" aria-label="Settings">
    <span class="material-symbols-outlined">settings</span>
  </button>
</div>

<div class="toolbar-wrapper floating">
  <div class="toolbar floating standard">
    <button class="button icon-button genux-ripple active" aria-label="Edit">
      <span class="material-symbols-outlined">edit</span>
    </button>
    <button class="button icon-button genux-ripple" aria-label="Attach file">
      <span class="material-symbols-outlined">attach_file</span>
    </button>
    <button class="button text genux-ripple">
      <span>Add reminder</span>
    </button>
  </div>
  <button class="button fab genux-ripple" aria-label="Save">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">save</span>
  </button>
</div>

<div class="toolbar-wrapper floating vertical">
  <div class="toolbar floating standard vertical">
    <button class="button icon-button genux-ripple active" aria-label="Edit">
      <span class="material-symbols-outlined">edit</span>
    </button>
    <button class="button icon-button genux-ripple" aria-label="Attach file">
      <span class="material-symbols-outlined">attach_file</span>
    </button>
    <button class="button icon-button genux-ripple" aria-label="Add reminder">
      <span class="material-symbols-outlined">event</span>
    </button>
  </div>
</div>
```

---

## Tooltip Component

*   Tooltips display brief labels or messages.
*   Use tooltips to add additional context to a button or other UI element.
*   They provide additional context for a UI element without being as interruptive as dialogs.

There are two types of tooltips:

1.  **Plain tooltips**: Briefly describe a UI element. They're best used for labelling UI elements with no text, like icon-only buttons and fields.
2.  **Rich tooltips**: Provide additional context about a UI element. They can optionally contain a subhead, buttons, and hyperlinks. Rich tooltips are best used for longer text like definitions or explanations.

### Tooltip Component - Tokens

---

#### Plain Tooltip

**Token Set**: `md.comp.plain-tooltip`

##### Container
* `color`: `md.comp.plain-tooltip.container.color` = `md.sys.color.inverse-surface`
* `shape`: `md.comp.plain-tooltip.container.shape` = `md.sys.shape.corner.extra-small`

##### Supporting text
* `color`: `md.comp.plain-tooltip.supporting-text.color` = `md.sys.color.inverse-on-surface`
* `font`: `md.comp.plain-tooltip.supporting-text.font` = `md.sys.typescale.body-small.font`
* `line height`: `md.comp.plain-tooltip.supporting-text.line-height` = `md.sys.typescale.body-small.line-height`
* `size`: `md.comp.plain-tooltip.supporting-text.size` = `md.sys.typescale.body-small.size`
* `weight`: `md.comp.plain-tooltip.supporting-text.weight` = `md.sys.typescale.body-small.weight`
* `tracking`: `md.comp.plain-tooltip.supporting-text.tracking` = `md.sys.typescale.body-small.tracking`

---

#### Rich Tooltip

**Token Set**: `md.comp.rich-tooltip`

#### Rich Tooltip Tokens

##### Container
* `color`: `md.comp.rich-tooltip.container.color` = `md.sys.color.surface-container`
* `elevation`: `md.comp.rich-tooltip.container.elevation` = `md.sys.elevation.level2`
* `shadow`: `md.comp.rich-tooltip.container.shadow-color` = `md.sys.color.shadow`
* `shape`: `md.comp.rich-tooltip.container.shape` = `md.sys.shape.corner.medium`

##### Subhead
* `font`: `md.comp.rich-tooltip.subhead.font` = `md.sys.typescale.title-small.font`
* `line height`: `md.comp.rich-tooltip.subhead.line-height` = `md.sys.typescale.title-small.line-height`
* `size`: `md.comp.rich-tooltip.subhead.size` = `md.sys.typescale.title-small.size`
* `weight`: `md.comp.rich-tooltip.subhead.weight` = `md.sys.typescale.title-small.weight`
* `tracking`: `md.comp.rich-tooltip.subhead.tracking` = `md.sys.typescale.title-small.tracking`
* `color`: `md.comp.rich-tooltip.subhead.color` = `md.sys.color.on-surface-variant`

##### Supporting text
* `color`: `md.comp.rich-tooltip.supporting-text.color` = `md.sys.color.on-surface-variant`
* `font`: `md.comp.rich-tooltip.supporting-text.font` = `md.sys.typescale.body-medium.font`
* `line height`: `md.comp.rich-tooltip.supporting-text.line-height` = `md.sys.typescale.body-medium.line-height`
* `size`: `md.comp.rich-tooltip.supporting-text.size` = `md.sys.typescale.body-medium.size`
* `weight`: `md.comp.rich-tooltip.supporting-text.weight` = `md.sys.typescale.body-medium.weight`
* `tracking`: `md.comp.rich-tooltip.supporting-text.tracking` = `md.sys.typescale.body-medium.tracking`

---

### Tooltip Component - Code Samples & Implementation

This section provides a complete, self-contained implementation for both **Plain** and **Rich Tooltips**. It includes the necessary HTML structure, CSS styling derived from the design tokens, and a robust JavaScript solution for handling positioning and user interactions.

-----

#### 1. HTML Structure

Tooltips are attached to a trigger element using `data-*` attributes. For accessibility, it's crucial to link the trigger and the tooltip using `aria-describedby`.

  * **For Plain Tooltips**: Use the `data-tooltip-text` attribute directly on the trigger element. The JavaScript will create the tooltip element from this text.
  * **For Rich Tooltips**: Use `data-tooltip-target` on the trigger, pointing to the `id` of a hidden `<div>` that contains the rich content. This keeps complex HTML out of data attributes.

<!-- end list -->

```html
<button class="icon-button genux-ripple" data-tooltip-text="Add to favorites">
    <span class="material-symbols-outlined">favorite</span>
</button>

<button class="button text genux-ripple" data-tooltip-target="rich-tooltip-1">
    <span>More Info</span>
</button>

<div id="rich-tooltip-1" class="tooltip-content-source">
    <div class="tooltip-title">Storage Details</div>
    <div class="tooltip-body">
        Additional storage is available. Visit your account to learn more.
    </div>
    <div class="tooltip-actions">
        <button class="button text genux-ripple"><span>Learn More</span></button>
    </div>
</div>
```

-----

#### 2. CSS Implementation

This CSS styles both tooltip variants according to the provided tokens. It handles the container appearance, typography, and the fade/scale animation for a smooth appearance.

```css
/*
 * Material Design Tooltip Component Styles
 */

/* Base container for all tooltips */
.tooltip {
    position: absolute;
    padding: 6px 8px;
    z-index: 1000;
    pointer-events: none; /* Tooltips are not interactive themselves */
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
}
.tooltip.visible {
    opacity: 1;
    transform: scale(1);
}

/* --- Plain Tooltip Variant --- */
.plain-tooltip {
    height: 32px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: var(--md-sys-color-inverse-surface);
    color: var(--md-sys-color-inverse-on-surface);
    border-radius: var(--md-sys-shape-corner-extra-small);
    box-shadow: var(--md-sys-elevation-level2-shadow);
    font-family: var(--md-sys-typescale-body-medium-font-family);
    font-size: var(--md-sys-typescale-body-medium-font-size);
    font-weight: var(--md-sys-typescale-body-medium-font-weight);
    white-space: nowrap;
}

/* --- Rich Tooltip Variant --- */
.rich-tooltip {
    width: 280px;
    padding: 16px;
    background-color: var(--md-sys-color-surface-container);
    border-radius: var(--md-sys-shape-corner-medium);
    box-shadow: var(--md-sys-elevation-level2-shadow);
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.rich-tooltip .tooltip-title {
    color: var(--md-sys-color-on-surface);
    font-family: var(--md-sys-typescale-title-small-font-family);
    font-size: var(--md-sys-typescale-title-small-font-size);
    font-weight: var(--md-sys-typescale-title-small-font-weight);
}
.rich-tooltip .tooltip-body {
    color: var(--md-sys-color-on-surface-variant);
    font-family: var(--md-sys-typescale-body-medium-font-family);
    font-size: var(--md-sys-typescale-body-medium-font-size);
    font-weight: var(--md-sys-typescale-body-medium-font-weight);
}
.rich-tooltip .tooltip-actions {
    margin-top: 8px;
    text-align: right;
    pointer-events: auto; /* Re-enable pointer events for the actions */
}

/* Helper to hide the rich tooltip content source */
.tooltip-content-source {
    display: none;
}
```

-----

#### 3. JavaScript Implementation

This script creates a single tooltip element that is reused for all triggers on the page (a "singleton" pattern). It listens for `mouseover` and `focus` events to show the tooltip, and automatically calculates the best position to avoid clipping at the edge of the viewport.

```javascript
/*
 * Material Design Tooltip Singleton Manager
 */
document.addEventListener('DOMContentLoaded', () => {
    let tooltipElement = null;
    let currentTrigger = null;

    // Create the singleton tooltip element
    function createTooltipElement() {
        if (tooltipElement) return;
        tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');
        document.body.appendChild(tooltipElement);
    }

    // Position the tooltip relative to the trigger element
    function positionTooltip(trigger) {
        const triggerRect = trigger.getBoundingClientRect();
        const tooltipRect = tooltipElement.getBoundingClientRect();
        const spacing = 8; // 8px gap between trigger and tooltip

        let top = triggerRect.top - tooltipRect.height - spacing;
        let left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);

        // Flip to bottom if it clips the top of the viewport
        if (top < 0) {
            top = triggerRect.bottom + spacing;
        }

        // Adjust left position to avoid clipping the sides
        if (left < 0) {
            left = spacing;
        } else if (left + tooltipRect.width > window.innerWidth) {
            left = window.innerWidth - tooltipRect.width - spacing;
        }

        tooltipElement.style.top = `${top + window.scrollY}px`;
        tooltipElement.style.left = `${left + window.scrollX}px`;
    }

    // Show the tooltip
    function showTooltip(event) {
        const trigger = event.currentTarget;
        if (trigger === currentTrigger) return;
        
        currentTrigger = trigger;
        createTooltipElement();

        // Handle Plain vs. Rich tooltips
        const plainText = trigger.getAttribute('data-tooltip-text');
        const richTargetId = trigger.getAttribute('data-tooltip-target');

        if (plainText) {
            tooltipElement.className = 'tooltip plain-tooltip';
            tooltipElement.textContent = plainText;
        } else if (richTargetId) {
            const richContentSource = document.getElementById(richTargetId);
            if (richContentSource) {
                tooltipElement.className = 'tooltip rich-tooltip';
                tooltipElement.innerHTML = richContentSource.innerHTML;
            }
        } else {
            return; // No tooltip data found
        }
        
        // Make it visible and position it
        tooltipElement.classList.add('visible');
        trigger.setAttribute('aria-describedby', 'singleton-tooltip');
        tooltipElement.id = 'singleton-tooltip';
        positionTooltip(trigger);
    }

    // Hide the tooltip
    function hideTooltip() {
        if (tooltipElement) {
            tooltipElement.classList.remove('visible');
        }
        if (currentTrigger) {
            currentTrigger.removeAttribute('aria-describedby');
            currentTrigger = null;
        }
    }

    // Use event delegation to attach listeners efficiently
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest('[data-tooltip-text], [data-tooltip-target]')) {
            showTooltip({ currentTarget: e.target.closest('[data-tooltip-text], [data-tooltip-target]') });
        }
    });

    document.body.addEventListener('mouseout', (e) => {
         if (e.target.closest('[data-tooltip-text], [data-tooltip-target]')) {
            hideTooltip();
        }
    });

    document.body.addEventListener('focusin', (e) => {
        if (e.target.closest('[data-tooltip-text], [data-tooltip-target]')) {
            showTooltip({ currentTarget: e.target.closest('[data-tooltip-text], [data-tooltip-target]') });
        }
    });

    document.body.addEventListener('focusout', (e) => {
        if (e.target.closest('[data-tooltip-text], [data-tooltip-target]')) {
            hideTooltip();
        }
    });
});
```

----