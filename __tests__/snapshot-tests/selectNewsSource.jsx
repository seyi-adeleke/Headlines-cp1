import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';


import SelectNewsSource from '../../src/components/Body/SelectNewsSource';

describe('SelectNewsSource state', () => {
  const wrapper = shallow(<SelectNewsSource getSource={newState => this.newSource(newState)} />);
  it('renders correctly', () => {
    const rendered = renderer.create(
     <SelectNewsSource getSource={newState => this.newSource(newState)} />,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

   it('should have source state to be empty on load', () => {
       expect(wrapper.state().source).toBe('');
   })
   it('should have newsSource state to be [] on load', () => {
    expect(wrapper.state().newsSources.length).toBe(0);
   })
   
});

