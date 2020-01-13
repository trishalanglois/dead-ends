import { currentUser } from '../reducers/currentUser';

describe('currentUser reducer', () => {
  it('should return initial state', () => {
    const expected = '';
    const result = currentUser(undefined, '');

    expect(result).toEqual(expected)
  })

  it('should return the correct state if the action is SET_USER', () => {
    const initialState = '';
    const action = {
      type: 'SET_USER',
      name: 'KWoo'
    }
    const result = currentUser(initialState, action);
    const expected = action.name;

    expect(result).toEqual(expected);
  })
})
