// Node modules.
import filter from 'lodash/filter';
import get from 'lodash/get';
import pick from 'lodash/pick';
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

const initialState = {
  // Error state.
  error: '',
  // Loading states.
  creating: false,
  deleting: false,
  fetching: false,
  updating: false,
  // Data.
  venueIDs: [],
  venuesLookup: {},
  selectedVenueID: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_VENUE: {
      return { ...state, creating: true, error: '' };
    }
    case CREATE_VENUE_FAILURE: {
      return { ...state, creating: false, error: action.error };
    }
    case CREATE_VENUE_SUCCESS: {
      return {
        ...state,
        creating: false,
        venuesLookup: {
          ...state.venuesLookup,
          [get(action, 'venue.id')]: action.venue,
        },
      };
    }
    case DELETE_VENUE: {
      return { ...state, deleting: true, error: '' };
    }
    case DELETE_VENUE_FAILURE: {
      return { ...state, deleting: false, error: action.error };
    }
    case DELETE_VENUE_SUCCESS: {
      // Derive the updated venueIDs.
      const venueIDs = filter(state.venueIDs, (venue) => venue.id === action.venueID);

      return {
        ...state,
        deleting: false,
        venueIDs,
        venuesLookup: pick(state.venuesLookup, venueIDs),
      };
    }
    case FETCH_VENUES: {
      return { ...state, fetching: !get(action, 'options.skipFetching'), error: '' };
    }
    case FETCH_VENUES_FAILURE: {
      return { ...state, fetching: false, error: action.error };
    }
    case FETCH_VENUES_SUCCESS: {
      return { ...state, fetching: false, venueIDs: action.venueIDs, venuesLookup: action.venuesLookup };
    }
    case SELECT_VENUE: {
      return { ...state, selectedVenueID: action.venueID };
    }
    case UPDATE_VENUE: {
      return { ...state, updating: true, error: '' };
    }
    case UPDATE_VENUE_FAILURE: {
      return { ...state, updating: false, error: action.error };
    }
    case UPDATE_VENUE_SUCCESS: {
      return {
        ...state,
        updating: false,
        venuesLookup: {
          ...state.venuesLookup,
          [get(action, 'venue.id')]: action.venue,
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};
