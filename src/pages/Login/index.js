// Node modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Relative imports.
import Spinner from 'primitives/Spinner';
import { loginAction } from 'containers/Session/actions';
import { EmailField, LinkButton, Options, PasswordField, StyledButton, Title, Well, Wrapper } from './styles';

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

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);

    // @WARNING: On Chrome iOS autofill often does not fire off onChange handlers.
    // https://github.com/facebook/react/issues/1159
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.onLogin();
    }
  };

  onStateChange = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  };

  onLogin = () => {
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
        <Well>
          <Title>Sign In</Title>

          {/* EMAIL */}
          <EmailField onChange={onStateChange('email')} placeholder="Email" type="email" value={email} />

          {/* PASSWORD */}
          <PasswordField onChange={onStateChange('password')} placeholder="Password" type="password" value={password} />

          {/* LOGIN */}
          <StyledButton disabled={!isValid()} onClick={onLogin}>
            {loggingIn ? <Spinner /> : 'Sign In'}
          </StyledButton>

          <Options>
            {/* REGISTER LINK */}
            <LinkButton onClick={toResetPassword} to="/register">
              Sign Up
            </LinkButton>

            {/* FORGOT PASSWORD */}
            <LinkButton onClick={toResetPassword} to="/reset-password">
              Forgot Password
            </LinkButton>
          </Options>
        </Well>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  loggingIn: state.sessionReducer.loggingIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(loginAction(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
