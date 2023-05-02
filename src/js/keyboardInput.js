import shift from './shift';
import { buffer } from './utils';

function processKey(keyCode) {
  const currentLanguage = localStorage.getItem('lang') || 'en';
  const currentRegister = localStorage.getItem('reg') || 'caseDown';
  const textarea = document.querySelector('.textarea');
  const elemClass = `.${currentLanguage} > .${currentRegister}`;
  document.querySelector(`.${keyCode}`).classList.add('active');
  if (keyCode === 'Enter') {
    buffer.push('\n');
  } else if (keyCode === 'Tab') {
    buffer.push('\t');
  } else if (keyCode === 'Backspace') {
    buffer.splice(buffer.length - 1, 1);
  } else if (keyCode.includes('Shift')) {
    shift(true);
  } else if (keyCode === 'Delete') {
    const textareaCursor = textarea.selectionStart;
    buffer.splice(textareaCursor, 1);
  } else if (keyCode === 'Space') {
    buffer.push(' ');
  } else if (keyCode.includes('Control') || keyCode.includes('Alt') || keyCode === 'MetaLeft' || keyCode === 'CapsLock') {
    buffer.push('');
  } else {
    const val = document.querySelector(`.${keyCode} ${elemClass}`)?.textContent;
    if (val) {
      buffer.push(val);
    }
  }
  textarea.value = buffer.join('');
}

export { buffer, processKey };
