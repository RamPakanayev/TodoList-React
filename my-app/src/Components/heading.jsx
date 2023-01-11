import React from "react";

function Heading() {
  let h1Str;
  const date = new Date();
  let currentTime = date.getHours();
  const customStyle = {
    color: "",
    fontSize: "50px",
    textAlign: "center",
  };
  if (currentTime >= 4) {
    h1Str = "Good morning";
    customStyle.color = "red";
  }
  if (currentTime >= 12) {
    h1Str = "Good afternoon";
    customStyle.color = "green";
  } else {
    h1Str = "Good evening";
    customStyle.color = "blue";
  }
  return <h1 style={customStyle}>{h1Str}</h1>;
}

export default Heading;
