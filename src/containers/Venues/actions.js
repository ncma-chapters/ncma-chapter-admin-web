// Relative imports.
import {
  CREATE_VENUE,
  CREATE_VENUE_FAILURE,
  CREATE_VENUE_SUCCESS,
  DELETE_VENUE,
  DELETE_VENUE_FAILURE,
  DELETE_VENUE_SUCCESS,
  FETCH_VENUES,
  FETCH_VENUES_FAILURE,
  FETCH_VENUES_SUCCESS,
  SELECT_VENUE,
  UPDATE_VENUE,
  UPDATE_VENUE_FAILURE,
  UPDATE_VENUE_SUCCESS,
} from './constants';

// ===================
// Create a venue.
// ===================
export const createVenueAction = (venue) => ({
  venue,
  type: CREATE_VENUE,
});

export const createVenueFailure = (error) => ({
  error,
  type: CREATE_VENUE_FAILURE,
});

export const createVenueSuccess = (venue) => ({
  venue,
  type: CREATE_VENUE_SUCCESS,
});

// ===================
// Delete a venue.
// ===================
export const deleteVenueAction = (venueID) => ({
  venueID,
  type: DELETE_VENUE,
});

export const deleteVenueFailure = (error) => ({
  error,
  type: DELETE_VENUE_FAILURE,
});

export const deleteVenueSuccess = (venueID) => ({
  venueID,
  type: DELETE_VENUE_SUCCESS,
});

// ===================
// Fetch all venues.
// ===================
export const fetchVenuesAction = () => ({
  type: FETCH_VENUES,
});

export const fetchVenuesFailure = (error) => ({
  error,
  type: FETCH_VENUES_FAILURE,
});

export const fetchVenuesSuccess = (venues) => ({
  venues,
  type: FETCH_VENUES_SUCCESS,
});

// ===================
// Select a venue.
// ===================
export const selectVenueAction = (venueID) => ({
  venueID,
  type: SELECT_VENUE,
});

// ===================
// Update a venue.
// ===================
export const updateVenueAction = (venue) => ({
  venue,
  type: UPDATE_VENUE,
});

export const updateVenueFailure = (error) => ({
  error,
  type: UPDATE_VENUE_FAILURE,
});

export const updateVenueSuccess = (venue) => ({
  venue,
  type: UPDATE_VENUE_SUCCESS,
});
