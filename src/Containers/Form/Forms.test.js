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
      wrapper.setState({ location: 'Denver, CO'})
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

  })
})
