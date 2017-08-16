$(document).ready(function () {

    new WOW().init();


    indexPageAnimation();

    contactPageAnimation();


    /*animation index*/
    function indexPageAnimation() {
        $('.top-tittle-page h3.big-tittle , .col-lg-6.col-md-12.left-intro.text-left').addClass('bounceInLeft animated');
        $('.top-tittle-page p ,.col-lg-6.col-md-12.right-intro.text-left').addClass('bounceInRight animated');
        $('.top-tittle-page .icon-tittle img').addClass('zoomIn animated');
        $('.top-tittle-page .icon-tittle hr').addClass('zoomIn animated');
    }

    /*contact page animation*/
    function contactPageAnimation() {
        $('.col-md-6.col-sm-12.banner-content').addClass('show').addClass('bounceInLeft animated');
        $('.banner .banner-tittle').addClass('bounceInDown animated');
        $('.col-md-6.col-sm-12.banner-content ul.list-unstyled').addClass('bounceInUp animated');
    }


    $('body,html').addClass('show-top');

    var DOMElements = {
        top: $('.top'),
        navbar: $('nav.navbar.navbar-light.navbar-toggleable-sm.nav.bg-faded')
    };


    DOMElements.top.delay(11000).fadeOut(function () {
        $('body,html').removeClass('show-top').addClass('hide-top');
    });


    $(window).scroll(function () {
        // var nav=  DOMElements.navbar.offset().top;

        if ($(' html body').scrollTop() >= 300) {
            DOMElements.navbar.addClass('fixed-top');
        }
        else {
            DOMElements.navbar.removeClass('fixed-top');

        }


    });


});