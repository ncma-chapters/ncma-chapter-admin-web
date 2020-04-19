// Node modules.
import filter from 'lodash/filter';
import get from 'lodash/get';
import pick from 'lodash/pick';
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

const initialState = {
  // Error state.
  error: '',
  // Loading states.
  creating: false,
  deleting: false,
  fetching: false,
  updating: false,
  // Data.
  eventIDs: [],
  eventsLookup: {},
  selectedEventID: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      return { ...state, creating: true, error: '' };
    }
    case CREATE_EVENT_FAILURE: {
      return { ...state, creating: false, error: action.error };
    }
    case CREATE_EVENT_SUCCESS: {
      return {
        ...state,
        creating: false,
        eventsLookup: {
          ...state.eventsLookup,
          [get(action, 'event.id')]: action.event,
        },
      };
    }
    case DELETE_EVENT: {
      return { ...state, deleting: true, error: '' };
    }
    case DELETE_EVENT_FAILURE: {
      return { ...state, deleting: false, error: action.error };
    }
    case DELETE_EVENT_SUCCESS: {
      // Derive the updated eventIDs.
      const eventIDs = filter(state.eventIDs, (event) => event.id === action.eventID);

      return {
        ...state,
        deleting: false,
        eventIDs,
        eventsLookup: pick(state.eventsLookup, eventIDs),
      };
    }
    case FETCH_EVENTS: {
      return { ...state, fetching: !get(action, 'options.skipFetching'), error: '' };
    }
    case FETCH_EVENTS_FAILURE: {
      return { ...state, fetching: false, error: action.error };
    }
    case FETCH_EVENTS_SUCCESS: {
      return { ...state, fetching: false, eventIDs: action.eventIDs, eventsLookup: action.eventsLookup };
    }
    case SELECT_EVENT: {
      return { ...state, selectedEventID: action.eventID };
    }
    case UPDATE_EVENT: {
      return { ...state, updating: true, error: '' };
    }
    case UPDATE_EVENT_FAILURE: {
      return { ...state, updating: false, error: action.error };
    }
    case UPDATE_EVENT_SUCCESS: {
      return {
        ...state,
        updating: false,
        eventsLookup: {
          ...state.eventsLookup,
          [get(action, 'event.id')]: action.event,
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};
