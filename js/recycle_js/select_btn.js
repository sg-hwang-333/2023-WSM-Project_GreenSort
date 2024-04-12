let sel1Container = document.querySelector('.sel1-container');
let sel2Container = document.querySelector('.sel2-container');
let selBtn1 = document.querySelector('.selBtn1');
let selBtn2 = document.querySelector('.selBtn2');

function toggleContainers(buttonClicked) {


  if (buttonClicked === 'sel1') {
    sel1Container.classList.add('show');
    selBtn2.classList.add('no-check-btn');

    sel2Container.classList.remove('show');
    selBtn1.classList.add('check-btn');

  } else if (buttonClicked === 'sel2') {
    sel2Container.classList.add('show');
    selBtn1.classList.add('no-check-btn');

    sel1Container.classList.remove('show');
    selBtn2.classList.add('check-btn');
  }
}

function topToReset() {
  selBtn2.classList.remove('check-btn');
  selBtn1.classList.remove('check-btn');
  selBtn2.classList.remove('no-check-btn');
  selBtn1.classList.remove('no-check-btn');

  sel1Container.classList.remove('show');
  sel2Container.classList.remove('show');
}