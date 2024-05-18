// Event listener for the When DOM fully loaded
window.addEventListener("load", function(event) {
    var LAST_TARGET;

    document.addEventListener('contextmenu', function (event) {
        // Save the element under the context menu in case 'remove' is clicked
        LAST_TARGET = event.target;
    });

    // Receive message from to neutralizer remove element action
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action === 'neutralizerRemoveElement') {
            if (LAST_TARGET) LAST_TARGET.parentElement.removeChild(LAST_TARGET);
        }
    });

});
