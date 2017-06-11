import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from '../src/components/HomePage';

describe('Login', () => {
  const wrapper = shallow(<Login />);
  it('should have a form tag', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('should have a p tag', () => {
    expect(wrapper.find('p')).to.have.length(2);
  });
});