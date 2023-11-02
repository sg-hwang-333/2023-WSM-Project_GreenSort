const img = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar-container");

let isNavbarVisible = true; // 초기에 navbar는 보이도록 설정

img.addEventListener("click", function() {
    if (img.src.endsWith("list.png")) {
        img.src = "../image/icons/x.png";
        navbar.classList.remove("hidden-navbar");
        navbar.classList.add("show-navbar");
        isNavbarVisible = true;
    } else {
        img.src = "../image/icons/list.png";
        navbar.classList.remove("show-navbar");
        navbar.classList.add("hidden-navbar");
        isNavbarVisible = false;
    }
});