import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';

import GoogleLogin from 'react-google-login';
import Homepage from '../../src/components/HomePage.jsx';

describe('Login', () => {
  const wrapper = shallow(<Homepage />);
  test('should have have a form', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });
  test('should have have a div', () => {
    expect(wrapper.find('div')).to.have.length(3);
  });
  test('should have have a h2', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });
});
