import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default{
  getUser(info) {
    AppDispatcher.handleServerAction({
      actionType: Constants.AUTH,
      info,
    });
  },
};

