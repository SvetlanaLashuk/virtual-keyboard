import { shift } from './shift.js';

const buffer = [];

function paste(text) {
  const textarea = document.querySelector('.textarea');
  buffer.push(text);
  textarea.value += text;
}

function processKey(key) {
  let reg = localStorage.getItem('reg') || 'caseDown';
  let lang = localStorage.getItem('lang') || 'en';
  let regClass = '.' + lang + ' > .' + reg;
  const button = key.classList[2];
  if (button === 'Enter') {
    buffer.push('\n');
  } else if (button === 'Tab') {
    buffer.push('\t');
  } else if (button === 'Backspace') {
    buffer.splice(buffer.length - 1, 1);
  } else if (button === 'Shift') {
    shift(true);
  } else if (button === 'Space') {
    buffer.push(' ');
  } else if (button === 'ControlLeft' || button === 'ControlRight' || button === 'AltLeft' || button === 'AltRight') {
    buffer.push('');
  } else {
    let val = key.querySelector(regClass)?.textContent;
    console.log(key.querySelector(regClass)?.textContent);
    if(val) {
      buffer.push(val);
    }
  }
  textarea.value = buffer.join('');
}

function click(event) {
  processKey(event.currentTarget);
}

export { click };
