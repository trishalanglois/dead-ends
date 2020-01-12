export const clickedCard = (state= {}, action) => {
  switch (action.type) {
    case 'UPDATE_CLICKED_CARD':
      return action.location
    default:
      return state
  }
}
