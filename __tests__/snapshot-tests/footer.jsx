import React from 'react';
import { mount } from 'enzyme';

import toJson from 'enzyme-to-json';

import Footer from '../../src/components/Footer.jsx';

describe('Footer Component', () => {
  it('should match the Footer snapshot', () => {
    const component = mount(<Footer />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
