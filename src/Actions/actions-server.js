import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default {
  receiveArticle(response) {
    AppDispatcher.handleServerAction({
      actionType: Constants.NEW_NEWS,
      response,
    });
  },
};
