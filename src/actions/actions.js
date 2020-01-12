export const currentUser = user => ({
  type: 'SET_USER',
  name: user
})

export const setLocation = location => ({
  type: 'SET_LOCATION',
  location
})

export const setSpookyLocations = locations => ({
  type: 'SET_SPOOKY_LOCATIONS',
  locations
})

export const updateFavorites = location => ({
  type: 'UPDATE_FAVORITES',
  location
})

export const updateClickedCard = location => ({
  type: 'UPDATE_CLICKED_CARD',
  location
})
