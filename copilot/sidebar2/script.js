$(document).ready(function() {
    $('#toggleSidebar').on('click', function() {
        $('#sidebar').toggleClass('show');
    });

    $('#refreshBtn').on('click', function() {
        location.reload();
    });

    $('.btn').on('mouseenter', function() {
        $(this).addClass('hovered');
    }).on('mouseleave', function() {
        $(this).removeClass('hovered');
    }).on('click', function() {
        let $btn = $(this);
        $btn.addClass('loading');
        setTimeout(function() {
            $btn.removeClass('loading');
        }, 2000); // Simulating a process
    });
});
