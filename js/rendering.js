
const renderContentPhoto = function (elem){
  const picturesListElement = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');


  const listElements = elem()

  const similarListFragment = document.createDocumentFragment();
  listElements.forEach((infoPhoto) => {
    let pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = infoPhoto.url;
    pictureElement.querySelector('.picture__comments').textContent = infoPhoto.comments.message.length;
    pictureElement.querySelector('.picture__likes').textContent = infoPhoto.likes;
    similarListFragment.appendChild(pictureElement);

    console.log(infoPhoto);

  });

  picturesListElement.appendChild(similarListFragment);
}

export {renderContentPhoto}
