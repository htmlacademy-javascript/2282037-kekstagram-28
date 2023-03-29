
const getTemplate = (selector) => {
  const thumbnailTemplate = document.querySelector(`#${selector}`).content.querySelector(`.${selector}`);
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const container = document.body;
  container.append(thumbnail);

  return container;
};

const deleteTemplate = (selector) => {
  const button = document.querySelector(`.${selector}__button`);
  const successInner = document.querySelector(`.${selector}__inner`);
  button.addEventListener('click', () => {
    document.querySelector(`.${selector}`).classList.add('hidden');
  });
  if (!successInner.addEventListener('click')) {
    document.querySelector(`.${selector}`).classList.add('hidden');
  }
};

const showSuccessMessage = (selector) => {
  getTemplate(selector);
  deleteTemplate(selector);
};


const showErrorMessage = (selector) => {
  getTemplate(selector);
  deleteTemplate(selector);
};

export { showSuccessMessage, showErrorMessage };
