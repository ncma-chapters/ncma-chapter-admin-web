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

// ===================
// Create a tag.
// ===================
export const createTagAction = (tag) => ({
  tag,
  type: CREATE_TAG,
});

export const createTagFailure = (error) => ({
  error,
  type: CREATE_TAG_FAILURE,
});

export const createTagSuccess = (tag) => ({
  tag,
  type: CREATE_TAG_SUCCESS,
});

// ===================
// Delete a tag.
// ===================
export const deleteTagAction = (tagID) => ({
  tagID,
  type: DELETE_TAG,
});

export const deleteTagFailure = (error) => ({
  error,
  type: DELETE_TAG_FAILURE,
});

export const deleteTagSuccess = (tagID) => ({
  tagID,
  type: DELETE_TAG_SUCCESS,
});

// ===================
// Fetch all tags.
// ===================
export const fetchTagsAction = () => ({
  type: FETCH_TAGS,
});

export const fetchTagsFailure = (error) => ({
  error,
  type: FETCH_TAGS_FAILURE,
});

export const fetchTagsSuccess = (tags) => ({
  tags,
  type: FETCH_TAGS_SUCCESS,
});

// ===================
// Select a tag.
// ===================
export const selectTagAction = (tagID) => ({
  tagID,
  type: SELECT_TAG,
});

// ===================
// Update a tag.
// ===================
export const updateTagAction = (tag) => ({
  tag,
  type: UPDATE_TAG,
});

export const updateTagFailure = (error) => ({
  error,
  type: UPDATE_TAG_FAILURE,
});

export const updateTagSuccess = (tag) => ({
  tag,
  type: UPDATE_TAG_SUCCESS,
});
