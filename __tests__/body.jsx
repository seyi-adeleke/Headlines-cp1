import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Body from '../src/components/Body.jsx';

describe('Header', () => {
  const wrapper = mount(<Body />);
  it('should have have a section', () => {
    expect(wrapper.find('Section1')).to.have.length(1);
  });
});