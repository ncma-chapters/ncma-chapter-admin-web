// Relative imports.
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILURE, LOGOUT_SUCCESS } from './constants';

const initialState = {
  // Erorr states.
  error: '',
  // Loading states.
  loggingIn: false,
  loggingOut: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, error: '', loggingIn: true };
    }
    case LOGIN_FAILURE: {
      return { ...state, error: action.error, loggingIn: false };
    }
    case LOGIN_SUCCESS: {
      return { ...state, loggingIn: false };
    }
    case LOGOUT: {
      return { ...state, error: '', loggingOut: true };
    }
    case LOGOUT_FAILURE: {
      return { ...state, error: action.error, loggingOut: false };
    }
    case LOGOUT_SUCCESS: {
      return { ...state, loggingOut: false };
    }
    default: {
      return { ...state };
    }
  }
};
