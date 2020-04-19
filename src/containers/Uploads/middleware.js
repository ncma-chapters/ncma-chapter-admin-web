// Node modules.
import { call, put, takeLatest } from 'redux-saga/effects';
// Relative imports.
import { handleSagaError } from 'utils/sagaHelpers';
import { CREATE_UPLOAD } from './constants';
import { createUploadApi } from './api';
import { createUploadFailure, createUploadSuccess } from './actions';

function* createUploadSaga({ base64 }) {
  try {
    // Make the request.
    const createdUpload = yield call(createUploadApi, base64, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(createUploadSuccess(createdUpload));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [createUploadFailure] });
  }
}

export default [takeLatest(CREATE_UPLOAD, createUploadSaga)];
