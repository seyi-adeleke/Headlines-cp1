import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Footer from '../../src/components/Footer.jsx';

test('Footer', () => {
  const wrapper = mount(<Footer />);
  it('should have a footer', () => {
    expect(wrapper.find('footer')).to.have.length(1);
  });
});
