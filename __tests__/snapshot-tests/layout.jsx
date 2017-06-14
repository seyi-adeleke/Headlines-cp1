import React from 'react';
import { mount } from 'enzyme';

import toJson from 'enzyme-to-json';

import Layout from '../../src/components/Layout.jsx';

describe('Layout Component', () => {
  it('should match the Layout snapshot', () => {
    const component = mount(<Layout />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});