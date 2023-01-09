// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom";
const fName = "Ram";
const lName = "Pakanayev";
const number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`} </h1>
    <h2>Your lucky number is {3 + number}</h2>
  </div>,
  document.getElementById("root")
);
