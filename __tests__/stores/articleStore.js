import { expect } from 'chai';
import ArticlesStore from '../../src/store/articlesStore';


describe(' articles Store', () => {
    test('initializes with no data from api', () => {
      expect(ArticlesStore.getList().list).equal(null);
    });
    test('initializes with no data from api', () => {
      expect(ArticlesStore.listInfo()).equal(null);
    });
});



