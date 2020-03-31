initYandexMap();
function initYandexMap(){
    var myMap;
    ymaps.ready(init);
    function init () {
        myMap = new ymaps.Map('map', {
            center: [55.164942, 61.394289],
            zoom: 17,
            controls: []
        },
        {suppressMapOpenBlock: true},
         {
            searchControlProvider: 'yandex#search'
        });
        myMap.behaviors.disable('scrollZoom');
    }
}
