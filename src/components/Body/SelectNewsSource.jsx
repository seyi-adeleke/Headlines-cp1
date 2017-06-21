import React from 'react';
import request from 'superagent';
import PropTypes from 'prop-types';

export default class SelectNewsSource extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { source: '', newsSources: [] };
  }
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


  handleChange(event) {
    const sortAvailable = (event.target.value.split(','));
    const source = sortAvailable.shift();
    this.setState({
      source,
    });
    this.props.getSource(source, sortAvailable);
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
                   /* value={sources.id} */
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
SelectNewsSource.propTypes = {
  getSource: PropTypes.func.isRequired,
};
