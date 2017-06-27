import dispatcher from '../../src/dispatcher';
import actions from '../../src/Actions/actions';
import actionServer from '../../src/Actions/actionServer';
import authActions from '../../src/Actions/actionsAuth';
import logoutActions from '../../src/Actions/actionLogout';
import constants from '../../src/constants/constants';

import Api from '../../src/utils/ArticlesApi';

jest.mock('../../src/dispatcher');
jest.mock('../../src/utils/ArticlesApi');

const newsApiGet = Api.get;

newsApiGet.mockReturnValue(Promise.resolve({ data: 'info from api' }));
const dispatchSpy = jest.spyOn(dispatcher, 'dispatch');

describe('Receive info Actions', () => {
  test('should receive details from view', () => {
    actions.receiveDetails();
  });
  test('should make a call to the api', () => {
    actionServer.receiveArticle();
    expect(newsApiGet.mock.calls.length).toBe(1);
  });
});

describe('Auth Actions', () => {
  test('gets a user', () => {
    expect(authActions.getUser());
  });
});


describe('Logout Actions', () => {
  it('gets a user', () => {
    expect(logoutActions.logout());
  });
});
