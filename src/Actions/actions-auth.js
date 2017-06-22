import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default{
  /**
   * @param {object} info: the users data
   */
  getUser(info) {
    AppDispatcher.handleServerAction({
      actionType: Constants.AUTH,
      info,
    });
  },
};

