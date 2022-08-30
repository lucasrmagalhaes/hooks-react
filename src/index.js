import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <ul>
          {data.map((user, i) => (
            <li key={i}>{user.login}</li>
          ))}
        </ul>

        <button onClick={() => setData([])}>Remove Data</button>
      </div>
    );
  }

  return <p>No Users</p>;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);