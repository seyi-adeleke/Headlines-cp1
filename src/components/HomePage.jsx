import React from 'react';
import store from '../store/authStore';
import Welcome from './Welcome.jsx';
import SignIn from './SignIn.jsx';

/**
 * @export  Homepage
 * @class Homepage
 * @extends {React.Component}
 */
class Homepage extends React.Component {
  /**
   * Creates an instance of Homepage.
   * @param {object, function} props
   * @memberof Homepage
   */
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      source: 'abc-news-au',
    };
    this.onChange = this.onChange.bind(this);
  }

  /**
   * Sets state onChange
   * @memberof Homepage
   * @returns {void}
   */
  onChange() {
    this.setState({ info: store.getUser() });
    return true;
  }

  /**
   * @param {any} response
   * @memberof Homepage
   */
  response(response) {
    this.setState({
      info: response.profileObj,
    });
    return true;
  }

  render() {
    const token = localStorage.getItem('user');
    return (
      <div className="welcome">
        <form>
          <div className="text-center">
            <div className="text-center">
              <h2 className="page-header text-center"><em>
                <i className="fa fa-newspaper-o" /> HEADLINES</em></h2>
              <p>Get the latest News from your favourite blogs..</p>
            </div>
            { token ? false : <SignIn getResponse={response => this.response(response)} /> }
            { token ? <Welcome /> : null }
          </div>
        </form>
      </div>
    );
  }
}

export default Homepage;
