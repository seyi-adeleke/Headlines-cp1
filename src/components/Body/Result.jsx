import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
import TextTruncate from 'react-text-truncate';

>>>>>>> staging
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
<<<<<<< HEAD
  render() {
    return (
      <div className="container">
        <h3 className="page-header text-center capitalize">
           Headlines from {this.props.data.list.source.replace(/-/g, ' ')}
=======

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
>>>>>>> staging
        </h3>
        <div className="container-fluid">
          <div className="row flex-row">
            {
<<<<<<< HEAD
          Object.keys(this.props.data.list.articles).map(key => (
            <div className="col-lg-4 col-xs-12">
              <div className="thumbnail">
                <img
                  style={{ width: 405 }}
                  src={(this.props.data.list.articles[key].urlToImage)}
=======
          Object.keys(articlesList.list.articles).map(key => (
            <div className="col-lg-4 col-xs-12"
                key={articlesList.list.articles[key].title}>
              <div className="thumbnail">
                <img
                  className="image-thumbnail"
                  src={(articlesList.list.articles[key].urlToImage)}
>>>>>>> staging
                  alt="not available"
                />
                <div className="caption">
                  <h4 className="flex-text text-primary">
<<<<<<< HEAD
                    <span className="title">{(this.props.data.list.articles[key].title)}</span>
                  </h4>
                  <p className="flex-text text-justify">
                    {(this.props.data.list.articles[key].description)}
                  </p>
=======
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
>>>>>>> staging
                </div>
                <div className="flex-row row">
                  <div className="col-xs-12">
                    <div className="social">
                      <TwitterShareButton
<<<<<<< HEAD
                        style={{ float: 'left' }}
                        url={(this.props.data.list.articles[key].url)}
=======
                        style={{ float: 'left', marginLeft: '35%' }}
                        url={(articlesList.list.articles[key].url)}
>>>>>>> staging
                        title="I found this interesting"
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      <FacebookShareButton
                        style={{ float: 'left' }}
<<<<<<< HEAD
                        url={(this.props.data.list.articles[key].url)}
=======
                        url={(articlesList.list.articles[key].url)}
>>>>>>> staging
                        title="I found this interesting"
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <GooglePlusShareButton
                        style={{ float: 'left' }}

<<<<<<< HEAD
                        url={(this.props.data.list.articles[key].url)}
=======
                        url={(articlesList.list.articles[key].url)}
>>>>>>> staging
                        title="I found this interesting"
                      >
                        <GoogleIcon size={32} round className="social" />
                      </GooglePlusShareButton>
                    </div>
                    <br />
                    <a
                      className="btn btn-primary"
<<<<<<< HEAD
                      href={(this.props.data.list.articles[key].url)}
=======
                      target="_blank"
                      href={(articlesList.list.articles[key].url)}
>>>>>>> staging
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
<<<<<<< HEAD
=======
  articles: PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.object,
  ]).isRequired,
>>>>>>> staging
  data: PropTypes.oneOfType([
    React.PropTypes.func,
    React.PropTypes.object,
  ]).isRequired,
};
<<<<<<< HEAD
=======
Result.defaultProps = {
  articles: {},
  data: {},
};
>>>>>>> staging
