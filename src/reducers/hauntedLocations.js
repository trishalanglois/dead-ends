export const hauntedLocations = (state = [], action) => {
  switch(action.type) {
    case 'SET_SPOOKY_LOCATIONS':
      return action.locations
    default:
      return state
  }
}
