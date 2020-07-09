import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "regenerator-runtime/runtime";

if (process.env.NODE_ENV !== "production") {
  console.log("Turning on AXE");
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root"));
