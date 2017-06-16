import React from 'react';
import { mount } from 'enzyme';

import toJson from 'enzyme-to-json';

import Nav from '../../src/components/Header/Nav.jsx';

describe('Nav Component', () => {
  it('should match the Nav snapshot', () => {
    const component = mount(<Nav />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
 
});
