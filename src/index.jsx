import React from 'react';
import ReactDOM from 'react-dom/client';    // Imports ReactDOM for rendering the app
import App from './App';    // Imports the main App component

// Creates root element to render app into the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders App component inside the HTML root div
root.render(<App />);