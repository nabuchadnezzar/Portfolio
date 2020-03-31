$(document).ready(function() {
    $('.header-trigger').on('click', function(){
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.nav').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.nav').addClass('active');
        }
    });
    $('.nav-menu a').on('click', function(){
            $('.header-trigger').removeClass('active');
            $('.nav').removeClass('active');
    });
    $(".intro-slider").slick({
        dots: false,
        infinite: true,
        speed:400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="icon-back" type="button" name="button"></button>',
        nextArrow: '<button class="icon-next" type="button" name="button"></button>'
    });
    $(".ideology-slider").slick({
        dots: false,
        infinite: false,
        speed:400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        touchMove: false,
        swipe: false,
        adaptiveHeight: true
    });
    $(".about-slider").slick({
        dots: false,
        infinite: false,
        speed:400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        touchMove: false,
        swipe: false,
        adaptiveHeight: true,
        initialSlide: 1
    });


    function initScrollTo(){
    	var links = '.nav-menu a';
    	var offset = 0;
        var body_class = '';
    	$(links).on('click', function(event){
    		event.preventDefault();
    		var element = $($(this).attr('href'));
    		if (element.length) {
    			$(this).parent('li').addClass('active').siblings('li').removeClass('active');
    			$('html, body').animate({scrollTop: element.offset().top - offset}, 600);
    		}
    	});
    	$(window).scroll(function(){
    		$(links).each(function(){
    			var element = $($(this).attr('href'));
    			var elementTop = element.offset().top;
    			var elementBottom = element.offset().top + element.outerHeight();
    			var winTop = $(window).scrollTop();
    			var winHeight = $(window).height();
                if (elementTop <= winTop && elementBottom > winTop) {
                    setBodyClass('current-slide-'+ element.index());
                }else{
                    setBodyClass('current-slide-home');
                }
    			if (elementTop <= winTop + winHeight/2  && elementBottom > winTop + winHeight/2) {
    				$(this).parent('li').addClass('active').siblings('li').removeClass('active');
                    return false;
    			}else{
                    $(this).parent('li').removeClass('active').siblings('li').removeClass('active');
                }

    		});
    	});
        function setBodyClass(current_class){
            $('body').removeClass(body_class);
            body_class = current_class;
            $('body').addClass(body_class);
        }
    }
    initScrollTo();
    $(".header-logo").on("click","a", function (event) {
       var element = $(this.hash);
       if (element.length){
           event.preventDefault();
           var top = $(element).offset().top;
           $('body,html').animate({scrollTop: top}, 500);
       };
   });
});
