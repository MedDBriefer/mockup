import React from "react";

import CallOut from "./CallOut";

const CheckBox = ({ step, stateGetter, stateToggler }) => {
  let isChecked = stateGetter(step.id)
  return (
      <label className={step.type === 'critical-criteria' ? "text-danger" : "text-default"}>
        <input type="checkbox" checked={isChecked} onChange={() => stateToggler(step.id)} />
        {step.label}
        {step.callout && <CallOut text={step.callout} ste={"HIDDEN"} />}
      </label>
  );
};

export default CheckBox;
