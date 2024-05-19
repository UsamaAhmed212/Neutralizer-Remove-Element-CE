/**
 * Neutralizer -  Remove Element v1.0.0
 */

// Event listener for the When DOM fully loaded
window.addEventListener("load", function(event) {
    // Function to Detect and Remove all Numbers from the DOM.
    function neutralizeElement(node) {
        // Regular expression to match numbers
        let numberRegex = /\d+/g;

        if (node.nodeType === Node.TEXT_NODE) {
            // Replace numbers in text nodes with empty string
            node.textContent = node.textContent.replace(numberRegex, '');
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // Remove numbers from element nodes
            for (let child of node.childNodes) {
                neutralizeElement(child);
            }
        }

    }

	// Receive message from to neutralizer remove element action
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action === 'neutralizeElement') {
            neutralizeElement(document.body);
        }
    });

});
