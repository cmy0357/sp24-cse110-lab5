// expose.js

const confetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let select = document.getElementById('horn-select');
  let image = document.querySelector('img[src="assets/images/no-image.png"]');
  let audio = document.querySelector('audio');
  let slider = document.querySelector('input[type="range"]');
  let icon = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  let btn = document.querySelector('button');

  select.addEventListener('input', function() {
    let selectedValue = select.selectedOptions[0].value;
    image.src = `assets/images/${selectedValue}.svg`;
    audio.src = `assets/audio/${selectedValue}.mp3`;
  })

  slider.addEventListener('change', function() {
    let value = slider.value;
    audio.volume = value / 100;
    switch(true) {
      case (value == 0):
        icon.src = "assets/icons/volume-level-0.svg";
        break;
      case (value < 33):
        icon.src = "assets/icons/volume-level-1.svg";
        break;
      case (value < 67):
        icon.src = "assets/icons/volume-level-2.svg";
        break;
      case (value > 67):
        icon.src = "assets/icons/volume-level-3.svg";
        break;
    }
  })

  btn.addEventListener('click', function() {
    if (select.selectedOptions[0].value != 'select') {
      audio.play();
      confetti.addConfetti();
    }
  })
}