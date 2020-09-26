import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/main.scss';
import Product from './Product';

class Products extends Component {
  render() {
    const { category, product, handleAddCart } = this.props;
    return (
      <div className={category}>
        <h2>{category}</h2>
        <div className="products">
          {product.map((product, index) => {
            return (
              <Product
                key={index}
                name={product.name}
                price={product.price}
                handleAddCart={handleAddCart}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Products.prototype = {
  handleAddCart: PropTypes.func,
  category: PropTypes.string,
  product: PropTypes.array,
};

export default Products;
