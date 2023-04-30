const langEnShow = new CSSStyleSheet();
langEnShow.replaceSync('[class="en"] { display: block !important; }');

const langRuShow = new CSSStyleSheet();
langRuShow.replaceSync('[class="ru"] { display: block !important; }');

const caseUpShow = new CSSStyleSheet();
caseUpShow.replaceSync('[class="caseUp"] { display: block !important; }');

const caseDownShow = new CSSStyleSheet();
caseDownShow.insertRule('[class="caseDown"] { display: block !important; }');

export {
  langEnShow,
  langRuShow,
  caseUpShow,
  caseDownShow,
};
