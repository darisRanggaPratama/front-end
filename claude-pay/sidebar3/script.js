document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const toggleButton = document.getElementById('toggleButton');
    const refreshButton = document.getElementById('refreshButton');
    const leftSidebar = document.querySelector('.left-sidebar');
    const rightSidebar = document.querySelector('.right-sidebar');
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    
    // Toggle sidebars function
    toggleButton.addEventListener('click', function() {
        leftSidebar.classList.toggle('show');
        rightSidebar.classList.toggle('show');
        
        // Show reload icon
        const reloadIcon = this.querySelector('.reload-icon');
        reloadIcon.classList.remove('d-none');
        
        // Hide reload icon after animation
        setTimeout(() => {
            reloadIcon.classList.add('d-none');
        }, 1000);
    });

    // Refresh page function
    refreshButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show reload icon
        const reloadIcon = this.querySelector('.reload-icon');
        reloadIcon.classList.remove('d-none');
        
        // Reload page after short delay
        setTimeout(() => {
            window.location.reload();
        }, 500);
    });

    // Add click handlers to all sidebar buttons
    sidebarButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Show reload icon
            const reloadIcon = this.querySelector('.reload-icon');
            reloadIcon.classList.remove('d-none');
            
            // Hide reload icon after animation
            setTimeout(() => {
                reloadIcon.classList.add('d-none');
            }, 1000);

            // Get the page to navigate to
            const page = this.dataset.page;
            if (page) {
                console.log(`Navigating to ${page} page...`);
                // Add your navigation logic here
            }
        });
    });
});