// Node modules.
import { combineReducers } from 'redux';
// Relative imports.
import eventsReducer from 'containers/Events/reducer';
import routesReducer from 'containers/Routes/reducer';
import sessionsReducer from 'containers/Sessions/reducer';
import tagsReducer from 'containers/Tags/reducer';
import userReducer from 'containers/User/reducer';
import venuesReducer from 'containers/Venues/reducer';

const allReducers = combineReducers({
  eventsReducer,
  routesReducer,
  sessionsReducer,
  tagsReducer,
  userReducer,
  venuesReducer,
});

export default allReducers;
