import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default {
  /**
   * Passes the Api response to the appropriate dispatcher
   * @param {object} response
   */
  receiveArticle(response) {
    AppDispatcher.handleServerAction({
      actionType: Constants.NEW_NEWS,
      response,
    });
  },
};
