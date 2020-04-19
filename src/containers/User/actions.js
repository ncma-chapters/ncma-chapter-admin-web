// Relative imports.
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

// ===================
// Create a user.
// ===================
export const createUserAction = (user) => ({
  user,
  type: CREATE_USER,
});

export const createUserFailure = (error) => ({
  error,
  type: CREATE_USER_FAILURE,
});

export const createUserSuccess = (user) => ({
  user,
  type: CREATE_USER_SUCCESS,
});

// ===================
// Fetch current user.
// ===================
export const fetchUserAction = (userID) => ({
  userID,
  type: FETCH_USER,
});

export const fetchUserFailure = (error) => ({
  error,
  type: FETCH_USER_FAILURE,
});

export const fetchUserSuccess = (user) => ({
  user,
  type: FETCH_USER_SUCCESS,
});

// ===================
// Update a user.
// ===================
export const updateUserAction = (user) => ({
  user,
  type: UPDATE_USER,
});

export const updateUserFailure = (error) => ({
  error,
  type: UPDATE_USER_FAILURE,
});

export const updateUserSuccess = (user) => ({
  user,
  type: UPDATE_USER_SUCCESS,
});
