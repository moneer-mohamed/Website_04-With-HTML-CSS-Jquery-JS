/*global console, alert, $*/

/*loading page*/

$(window).on('load', function () {
    
    'use strict';
    
    $('.loading-page').fadeOut(2000);
    
});

$(document).ready(function () {
    'use strict';
    // header height
    $(function () {

        $('.header').height($(window).height());

        $(window).resize(function () {

            $('.header').height($(window).height());
        });
    });

    //triger nice scroll

    $(function () {
        $("body").niceScroll({
            cursorcolor: "#FF275E",
            cursorwidth: "8px",
            cursorborder: "none",
            zindex: "9999"
        });
    });
    
    //triger carousel
    


  //navbar color

    $(window).scroll(function () {
    
        'use strict';

        if ($(window).scrollTop() >= 137) {

            $('.navbar').css({

                'backgroundColor' : '#051024',
                'boxShadow' : '5px 0px 5px #000',
                'paddingTop' : '10px',
                'paddingBottom' : '10px'
            });

        } else {

            $('.navbar').css({

                'backgroundColor' : 'transparent',
                'boxShadow' : 'none',
                'paddingTop' : '1.563rem',
                'paddingBottom' : '1.563rem'
            });

        }
    });

    if ($(window).scrollTop() >= 137) {

        $('.navbar').css({

            'backgroundColor' : '#051024',
            'boxShadow' : 'rgb(0, 0, 0) 5px 0px 5px',
            'paddingTop' : '10px',
            'paddingBottom' : '10px'
        });

    } else {

        $('.navbar').css({

            'backgroundColor' : 'transparent',
            'boxShadow' : 'none',
            'paddingTop' : '1.563rem',
            'paddingBottom' : '1.563rem'
        });

    }

    /* navbar scroll */

    $(function () {

        
        $("nav li a").click(function (e) {

            e.preventDefault();

            $('html, body').animate({

                scrollTop : $('#' + $(this).data('scroll')).offset().top - 70

            }, 1000);

        });

    });

    /* navbar click items add class active */

    $('nav li a').on('click', function () {


        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });


    /* 4- syns navbar links with sections */

    $(window).scroll(function () {


        $('section').each(function () {

            if ($(window).scrollTop() + 100 >= $(this).offset().top) {

                var sectionID = $(this).attr('id');

                $('nav a').removeClass('active');

                $('nav li a[data-scroll="' + sectionID + '"]').addClass('active');

            }

        });

        /* button top */

        if ($(window).scrollTop() >= 1000) {

            $('.up').fadeIn(400);

        } else {

            $('.up').fadeOut(400);

        }


    });

    if ($(window).scrollTop() >= 1000) {

        $('.up').fadeIn(400).css('display', 'inlineBlock');

    } else {

        $('.up').fadeOut(400);

    }

    /* click to scroll top */

    $('.up').on('click', function () {


        $('body, html').animate({

            scrollTop : 0

        }, 500);

    });

   //slider 
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})



    //navbar-toggler
    $('.navbar-toggler').on('click',function(){
        $("nav").toggleClass('t-b');
    })

});
