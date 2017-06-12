import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Nav from '../src/components/Header/Nav.jsx';


describe('Nav components', () => {
  const wrapper = mount(<Nav />);
  it('should have divs', () => {
    expect(wrapper.find('div')).to.have.length(4);
  });
  it('should have a form', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('should have a navbar', () => {
    expect(wrapper.find('nav')).to.have.length(1);
  })

});
