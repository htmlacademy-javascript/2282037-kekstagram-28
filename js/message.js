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

  function deleteMessageAndEvent () {
    success.remove();
    document.removeEventListener('keydown', removeSuccess);
  }

  button.addEventListener('click', () => {
    if (success) {
      deleteMessageAndEvent();
    }
  });
  success.addEventListener('click', (evt) => {
    if (evt.target.closest(`.${selector}__inner`)) {
      return;
    }
    if (success) {
      deleteMessageAndEvent();
    }
  });

  function removeSuccess (evt) {
    if (isEscapeKey(evt.key)) {
      deleteMessageAndEvent();
    }
  }
  document.addEventListener('keydown', removeSuccess);

};


function showSuccessMessage (selector){
  getTemplate(selector);
  addEvent(selector);
}


const showErrorMessage = (selector) => {
  getTemplate(selector);
  addEvent(selector);
};

export { showSuccessMessage, showErrorMessage };
