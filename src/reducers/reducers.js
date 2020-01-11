import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { location } from './setLocation';
import { spookyLocations } from './spookyLocations';
import { updateFavorites } from './updateFavorites';

const rootReducer = combineReducers({
  currentUser,
  location,
  spookyLocations,
  favorites: updateFavorites
})

export default rootReducer;
