import React from "react";

import CallOut from "./CallOut";

import {Input, Label } from "reactstrap"
const CheckBox = ({ step, stateGetter, stateToggler }) => {

  return (
      <Label className={step.type === 'critical-criteria' ? "text-danger" : "text-default"}>
        <Input
          type="checkbox"
          checked={stateGetter(step.id)}
          onChange={() => stateToggler(step.id)}
        />
        <b>{step.label}</b>
        {step.callout && <CallOut text={step.callout} show={stateGetter(step.id)} />}
      </Label>
  );
};

export default CheckBox;
