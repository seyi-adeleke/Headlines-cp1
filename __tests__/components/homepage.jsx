import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../../src/components/HomePage';

describe('Welcome', () => {
  const wrapper = shallow(<Homepage />);
  const responseObject = {
    user: 'seyi',
    email: 'seyi@yahoo.com',
  };
  const response = (wrapper.instance().response(responseObject));
  it('the response function should exist', () => {
    expect(response).toBeTruthy();
  });

  const onChange = (wrapper.instance().onChange());
  it('the onChange function should exist', () => {
    expect(onChange).toBeTruthy();
  });
});
