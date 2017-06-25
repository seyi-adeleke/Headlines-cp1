import React from 'react';

const NotFound = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 text-muted text-center">
        <h1>Well done. You Broke it.</h1>
        <h2>This page doesn't exist or some other horrible error has occured.</h2>
        <h2>Here's Shaq and a cat. <a href="/">Go Back</a></h2>
        <iframe src="https://giphy.com/embed/nNxT5qXR02FOM" width="480" height="399" allowFullScreen title="404" />
      </div>
    </div>
  </div>
);
export default NotFound;

