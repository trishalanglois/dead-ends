import * as actions from './actions';

describe('action', () => {
  it('should update the current user', () => {
    const user = 'KWoo';
    const result = actions.currentUser(user);
    const mockExpectedAction = {
      type: 'SET_USER',
      name: user
    }

    expect(result).toEqual(mockExpectedAction);
  })

  it('should update the user location', () => {
    const location = 'Denver, CO';
    const result = actions.setLocation(location);
    const mockExpectedAction = {
      type: 'SET_LOCATION',
      location
    }

    expect(result).toEqual(mockExpectedAction);
  })

  it('should get spooky locations', () => {
    const locations = [
      {
        "city": "Ada",
        "country": "United States",
        "description": "BOO!",
        "location": "Ada Cemetery",
        "state": "Michigan",
        "state_abbrev": "MI",
        "longitude": -85.50489309999999,
        "latitude": 42.9621061,
        "city_longitude": -85.4954803,
        "city_latitude": 42.960727
      },
      {
        "city": "Addison",
        "country": "United States",
        "description": "Spooky stuff.",
        "location": "North Adams Rd.",
        "state": "Michigan",
        "state_abbrev": "MI",
        "longitude": -84.3818434,
        "latitude": 41.9714248,
        "city_longitude": -84.3471684,
        "city_latitude": 41.986434
      }
    ];
    const result = actions.setSpookyLocations(locations);
    const mockExpectedAction = {
      type: 'SET_SPOOKY_LOCATIONS',
      locations
    }

    expect(result).toEqual(mockExpectedAction);
  })

  it('should add a favorite spooky location', () => {
    const location = {
      "city": "Ada",
      "country": "United States",
      "description": "BOO!",
      "location": "Ada Cemetery",
      "state": "Michigan",
      "state_abbrev": "MI",
      "longitude": -85.50489309999999,
      "latitude": 42.9621061,
      "city_longitude": -85.4954803,
      "city_latitude": 42.960727
    };
    const result = actions.updateFavorites(location);
    const mockExpectedAction = {
      type: 'UPDATE_FAVORITES',
      location
    }

    expect(result).toEqual(mockExpectedAction);
  })

  it('should update with the information from the clicked card', () => {
    const location = {
      "city": "Ada",
      "country": "United States",
      "description": "BOO!",
      "location": "Ada Cemetery",
      "state": "Michigan",
      "state_abbrev": "MI",
      "longitude": -85.50489309999999,
      "latitude": 42.9621061,
      "city_longitude": -85.4954803,
      "city_latitude": 42.960727
    };
    const result = actions.updateClickedCard(location);
    const mockExpectedAction = {
      type: 'UPDATE_CLICKED_CARD',
      location
    }

    expect(result).toEqual(mockExpectedAction)
  })
})
