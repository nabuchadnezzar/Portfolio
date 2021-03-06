$(document).ready(function () {
    $('.header-trigger').on('click', function () {
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
    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body, html').animate({scrollTop: $(el).offset().top - 80}, 800);
        event.preventDefault();
    });
    jQuery(function ($) {
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });
    $(window).scroll(function () {
        var servHeight = $('#about').offset().top;
        if ($(this).scrollTop() > servHeight) {
            $('.header').addClass('fix');
        } else {
            $('.header').removeClass('fix');
        }
    });
    $('.intro-button, .callback-link').on('click', function () {
        var subjectValue = $(this).attr('data-location');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.callback').addClass('active');
        $('.overlay').addClass('active');
        $("html,body").css("overflow", "hidden");
    });
    $('.products-item-button').on('click', function () {
        var subjectValue = $(this).attr('data-location');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.product-name').text('');
        $('.product-name').text(subjectValue);
        $('.purchase').addClass('active');
        $('.overlay').addClass('active');
        $("html,body").css("overflow", "hidden");
    });
    $('.products-button').on('click', function () {
        var subjectValue = $(this).attr('data-location');
        $('.input-loc').val('');
        $('.input-loc').val(subjectValue);
        $('.pricelist').addClass('active');
        $('.overlay').addClass('active');
        $("html,body").css("overflow", "hidden");
    });
    $('.overlay').on('click', function () {
        $('.popup').removeClass('active');
        $('.overlay').removeClass('active');
        $("html,body").css("overflow", "auto");
    });
    $("#callback, #pricelist, #purchase").submit(function (event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST", url: $(this).attr('action'), data: form_data, success: function () {
                $('.thanks-block').addClass('active');
                $('.pricelist').removeClass('active');
                $('.purchase').removeClass('active');
                $('.callback').removeClass('active');
                $("html,body").css("overflow", "hidden");
                setTimeout(function () {
                    $('.thanks-block').removeClass('active');
                    $('.overlay').removeClass('active');
                    $('#callback, #pricelist, #purchase').trigger("reset");
                    $("html,body").css("overflow", "auto");
                }, 4000);
            }
        });
    });
});