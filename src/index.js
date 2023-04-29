import createKeyboard from './js/keyboard.js';
import { langEnShow, langRuShow } from './js/styles.js';

window.addEventListener('load', () => {
  let language = localStorage.getItem('lang') || 'en';
  createKeyboard(language);

  function changeLanguage(event) {
    if (event.shiftKey && event.ctrlKey) {
      event.preventDefault();
      if (language === 'en') {
        language = 'ru';
        document.adoptedStyleSheets = [langRuShow];
      } else {
        language = 'en';
        document.adoptedStyleSheets = [langEnShow];
      }
    }
  }

  document.addEventListener('keydown', changeLanguage);
});
