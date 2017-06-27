import React from 'react';
import GoogleLogin from 'react-google-login';
import AlertContainer from 'react-alert';
import PropTypes from 'prop-types';

import action from '../Actions/actionsAuth';

/**
 * @export  SignIn
 * @class SignIn
 * @extends {React.Component}
 */
class SignIn extends React.Component {
  /**
   * Creates an instance of SignIn.
   * @param {object, function} props
   * @memberof SignIn
   */
  constructor(props) {
    super(props);
    this.googleResponse = this.googleResponse.bind(this);
    this.googleResponseFailure = this.googleResponseFailure.bind(this);

    this.showAlert = () => {
      this.msg.error('Sorry, there was an error.', {
        theme: 'light',
        time: 4000,
        type: 'error',
      });
    };
  }

  /**
   *  Parses the google authentiction request
   *  @param {object}
   *  @memberof SignIn
   *  @returns {void}
   */
  googleResponse(response) {
    action.getUser(response.profileObj);
    this.props.getResponse(response);
  }

  /**
   * handles on failure response from the google api.
   * @return {void}
   * @memberof SignIn
   */
  googleResponseFailure() {
    this.showAlert();
  }

  render() {
    return (
      <div>
        <p>Sign in to get started</p>
        <GoogleLogin
          clientId="983844901383-e2l2k4ss3biu09vkjsoskmbnvpuriqbk.apps.googleusercontent.com"
          buttonText="Sign In"
          onSuccess={this.googleResponse}
          onFailure={this.googleResponseFailure}
        ><i className="fa fa-google-plus" />
          <AlertContainer ref={a => this.msg = a} />
        </GoogleLogin>
      </div>
    );
  }
}
export default SignIn;

SignIn.propTypes = {
  getResponse: PropTypes.func.isRequired,
};

