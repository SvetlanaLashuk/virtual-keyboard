import createKeyboard from './js/keyboard';
import { changeRegisterStyle } from './js/changeStyles';
import { langEnShow, langRuShow } from './js/styles';
import shift from './js/shift';
import processKey from './js/keyboardInput';
import capslock from './js/capslock';

let currentLanguage = localStorage.getItem('lang') || 'en';
const currentRegister = localStorage.getItem('reg') || 'caseDown';

window.addEventListener('load', () => {
  createKeyboard(currentLanguage, currentRegister);

  function changeLanguage(event) {
    if (event.shiftKey && event.ctrlKey) {
      if (currentLanguage === 'en') {
        currentLanguage = 'ru';
        document.adoptedStyleSheets = [langRuShow];
        localStorage.setItem('lang', currentLanguage);
      } else {
        currentLanguage = 'en';
        document.adoptedStyleSheets = [langEnShow];
        localStorage.setItem('lang', currentLanguage);
      }
      changeRegisterStyle(currentRegister);
    }
  }

  document.addEventListener('keydown', (e) => {
    processKey(e.code);
    changeLanguage(e);
    shift(e.shiftKey);
  });

  document.addEventListener('keyup', (e) => {
    document.querySelector(`.${e.code}`).classList.remove('active');
    shift(e.shiftKey);
    if (e.code === 'CapsLock') {
      capslock();
    }
  });
});
