// Node modules.
import get from 'lodash/get';
// Relative imports.
import defaultUser from 'assets/defaultUser.svg';
import {
  CREATE_USER,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  FETCH_USER,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
} from './constants';

const initialState = {
  // Error state.
  error: '',
  // Loading states.
  creating: false,
  fetching: false,
  updating: false,
  // Data.
  user: {
    profileImageURL: defaultUser,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return { ...state, creating: true, error: '' };
    }
    case CREATE_USER_FAILURE: {
      return { ...state, creating: false, error: action.error };
    }
    case CREATE_USER_SUCCESS: {
      return { ...state, creating: false, user: action.user };
    }
    case FETCH_USER: {
      return { ...state, fetching: !get(action, 'options.skipFetching'), error: '' };
    }
    case FETCH_USER_FAILURE: {
      return { ...state, fetching: false, error: action.error };
    }
    case FETCH_USER_SUCCESS: {
      return { ...state, fetching: false, user: action.user };
    }
    case UPDATE_USER: {
      return { ...state, updating: true, error: '' };
    }
    case UPDATE_USER_FAILURE: {
      return { ...state, updating: false, error: action.error };
    }
    case UPDATE_USER_SUCCESS: {
      return { ...state, updating: false, user: action.user };
    }
    default: {
      return { ...state };
    }
  }
};
