import { shiftDownStyle, shiftUpStyle } from './changeStyles.js';

export default function shift(shiftKey) {
  const currentRegister = localStorage.getItem('reg') || 'caseDown';
  if (shiftKey) {
    shiftDownStyle(currentRegister);
  } else {
    shiftUpStyle(currentRegister);
  }
}
