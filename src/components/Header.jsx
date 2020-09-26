import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import PropTypes from 'prop-types';
import '../styles/main.scss';

class Header extends Component {
  render() {
    const { count } = this.props;
    return (
      <header className="header">
        <h1>Store</h1>
        <ShoppingCart count={count} />
      </header>
    );
  }
}

Header.propTypes = {
  count: PropTypes.number,
};

export default Header;
