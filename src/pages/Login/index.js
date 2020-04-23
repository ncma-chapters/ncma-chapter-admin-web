// Node modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Relative imports.
import Spinner from 'components/Spinner';
import logo from 'assets/logo.svg';
import { loginAction } from 'containers/Sessions/actions';
import { Wrapper } from './styles';

class Login extends Component {
  static propTypes = {
    // From mapStateToProps.
    loggingIn: PropTypes.bool.isRequired,
    // From mapDispatchToProps.
    login: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onStateChange = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  };

  onLogin = (event) => {
    // Prevent default browser behavior.
    event.preventDefault();

    const { isValid } = this;
    const { email, password } = this.state;

    // Escape early if form is not valid.
    if (!isValid()) {
      return;
    }

    // Attempt to login.
    this.props.login({ email, password });
  };

  isValid = () => {
    const { loggingIn } = this.props;
    const { email, password } = this.state;

    // Escape early if they are currently logging in.
    if (loggingIn) {
      return false;
    }

    // Escape early if they have not typed in email.
    if (!email) {
      return false;
    }

    // Escape early if they have not typed in password.
    if (!password) {
      return false;
    }

    return true;
  };

  render() {
    const { isValid, onStateChange, onLogin, toResetPassword } = this;
    const { email, password } = this.state;
    const { loggingIn } = this.props;

    return (
      <Wrapper>
        {/* Logo Banner */}
        <div className="logo-wrapper">
          <img alt="logo" src={logo} />
        </div>

        {/* Title Banner */}
        <div className="title-wrapper">
          <h1>ADMIN DASHBOARD</h1>
        </div>

        {/* Title */}
        <h2>LOGIN</h2>

        <form onSubmit={onLogin}>
          {/* Email */}
          <input autoFocus onChange={onStateChange('email')} placeholder="Email" type="email" value={email} />

          {/* Password */}
          <input onChange={onStateChange('password')} placeholder="Password" type="password" value={password} />

          {/* Forgot Password */}
          <Link onClick={toResetPassword} to="/reset-password">
            Forgot password?
          </Link>

          {/* Submit */}
          <button disabled={!isValid()} onClick={onLogin} type="submit">
            {loggingIn ? <Spinner /> : 'Login'}
          </button>

          {/* Register Link */}
          <p>
            New to the NCMA Admin Dashboard?
            <Link onClick={toResetPassword} to="/register">
              Register here
            </Link>
          </p>
        </form>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  loggingIn: state.sessionsReducer.loggingIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(loginAction(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
