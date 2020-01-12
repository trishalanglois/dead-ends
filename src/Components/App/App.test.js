import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot();
  })
})
