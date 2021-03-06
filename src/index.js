// Node modules.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// Relative imports.
import './globalStyles.css';
import Routes from 'containers/Routes';
import rootSaga from 'store/sagas';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store';

// Configure store and start sagas.
const store = configureStore();
store.runSaga(rootSaga);

// Render the app.
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
