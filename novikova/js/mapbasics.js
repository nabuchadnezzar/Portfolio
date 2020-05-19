initYandexMap();
function initYandexMap(){
    var myMap;
    var coord_x = Number($('#map').attr('data-x'));
    var coord_y = Number($('#map').attr('data-y'));
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map('map', {
            center: [coord_x, coord_y],
            zoom: 16,
            controls: []
        },
        {suppressMapOpenBlock: true},
         {
            searchControlProvider: 'yandex#search'
        }),
        MN = new ymaps.Placemark([59.965205, 30.288146], {
            balloonContent: '<div class="map-placemark">' + $('#map').attr('placemark-text') + '</div>'
        });
        myMap.behaviors.disable('drag');
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(MN);
        map.behaviors.disable('drag');
    }
}
