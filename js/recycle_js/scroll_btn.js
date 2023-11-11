document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var isScrollAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight-150;
        // 스크롤이 맨 아래로 감지되면
        if (isScrollAtBottom) {
            // .scroll-btn 클래스에 .hide 클래스를 추가
            var scrollBtn = document.querySelector('.scroll-btn');
            if (scrollBtn) {
                scrollBtn.classList.add('hide');
            }
        } else {
            // 스크롤이 맨 아래가 아니면 .hide 클래스를 제거
            var scrollBtn = document.querySelector('.scroll-btn');
            if (scrollBtn) {
                scrollBtn.classList.remove('hide');
            }
        }
    });
});