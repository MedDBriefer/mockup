import React from "react";

import CallOut from "./CallOut";

import {Input, Label } from "reactstrap"
// import classnames from "classnames"

const CheckBox = ({ step, config}) => {

  // pseudo-code for new implementation
  // const NewCheckbox = (
  //   <span>
  //     <span className="material-icons">
  //       {isChecked(step.id) ? "check_box": "check_box_outline_blank"}
  //     </span>
  //     <b>{step.label}</b>
  //   </span>
  // )

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
