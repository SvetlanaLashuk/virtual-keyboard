import createKeyboard from './js/keyboard.js';

window.addEventListener('load', () => {
  const language = localStorage.getItem('lang') || 'en';
  createKeyboard(language);
});
