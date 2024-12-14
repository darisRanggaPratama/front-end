const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');
const refreshBtn = document.getElementById('refresh');
const buttons = document.querySelectorAll('.btn');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

refreshBtn.addEventListener('click', () => {
    location.reload();
});

buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.opacity = '0.8';
    });

    button.addEventListener('mouseout', () => {
        button.style.opacity = '1';
    });

    button.addEventListener('click', () => {
        const loader = document.createElement('div');
        loader.className = 'loader';
        button.appendChild(loader);

        setTimeout(() => {
            loader.remove();
        }, 2000);
    });
});
