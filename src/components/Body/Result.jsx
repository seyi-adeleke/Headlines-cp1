import React from 'react';
import PropTypes from 'prop-types';
import TextTruncate from 'react-text-truncate';

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
 * @export Result
 * @class Result
 * @extends {React.Component}
 */
class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.setState({
      data: this.props.data,
    });
  }

  render() {
    const articlesList = this.props.articles;
    if (articlesList.list === undefined) {
      return (
        <div className="text-center" style={{ marginTop: 50 }}>
         <div className="loader" />
      </div>);
    } return (
      <div className="container">
        <h3 className="page-header text-center capitalize">
        Headlines from {articlesList.list.source.replace(/-/g, ' ')}
        </h3>
        <div className="container-fluid">
          <div className="row flex-row">
            {
          Object.keys(articlesList.list.articles).map(key => (
            <div className="col-lg-4 col-xs-12"
                key={articlesList.list.articles[key].title}>
              <div className="thumbnail">
                <img
                  className="image-thumbnail"
                  src={(articlesList.list.articles[key].urlToImage)}
                  alt="not available"
                />
                <div className="caption">
                  <h4 className="flex-text text-primary">
                    <TextTruncate
                      className="title"
                      line={2}
                      truncateText="…"
                      text={(articlesList.list.articles[key].title)}

                    />
                  </h4>
                  <h5 className="flex-text text-justify">
                    <TextTruncate
                      line={4}
                      truncateText="…"
                      text={(articlesList.list.articles[key].description)}
                      />
                  </h5>
                </div>
                <div className="flex-row row">
                  <div className="col-xs-12">
                    <div className="social">
                      <TwitterShareButton
                        style={{ float: 'left', marginLeft: '35%' }}
                        url={(articlesList.list.articles[key].url)}
                        title="I found this interesting"
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      <FacebookShareButton
                        style={{ float: 'left' }}
                        url={(articlesList.list.articles[key].url)}
                        title="I found this interesting"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <GooglePlusShareButton
                        style={{ float: 'left' }}

                        url={(articlesList.list.articles[key].url)}
                        title="I found this interesting"
                      >
                        <GoogleIcon size={32} round className="social" />
                      </GooglePlusShareButton>
                    </div>
                    <br />
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      href={(articlesList.list.articles[key].url)}
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
export default Result;

Result.propTypes = {
  articles: PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.object,
  ]).isRequired,
};
Result.defaultProps = {
  articles: {},
};
