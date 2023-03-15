
const renderContentPhoto = function (photo){
  const picturesListElement = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


  const listElements = photo;

  const similarListFragment = document.createDocumentFragment();
  listElements.forEach((infoPhoto) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = infoPhoto.url;
    pictureElement.querySelector('.picture__comments').textContent = infoPhoto.comments.message.length;
    pictureElement.querySelector('.picture__likes').textContent = infoPhoto.likes;
    similarListFragment.appendChild(pictureElement);

  });

  picturesListElement.appendChild(similarListFragment);
};

export {renderContentPhoto};
