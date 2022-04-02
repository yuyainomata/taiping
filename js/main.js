'use strict';

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;  
    clearNam++;
  } 

  const words = [
    "background",
    "margin",
    "padding",
    "width",
    "height",
    "color",
    "text-align",
    "font-size",
    "font-weight",
    "font-family",
    "line-height",
    "letter-spacing",
    "border",
    "display",
  ];

  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  let clearNam = 0;
  
  const target = document.getElementById('target');

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    setWord();
    startTime = Date.now();
  });
  
  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (clearNam === 10) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `速度 : ${elapsedTime}`;
        return;
      }
      setWord();
    }

  });
}
