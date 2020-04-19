// Node modules.
import get from 'lodash/get';
// Relative imports.
import request, { delay, FAKE_API_TIMEOUT_MS } from 'utils/request';
import { FAKE_TAG } from './constants';

export const createTagApi = async (tag, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_TAG;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/tags`, { body: tag, method: 'POST' });

  // Return the new tag.
  return get(response, 'data');
};

export const deleteTagApi = async (tagID, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_TAG;
  }

  // Make the request.
  await request(`${process.env.REACT_APP_API_URL}/tags/${tagID}`, { method: 'DELETE' });

  // Return nothing.
  return undefined;
};

export const fetchTagsApi = async (options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_TAG;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/tags`);

  // Return the new tag.
  return get(response, 'data');
};

export const updateTagApi = async (tag, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_TAG;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/tags/${get(tag, 'id')}`, {
    body: tag,
    method: 'POST',
  });

  // Return the new tag.
  return get(response, 'data');
};
