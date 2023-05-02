import {
  caseUpShow, caseDownShow, caseUpHide, caseDownHide,
} from './styles';

function changeRegisterStyle(reg) {
  if (reg === 'caseDown') {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseDownShow];
  } else {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseUpShow];
  }
}

function shiftDownStyle(reg) {
  if (reg === 'caseDown') {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseDownHide, caseUpShow];
  } else {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseUpHide, caseDownShow];
  }
}

function shiftUpStyle(reg) {
  if (reg === 'caseDown') {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseUpHide, caseDownShow];
  } else {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseDownHide, caseUpShow];
  }
}

export { changeRegisterStyle, shiftDownStyle, shiftUpStyle };
