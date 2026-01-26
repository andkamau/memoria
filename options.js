// Saves options to chrome.storage
const saveOptions = () => {
  const apiKey = document.getElementById('apiKey').value;
  const status = document.getElementById('status');

  if (!apiKey) {
    status.textContent = 'Please enter an API key.';
    status.style.color = '#d32f2f';
    setTimeout(() => {
      status.textContent = '';
    }, 3000);
    return;
  }

  chrome.storage.sync.set(
    { geminiApiKey: apiKey },
    () => {
      // Update status to let user know options were saved.
      status.textContent = 'Settings saved! Redirecting to history...';
      status.style.color = '#2e7d32';

      setTimeout(() => {
        // Redirect to the history page logic
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0]) {
            chrome.tabs.update(tabs[0].id, { url: 'chrome://history' });
          }
        });
      }, 1000);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { geminiApiKey: '' }, // Default value
    (items) => {
      document.getElementById('apiKey').value = items.geminiApiKey;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
