function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

$( document ).ready(function() {
    $('.header-trigger').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.header-menu').removeClass('active');

        } else {
            $(this).addClass('active');
            $('.header-menu').addClass('active');
            $(this).addClass('active');
        }
    });
});
