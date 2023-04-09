import { isEscapeKey } from './util.js';
import { onDocumentKeydown } from './form.js';


const getTemplate = (selector) => {
  const thumbnailTemplate = document.querySelector(`#${selector}`).content.querySelector(`.${selector}`);
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const container = document.body;
  container.append(thumbnail);

  return container;
};


const addEvent = (selector) => {
  const button = document.querySelector(`.${selector}__button`);
  const response = document.querySelector(`.${selector}`);

  function deleteMessageAndEvent () {
    response.remove();
    document.removeEventListener('keydown', removeResponse);
  }

  button.addEventListener('click', () => {
    if (response) {
      deleteMessageAndEvent();
    }
  });
  response.addEventListener('click', (evt) => {
    if (evt.target.closest(`.${selector}__inner`)) {
      return;
    }
    if (response) {
      deleteMessageAndEvent();
    }
  });

  function removeResponse (evt) {
    if (isEscapeKey(evt.key)) {
      evt.preventDefault();
      deleteMessageAndEvent();
      document.addEventListener('keydown', onDocumentKeydown);
    }
  }
  document.addEventListener('keydown', removeResponse);

};


function showSuccessMessage (selector){
  getTemplate(selector);
  addEvent(selector);
}


const showErrorMessage = (selector) => {
  getTemplate(selector);
  addEvent(selector);
  document.removeEventListener('keydown', onDocumentKeydown);
};


export { showSuccessMessage, showErrorMessage };
