import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { location } from './setLocation';
import { spookyLocations } from './spookyLocations';
import { updateFavorites } from './updateFavorites';
import { clickedCard } from './clickedCard';


const rootReducer = combineReducers({
  currentUser,
  location,
  spookyLocations,
  favorites: updateFavorites,
  currentMap: clickedCard
})

export default rootReducer;
