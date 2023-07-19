import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';

// App entry point para o React renderizar o AppRoutes no elemento com id root do index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);
