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
 * @class ArticleStoreClass
 * @extends {EventEmitter}
 */
class ArticleStoreClass extends EventEmitter {
  /**
   * @param {callback} cb
   * @description adds a change listener
   * @memberof ArticleStoreClass
   * @return {void}
   */
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }
  /**
   * @description removes chage listener
   * @param {callback} cb
   * @memberof ArticleStoreClass
   * @return {void}
   */
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
  /**
   * @description returns a list of articles
   * @returns {object} store
   * @memberof ArticleStoreClass
   */
  getList() {
    return store;
  }
}


const ArticleStore = new ArticleStoreClass();

/**
 * registers a new payload based on event emmitted
 * @return {change_event}
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
