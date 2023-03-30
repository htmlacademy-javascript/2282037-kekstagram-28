import { isEscapeKey } from './util.js';

const getTemplate = (selector) => {
  const thumbnailTemplate = document.querySelector(`#${selector}`).content.querySelector(`.${selector}`);
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const container = document.body;
  container.append(thumbnail);

  return container;
};


const addEvent = (selector) => {
  const button = document.querySelector(`.${selector}__button`);
  const success = document.querySelector(`.${selector}`);

  button.addEventListener('click', () => {
    if (success) {
      success.remove();
    }
  });
  success.addEventListener('click', (evt) => {
    if (evt.target.closest(`.${selector}__inner`)) {
      return;
    }
    if (success) {
      success.remove();
    }
  });

  document.addEventListener('keydown',(evt) => {
    if (isEscapeKey(evt.key)) {
      success.remove();
    }
  });

};


const showSuccessMessage = (selector) => {
  getTemplate(selector);
  addEvent(selector);
};


const showErrorMessage = (selector) => {
  getTemplate(selector);
  addEvent(selector);
};

export { showSuccessMessage, showErrorMessage };
