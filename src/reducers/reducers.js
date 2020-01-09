import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { location } from './setLocation'

const rootReducer = combineReducers({
  currentUser,
  location
})

export default rootReducer;
