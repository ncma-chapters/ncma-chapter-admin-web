// Relative imports.
import { CREATE_UPLOAD, CREATE_UPLOAD_FAILURE, CREATE_UPLOAD_SUCCESS } from './constants';

// ===================
// Create a upload.
// ===================
export const createUploadAction = (base64) => ({
  base64,
  type: CREATE_UPLOAD,
});

export const createUploadFailure = (error) => ({
  error,
  type: CREATE_UPLOAD_FAILURE,
});

export const createUploadSuccess = (upload) => ({
  upload,
  type: CREATE_UPLOAD_SUCCESS,
});
