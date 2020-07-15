import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./globalStyles.scss";
import "regenerator-runtime/runtime";
import "core-js/features/promise";
import "core-js/features/object/entries";
import "core-js/features/object/values";

if (process.env.NODE_ENV !== "production") {
  console.log("Turning on AXE");
  const axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root"));
