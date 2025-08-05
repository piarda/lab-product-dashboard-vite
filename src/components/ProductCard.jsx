import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  const cardClass = product.inStock            // If product is out of stock, cardClass applies different style 
    ? styles.card 
    : `${styles.card} ${styles.outOfStock}`;

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
