import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default {
  /**
   * Passes the Api response to the appropriate dispatcher
   * @param {object} response
<<<<<<< HEAD:src/Actions/actionServer.js
=======
   * @return {void}
>>>>>>> staging:src/Actions/actionServer.js
   */
  receiveArticle(response) {
    AppDispatcher.handleServerAction({
      actionType: Constants.NEW_NEWS,
      response,
    });
  },
};
