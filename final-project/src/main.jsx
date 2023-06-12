// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// index.js или main.jsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './State/Store/Store';
import App from './App';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
  </Provider>
);