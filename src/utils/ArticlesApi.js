import request from 'superagent';
import ActionServer from '../Actions/actionServer';

export default {
  /**
   * @description Makes an api call
   * @param {string} source
   * @param {string} sort
   * @return {object} response
   */
  get(source, sort) {
    request.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=213327409d384371851777e7c7f78dfe`)
      .set('Accept', 'application/json')
      .end((err, response) => {
        return ActionServer.receiveArticle(response.body);
      });
  },
};

