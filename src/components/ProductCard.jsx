import React from 'react';
import styles from '../styles/ProductCard.module.css';  // Import CSS Module for styling

const ProductCard = ({ product }) => {
  const cardClass = product.inStock            // If product is out of stock, cardClass applies different style 
    ? styles.card                              // Regular card style if it is in stock
    : `${styles.card} ${styles.outOfStock}`;   // Applies 'outOfStock' class if not in stock

  return (
    <div className={cardClass}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p className={product.inStock ? styles.inStock : styles.outOfStockText}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
