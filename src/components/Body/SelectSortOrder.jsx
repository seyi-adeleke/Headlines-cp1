import React from 'react';
import PropTypes from 'prop-types';

/**
 * @export SelectSortOrder
 * @class SelectSortOrder
 * @extends {React.Component}
 */
export default class SelectSortOrder extends React.Component {
  /**
   * Creates an instance of SelectSortOrder.
   * @param {function, object} props
   * @memberof SelectSortOrder
   */
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { sort: '' };
  }
  /**
   * @param {string} event
   * @memberof SelectSortOrder
   */
  handleChange(event) {
    this.setState({
      sort: event.target.value,
    });
    /**
     * @param sort
     */
    this.props.getSort(event.target.value);
  }
  render() {
    const sortBy = this.props.sortByAvailable;
    return (
      <div className="form-group">
        <label htmlFor>Priority</label>
        <div className="col-sm-12">
          <select
            className="form-control"
            defaultValue={this.state.sort}
            onChange={this.handleChange}
          >
            {
            Object.keys(sortBy).map(key => (
              <option key={key.toString()}>{sortBy[key]}</option>
            ))
          }
          </select>
        </div>
      </div>
    );
  }
}
SelectSortOrder.propTypes = {
  getSort: PropTypes.func.isRequired,
  sortByAvailable: PropTypes.oneOfType([
    React.PropTypes.obj,
  ]).isRequired,
};
