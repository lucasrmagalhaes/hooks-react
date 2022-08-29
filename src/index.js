import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaStar } from 'react-icons/fa';

const root = ReactDOM.createRoot(document.getElementById('root'));

const createArray = (length) => [
  ...Array(length)
];

function Star({ selected = false, onSelect }) {
  return (
    <FaStar 
      color={ selected ? "yellow" : "gray" }
      onClick={onSelect} 
    />
  );
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i} 
          selected={selectedStars > i}
          onSelect={() => { setSelectedStars(i + 1) }} 
        />
      ))}

      <p>{selectedStars} of {totalStars}</p>
    </>
  );
}

function App() {
  return <StarRating totalStars={10} />;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);