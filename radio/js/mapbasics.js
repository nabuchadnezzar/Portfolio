initYandexMap();function initYandexMap(){var myMap;ymaps.ready(init);function init(){myMap=new ymaps.Map('map',{center:[51.765351,36.214310],zoom:16,controls:[]},{suppressMapOpenBlock:true},{searchControlProvider:'yandex#search'}),consult=new ymaps.Placemark([51.765351,36.211601],{balloonContent:'<div class="map-placemark">'+$('#map').attr('placemark-text')+'</div>'});myMap.behaviors.disable('scrollZoom');myMap.geoObjects.add(consult);}}