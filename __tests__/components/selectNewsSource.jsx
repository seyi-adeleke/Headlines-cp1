import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

<<<<<<< HEAD
import NewsSource from '../../src/components/Body/SelectNewsSource';
=======
import NewsSource from '../../src/components/Body/SelectNewsSource.jsx';

jest.unmock('../../__mocks__/localStoragemock.js');

const event = {
  id: 'abc-news-au'
};
localStorage.setItem('key', event.id);
>>>>>>> staging


jest.unmock('../../__mocks__/superagent.js');
describe('NewsSource', () => {
  const wrapper = mount(<NewsSource />);
<<<<<<< HEAD
  test('should have have divs', () => {
    expect(wrapper.find('div').length).toBe(7);
  });

  const spyDidMount = sinon.spy(NewsSource.prototype, 'componentDidMount');

  test('componentDidMount should be called after mount', () => {
    wrapper.instance().componentDidMount();
    expect(spyDidMount.calledOnce).toBe(true);
  });
  const handleChange = wrapper.instance().handleChange();
  test('handleChange function should be truthy', () => {
    expect(handleChange).toBeTruthy();
  });
=======

  test('should have have divs', () => {
    expect(wrapper.find('div').length).toBe(7);
  });

  const spyDidMount = sinon.spy(NewsSource.prototype, 'componentDidMount');

  test('componentDidMount should be called after mount', () => {
    wrapper.instance().componentDidMount();
    expect(spyDidMount.calledOnce).toBe(true);
  });
  const handleChange = wrapper.instance().handleChange(event);
  test('handleChange function should be truthy', () => {
    expect(handleChange).toBeTruthy();
  });
>>>>>>> staging
});
