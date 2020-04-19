// Node modules.
import get from 'lodash/get';
// Relative imports.
import request, { delay, FAKE_API_TIMEOUT_MS } from 'utils/request';
import { FAKE_EVENT } from './constants';

export const createEventApi = async (event, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_EVENT;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/events`, { body: event, method: 'POST' });

  // Return the new event.
  return get(response, 'data');
};

export const deleteEventApi = async (eventID, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_EVENT;
  }

  // Make the request.
  await request(`${process.env.REACT_APP_API_URL}/events/${eventID}`, { method: 'DELETE' });

  // Return nothing.
  return undefined;
};

export const fetchEventsApi = async (options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_EVENT;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/events`);

  // Return the new event.
  return get(response, 'data');
};

export const updateEventApi = async (event, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_EVENT;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/events/${get(event, 'id')}`, {
    body: event,
    method: 'POST',
  });

  // Return the new event.
  return get(response, 'data');
};
