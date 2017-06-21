import expects from 'expect';

import store from '../../src/store/articlesStore';
import dispatcher from '../../src/dispatcher';
import constants from '../../src/constants/constants';

jest.dontMock('../../src/store/articlesStore.js');


describe('store should have the correct methods', () => {
  it('should exist', () => {
    expects(store).toExist();
  });
  it('should return an empty array when instance is created', () => {
    expect(store.getList().list).toBe(null);
  });
  it('have a change listener', () => {
    expect(store.addChangeListener).toBeDefined();
  });
  it('have a change listener', () => {
    expect(store.removeChangeListener).toBeDefined();
  });

  it('should respond to a dispatch call', () => {
    dispatcher.handleViewAction({
      type: constants.NEW_NEWS,
    });
  });
});
