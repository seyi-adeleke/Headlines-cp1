import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

export default{
  logout(info) {
    AppDispatcher.handleServerAction({
      actionType: Constants.LOGOUT,
      info,
    });
  },
};
