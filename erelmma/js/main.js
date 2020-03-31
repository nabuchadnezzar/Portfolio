$(document).ready(function() {
    $('.header-trigger').on('click', function(){
        if ($(this).hasClass('active')) {
            $('.header-inner').removeClass('active');
            $(this).removeClass('active');
        } else {
            $('.header-inner').addClass('active');
            $(this).addClass('active');
        }
    });

    $('.move-button, .move-button-block').click( function(event){
        $('#overlay').fadeIn(400, function(){
            $('#modal').css('display', 'block').animate({opacity: 1, top: '35%'}, 200);
        });
    });

        $('#modal_close, #overlay').click( function(){
            $('#modal').animate({opacity: 0, top: '45%'}, 200, function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            }
        );
    });

    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 800);
        return false;
});


    function initMap() {
      var latLng = {lat: 55.5421851, lng: 37.5280038};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: latLng,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        title: 'ЭРЭЛ',
        styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
      });
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
      });
    }
    initMap();


});
