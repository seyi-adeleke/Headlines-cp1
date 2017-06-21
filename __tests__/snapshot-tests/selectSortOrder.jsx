import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import SelectSortOrder from '../../src/components/Body/SelectSortOrder';

jest.mock('../../src/components/Body/SelectSortOrder.jsx');

describe('SelectNewsSource state', () => {
  const wrapper = shallow(<SelectSortOrder />);
  it('renders correctly', () => {
    const rendered = renderer.create(
     <SelectSortOrder />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

describe('sort', () => {
  const wrapper = shallow(<SelectSortOrder />);
  it('should have function  defined', () => {
    expect(typeof wrapper.instance().handleChange).toBe('function');
  });
});
