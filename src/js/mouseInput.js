import { shift } from './shift.js';
import { buffer, language, register } from './utils.js';

function processKey(key) {
  let currentLanguage = language;
  let currentRegister = register;
  const textarea = document.querySelector('.textarea');
  let elemClass = '.' + currentLanguage + ' > .' + currentRegister;
  const button = key.classList[2];
  if (button === 'Enter') {
    buffer.push('\n');
  } else if (button === 'Tab') {
    buffer.push('\t');
  } else if (button === 'Backspace') {
    buffer.splice(buffer.length - 1, 1);
  } else if (button.includes('Shift')) {
    shift(true);
  } else if (button === 'Delete') {
    let textareaCursor = textarea.selectionStart;
    buffer.splice(textareaCursor, 1);
  } else if (button === 'Space') {
    buffer.push(' ');
  } else if (button.includes('Control') || button.includes('Alt') || button === 'MetaLeft') {
    buffer.push('');
  } else {
    let val = key.querySelector(elemClass)?.textContent;
    if(val) {
      buffer.push(val);
    }
  }
  textarea.value = buffer.join('');
}

function click(event) {
  console.log(event);
  processKey(event.currentTarget);
}

export { click };
