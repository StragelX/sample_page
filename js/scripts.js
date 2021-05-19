$( document ).ready(function() {
    var got_cookies = localStorage.getItem('got_cookies');

    if (got_cookies != 'checked') {
    //   $(".cookies_wrap").addClass('active');
    }

    $('.cookies_wrap .ok').click(function(){
        $(this).closest('.cookies_wrap').removeClass('active');
    })

    if($('.counter-number').length){
        $('.counter-number').appear(function () {
            $('.counter-number').countTo();
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
    
});