// F4 Addy focus
(function() {
    const { CustomizableUI } = window;
    window.addEventListener('keydown', (event) => {
        if (event.code === 'F4') {
            event.preventDefault(); // Prevent default behavior
            gURLBar.focus(); // Focus the address bar
            gURLBar.select(); // Highlight the text in the address bar
        }
    }, true);
})();
