import React from 'react';
import NoURLMatch from './NoURLMatch';
import { shallow } from 'enzyme';


describe('NoURLMatch', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<NoURLMatch />)

    expect(wrapper).toMatchSnapshot();
  })
})
