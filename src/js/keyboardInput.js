import { shift } from './shift.js';

const buffer = [];

function paste(text) {
  const textarea = document.querySelector('.textarea');
  buffer.push(text);
  textarea.value += text;
}

function processKey(keyCode) {
  let reg = localStorage.getItem('reg') || 'caseDown';
  let lang = localStorage.getItem('lang') || 'en';
  let regClass = '.' + lang + ' > .' + reg;
  if (keyCode === 'Enter') {
    buffer.push('\n');
  } else if (keyCode === 'Tab') {
    buffer.push('\t');
  } else if (keyCode === 'Backspace') {
    buffer.splice(buffer.length - 1, 1);
  } else if (keyCode === 'ShiftLeft' || keyCode === 'ShiftRight') {
    shift(true);
  } else if (keyCode === 'Space') {
    buffer.push(' ');
  } else if (keyCode === 'ControlLeft' || keyCode === 'ControlRight' ||
  keyCode === 'AltLeft' || keyCode === 'AltRight' || keyCode === 'MetaLeft') {
    buffer.push('');
  } else {
    let val = document.querySelector(`.${keyCode} ${regClass}`)?.textContent;
    if(val) {
      buffer.push(val);
    }
  }
  textarea.value = buffer.join('');
}

export { processKey };
