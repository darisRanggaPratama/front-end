 // JavaScript for sidebar toggle and refresh functionality
 document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const sidebar = document.getElementById('sidebar');
    const refreshPageBtn = document.getElementById('refreshPageBtn');

    // Toggle sidebar visibility
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Refresh page on button click
    refreshPageBtn.addEventListener('click', () => {
        location.reload();
    });
});