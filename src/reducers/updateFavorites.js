export const updateFavorites = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_FAVORITES':
      return [...state, action.location]
    default:
      return state
  }
}
