const langEnShow = new CSSStyleSheet();
langEnShow.replaceSync('[class="en"] { display: block !important; }');

const langRuShow = new CSSStyleSheet();
langRuShow.replaceSync('[class="ru"] { display: block !important; }');

export { langEnShow, langRuShow };
