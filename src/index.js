import { createKeyboard } from './js/keyboard.js';
import { changeRegisterStyle } from './js/changeStyles.js';
import { langEnShow, langRuShow } from './js/styles.js';
import { shift } from './js/shift.js';

window.addEventListener('load', () => {
  let language = localStorage.getItem('lang') || 'en';
  let register = localStorage.getItem('reg') || 'caseDown';
  createKeyboard(language, register);
});

window.addEventListener('DOMContentLoaded', () => {
  const caseDownHide = new CSSStyleSheet();
  caseDownHide.replaceSync('[class="caseDown"] {display: none !important}');

  const caseUpHide = new CSSStyleSheet();
  caseUpHide.replaceSync('[class="caseUp"] {display: none !important}');

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

  document.addEventListener('keydown', changeLanguage);
  document.addEventListener('keydown', (e) => shift(e.shiftKey));
  document.addEventListener('keyup', (e) => shift(e.shiftKey));
});
