import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout.jsx';
import Body from './components/Body.jsx';
import HomePage from './components/HomePage.jsx';
import NotFound from './components/NotFound.jsx';
import store from '../src/store/authStore.js';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: null };
    this.onChange = this.onChange.bind(this);
    this.checkUserState = this.checkUserState.bind(this);
    this.noAuth = this.noAuth.bind(this);
  }
  componentDidMount() {
    store.addChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ info: store.getUser() });
  }
  checkUserState(nextState, replace, next) {
    const user = (localStorage.getItem('user'));
    if (user === null) {
      replace('/');
    }
    next();
  }
  noAuth(nextState, replace, next) {
    if (this.state.info !== null) {
      replace('/headlines');
    }
    next();
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout} onEnter={this.noAuth}>
          <Route path="headlines" component={Body} onEnter={this.checkUserState} />
          <Route path="*" component={NotFound} />
          <IndexRoute component={HomePage} />
        </Route>
      </Router>
    );
  }
}
