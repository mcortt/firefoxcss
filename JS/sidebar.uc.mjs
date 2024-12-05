UC_API.Runtime.startupFinished().then(() => {
    // Function to get the browser UI density setting
    function getUIDensityWidth() {
        let densityWidth = 48.2333; // Default to "compact" density
        try {
            const density = Services.prefs.getIntPref("browser.uidensity", 1); // 0: Normal, 1: Compact, 2: Touch
            if (density === 0) {
                densityWidth = 51.2333; // Normal density
            } else if (density === 2) {
                densityWidth = 60.2333; // Touch density
            }
        } catch (e) {
            console.error("Error getting UI density setting:", e);
        }
        return densityWidth + "px";
    }

    // Function to inject the custom div and styles
    function injectDivAndStyles() {
        const sidebarButton = document.getElementById('sidebar-button');
        const sidebar = document.getElementById('sidebar-main');
        if (!sidebarButton || !sidebar) return;

        // Get the sidebar width from the UI density
        const sidebarWidth = getUIDensityWidth();
        let customDiv = document.getElementById('custom-injected-div');

        if (customDiv) {
            customDiv.style.width = sidebarWidth; // Update width if div exists
            return;
        }

        // Create and inject styles for floating sidebar and custom div
        const style = document.createElement('style');
        style.innerHTML = `
            #sidebar-main {
                position: absolute;
                z-index: 1000;
                height: 100%;
                background: var(--lwt-accent-color) !important;
            }
            #browser {
                position: relative;
            }
            #tabbrowser-tabbox, #navigator-toolbox, #sidebar {
                outline: none !important;
                box-shadow: none !important;
            }
            #custom-injected-div {
                width: ${sidebarWidth};
            }
        `;
        document.head.appendChild(style);

        // Create and insert the custom div before the sidebar
        customDiv = document.createElement('div');
        customDiv.id = 'custom-injected-div';
        customDiv.style.width = sidebarWidth;
        document.getElementById('browser').insertBefore(customDiv, sidebar);
    }

    // Function to handle sidebar toggle logic
    function toggleSidebar() {
        window.SidebarController.handleToolbarButtonClick();
    }

    // Handle mouse events to show/hide sidebar with a delay
    let sidebarTimeout;
    const handleMouseEvent = (event) => {
        clearTimeout(sidebarTimeout);
        const sidebarButton = document.getElementById('sidebar-button');
        const sidebar = document.getElementById('sidebar-main');
        if (!sidebarButton || !sidebar) return;

        const shouldToggle = (event.type === 'mouseenter' && !sidebarButton.checked) ||
                             (event.type === 'mouseleave' && sidebarButton.checked);
        if (shouldToggle) {
            sidebarTimeout = setTimeout(toggleSidebar, 100);
        }
    };

    // Handle fullscreen changes
    const handleFullscreenChange = () => {
        const customDiv = document.getElementById('custom-injected-div');
        if (!customDiv) return;

        if (document.fullscreenElement) {
            customDiv.style.display = 'none';
        } else {
            customDiv.style.display = '';
        }
    };

    // Add event listener for fullscreen changes
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Inject the div and styles for the initial window
    injectDivAndStyles();

    // Attach mouse event listeners for the sidebar
    const sidebar = document.getElementById('sidebar-main');
    if (sidebar) {
        sidebar.addEventListener('mouseenter', handleMouseEvent);
        sidebar.addEventListener('mouseleave', handleMouseEvent);
    }

    // Listen for new windows or tabs opening and reapply div injection
    window.addEventListener('load', () => {
        injectDivAndStyles(); // Reapply div and styles for new windows/tabs

        const sidebar = document.getElementById('sidebar-main');
        if (sidebar) {
            sidebar.addEventListener('mouseenter', handleMouseEvent);
            sidebar.addEventListener('mouseleave', handleMouseEvent);
        }
    });
});


// userChrome.js
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
