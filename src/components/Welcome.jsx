import React from 'react';
import { Link } from 'react-router';

import SelectNewsSource from './Body/SelectNewsSource.jsx';
import actionArticles from '../Actions/actions';



/**
 * @export  Welcome
 * @class Welcome
 * @extends {React.Component}
 */
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: 'abc-news-au',
      user: JSON.parse(localStorage.getItem('user')).info.name,
    };
    this.getNews = this.getNews.bind(this);
  }

  getNews() {
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

  render() {
    return (
      <div>
        <p className="text-center">Welcome, {this.state.user} </p>
        <SelectNewsSource
          ref={(c) => { this.ref = c; }}
          getSource={(newState, sortAvailable) => this.newSource(newState, sortAvailable)}
        />
        <div className="col-md-4" style={{ marginTop: 20 }}>
          <Link to={'headlines'}><button
            onClick={this.getNews}
            className="btn search-btn"
          >
            <b>Get News</b>
          </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Welcome;


