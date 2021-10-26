let getEl = element => document.querySelector(element);
let carousel = getEl('.carousel__list');

window.addEventListener('load', function () {
    new Glider(carousel, {
        slidesToShow: 1,
        dots: '.carousel__indicators',
        draggable: true,
        arrows: {
            prev: '.carousel__back',
            next: '.carousel__next'
        }
    });
})