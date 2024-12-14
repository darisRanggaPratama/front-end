function reloadPage() {
    location.reload();
}

function navigateTo(page) {
    window.location.href = page;
}

document.getElementById('toggleSidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.transform === 'translateX(0%)') {
        sidebar.style.transform = 'translateX(100%)';
    } else {
        sidebar.style.transform = 'translateX(0%)';
    }
});