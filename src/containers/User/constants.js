// Node modules.
import uuidv4 from 'uuid/v4';

// ===================
// Actions' constants.
// ===================
export const CREATE_USER = 'containers/User/CREATE_USER';
export const CREATE_USER_FAILURE = 'containers/User/CREATE_USER_FAILURE';
export const CREATE_USER_SUCCESS = 'containers/User/CREATE_USER_SUCCESS';
export const FETCH_USER = 'containers/User/FETCH_USER';
export const FETCH_USER_FAILURE = 'containers/User/FETCH_USER_FAILURE';
export const FETCH_USER_SUCCESS = 'containers/User/FETCH_USER_SUCCESS';
export const UPDATE_USER = 'containers/User/UPDATE_USER';
export const UPDATE_USER_FAILURE = 'containers/User/UPDATE_USER_FAILURE';
export const UPDATE_USER_SUCCESS = 'containers/User/UPDATE_USER_SUCCESS';

// ===================
// Fake user model.
// ===================
export const FAKE_USER = {
  id: uuidv4(),
  firstName: 'Kelson',
  lastName: 'Adams',
  email: 'kgadams93@gmail.com',
  phone: '4156198667',
  enableSMSNotifications: false,
  enableEmailNotifications: true,
  theme: 'light',
  imageURL: 'https://api.ncmamonmouth.org/uploads/ff2418f6-b52a-4194-be9b-13108d7cb5c7',
};
