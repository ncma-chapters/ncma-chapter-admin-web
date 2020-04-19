// Node modules.
import { all } from 'redux-saga/effects';
// Relative imports.
import eventsSagas from 'containers/Events/middleware';
import routesSagas from 'containers/Routes/middleware';
import sessionsSagas from 'containers/Sessions/middleware';
import tagsSagas from 'containers/Tags/middleware';
import uploadsSagas from 'containers/Uploads/middleware';
import userSagas from 'containers/User/middleware';
import venuesSagas from 'containers/Venues/middleware';

// NOTE: Current pattern taken from https://github.com/redux-saga/redux-saga/issues/160#issuecomment-308540204
export default function* rootSaga() {
  yield all([
    ...eventsSagas,
    ...routesSagas,
    ...sessionsSagas,
    ...tagsSagas,
    ...uploadsSagas,
    ...userSagas,
    ...venuesSagas,
  ]);
}
