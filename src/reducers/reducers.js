import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { location } from './setLocation';
import { spookyLocations } from './spookyLocations';

const rootReducer = combineReducers({
  currentUser,
  location,
  spookyLocations

})

export default rootReducer;
