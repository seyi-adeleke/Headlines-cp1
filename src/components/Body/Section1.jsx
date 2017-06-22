import React from 'react';
import SelectNewsSource from './SelectNewsSource.jsx';
import SelectSortOrder from './SelectSortOrder.jsx';
import Section2 from './section2.jsx';
import store from '../../store/articlesStore';
import action from '../../Actions/actions';

/**
 * @export Section1
 * @class Section1
 * @extends {React.Component}
 */
export default class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source: 'abc-news-au', sortby: ['top'], sort: '', info: '', showResults: false };
    this.newSource = this.newSource.bind(this);
    this.newSort = this.newSort.bind(this);
    this.getNews = this.getNews.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  /**
   * Adds an event listener on component mount.
   * @memberof Section1
   */
  componentDidMount() {
    store.addChangeListener(this.onChange);
  }
  /**
   * Listens for an onChange event and sets the state
   * @memberof Section1
   */
  onChange() {
    this.setState({ info: store.getList(), showResults: true });
  }
  /**
   * sends data from child components to the action
   * @memberof Section1
   */
  getNews() {
    action.receiveArticle(this.state.source, this.state.sort);
  }
  /**
   * @param {string} newState: the name of a new source
   * @param {array} sortAvailable: an array of available sort options.
   * @memberof Section1
   */
  newSource(newState, sortAvailable) {
    this.setState({ source: newState, sortby: sortAvailable });
  }
  /**
   * @param {any} newState: the new sort value
   * @memberof Section1
   */
  newSort(newState) {
    this.setState({ sort: newState });
  }
  /**
   * @returns component
   * @memberof Section1
   */
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <SelectNewsSource
                className="newsSource"
                getSource={(newState, sortAvailable) => this.newSource(newState, sortAvailable)}
              />
            </div>
            <div className="col-md-4">
              <SelectSortOrder
                sortByAvailable={this.state.sortby}
                getSort={newState => this.newSort(newState)}
              />
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
