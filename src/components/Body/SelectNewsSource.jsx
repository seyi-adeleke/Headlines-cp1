import React from 'react';
import request from 'superagent';
import PropTypes from 'prop-types';

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
    this.serverRequest = request.get('https://newsapi.org/v1/sources?language=en')
    .end((error, response) => {
      this.setState({
        newsSources: response.body.sources,
        source: response.body.sources.id,
      });
      return response.body;
    });
  }

  /**
   * handles change events
   * @param {array} event
   * @memberof SelectNewsSource
   */
  handleChange(event) {
    this.setState({
      source: event.target.value.split(',').shift(),
    });
    this.props.getSource(event.target.value.split(',').shift(), event.target.value.split(',').slice(1));
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor>Source</label>
        <div className="col-sm-12">
          <select
            defaultValue={this.state.source}
            onChange={this.handleChange}
            className="form-control"
          >
            {this.state.newsSources.map(sources =>
               (
                 <option
                   id={sources.sortBysAvailable}
                   key={sources.id}
                   value={[sources.id, sources.sortBysAvailable]}
                 > {sources.name} </option>
                 ),
        )}
          </select>
        </div>
      </div>
    );
  }
}
export default SelectNewsSource;


SelectNewsSource.propTypes = {
  getSource: PropTypes.func.isRequired,
};
