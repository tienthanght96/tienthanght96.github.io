$(document).ready(function () {
    $(window).scroll(function () {
        if ($('body').scrollTop() > 100) {
            $('.wrapper-navbar.fixed-top').addClass('color-nav');
        } else {
            $('.wrapper-navbar.fixed-top').removeClass('color-nav');
        }

    });


});