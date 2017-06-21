import React from 'react';
import { Link } from 'react-router';

import GoogleLogin from 'react-google-login';
import action from '../Actions/actions-auth';
import store from '../store/authStore';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
    };
    this.googleResponse = this.googleResponse.bind(this);
    this.googleResponseFailure = this.googleResponseFailure.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange() {
    this.setState({ info: store.getUser() });
  }
  googleResponseFailure() {
    //
  }
  googleResponse(response) {
    action.getUser(response.profileObj);
    this.setState({
      info: response.profileObj,
    });
  }
  render() {
    const token = localStorage.getItem('user');
    const user = JSON.parse(token);
    return (
      <div className="welcome">
        <form>
          <div className="text-center">
            <div className="text-center">
              <h2 className="page-header text-center"><em>
                <i className="fa fa-newspaper-o" /> HEADLINES</em></h2>
              <p>Get the latest News from your favourite blogs..</p>
            </div>
            { token ? false : <p>Sign in to get started</p> }
            { token ? false :
            <GoogleLogin
              clientId="983844901383-e2l2k4ss3biu09vkjsoskmbnvpuriqbk.apps.googleusercontent.com"
              buttonText="Sign In"
              onSuccess={this.googleResponse}
              onFailure={this.googleResponseFailure}
            ><i className="fa fa-google-plus" /></GoogleLogin> }
            { token ? <p className="text-center">Welcome, {user.info.name}</p>
            : null}
            { token ? <div className="col-md-4" style={{ marginTop: 20 }}>
              <Link to={'headlines'}><button
                className="btn search-btn"
              >
                <b>Get News</b>
              </button>
              </Link>
            </div> : null
             }
          </div>
        </form>
      </div>
    );
  }
}
