import React from "react";
import ReactDOM from "react-dom";

import App from "./App"

// reactstrap is using some deprecated stuff, which brings up warnings, making
// the console difficult to read.
//
// for instance the following pair of warnings, rear their ugly head whenever
// you display/hide a
// Modal:
//
//   Warning: Legacy context API has been detected within a strict - mode tree.

//       The old API will be supported in all 16.x releases, but applications
//       using it should migrate to the new version.

//       Please update the following components: Transition
//
//   Warning: findDOMNode is deprecated in StrictMode.
//       findDOMNode was passed an instance of Transition which is inside StrictMode.
//       Instead, add a ref directly to the element you want to reference.
//       Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
//
// this is simply the reactstrap project being slow to make use of a dep which
// fixes the problem. Everything works for the timebeing, and the warning only
// comes up in development builds (not production)
//
// if this is causing you difficulties, you can temporarily (IMPORTANT!
// remember to re-enable this) not wrapping <App />  with <React.StrictMode>
// again, I stress *temporarily* as StrictMode will help find other issues as
// well, and they'll mostly be **our** issues, not 3rd party stuff

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
