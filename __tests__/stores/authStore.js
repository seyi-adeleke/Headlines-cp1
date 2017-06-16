import { expect } from 'chai';
import AuthStore from '../../src/store/authStore';
import dispatcher from '../../src/dispatcher';
import constants from '../../src/constants/constants';

describe(' auth Store', () => {
  test('initializes with no user', () => {
    expect(AuthStore.getUser().user).equal(null);
  });
  test('can log a user out', () => {
    expect(AuthStore.removeUser().user).equal(null);
  });
  test('should respond to a dispatch call', () => {
    dispatcher.handleServerAction({
      type: constants.AUTH,
    });
  });
  test('should respond to a dispatch call', () => {
    dispatcher.handleServerAction({
      type: constants.LOGOUT,
    });
  });
});
