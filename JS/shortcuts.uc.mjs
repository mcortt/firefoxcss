(function() {
    const { CustomizableUI } = window;

    window.addEventListener('keydown', (event) => {
        // F4 Shortcut for Address Bar Focus
        if (event.code === 'F4') {
            event.preventDefault(); // Prevent default behavior
            gURLBar.focus(); // Focus the address bar
            gURLBar.select(); // Highlight the text in the address bar
        }

        // Ctrl+Alt+Z Shortcut to Toggle Sidebar
        if (event.ctrlKey && event.altKey && event.key === 'z') {
            // Call the SidebarController's toggle method
            SidebarController.toggle("viewGenaiChatSidebar");
        }
    }, true);
})();
