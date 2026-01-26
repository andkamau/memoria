// main.js

document.addEventListener('DOMContentLoaded', () => {
    const journeysTab = document.getElementById('journeys-tab');
    const allHistoryTab = document.getElementById('all-history-tab');
    const contentArea = document.getElementById('content-area');
    const searchBar = document.getElementById('search-bar');

    let fullHistory = [];
    let currentJourneys = [];

    function showOnboarding() {
        chrome.storage.local.get(['onboardingComplete'], (result) => {
            if (result.onboardingComplete) return;

            const backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop';
            backdrop.innerHTML = `
                <div class="modal">
                    <h2>Welcome to Memoria</h2>
                    <p>Memoria uses AI to organize your browsing history into meaningful "Journeys".</p>
                    <p>Say goodbye to endless scrolling and rediscovery your past browsing sessions with context.</p>
                    <button id="close-onboarding">Get Started</button>
                </div>
            `;
            document.body.appendChild(backdrop);

            document.getElementById('close-onboarding').addEventListener('click', () => {
                chrome.storage.local.set({ onboardingComplete: true });
                backdrop.remove();
            });
        });
    }

    function renderJourneys(journeys) {
        if (!journeys || journeys.length === 0) {
            contentArea.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--text-muted);">No journeys found. Try browsing a bit more!</div>';
            return;
        }

        contentArea.innerHTML = `
            <div style="display: flex; justify-content: flex-end; margin-bottom: 16px;">
                <button id="refresh-journeys" style="
                    background: transparent; 
                    border: 1px solid var(--border-subtle); 
                    color: var(--text-secondary); 
                    padding: 6px 12px; 
                    border-radius: 20px; 
                    cursor: pointer;
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                ">
                   🔄 Refresh Journeys
                </button>
            </div>
        `;

        // Add listener for refresh
        setTimeout(() => {
            document.getElementById('refresh-journeys')?.addEventListener('click', () => {
                loadAndDisplayJourneys(true);
            });
        }, 0);

        journeys.forEach(journey => {
            const card = document.createElement('div');
            card.className = 'card';

            // Format relevance as percentage
            const relevanceScore = Math.round((journey.relevance || 0) * 100);

            card.innerHTML = `
                <h3>${journey.title}</h3>
                <div class="metadata">
                    <span style="color: var(--accent-cyan);">✦</span> ${relevanceScore}% Relevance
                </div>
                <div class="controls">
                    <button class="expand-btn">View ${journey.pages.length} Pages</button>
                </div>
                <ul class="journey-steps hidden">
                    ${journey.pages.map(page => {
                const domain = new URL(page.url).hostname.replace('www.', '');
                const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
                return `
                        <li>
                            <div class="img-container">
                                <img src="${faviconUrl}" class="favicon" alt="" loading="lazy">
                            </div>
                            <a href="${page.url}" target="_blank" title="${page.title}">${page.title || page.url}</a>
                            <span class="domain">${domain}</span>
                        </li>
                        `;
            }).join('')}
                </ul>
            `;

            // Toggle logic
            const expandBtn = card.querySelector('.expand-btn');
            const stepsList = card.querySelector('.journey-steps');

            expandBtn.addEventListener('click', () => {
                const isHidden = stepsList.classList.contains('hidden');
                if (isHidden) {
                    stepsList.classList.remove('hidden');
                    expandBtn.textContent = 'Hide Pages';
                } else {
                    stepsList.classList.add('hidden');
                    expandBtn.textContent = `View ${journey.pages.length} Pages`;
                }
            });

            contentArea.appendChild(card);
        });
    }

    async function loadAndDisplayJourneys(forceRefresh = false) {
        contentArea.innerHTML = '<p>✨ Analyzing your history with AI...</p>';

        try {
            // Check Cache first
            if (!forceRefresh) {
                const cachedData = await chrome.storage.local.get(['cachedJourneys', 'journeysTimestamp']);
                const now = Date.now();
                const oneHour = 60 * 60 * 1000;

                if (cachedData.cachedJourneys && cachedData.journeysTimestamp && (now - cachedData.journeysTimestamp < oneHour)) {
                    console.log("Loading journeys from cache...");
                    currentJourneys = cachedData.cachedJourneys;
                    renderJourneys(currentJourneys);
                    return;
                }
            }

            // Fetch new if no cache or stale
            const result = await createJourneysFromHistory(fullHistory);
            currentJourneys = result.journeys;

            // Save to Cache
            await chrome.storage.local.set({
                cachedJourneys: currentJourneys,
                journeysTimestamp: Date.now()
            });

            renderJourneys(currentJourneys);
        } catch (error) {
            console.error("Failed to load journeys:", error);
            if (error.message === "API_KEY_MISSING") {
                contentArea.innerHTML = `
                    <div style="text-align: center; padding: 2rem;">
                        <p style="font-size: 1.1rem; color: #555;">To see your history journeys, you need to set your Gemini API Key.</p>
                        <button id="open-settings" style="
                            background-color: var(--accent-purple); 
                            color: white; 
                            border: none; 
                            padding: 10px 20px; 
                            border-radius: 6px; 
                            cursor: pointer; 
                            font-size: 1rem;
                            margin-top: 10px;
                        ">Open Settings</button>
                    </div>
                `;
                document.getElementById('open-settings').addEventListener('click', () => {
                    chrome.runtime.openOptionsPage();
                });
            } else {
                contentArea.innerHTML = `<p style="color: #ff4444;">Error: ${error.message || 'Could not analyze browsing history.'}</p>`;
            }
        }
    }

    function renderAllHistory(historyItems) {
        contentArea.innerHTML = '';

        if (!historyItems || historyItems.length === 0) {
            contentArea.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--text-muted);">No history matches your search.</div>';
            return;
        }

        // Create Filter Chips
        const filterContainer = document.createElement('div');
        filterContainer.className = 'filter-chips';
        filterContainer.innerHTML = `
            <button class="filter-chip active" data-range="all">All Time</button>
            <button class="filter-chip" data-range="today">Today</button>
            <button class="filter-chip" data-range="yesterday">Yesterday</button>
            <button class="filter-chip" data-range="week">Last Week</button>
            <button class="filter-chip" data-range="month">Last 30 Days</button>
        `;
        contentArea.appendChild(filterContainer);

        // Filter Logic Binding
        filterContainer.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                // Update active state
                filterContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                e.target.classList.add('active');

                // Apply filter
                const range = e.target.dataset.range;
                const filtered = filterHistoryByRange(historyItems, range);
                renderHistoryList(filtered);
            });
        });

        // Initial List Render
        const listContainer = document.createElement('div');
        listContainer.id = 'history-list-container';
        contentArea.appendChild(listContainer);

        renderHistoryList(historyItems);
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
            // Special case for yesterday: strict range
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

    function renderHistoryList(items) {
        const container = document.getElementById('history-list-container');
        if (!container) return;

        if (items.length === 0) {
            container.innerHTML = '<div style="text-align:center; padding: 20px; color: var(--text-muted);">No results for this time range.</div>';
            return;
        }

        // Group by Date
        const grouped = {};
        items.forEach(item => {
            const date = new Date(item.lastVisitTime).toLocaleDateString(undefined, {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });
            if (!grouped[date]) grouped[date] = [];
            grouped[date].push(item);
        });

        const todayStr = new Date().toLocaleDateString(undefined, {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        let html = '';
        const searchActive = searchBar.value.trim().length > 0;

        for (const [date, dayItems] of Object.entries(grouped)) {
            // Expand if it's Today OR if a search is active (to show results)
            const isExpanded = date === todayStr || searchActive ? 'open' : '';

            html += `
            <details class="history-group" ${isExpanded}>
                <summary class="group-header">
                    <span class="header-text">${date}</span>
                    <span class="header-count">${dayItems.length} items</span>
                    <span class="chevron">▼</span>
                </summary>
                <ul class="history-list">
            `;

            html += dayItems.map(item => {
                const domain = new URL(item.url).hostname.replace('www.', '');
                const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
                const time = new Date(item.lastVisitTime).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

                return `
                    <li>
                        <span class="time">${time}</span>
                        <div class="img-container" style="width: 24px; height: 24px; min-width: 24px;">
                            <img src="${faviconUrl}" class="favicon" alt="" style="width: 16px; height: 16px;">
                        </div>
                        <a href="${item.url}" target="_blank" title="${item.title}">${item.title || item.url}</a>
                        <span class="domain">${domain}</span>
                    </li>
                    `;
            }).join('');
            html += `</ul></details>`;
        }

        container.innerHTML = html;

        // Add click listeners to summaries to toggle chevron rotation if needed via JS, 
        // though CSS can handle 'details[open] .chevron' usually.
    }

    // Initialize Search Listener
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (allHistoryTab.classList.contains('active')) {
            // In All History: Client-side filter
            const filtered = fullHistory.filter(item =>
                (item.title && item.title.toLowerCase().includes(query)) ||
                item.url.toLowerCase().includes(query)
            );
            // Re-render only list part to avoid losing filter chips if desired, 
            // but for simplicity calling renderAllHistory is fine, though it resets chips.
            // Better: update the current rendered list.
            // Let's simplified: If search is active, we just render the list with matches, ignoring date chips for simplicity or resetting them.
            // Implementing robust search:
            const container = document.getElementById('history-list-container');
            if (container) {
                renderHistoryList(filtered);
            }
        }
    });

    function setActiveTab(tab) {
        searchBar.value = '';
        journeysTab.classList.remove('active');
        allHistoryTab.classList.remove('active');
        tab.classList.add('active');

        if (tab === journeysTab) {
            if (fullHistory.length === 0) {
                contentArea.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--text-muted);">No browsing history to analyze.</div>';
                return;
            }
            loadAndDisplayJourneys();
        } else {
            renderAllHistory(fullHistory);
        }
    }

    // --- Event Listeners ---
    journeysTab.addEventListener('click', () => setActiveTab(journeysTab));
    allHistoryTab.addEventListener('click', () => setActiveTab(allHistoryTab));


    // --- Initial Load ---
    showOnboarding();
    chrome.history.search({ text: '', maxResults: 1000, startTime: new Date().setDate(new Date().getDate() - 90) }, (historyItems) => {
        fullHistory = historyItems || []; // Ensure fullHistory is always an array
        setActiveTab(journeysTab); // Default to journeys view
    });
});
