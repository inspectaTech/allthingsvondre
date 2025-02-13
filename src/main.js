// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.js'
import Test from './Test.js';
// import ErrorBoundary from './components/Error';
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render
// const root = ReactDOM.createRoot(document.querySelector('.root'));
// window['ROOT'] = root;

ReactDOM.render(
  <>
  {/* <React.StrictMode> */}
    {/* <ErrorBoundary> */}
      <Test />
      {/* <App /> */}
      {/* <div>what is this</div> */}
    {/* </ErrorBoundary> */}
  {/* </React.StrictMode> */}
  </>,
  document.getElementById('root')
)
