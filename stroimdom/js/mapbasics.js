initYandexMap();
function initYandexMap(){
    var myMap;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map('map', {
            center: [44.715856, 37.773760],
            zoom: 16,
            controls: []
        },
        {suppressMapOpenBlock: true},
         {
            searchControlProvider: 'yandex#search'
        }),
        ckMed = new ymaps.Placemark([44.716361, 37.773718], {
            balloonContent: '<div class="map-placemark">' + $('#map').attr('placemark-text') + '</div>'
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(ckMed);
    }
}
