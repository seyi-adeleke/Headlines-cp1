import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Layout from '../../src/components/Layout.jsx';

describe('Layout', () => {
  const wrapper = mount(<Layout />);
  it('should have have a Header', () => {
    expect(wrapper.find('Header')).to.have.length(1);
  });
  
  it('should have have line breaks', () => {
    expect(wrapper.find('br')).to.have.length(3);
  });

});