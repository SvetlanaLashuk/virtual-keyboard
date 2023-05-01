import { createKeyboard } from './js/keyboard.js';
import { changeRegisterStyle } from './js/changeStyles.js';
import { langEnShow, langRuShow } from './js/styles.js';
import { shift } from './js/shift.js';
import { processKey } from './js/keyboardInput.js';
import { language, register } from './js/utils.js';

window.addEventListener('load', () => {
  let currentLanguage = language;
  let currentRegister = register;
  createKeyboard(language, register);

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
    console.log(e);
    changeLanguage(e);
    shift(e.shiftKey);
  });

  document.addEventListener('keyup', (e) => {
    shift(e.shiftKey);
  });
});

// window.addEventListener('DOMContentLoaded', () => {

//   function changeLanguage(event) {
//     if (event.shiftKey && event.ctrlKey) {
//       if (language === 'en') {
//         language = 'ru';
//         document.adoptedStyleSheets = [langRuShow];
//         localStorage.setItem('lang', language);
//       } else {
//         language = 'en';
//         document.adoptedStyleSheets = [langEnShow];
//         localStorage.setItem('lang', language);
//       }
//       changeRegisterStyle(register);
//     }
//   }

//   document.addEventListener('keydown', (e) => {
//     processKey(e.code);
//     changeLanguage(e);
//     shift(e.shiftKey);
//   });

//   document.addEventListener('keyup', (e) => {
//     shift(e.shiftKey);
//   });
// });
