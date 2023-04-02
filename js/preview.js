const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imgUploadInput = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview').querySelector('img');

const changeAdress = () => {
  const file = imgUploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
  return preview;
};

export { changeAdress };
