// Node modules.
import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
// Relative imports.
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import FallbackRoute from 'pages/FallbackRoute';
import history from 'store/history';
import { Container } from './styles';
import { appInitAction } from './actions';

// Lazy load pages.
const CreateEvent = lazy(() => import('pages/CreateEvent'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Events = lazy(() => import('pages/Events'));
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
              <Route path="/login" exact component={Login} />
              {/* AUTH MODEL-BASED ROUTES */}
              <AuthenticatedRoute path="/" exact component={Dashboard} />
              <AuthenticatedRoute path="/events" exact component={Events} />
              <AuthenticatedRoute path="/events/create" exact component={CreateEvent} />
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
