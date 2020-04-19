// Node modules.
import { all } from 'redux-saga/effects';
// Relative imports.
import routesSagas from 'containers/Routes/middleware';
import sessionSagas from 'containers/Session/middleware';

// NOTE: Current pattern taken from https://github.com/redux-saga/redux-saga/issues/160#issuecomment-308540204
export default function* rootSaga() {
  yield all([...routesSagas, ...sessionSagas]);
}
