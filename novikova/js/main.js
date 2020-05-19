$(document).ready(function() {

    // Мобильное меню
    $('.header-trigger').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.header *').removeClass('active');
            $("html,body").css("overflow", "auto");
        } else {
            $(this).addClass('active');
            $('.header-menu').addClass('active');
            $('.header-button').addClass('active');
            $('.header-subcontent').addClass('active');
            $("html,body").css("overflow", "hidden");
        }
    });

    if ($(window).width() < '1024') {
        $('.menu-item-has-children').children('a').append('<div class="icon-down next-sub"></div>');
    }

    bodyH = $('body').height();
    $('.header-menu').css('max-height', bodyH);

    $('.next-sub').on('click', function(){
        var underLi = $(this).closest('.menu-item-has-children');
        var subMenu = underLi.children('.sub-menu');
        var subLink = underLi.children('a');
        if (subMenu.hasClass('active')){
            $(this).removeClass('active');
            subMenu.removeClass('active');
            subLink.removeClass('active');
            subMenu.slideToggle('400');
        } else {
            $(this).addClass('active');
            subMenu.addClass('active');
            subLink.addClass('active');
            subMenu.slideToggle('400');
        }
        event.preventDefault();
    });


    // Плавный скролл к якорям
    // $('a[href^="#"]').click(function() {
    //     var el = $(this).attr('href');
    //     $('body, html').animate({
    //         scrollTop: $(el).offset().top - 80
    //     }, 800);
    //     setTimeout(function() {
    //         $('.header-trigger').removeClass('active');
    //         $('.header-menu').removeClass('active');
    //         $('.header-button').removeClass('active');
    //         $("html,body").css("overflow", "auto");
    //     }, 800);
    //
    //     event.preventDefault();
    // });

    // Высота блоков в интро

    var mh = 0;
    $(".intro-item-container").each(function () {
        var h_block = parseInt($(this).height());
        if(h_block > mh) {
            mh = h_block;
        };
    });
    $(".intro-item-container").height(mh);
    $( window ).resize(function() {
        var mh = 0;
        $(".intro-item-container").each(function () {
            var h_block = parseInt($(this).height());
            if(h_block > mh) {
                mh = h_block;
            };
        });
        $(".question-item-title").height(mh);
    });

    // Инициализация слайдеров

    $('.intro-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.arrow-left.intro-arrow'),
        nextArrow: $('.arrow-right.intro-arrow'),
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        speed: 500
    });

    $('.works-list').slick({
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.works-prev'),
        nextArrow: $('.works-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                slidesToShow: 1
                }
            }
        ]
    });

    $('.projects-list').slick({
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.projects-prev'),
        nextArrow: $('.projects-next'),
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                slidesToShow: 5
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1
                }
            }
        ]
    });

    // Прилипший по цетру блочок на страницах категории

    var bHeight = $('.subpage-container.subarch').height();
    var wHeight = $(window).height();
    var elHeight = $('.subpage-info-how').outerHeight(true);
    var appHeight = ((wHeight - elHeight)/2);
    var trigHeight = (appHeight / wHeight);
    var durHeight = (bHeight - wHeight + appHeight);
    if($(window).width() >= '640') {
        var controller = new ScrollMagic.Controller();
        $(function () {
            var scene = new ScrollMagic.Scene({
                triggerElement: ".subpage-container.subarch",
                duration: durHeight,
                triggerHook: trigHeight
            })
            .setPin(".subpage-info-how")
            // .addIndicators({name: "1 (duration: 0)"})
            .addTo(controller);
        });

    }

    // Маска телефонов

    jQuery(function($){
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });

    // Вызов модального окна

    $('.modal-button').on('click', function() {
        var subjectValue = $(this).attr('data-loc');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.modal-form').addClass('active');
        $('.overlay').addClass('active');
        $('.header *').removeClass('active');
        $('body').addClass('open-modal');
        $("html,body").css("overflow","hidden");
    });

    $('.overlay, .modal-close').on('click', function() {
        $('.modal-form').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('open-modal');
        $("html,body").css("overflow","auto");
    });

    // Добавление точек в списке
    $('.points p').prepend('<span></span>');

    // Отправка форм

    // Для файла post.php
    $("#static-form, #modal-form").submit(function(event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: form_data,
            success: function() {
                $('.thank-block').addClass('active');
                if (!($('.overlay').hasClass('active'))) {
                    $('.overlay').addClass('active');
                }
                $('.modal-form').removeClass('active');
                setTimeout(function(){
                    $('.thank-block').removeClass('active');
                    $('.overlay').removeClass('active');
                    $('body').removeClass('open-modal');
                    $("html,body").css("overflow","auto");
                }, 4000);
            }
        });
    });

    // Для контакт форм 7
    $('.wpcf7').each(function(index, element){
        element.addEventListener( 'wpcf7mailsent', function( event ) {
            $('.thank-block').addClass('active');
            if (!($('.overlay').hasClass('active'))) {
                $('.overlay').addClass('active');
            }
            $('.modal-form').removeClass('active');
            setTimeout(function(){
                $('.thank-block').removeClass('active');
                $('.overlay').removeClass('active');
                $('body').removeClass('open-modal');
                $("html,body").css("overflow","auto");
            }, 4000);
        }, false );
    });

    // 11 iOS bugfix
    var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3|OS 11_1/.test(ua);
    if ( iOS && iOS11 ) {
        // Add CSS class to body
        $("body").addClass("iosBugFixCaret");
    }
});
