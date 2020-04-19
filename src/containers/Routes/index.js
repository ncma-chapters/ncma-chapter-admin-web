// Node modules.
import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
// Relative imports.
import FallbackRoute from 'pages/FallbackRoute';
import history from 'store/history';
// Relative imports.
import { appInitAction } from './actions';
import { Container } from './styles';

// Lazy load pages.
const Dashboard = lazy(() => import('pages/Dashboard'));
const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/NotFound'));

class Routes extends Component {
  static propTypes = {
    // From mapDispatchToProps.
    appInit: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // Make all of our app init calls.
    this.props.appInit();
  }

  render() {
    return (
      <Router history={history}>
        <Container>
          <Suspense fallback={<FallbackRoute />}>
            <Switch>
              {/* UNAUTHENTICATED ROUTES */}
              <Route path="/" exact component={Login} />
              {/* AUTH MODEL-BASED ROUTES */}
              <Route path="/dashboard" exact component={Dashboard} />
              {/* 404 | NOT FOUND */}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Container>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  appInit: (options) => dispatch(appInitAction(options)),
});

export default connect(null, mapDispatchToProps)(Routes);
