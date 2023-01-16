import React from "react";
import * as calc from "./calculator";

function calcList() {
  let a = 4;
  let b = 5;
  const customStyle = {
    color: "",
    fontSize: "25px",
  };
  return (
    <ul style={customStyle}>
      <li>
        {a} + {b} = {calc.add(a, b)}
      </li>
      <li>
        {a} - {b} = {calc.sub(a, b)}
      </li>
      <li>
        {a} * {b} = {calc.multiply(a, b)}
      </li>
      <li>
        {a} / {b} = {calc.devide(a, b)}
      </li>
    </ul>
  );
}

export default calcList;
