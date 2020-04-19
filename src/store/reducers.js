// Node modules.
import { combineReducers } from 'redux';
// Relative imports.
import sessionReducer from 'containers/Session/reducer';
import routesReducer from 'containers/Routes/reducer';

const allReducers = combineReducers({
  sessionReducer,
  routesReducer,
});

export default allReducers;
