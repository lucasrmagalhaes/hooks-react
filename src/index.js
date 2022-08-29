import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [status, setStatus] = useState("Not Delivered");

  return (
    <div>
      <h1>The package is: {status}</h1>

      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);