const home = document.querySelector('.home');
const gallery = document.querySelector('.gallery');
const review = document.querySelector('.review');

const main = document.getElementById("main");
const cardContainer = document.getElementById("cardContainer");


gallery.addEventListener("mouseenter", function () {

    home.setAttribute("class", "hoverImage");
    review.setAttribute("class", "hoverImage");

});

gallery.addEventListener("mouseleave", function () {

    home.removeAttribute("class", "hoverImage");
    review.removeAttribute("class", "hoverImage");

});

home.addEventListener("mouseenter", function () {

    gallery.setAttribute("class", "hoverImage");
    review.setAttribute("class", "hoverImage");

});

home.addEventListener("mouseleave", function () {

    gallery.removeAttribute("class", "hoverImage");
    review.removeAttribute("class", "hoverImage");

});

review.addEventListener("mouseenter", function () {

    gallery.setAttribute("class", "hoverImage");
    home.setAttribute("class", "hoverImage");

});

review.addEventListener("mouseleave", function () {

    gallery.removeAttribute("class", "hoverImage");
    home.removeAttribute("class", "hoverImage");

});