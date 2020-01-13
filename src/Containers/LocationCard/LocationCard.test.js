import React from 'react';
import { LocationCard, mapDispatchToProps } from './LocationCard';
import { updateFavorites, updateClickedCard } from '../../actions/actions';
import { shallow } from 'enzyme';

describe('LocationCard', () => {
  let mockProps = {
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
  it('should match the snapshot', () => {
    let wrapper = shallow(<LocationCard
      cardLocation={mockProps}
    />)

    expect(wrapper).toMatchSnapshot();
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
  })
})
