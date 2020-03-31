initYandexMap();
function initYandexMap(){
    var myMap;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map('map', {
            center: [55.627783, 37.436391],
            zoom: 16,
            controls: []
        },
        {suppressMapOpenBlock: true},
         {
            searchControlProvider: 'yandex#search'
        }),
        consult = new ymaps.Placemark([55.627783, 37.436391], {
            balloonContent: '<div class="map-placemark">' + $('#map').attr('placemark-text') + '</div>'
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(consult);
    }
}
