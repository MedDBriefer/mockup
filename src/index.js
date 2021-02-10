import React from "react";
import ReactDOM from "react-dom";

import App from "./App"

// reactstrap is using some deprecated stuff, which is causing React.StrictMode
// to output warnings which make the console difficult to read. Disabling for now
// <React.StrictMode>
//     <App scenario={builtScen} />
// </React.StrictMode>

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
