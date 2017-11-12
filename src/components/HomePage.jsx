import React from 'react';
import store from '../store/authStore';
<<<<<<< HEAD
import Welcome from './Welcome.jsx';
import SignIn from './SignIn.jsx';
=======
import Welcome from './Homepage/Welcome.jsx';
import SignIn from './Homepage/SignIn.jsx';
>>>>>>> staging

/**
 * @export  Homepage
 * @class Homepage
 * @extends {React.Component}
 */
class Homepage extends React.Component {
<<<<<<< HEAD
  /**
   * Creates an instance of Homepage.
   * @param {object, function} props
   * @memberof Homepage
   */
=======
>>>>>>> staging
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      source: 'abc-news-au',
    };
    this.onChange = this.onChange.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
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
<<<<<<< HEAD
=======
   * @return {true}
>>>>>>> staging
   */
  response(response) {
    this.setState({
      info: response.profileObj,
    });
    return true;
  }

<<<<<<< HEAD
=======
  handleResponse(response) {
    this.response(response);
  }

>>>>>>> staging
  render() {
    const token = localStorage.getItem('user');
    return (
      <div className="welcome" style={{ marginTop: 100 }}>
        <form>
          <div className="text-center">
            <div className="text-center">
              <h2 className="page-header text-center"><em>
                <i className="fa fa-newspaper-o" /> HEADLINES</em></h2>
              <p>Get the latest News from your favourite blogs..</p>
            </div>
<<<<<<< HEAD
            { token ? false : <SignIn getResponse={response => this.response(response)} /> }
=======
            { token ? false : <SignIn getResponse={this.handleResponse} /> }
>>>>>>> staging
            { token ? <Welcome /> : null }
          </div>
        </form>
      </div>
    );
  }
}

export default Homepage;
