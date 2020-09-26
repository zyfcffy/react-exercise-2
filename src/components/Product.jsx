import React, { Component } from 'react';
import image from '../assets/product_image_placeholder.png';
import PropTypes from 'prop-types';
import '../styles/main.scss';

class Product extends Component {
  render() {
    const { name, price, handleAddCart } = this.props;
    return (
      <section className="product">
        <h5 className="prodctName">{name}</h5>
        <img className="img" src={image} />
        <section className="productInfo">
          <p>{price}</p>
          <button className="productAdd" onClick={handleAddCart}>
            add to cart
          </button>
        </section>
      </section>
    );
  }
}

Product.prototype = {
  name: PropTypes.string,
  price: PropTypes.number,
  handleAddCart: PropTypes.func,
};

export default Product;
