import { shiftDownStyle, shiftUpStyle } from './changeStyles';

export default function shift(shiftKey) {
  const currentRegister = localStorage.getItem('reg') || 'caseDown';
  if (shiftKey) {
    shiftDownStyle(currentRegister);
  } else {
    shiftUpStyle(currentRegister);
  }
}
