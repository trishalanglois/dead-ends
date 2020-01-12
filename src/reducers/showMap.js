export const showMap = (state = false, action) => {
  switch(action.type) {
    case 'UPDATE_SHOW_MAP':
      return action.showMap
    default:
      return state
  }
}
