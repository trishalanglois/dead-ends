import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { shallow } from 'enzyme';


describe('Header', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Header />)

    expect(wrapper).toMatchSnapshot();
  })
})
