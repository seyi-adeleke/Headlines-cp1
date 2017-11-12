import React from 'react';
<<<<<<< HEAD
import { mount, shallow } from 'enzyme';
import SignIn from '../../src/components/SignIn.jsx';


jest.unmock('../../src/components/SignIn.jsx');
=======
import { shallow } from 'enzyme';
import SignIn from '../../src/components/Homepage/SignIn.jsx';


jest.unmock('../../src/components/Homepage/SignIn.jsx');
>>>>>>> staging
describe('SignIn', () => {
  const wrapper = shallow(<SignIn getResponse={() => {}} />);
  const responseObject = {
    user: 'seyi',
    email: 'seyi@yahoo.com',
  };
<<<<<<< HEAD
  const error = {
    status: 'error',
  };
=======

>>>>>>> staging
  const response = (wrapper.instance().googleResponse(responseObject));
  it('the googleResponse function should exist', () => {
    expect(response).toBeTruthy();
  });
<<<<<<< HEAD
 
=======
>>>>>>> staging
});
