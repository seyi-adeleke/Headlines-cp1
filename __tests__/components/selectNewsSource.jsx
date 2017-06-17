import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import NewsSource from '../../src/components/Body/SelectNewsSource';

describe('NewsSource', () => {
  const wrapper = mount(<NewsSource />);
  it('should have have divs', () => {
    expect(wrapper.find('div')).to.have.length(2);
  });
});




