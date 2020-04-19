// Node modules.
import { call, put, takeLatest } from 'redux-saga/effects';
// Relative imports.
import { handleSagaError } from 'utils/sagaHelpers';
import { CREATE_VENUE, DELETE_VENUE, FETCH_VENUES, UPDATE_VENUE } from './constants';
import { createVenueApi, deleteVenueApi, fetchVenuesApi, updateVenueApi } from './api';
import {
  createVenueFailure,
  createVenueSuccess,
  deleteVenueFailure,
  deleteVenueSuccess,
  fetchVenuesFailure,
  fetchVenuesSuccess,
  updateVenueFailure,
  updateVenueSuccess,
} from './actions';

function* createVenueSaga({ venue }) {
  try {
    // Make the request.
    const createdVenue = yield call(createVenueApi, venue, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(createVenueSuccess(createdVenue));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [createVenueFailure] });
  }
}

function* deleteVenueSaga({ venueID }) {
  try {
    // Make the request.
    yield call(deleteVenueApi, venueID, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(deleteVenueSuccess(venueID));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [deleteVenueFailure] });
  }
}

function* fetchVenuesSaga() {
  try {
    // Make the request.
    const venues = yield call(fetchVenuesApi, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(fetchVenuesSuccess(venues));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [fetchVenuesFailure] });
  }
}

function* updateVenueSaga({ venue }) {
  try {
    // Make the request.
    const updatedVenue = yield call(updateVenueApi, venue, { fake: process.env.REACT_APP_FAKE_API });

    // Update our state.
    yield put(updateVenueSuccess(updatedVenue));
  } catch (error) {
    yield call(handleSagaError, error, { actionCreators: [updateVenueFailure] });
  }
}

export default [
  takeLatest(CREATE_VENUE, createVenueSaga),
  takeLatest(DELETE_VENUE, deleteVenueSaga),
  takeLatest(FETCH_VENUES, fetchVenuesSaga),
  takeLatest(UPDATE_VENUE, updateVenueSaga),
];
