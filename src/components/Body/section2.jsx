import React from 'react';
import PropTypes from 'prop-types';

export default class Section2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  render() {
    const obj = this.props.data.list;
    const sourceName = obj.source;
    const sourceData = this.props.data.list.articles;
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary panel-table">
              <div className="panel-heading">
                <h3 className="panel-title text-center">
                  The Latest Headlines from {sourceName}
                </h3>
              </div>
              <div className="panel-body">
                <table className="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                      <th><i className="fa-2x fa fa-photo" /></th>
                      <th>Author</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Go to Article</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Object.keys(sourceData).map(key =>
                      (<tr>
                        <td>
                          <img
                            key={[0]}
                            alt="Not Available"
                            style={{ width: 305 }}
                            src={(sourceData[key].urlToImage)}
                          />
                        </td>
                        <td key={[1]}>{(sourceData[key].author)}</td>
                        <td key={[2]}>{(sourceData[key].title)}</td>
                        <td key={[3]}>{(sourceData[key].description)}</td>
                        <td key={[4]}>
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={(sourceData[key].url)}
                          >
                          Go To Article
                        </a>
                        </td>
                      </tr>),
                    )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Section2.propTypes = {
  data: PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]).isRequired,
};
