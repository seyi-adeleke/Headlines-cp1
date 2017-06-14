import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';

import { expect } from 'chai';
import NotFound from '../../src/components/NotFound.jsx';

describe('NotFound', () => {
  const wrapper = mount(<NotFound />);
  it('should have have a h1', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });
});

describe('NotFound', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound />, div);
  });
});
