import { caseUpShow, caseDownShow } from './styles.js';

export default function changeRegisterStyle(reg) {
  if (reg === 'caseDown') {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseDownShow];
  } else {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, caseUpShow];
  }
}
