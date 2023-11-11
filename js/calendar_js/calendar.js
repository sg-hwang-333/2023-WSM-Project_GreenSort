// 기본적으로는 이번 달
// 현재 날짜, 시각 객체 생성
let now = new Date();
// 현재 년
let year = now.getFullYear();
// 현재 월
let month = now.getMonth() + 1;
// 현재 일
let date = now.getDate();


const datesContainerDiv = document.querySelectorAll(".dates.date-container")[0];
const monthDiv = document.getElementsByClassName('month')[0];
const yearDiv = document.getElementsByClassName('year')[0];


// 달력 만들자
const setCalendar = (year, month) => {
    let engMonth = "";

    switch (month) {
        case 1: engMonth = "January"; break;
        case 2: engMonth = "February"; break;
        case 3: engMonth = "March"; break;
        case 4: engMonth = "April"; break;
        case 5: engMonth = "May"; break;
        case 6: engMonth = "June"; break;
        case 7: engMonth = "July"; break;
        case 8: engMonth = "August"; break;
        case 9: engMonth = "September"; break;
        case 10: engMonth = "October"; break;
        case 11: engMonth = "November"; break;
        case 12: engMonth = "December"; break;
    }

    monthDiv.innerHTML = `${engMonth}`;
    yearDiv.innerHTML = `${year}`;


    // 해당 월의 1일이 무슨 요일
    let firstDateDay = new Date(year, month-1, 1).getDay();
    // 해당 월의 마지막 날짜가 며칠
    let lastDateDay = new Date(year, month, 0).getDate();

    // 원래 있던 달력의 .date.item clear
    datesContainerDiv.replaceChildren();

    // date.item{$} * lastDate
    // for 1~lastDate
    for (let date=1; date <= lastDateDay; date++) {
        let dateItemDiv = document.createElement("div");  // <div></div>
        dateItemDiv.classList.add("date");                // <div class='date'></div>
        dateItemDiv.classList.add("Witem");                // <div class='date item'></div>
        dateItemDiv.innerHTML = date;                     // <div class='date item'>date</div>
        // HTML에 .dates.container 자식으로 넣자
        datesContainerDiv.appendChild(dateItemDiv);
    }

    // 1일을 firstDateDay로 옮기자
    // .dates.container의 자식 중 첫째자식(1일) style grid-column-start: 6;
    let firstDateDiv = datesContainerDiv.firstElementChild;
    // CSS { grid-column-start: fristDateDay + 1; }
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

    // 토: 파랑
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.Witem:nth-child(7n+${7-firstDateDay})`);
    for (let dateItem of saturdayDivs) {
        dateItem.style.color="var(--bs-blue)";
    // 일: 빨강
    }
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.Witem:nth-child(7n+${(7-firstDateDay +1) % 7})`);
    for (let dateItem of sundayDivs) {
        dateItem.style.color="var(--bs-red)";
    }

}

setCalendar(year, month);


// <: 이전 달
const leftDiv = document.getElementsByClassName('left')[0];
leftDiv.onclick = () => {
    month--;
    if (month == 0) {
        year--;
        month = 12;
    }
    console.log(year, month);
    setCalendar(year, month);
};

// >: 이후 달
const rightDiv = document.getElementsByClassName('right')[0];
rightDiv.onclick = () => {
    month++;
    if (month == 13) {
        year++;
        month = 1;
    }
    setCalendar(year, month);
};