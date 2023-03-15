import {getRandomValue,createIdGenerator} from './util.js';

const comments = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const namesUsers = ['Вадим','Генри','Кирилл','Кукумбер',
  'кот Борис','Димыч','Мухамед','Женя','Валюшка007',
  'Гарольд','Кумар','Галина Ивановна','яСамая','Люда',
  'Аленка','ТаНя','Кристофер Робин','Зита','Гита',
  'Гульчитай','Жади','Лукас','Матроскин',];

const getValue = (elem) => elem[getRandomValue(0, elem.length - 1)];


const generatorId = createIdGenerator(1, 25);
const generatorUrl = createIdGenerator(1, 25);
const generatorIdComments = createIdGenerator(1, 8000000000);

const getCommentsData = function (elem) {
  const commentsPhoto = [];
  const item = getRandomValue(2, elem.length);
  const uniqComment = createIdGenerator(0, elem.length - 1);
  for (let i = 0; i <= item - 1; i++) {
    const commentId = uniqComment();
    commentsPhoto.push(elem[commentId]);
  }
  return commentsPhoto;
};


const createDescriptionPhoto = () => ({
  id: generatorId(),
  url: `photos/${generatorUrl()}.jpg`,
  description: 'Тут очень интересное описание',
  likes: getRandomValue(15,200),
  comments: {
    id: generatorIdComments(),
    avatar: `img/avatar-${getRandomValue(1,6)}.svg`,
    message: getCommentsData(comments),
    name: getValue(namesUsers),
  },
});

const arrayDescriptionPhoto = () => Array.from({length:25}, createDescriptionPhoto);

export {arrayDescriptionPhoto};
