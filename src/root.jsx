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
<<<<<<< HEAD
   /**
=======
/**
>>>>>>> staging
 * @param {any} nextState
 * @param {method} replace
 * @param {callback} next
 * @memberof Root
 */
  static checkUserState(nextState, replace, next) {
<<<<<<< HEAD
    const user = (localStorage.getItem('user'));
    if (user === null) {
=======
    const key = localStorage.getItem('key');
    if (key === null) {
>>>>>>> staging
      replace('/');
    }
    next();
  }
<<<<<<< HEAD

  /**
   * Creates an instance of Root.
   * @param {object, methods} props
   * @memberof Root
   */
=======
>>>>>>> staging
  constructor(props) {
    super(props);
    this.state = { info: null };
    this.onChange = this.onChange.bind(this);
<<<<<<< HEAD
    this.noAuth = this.noAuth.bind(this);
=======
>>>>>>> staging
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
<<<<<<< HEAD
  


  noAuth(nextState, replace, next) {
    if (this.state.info !== null) {
      replace('/headlines');
    }
    next();
  }
 
=======
>>>>>>> staging

  render() {
    return (
      <Router history={browserHistory}>
<<<<<<< HEAD
        <Route path="/" component={Layout} onEnter={this.noAuth}>
          <Route path="headlines" component={Body} onEnter={Root.checkUserState} />
=======
        <Route path="/" component={Layout} >
          <Route path="headlines"
                 component={Body}
                 onEnter={Root.checkUserState}
          />
>>>>>>> staging
          <Route path="*" component={NotFound} />
          <IndexRoute component={HomePage} onEnter={this.noAuth}/>
        </Route>
      </Router>
    );
  }
}

export default Root;
