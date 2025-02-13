import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/Error';
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render
const root = ReactDOM.createRoot(document.querySelector('.root'));
window['ROOT'] = root;


if(typeof window[`DOUBLE_FIX`] == "undefined") window[`DOUBLE_FIX`] = 0;
debugger

root.render(
  // <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  // </React.StrictMode>, 
)

// NOTE: React.StrictMode causes useEffect [] to run twice in development