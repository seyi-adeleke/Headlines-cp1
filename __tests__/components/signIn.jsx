import React from 'react';
import { mount, shallow } from 'enzyme';
import SignIn from '../../src/components/SignIn.jsx';


jest.unmock('../../src/components/SignIn.jsx');
describe('SignIn', () => {
  const wrapper = shallow(<SignIn getResponse={() => {}} />);
  const responseObject = {
    user: 'seyi',
    email: 'seyi@yahoo.com',
  };
  const error = {
    status: 'error',
  };
  const response = (wrapper.instance().googleResponse(responseObject));
  it('the googleResponse function should exist', () => {
    expect(response).toBeTruthy();
  });
 
});
