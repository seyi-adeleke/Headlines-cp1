import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Homepage from '../../src/components/HomePage.jsx';

jest.mock('../../src/components/HomePage.jsx');


describe('Homepage Component', () => {
  it('should match the Homepage snapshot', () => {
    const component = mount(<Homepage />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
