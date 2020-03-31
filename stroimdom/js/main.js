$(document).ready(function() {
    // мобильное меню
    $('.header-trigger').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header-nav').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.header-nav').addClass('active');
        }
    });
    // плавная навигация
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top - 130}, 800);
        setTimeout(function() {
            $('.header-trigger').removeClass('active');
            $('.header-nav').removeClass('active');
        },800);
        event.preventDefault();
    });
    // попапы услуг
    $('.services-list-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.services-prev-arrow'),
        nextArrow: $('.services-next-arrow'),
        dots: false,
        fade: true,
        infinite: true
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.services-preview-item').removeClass('active').eq(nextSlide).addClass('active');
    });
    $('.services-preview-item').on('click', function() {
        $("html,body").css("overflow","hidden");
        $('.overlay').addClass('active');
        $('.services-list').addClass('active');
        $('.services-list-inner').slick('slickGoTo', $(this).index());
        $('.services-preview-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.services-list-close, .overlay').on('click', function() {
        $('.overlay').removeClass('active');
        $('.services-list').removeClass('active');
        $("html,body").css("overflow","auto");
    });

    if ($(window).width() >= '1153') {
        var servH = 0;
        $(".services-item-inner").each(function () {
            var h_serv = parseInt($(this).height());
            if(h_serv > servH) {
                servH = h_serv;
            };
        });
        $(".services-item-inner").height(servH);
        $('.services-list').height(servH);
        $( window ).resize(function() {
            var servH = 0;
            $(".services-item-inner").each(function () {
                var h_serv = parseInt($(this).height());
                if(h_serv > servH) {
                    servH = h_serv;
                };
            });
            $(".services-item-inner").height(servH);
            $('.services-list').height(servH);
        });
    }
    // инициализация fancybox
    $('[data-fancybox]').fancybox({
     });
     // слайдер с работами
     $('.works-list').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
         fade: true,
         infinite: true,
         adaptiveHeight: true
     });
     $('.works-gallery-list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        touchMove: false,
        draggable: false,
    });
     $('.works-tab-item').eq(0).addClass('active');
    $('.works-tab-item').on('click', function() {
        $('.works-gallery-list').slick('slickGoTo', $(this).index());
        $('.works-tab-item').removeClass('active');
        $(this).addClass('active');
    });
    // слайдер с отзывами
    $('.reviews-list-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        infinite: true,
        adaptiveHeight: true,
        prevArrow: $('.reviews-arrow' + '.prev'),
        nextArrow: $('.reviews-arrow' + '.next')
    });

    jQuery(function($){
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });

    $('.callback-button').on('click', function() {
        var subjectValue = $(this).attr('data-location');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.services-list').removeClass('active');
        $('.popup.form').addClass('active');
        $('.overlay').addClass('active');
        $("html,body").css("overflow","hidden");
    });
    $('.overlay, .popup-close').on('click', function() {
        $('.overlay').removeClass('active');
        $('.popup').removeClass('active');
        $("html,body").css("overflow","auto");
    });

    $('.works-item').each(function() {
        var itemId = $(this).index();
        $(this).find($('.works-gallery-item')).attr('data-fancybox', itemId);
    });

    $(".wpcf7-form").find("p, br").contents().unwrap();

    $('.wpcf7').each(function(index, element){
        element.addEventListener( 'wpcf7mailsent', function( event ) {
            $('.popup.thanks').addClass('active');
            $('.overlay').addClass('active');
            $('.popup.form').removeClass('active');
            setTimeout(function(){
                $('.popup.thanks').removeClass('active');
                $('.overlay').removeClass('active');
                $("html,body").css("overflow","auto");
            }, 4000);
        }, false );
    });
});
