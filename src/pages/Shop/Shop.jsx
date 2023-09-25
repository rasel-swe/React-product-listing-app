import React from 'react';
import { Products } from '../../Products';
import Product from './Product';
import './Shop.css'

const Shop = () => {
  return (
    <div className='shop'>
      <div className="shop-title">
        <h1>Product List</h1>
      </div>
      <div className="products">
        {Products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
   
      </div>
  
  );
}

export default Shop;
