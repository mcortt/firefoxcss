window.addEventListener('load', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        /* Sidebar styling */
        #sidebar-main.overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 250px;
            height: 100%;
            z-index: 1000;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
            transform: translateX(0);
        }

        /* Tab browser content */
        #tabbrowser-tabbox {
            position: relative;
            z-index: 1;
            transition: transform 0.3s ease; /* Smooth transition */
        }
    `;
    document.head.appendChild(style);

    const sidebarButton = document.getElementById('sidebar-button');
    const sidebarMain = document.getElementById('sidebar-main');
    const tabbrowserTabbox = document.getElementById('tabbrowser-tabbox'); // Ensure this element exists
    
    // Return if elements are not found
    if (!sidebarButton || !sidebarMain || !tabbrowserTabbox) return;

    let collapseTimeout;
    let expandTimeout;

    const toggleSidebar = () => {
        const { SidebarController } = window;
        SidebarController.handleToolbarButtonClick();
    };

    // Get the width of the sidebar for transform
    const getSidebarWidth = () => {
        const width = sidebarMain.offsetWidth;
        console.log("Sidebar width:", width); // Print the width to the console
        return width;
    };  

    // Expand sidebar with a delay if hovered, and cancel collapse timeout
    const onHover = () => {
        clearTimeout(collapseTimeout);
        if (!sidebarButton.checked) {
            expandTimeout = setTimeout(() => {
                toggleSidebar();
                sidebarMain.classList.add('overlay'); // Add overlay effect
                tabbrowserTabbox.style.transform = `translateX(${getSidebarWidth()}px)`; // Move content by sidebar width
            }, 100); // Delay before expanding
        }
    };

    // Collapse sidebar after delay if hover ends, and cancel expand timeout
    const onMouseOut = () => {
        clearTimeout(expandTimeout);
        collapseTimeout = setTimeout(() => {
            if (sidebarButton.checked) {
                sidebarMain.classList.remove('overlay'); // Remove overlay effect
                tabbrowserTabbox.style.transform = 'translateX(0)'; // Reset content position
                toggleSidebar();
            }
        }, 100); // Delay before collapsing
    };

    sidebarMain.addEventListener('mouseenter', onHover);
    sidebarMain.addEventListener('mouseleave', onMouseOut);
});
