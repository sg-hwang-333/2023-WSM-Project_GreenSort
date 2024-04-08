const img = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar-container");

let isNavbarVisible = true;

img.addEventListener("click", function() {

    let firstSrc = '..';
    if (window.location.href.includes('index')) firstSrc = '.';

    if (img.src.endsWith("list.png")) {
        img.src = `${firstSrc}/image/icons/x.png`;
        navbar.classList.remove("hidden-navbar");
        navbar.classList.add("show-navbar");
        isNavbarVisible = true;
    } else {
        img.src = `${firstSrc}/image/icons/list.png`;
        navbar.classList.remove("show-navbar");
        navbar.classList.add("hidden-navbar");
        isNavbarVisible = false;
    }
});