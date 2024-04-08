let target = document.querySelectorAll('.btn_open');
let popCloseBtn = document.querySelectorAll('.pop_wrap .btn_close');
let popInfo = document.querySelector('#pop_info');
let targetID;

fetch('../../json/popup.js')
.then(function(response) {
return response.json();
})
.then(function(myJson) {
console.log(JSON.stringify(myJson));
});

function openPopup(elememt) {
  console.log(elememt.id)

  switch (elememt.id) {
    case 'origin-name': targetID = json.food[0]; break;
  }

  popInfo.style.display = 'block';
  popInfo.innerHTML = targetID;
}

// for(var i = 0; i < target.length; i++){
//   target[i].addEventListener('click', function(){
//     targetID = this.getAttribute('href');
//     document.querySelector(targetID).style.display = 'block';
//   });
// }

// // 팝업 닫기
// for(let j = 0; j < target.length; j++){
//   popCloseBtn[j].addEventListener('click', function(){
//     this.parentNode.parentNode.style.display = 'none';
//   });
// }