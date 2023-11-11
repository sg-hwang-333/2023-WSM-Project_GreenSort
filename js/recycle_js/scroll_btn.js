document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        // 현재 스크롤 위치
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var scrollPosition = window.innerHeight + window.scrollY;

        // 스크롤이 맨 아래로 감지되면
        if (scrollPosition === scrollHeight) {
            // .scroll-btn 클래스에 .hide 클래스를 추가
            var scrollBtn = document.querySelector('.scroll-btn');
            if (scrollBtn) {
                scrollBtn.classList.add('hide');
            }
            var gotoTopBtn = document.querySelector('.gotoTop');
            if (gotoTopBtn) {
                gotoTopBtn.classList.remove('hide');
            }
        } else {
            // 스크롤이 맨 아래가 아니면 .hide 클래스를 제거
            var scrollBtn = document.querySelector('.scroll-btn');
            if (scrollBtn) {
                scrollBtn.classList.remove('hide');
            }
            var gotoTopBtn = document.querySelector('.gotoTop');
            if (gotoTopBtn) {
                gotoTopBtn.classList.add('hide');
            }
        }
    });
});