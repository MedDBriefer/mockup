import React from "react";
import ReactDOM from "react-dom";

import { scenarioBuilder } from "./scenario-builder";
import { scenario } from "../data/scenario";

// import App from "./App1";
import App1 from "./App1";
import App2 from "./App2";

let target = process.env.REACT_BUILD_TARGET;
console.log(target);

let App;
switch (target) {
  case "app2":
    App = App2;
    break;
  default:
    App = App1;
}

let builtScen = scenarioBuilder(scenario);
// console.log(builtScen);
ReactDOM.render(
  // <React.StrictMode>
  <App scenario={builtScen} />,
  // </React.StrictMode>
  document.getElementById("root")
);
