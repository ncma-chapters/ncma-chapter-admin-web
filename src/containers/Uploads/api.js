// Node modules.
import get from 'lodash/get';
// Relative imports.
import request, { delay, FAKE_API_TIMEOUT_MS } from 'utils/request';
import { FAKE_UPLOAD } from './constants';

export const createUploadApi = async (base64, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_UPLOAD;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/uploads`, {
    body: {
      base64,
    },
    method: 'POST',
  });

  // Return the new upload.
  return get(response, 'data');
};
