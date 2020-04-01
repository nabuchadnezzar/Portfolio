$(document).ready(function () {
    $('.header-trigger').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header-nav').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.header-nav').addClass('active');
        }
    });
    $('.anchor-link').on('click', function () {
        var el = $(this).attr('href');
        setMouseFlag();
        $('html, body').animate({scrollTop: $(el).offset().top}, 600);
        return false;
    });
    $('#powerbank-form-tel').mask("+7(999) 999-99-99");
    $('#mobserv-form-tel').mask("+7(999) 999-99-99");
    $('#partnership-form-tel').mask("+7(999) 999-99-99");
    $('#team-form-tel').mask("+7(999) 999-99-99");
    $('.map-btn').on('click', function () {
        $('.map-more').addClass('active');
    });
    $('.map-more-close').on('click', function () {
        $('.map-more').removeClass('active');
    });
    $('.team-list-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
        responsive: [{breakpoint: 1024, settings: {slidesToShow: 1}}]
    });
    $('.reviews-list-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '.reviews-slider.arrow-left',
        nextArrow: '.reviews-slider.arrow-right',
        responsive: [{breakpoint: 1024, settings: {slidesToShow: 1, arrows: true}}]
    });
    if ($(document).width() > '1024') {
        initScrollMagic();
        $(".section-inner").each(function (index, element) {
            $(element).mCustomScrollbar({autoHideScrollbar: true, scrollbarPosition: "outside", scrollInertia: 500});
        });
    }
});