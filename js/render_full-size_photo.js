import { isEscapeKey } from './util.js';

const renderFullPizePhoto = function (photo){
  const photoList = photo;
  const scroll = document.querySelector('body');
  const pictures = document.querySelectorAll('.picture');
  const fullSizePhoto = document.querySelector('.big-picture');
  const bigPictureImg = fullSizePhoto.querySelector('img');
  const pictureCancel = document.querySelector('.big-picture__cancel');
  const socialBlock = document.querySelector('.big-picture__social');
  const likes = socialBlock.querySelector('.likes-count');
  const commentsCount = socialBlock.querySelector('.comments-count');
  const socialComment = socialBlock.querySelectorAll('.social__comment');
  const socialCaption = fullSizePhoto.querySelector('.social__caption');
  const socialCommentCount = fullSizePhoto.querySelector('.social__comment-count');
  const commentsLoader = fullSizePhoto.querySelector('.comments-loader');

  for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      fullSizePhoto.classList.remove('hidden');
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      scroll.classList.add('modal-open');

      socialCaption.textContent = photoList[i].description;
      bigPictureImg.src = photoList[i].url;
      likes.textContent = photoList[i].likes;
      commentsCount.textContent = photoList[i].comments.message.length;
      for (let j = 0; j < socialComment.length; j++) {
        socialComment[j].querySelector('.social__picture').src = photoList[i].comments.avatar;
        socialComment[j].querySelector('.social__picture').alt = photoList[i].comments.name;
        socialComment[j].querySelector('.social__text').textContent = photoList[i].comments.message[j];
      }
    });

  }

  pictureCancel.addEventListener('click', () => {
    fullSizePhoto.classList.add('hidden');
    scroll.classList.remove('modal-open');
  });
  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)){
      fullSizePhoto.classList.add('hidden');
      scroll.classList.remove('modal-open');
    }
  });
};

export {renderFullPizePhoto};
