import React from 'react';
import { FavoritesContainer, mapStateToProps } from './FavoritesContainer';
import { shallow } from 'enzyme';

describe('FavoritesContainer', () => {
  it('should match the snapshot when there are no favorite locations', () => {
    let mockProps = {
      favoriteLocations: []
    };
    let wrapper = shallow(<FavoritesContainer
      favoriteLocations={mockProps.favoriteLocations}
    />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot when there are favorite locations', () => {
    let mockProps = {
      favoriteLocations: [
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
        }
      ]
    };
    let wrapper = shallow(<FavoritesContainer
      favoriteLocations={mockProps.favoriteLocations}
    />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object with the favorite locations array', () => {
      const mockState = {
        favorites: [
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
        ]
      };
      const expected = {
        favoriteLocations: [{
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
        }]
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    })
  })
})
