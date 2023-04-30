import createKeyboard from './js/keyboard.js';
import changeRegisterStyle from './js/changeRegisterStyles.js';
import { langEnShow,
  langRuShow,
  caseUpShow,
  caseDownShow,
} from './js/styles.js';

window.addEventListener('DOMContentLoaded', () => {
  let language = localStorage.getItem('lang') || 'en';
  const register = localStorage.getItem('reg') || 'caseDown';

  const caseDownHide = new CSSStyleSheet();
  caseDownHide.replaceSync('[class="caseDown"] {display: none !important}');

  const caseUpHide = new CSSStyleSheet();
  caseUpHide.replaceSync('[class="caseUp"] {display: none !important}');

  createKeyboard(language, register);

  function changeLanguage(event) {
    if (event.shiftKey && event.ctrlKey) {
      event.preventDefault();
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

  function shift(event) {
    if (event.shiftKey) {
      if (register === 'caseDown') {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseDownHide, caseUpShow];
      } else {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseUpHide, caseDownShow];
      }
    } else if (!event.shiftKey) {
      if (register === 'caseDown') {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseUpHide, caseDownShow];
      } else {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseDownHide, caseUpShow];
      }
    }
  }

  document.addEventListener('keydown', changeLanguage);
  document.addEventListener('keydown', shift);
  document.addEventListener('keyup', shift);
});
