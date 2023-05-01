import { caseUpShow, caseDownHide, caseDownShow,caseUpHide } from './styles.js';

let flag = false;

function capslock() {
  let currentRegister = localStorage.getItem('reg') || 'caseDown';
  if (flag) {
    flag = false;
  } else {
    flag = true;
  }
  if (currentRegister === 'caseDown') {
    currentRegister = 'caseUp';
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseUpShow, caseDownHide];
    localStorage.setItem('reg', currentRegister);
  } else {
    currentRegister = 'caseDown';
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseDownShow, caseUpHide];
    localStorage.setItem('reg', currentRegister);
  }
}

export { flag, capslock };
