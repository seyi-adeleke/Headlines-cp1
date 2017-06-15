import React from 'react';
import { mount } from 'enzyme';
import Nav from '../src/components/Header/Nav.jsx';

describe('Nav state', () => {
  const wrapper = mount(<Nav />);
    it('should have user state to be false on load', () => {
  expect(wrapper.state().user).toBe(false);
   })
   
});