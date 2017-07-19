import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import HomePage from '../../src/components/HomePage.jsx';

import SelectNewsSource from '../../src/components/Body/SelectNewsSource.jsx';

jest.unmock('../../__mocks__/superagent.js');

describe('SelectNewsSource state', () => {
  const wrapper = shallow(<SelectNewsSource getSource={newState => this.newSource(newState)} />);
  it('renders correctly', () => {
    const rendered = renderer.create(
      <SelectNewsSource getSource={newState => this.newSource(newState)} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

