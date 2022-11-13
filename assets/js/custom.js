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
    $('body').prepend('<div class="go-top"><i class="fa-solid fa-angle-up"></i></div>')
     $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $(".go-top").fadeIn();
        }else{
            $(".go-top").fadeOut();
        }
     });
     $(".go-top").on('click', function(){
        $("body, html").animate({scrollTop:0}, 999);
     });
    


});