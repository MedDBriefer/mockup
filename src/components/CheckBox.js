import React from "react";

import CallOut from "./CallOut";

const CheckBox = ({ step }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {step.label}
        {step.callout && <CallOut text={step.callout} ste={"HIDDEN"} />}
      </label>
    </li>
  );
};

export default CheckBox;
