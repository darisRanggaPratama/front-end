document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    const refreshButton = document.getElementById('refresh');

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('show');
    });

    refreshButton.addEventListener('click', function () {
        window.location.reload();
    });
});
