import * as actions from './actions';

describe('actions', () => {
  const user = 'Eric';
  const result = actions.currentUser(user);
  const mockExpectedAction = {
    type: 'SET_USER',
    name: user
  }

  expect(result).toEqual(mockExpectedAction);

})
