import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';
import ArticlesApi from '../utils/ArticlesApi';

export default{
  receiveArticle(source, sort) {
    ArticlesApi.get(source, sort);
    AppDispatcher.handleViewAction({
      actionType: Constants.NEW_NEWS,
    });
  },
};
