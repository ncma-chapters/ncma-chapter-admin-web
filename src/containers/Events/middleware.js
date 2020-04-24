// Node modules.
import get from 'lodash/get';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import { call, put, takeLatest } from 'redux-saga/effects';
// Relative imports.
import { handleSagaError } from 'utils/sagaHelpers';
import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENTS, UPDATE_EVENT } from './constants';
import { createEventApi, deleteEventApi, fetchEventsApi, updateEventApi } from './api';
import {
  createEventFailure,
  createEventSuccess,
  deleteEventFailure,
  deleteEventSuccess,
  fetchEventsFailure,
  fetchEventsSuccess,
  updateEventFailure,
  updateEventSuccess,
} from './actions';

function* createEventSaga({ event }) {
  try {
    // Make the request.
    const createdEvent = yield call(createEventApi, event, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(createEventSuccess(createdEvent));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [createEventFailure] });
  }
}

function* deleteEventSaga({ eventID }) {
  try {
    // Make the request.
    yield call(deleteEventApi, eventID, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(deleteEventSuccess(eventID));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [deleteEventFailure] });
  }
}

function* fetchEventsSaga() {
  try {
    // Make the request.
    const events = yield call(fetchEventsApi, { fake: process.env.REACT_APP_FAKE_API });

    // Derive eventIDs and eventsLookup.
    const eventIDs = map(events, 'id');
    const eventsLookup = reduce(
      events,
      (eventsLookup, event) => {
        eventsLookup[get(event, 'id')] = event;
        return eventsLookup;
      },
      {},
    );

    // Update our state.
    yield put(fetchEventsSuccess(eventIDs, eventsLookup));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [fetchEventsFailure] });
  }
}

function* updateEventSaga({ event }) {
  try {
    // Make the request.
    const updatedEvent = yield call(updateEventApi, event, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(updateEventSuccess(updatedEvent));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [updateEventFailure] });
  }
}

export default [
  takeLatest(CREATE_EVENT, createEventSaga),
  takeLatest(DELETE_EVENT, deleteEventSaga),
  takeLatest(FETCH_EVENTS, fetchEventsSaga),
  takeLatest(UPDATE_EVENT, updateEventSaga),
];
