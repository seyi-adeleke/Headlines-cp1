import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../../src/components/Homepage/SignIn.jsx';


jest.unmock('../../src/components/Homepage/SignIn.jsx');
describe('SignIn', () => {
  const wrapper = shallow(<SignIn getResponse={() => {}} />);
  const responseObject = {
    user: 'seyi',
    email: 'seyi@yahoo.com',
  };

  const response = (wrapper.instance().googleResponse(responseObject));
  it('the googleResponse function should exist', () => {
    expect(response).toBeTruthy();
  });
});
