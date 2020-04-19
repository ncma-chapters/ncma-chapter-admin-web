// Node modules.
import { all } from 'redux-saga/effects';
// Relative imports.
import eventsSagas from 'containers/Events/middleware';
import routesSagas from 'containers/Routes/middleware';
import sessionsSagas from 'containers/Sessions/middleware';
import tagsSagas from 'containers/Tags/middleware';

// NOTE: Current pattern taken from https://github.com/redux-saga/redux-saga/issues/160#issuecomment-308540204
export default function* rootSaga() {
  yield all([...eventsSagas, ...routesSagas, ...sessionsSagas, ...tagsSagas]);
}
