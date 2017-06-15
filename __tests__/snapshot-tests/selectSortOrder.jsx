import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';


import SelectSortOrder from '../../src/components/Body/SelectSortOrder';

describe('SelectNewsSource state', () => {
  const wrapper = shallow(<SelectSortOrder getSort={newState => this.newSort(newState)} />);
  it('renders correctly', () => {
    const rendered = renderer.create(
     <SelectSortOrder getSource={newState => this.newSource(newState)} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

