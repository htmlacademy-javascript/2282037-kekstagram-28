
const getTemplate = (selector) => {
  const thumbnailTemplate = document.querySelector(`#${selector}`).content.querySelector(`.${selector}`);
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const container = document.querySelector('main');
  container.append(thumbnail);

  return container;
};

const addEvent = (selector) => {
  const button = document.querySelector(`.${selector}__button`);
  const successInner = document.querySelector(`.${selector}__inner`);

  button.addEventListener('click', () => {
    document.querySelector(`.${selector}`).remove();
  });
  successInner.addEventListener('click', () => {
    document.querySelector(`.${selector}`).remove();
  });
};

const deleteTemplate = (selector) => {
  addEvent(selector);
};

const showSuccessMessage = (selector) => {
  getTemplate(selector);
  deleteTemplate(selector);
  addEvent(selector);
};


const showErrorMessage = (selector) => {
  getTemplate(selector);
  deleteTemplate(selector);
  addEvent(selector);
};

export { showSuccessMessage, showErrorMessage };
