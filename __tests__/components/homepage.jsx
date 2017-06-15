import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import GoogleLogin from 'react-google-login';
import Login from '../../src/components/HomePage.jsx';

test('Login', () => {
  const wrapper = shallow(<Login />);
  it('should have have a form', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });
});

test('Login', () => {
  it('should have correct state', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().info).to.equal('');
    expect(wrapper.state().showButton).to.equal(false);

    expect((wrapper.state().credentials)).to.deep.equal({
      email: '',
      name: '',
    });
  });

   it('should have render button on state change ', () => {
     const wrapper = shallow(<Login />);
     const showButton = (wrapper.state().info);
     if (showButton) {
      expect(wrapper.find('button')).to.have.length(1);
     }
     if (showButton) {
       expect(wrapper.find(GoogleLogin)).to.have.length(1);
     }
  });
});

