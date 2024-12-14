// JavaScript untuk fungsi sidebar
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleSidebar');
    const refreshBtn = document.getElementById('refreshBtn');

    // Toggle Sidebar
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Refresh Page
    refreshBtn.addEventListener('click', function() {
        // Tambahkan animasi spin
        refreshBtn.querySelector('i').classList.add('refresh-spin');
        
        // Refresh halaman setelah animasi selesai
        setTimeout(() => {
            window.location.reload();
        }, 500);
    });

    // Tutup sidebar ketika mengklik di luar
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && 
            !toggleBtn.contains(event.target) && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});