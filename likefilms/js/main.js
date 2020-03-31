$(document).ready(function() {
    // Плавное подъезжание
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top - 101}, 800);
        event.preventDefault();
    });
    // Маска телефонов
    jQuery(function($){
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });
    // Слайдер с видео
    $('.content-video-list').slick({
        arrows: false,
        dots: true,
        fade: true,
        centerMode: true,
        slidesToShow: 1
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        slick.$slider.find('.prev-slide').removeClass('prev-slide');
        slick.$slides.eq(nextSlide - 1).addClass('prev-slide');
        slick.$slider.find('.next-slide').removeClass('next-slide');
        slick.$slides.eq(nextSlide + 1).addClass('next-slide');
    });
    $('.content-video-list').find('.slick-active').prev('.content-block-item').addClass('prev-slide');
    $('.content-block-item').on('click', function() {
        slideIndex = $(this).index();
        $(this).closest( '.content-video-list' ).slick('slickGoTo', slideIndex, false);
    });
    // Передача позиции вызова формы
    $('.portfolio-button, .header-phone-link').on('click', function() {
        var subjectValue = $(this).attr('data-location');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.callback').addClass('active');
        $('.overlay').addClass('active');
        $("html,body").css("overflow","hidden");
    });
    $('.service-item-button').on('click', function() {
        var subjectValue = $(this).attr('data-location');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.product-name').text('');
        $('.product-name').text(subjectValue);
        $('.purchase').addClass('active');
        $('.overlay').addClass('active');
        $("html,body").css("overflow","hidden");
    });
    // Закрытие форм
    $('.overlay').on('click', function() {
        $('.popup').removeClass('active');
        $('.overlay').removeClass('active');
        $("html,body").css("overflow","auto");
    });
    // Отправка форм
    $("#callback, #purchase, #question-form").submit(function (event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: form_data,
            success: function () {
                $('.thanks-block').addClass('active');
                if (!($('.overlay').hasClass('active'))) {
                    $('.overlay').addClass('active');
                }
                $('.purchase').removeClass('active');
                $('.callback').removeClass('active');
                $("html,body").css("overflow","hidden");
                setTimeout(function(){
                    $('.thanks-block').removeClass('active');
                    $('.overlay').removeClass('active');
                    $('#callback, #purchase, #question-form').trigger("reset");
                    $("html,body").css("overflow","auto");
                }, 4000);
            }
        });
    });
    // Анимации появления блоков
    var controller = new ScrollMagic.Controller();
    var scenes = [];
    var items = $('.section-title, .about-inner, .portfolio-inner, .advantages-list, .services-list, .insta-slider-inner, .question-form-section');
    items.each(function(index, element){
        var scene = new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.75,
            offset: 0
        })
        .on("enter", function (event) {
            $(event.target.triggerElement()).addClass('active');
        })
        .on("leave", function (event) {
            $(event.target.triggerElement()).removeClass('active')
        })
        scenes.push(scene);
        // scene.addIndicators();
    });
    controller.addScene(scenes);
    // Контент из инстаграмма
    var feed = new Instafeed({
        get: 'user',
        userId: '1111874962',
        accessToken: '1111874962.1677ed0.e8e743271fe04b0c9ea8973ef6627a10',
        imageTemplate: '<div class="insta-slider-item"><a class="insta-link" href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>',
        imageResolution: 'low-resolution',
        onSuccess: function() {
            $('.insta-slider-list').slick({
                arrows: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                prevArrow: $('.insta-arrow .icon-left'),
                nextArrow: $('.insta-arrow .icon-right'),
                infinite: true,
                responsive: [
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        }
    });
    feed.run();
});
