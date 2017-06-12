import React from 'react';
import PropTypes from 'prop-types';
import { ShareButtons, generateShareIcon } from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
} = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');
const FacebookIcon = generateShareIcon('facebook');
const GoogleIcon = generateShareIcon('google');

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
                      <th>Be Social, Share</th>
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
                            style={{ width: 205 }}
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
                        <td>
                          <TwitterShareButton
                            url={(sourceData[key].url)}
                            title="I found this interesting"
                            className=""
                          >
                            <TwitterIcon size={32} round />
                          </TwitterShareButton>
                          <FacebookShareButton
                            url={(sourceData[key].url)}
                            title="I found this interesting"
                            className=""
                          >
                            <FacebookIcon size={32} round />
                          </FacebookShareButton>
                          <GooglePlusShareButton
                            url={(sourceData[key].url)}
                            title="I found this interesting"
                            className=""
                          >
                            <GoogleIcon size={32} round />
                          </GooglePlusShareButton>
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
    React.PropTypes.obj,
    React.PropTypes.node,
  ]).isRequired,
};
