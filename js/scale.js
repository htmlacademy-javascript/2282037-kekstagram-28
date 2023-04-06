const SCALE = {
  STEP: 25,
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
};
const radix = 10;
const divider = 100;


const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / divider})`;
  scaleInputElement.setAttribute('value', `${value}%`);
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, radix);
  let newValue = currentValue - SCALE.STEP;
  if (newValue < SCALE.MIN) {
    newValue = SCALE.MIN;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, radix);
  let newValue = currentValue + SCALE.STEP;
  if (newValue > SCALE.MAX) {
    newValue = SCALE.MAX;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(SCALE.DEFAULT);

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);


export { resetScale };
