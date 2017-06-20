import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


import HomePage from '../../src/components/HomePage';

import SelectNewsSource from '../../src/components/Body/SelectNewsSource';


describe('SelectNewsSource state', () => {
  const wrapper = shallow(<SelectNewsSource getSource={newState => this.newSource(newState)} />);
  it('renders correctly', () => {
    const rendered = renderer.create(
      <SelectNewsSource getSource={newState => this.newSource(newState)} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });


});

describe('homepage state', () => {
  const wrapper = shallow(<HomePage />);
  it('should have source state to be empty on load', () => {
    expect(wrapper.state().info).toBe('');
  });
});

