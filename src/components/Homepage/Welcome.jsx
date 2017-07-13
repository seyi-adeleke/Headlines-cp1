import React from 'react';
import { Link } from 'react-router';

import SelectNewsSource from '../Body/SelectNewsSource.jsx';
import actionArticles from '../../Actions/actions';


/**
 * @export  Welcome
 * @class Welcome
 * @extends {React.Component}
 */
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('user')).info.name,
    };
    this.getNews = this.getNews.bind(this);
    this.handleSource = this.handleSource.bind(this);
    this.handleRef = this.handleRef.bind(this);
  }
  /**
   * passes the source value to the action
   * @returns  true
   * @memberof Welcome
   */
  getNews() {
    localStorage.setItem('key', this.state.source);
    if (this.ref) {
      actionArticles.receiveDetails(this.state.source, 'top');
    }
    return true;
  }

  newSource(newState) {
    this.setState({
      source: newState,
    });
    return true;
  }

  handleSource(source, sortAvailable) {
    this.newSource(source, sortAvailable);
  }
  handleRef(ref) {
    this.ref = ref;
  }
  render() {
    return (
      <div>
        <p className="text-center">Welcome, {this.state.user} </p>
        <SelectNewsSource
          ref={this.handleRef}
          getSource={this.handleSource}
        />
        {this.state.source ?
        <div className="col-md-4" style={{ marginTop: 20 }}>
          <Link to={'headlines'}><button
            onClick={this.getNews}
            className="btn search-btn"
          >
            <b>Get News</b>
          </button>
          </Link>
        </div> : null}
        <br />
        <br />
      </div>
    );
  }
}
export default Welcome;
