$('.nav-trigger').on('click', function(){
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.nav-inner').removeClass('active');
        $('.nav-social').removeClass('active');
    } else {
        $(this).addClass('active');
        $('.nav-inner').addClass('active');
        $('.nav-social').addClass('active');
    }
});

$('.offer-row.slider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed:400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

$('.partners-row.slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});
