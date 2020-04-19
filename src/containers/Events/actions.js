// Relative imports.
import {
  CREATE_EVENT,
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_SUCCESS,
  DELETE_EVENT,
  DELETE_EVENT_FAILURE,
  DELETE_EVENT_SUCCESS,
  FETCH_EVENTS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_SUCCESS,
  SELECT_EVENT,
  UPDATE_EVENT,
  UPDATE_EVENT_FAILURE,
  UPDATE_EVENT_SUCCESS,
} from './constants';

// ===================
// Create an event.
// ===================
export const createEventAction = (event) => ({
  event,
  type: CREATE_EVENT,
});

export const createEventFailure = (error) => ({
  error,
  type: CREATE_EVENT_FAILURE,
});

export const createEventSuccess = (event) => ({
  event,
  type: CREATE_EVENT_SUCCESS,
});

// ===================
// Delete an event.
// ===================
export const deleteEventAction = (eventID) => ({
  eventID,
  type: DELETE_EVENT,
});

export const deleteEventFailure = (error) => ({
  error,
  type: DELETE_EVENT_FAILURE,
});

export const deleteEventSuccess = (eventID) => ({
  eventID,
  type: DELETE_EVENT_SUCCESS,
});

// ===================
// Fetch all events.
// ===================
export const fetchEventsAction = () => ({
  type: FETCH_EVENTS,
});

export const fetchEventsFailure = (error) => ({
  error,
  type: FETCH_EVENTS_FAILURE,
});

export const fetchEventsSuccess = (events) => ({
  events,
  type: FETCH_EVENTS_SUCCESS,
});

// ===================
// Select an event.
// ===================
export const selectEventAction = (eventID) => ({
  eventID,
  type: SELECT_EVENT,
});

// ===================
// Update an event.
// ===================
export const updateEventAction = (event) => ({
  event,
  type: UPDATE_EVENT,
});

export const updateEventFailure = (error) => ({
  error,
  type: UPDATE_EVENT_FAILURE,
});

export const updateEventSuccess = (event) => ({
  event,
  type: UPDATE_EVENT_SUCCESS,
});
