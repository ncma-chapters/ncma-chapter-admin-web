// Node modules.
import get from 'lodash/get';
// Relative imports.
import request, { delay, FAKE_API_TIMEOUT_MS } from 'utils/request';
import { FAKE_USER } from './constants';

export const createUserApi = async (user, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_USER;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/users`, { body: user, method: 'POST' });

  // Return the new user.
  return get(response, 'data');
};

export const fetchUserApi = async (options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_USER;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/user`);

  // Return the new user.
  return get(response, 'data');
};

export const updateUserApi = async (user, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_USER;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/user`, {
    body: user,
    method: 'PUT',
  });

  // Return the new user.
  return get(response, 'data');
};
