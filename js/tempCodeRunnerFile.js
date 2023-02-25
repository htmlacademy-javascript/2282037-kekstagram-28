let comments = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]






function getRandomValue(min,max){
  let number = Math.floor(Math.random() * ((max - min + 1 ))) + min;
  return number
}

function createIdGenerator (min,max) {
  let uniqueIdArray = [];
  return function () {
    uniqueId = getRandomValue(min,max);
    if (uniqueIdArray.length >= (max - min +1)) {
        console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
        return null
      }
    while (uniqueIdArray.includes(uniqueId)){
      uniqueId = getRandomValue(min,max);
    }
    uniqueIdArray.push(uniqueId);
    return uniqueId;
  };
}

let generatorId =  createIdGenerator(1, 25);
let generatorUrl =  createIdGenerator(1, 25);
let generatorIdComments =  createIdGenerator(1, Infinity);

let createDescriptionPhoto =() => {
  return {
  id: generatorId(),
  url: `photos/${generatorUrl()}.jpg`,
  description: 'Тут очень интересное описание',
  likes: getRandomValue(15,200),
  comments: {
    id: generatorIdComments(),
    avatar: `img/avatar-${getRandomValue(1,6)}.svg`,
    message: comments[getRandomValue(0, comments.length-1)],
    name: 'Артём',
    }
  }
}

let arrayDescriptionPhoto = Array.from({length:25}, createDescriptionPhoto)

console.log(arrayDescriptionPhoto);
