import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login'; // Import Login instead of App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login /> {/* Render Login here */}
  </React.StrictMode>
);
