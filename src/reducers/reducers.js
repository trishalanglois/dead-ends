import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { location } from './setLocation';
import { hauntedLocations } from './hauntedLocations';

const rootReducer = combineReducers({
  currentUser,
  location,
  hauntedLocations

})

export default rootReducer;
