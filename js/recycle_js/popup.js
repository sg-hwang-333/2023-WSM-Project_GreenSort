import json from '../../json/popup.json';

let target = document.querySelectorAll('.btn_open');
let popCloseBtn = document.querySelectorAll('.pop_wrap .btn_close');
let targetID;


function openPopup(elememt) {
  console.log(elememt.id)

  switch (elememt.id) {
    case 'origin-name': targetID = json.food[0];
  }

  document.querySelector(targetID).style.display = 'block';
}

// 팝업 닫기
for(let j = 0; j < target.length; j++){
  popCloseBtn[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}