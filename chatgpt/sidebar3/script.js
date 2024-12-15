// Sidebar toggle logic
const toggleButton = document.getElementById('toggle-sidebar');
const leftSidebar = document.getElementById('left-sidebar');
const rightSidebar = document.getElementById('right-sidebar');

let isLeftVisible = false;

toggleButton.addEventListener('click', () => {
    isLeftVisible = !isLeftVisible;
    leftSidebar.classList.toggle('visible', isLeftVisible);
    rightSidebar.classList.toggle('visible', isLeftVisible);
    toggleButton.innerHTML = `<i class="bi bi-arrow-repeat me-2"></i> Toggle Sidebar`;
});

// Refresh button logic
const refreshButton = document.getElementById('refresh-page');
refreshButton.addEventListener('click', () => {
    location.reload();
});

// Generate dynamic table data
const tableBody = document.getElementById('dynamic-table').querySelector('tbody');
const categories = ['A', 'B', 'C'];
const classes = ['X', 'Y', 'Z'];

for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${i}</td>
        <td>Name ${i}</td>
        <td>${(1000 * i).toLocaleString()}</td>
        <td>${(1000 * i * 1.1).toLocaleString()}</td>
        <td>${(10 + i)}</td>
        <td>${categories[i % categories.length]}</td>
        <td>${classes[i % classes.length]}</td>
    `;
    tableBody.appendChild(row);
}
