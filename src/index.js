import createKeyboard from './js/keyboard.js';
import changeRegisterStyle from './js/changeRegisterStyles.js';
import { langEnShow, langRuShow } from './js/styles.js';

window.addEventListener('DOMContentLoaded', () => {
  let language = localStorage.getItem('lang') || 'en';
  const register = localStorage.getItem('reg') || 'caseDown';

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

  document.addEventListener('keydown', changeLanguage);
});
