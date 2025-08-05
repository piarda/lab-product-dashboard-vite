import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (products.length === 0) {                                // Checks if the array is empty
    return <p>No products available.</p>;
  }

  return (
    <div>
      {products.map(product => (                              // Loops over each product
        <ProductCard key={product.id} product={product} />    // Renders ProductCard and passes product as a prop
      ))}
    </div>
  );
};

export default ProductList;
