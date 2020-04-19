// Node modules.
import filter from 'lodash/filter';
import get from 'lodash/get';
import pick from 'lodash/pick';
// Relative imports.
import {
  CREATE_TAG,
  CREATE_TAG_FAILURE,
  CREATE_TAG_SUCCESS,
  DELETE_TAG,
  DELETE_TAG_FAILURE,
  DELETE_TAG_SUCCESS,
  FETCH_TAGS,
  FETCH_TAGS_FAILURE,
  FETCH_TAGS_SUCCESS,
  SELECT_TAG,
  UPDATE_TAG,
  UPDATE_TAG_FAILURE,
  UPDATE_TAG_SUCCESS,
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
  tagIDs: [],
  tagsLookup: {},
  selectedTagID: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TAG: {
      return { ...state, creating: true, error: '' };
    }
    case CREATE_TAG_FAILURE: {
      return { ...state, creating: false, error: action.error };
    }
    case CREATE_TAG_SUCCESS: {
      return {
        ...state,
        creating: false,
        tagsLookup: {
          ...state.tagsLookup,
          [get(action, 'tag.id')]: action.tag,
        },
      };
    }
    case DELETE_TAG: {
      return { ...state, deleting: true, error: '' };
    }
    case DELETE_TAG_FAILURE: {
      return { ...state, deleting: false, error: action.error };
    }
    case DELETE_TAG_SUCCESS: {
      // Derive the updated tagIDs.
      const tagIDs = filter(state.tagIDs, (tag) => tag.id === action.tagID);

      return {
        ...state,
        deleting: false,
        tagIDs,
        tagsLookup: pick(state.tagsLookup, tagIDs),
      };
    }
    case FETCH_TAGS: {
      return { ...state, fetching: !get(action, 'options.skipFetching'), error: '' };
    }
    case FETCH_TAGS_FAILURE: {
      return { ...state, fetching: false, error: action.error };
    }
    case FETCH_TAGS_SUCCESS: {
      return { ...state, fetching: false, tagIDs: action.tagIDs, tagsLookup: action.tagsLookup };
    }
    case SELECT_TAG: {
      return { ...state, selectedTagID: action.tagID };
    }
    case UPDATE_TAG: {
      return { ...state, updating: true, error: '' };
    }
    case UPDATE_TAG_FAILURE: {
      return { ...state, updating: false, error: action.error };
    }
    case UPDATE_TAG_SUCCESS: {
      return {
        ...state,
        updating: false,
        tagsLookup: {
          ...state.tagsLookup,
          [get(action, 'tag.id')]: action.tag,
        },
      };
    }
    default: {
      return { ...state };
    }
  }
};
