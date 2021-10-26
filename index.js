let getEl = (element) => document.querySelector(element);
let carousel = getEl(".carousel__list");
let menuIcon = getEl("#menu-icon-image");
let close = getEl("#close-icon");
let menu = getEl(".menu-wrapper");
let links = document.querySelectorAll('a');
console.log(links);

window.addEventListener("load", function () {
  new Glider(carousel, {
    slidesToShow: 1,
    dots: ".carousel__indicators",
    draggable: true,
    arrows: {
      prev: ".carousel__back",
      next: ".carousel__next",
    },
  });
});

menuIcon.addEventListener("click", () => {
    menu.classList.toggle('menu-active');
});
close.addEventListener("click", () => {
    menu.classList.toggle('menu-active');
});

links.forEach( e =>{
    e.addEventListener("click", () => {
        menu.classList.remove('menu-active');
    });
})