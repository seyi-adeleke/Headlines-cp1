import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Layout from './components/Layout.jsx';
import Body from './components/Body.jsx';
import HomePage from './components/HomePage.jsx';
import NotFound from './components/NotFound.jsx';
import store from '../src/store/authStore';

/**
 * @export Root
 * @class Root
 * @extends {React.Component}
 */
class Root extends React.Component {
/**
 * @param {any} nextState
 * @param {method} replace
 * @param {callback} next
 * @memberof Root
 */
  static checkUserState(nextState, replace, next) {
    const key = localStorage.getItem('key');
    if (key === null) {
      replace('/');
    }
    next();
  }
  constructor(props) {
    super(props);
    this.state = { info: null };
    this.onChange = this.onChange.bind(this);
  }

  /**
   * adds a change listener on component render
   * @memberof Root
   * @returns {void}
   */

  componentDidMount() {
    store.addChangeListener(this.onChange);
  }

  /**
   * @memberof Root
   * @returns {void}
   */
  onChange() {
    this.setState({ info: store.getUser() });
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout} >
          <Route path="headlines"
                 component={Body}
                 onEnter={Root.checkUserState}
          />
          <Route path="*" component={NotFound} />
          <IndexRoute component={HomePage} onEnter={this.noAuth}/>
        </Route>
      </Router>
    );
  }
}

export default Root;
