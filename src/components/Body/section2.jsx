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

/**
 * @export Section2
 * @class Section2
 * @extends {React.Component}
 */
class Section2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }
  render() {
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary panel-table">
              <div className="panel-heading">
                <h3 className="panel-title text-center">
                  The Latest Headlines from {this.props.data.list.source.replace(/-/g, ' ')}
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
                      Object.keys(this.props.data.list.articles).map(key =>
                      (<tr>
                        <td>
                          <img
                            key={key.toString()}
                            alt="Not Available"
                            style={{ width: 205 }}
                            src={(this.props.data.list.articles[key].urlToImage)}
                          />
                        </td>
                        <td key={[1]}>{(this.props.data.list.articles[key].author)}</td>
                        <td key={[2]}><b>{(this.props.data.list.articles[key].title)}</b></td>
                        <td key={[3]}>{(this.props.data.list.articles[key].description)}</td>
                        <td key={[4]}>
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href={(this.props.data.list.articles[key].url)}
                          >
                          Go To Article
                        </a>
                        </td>
                        <td>
                          <TwitterShareButton
                            url={(this.props.data.list.articles[key].url)}
                            title="I found this interesting"
                            className=""
                          >
                            <TwitterIcon size={32} round />
                          </TwitterShareButton>
                          <FacebookShareButton
                            url={(this.props.data.list.articles[key].url)}
                            title="I found this interesting"
                            className=""
                          >
                            <FacebookIcon size={32} round />
                          </FacebookShareButton>
                          <GooglePlusShareButton
                            url={(this.props.data.list.articles[key].url)}
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
export default Section2;

Section2.propTypes = {
  data: PropTypes.oneOfType([
    React.PropTypes.obj,
  ]).isRequired,
};
