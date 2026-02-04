// main.js

document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    const state = {
        activeContext: 'all', // 'all' or journeyIndex (number)
        timeRange: 'all',     // 'all', 'today', 'yesterday', 'week', 'month'
        searchQuery: '',

        // Data
        fullHistory: [],
        journeys: [], // { title, pages: [], relevance, isTopSite }
        isLoadingJourneys: true,
        journeysError: null // { message: string, clickable: boolean }
    };

    // --- DOM Elements ---
    const els = {
        journeysList: document.getElementById('journeys-list'),
        navAllHistory: document.getElementById('nav-all-history'),
        viewTitle: document.getElementById('view-title'),
        searchBar: document.getElementById('search-bar'),
        timeFilter: document.getElementById('time-filter'),
        contentArea: document.getElementById('content-area'),
    };

    // --- Initialization ---
    init();

    async function init() {
        showOnboarding();
        bindEvents();

        // Load initial history
        const historyItems = await searchHistory(90); // Last 90 days
        state.fullHistory = historyItems || [];

        // Initial Render (Library view)
        renderApp();

        // Load Journeys in background
        loadJourneys();
    }


    // --- Bind Events ---
    function bindEvents() {
        // Nav Toggle
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                document.body.classList.toggle('rail-collapsed');
            });
        }

        // Navigation: All History
        els.navAllHistory.addEventListener('click', () => {
            state.activeContext = 'all';
            renderApp();
        });

        // Search
        els.searchBar.addEventListener('input', (e) => {
            state.searchQuery = e.target.value.toLowerCase();
            renderApp();
        });

        // Time Filter
        els.timeFilter.addEventListener('change', (e) => {
            state.timeRange = e.target.value;
            renderApp();
        });
    }

    function searchHistory(daysBack) {
        return new Promise(resolve => {
            const msPerDay = 1000 * 60 * 60 * 24;
            const startTime = new Date().getTime() - (daysBack * msPerDay);
            chrome.history.search({
                text: '',
                maxResults: 5000,
                startTime: startTime
            }, resolve);
        });
    }

    async function loadJourneys() {
        try {
            state.journeysError = null;
            state.isLoadingJourneys = true;
            renderSidebar(); // Show loading state

            // Check Cache
            const cachedData = await chrome.storage.local.get(['cachedJourneys', 'journeysTimestamp']);
            const now = Date.now();
            const oneHour = 60 * 60 * 1000;

            if (cachedData.cachedJourneys && cachedData.journeysTimestamp && (now - cachedData.journeysTimestamp < oneHour)) {
                console.log("Loading journeys from cache...");
                state.journeys = cachedData.cachedJourneys;
                state.isLoadingJourneys = false;
                renderSidebar();
                return;
            }

            // Generate New
            const result = await createJourneysFromHistory(state.fullHistory);
            state.journeys = result.journeys; // Combined Top Sites + Semantic

            // Cache
            await chrome.storage.local.set({
                cachedJourneys: state.journeys,
                journeysTimestamp: Date.now()
            });

        } catch (error) {
            console.error("Failed to load journeys:", error);
            let userMessage = "An unexpected error occurred while generating Journeys.";
            let clickable = false;

            switch (error.message) {
                case "API_KEY_MISSING":
                    userMessage = "⚠️ Gemini API Key not set. Please add it in settings.";
                    clickable = true;
                    break;
                case "API_AUTH_ERROR":
                    userMessage = "⚠️ API Key is invalid or has insufficient permissions.";
                    clickable = true;
                    break;
                case "API_QUOTA_EXCEEDED":
                    userMessage = "🚦 AI service quota reached. Please try again later.";
                    break;
                case "NETWORK_ERROR":
                    userMessage = "📡 Network error. Please check your connection.";
                    break;
                case "API_SERVER_ERROR":
                    userMessage = "⚙️ AI service is temporarily unavailable. Please try again later.";
                    break;
                case "API_EMPTY_RESPONSE":
                case "API_INVALID_FORMAT":
                    userMessage = "🤔 AI service returned an unexpected response. Please try again.";
                    break;
                 case "API_MAX_RETRIES":
                    userMessage = "⏳ AI service is currently busy or unreachable. Please try again later.";
                    break;
                default:
                    if (error.message && error.message.startsWith("API_ERROR")) {
                        userMessage = "🚫 Error communicating with AI service.";
                    }
                    break;
            }
            state.journeysError = { message: userMessage, clickable: clickable };
        } finally {
            state.isLoadingJourneys = false;
            renderSidebar();
        }
    }

    // --- Rendering ---

    function renderApp() {
        renderSidebar(); // Update active states
        renderContent(); // Update main content
    }

    function renderSidebar() {
        // 1. All History Active State (still in rail)
        if (state.activeContext === 'all') {
            els.navAllHistory.classList.add('active');
        } else {
            els.navAllHistory.classList.remove('active');
        }

        // 2. Journeys List (Now in Main Pane)
        const container = els.journeysList;
        container.innerHTML = '';

        if (state.isLoadingJourneys) {
            container.innerHTML = '<div class="loading-state">Analyzing your history to find Journeys...</div>';
            return;
        }

        if (state.journeysError) {
            const isClickable = state.journeysError.clickable;
            container.innerHTML = `
                <div class="loading-state" style="color: var(--md-sys-color-error); ${isClickable ? 'cursor: pointer;' : ''}" id="sidebar-error-msg">
                    ${state.journeysError.message}
                </div>
             `;
            if (isClickable) {
                document.getElementById('sidebar-error-msg').addEventListener('click', () => {
                    chrome.runtime.openOptionsPage();
                });
            }
            return;
        }

        if (!state.journeys || state.journeys.length === 0) {
            container.innerHTML = '<div class="loading-state">No journeys found yet. Browsing more helps!</div>';
            return;
        }

        state.journeys.forEach((journey, index) => {
            const card = document.createElement('div');
            card.className = `journey-card genux-ripple ${state.activeContext === index ? 'active' : ''}`;

            const iconName = journey.isTopSite ? 'star' : 'auto_awesome';

            const itemCount = journey.pages.length;
            const timeLabel = journey.pages.length > 0 ?
                new Date(journey.pages[0].lastVisitTime).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : '';

            card.innerHTML = `
                <div class="card-header">
                    <h3 class="card-title">${journey.title}</h3>
                    <span class="material-symbols-outlined card-icon">${iconName}</span>
                </div>
                
                <div class="card-meta">
                    <span class="metadata-chip chip-frequent">${itemCount} items</span>
                    ${timeLabel ? `<span class="metadata-chip" style="background:var(--md-sys-color-surface-container-high)">${timeLabel}</span>` : ''}
                </div>
                
                <div class="card-stats">
                   ${journey.isTopSite ? 'Top Site' : 'AI curated'}
                </div>
            `;

            card.addEventListener('click', () => {
                state.activeContext = index;
                renderApp();
            });

            container.appendChild(card);
        });
    }

    function renderContent() {
        // 1. Determine Source Data
        let items = [];
        if (state.activeContext === 'all') {
            items = state.fullHistory;
            els.viewTitle.textContent = "All History";
        } else {
            const journey = state.journeys[state.activeContext];
            if (journey) {
                items = journey.pages;
                els.viewTitle.textContent = journey.title;
            } else {
                items = state.fullHistory;
                state.activeContext = 'all';
                els.viewTitle.textContent = "All History";
            }
        }

        // 2. Apply Time Filter
        items = filterHistoryByRange(items, state.timeRange);

        // 3. Apply Search
        if (state.searchQuery) {
            items = items.filter(item =>
                (item.title && item.title.toLowerCase().includes(state.searchQuery)) ||
                item.url.toLowerCase().includes(state.searchQuery)
            );
        }

        // 4. Render Groups (Always Grouped)
        renderHistoryGroups(items);
    }

    function filterHistoryByRange(items, range) {
        const now = new Date();
        const start = new Date();

        if (range === 'today') {
            start.setHours(0, 0, 0, 0);
        } else if (range === 'yesterday') {
            start.setDate(now.getDate() - 1);
            start.setHours(0, 0, 0, 0);
            const end = new Date();
            end.setDate(now.getDate() - 1);
            end.setHours(23, 59, 59, 999);
            return items.filter(item => item.lastVisitTime >= start.getTime() && item.lastVisitTime <= end.getTime());
        } else if (range === 'week') {
            start.setDate(now.getDate() - 7);
        } else if (range === 'month') {
            start.setDate(now.getDate() - 30);
        } else {
            return items;
        }

        return items.filter(item => item.lastVisitTime >= start.getTime());
    }

    function renderHistoryGroups(items) {
        const container = els.contentArea.querySelector('.history-stream-content');
        container.innerHTML = '';

        if (items.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--text-muted);">No items found.</div>';
            return;
        }

        const grouped = {};
        items.forEach(item => {
            const date = new Date(item.lastVisitTime).toLocaleDateString(undefined, {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });
            if (!grouped[date]) grouped[date] = [];
            grouped[date].push(item);
        });

        const shouldExpandAll = state.searchQuery.length > 0 || items.length < 10;
        const todayStr = new Date().toLocaleDateString(undefined, {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        for (const [date, dayItems] of Object.entries(grouped)) {
            const isExpanded = (date === todayStr || shouldExpandAll) ? 'open' : '';

            const groupEl = document.createElement('details');
            groupEl.className = 'history-group';
            if (isExpanded) groupEl.setAttribute('open', '');

            groupEl.innerHTML = `
                <summary class="group-header">
                    <span class="header-text">${date}</span>
                    <span class="header-count">${dayItems.length} items</span>
                    <span class="chevron">▼</span>
                </summary>
                <ul class="history-list">
                    ${dayItems.map(item => {
                        const domain = new URL(item.url || 'http://localhost').hostname.replace('www.', '');
                        const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
                        const time = new Date(item.lastVisitTime).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

                        return `
                            <li class="genux-ripple">
                                <span class="time">${time}</span>
                                <div class="img-container">
                                    <img src="${faviconUrl}" class="favicon" alt="" loading="lazy">
                                </div>
                                <a href="${item.url}" target="_blank" title="${item.title}">${item.title || item.url}</a>
                                <span class="domain">${domain}</span>
                            </li>
                        `;
                    }).join('')}
                </ul>
            `;
            container.appendChild(groupEl);
        }
    }

    function showOnboarding() {
        chrome.storage.local.get(['onboardingComplete'], (result) => {
            if (result.onboardingComplete) return;

            const backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop';
            backdrop.innerHTML = `
                <div class="modal">
                    <h2>Welcome to Memoria</h2>
                    <p>Memoria organizes your browsing history into meaningful Journeys.</p>
                    <p>Select a Journey from the sidebar to filter your history, or explore the Library for everything.</p>
                    <button id="close-onboarding">Let's Go</button>
                </div>
            `;
            document.body.appendChild(backdrop);

            document.getElementById('close-onboarding').addEventListener('click', () => {
                chrome.storage.local.set({ onboardingComplete: true });
                backdrop.remove();
            });
        });
    }
});
