const createWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  return wrapper;
};

const createTextarea = () => {
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.setAttribute('id', 'textarea');
  textarea.rows = '5';
  textarea.cols = '50';
  return textarea;
};

function createKeyboardElement() {
  const keyboardElement = document.createElement('div');
  keyboardElement.classList.add('keyboard');
  return keyboardElement;
}

async function getButtonsList() {
  const buttons = 'js/keyboardButtons.json';
  const response = await fetch(buttons);
  const data = await response.json();
  return data;
}

export default async function createKeyboard(lang) {
  const wrapper = createWrapper();
  document.body.append(wrapper);

  const textarea = createTextarea();
  wrapper.appendChild(textarea);

  const keyboard = createKeyboardElement();
  wrapper.appendChild(keyboard);

  const data = await getButtonsList();
  const rowCountArray = [-1, 13, 28, 41, 54, 63];
  let idx = 0;
  let keyboardRow;
  const objKeys = Object.keys(data);

  objKeys.forEach((key, index) => {
    if (index > rowCountArray[idx]) {
      idx += 1;
      keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard__row', 'row');
      keyboard.appendChild(keyboardRow);
    }
    const keyboardButton = document.createElement('div');
    keyboardButton.classList.add('keyboard__key', 'key', `${key}`);
    keyboardRow.appendChild(keyboardButton);

    const btnObj = Object.keys(data[key]);
    btnObj.forEach((j) => {
      const buttonLang = document.createElement('div');
      buttonLang.classList.add(`${j}`);
      if (lang !== j) {
        buttonLang.classList.add(`${j}`, 'hidden');
      }
      keyboardButton.appendChild(buttonLang);

      const langObj = Object.keys(data[key][j]);
      langObj.forEach((k) => {
        const elem = document.createElement('span');
        elem.classList.add(`${k}`);
        elem.textContent = data[key][j].caseDown;
        buttonLang.appendChild(elem);
        if (k === 'caseUp') {
          elem.classList.add('hidden');
        }
      });
    });
  });
}
