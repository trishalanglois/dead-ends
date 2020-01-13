import { spookyLocations } from '../reducers/spookyLocations';

describe('spookyLocations reducer', () => {
  it('should return initial state', () => {
    const expected = [];
    const result = spookyLocations(undefined, []);

    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action is SET_SPOOKY_LOCATIONS', () => {
    const initialState = [];
    const action = {
      type: 'SET_SPOOKY_LOCATIONS',
      locations: [
        {
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
        },
        {
          "city": "Detroit",
          "country": "United States",
          "description": "SpoooOOOoooky!",
          "location": "Detroit Airport",
          "state": "Michigan",
          "state_abbrev": "MI",
          "longitude": -85.50489309999999,
          "latitude": 42.9621061,
          "city_longitude": -85.4954803,
          "city_latitude": 42.960727
        }
      ]
    };
    const result = spookyLocations(initialState, action);
    const expected = action.locations;

    expect(result).toEqual(expected);
  })
})
