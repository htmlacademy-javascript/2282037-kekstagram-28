import { renderGallery } from './gallery.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { getData, sendData } from './api.js';
import { showAlert, debounce } from './util.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { init, getFilteredPictures } from './filter.js';


setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage('success');
  } catch {
    showErrorMessage('error');
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  init(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}
