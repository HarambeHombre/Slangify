// Background script for handling storage operations
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'getLanguagePreference') {
        chrome.storage.sync.get('selectedLanguage', (data) => {
            sendResponse(data);
        });
        return true; // Will respond asynchronously
    } else if (request.type === 'setLanguagePreference') {
        chrome.storage.sync.set({ 'selectedLanguage': request.value }, () => {
            sendResponse({ success: true });
        });
        return true; // Will respond asynchronously
    }
});