import ObjectAssign from 'object-assign';
import AppDispatcher from '../dispatcher';
import Constants from '../constants/constants';

const EventEmitter = require('events').EventEmitter;

const CHANGE_EVENT = 'change';

/**
 * {object}
 * Stores a list of articles
 */
const store = {
  list: null,
};

/**
 * creates a clone of article store
 */
const ArticleStore = ObjectAssign({}, EventEmitter.prototype, {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList() {
    return store;
  },
  listInfo() {
    //
  },
});

/**
 * registers a new payload based on event emmitted
 */
AppDispatcher.register((payload) => {
  const action = payload.action;
  const newArticle = action.response;
  switch (action.actionType) {
    case Constants.NEW_NEWS:
      store.list = newArticle;
      ArticleStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});
export default ArticleStore;
