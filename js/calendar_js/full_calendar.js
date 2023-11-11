(function () {
    $(function () {      // calendar element 취득      
        var calendarEl = $('#calendar')[0];      // full-calendar 생성하기      
        var calendar = new FullCalendar.Calendar(
            calendarEl, {
            height: '700px', // calendar 높이 설정        
            expandRows: true, // 화면에 맞게 높이 재설정        
            slotMinTime: '06:00', // Day 캘린더에서 시작 시간        
            slotMaxTime: '20:00', // Day 캘린더에서 종료 시간        
            // 해더에 표시할 툴바        
            headerToolbar: {
                left: 'prev,today,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            initialView: 'dayGridMonth',
            navLinks: true, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크   
            editable: true, // 수정 가능?        
            selectable: true, // 달력 일자 드래그 설정가능        
            nowIndicator: true, // 현재 시간 마크        
            dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
            locale: 'ko', // 한국어 설정        
            select: function (arg) {
                // 캘린더에서 드래그로 이벤트를 생성할 수 있다.          
                var title = prompt('일정을 입력하세요');
                if (title) {
                    calendar.addEvent({
                        title: title,
                        start: arg.start,
                        end: arg.end,
                        allDay: arg.allDay
                    })
                }
                calendar.unselect()
            }
        });      // 캘린더 랜더링      
        calendar.render();
    });
})();