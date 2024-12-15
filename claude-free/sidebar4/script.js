document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const leftSidebar = document.getElementById('leftSidebar');
    const rightSidebar = document.getElementById('rightSidebar');
    const refreshPageBtn = document.getElementById('refreshPageBtn');
    const tableBody = document.getElementById('tableBody');

    // Sidebar Toggle Function
    sidebarToggle.addEventListener('click', () => {
        const leftIcon = sidebarToggle.querySelector('i');
        leftIcon.classList.add('rotate-icon');
        
        leftSidebar.classList.toggle('show');
        rightSidebar.classList.toggle('show');
        
        setTimeout(() => {
            leftIcon.classList.remove('rotate-icon');
        }, 1000);
    });

    // Sidebar Button Click Handler
    document.querySelectorAll('.list-group-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const icon = document.createElement('i');
            icon.classList.add('bi', 'bi-arrow-clockwise', 'me-2', 'rotate-icon');
            e.target.insertAdjacentElement('afterbegin', icon);
            
            setTimeout(() => {
                icon.remove();
            }, 1000);
        });
    });

    // Refresh Page Button
    refreshPageBtn.addEventListener('click', () => {
        location.reload();
    });

    // Generate Dynamic Table Data
    const employeeData = [
        { name: 'John Doe', salary: 5000, brutto: 6000, rate: 4.5, category: 'Manager', class: 'A' },
        { name: 'Jane Smith', salary: 4500, brutto: 5500, rate: 4.2, category: 'Developer', class: 'B' },
        { name: 'Bob Johnson', salary: 4000, brutto: 5000, rate: 4.0, category: 'Designer', class: 'C' }
    ];

    employeeData.forEach((employee, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>$${employee.salary}</td>
                <td>$${employee.brutto}</td>
                <td>${employee.rate}</td>
                <td>${employee.category}</td>
                <td>${employee.class}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
});