document.addEventListener('DOMContentLoaded', function () {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const leftSidebar = document.getElementById('leftSidebar');
    const rightSidebar = document.getElementById('rightSidebar');
    const refreshButton = document.getElementById('refreshButton');

    toggleSidebarButton.addEventListener('click', function () {
        leftSidebar.classList.toggle('show');
        rightSidebar.classList.toggle('show');
        toggleSidebarButton.innerHTML = leftSidebar.classList.contains('show') ?
            '<i class="bi bi-arrow-left-circle"></i> Toggle Sidebar' :
            '<i class="bi bi-arrow-right-circle"></i> Toggle Sidebar';
    });

    const sidebarButtons = document.querySelectorAll('.sidebar-button');
    sidebarButtons.forEach(button => {
        button.addEventListener('click', function () {
            button.innerHTML = '<i class="bi bi-arrow-clockwise"></i> ' + button.textContent.trim();
        });
    });

    refreshButton.addEventListener('click', function () {
        location.reload();
        refreshButton.innerHTML = '<i class="bi bi-arrow-clockwise"></i> Refresh';
    });

    // Populate the table with some sample data
    const tableBody = document.querySelector('#dataTable tbody');
    const sampleData = [
        { no: 1, name: 'John Doe', salary: 5000, brutto: 6000, rate: 20, category: 'A', class: '1A' },
        { no: 2, name: 'Jane Smith', salary: 7000, brutto: 8400, rate: 20, category: 'B', class: '1B' },
        { no: 3, name: 'Alice Johnson', salary: 8000, brutto: 9600, rate: 20, category: 'A', class: '1A' },
        { no: 4, name: 'Bob Brown', salary: 6000, brutto: 7200, rate: 20, category: 'C', class: '1C' },
        { no: 5, name: 'Charlie Black', salary: 9000, brutto: 10800, rate: 20, category: 'B', class: '1B' },
    ];

    sampleData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${data.no}</td>
                <td>${data.name}</td>
                <td>${data.salary}</td>
                <td>${data.brutto}</td>
                <td>${data.rate}</td>
                <td>${data.category}</td>
                <td>${data.class}</td>
            `;
        tableBody.appendChild(row);
    });
});