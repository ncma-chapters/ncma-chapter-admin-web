// Node modules.
import { call, put, takeLatest } from 'redux-saga/effects';
// Relative imports.
import { handleSagaError } from 'utils/sagaHelpers';
import { LOGIN, LOGOUT } from './constants';
import { loginApi, logoutApi } from './api';
import { loginFailure, loginSuccess, logoutFailure, logoutSuccess } from './actions';

function* loginSaga({ credentials }) {
  try {
    // Make the request.
    const token = yield call(loginApi, credentials, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(loginSuccess(token));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [loginFailure] });
  }
}

function* logoutSaga() {
  try {
    // Make the request.
    yield call(logoutApi, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(logoutSuccess());
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [logoutFailure] });
  }
}

export default [takeLatest(LOGIN, loginSaga), takeLatest(LOGOUT, logoutSaga)];
