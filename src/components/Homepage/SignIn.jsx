import React from 'react';
import GoogleLogin from 'react-google-login';
import AlertContainer from 'react-alert';
import PropTypes from 'prop-types';

import action from '../../Actions/actionsAuth';

/**
 * @export  SignIn
 * @class SignIn
 * @extends {React.Component}
 */
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.googleResponse = this.googleResponse.bind(this);
    this.googleResponseFailure = this.googleResponseFailure.bind(this);
    this.handleRef = this.handleRef.bind(this);
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
   *  @param {response} response
   *  @memberof SignIn
   *  @returns {true}
   */
  googleResponse(response) {
    action.getUser(response.profileObj);
    this.props.getResponse(response);
    return true;
  }

  /**
   * handles on failure response from the google api.
   * @return {void}
   * @memberof SignIn
   */
  googleResponseFailure() {
    this.showAlert();
  }

  handleRef(alert) {
    this.msg = alert;
  }

  render() {
    return (
      <div>
        <p>Sign in to get started</p>
        <GoogleLogin
          clientId={process.env.GOOGLE_ID}
          buttonText="Sign In"
          onSuccess={this.googleResponse}
          onFailure={this.googleResponseFailure}
        ><i className="fa fa-google-plus" />
          <AlertContainer ref={this.handleRef} />
        </GoogleLogin>
      </div>
    );
  }
}
export default SignIn;

SignIn.propTypes = {
  getResponse: PropTypes.func.isRequired,
};
