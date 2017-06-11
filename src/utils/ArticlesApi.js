import request from 'superagent';
import ActionServer from '../Actions/actions-server';

export default {
  get(source, sort) {
    request.get(`https://newsapi.org/v1/articles?source=${source}&sortBy=${sort}&apiKey=213327409d384371851777e7c7f78dfe`)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          return (err);
        }
        return ActionServer.receiveArticle(response.body);
      });
  },
};

