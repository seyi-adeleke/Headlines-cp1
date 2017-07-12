import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Welcome from '../../src/components/Homepage/Welcome.jsx';

describe('Welcome Component', () => {
  localStorage.setItem('user', JSON.stringify({ info: {
    name: 'Just any',
  },
  },
  ));
  const component = shallow(<Welcome />);

  it('should match the Welcome snapshot', () => {
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
