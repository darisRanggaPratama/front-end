// script.js
document.getElementById('toggleSidebar').addEventListener('click', function () {
    const sidebar = new bootstrap.Offcanvas(document.getElementById('sidebar'));
    sidebar.toggle();
});

document.querySelector('.refresh-btn').addEventListener('click', function () {
    location.reload();
});
