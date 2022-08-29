import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input 
        type="checkbox" 
        value={checked}
        onChange={() => setChecked((checked) => !checked)} 
      />

      <p>{ checked ? "checked" : "not checked" }</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);