import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import app from './components/app'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login /> {/* Render Login here */}
  </React.StrictMode>
);
