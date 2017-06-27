import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]).isRequired,
};
export default Layout;
