const toggleSidebar = document.getElementById('toggleSidebar');
        const sidebar = document.getElementById('sidebar');
        const refreshPage = document.getElementById('refreshPage');

        toggleSidebar.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });

        refreshPage.addEventListener('click', () => {
            location.reload();
        });