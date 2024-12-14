document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const refreshButton = document.getElementById('refreshButton');

    toggleSidebarButton.addEventListener('click', function() {
        sidebar.classList.toggle('show'); // Menambahkan atau menghapus kelas 'show'
        toggleSidebarButton.textContent = sidebar.classList.contains('show') ? 'Sembunyikan Sidebar' : 'Tampilkan Sidebar';
    });

    refreshButton.addEventListener('click', function() {
        location.reload(); // Reload halaman
    });
});