// Sidebar Toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const leftSidebar = document.querySelector('.left-sidebar');
const rightSidebar = document.querySelector('.right-sidebar');
const mainContent = document.querySelector('.main-content');

let sidebarsActive = false;

sidebarToggle.addEventListener('click', () => {
    sidebarsActive = !sidebarsActive;
    leftSidebar.classList.toggle('active');
    rightSidebar.classList.toggle('active');
    mainContent.classList.toggle('sidebar-active');
    
    // Add loading icon when clicked
    const icon = sidebarToggle.querySelector('i');
    icon.className = 'bi bi-arrow-clockwise me-2';
    icon.style.animation = 'spin 1s linear';
    
    setTimeout(() => {
        icon.className = 'bi bi-list me-2';
        icon.style.animation = '';
    }, 1000);
});

// Navigation Function
function navigateTo(page) {
    const button = event.currentTarget;
    const icon = button.querySelector('i');
    const originalIcon = icon.className;
    
    // Add loading animation
    icon.className = 'bi bi-arrow-clockwise me-2';
    icon.style.animation = 'spin 1s linear';
    
    setTimeout(() => {
        icon.className = originalIcon;
        icon.style.animation = '';
        // Here you would typically handle the actual navigation
        console.log(`Navigating to ${page}`);
    }, 1000);
}

// Refresh Page Function
function refreshPage() {
    const button = event.currentTarget;
    const icon = button.querySelector('i');
    
    // Add loading animation
    icon.style.animation = 'spin 1s linear';
    
    setTimeout(() => {
        location.reload();
    }, 1000);
}

// Sample Data for Table
const sampleData = [
    { no: 1, name: "John Doe", salary: 5000, brutto: 6000, rate: 4.5, category: "Senior", class: "A" },
    { no: 2, name: "Jane Smith", salary: 4500, brutto: 5400, rate: 4.2, category: "Senior", class: "A" },
    { no: 3, name: "Bob Johnson", salary: 3500, brutto: 4200, rate: 3.8, category: "Mid", class: "B" },
    { no: 4, name: "Alice Brown", salary: 3000, brutto: 3600, rate: 3.5, category: "Junior", class: "C" },
    { no: 5, name: "Charlie Davis", salary: 4000, brutto: 4800, rate: 4.0, category: "Mid", class: "B" }
];

// Populate Table
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

// Initialize table on page load
document.addEventListener('DOMContentLoaded', populateTable);

