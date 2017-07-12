import AuthStore from '../../src/store/authStore';
import dispatcher from '../../src/dispatcher';
import constants from '../../src/constants/constants';

describe(' auth Store has correct methods', () => {
  test('initializes with no user', () => {
    expect(AuthStore.getUser().user).toBeDefined();
  });
  test('can log a user out', () => {
    expect(AuthStore.removeUser().user).toBeDefined();
  });
  test('should have a addChangeListener method', () => {
    expect(AuthStore.addChangeListener).toBeDefined();
  });
  test('should have a removeChangeListener method', () => {
    expect(AuthStore.removeChangeListener).toBeDefined();
  });
  test('should respond to a dispatch call', () => {
    dispatcher.handleServerAction({
      type: constants.AUTH,
    });
  });
});
