export const currentUser = user => ({
  type: 'SET_USER',
  name: user
})

export const setLocation = location => ({
  type: 'SET_LOCATION',
  location
})
