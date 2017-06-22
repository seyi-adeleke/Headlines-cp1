import React from 'react';
import store from '../../store/authStore';
import action from '../../Actions/action-logout';

/**
 * @export Nav
 * @class Nav
 * @extends {React.Component}
 */
class Nav extends React.Component {
  /**
   * Creates an instance of Nav.
   * @param {function, object} props
   * @memberof Nav
   */
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
              <a className="navbar-brand" href="/"><b><i style={{ color: 'black' }} className="fa fa-newspaper-o" /> HEADLINES</b></a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
              <form>
                {
                  user ? <img
                    alt="not available"
                    src={user.info.imageUrl}
                    style={{ marginTop: 8, marginLeft: 750, width: 30, borderRadius: 40 }}
                  />
                  : null
                }
                { user ?
                  <ul className="nav navbar-nav navbar-right">
                    <li><a className="user-name">
                      { user.info.givenName}</a></li>
                     <li onClick={this.logUserOut}><a className="navbar-brand" >
                       <b>Log Out</b></a></li>
                  </ul>
                    : null}
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
