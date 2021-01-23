import React from "react";
import ReactDOM from "react-dom";

import { scenarioBuilder } from "./scenario-builder";
import { scenario } from "./data/scenario";

// hack to allow us to create multiple mockups of app with CRA only having
// a single index.html.  simply set in the .env file REACT_APP_BUILD_TARGET=<app_name>
// and the value of 'target' (below) can be branched on to use different apps
// which make use of different sets of components (or variants of them)

import App1 from "./App1";
import App2 from "./App2";

let target = process.env.REACT_APP_BUILD_TARGET;

let App;
switch (target) {
  case "app2":
    App = App2;
    break;
  default:
    App = App1;
}

// hack to load in the scenario data. this would be coming from some database
// after you logged in and clicked on your assignment, but this works for now
// scenarioBuilder() reads in scen file which in turn loads in the trauma file and
// *weaves* them together.  this would be done beforehand by some scenario editing
// too, but it's instantaneous, so I'm just doing it here for now

let builtScen = scenarioBuilder(scenario);
// passes the scenario data to the app as props.  passing 'target' as branding
// (for the navbar) so we know which app variant we're working with
ReactDOM.render(
  <React.StrictMode>
    <App branding={target} scenario={builtScen} />
  </React.StrictMode>,
  document.getElementById("root")
);
