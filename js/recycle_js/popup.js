let json = popup;

let target = document.querySelectorAll('.btn_open');
let popInfo = document.getElementById('pop_info');
let targetID;

// 팝업 열기
function openPopup(elememt) {
  let nowRadio = document.querySelector('input[name="radio"]:checked').value;

  switch (elememt.id) {
    case 'trash-name': targetID = json[nowRadio][0]; break;
    case 'trash-can-name' : targetID = json[nowRadio][1]; break;

    case 'step1-1': targetID = json[nowRadio][2]; break;
    case 'step1-2': targetID = json[nowRadio][3]; break;
    case 'step1-3': targetID = json[nowRadio][4]; break;
    case 'step1-4': targetID = json[nowRadio][5]; break;

    case 'step2-1': targetID = json[nowRadio][6]; break;
    case 'step2-2': targetID = json[nowRadio][7]; break;
    case 'step2-3': targetID = json[nowRadio][8]; break;
    case 'step2-4': targetID = json[nowRadio][9]; break;
  }

  document.getElementsByClassName('dsc')[0].innerHTML = targetID;
  popInfo.style.display = 'block';
}

// 팝업 닫기
function popClose(element) {
  element.parentNode.parentNode.style.display = 'none';
}