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

    $('.speech-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.speech-nav-slider'
    });
    $('.speech-nav-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.speech-slider',
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('a[href^="#"]').click(function(){
        $('.header-trigger').removeClass('active');
        $('.header-nav').removeClass('active');
        $('.header-inner').removeClass('active');
        var el = $(this).attr('href');
        if ($('body').width() >= '943') {
            $('body, html').animate({
                scrollTop: $(el).offset().top}, 800);
        } else {
            $('body, html').animate({
                scrollTop: $(el).offset().top - $('#header').outerHeight()}, 1200);
        }
        return false;
    });
    $('.intro-button, .forwho-item-button, .variants-item-button, .publication-request-button').on('click', function() {
        var subjectValue = $(this).attr('data-location');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
    });

    $('.intro-button, .variants-item-button, .forwho-item-button, .publication-request-button').on('click', function() {
        $('.contact-form').addClass('active');
        $('.overlay').addClass('active');
        $("html,body").css("overflow","hidden");
    });
    $('.overlay').on('click', function() {
        $(this).removeClass('active');
        $('.contact-form').removeClass('active');
        $("html,body").css("overflow","auto");
    });

    $("#intro-form, #app-form").submit(function (event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: form_data,
            success: function () {
                $('.callback-text').addClass('active');
                $('.contact-form').removeClass('active');
                if (!($('.overlay').hasClass('active'))) {
                    $('.overlay').addClass('active');
                };
                $('.overlay').addClass('active');
                setTimeout(function(){
                    $('.callback-text').removeClass('active');
                    $('.overlay').removeClass('active');
                    $("html,body").css("overflow","auto");
                    $('#intro-form, #app-form').trigger("reset");
                }, 4000);
            }
        });
    });

    var controller = new ScrollMagic.Controller();
    var scenes = [];
    var items = $('.section-title, .list-item, .trainer-inner-photo, .publication-list-item, .clients-list-item, .variants-list-item');
    items.each(function(index, element){
        var scene = new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.8,
            offset: function(){
                var offset = Number($(element).attr('data-offset'));
                return offset;
            }()
        })
        .on("enter", function (event) {
            $(event.target.triggerElement()).addClass('active')
        })
        .on("leave", function (event) {
            $(event.target.triggerElement()).removeClass('active')
        })
        scenes.push(scene);
        // scene.addIndicators()
    });
    controller.addScene(scenes);

    jQuery(function($){
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });

});
