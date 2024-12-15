// Toggle Button Logic
document.getElementById('sidebarToggle').addEventListener('click', function() {
    const leftSidebar = document.getElementById('leftSidebar');
    const rightSidebar = document.getElementById('rightSidebar');
    
    leftSidebar.classList.toggle('active');
    rightSidebar.classList.toggle('active');
    
    // Add loading icon when clicked
    const icon = this.querySelector('i');
    if (icon.classList.contains('bi-list')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-arrow-clockwise');
        setTimeout(() => {
            icon.classList.remove('bi-arrow-clockwise');
            icon.classList.add('bi-list');
        }, 1000);
    }
});

// Refresh Button Logic
document.getElementById('refreshButton').addEventListener('click', function() {
    const icon = this.querySelector('i');
    icon.classList.add('bi-arrow-clockwise-fill');
    icon.classList.remove('bi-arrow-clockwise');
    
    setTimeout(() => {
        icon.classList.remove('bi-arrow-clockwise-fill');
        icon.classList.add('bi-arrow-clockwise');
        location.reload();
    }, 1000);
});

// Sample data for the table
const sampleData = [
    { no: 1, name: "John Doe", salary: 5000, brutto: 6000, rate: 4.5, category: "Senior", class: "A" },
    { no: 2, name: "Jane Smith", salary: 4500, brutto: 5400, rate: 4.2, category: "Middle", class: "B" },
    { no: 3, name: "Bob Johnson", salary: 4000, brutto: 4800, rate: 4.0, category: "Junior", class: "C" }
];

// Populate table with data
function populateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    
    sampleData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.no}</td>
            <td>${item.name}</td>
            <td>$${item.salary}</td>
            <td>$${item.brutto}</td>
            <td>${item.rate}</td>
            <td>${item.category}</td>
            <td>${item.class}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Add click animation to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const icon = this.querySelector('i');
        const originalClass = icon.className;
        
        icon.className = 'bi bi-arrow-clockwise me-2';
        
        setTimeout(() => {
            icon.className = originalClass;
        }, 1000);
    });
});

// Initialize table on page load
document.addEventListener('DOMContentLoaded', populateTable);