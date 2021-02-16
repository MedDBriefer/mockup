import React from "react";

import CallOut from "./CallOut";

import {Input, Label } from "reactstrap"

const CheckBox = ({ step, config}) => {

  return (
      <Label className={step.type === 'critical-criteria' ? "text-danger" : "text-default"}>
        <Input
          type="checkbox"
          checked={config.isChecked(step.id)}
          onChange={() => config.toggleChecked(step.id)}
        />
        <b>{step.label}</b>

        { !!step.callout &&
          <CallOut
            step={step}
            config={config}
          />
        }
      </Label>
  );
};

export default CheckBox;
