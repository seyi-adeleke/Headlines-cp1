import React from 'react';
import { shallow, mount } from 'enzyme';
//import { expect } from 'chai';
import NewsSource from '../../src/components/Body/SelectNewsSource';


jest.unmock('../../__mocks__/superagent.js');

describe('NewsSource', () => {
  const wrapper = mount(<NewsSource />);
  it('should have have divs', () => {
    expect(wrapper.find('div').length).toBe(2);
  });
  it('should have have select box', () => {
    expect(wrapper.find('select').length).toBe(1);
  });

  it('should have its props defined', () => {
    expect(typeof wrapper.instance().handleChange).toBe('function');
  });
});




