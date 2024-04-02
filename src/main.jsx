import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/Error';
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render
const root = ReactDOM.createRoot(document.querySelector('.root'));
window['ROOT'] = root;
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
