import React from 'react';
import { Form, mapDispatchToProps } from './Form';
import { shallow } from 'enzyme';
import { currentUser, setLocation, setSpookyLocations } from '../../actions/actions';

describe('Form', () => {
  let wrapper, mockEvent, mockCurrentUser, mockSetLocation, mockSetSpookyLocations;
  describe('Form Component', () => {
    beforeEach(() => {
      mockEvent = { target: { name: 'username', value: 'KWoo'}}
      mockCurrentUser = jest.fn();
      mockSetLocation = jest.fn();
      mockSetSpookyLocations = jest.fn();
      wrapper = shallow(<Form
        updateUser={mockCurrentUser}
        setLocation={mockSetLocation}
        setSpookyLocations={mockSetSpookyLocations}
      />)
    })

    it('should match the snapshot when there is no error in state', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it('should match the snapshot when there is an error in state', () => {
      wrapper.setState({error: true})
      expect(wrapper).toMatchSnapshot();
    })

    it('should set the state when handleChange is called', () => {
      wrapper.setState({ username: '', location: '', error: false });
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state()).toEqual({ username: 'KWoo', location: '', error: false, ready: false, noLocations: false })
    })

    it('should call handleChange when the name input is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockNameEvent = { target: { username: 'username', value: 'KWoo'}}

      wrapper.find('.name-input').simulate('change', mockNameEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockNameEvent);
    });

    it('should call handleChange when the location input is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockLocationEvent = { target: { location: 'location', value: 'Denver, CO'}}

      wrapper.find('.location-input').simulate('change', mockLocationEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockLocationEvent);
    });

    it('should call checkLocation with a location when handleLocationSubmit is called', () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().checkLocation = jest.fn();
      wrapper.setState({ location: 'Denver, CO'});
      wrapper.find('.form-button').simulate('click', mockEvent);

      expect(wrapper.instance().checkLocation).toHaveBeenCalledWith('Denver, CO')
    })

    describe('checkLocation', () => {
      it('should call mapDispatchToProps with a user when a user enters a location', () => {
        const mockMapDispatchToProps = jest.fn();
        const actionToDispatch = currentUser('KWoo');
        const mockProps = mapDispatchToProps(mockMapDispatchToProps);
        mockProps.updateUser('KWoo');

        expect(mockMapDispatchToProps).toHaveBeenCalledWith(actionToDispatch);
      })
    })

    it('should call mapDispatchToProps with a location when the user enters a location', () => {
      const mockMapDispatchToProps = jest.fn();
      const actionToDispatch = setLocation('Denver, CO');
      const mockProps = mapDispatchToProps(mockMapDispatchToProps);
      mockProps.setLocation('Denver, CO');

      expect(mockMapDispatchToProps).toHaveBeenCalledWith(actionToDispatch);
    })

    it('should call mapDispatchToProps with an array of locations after a user has entered a location', () => {
      const mockMapDispatchToProps = jest.fn();
      const actionToDispatch = setSpookyLocations([
          {
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
        }]);
      const mockProps = mapDispatchToProps(mockMapDispatchToProps);
      mockProps.setSpookyLocations([
          {
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
        }])
      expect(mockMapDispatchToProps).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call handleError if the user enters an incorrect location', () => {
      wrapper.instance().handleError = jest.fn();
      wrapper.instance().checkLocation('123');

      expect(wrapper.instance().handleError).toHaveBeenCalled();
    })

    describe('findLocations', () => {
      it('should set noLocations state to true if there are no matching locations from the user', () => {
        const filteredLocations = [];
        const mockEvent = wrapper.instance().findLocations('');

        expect(wrapper.state('noLocations')).toEqual(true);
      })

      // it('should state the ready state to true and call setSpookyLocations if there are matching locations from the user', () => {
      //   const filteredLocations = [{
      //     "city": "Denver",
      //     "country": "United States",
      //     "description": "BOO!",
      //     "location": "Ada Cemetery",
      //     "state": "Colorado",
      //     "state_abbrev": "CO",
      //     "longitude": -85.50489309999999,
      //     "latitude": 42.9621061,
      //     "city_longitude": -85.4954803,
      //     "city_latitude": 42.960727
      //   }];
      //   const mockEvent = wrapper.instance().findLocations('Denver, CO');
      //   wrapper.instance().setSpookyLocations = jest.fn();
      //
      //   expect(wrapper.state('ready')).toEqual(true);
      //   expect(wrapper.instance().setSpookyLocations).toHaveBeenCalledWith(filteredLocations)
      // })
    })

    it('should set the error state to true if handleError has been called', () => {
      wrapper.instance().handleError();
      
      expect(wrapper.state('error')).toEqual(true)
    })
  })
})
