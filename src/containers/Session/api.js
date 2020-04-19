// Node modules.
import get from 'lodash/get';
// Relative imports.
import request, { delay } from 'utils/request';

export const loginApi = async (credentials = {}, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(500);
    return 'b8fa48a5-cee3-48c1-9dc9-6507893810a6';
  }

  // Make the request.
  const response = await request(`${process.env.API_BASE_URL}/login`, {
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
    await delay(500);
    return undefined;
  }

  // Make the request.
  await request(`${process.env.API_BASE_URL}/logout`, { method: 'DELETE' });

  // Return nothing.
  return undefined;
};
