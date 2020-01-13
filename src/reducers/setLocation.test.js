import { location } from '../reducers/setLocation';

describe('location reducer', () => {
  it('should return initial state', () => {
    const expected = '';
    const result = location(undefined, '');

    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action is SET_LOCATION', () => {
    const initialState = '';
    const action = {
      type: 'SET_LOCATION',
      location: 'Denver, CO'
    }
    const result = location(initialState, action);
    const expected = action.location;

    expect(result).toEqual(expected);
  })
})
