import React from "react";

import CallOut from "./CallOut";

const CheckBox = ({ step }) => {
  // let dynamicAttrs = {
  //   color:
  // }
  return (
    // <li  >
      <label className={step.type === 'critical-criteria' ? "text-danger" : "text-default"}>
        <input type="checkbox" />
        {step.label}
        {step.callout && <CallOut text={step.callout} ste={"HIDDEN"} />}
      </label>
    // </li>
  );
};

export default CheckBox;
