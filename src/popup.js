// Send toggle message to content script when popup is opened
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || !tabs[0] || !tabs[0].id) {
        console.error('No active tab found');
        return;
    }

    try {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'toggleUI' }, (response) => {
            // If there's no response or an error, the content script might not be loaded
            if (chrome.runtime.lastError) {
                console.log('Content script not ready or not applicable for this page');
            }
            // Close the popup regardless of the response
            window.close();
        });
    } catch (error) {
        console.error('Failed to send message:', error);
        window.close();
    }
});