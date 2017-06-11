import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Header from '../src/components/Header.jsx';

describe('Header', () => {
  const wrapper = mount(<Header />);
  it('should have a nav', () => {
    expect(wrapper.find('nav')).to.have.length(1);
  });
  it('should have a div', () => {
    expect(wrapper.find('div')).to.have.length(5);
  });
});