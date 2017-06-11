const Dispatcher = require('flux').Dispatcher;

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function articles(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action,
  });
};

AppDispatcher.handleServerAction = function apiControl(action) {
  this.dispatch({
    source: 'SERVER_ACTION',
    action,
  });
};

AppDispatcher.handleAction = function auth(action) {
  this.dispatch({
    source: 'SERVER_ACTION',
    action,
  });
};

export default AppDispatcher;
