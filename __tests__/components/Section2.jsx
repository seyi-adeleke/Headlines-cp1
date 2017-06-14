import React from 'react';
import { shallow } from 'enzyme';
import section2 from '../../src/components/Body/Section2.jsx';

test('section2', () => {
  const wrapper = shallow(<section2 />);
  it('should have have a hr', () => {
    expect(wrapper.find('h3').length).toBe(1);
  });
});
