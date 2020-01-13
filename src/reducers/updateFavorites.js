export const updateFavorites = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_FAVORITES':
      return [...state, action.location]
    case 'REMOVE_FAVORITE':
      return state.filter(favorite => favorite.location !== action.location.location)
    default:
      return state
  }
}
