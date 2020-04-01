$(document).ready(function() {
    var innerWidth = $('body').innerWidth();
    // Мобильное меню
    $('.header-trigger').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.header-inner').removeClass('active');
            $("html,body").css("overflow", "auto");
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
            $('.header-inner').addClass('active');
        }
    });

    // Плавный скролл к якорям
    $('a[href^="#"]').click(function() {
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top - 80
        }, 800);
        setTimeout(function() {
            $('.header-trigger').removeClass('active');
            $('.header-inner').removeClass('active');
            $("html,body").css("overflow", "auto");
        }, 800);

        event.preventDefault();
    });

    // Размер шрифта на заднем плане в команде
    var fs = $(window).width() * 0.183;
    $('.team-title-bg').css('font-size', fs + 'px');
    $(window).resize(function() {
        var fs = $(window).width() * 0.183;
        $('.team-title-bg').css('font-size', fs + 'px');
    });

    // Отзывы
    $('.reviews-item-more').on('click', function() {
        var fRev = $(this).closest('.reviews-item').find('.reviews-item-full');
        fRev.addClass('active');
        var fRevP = fRev.position();
        $('.overlay').addClass('active');
        $("html,body").css("overflow", "hidden");
        if ($(window).width() > '1024') {
            $("html ").css("margin-right", "17px");
        }

    });

    $('.overlay, .reviews-item-close, .reviews-inner-button').on('click', function() {
        $('.overlay').removeClass('active');
        $('.reviews-item-full').removeClass('active');
        setTimeout(function() {
            $("html,body").css("overflow","auto");
            $("html ").css("margin-right", "0");
        },400);
    });

    // Сертификаты
    $('.docs-item-title').on('click', function(){
        $(this).closest('.docs-item').find('.docs-item-block').addClass('active');
        $('.overlay').addClass('active');
        $("html,body").css("overflow", "hidden");
        if ($(window).width() > '1024') {
            $("html ").css("margin-right", "17px");
        }
    });

    $('.overlay, .docs-item-close, .docs-block-button').on('click', function() {
        $('.overlay').removeClass('active');
        $('.docs-item-block').removeClass('active');
        setTimeout(function() {
            $("html,body").css("overflow","auto");
            $("html ").css("margin-right", "0");
        },400);
    });

    $('.arrow-prev').on('click', function() {
        $('.docs-item-block').removeClass('active');
        if ($(this).closest('.docs-item').prev().length > 0) {
            $(this).closest('.docs-item').prev().find('.docs-item-block').addClass('active');
        } else {
            $('.docs-item').last().find('.docs-item-block').addClass('active');
        }
    });
    $('.arrow-next').on('click', function() {
        $('.docs-item-block').removeClass('active');
        if ($(this).closest('.docs-item').next().length > 0) {
            $(this).closest('.docs-item').next().find('.docs-item-block').addClass('active');
        } else {
            $('.docs-item').first().find('.docs-item-block').addClass('active');
        }
    });

    // Маска для телефона
    jQuery(function($){
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });

    // Вызов формы
    $('.modal-button').on('click', function() {
        var subjectValue = $(this).attr('data-loc');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.modal-form').addClass('active');
        $('.overlay').addClass('active');
        $('.header *').removeClass('active');
        $('body').addClass('open-modal');
        $("html,body").css("overflow", "hidden");
        if ($(window).width() > '1024') {
            $("html ").css("margin-right", "17px");
        }
    });

    $('.overlay, .modal-close, .button-thanks').on('click', function() {
        $('.modal').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('open-modal');
        setTimeout(function() {
            $("html,body").css("overflow","auto");
            $("html ").css("margin-right", "0");
        },400);
    });

    // Отправка формы

    $("#form").submit(function(event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: form_data,
            success: function() {
                $('.modal-thanks').addClass('active');
                $('.modal-form').removeClass('active');
                setTimeout(function(){
                    $('.modal-thanks').removeClass('active');
                    $('.overlay').removeClass('active');
                    $('body').removeClass('open-modal');
                    $("html,body").css("overflow","auto");
                }, 4000);
            }
        });
    });

    // Исправление модальной формы для iOS 11
    var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3|OS 11_1/.test(ua);
    if ( iOS && iOS11 ) {
        $("body").addClass("iosBugFixCaret");
    }

});
