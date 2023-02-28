
const getRandomValue = function (min,max){
  const number = Math.floor(Math.random() * ((max - min + 1))) + min;
  return number;
};


const createIdGenerator = function (min,max) {
  const uniqueIdArray = [];
  return function () {
    let uniqueId = getRandomValue(min,max);
    if (uniqueIdArray.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${min} до ${max}`);
      return null;
    }
    while (uniqueIdArray.includes(uniqueId)){
      uniqueId = getRandomValue(min,max);
    }
    uniqueIdArray.push(uniqueId);
    return uniqueId;
  };
};


export {getRandomValue, createIdGenerator};

