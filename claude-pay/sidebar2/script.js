 // Toggle Sidebar
 document.querySelector('.toggle-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    this.classList.add('loading');
    setTimeout(() => this.classList.remove('loading'), 500);
});

// Refresh Button
document.querySelector('.refresh-btn').addEventListener('click', function() {
    this.classList.add('loading');
    setTimeout(() => {
        window.location.reload();
    }, 500);
});

// Navigation Buttons
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('loading');
        setTimeout(() => {
            this.classList.remove('loading');
            // Add your navigation logic here
            // Example: window.location.href = 'your-page.html';
        }, 500);
    });
});