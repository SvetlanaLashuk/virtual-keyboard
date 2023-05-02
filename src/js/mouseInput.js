import shift from './shift.js';
import capslock from './capslock.js';
import { buffer } from './utils.js';

function processKey(key) {
  const currentLanguage = localStorage.getItem('lang') || 'en';
  const currentRegister = localStorage.getItem('reg') || 'caseDown';
  const textarea = document.querySelector('.textarea');
  const elemClass = `.${currentLanguage} > .${currentRegister}`;
  const button = key.classList[2];
  if (button === 'Enter') {
    buffer.push('\n');
  } else if (button === 'Tab') {
    buffer.push('\t');
  } else if (button === 'Backspace') {
    buffer.splice(buffer.length - 1, 1);
  } else if (button.includes('Shift')) {
    shift(true);
  } else if (button === 'CapsLock') {
    capslock();
  } else if (button === 'Delete') {
    const textareaCursor = textarea.selectionStart;
    buffer.splice(textareaCursor, 1);
  } else if (button === 'Space') {
    buffer.push(' ');
  } else if (button.includes('Control') || button.includes('Alt') || button === 'MetaLeft') {
    buffer.push('');
  } else {
    const val = key.querySelector(elemClass)?.textContent;
    if (val) {
      buffer.push(val);
    }
  }
  textarea.value = buffer.join('');
}

function click(event) {
  processKey(event.currentTarget);
}

export { processKey, click };
