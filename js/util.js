const getRandomValue = function (min,max){
  const number = Math.floor(Math.random() * ((max - min + 1))) + min;
  return number;
};


const createIdGenerator = function (min,max) {
  const uniqueIdArray = [];
  return function () {
    let uniqueId = getRandomValue(min,max);
    if (uniqueIdArray.length >= (max - min + 1)) {
      return null;
    }
    while (uniqueIdArray.includes(uniqueId)){
      uniqueId = getRandomValue(min,max);
    }
    uniqueIdArray.push(uniqueId);
    return uniqueId;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomValue, createIdGenerator, isEscapeKey};

