$(document).ready(function() {
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 800);
        return false;
    });

    var controller = new ScrollMagic.Controller();
    var scenes = [];
    var items = $('.about-item');
    items.each(function(index, element){
        var scene = new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.7,
            offset: function(){
                var offset = Number($(element).attr('data-offset'));
                return offset;
            }()
        })
        .on("enter", function (event) {
            $(event.target.triggerElement()).addClass('active')
        })
        .on("leave", function (event) {
            $(event.target.triggerElement()).removeClass('active')
        })
        scenes.push(scene);
    });
    controller.addScene(scenes);

    var controller = new ScrollMagic.Controller();
    var scenes = [];
    var items = $('.facts-item');
    items.each(function(index, element){
        var scene = new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.6,
            offset: function(){
                var offset = Number($(element).attr('data-offset'));
                return offset;
            }()
        })
        .on("enter", function (event) {
            $(event.target.triggerElement()).addClass('active')
        })
        .on("leave", function (event) {
            $(event.target.triggerElement()).removeClass('active')
        })
        scenes.push(scene);
    });
    controller.addScene(scenes);
});
