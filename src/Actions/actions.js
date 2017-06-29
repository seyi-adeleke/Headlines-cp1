import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';
import ArticlesApi from '../utils/ArticlesApi';

export default{
  /**
   * Passes the params to the Api call.
   * @param {string} source
   * @param {string} sort
   * @return {void}
   */
  receiveDetails(source, sort) {
    ArticlesApi.get(source, sort);
    AppDispatcher.handleViewAction({
      actionType: Constants.NEW_NEWS,
    });
  },
};
