// Node modules.
import { all, put } from 'redux-saga/effects';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import map from 'lodash/map';

// ==============================
// HELPER TO HANDLE SAGA ERRORS.
// ==============================
export function* handleSagaError(error, options = {}) {
  // Log the error.
  console.log(error);

  // Derive the actionCreators to fire off.
  const actionCreators = get(options, 'actionCreators', []);

  // Validate the structure of actionCreators due to common mistakes.
  const firstAction = get(actionCreators, '[0]');
  if (!isFunction(firstAction)) {
    console.log(
      `Unhandled error due to "handleSagaError"'s second argument "options".\n${options}\nPlease be sure that "options.actionCreators" is an array of action creators (ie. functions), not actions (ie. objects).`,
    );
    return;
  }

  // Escape early if there are no extra actions to dispatch.
  if (isEmpty(actionCreators)) {
    return;
  }

  // Dispatch all actions and provide the errorMessage with each one.
  yield all(map(actionCreators, (actionCreator) => put(actionCreator(get(error, 'message', 'Unknown error occured')))));
}
