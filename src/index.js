import React from "react";
import ReactDOM from "react-dom";

import { scenarioBuilder } from "./scenario-builder";
import { scenario } from "./data/scenario";


import App from "./App"

// hack to load in the scenario data. this would be coming from some database
// after you logged in and clicked on your assignment, but this works for now
// scenarioBuilder() reads in scen file which in turn loads in the trauma file and
// *weaves* them together.  this would be done beforehand by some scenario editing
// too, but it's instantaneous, so I'm just doing it here for now

let builtScen = scenarioBuilder(scenario);



// reactstrap is using some deprecated stuff, which is causing React.StrictMode
// to output warnings which make the console difficult to read


    // <React.StrictMode>
    //     <App scenario={builtScen} />
    //   </React.StrictMode>

// branding = { target }
ReactDOM.render(
  <App  scenario={builtScen} />,
  document.getElementById("root")
);
