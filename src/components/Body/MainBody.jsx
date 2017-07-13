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
    this.state = {
      sort: '',
      showResults: false,
    };
    this.newSource = this.newSource.bind(this);
    this.newSort = this.newSort.bind(this);
    this.getNews = this.getNews.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSourceResponse = this.handleSourceResponse.bind(this);
    this.handleSortResponse = this.handleSortResponse.bind(this);
  }

  /**
   * Adds an event listener on component mount.
   * @memberof MainBody
   * @returns {void}
   */
  componentDidMount() {
    const article = (localStorage.getItem('key'));
    action.receiveDetails(article, 'top');
    store.addChangeListener(this.onChange);
  }


  /**
   * Listens for an onChange event and sets the state
   * @memberof MainBody
   * @returns {true}
   */
  onChange() {
    this.setState({ articlesInfo: store.getList(), showResults: true });
    return true;
  }

  /**
   * sends data from child components to the action
   * @memberof MainBody
   * @returns {void}
   */
  getNews() {
    if (this.state.source) {
      action.receiveDetails(this.state.source, this.state.sort);
    }
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
   * @param {string} source news source
   * @param {array} sortAvailable sort options
   * @memberof MainBody
   */
  handleSourceResponse(source, sortAvailable) {
    this.newSource(source, sortAvailable);
  }

  /**
   * @param {string} sort sort option
   * @memberof MainBody
   */
  handleSortResponse(sort) {
    this.newSort(sort);
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
                getSource={this.handleSourceResponse}
              />
            </div>
            <div className="col-md-4">
              <SelectSortOrder
                sortByAvailable={this.state.sortby}
                getSort={this.handleSortResponse}
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
        {this.state.showResults ?
        <Result articles={this.state.articlesInfo} /> : null}
      </div>
    );
  }
}
export default MainBody;
