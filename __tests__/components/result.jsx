import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Result from '../../src/components/Body/Result.jsx';

describe('Result', () => {
  const info = {
    list: {
      articles: [],
      sortBy: 'top',
      source: 'abc-news-au',
      status: 'ok',
    },
  };
  const wrapper = shallow(<Result data={info} />);
  const spyDidMount = sinon.spy(Result.prototype, 'componentWillMount');
  test('componentWillMount should be called before mount', () => {
    wrapper.instance().componentWillMount();
    expect(spyDidMount.calledOnce).toBe(true);
  });
});
