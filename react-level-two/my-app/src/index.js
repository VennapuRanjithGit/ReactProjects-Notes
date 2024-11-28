//this index.js file is like a starting point of the react app execution. the main component will first get imported here and then gets rendered on UI/browser
import React from 'react'//1. these libs are from 'react' packages which is available inside node_modules
import ReactDOM from 'react-dom' //2. same
import App from './App' //3. Our App comp is in same folder wr index.js is there so dot indicates current folder ./App is in current folder App.js file

ReactDOM.render(<App/>, document.getElementById('root')) //4. above app comp will get rendered in this root 


























//===================
/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
