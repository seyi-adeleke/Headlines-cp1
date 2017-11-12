import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

<<<<<<< HEAD
import Body from '../../src/components/Body/MainBody';
=======
import Body from '../../src/components/Body/MainBody.jsx';
>>>>>>> staging

describe('Body', () => {
  const wrapper = shallow(<Body />);
  const spyDidMount = sinon.spy(Body.prototype, 'componentDidMount');

  test('componentDidMount should be called after mount', () => {
    wrapper.instance().componentDidMount();
    expect(spyDidMount.calledOnce).toBe(true);
  });

  const onChange = wrapper.instance().onChange();
  test('onChange to exist', () => {
    expect(onChange).toBeTruthy();
  });
  test('showResults should be true after onChange event on render', () => {
    expect(wrapper.instance().state.showResults).toBe(true);
  });

  const getNews = wrapper.instance().getNews();
  test('getNews should be undefined on page render', () => {
    expect(getNews).toBe(undefined);
  });

  const newSource = wrapper.instance().newSource();
  test('newSource should return undefined', () => {
    expect(newSource).toBe(undefined);
  });

  const newSort = wrapper.instance().newSort();
<<<<<<< HEAD
  test('newSort should exist', () => {
=======
  test('newSort should be undefined on mount', () => {
>>>>>>> staging
    expect(newSort).toBe(undefined);
  });
});
