import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = {
  message: "hi"
}

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return { 
        message: `HEY! I JUST SAD ${state.message}`
      };
    case "whisper":
      return {
        message: `excuse me, I just sai ${state.message}`
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
        <p>Message: {state.message}</p>

        <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
        <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);