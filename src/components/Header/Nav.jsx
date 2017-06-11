import React from 'react';
import store from '../../store/authStore';
import action from '../../Actions/action-logout';


export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
    this.onChange = this.onChange.bind(this);
    this.logUserOut = this.logUserOut.bind(this);
  }
  componentDidMount() {
    store.addChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ user: true });
  }
  componentDidUnMount() {
    store.removeChangeListener(this.onChange);
  }
  logUserOut() {
    action.logout(this.state.user);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-tv-tracker navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/"><b>HEADLINES</b></a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
              <form>
                {this.state.user ?
                  <ul className="nav navbar-nav navbar-right">
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
