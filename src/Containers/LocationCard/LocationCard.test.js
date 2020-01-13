import React from 'react';
import { LocationCard, mapDispatchToProps, mapStateToProps } from './LocationCard';
import { updateFavorites, updateClickedCard, removeFavorite } from '../../actions/actions';
import { shallow } from 'enzyme';

describe('LocationCard', () => {
  let mockProps = {
      favorites:
        [{
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
          "city": "Muskegon",
          "country": "United States",
          "description": "SpooooOOOoooky!",
          "location": "Nunica Cemetery",
          "state": "Michigan",
          "state_abbrev": "MI",
          "longitude": -85.50489309999999,
          "latitude": 42.9621061,
          "city_longitude": -85.4954803,
          "city_latitude": 42.960727
        }],
      cardLocation: {
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

  it('should match the snapshot', () => {
    let wrapper = shallow(<LocationCard
      {...mockProps}
    />)

    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return the favorite spooky locations from the global store', () => {
      const mockState = {
        favorites:
          [{
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
            "city": "Muskegon",
            "country": "United States",
            "description": "SpooooOOOoooky!",
            "location": "Nunica Cemetery",
            "state": "Michigan",
            "state_abbrev": "MI",
            "longitude": -85.50489309999999,
            "latitude": 42.9621061,
            "city_longitude": -85.4954803,
            "city_latitude": 42.960727
          }
        ]
      };
      const expected = {
        favorites:
          [{
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
            "city": "Muskegon",
            "country": "United States",
            "description": "SpooooOOOoooky!",
            "location": "Nunica Cemetery",
            "state": "Michigan",
            "state_abbrev": "MI",
            "longitude": -85.50489309999999,
            "latitude": 42.9621061,
            "city_longitude": -85.4954803,
            "city_latitude": 42.960727
          }
        ]
      };
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call updateFavorites with a location when updateFavorites is called from props', () => {
      const mockDispatchFromProps = jest.fn();
      const actionToDispatch = updateFavorites(mockProps);
      const mappedProps = mapDispatchToProps(mockDispatchFromProps);
      mappedProps.updateFavorites(mockProps);

      expect(mockDispatchFromProps).toHaveBeenCalledWith(actionToDispatch);
    })

    it('should call updateClickedCard with a location when updateClickedCard is called from props', () => {
      const mockDispatchFromProps = jest.fn();
      const actionToDispatch = updateClickedCard(mockProps);
      const mappedProps = mapDispatchToProps(mockDispatchFromProps);
      mappedProps.updateClickedCard(mockProps);

      expect(mockDispatchFromProps).toHaveBeenCalledWith(actionToDispatch);
    })

    it('should call removeFavorite with a location when removeFavorite is called from props', () => {
      const mockDispatchFromProps = jest.fn();
      const actionToDispatch = removeFavorite(mockProps);
      const mappedProps = mapDispatchToProps(mockDispatchFromProps);
      mappedProps.removeFavorite(mockProps);

      expect(mockDispatchFromProps).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})
