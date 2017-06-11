import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default{
  logout(info) {
    AppDispatcher.handleAction({
      actionType: Constants.LOGOUT,
      info,
    });
  },
};
