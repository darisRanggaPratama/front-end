document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const leftSidebar = document.getElementById('leftSidebar');
    const rightSidebar = document.getElementById('rightSidebar');
    const refreshButton = document.getElementById('refreshButton');
    const tableBody = document.getElementById('tableBody');

    // Sidebar Toggle Function
    sidebarToggle.addEventListener('click', function() {
        const leftIsOpen = leftSidebar.classList.contains('show-left');
        const rightIsOpen = rightSidebar.classList.contains('show-right');

        // Toggle left sidebar
        leftSidebar.classList.toggle('show-left');
        
        // Toggle right sidebar
        rightSidebar.classList.toggle('show-right');

        // Add/remove reload icon
        if (!leftIsOpen && !rightIsOpen) {
            this.innerHTML = '<i class="bi bi-list me-2"></i> Close Sidebars';
        } else {
            this.innerHTML = '<i class="bi bi-list"></i> Toggle Sidebar';
        }
    });

    // Refresh Page Button
    refreshButton.addEventListener('click', function() {
        this.innerHTML = '<i class="bi bi-arrow-clockwise me-2"></i> Refreshing...';
        setTimeout(() => {
            location.reload();
        }, 500);
    });

    // Sidebar Buttons
    const sidebarButtons = document.querySelectorAll('.sidebar-btn');
    sidebarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentIcon = this.innerHTML;
            this.innerHTML = `<i class="bi bi-arrow-clockwise me-2"></i> ${currentIcon.split('>')[1]}`;
            
            setTimeout(() => {
                this.innerHTML = currentIcon;
            }, 1000);
        });
    });

    // Dynamic Table Population
    const employeeData = [
        { no: 1, name: 'John Doe', salary: 50000, brutto: 60000, rate: 'A', category: 'Management', class: 'Senior' },
        { no: 2, name: 'Jane Smith', salary: 45000, brutto: 55000, rate: 'B', category: 'Sales', class: 'Junior' },
        { no: 3, name: 'Mike Johnson', salary: 55000, brutto: 65000, rate: 'A', category: 'IT', class: 'Mid-Level' }
    ];

    employeeData.forEach(emp => {
        const row = `
            <tr>
                <td>${emp.no}</td>
                <td>${emp.name}</td>
                <td>$${emp.salary}</td>
                <td>$${emp.brutto}</td>
                <td>${emp.rate}</td>
                <td>${emp.category}</td>
                <td>${emp.class}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
});