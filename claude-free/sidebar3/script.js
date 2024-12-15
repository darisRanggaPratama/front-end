document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const leftSidebar = document.getElementById('leftSidebar');
    const rightSidebar = document.getElementById('rightSidebar');
    const refreshBtn = document.getElementById('refreshPage');

    // Fungsi untuk menambahkan efek reload icon
    function addReloadIcon(button) {
        const icon = button.querySelector('.reload-icon');
        icon.classList.add('show');
        setTimeout(() => {
            icon.classList.remove('show');
        }, 1000);
    }

    // Toggle Sidebar
    toggleSidebarBtn.addEventListener('click', () => {
        leftSidebar.classList.toggle('show');
        rightSidebar.classList.toggle('show');
        addReloadIcon(toggleSidebarBtn);
    });

    // Event untuk tombol di sidebar kiri
    document.querySelectorAll('.sidebar-left .sidebar-btn').forEach(button => {
        button.addEventListener('click', () => {
            addReloadIcon(button);
        });
    });

    // Event untuk tombol refresh di sidebar kanan
    refreshBtn.addEventListener('click', () => {
        location.reload();
        addReloadIcon(refreshBtn);
    });
});