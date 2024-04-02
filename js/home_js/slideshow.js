var slideIndex = 1;

showSlides(slideIndex);

// 이전/다음 버튼 클릭 시 슬라이드 변경
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// 현재 슬라이드 표시
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 슬라이드 표시 함수
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// 자동으로 슬라이드 넘기기
setInterval(function () {
    plusSlides(1);
}, 5000);

