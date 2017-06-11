import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Nav from '../src/components/Header/Nav.jsx';


describe('Nav components', () => {
  const wrapper = shallow(<Nav />);
  it('should have divs', () => {
    expect(wrapper.find('div')).to.have.length(4);
  });
  it('should have a form', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });
});
