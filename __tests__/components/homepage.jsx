import React from 'react';
import { shallow } from 'enzyme';
<<<<<<< HEAD
import Homepage from '../../src/components/HomePage';
=======
import Homepage from '../../src/components/HomePage.jsx';
>>>>>>> staging

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
