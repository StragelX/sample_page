$( document ).ready(function() {
    $('.shop_group .top_line').click(function(){
        $(this).closest('.shop_group').toggleClass('active');
    })

    var agrotem_cookies = localStorage.getItem('agrotem_cookies');

    if (agrotem_cookies != 'checked') {
      $(".cookies_wrap").addClass('active');
    }

    $('.cookies_wrap .ok').click(function(){
        $(this).closest('.cookies_wrap').removeClass('active');
        localStorage.setItem('agrotem_cookies', 'checked')
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

    $(".input_wrap input").click(function(){
        $(this).removeClass('invalid, filled');
    })

    $(".input_wrap input").blur(function(){
        $(this).removeClass('invalid');
        if( $(this).val() == '' || $(this).is(":invalid")) {
          $(this).addClass('invalid');
        } else if ( $(this).val() != '' ) {
            $(this).addClass('filled');
        }
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
            margin: 10,
            loop: true,
            nav: false,
            dots: false,
            autoplay: false,

            responsive:{
                700:{
                    items: 2
                },
                900:{
                    items: 3
                },
                1100:{
                    items: 4
                }
            }
        });
    }

    if ( $('.interesting_carousel.owl-carousel') ) {
        $(".interesting_carousel.owl-carousel").owlCarousel({
            margin: 25,
            loop: true,
            nav: false,
            dots: false,
            autoplay: false,

            responsive:{
                700:{
                    items: 1.7,
                    margin: 10
                },
                1000:{
                    items: 2.5,
                    margin: 10
                },
                1300:{
                    items: 2.8,
                },
                1500:{
                    items: 3.5,
                }
            }
        });
    }

    if ( $('.partners.owl-carousel') ) {
        $(".partners.owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            navText: ['', ''],

            responsive:{
                0:{
                },
                700:{
                    items: 3,
                },
                1000:{
                    items: 4
                }
            }
        });
    }

    if ( $('.production_carousel.owl-carousel') ) {
        $(".production_carousel.owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            navText: ['', ''],

            responsive:{
                700:{
                    items: 1,
                    margin: 30,
                },
                1000:{
                    items: 1,
                    margin: 30,
                },
                1100:{
                    items: 1.2,
                    margin: 30
                }
            }
        });
    }


    if ( $('.fixed_left') ) {
        $(window).scroll(function(){
            if($(this).scrollTop() >= 100){
                $('.fixed_left').addClass('fixed');
            }else{
                $('.fixed_left').removeClass('fixed');
            };
        });
    }

    if ($('#map')) {
        google.maps.event.addDomListener(window, 'load', init);
            function init() {
            var mapOptions = {
                zoom: 13,
                center: new google.maps.LatLng(49.868725605982405, 24.0575396366646),
                styles: [
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#e9e9e9"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f5f5f5"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 17
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 29
                                    },
                                    {
                                        "weight": 0.2
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 18
                                    }
                                ]
                            },
                            {
                                "featureType": "road.local",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f5f5f5"
                                    },
                                    {
                                        "lightness": 21
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.park",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#dedede"
                                    },
                                    {
                                        "lightness": 21
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 16
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "saturation": 36
                                    },
                                    {
                                        "color": "#333333"
                                    },
                                    {
                                        "lightness": 40
                                    }
                                ]
                            },
                            {
                                "elementType": "labels.icon",
                                "stylers": [
                                    {
                                        "visibility": "off"
                                    }
                                ]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#f2f2f2"
                                    },
                                    {
                                        "lightness": 19
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.fill",
                                "stylers": [
                                    {
                                        "color": "#fefefe"
                                    },
                                    {
                                        "lightness": 20
                                    }
                                ]
                            },
                            {
                                "featureType": "administrative",
                                "elementType": "geometry.stroke",
                                "stylers": [
                                    {
                                        "color": "#fefefe"
                                    },
                                    {
                                        "lightness": 17
                                    },
                                    {
                                        "weight": 1.2
                                    }
                                ]
                            }
                        ]

            };
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            const image = "img/map_icon_main.svg";

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(49.868725605982405, 24.0575396366646),
                map: map,
                title: 'Agrotem',
                icon: image,
            });
        }
    }
});