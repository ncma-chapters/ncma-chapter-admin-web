// Node modules.
import { call, put, takeLatest } from 'redux-saga/effects';
// Relative imports.
import { handleSagaError } from 'utils/sagaHelpers';
import { CREATE_USER, FETCH_USER, UPDATE_USER } from './constants';
import { createUserApi, fetchUserApi, updateUserApi } from './api';
import {
  createUserFailure,
  createUserSuccess,
  fetchUserFailure,
  fetchUserSuccess,
  updateUserFailure,
  updateUserSuccess,
} from './actions';

function* createUserSaga({ user }) {
  try {
    // Make the request.
    const createdUser = yield call(createUserApi, user, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(createUserSuccess(createdUser));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [createUserFailure] });
  }
}

function* fetchUserSaga() {
  try {
    // Make the request.
    const user = yield call(fetchUserApi, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [fetchUserFailure] });
  }
}

function* updateUserSaga({ user }) {
  try {
    // Make the request.
    const updatedUser = yield call(updateUserApi, user, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(updateUserSuccess(updatedUser));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [updateUserFailure] });
  }
}

export default [
  takeLatest(CREATE_USER, createUserSaga),
  takeLatest(FETCH_USER, fetchUserSaga),
  takeLatest(UPDATE_USER, updateUserSaga),
];
