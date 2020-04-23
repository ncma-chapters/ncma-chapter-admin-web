// Node modules.
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

AuthenticatedRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

export default AuthenticatedRoute;
