import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import homepage from '../src/components/HomePage.jsx';

describe('homepage', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(
      <homepage />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});



