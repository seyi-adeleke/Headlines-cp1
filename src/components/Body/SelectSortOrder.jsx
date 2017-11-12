import React from 'react';
import PropTypes from 'prop-types';

/**
 * @export SelectSortOrder
 * @class SelectSortOrder
 * @extends {React.Component}
 */
class SelectSortOrder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { sort: '' };
  }

  /**
   * Listens for a change event on the select tag
   * @param {string} event
   * @memberof SelectSortOrder
   */
  handleChange(event) {
    this.props.getSort(event.target.value);
  }

  render() {
    const sortBy = this.props.sortByAvailable;
    return (
      <div className="form-group">
        <label htmlFor>Sort</label>
        <div className="col-sm-12 ">
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

export default SelectSortOrder;

SelectSortOrder.propTypes = {
  getSort: PropTypes.func.isRequired,
  sortByAvailable: PropTypes.oneOfType([
    React.PropTypes.array,
  ]).isRequired,
};

SelectSortOrder.defaultProps = {
  sortByAvailable: [],
};
