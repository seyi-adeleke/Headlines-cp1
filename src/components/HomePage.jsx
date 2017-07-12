import React from 'react';
import store from '../store/authStore';
import Welcome from './Homepage/Welcome.jsx';
import SignIn from './Homepage/SignIn.jsx';

/**
 * @export  Homepage
 * @class Homepage
 * @extends {React.Component}
 */
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
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
   * @return {true}
   */
  response(response) {
    this.setState({
      info: response.profileObj,
    });
    return true;
  }

  handleResponse(response) {
    this.response(response);
  }

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
            { token ? false : <SignIn getResponse={this.handleResponse} /> }
            { token ? <Welcome /> : null }
          </div>
        </form>
      </div>
    );
  }
}

export default Homepage;
