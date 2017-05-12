$(document).ready(function() {
    $('.grid').masonry({
        itemSelector: '.grid-item'
    });

    $('.header-nav').click(function() {
        var menu = $('.header-nav-list');
        $('.sandwich').toggleClass('active');
        if(menu.is(':visible')) {
            menu.slideUp();
        } else {
            menu.slideDown();
        }
    });
});

