import request from 'superagent';
import ActionServer from '../Actions/actionServer';

export default {
  /**
<<<<<<< HEAD
   * Makes an api call
   * @param {string} source
   * @param {string} sort
   * @return {object}
=======
   * @description Makes an api call
   * @param {string} source
   * @param {string} sort
>>>>>>> staging
   */
  get(source, sort) {
    const apiUrl = 'https://newsapi.org/v1/articles?source=';
    const key = process.env.NEWS_API_KEY;
    request.get(`${apiUrl}${source}&sortBy=${sort}&apiKey=${key}`)
      .set('Accept', 'application/json')
      .end((err, response) => {
        return ActionServer.receiveArticle(response.body);
      });
  },
};
