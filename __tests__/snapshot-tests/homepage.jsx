import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Homepage from '../../src/components/HomePage.jsx';

jest.mock('../../src/components/HomePage.jsx');
jest.mock('../../__mocks__/localStoragemock.js');

describe('Homepage Component', () => {
  it('should match the Homepage snapshot', () => {
    const component = shallow(<Homepage />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});

