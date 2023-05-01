import { shiftDownStyle, shiftUpStyle } from './changeStyles.js';

function shift(shiftKey) {
  let register = localStorage.getItem('reg') || 'caseDown';
  if (shiftKey) {
    shiftDownStyle(register);
  } else {
    shiftUpStyle(register);
  }
}

export { shift };
