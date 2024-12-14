const toggleButton = document.getElementById('toggleSidebar');
        const sidebar = document.getElementById('sidebar');
        const refreshButton = document.getElementById('refreshButton');

        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        refreshButton.addEventListener('click', () => {
            location.reload(); // Reload the page
        });