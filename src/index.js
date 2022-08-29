import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaStar } from 'react-icons/fa';

const root = ReactDOM.createRoot(document.getElementById('root'));

const createArray = (length) => [
  ...Array(length)
];

function Star({ selected = false }) {
  return <FaStar color={ selected ? "yellow" : "gray" } />;
}

function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => (
    <Star key={i} />
  ));
}

function App() {
  return <StarRating totalStars={10} />;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);