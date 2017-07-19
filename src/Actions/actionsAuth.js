import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default{
  /**
   * Retrieves User data
   * @param {object} info: the users data
   * @returns {void}
   */
  getUser(info) {
    AppDispatcher.handleServerAction({
      actionType: Constants.AUTH,
      info,
    });
  },
};
