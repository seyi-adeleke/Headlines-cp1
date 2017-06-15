import React from 'react';
import { mount } from 'enzyme';

import toJson from 'enzyme-to-json';

import Body from '../../src/components/Body.jsx';

describe('Body Component', () => {
  it('should match the Body snapshot', () => {
    const component = mount(<Body />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
