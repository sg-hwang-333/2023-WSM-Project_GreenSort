let feedContainer = document.querySelector('.feed-container');
let fertilizerContainer = document.querySelector('.fertilizer-container');
let feedButton = document.querySelector('.feed');
let fertilizerButton = document.querySelector('.fertilizer');

function toggleContainers(buttonClicked) {

  if (buttonClicked === 'feed') {
    feedContainer.classList.add('show');
    fertilizerButton.classList.add('no-check-btn');

    fertilizerContainer.classList.remove('show');
    feedButton.classList.add('check-btn');

  } else if (buttonClicked === 'fertilizer') {
    fertilizerContainer.classList.add('show');
    feedButton.classList.add('no-check-btn');

    feedContainer.classList.remove('show');
    fertilizerButton.classList.add('check-btn');
  }
}

function topToReset() {
  fertilizerButton.classList.remove('check-btn');
  feedButton.classList.remove('check-btn');
  fertilizerButton.classList.remove('no-check-btn');
  feedButton.classList.remove('no-check-btn');

  feedContainer.classList.remove('show');
  fertilizerContainer.classList.remove('show');
}