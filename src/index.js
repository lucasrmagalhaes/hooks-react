import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [name, setName] = useState("Lucas");

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });

  return (
    <section>
      <p>Congratulations {name}!</p>

      <button onClick={() => setName("Luke")}>Change Winner</button>
    </section>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);