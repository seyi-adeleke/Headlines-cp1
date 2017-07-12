import actions from '../../src/Actions/actions';
import actionServer from '../../src/Actions/actionServer';
import authActions from '../../src/Actions/actionsAuth';
import logoutActions from '../../src/Actions/actionLogout';

import Api from '../../src/utils/ArticlesApi';

jest.mock('../../src/dispatcher');
jest.mock('../../src/utils/ArticlesApi');

const newsApiGet = Api.get;

newsApiGet.mockReturnValue(Promise.resolve({ data: 'info from api' }));

describe('Actions', () => {
  describe('actions', () => {
    test('should receive details from view', () => {
      actions.receiveDetails();
    });
    test('should make a call to the api', () => {
      actionServer.receiveArticle();
      expect(newsApiGet.mock.calls.length).toBe(1);
    });
  });
  describe('authActions', () => {
    test('gets a user', () => {
      expect(authActions.getUser());
    });
  });
  describe('logoutActions', () => {
    it('logs a user out', () => {
      expect(logoutActions.logout());
    });
  });
});
