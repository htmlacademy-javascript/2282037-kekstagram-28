// const getRandomValue = function (min,max){
//   const number = Math.floor(Math.random() * ((max - min + 1))) + min;
//   return number;
// };


// const createIdGenerator = function (min,max) {
//   const uniqueIdArray = [];
//   return function () {
//     let uniqueId = getRandomValue(min,max);
//     if (uniqueIdArray.length >= (max - min + 1)) {
//       return null;
//     }
//     while (uniqueIdArray.includes(uniqueId)){
//       uniqueId = getRandomValue(min,max);
//     }
//     uniqueIdArray.push(uniqueId);
//     return uniqueId;
//   };
// };

const isEscapeKey = (key) => key === 'Escape';

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.classList.add('alert');
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, 5000);
};

export {showAlert, isEscapeKey};

