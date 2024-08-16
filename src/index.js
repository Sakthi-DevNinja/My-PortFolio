import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { ThemeProvider } from './context/ThemeContext';

import './styles/index.css';
import './styles/Responsive.css';
import './styles/global.css'; // Import global styles

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>

  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
