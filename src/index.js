import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const [first, second, third] = ["Lucas", "Alex", "Anna"];
const [, , third] = ["Lucas", "Alex", "Anna"];

root.render(
  <React.StrictMode>
    <App name={third} />
  </React.StrictMode>
);