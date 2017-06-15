import { expect } from 'chai';
import ArticlesStore from '../../src/store/articlesStore';
import dispatcher from '../../src/dispatcher';
import actions from '../../src/Actions/actions-server';
import constants from '../../src/constants/constants';

describe(' articles Store', () => {
  test('initializes with no data from api', () => {
    expect(ArticlesStore.getList().list).equal(null);
  });
  test('initializes with no data from api', () => {
    expect(ArticlesStore.listInfo()).equal(null);
  });
});
