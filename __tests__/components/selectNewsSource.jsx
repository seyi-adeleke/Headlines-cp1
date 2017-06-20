import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NewsSource from '../../src/components/Body/SelectNewsSource';


jest.unmock('../../src/components/Body/SelectNewsSource');

describe('NewsSource', () => {
  const wrapper = shallow(<NewsSource />);
  it('should have have divs', () => {
    expect(wrapper.find('div')).to.have.length(2);
  });
  it('should have have select box', () => {
    expect(wrapper.find('select')).to.have.length(1);
  });
  
});




