initYandexMap();

function initYandexMap() {
    var myMap;
    var coord_x = Number($('#map').attr('data-x'));
    var coord_y = Number($('#map').attr('data-y'));
    ymaps.ready(init);

    function init() {
        myMap = new ymaps.Map('map', {
            center: [coord_x, coord_y],
            zoom: 15,
            controls: []
        }, {
            suppressMapOpenBlock: true
        }, {
            searchControlProvider: 'yandex#search'
        });
        myMap.behaviors.disable('scrollZoom');
    }
}
