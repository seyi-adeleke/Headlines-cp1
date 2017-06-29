import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../../src/components/Welcome.jsx';

describe('Welcome', () => {
  localStorage.setItem('user', JSON.stringify({ info: {
    name: 'Just any',
  },
  },
  ));
  const wrapper = shallow(<Welcome />);
  const newSource = (wrapper.instance().newSource('ign'));
  const getNews = (wrapper.instance().getNews());

  it('should have its functions defined', () => {
    expect(getNews).toBeTruthy();
  });
  it('the newSource function should exist', () => {
    expect(newSource).toBeTruthy();
  });
});
