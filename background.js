chrome.runtime.onInstalled.addListener(function () {
    // Create the context menu item
    chrome.contextMenus.create({
        contexts: ['all'],
        title: 'Neutralizer - Remove Element',
        id: 'removeElementNeutralizer' // Unique ID for the context menu item
    });
});

// Add an event listener for when the context menu item is clicked
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    // Check if the clicked menu item is our 'Number Neutralizer - Remove Element' item
    if ( info.menuItemId === 'removeElementNeutralizer' && tab.url && tab.url.startsWith("http") ) {
        // Send a message to the active tab to trigger the neutralizer remove element action
        chrome.tabs.sendMessage(tab.id, { action: 'neutralizerRemoveElement' });
    }
});
