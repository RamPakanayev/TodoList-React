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
const date = new Date(); //(2022,5,3)
const year = date.getFullYear();

// ReactDOM.render(
//   <div>
//     <p>Created by {`${fName} ${lName}`} </p>
//     <p>Your lucky number is {3 + number}</p>
//   </div>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <div>
    <p className="heading" contentEditable="true" spellCheck="false">
      Created by {`${fName} ${lName}`}{" "}
    </p>
    <div>
      <img src="https://static.toiimg.com/thumb/52467119.cms?width=1200&height=900"></img>
      <img src="  https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg"></img>
      <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg"></img>
    </div>

    <p>copy right {year}</p>
  </div>,
  document.getElementById("root")
);
