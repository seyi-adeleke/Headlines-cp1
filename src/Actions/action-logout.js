import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

/**
 * Passes the info to the auth store
 * @param {object} info - The information of the current user.
 */
export default{
  logout(info) {
    AppDispatcher.handleServerAction({
      actionType: Constants.LOGOUT,
      info,
    });
  },
};
