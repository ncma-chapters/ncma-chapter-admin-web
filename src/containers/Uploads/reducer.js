// Relative imports.
import { CREATE_UPLOAD, CREATE_UPLOAD_FAILURE, CREATE_UPLOAD_SUCCESS } from './constants';

const initialState = {
  // Error state.
  error: '',
  // Loading states.
  creating: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_UPLOAD: {
      return { ...state, creating: true, error: '' };
    }
    case CREATE_UPLOAD_FAILURE: {
      return { ...state, creating: false, error: action.error };
    }
    case CREATE_UPLOAD_SUCCESS: {
      return { ...state, creating: false };
    }
    default: {
      return { ...state };
    }
  }
};
