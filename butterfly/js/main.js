$(document).ready(function() {

    $('.modal-button').on('click', function() {
        $('.modal-form').get(0).reset();
        var subjectValue = $(this).attr('data-location');
        $('.modal-form .input-loc').val('');
        $('.modal-form .input-loc').val(subjectValue);
        $("html,body").css("overflow","hidden");
        $('.overlay').addClass('active');
        if ($(this).hasClass('single-button')) {
            $('.single-form').addClass('active');
        } else if ($(this).hasClass('double-button')) {
            $('.double-form').addClass('active');
        } else {
            $('.multiple-form').addClass('active');
        }
    });

    $('.overlay, .modal-close').on('click', function() {
        $('.modal-container').removeClass('active');
        $('.overlay').removeClass('active');
        $("html,body").css("overflow","auto");
    });
    jQuery(function($){
        $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });

});
