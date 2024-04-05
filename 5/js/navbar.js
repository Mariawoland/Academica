const home = document.querySelector('.home');
const gallery = document.querySelector('.gallery');
const review = document.querySelector('.review');

const main = document.getElementById("main");
const cardContainer = document.getElementById("cardContainer");
const containerGallery = document.getElementById("containerGallery");
containerGallery.style.display = "none";

gallery.addEventListener("click", function () {

    containerGallery.style.display = "flex";
    main.style.display = "none";
    home.removeAttribute("id", "active");
    gallery.setAttribute("id", "active");

});

home.addEventListener("click", function () {

    document.getElementById("containerGallery").style.display = "none";
    document.getElementById("main").style.display = "block";
    gallery.removeAttribute("id", "active");
    home.setAttribute("id", "active");

});

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