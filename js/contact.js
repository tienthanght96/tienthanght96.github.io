$(document).ready(function () {
    contactPageAnimation();

    /*contact page animation*/
    function contactPageAnimation() {
        $('.col-md-6.col-sm-12.banner-content').addClass('show').addClass('bounceInLeft animated');
        $('.banner .banner-tittle').addClass('bounceInDown animated');
        $('.col-md-6.col-sm-12.banner-content ul.list-unstyled').addClass('bounceInUp animated');
    }
});