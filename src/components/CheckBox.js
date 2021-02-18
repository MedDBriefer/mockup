import React from "react";

import CallOut from "./CallOut";

import {Input, Label } from "reactstrap"
// import classnames from "classnames"

const CheckBox = ({ step, isChecked, toggleChecked , showCallouts, showCalloutIcon}) => {

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
