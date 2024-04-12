document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        let isScrollAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight-150;
        // 스크롤 맨 아래로 감지
        if (isScrollAtBottom) {
            let scrollBtn = document.querySelector('.scroll-btn');
            if (scrollBtn) {
                scrollBtn.classList.add('hide');
            }
        } else {
            let scrollBtn = document.querySelector('.scroll-btn');
            if (scrollBtn) {
                scrollBtn.classList.remove('hide');
            }
        }
    });
});