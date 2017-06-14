import React from 'react';
import { mount } from 'enzyme';

import toJson from 'enzyme-to-json';

import Header from '../../src/components/Header.jsx';

describe('Header Component', () => {
  it('should match the Header snapshot', () => {
    const wrapper = mount(<Header />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
