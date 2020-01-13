import { clickedCard } from '../reducers/clickedCard';

describe('clickedCard reducer', () => {
  it('should return initial state', () => {
    const expected = {};
    const result = clickedCard(undefined, {});

    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action is UPDATE_CLICKED_CARD', () => {
    const initialState = {};
    const action = {
      type: 'UPDATE_CLICKED_CARD',
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
    }
    const result = clickedCard(initialState, action);
    const expected = action.location;

    expect(result).toEqual(expected);
  })
})
