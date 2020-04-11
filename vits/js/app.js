$(document).ready(function(){
    // mobile menu
    $('.header-trigger').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.header-inner').removeClass('active');
            $("html,body").css("overflow", "auto");
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('.header-inner').addClass('active');
            $("html,body").css("overflow", "hidden");
        }
    });

    // anchor scrolling
    $('a[href^="#"]').click(function() {
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top
        }, 800);
        setTimeout(function() {
            $('.header-trigger').removeClass('active');
            $('.header-inner').removeClass('active');
            $("html,body").css("overflow", "auto");
        }, 800);

        event.preventDefault();
    });

    // clients slider

    $('.clients-list').slick({
        dots: false,
        arrows:true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // reviews slider
    $('.reviews-list').slick({
        dots: true,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
    });

    // telephone mask
    jQuery(function($){
        $('input[type="tel"]').mask("+38 (999) 999 99 99");
    });

    // form calling

    $('.modal-button').on('click', function() {
        if ($(this).hasClass('email')) {
            var subjectValue = $(this).attr('data-loc');
            $('.input-loc').val('');
            $('.input-loc').val(subjectValue);
            $('.modal-block.email').addClass('active');
            $('.overlay').addClass('active');
            $('.header *').removeClass('active');
            $('body').addClass('open-modal');
            $("html,body").css("overflow", "hidden");
        } else {
            var subjectValue = $(this).attr('data-loc');
            $('.input-loc').val('');
            $('.input-loc').val(subjectValue);
            $('.modal-block.phone').addClass('active');
            $('.overlay').addClass('active');
            $('.header *').removeClass('active');
            $('body').addClass('open-modal');
            $("html,body").css("overflow", "hidden");
        }

    });

    $('.overlay, .modal-close, .button-thanks').on('click', function() {
        $('.modal-block').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('open-modal');
        $("html,body").css("overflow","auto");
    });
});

