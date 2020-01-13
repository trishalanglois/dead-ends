import { showMap } from '../reducers/showMap';

describe('showMap reducer', () => {
  it('should return initial state', () => {
    const expected = false;
    const result = showMap(undefined, false);

    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action is UPDATE_SHOW_MAP', () => {
    const initialState = false;
    const action = {
      type: 'UPDATE_SHOW_MAP',
      showMap: true
    }
    const result = showMap(initialState, action);
    const expected = action.showMap;

    expect(result).toEqual(expected);

  })
})
