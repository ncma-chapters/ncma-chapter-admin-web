// Node modules.
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
// Relative imports.
import { deriveCurrentUser } from 'utils/auth';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (deriveCurrentUser() ? <Component {...props} /> : <Redirect to="/login" />)} />
);

AuthenticatedRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default AuthenticatedRoute;
