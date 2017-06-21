import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import section1 from '../../src/components/Body/Section1.jsx';

describe('Section', () => {
  const wrapper = mount(<section1 />);
  it('renders correctly', () => {
    const rendered = renderer.create(
      <section1 />,
    );
  });
});
