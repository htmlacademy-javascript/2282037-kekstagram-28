import { isEscapeKey } from './util.js';

const COMENTS_PER_PORTION = 5;
const bigPicture = document.querySelector('.big-picture');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');

let commentsShow = 0;

let comments = [];
const createComment = ({avatar, message, name,}) => {
  const comment = document.createElement('li');
  comment.innerHTML = `<img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
                          <p class="social__text">${message}</p>`;
  comment.classList.add('social__comment');


  return comment;
};

const renderComments = () => {
  commentsShow += COMENTS_PER_PORTION;

  if(commentsShow >= comments.length){
    commentsLoader.classList.add('hidden');
    commentsShow = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShow; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentsList.innerHTML = '';
  commentsList.append(fragment);
  commentCount.innerHTML = `${commentsShow} из <span class = "comments-count">${comments.length}</span> комментариев`;
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShow = 0;
};

function onDocumentKeydown(evt){
  if(isEscapeKey(evt.key)){
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const renderPictureDetails = ({url, likes, description}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const onCommentsLoaderClick = () => renderComments();

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }

};
cancelButton.addEventListener('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {showBigPicture};
