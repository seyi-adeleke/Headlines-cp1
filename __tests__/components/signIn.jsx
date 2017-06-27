import React from 'react';
import { mount, shallow } from 'enzyme';
import SignIn from '../../src/components/SignIn.jsx';


jest.unmock('../../src/components/SignIn.jsx');
describe('SignIn', () => {
  const wrapper = shallow(<SignIn />);
  it('should have its functions defined', () => {
    expect(typeof wrapper.instance().googleResponse).toBe('function');
    expect(typeof wrapper.instance().googleResponseFailure).toBe('function');
  });
});
