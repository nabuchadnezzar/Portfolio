$(document).ready(function() {
    // Мобильное меню
    $('.header-trigger').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $("html,body").css("overflow", "auto");
            $('.header-inner').removeClass('active');
        } else {
            $("html,body").css("overflow", "hidden");
            $(this).addClass('active');
            $('.header-inner').addClass('active');
        }
    });

    // Плавный скролл к якорям
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top - 120}, 800);
        event.preventDefault();
        $("html,body").css("overflow", "auto");
        setTimeout(function(){
            $('.header-trigger').removeClass('active');
            $('.header-inner').removeClass('active');
        },800)
    });

    // Маска на телефоны
    jQuery(function($){
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });

    // Высота блоков
    var mh = 0;
    $(".question-item-title").each(function () {
        var h_block = parseInt($(this).height());
        if(h_block > mh) {
            mh = h_block;
        };
    });
    $(".question-item-title").height(mh);
    $( window ).resize(function() {
        var mh = 0;
        $(".question-item-title").each(function () {
            var h_block = parseInt($(this).height());
            if(h_block > mh) {
                mh = h_block;
            };
        });
        $(".question-item-title").height(mh);
    });

    // Слайдер с сертификатами

    $('.serts-list').slick({
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.serts-arrow-left'),
        nextArrow: $('.serts-arrow-right'),
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    var maxH = 0;
    $(".sert-item-inner a").each(function () {
        var blockH = parseInt($(this).height());
        if(blockH > maxH) {
            maxH = blockH;
        };
    });
    $(".sert-item-inner a").height(maxH);
    $( window ).resize(function() {
        var maxH = 0;
        $(".sert-item-inner a").each(function () {
            var blockH = parseInt($(this).height());
            if(blockH > maxH) {
                maxH = blockH;
            };
        });
        $(".sert-item-inner a").height(maxH);
    });

    $(".wpcf7-form").find("p, br").contents().unwrap();

    $('.wpcf7').each(function(index, element){
        element.addEventListener( 'wpcf7mailsent', function( event ) {
            if ('229' == event.detail.contactFormId ) {
                yaCounter45065465.reachGoal('konsultatsiya1');
            }
            if ('230' == event.detail.contactFormId ) {
                yaCounter45065465.reachGoal('konsultatsiya2');
            }
            if ('231' == event.detail.contactFormId ) {
                yaCounter45065465.reachGoal('konsultatsiya3');
            }
            if ('232' == event.detail.contactFormId ) {
                yaCounter45065465.reachGoal('perezvonitemne');
            }
            $('.thanks-block').addClass('active');
            $('.overlay').addClass('active');
            setTimeout(function(){
                $('.thanks-block').removeClass('active');
                $('.overlay').removeClass('active');
            }, 4000);
        }, false );
    });
});
