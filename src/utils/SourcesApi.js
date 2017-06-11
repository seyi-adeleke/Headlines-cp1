import request from 'superagent';
/*
export default {
  get() {
    request.get('https://newsapi.org/v1/sources?language=en')
      .end((err, response) => {
        if (err) {
          return (err);
        }
        return (response.body);
      });
  },
};
*/

const get = () => {
  request.get('https://newsapi.org/v1/sources?language=en')
    .end((error, response) => {
      if (error) {
        return error;
      }
      return (response.body);
    });
};

export default get;
