import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';


const Layout = props => (
  <div>
    <Header />
    <br />
    <br />
    <br />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]).isRequired,
};
export default Layout;
