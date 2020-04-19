// Node modules.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Relative imports.
import Routes from 'containers/Routes';
import rootSaga from 'store/sagas';
// Relative imports.
import './globalStyles.css';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './store';

// Configure store and start sagas.
const store = configureStore();
store.runSaga(rootSaga);

// Render the app.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
