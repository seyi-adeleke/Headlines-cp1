import React from 'react';
import store from '../../store/authStore';
import action from '../../Actions/actionLogout';

/**
 * @export Nav
 * @class Nav
 * @extends {React.Component}
 */
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
    this.onChange = this.onChange.bind(this);
    this.logUserOut = this.logUserOut.bind(this);
  }

  /**
   * Adds a change listener on component mount
   * @memberof Nav
   * @return {void}
   */
  componentDidMount() {
    store.addChangeListener(this.onChange);
  }

  /**
   * Listens for a change event
   * @memberof Nav
   * @return {void}
   */
  onChange() {
    this.setState({ user: true, info: store.getUser() });
  }

  /**
   * Passes the users data to the logout action
   * @memberof Nav
   */
  logUserOut() {
    action.logout(this.state.user);
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <div>
        <nav className="navbar navbar-tv-tracker navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
              <b><i style={{ color: 'black' }}
                    className="fa fa-newspaper-o" /> HEADLINES</b></a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="nav navbar-nav navbar-right">
                { user ?
                  <ul className="nav navbar-nav navbar-right">
                    <img
                      alt="not available"
                      src={user.info.imageUrl}
                      style={{ marginTop: 6,
                        marginRight: 10,
                        width: 30,
                        borderRadius: 40 }}
                    />
                    <span>{ user.info.givenName } </span>
                    <a><button type="button"
                               onClick={this.logUserOut}
                               className="btn logout-btn navbar-btn">Logout</button></a>
                  </ul>
                    : null}
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Nav;
