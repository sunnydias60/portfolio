// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App'
// import './index.css'

// ReactDOM.render(<App/>, document.querySelector("#root"))

import React from "react";
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import App from './App';
import './index.css';

// Correct usage of createRoot and render
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);