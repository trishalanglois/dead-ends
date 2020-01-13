import { updateFavorites } from '../reducers/updateFavorites';

describe('updateFavorites reducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = updateFavorites(undefined, []);

    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action is UPDATE_FAVORITES', () => {
    const initialState = [];
    const action = {
      type: 'UPDATE_FAVORITES',
      location: {
        "city": "Denver",
        "country": "United States",
        "description": "BOO!",
        "location": "Ada Cemetery",
        "state": "Colorado",
        "state_abbrev": "CO",
        "longitude": -85.50489309999999,
        "latitude": 42.9621061,
        "city_longitude": -85.4954803,
        "city_latitude": 42.960727
      }
    };
    const result = updateFavorites(initialState, action);
    const expected = [...initialState, action.location];

    expect(result).toEqual(expected)
  })
})
