// Node modules.
import get from 'lodash/get';
// Relative imports.
import request, { delay, FAKE_API_TIMEOUT_MS } from 'utils/request';
import { FAKE_VENUE } from './constants';

export const createVenueApi = async (venue, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_VENUE;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/venues`, { body: venue, method: 'POST' });

  // Return the new venue.
  return get(response, 'data');
};

export const deleteVenueApi = async (venueID, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_VENUE;
  }

  // Make the request.
  await request(`${process.env.REACT_APP_API_URL}/venues/${venueID}`, { method: 'DELETE' });

  // Return nothing.
  return undefined;
};

export const fetchVenuesApi = async (options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return [FAKE_VENUE, FAKE_VENUE, FAKE_VENUE];
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/venues`);

  // Return the new venue.
  return get(response, 'data');
};

export const updateVenueApi = async (venue, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return FAKE_VENUE;
  }

  // Make the request.
  const response = await request(`${process.env.REACT_APP_API_URL}/venues/${get(venue, 'id')}`, {
    body: venue,
    method: 'PUT',
  });

  // Return the new venue.
  return get(response, 'data');
};
