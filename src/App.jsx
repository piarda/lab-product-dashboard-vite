import React, { useState } from 'react';
import ProductList from './components/ProductList';  // Imports ProductList component
import { Container, Button, Typography } from '@mui/material';   // Imports MUI components for styling


// Initial product data array
const App = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 899.99, inStock: true },
    { id: 2, name: 'Phone', price: 499.99, inStock: false },
    { id: 3, name: 'Headphones', price: 99.99, inStock: true },
    { id: 4, name: 'Video Game Console', price: 449.99, inStock: false },
    { id: 5, name: 'Smartwatch', price: 199.99, inStock: true },
  ];

  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // Filter products based on showInStockOnly state. If true, only in-stock products are shown
  const filteredProducts = showInStockOnly
    ? products.filter(product => product.inStock)
    : products;

  // Returns with Typography component, and button to toggle between "Show In-Stock Only" and "Show All Products"
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Product Dashboard
      </Typography>

      <Button
        variant="contained"
        color={showInStockOnly ? 'secondary' : 'primary'}
        onClick={() => setShowInStockOnly(!showInStockOnly)}
        sx={{ marginBottom: 3 }}
      >
        {showInStockOnly ? 'Show All Products' : 'Show In-Stock Only'}
      </Button>

      <ProductList products={filteredProducts} />
    </Container>
  );
};

export default App;
