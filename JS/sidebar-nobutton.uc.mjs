window.addEventListener('load', () => {
    // Dynamically inject CSS into the page
    const style = document.createElement('style');
    style.innerHTML = `
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

        #tabbrowser-tabbox {
            position: relative;
            z-index: 1;
        }

        #tabbrowser-tabbox.sidebar-expanded {
            margin-left: -250px;
        }
    `;
    document.head.appendChild(style);

    const sidebarMain = document.getElementById('sidebar-main');
    if (!sidebarMain) return;

    let collapseTimeout;
    let expandTimeout;
    let sidebarIsExpanded = true;

    // Function to toggle sidebar expansion and collapse
    const toggleSidebar = () => {
        const { SidebarController } = window;
        if (SidebarController) {
            SidebarController.handleToolbarButtonClick();
        }

        sidebarIsExpanded = !sidebarIsExpanded;
        sidebarMain.classList.toggle('overlay', sidebarIsExpanded); // Toggle overlay class based on state
    };

    // Smoothly expand sidebar on hover
    const onHover = () => {
        clearTimeout(collapseTimeout); // Cancel collapse timeout if hovering

        if (!sidebarIsExpanded) {
            expandTimeout = setTimeout(() => {
                toggleSidebar();
            }, 200); // Delay expansion for smooth transition
        }
    };

    // Smoothly collapse sidebar after hover ends
    const onMouseOut = () => {
        clearTimeout(expandTimeout); // Cancel expansion timeout if mouse leaves

        if (sidebarIsExpanded) {
            collapseTimeout = setTimeout(() => {
                toggleSidebar();
            }, 400); // Delay collapse for smooth transition
        }
    };

    // Attach event listeners for hover and mouseout
    sidebarMain.addEventListener('mouseenter', onHover);
    sidebarMain.addEventListener('mouseleave', onMouseOut);
});
