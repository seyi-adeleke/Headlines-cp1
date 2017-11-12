import React from 'react';
import request from 'superagent';
import PropTypes from 'prop-types';
import Select from 'react-select';


/**
 * @export SelectNewsSource
 * @class SelectNewsSource
 * @extends {React.Component}
 */
class SelectNewsSource extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { source: '', newsSources: [] };
  }

  /**
   * makes an api call on component mount
   * @memberof SelectNewsSource
   */
  componentDidMount() {
    const sources = 'https://newsapi.org/v1/sources?language=en';
    this.serverRequest = request.get(sources)
    .end((error, response) => {
      this.setState({
        newsSources: response.body.sources,
        source: response.body.sources.id,
      });
    });
  }

  /**
   * handles change events
   * @param {array} event
   * @memberof SelectNewsSource
   * @return {true}
   */
  handleChange(event) {
    if (event) {
      localStorage.setItem('key', event.id);

      this.setState({
        source: event,
      });
      this.props.getSource(event.id, event.sortBysAvailable);
    } else {
      this.setState({
        source: event,
      });
    }
    return true;
  }

  render() {
    return (
      <div>
        <label htmlFor>Source</label>
        <div className="col-sm-12">
          <Select
            onChange={this.handleChange}
            labelKey="name"
            value={this.state.source}
            options={this.state.newsSources}
            searchable
            tabSelectsValue
            placeholder="Search here..."
          />
        </div>
      </div>
    );
  }
}
export default SelectNewsSource;


SelectNewsSource.propTypes = {
  getSource: PropTypes.func,
};

SelectNewsSource.defaultProps = {
  getSource: f => f,
};
