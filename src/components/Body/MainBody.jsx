import React from 'react';
import SelectNewsSource from './SelectNewsSource.jsx';
import SelectSortOrder from './SelectSortOrder.jsx';
import Result from './Result.jsx';
import store from '../../store/articlesStore';
import action from '../../Actions/actions';

/**
 * @export MainBody
 * @class MainBody
 * @extends {React.Component}
 */
class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source: 'abc-news-au',
      sortby: ['top'],
      sort: '',
      info: '',
      showResults: false };
    this.newSource = this.newSource.bind(this);
    this.newSort = this.newSort.bind(this);
    this.getNews = this.getNews.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * Adds an event listener on component mount.
   * @memberof MainBody
   * @returns {void}
   */
  componentDidMount() {
    store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    store.removeChangeListener(this.onChange);
  }

  /**
   * Listens for an onChange event and sets the state
   * @memberof MainBody
   * @returns {true}
   */
  onChange() {
    this.setState({ info: store.getList(), showResults: true });
    return true;
  }

  /**
   * sends data from child components to the action
   * @memberof MainBody
   * @returns {void}
   */
  getNews() {
    action.receiveDetails(this.state.source, this.state.sort);
  }

  /**
   * @param {string} newState: the name of a new source
   * @param {array} sortAvailable: an array of available sort options.
   * @memberof MainBody
   * @returns {void}
   */
  newSource(newState, sortAvailable) {
    this.setState({ source: newState, sortby: sortAvailable });
  }

  /**
   * @param {any} newState: the new sort value
   * @memberof MainBody
   * @returns {void}
   */
  newSort(newState) {
    this.setState({ sort: newState });
  }

  /**
   * @returns component
   * @memberof MainBody
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
        {this.state.showResults ? <Result data={this.state.info} /> : null}
      </div>
    );
  }
}
export default MainBody;
