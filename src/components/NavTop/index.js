// Node modules.
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import get from 'lodash/get';
// Relative imports.
import logo from 'assets/logo.svg';
import { logoutAction } from 'containers/Sessions/actions';
import { Wrapper } from './styles';

const NavTop = ({ logout, user }) => (
  <Wrapper>
    <div className="inner-wrapper">
      {/* Logo */}
      <Link className="logo" to="/">
        <img alt="logo" src={logo} />
      </Link>

      {/* Navigation Items */}
      <div className="nav-items">
        <Link className={window.location.pathname === '/events'} to="/events">
          Events
        </Link>
        {/* <Link className={window.location.pathname === '/tags'} to="/tags">
          Tags
        </Link> */}
        <Link className={window.location.pathname === '/venues'} to="/venues">
          Venues
        </Link>
      </div>

      {/* User Info */}
      <div className="user-info">
        <Link className="user-icon" to="/user">
          <img alt="user" src={get(user, 'profileImageURL')} />
        </Link>
        <button className="logout-button" onClick={logout} type="button">
          Logout
        </button>
      </div>
    </div>
  </Wrapper>
);

NavTop.propTypes = {
  // From mapStateToProps.
  user: PropTypes.shape({
    profileImageURL: PropTypes.string.isRequired,
  }).isRequired,
  // From mapDispatchToProps.
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavTop);
