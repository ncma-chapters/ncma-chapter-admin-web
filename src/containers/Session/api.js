// Node modules.
import get from 'lodash/get';
// Relative imports.
import request, { delay, FAKE_API_TIMEOUT_MS } from 'utils/request';

export const loginApi = async (credentials = {}, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return 'b8fa48a5-cee3-48c1-9dc9-6507893810a6';
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/login`, {
    data: credentials,
    method: 'POST',
  });

  // Derive the token.
  const token = get(response, 'token');

  // Return the token.
  return token;
};

export const logoutApi = async (options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return undefined;
  }

  // Make the request.
  await request(`${process.env.REACT_APP_API_URL}/logout`, { method: 'DELETE' });

  // Return nothing.
  return undefined;
};
