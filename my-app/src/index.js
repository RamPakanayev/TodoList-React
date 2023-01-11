import React from "react";
import ReactDOM from "react-dom";

let h1Str;
const date = new Date();
let currentTime = date.getHours();
const heading = {
  color: "red",
  fontSize: "50px",
  textAlign: "center",
};
console.log(currentTime);
if (currentTime >= 4) {
  h1Str = "Good morning";
} else if (currentTime >= 12) {
  h1Str = "Good afternoon";
  heading.color = "green";
} else {
  h1Str = "Good evening";
  heading.color = "blue";
}

ReactDOM.render(
  <h1 style={heading}>{h1Str}</h1>,
  document.getElementById("root")
);
