$(document).ready(function () {

    $('.portfolio-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 800,
        asNavFor: '.portfolio-thumbs'
    });

    $('.portfolio-thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.portfolio-main',
        focusOnSelect: true,
        arrows: false
    });

});
