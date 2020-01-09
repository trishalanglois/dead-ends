export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        name: action.name
      }
    default:
      return state
  }
}
