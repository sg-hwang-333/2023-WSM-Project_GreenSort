function toggleContainers(buttonClicked) {
    var feedContainer = document.querySelector('.feed-container');
    var fertilizerContainer = document.querySelector('.fertilizer-container');
    var feedButton = document.querySelector('.feed');
    var fertilizerButton = document.querySelector('.fertilizer');

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