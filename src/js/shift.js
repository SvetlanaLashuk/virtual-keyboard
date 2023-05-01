import { shiftDownStyle, shiftUpStyle } from './changeStyles.js';
import { register } from './utils.js';

function shift(shiftKey) {
  let currentRegister = register;
  if (shiftKey) {
    shiftDownStyle(register);
  } else {
    shiftUpStyle(register);
  }
}

export { shift };
