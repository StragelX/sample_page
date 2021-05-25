$( document ).ready(function() {
    var got_cookies = localStorage.getItem('got_cookies');

    if (got_cookies != 'checked') {
    //   $(".cookies_wrap").addClass('active');
    }

    $('.cookies_wrap .ok').click(function(){
        $(this).closest('.cookies_wrap').removeClass('active');
    })

    if($('.counter_number').length){
        $('.counter_number').appear(function () {
            $('.counter_number').countTo();
        });
    }

    $(".phone").mask("+38(099) 999 99 99");

    $('.call_modal').click(function(){
        var id = $(this).attr('data-id');
        $('.modal_overlay').addClass('active');
        $('body').addClass('no_scroll');
        $('.modal').each(function(){
            if ( $(this).attr('id') == id ) {
                $(this).addClass('active');
            }
        })
    });

    $('.modal_overlay .close, .modal_overlay .color_btn').click(function(){
        $(this).closest('.modal_overlay').removeClass('active');
        $(this).closest('.modal').removeClass('active');
        $('body').removeClass('no_scroll');
    });

    if ( $('.main_top_carousel.owl-carousel') ) {
        $(".main_top_carousel.owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,

            responsive:{
                0:{
                },
                600:{
                },
                1000:{
                }
            }
        });
    }

    if ( $('.with_low_carousel.owl-carousel') ) {
        $(".with_low_carousel.owl-carousel").owlCarousel({
            items: 4,
            margin: 10,
            loop: true,
            nav: false,
            dots: false,
            autoplay: false,

            responsive:{
                0:{
                },
                600:{
                },
                1000:{
                }
            }
        });
    }

    if ( $('.interesting_carousel.owl-carousel') ) {
        $(".interesting_carousel.owl-carousel").owlCarousel({
            items: 3.5,
            margin: 25,
            loop: true,
            nav: false,
            dots: false,
            autoplay: false,

            responsive:{
                0:{
                },
                600:{
                },
                1000:{
                }
            }
        });
    }

    if ( $('.partners.owl-carousel') ) {
        $(".partners.owl-carousel").owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            navText: ['', ''],

            responsive:{
                0:{
                },
                600:{
                },
                1000:{
                }
            }
        });
    }
});