import React, { Component } from 'react';
import shoppingCart from '../assets/shoppingCart.png';
import PropTypes from 'prop-types';
import '../styles/main.scss';

class ShoppingCart extends Component {
  render() {
    const { count } = this.props.count;
    return (
      <section>
        <img className="cart-img" src={shoppingCart} alt="Shopping Cart" />
        <p className="product-count">{count}</p>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  count: PropTypes.number,
};

export default ShoppingCart;
