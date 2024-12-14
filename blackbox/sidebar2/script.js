$(document).ready(function() {
    let sidebarVisible = false;

    $('#toggleSidebar').click(function() {
        sidebarVisible = !sidebarVisible;
        $('#sidebar').css('transform', sidebarVisible ? 'translateX(0)' : 'translateX(100%)');
    });

    $('#refreshButton').click(function() {
        location.reload();
    });

    $('.btn-animated').click(function() {
        $(this).addClass('active');
        setTimeout(() => {
            $(this).removeClass('active');
        }, 1000); // Durasi animasi spin
    });
});