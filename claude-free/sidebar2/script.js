document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const navButtons = document.querySelectorAll('.nav-btn');

    // Toggle Sidebar
    toggleSidebarBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show');
    });

    // Refresh Page
    refreshBtn.addEventListener('click', function() {
        const refreshIcon = this.querySelector('i');
        refreshIcon.classList.add('loading-icon');
        
        setTimeout(() => {
            location.reload();
        }, 1000);
    });

    // Navigation Buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            const icon = this.querySelector('i');
            
            // Add loading animation
            icon.classList.add('loading-icon');
            
            // Simulate page navigation
            setTimeout(() => {
                icon.classList.remove('loading-icon');
                alert(`Navigating to ${page} page`);
            }, 1000);
        });
    });
});