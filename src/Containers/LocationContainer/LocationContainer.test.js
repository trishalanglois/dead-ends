import React from 'react';
import { LocationContainer, mapStateToProps } from './LocationContainer';
import { shallow } from 'enzyme';

describe('LocationContainer', () => {
  let wrapper;
  it('should match snapshot', () => {
    const mockProps = {
    location: 'Denver, CO',
    locations: [{
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
      "city": "Denver",
      "country": "United States",
      "description": "Spooky stuff.",
      "location": "North Adams Rd.",
      "state": "Colorado",
      "state_abbrev": "CO",
      "longitude": -84.3818434,
      "latitude": 41.9714248,
      "city_longitude": -84.3471684,
      "city_latitude": 41.986434
    }],
    mapLocation: {
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
    wrapper = shallow(<LocationContainer
    locations={mockProps.locations}
    location={mockProps.location}
    mapLocation={mockProps.mapLocation}
    />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should return an object with the location, locations, and mapLocations data', () => {
    const mockState = {
      location: "Denver, CO",
      spookyLocations: [{
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
        "city": "Denver",
        "country": "United States",
        "description": "Spooky stuff.",
        "location": "North Adams Rd.",
        "state": "Colorado",
        "state_abbrev": "CO",
        "longitude": -84.3818434,
        "latitude": 41.9714248,
        "city_longitude": -84.3471684,
        "city_latitude": 41.986434
      }],
      currentMap: {
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
    const expected = {
      location: "Denver, CO",
      locations: [{
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
        "city": "Denver",
        "country": "United States",
        "description": "Spooky stuff.",
        "location": "North Adams Rd.",
        "state": "Colorado",
        "state_abbrev": "CO",
        "longitude": -84.3818434,
        "latitude": 41.9714248,
        "city_longitude": -84.3471684,
        "city_latitude": 41.986434
      }],
      mapLocation: {
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
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected)
  })
})
