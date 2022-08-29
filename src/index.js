import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [name, setName] = useState("Lucas");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${ admin ? "admin" : "not admin" }`);
  }, [admin]);

  return (
    <section>
      <p>Congratulations {name}!</p>

      <button onClick={() => setName("Luke")}>Change Winner</button>

      <p>{ admin ? "logged in" : "not logged in" }</p>

      <button
        onClick={() => setAdmin(true)}
      >
        Log In
      </button>
    </section>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);