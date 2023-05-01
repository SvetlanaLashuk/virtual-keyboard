const langEnShow = new CSSStyleSheet();
langEnShow.replaceSync('[class="en"] { display: block !important; }');

const langRuShow = new CSSStyleSheet();
langRuShow.replaceSync('[class="ru"] { display: block !important; }');

const caseUpShow = new CSSStyleSheet();
caseUpShow.replaceSync('[class="caseUp"] { display: block !important; }');

const caseDownShow = new CSSStyleSheet();
caseDownShow.replaceSync('[class="caseDown"] { display: block !important; }');

const caseDownHide = new CSSStyleSheet();
caseDownHide.replaceSync('[class="caseDown"] {display: none !important}');

const caseUpHide = new CSSStyleSheet();
caseUpHide.replaceSync('[class="caseUp"] {display: none !important}');

export { langEnShow, langRuShow, caseUpShow, caseDownShow, caseDownHide, caseUpHide };
