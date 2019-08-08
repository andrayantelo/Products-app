import React from 'react';
import './Product.scss';

function Product(props) {
    // I think you would do this with a state
    // TODO Use state hook so that we can continue to use a functional
    // component here
    const moveBubble = e => {
        e.preventDefault();
        props.style
    }
    
    return (
      <div style={props.style} className="main-container">
          <h2 className="product-name">{props.product.name}</h2>
          <p className="product-info">{props.product.price.toLocaleString("en-US", { style:"currency", currency:"USD"})} - {props.product.description}</p>
      </div>
    );
}

export default Product;
