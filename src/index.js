import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/globals.css';

import Homepage from './homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
