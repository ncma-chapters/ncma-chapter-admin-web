// Node modules.
import { call, put, takeLatest } from 'redux-saga/effects';
// Relative imports.
import { handleSagaError } from 'utils/sagaHelpers';
import { CREATE_TAG, DELETE_TAG, FETCH_TAGS, UPDATE_TAG } from './constants';
import { createTagApi, deleteTagApi, fetchTagsApi, updateTagApi } from './api';
import {
  createTagFailure,
  createTagSuccess,
  deleteTagFailure,
  deleteTagSuccess,
  fetchTagsFailure,
  fetchTagsSuccess,
  updateTagFailure,
  updateTagSuccess,
} from './actions';

function* createTagSaga({ tag }) {
  try {
    // Make the request.
    const createdTag = yield call(createTagApi, tag, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(createTagSuccess(createdTag));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [createTagFailure] });
  }
}

function* deleteTagSaga({ tagID }) {
  try {
    // Make the request.
    yield call(deleteTagApi, tagID, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(deleteTagSuccess(tagID));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [deleteTagFailure] });
  }
}

function* fetchTagsSaga() {
  try {
    // Make the request.
    const tags = yield call(fetchTagsApi, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(fetchTagsSuccess(tags));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [fetchTagsFailure] });
  }
}

function* updateTagSaga({ tag }) {
  try {
    // Make the request.
    const updatedTag = yield call(updateTagApi, tag, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(updateTagSuccess(updatedTag));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [updateTagFailure] });
  }
}

export default [
  takeLatest(CREATE_TAG, createTagSaga),
  takeLatest(DELETE_TAG, deleteTagSaga),
  takeLatest(FETCH_TAGS, fetchTagsSaga),
  takeLatest(UPDATE_TAG, updateTagSaga),
];
