import React from 'react';
import { MapContainer, mapStateToProps, mapDispatchToProps } from './MapContainer';
import { shallow } from 'enzyme';
import { updateFavorites } from '../../actions/actions';

describe('MapContainer', () => {
  const mockProps = {
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
  }
  let wrapper = shallow(<MapContainer
    currentMap={mockProps}
    />)

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return an object with the currentMap', () => {
      const mockState = {
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
      }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call mapDispatchToProps with a updateFavorites action when updateFavorites is called from Props', () => {
      const mockDispatchToProps = jest.fn();
      const actionToDispatch = updateFavorites(mockProps);
      const mappedProps = mapDispatchToProps(mockDispatchToProps);
      mappedProps.updateFavorites(mockProps);
      
      expect(mockDispatchToProps).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
