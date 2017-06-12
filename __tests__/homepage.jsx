import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router';
import Login from '../src/components/HomePage.jsx';

describe('Login', () => {
  const wrapper = shallow(<Login />);
  it('should have have a form', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });
});

describe('Login', () => {
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
    if(showButton){
      expect(wrapper.find('button')).to.have.length(1);
    }
   if (showButton) {
     expect(wrapper.find(GoogleLogin)).to.have.length(1);
    }
  });
});

/*
describe('Login', () => {
   it('should have state for info and showButton', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state().info).to.equal('');
    expect(wrapper.state().showButton).to.equal(false);

    expect(( wrapper.state().credentials)).to.deep.equal({
      email: '',
      name: '',
    });

  });
 it('should have render button on state change ', () => {
    const wrapper = shallow(<Login />);
    const showButton = (wrapper.state().info);
    if(showButton){
      expect(wrapper.find('button')).to.have.length(1);
    }
   if (showButton) {
     expect(wrapper.find(GoogleLogin)).to.have.length(1);
    }
  });
});
*/