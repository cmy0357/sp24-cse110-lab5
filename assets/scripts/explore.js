// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let select = document.getElementById('voice-select');
  let btn = document.querySelector('button');
  let inputText = document.querySelector('textarea');
  let image = document.querySelector('img');

  const synth = window.speechSynthesis;
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      select.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  btn.addEventListener('click', function() {
    const utterThis = new SpeechSynthesisUtterance(inputText.value);
    const selected = select.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selected) {
        utterThis.voice = voices[i];
        break;
      }
    }
    synth.speak(utterThis);

    utterThis.addEventListener('start', function() {
      image.src = 'assets/images/smiling-open.png';
    })

    utterThis.addEventListener('end', function() {
      image.src = 'assets/images/smiling.png';
    })
  })
}