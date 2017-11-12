import { browserHistory } from 'react-router';

import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

const EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';

/**
 * {object}
 */
const store = {
  user: null,
};
/**
 * @class AuthStoreClass
 * @extends {EventEmitter}
 */
class AuthStoreClass extends EventEmitter {
  /**
   * @param {function} cb
   * @memberof AuthStoreClass
   * @return {void}
   */
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }
  /**
   * @param {callback} cb
   * @memberof AuthStoreClass
   * @return {void}
   */
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  /**
   * @description Returns the user in the store
   * @returns {object} store
   * @memberof AuthStoreClass
   */
  getUser() {
    return store;
  }

  /**
   * @description Removes the user in the store.
   * @returns {object} store
   * @memberof AuthStoreClass
   */
  removeUser() {
    return store;
  }
}

const AuthStore = new AuthStoreClass();

/**
 * registers a new payload based on event emmitted
 */
AppDispatcher.register((payload) => {
  const action = payload.action;
  const newUser = action;
  switch (action.actionType) {
  case Constants.AUTH:
    store.user = newUser;
    localStorage.setItem('user', JSON.stringify(store.user));
    AuthStore.emit(CHANGE_EVENT);
    break;
  case Constants.LOGOUT:
    localStorage.removeItem('user');
    localStorage.removeItem('key');
    browserHistory.push('/');
    if (action) {
      store.user = null;
      AuthStore.emit(CHANGE_EVENT);
    }
    break;
  default:
    return true;
  }
});

export default AuthStore;
