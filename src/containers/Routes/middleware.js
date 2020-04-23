// Node modules.
import { takeLatest } from 'redux-saga/effects';
// Relative imports.
import { APP_INIT } from './constants';

export function* appInitSaga() {
  // Add appInit logic here.
}

export default [takeLatest(APP_INIT, appInitSaga)];
