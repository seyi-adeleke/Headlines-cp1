import { expect } from 'chai';
import AuthStore from '../../src/store/authStore';

describe(' auth Store', () => {
  test('initializes with no user', () => {
     expect(AuthStore.getUser().user).equal(null);
    });
    test('can log a user out', () => {
      expect(AuthStore.removeUser().user).equal(null);
    });
});
