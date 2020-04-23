// Node modules.
import get from 'lodash/get';
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from 'amazon-cognito-identity-js';
// Relative imports.
import history from 'store/history';
import { deriveCurrentUser } from 'utils/auth';
import { delay, FAKE_API_TIMEOUT_MS } from 'utils/request';

export const loginApi = async (credentials = {}, options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return undefined;
  }

  // Derive the auth details.
  const authenticationDetails = new AuthenticationDetails({
    Username: get(credentials, 'email'),
    Password: get(credentials, 'password'),
  });

  // Derive the user pool.
  const userPool = new CognitoUserPool({
    ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
    UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  });

  // Derive the current user.
  const currentUser = new CognitoUser({
    Pool: userPool,
    Username: get(credentials, 'email'),
  });

  // Attempt to authenticate the user.
  await currentUser.authenticateUser(authenticationDetails, {
    onFailure: (error) => {
      throw new Error(error);
    },
    onSuccess: () => {
      // Navigate to the dashboard.
      history.push('/');
    },
  });
};

export const logoutApi = async (options = {}) => {
  // Fake the request if desired.
  if (get(options, 'fake')) {
    await delay(FAKE_API_TIMEOUT_MS);
    return undefined;
  }

  // Derive the current user.
  const currentUser = deriveCurrentUser();

  // Escape early if there's no current user.
  if (!currentUser) {
    return;
  }

  // Attempt to log out.
  currentUser.signOut();

  // Navigate to login.
  history.push('/login');
};
