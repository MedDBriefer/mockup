import React from "react";

import CallOut from "./CallOut";

import {Input, Label } from "reactstrap"
const CheckBox = ({ step, isChecked, toggleChecked , showCallouts, showCalloutIcon}) => {

  return (
      <Label className={step.type === 'critical-criteria' ? "text-danger" : "text-default"}>
        <Input
          type="checkbox"
          checked={isChecked(step.id)}
          onChange={() => toggleChecked(step.id)}
        />
        <b>{step.label}</b>

        {showCallouts && step.callout && !showCalloutIcon &&
        <CallOut
          text={step.callout}
          show={isChecked(step.id)}
        />
        }

        {!showCallouts && step.callout && showCalloutIcon &&
        <CallOut
          text={step.callout}
          //show={isChecked(step.id)}
        />
        }
      </Label>
  );
};

export default CheckBox;
