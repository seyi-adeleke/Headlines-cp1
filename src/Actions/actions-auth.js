import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default{
  getUser(info) {
    AppDispatcher.handleAction({
      actionType: Constants.AUTH,
      info,
    });
  },
};

