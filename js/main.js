import { getPictures } from './data.js';
import { renderGallery } from './galery.js';
import { checkForm } from './form.js';

// const data = arrayDescriptionPhoto();
renderGallery(getPictures());
checkForm();
