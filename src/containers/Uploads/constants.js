// Node modules.
import { v4 as uuidv4 } from 'uuid/v4';

// ===================
// Actions' constants.
// ===================
export const CREATE_UPLOAD = 'containers/Uploads/CREATE_UPLOAD';
export const CREATE_UPLOAD_FAILURE = 'containers/Uploads/CREATE_UPLOAD_FAILURE';
export const CREATE_UPLOAD_SUCCESS = 'containers/Uploads/CREATE_UPLOAD_SUCCESS';

// ===================
// Fake upload model.
// ===================
export const FAKE_UPLOAD = {
  id: uuidv4(),
};
