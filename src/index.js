import { createKeyboard } from './js/keyboard.js';
import { changeRegisterStyle } from './js/changeStyles.js';
import { langEnShow, langRuShow } from './js/styles.js';
import { shift } from './js/shift.js';
import { processKey } from './js/keyboardInput.js';

let language = localStorage.getItem('lang') || 'en';
let register = localStorage.getItem('reg') || 'caseDown';

window.addEventListener('load', () => {
  createKeyboard(language, register);
});

window.addEventListener('DOMContentLoaded', () => {

  function changeLanguage(event) {
    if (event.shiftKey && event.ctrlKey) {
      if (language === 'en') {
        language = 'ru';
        document.adoptedStyleSheets = [langRuShow];
        localStorage.setItem('lang', language);
      } else {
        language = 'en';
        document.adoptedStyleSheets = [langEnShow];
        localStorage.setItem('lang', language);
      }
      changeRegisterStyle(register);
    }
  }

  document.addEventListener('keydown', (e) => {
    processKey(e.code);
    changeLanguage(e);
    shift(e.shiftKey);
  });

  document.addEventListener('keyup', (e) => {
    shift(e.shiftKey);
  });
});
