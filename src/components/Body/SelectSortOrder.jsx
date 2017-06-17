import React from 'react';
import PropTypes from 'prop-types';


export default class SelectSortOrder extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { sort: '' };
  }
  handleChange(event) {
    this.setState({
      sort: event.target.value,
    });
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
