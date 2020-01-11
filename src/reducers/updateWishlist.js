export const updateWishlist = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_WISHLIST':
      return [...state, action.location]
    default:
      return state
  }
}
