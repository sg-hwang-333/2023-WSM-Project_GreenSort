let loggedIn = false; 

function checkLoginStatus() {
    if (!loggedIn) {
        alert('로그인 후 다시 접속해주세요.');
        window.location.href = 'signIn.html';
    } else {
        // window.location.href = 'calendar.html';
    }
}

function loginSuccess() {
    loggedIn = true;
    alert("로그인 성공");
    window.location.href =  'calendar.html';
}