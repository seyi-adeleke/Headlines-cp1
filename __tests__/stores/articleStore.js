import expects from 'expect';

import store from '../../src/store/articlesStore';
import dispatcher from '../../src/dispatcher';
import constants from '../../src/constants/constants';

jest.dontMock('../../src/store/articlesStore.js');

describe('', () => {
  it('should exist', () => {
    expects(store).toExist();
  });
  it('should return an empty array when instance is created', () => {
    expect(store.getList().list).toBe(null);
  });
  it('should respond to a dispatch call', () => {
    dispatcher.handleViewAction({
      type: constants.NEW_NEWS,
    });
  });
});
