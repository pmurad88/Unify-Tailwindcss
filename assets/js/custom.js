$(document).ready(function(){


    $(".h-menu").clone().prependTo(".mobile-menu");
    $(".menutrigger").on('click', function(){
    $(this).toggleClass("active");
    $(".mobile-menu").stop(true,false,true).slideToggle();
    $('body').toggleClass('active')
    });

    $(".slider").owlCarousel({
        items:4,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            768:{
                items:3,
            },
            991:{
                items:4,
            },
        }
    });
    


});