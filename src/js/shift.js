import { shiftDownStyle, shiftUpStyle } from './changeStyles.js';

function shift(shiftKey) {
  const currentRegister = localStorage.getItem('reg') || 'caseDown';
  if (shiftKey) {
    shiftDownStyle(currentRegister);
  } else {
    shiftUpStyle(currentRegister);
  }
}

export { shift };
