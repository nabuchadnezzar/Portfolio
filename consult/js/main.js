$(document).ready(function() {
    $('.header-trigger').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header-nav').removeClass('active');
            $('.header-inner').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.header-nav').addClass('active');
            $('.header-inner').addClass('active');
        }
    });

    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top}, 800);
        event.preventDefault();
    });

    $('.intro-inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: false,
        arrows: true,
        fade: true,
        speed: 500,
    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('body, html').animate({
            scrollTop: $('#intro').offset().top
        }, 200);
    });
    $('.review-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: false,
        arrows: true,
        adaptiveHeight:true,
        speed: 500
    });

    // $('.why-content-list').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     prevArrow: $('.tabs-prev-arrow'),
    //     nextArrow: $('.tabs-next-arrow'),
    //     fade: true,
    //     dots: false,
    //     touchMove: true,
    //     draggable: true,
    //     adaptiveHeight: true
    // }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    //     if ($(window).width() >= '943') {
    //         $('body, html').animate({
    //             scrollTop: $('#why').offset().top
    //         }, 400);
    //     } else if ($(window).width() >= '623' && $(window).width() < '943' ) {
    //         $('body, html').animate({
    //             scrollTop: $('#why').offset().top - 65
    //         }, 400);
    //     } else {
    //         $('body, html').animate({
    //             scrollTop: $('.why-tabs').offset().top - 66
    //         }, 400);
    //     }
    // }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     $('.why-tabs-item').removeClass('active').eq(nextSlide).addClass('active');
    // });
    //
    // $('.why-tabs-item').eq(0).addClass('active');
    // $('.why-tabs-item').on('click', function() {
    //     $('.why-content-list').slick('slickGoTo', $(this).index());
    //     $('.why-tabs-item').removeClass('active');
    //     $(this).addClass('active');
    // });

    if($(window).width() >= '623') {
        var mh = 0;
        $(".faq-item-quest").each(function () {
            var h_block = parseInt($(this).height());
            if(h_block > mh) {
                mh = h_block;
            };
        });
        $(".faq-item-quest").height(mh);
        $( window ).resize(function() {
            var mh = 0;
            $(".faq-item-quest").each(function () {
                var h_block = parseInt($(this).height());
                if(h_block > mh) {
                    mh = h_block;
                };
            });
            $(".faq-item-quest").height(mh);
        });
    }

    $('.faq-list-item').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).children('.faq-item-answ').slideUp('400');
        } else {
            $('.faq-list-item').removeClass('active');
            $('.faq-list-item').children('.faq-item-answ').slideUp('400');
            $(this).addClass('active');
            $(this).children('.faq-item-answ').slideDown('400');
        }
    });

    jQuery(function($){
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });

    $("#question-form, #consult-form, #modal-form, #modal-form-link").submit(function (event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: form_data,
            success: function () {
                $('.callback').addClass('active');
                if (!($('.overlay').hasClass('active'))) {
                    $('.overlay').addClass('active');
                }
                $('.modal-form').removeClass('active');
                $('.modal-form-link').removeClass('active');
                $("html,body").css("overflow","hidden");
                setTimeout(function(){
                    $('.callback').removeClass('active');
                    $('.overlay').removeClass('active');
                    $('#question-form, #consult-form, #modal-form, #modal-form-link').trigger("reset");
                    $("html,body").css("overflow","auto");
                }, 4000);
            }
        });
    });

    $('.modal-button').on('click', function() {
        var subjectValue = $(this).attr('data-location');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.modal-form').addClass('active');
        $('.overlay').addClass('active');
    });
    $('.modal-button-link').on('click', function() {
        var subjectValue = $(this).attr('data-location');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.modal-form-link').addClass('active');
        $('.overlay').addClass('active');
    });

    $('.overlay, .modal-close').on('click', function() {
        $('.modal-form').removeClass('active');
        $('.modal-form-link').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $(window).scroll(function() {
		var servHeight =$('#services').offset().top;
		if ($(this).scrollTop() > servHeight) {
			$('.header').addClass('active');
		}else{
			$('.header').removeClass('active');
		}
    });

});
