import ObjectAssign from 'object-assign';
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
 * creates a clone of auth store
 */
const AuthStore = ObjectAssign({}, EventEmitter.prototype, {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getUser() {
    return store;
  },
  removeUser() {
    return store;
  },
});
/**
 * registers a new payload based on event emmitted
 */
AppDispatcher.register((payload) => {
  const action = payload.action;
  const newUser = action;
  switch (action.actionType) {
    case Constants.AUTH:
      store.user = newUser;
      AuthStore.emit(CHANGE_EVENT);
      localStorage.setItem('user', JSON.stringify(store.user));
      break;
    case Constants.LOGOUT:
      localStorage.removeItem('user');
      window.location = '/';
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
