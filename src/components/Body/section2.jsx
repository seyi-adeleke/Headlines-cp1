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
        <h3 className="page-header text-center capitalize">
           Headlines from {this.props.data.list.source.replace(/-/g, ' ')}
        </h3>
        <div className="container-fluid">
          <div className="row flex-row">
            {
          Object.keys(this.props.data.list.articles).map(key => (
            <div className="col-lg-4 col-xs-12">
              <div className="thumbnail">
                <img
                  style={{ width: 405 }}
                  src={(this.props.data.list.articles[key].urlToImage)}
                  alt="not available"
                />
                <div className="caption">
                  <h4 className="flex-text text-primary">
                    <span className="title">{(this.props.data.list.articles[key].title)}</span>
                  </h4>
                  <p className="flex-text text-justify">
                    {(this.props.data.list.articles[key].description)}
                  </p>
                </div>
                <div className="flex-row row">
                  <div className="col-xs-12">
                    <div className="social">
                      <TwitterShareButton
                        style={{ float: 'left' }}
                        url={(this.props.data.list.articles[key].url)}
                        title="I found this interesting"
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      <FacebookShareButton
                        style={{ float: 'left' }}
                        url={(this.props.data.list.articles[key].url)}
                        title="I found this interesting"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <GooglePlusShareButton
                        style={{ float: 'left' }}

                        url={(this.props.data.list.articles[key].url)}
                        title="I found this interesting"
                      >
                        <GoogleIcon size={32} round className="social" />
                      </GooglePlusShareButton>
                    </div>
                    <br />
                    <a
                      className="btn btn-primary"
                      href={(this.props.data.list.articles[key].url)}
                    >
                      Go To Article
                        </a>
                  </div>
                </div>

              </div>
            </div>
            ),
          )}
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
