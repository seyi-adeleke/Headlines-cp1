import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout.jsx';
import Body from './components/Body.jsx';
import HomePage from './components/HomePage.jsx';
import store from '../src/store/authStore.js';

import './styles/app.scss';

const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

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
    if (this.state.info === null) {
      replace('/');
    }
    next();
  }
  noAuth(nextState, replace, next) {
    if (this.state.info === {}) {
      replace('/headlines');
    }
    next();
  }
  render() {
    return (
      <Router h history={browserHistory}>
        <Route path="/" component={Layout} onEnter={this.noAuth}>
          <Route path="headlines" component={Body} onEnter={this.checkUserState} />
          <Route path="*" component={NotFound} />
          <IndexRoute component={HomePage} />
        </Route>
      </Router>
    );
  }
}
