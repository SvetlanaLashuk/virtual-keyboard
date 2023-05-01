import { shift } from './shift.js';
import { buffer, language, register } from './utils.js';

function processKey(keyCode) {
  let currentLanguage = language;
  let currentRegister = register;
  const textarea = document.querySelector('.textarea');
  let elemClass = '.' + currentLanguage + ' > .' + currentRegister;
  if (keyCode === 'Enter') {
    buffer.push('\n');
  } else if (keyCode === 'Tab') {
    buffer.push('\t');
  } else if (keyCode === 'Backspace') {
    buffer.splice(buffer.length - 1, 1);
  } else if (keyCode.includes('Shift')) {
    shift(true);
  } else if (keyCode === 'Space') {
    buffer.push(' ');
  } else if (keyCode === 'ControlLeft' || keyCode === 'ControlRight' ||
  keyCode === 'AltLeft' || keyCode === 'AltRight' || keyCode === 'MetaLeft') {
    buffer.push('');
  } else {
    let val = document.querySelector(`.${keyCode} ${elemClass}`)?.textContent;
    if(val) {
      buffer.push(val);
    }
  }
  textarea.value = buffer.join('');
}

export { processKey };
