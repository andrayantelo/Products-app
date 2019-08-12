import React from 'react';
import './App.css';
import Product from './Product';
import productsData from "./vschoolProducts";


/*
 * given a list of products (as an array of objects, as seen in ProductsData.js)
 * render a <Product /> component (which you'll also need to create) for each
 * product in the list.
 * make sure you use the array's map method to create these components
 * and don't forget to pass a key prop to it to avoid the warning.
 */

function App() {
  const colors = ['#821a81', '#3cd480', '#0ee0e9', '#1635c6', '#82e191', '#a6b9af' ];
  const productComponents = productsData.map((product, index) => {

      return <Product key={product.id} color={colors[index]} product={product} /> 
      })
  return (
      <div>
          {productComponents}
      </div>
  );
}

export default App;
