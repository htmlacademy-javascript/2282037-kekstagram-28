
import { renderGallery } from './galery.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { showSuccessMessage, showErrorMessage } from './message.js';


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
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
