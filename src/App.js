import React, { Component } from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Products from './components/Products';

const url = 'http://localhost:3000/products';

class App extends Component {
  state = {
    count: 0,
    products: [],
  };

  async componentDidMount() {
    const result = await fetch(url);
    const data = await result.json();
    this.setState({
      products: data,
    });
  }

  handleAddCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const category = [
      ...new Set(this.state.products.map((product) => product.category)),
    ];
    return (
      <main className="app">
        <Header count={this.state.count} />
        <div className="body">
          {category.map((category, index) => (
            <Products
              key={index}
              category={category}
              product={this.state.products.filter(
                (product) => product.category === category
              )}
              handleAddCart={this.handleAddCart}
            />
          ))}
        </div>
      </main>
    );
  }
}

App.propTypes = {
  count: PropTypes.number,
  products: PropTypes.array,
  category: PropTypes.array,
  handleAddCart: PropTypes.func,
};

export default App;
