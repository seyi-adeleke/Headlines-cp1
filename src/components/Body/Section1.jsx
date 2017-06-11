import React from 'react';
import SelectNewsSource from './SelectNewsSource.jsx';
import SelectSortOrder from './SelectSortOrder.jsx';
import Section2 from './section2.jsx';
import store from '../../store/articlesStore';
import action from '../../Actions/actions';

export default class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source: 'abc-news-au', sort: 'top', info: '', showResults: false };
    this.newSource = this.newSource.bind(this);
    this.newSort = this.newSort.bind(this);
    this.getNews = this.getNews.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    store.addChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ info: store.getList(), showResults: true });
  }
  getNews() {
    action.receiveArticle(this.state.source, this.state.sort);
  }
  newSource(newState) {
    this.setState({ source: newState });
  }
  newSort(newState) {
    this.setState({ sort: newState });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <SelectNewsSource className="newsSource"getSource={newState => this.newSource(newState)} />
            </div>
            <div className="col-md-4">
              <SelectSortOrder getSort={newState => this.newSort(newState)} />
            </div>
            <div className="col-md-4" style={{ marginTop: 20 }}>
              <button
                onClick={this.getNews}
                className="btn search-btn"
              >
                <b>Get News</b>
              </button>
            </div>
          </div>
        </div>
        {this.state.showResults ? <Section2 data={this.state.info} /> : null}
      </div>
    );
  }
}
