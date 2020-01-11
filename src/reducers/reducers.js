import { combineReducers } from 'redux';
import { currentUser } from './currentUser';
import { location } from './setLocation';
import { spookyLocations } from './spookyLocations';
import { updateWishlist } from './updateWishlist';

const rootReducer = combineReducers({
  currentUser,
  location,
  spookyLocations,
  wishlist: updateWishlist
})

export default rootReducer;
