// Node modules.
import { CognitoUserPool } from 'amazon-cognito-identity-js';

export const deriveCurrentUser = () => {
  // Derive the user pool.
  const userPool = new CognitoUserPool({
    ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
    UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  });

  // Derive the current user.
  return userPool.getCurrentUser();
};
