$(document).ready(function () {

     let position ={
         featurePosition : $('.feature').offset().top,
         aboutPosition : $('.about').offset().top,
         servicePosition : $('.services').offset().top,
         projectPosition :$('.projects').offset().top,
         testimonialPosition :$('.testimonials').offset().top,
         pricingPosition :$('.pricing').offset().top,
         newsPosition : $('.news').offset().top,
         touchPosition :$('.touch').offset().top
     };

    $('#scroll').click(function () {
        $('body').animate({'scrollTop': 0}, 1500);
        return false;
    });


    $('.ul-menu li:nth-child(1) a').on('click', (e)=>{
        e.preventDefault();
        $('body').animate({'scrollTop': position['featurePosition']}, 1000 , 'easeOutQuart');
    });

    $('.ul-menu li:nth-child(2) a').on('click', (e)=>{
        e.preventDefault();
        $('body').animate({'scrollTop': position['aboutPosition']}, 1000 , 'easeOutQuart');
    });


    $('.ul-menu li:nth-child(3) a').on('click', (e)=>{
        e.preventDefault();
        $('body').animate({'scrollTop': position['servicePosition']}, 1000 , 'easeOutQuart');
    });

    $('.ul-menu li:nth-child(4) a').on('click', (e)=>{
        e.preventDefault();
        $('body').animate({'scrollTop': position['projectPosition']}, 1000 , 'easeOutQuart');
    });


    $('.ul-menu li:nth-child(5) a').on('click', (e)=>{
        e.preventDefault();
        $('body').animate({'scrollTop': position['testimonialPosition']}, 2000 , 'easeInElastic');
    });



    $('.ul-menu li:nth-child(6) a').on('click', (e)=>{
        e.preventDefault();
        $('body').animate({'scrollTop': position['pricingPosition']}, 2000 , 'easeInElastic');
    });

    $('.ul-menu li:nth-child(7) a').on('click', (e)=>{
        e.preventDefault();
        $('body').animate({'scrollTop': position['newsPosition']}, 2000 , 'easeInElastic');
    });

    $('.ul-menu li:nth-child(8) a').on('click', (e)=>{
        e.preventDefault();
        $('body').animate({'scrollTop': position['touchPosition']}, 2000 ,'easeInElastic');
    });

    $("[data-fancybox]").fancybox();

  // TweenMax.from($('.one-page h2.tittle-content'),3,{marginTop:-100 , opacity :0 ,delay:0.5});
  // TweenMax.from($('.one-page p'),4,{marginLeft:-500 , opacity :0 ,delay:0.5}) ;
  // TweenMax.from($('.one-page a.btn-lg'),5,{marginLeft:-500 , opacity :0 ,delay:0.5}) ;
  // TweenMax.from($('a.btn-lg.btn-secondary'),5,{marginRight:-500  ,delay:0.5}) ;

   /* $('.ul-menu li a').bind('click', function (event) {
        event.preventDefault();

        console.log(this.id);
        console.log(position[`${this.id}`]);

        this.addEventListener('click',() => {
            console.log('clicked');
            $('body').animate({'scrollTop': position[`${this.id}`]}, 200);
        });
    });*/
});

