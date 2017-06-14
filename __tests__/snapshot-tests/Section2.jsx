import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import section from '../../src/components/Body/Section2.jsx';

test('Section', () => {
  const wrapper = mount(<section />);
  it('renders correctly', () => {
    const rendered = renderer.create(
      <section />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
