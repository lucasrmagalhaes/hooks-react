import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useFetch } from './useFetch';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App({ login }) {
  const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);
  
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}

root.render(
  <React.StrictMode>
    <App login="lucasrmagalhaes" />
  </React.StrictMode>
);