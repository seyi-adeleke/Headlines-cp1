import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import section from '../../src/components/Body/MainBody.jsx';

describe('Section', () => {
  const wrapper = mount(<section />);
  it('renders correctly', () => {
    const rendered = renderer.create(
      <section />,
    );
  });
});
