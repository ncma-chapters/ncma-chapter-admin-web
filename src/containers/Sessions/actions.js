// Relative imports.
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAILURE, LOGOUT_SUCCESS } from './constants';

export const loginAction = (credentials) => ({
  credentials,
  type: LOGIN,
});

export const loginFailure = (error) => ({
  error,
  type: LOGIN_FAILURE,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const logoutFailure = (error) => ({
  error,
  type: LOGOUT_FAILURE,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
