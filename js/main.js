import {arrayDescriptionPhoto} from './data.js';
import { renderContentPhoto } from './rendering.js';
import { renderFullPizePhoto } from './render_full-size_photo.js';

const data = arrayDescriptionPhoto();
renderContentPhoto(data);
renderFullPizePhoto(data);
