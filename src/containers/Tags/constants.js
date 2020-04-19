// Node modules.
import { v4 as uuidv4 } from 'uuid/v4';

// ===================
// Actions' constants.
// ===================
export const CREATE_TAG = 'containers/Tags/CREATE_TAG';
export const CREATE_TAG_FAILURE = 'containers/Tags/CREATE_TAG_FAILURE';
export const CREATE_TAG_SUCCESS = 'containers/Tags/CREATE_TAG_SUCCESS';
export const DELETE_TAG = 'containers/Tags/DELETE_TAG';
export const DELETE_TAG_FAILURE = 'containers/Tags/DELETE_TAG_FAILURE';
export const DELETE_TAG_SUCCESS = 'containers/Tags/DELETE_TAG_SUCCESS';
export const FETCH_TAGS = 'containers/Tags/FETCH_TAGS';
export const FETCH_TAGS_FAILURE = 'containers/Tags/FETCH_TAGS_FAILURE';
export const FETCH_TAGS_SUCCESS = 'containers/Tags/FETCH_TAGS_SUCCESS';
export const SELECT_TAG = 'containers/Tags/SELECT_TAG';
export const UPDATE_TAG = 'containers/Tags/UPDATE_TAG';
export const UPDATE_TAG_FAILURE = 'containers/Tags/UPDATE_TAG_FAILURE';
export const UPDATE_TAG_SUCCESS = 'containers/Tags/UPDATE_TAG_SUCCESS';

// ===================
// Fake tag model.
// ===================
export const FAKE_TAG = {
  id: uuidv4(),
  title: 'An Example Tag',
};
