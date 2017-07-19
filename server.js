const path = require('path');
const express = require('express');

module.exports = {
  app() {
    const app = express();
    const indexPath = path.join(__dirname, '/public/index.html');
    app.use(express.static('public'));
    app.get('*', (req, res) => {
      res.sendFile(indexPath);
    });
    return app;
  },
};
