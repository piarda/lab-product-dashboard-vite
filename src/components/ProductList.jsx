import React from 'react';
import ProductCard from './ProductCard';  // Imports ProductCard to display products

const ProductList = ({ products }) => {     // Checks if product list is empty and shows message if so
  if (products.length === 0) {
    return <p>No products available.</p>;   // Displays message if there are no products
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
