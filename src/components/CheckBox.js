import React from "react";

import CallOut from "./CallOut";

import {Input, Label } from "reactstrap"
import classnames from "classnames"


const CheckBox = ({ step, config}) => {

// const CheckBox = ({ step, inlineChildren=[], blockChildren=[], config }) => {

  // pseudo-code for new implementation (add optional inline & block children props???)
  // return (
  //   <label>
  //     <span className="material-icons">
  //       {isChecked(step.id) ? "check_box": "check_box_outline_blank"}
  //     </span>
  //     <b>{step.label}</b>
  //     {...inlineChildren}  // things like callout-icon, intervention-form-button // things you want on same line
  //   </label>
  //   { !!blockChildren
  //     <div>
  //      {...blockChildren}  //things like intervention form (children you want to
  //     </div>               // like like they're on the next line - after a <br> or sometthing )
  //   }
  // )

  return (
    <label className={classnames({"text-danger": step.type === 'critical-criteria'})}
      onClick={() => config.toggleChecked(step.id)}>
      <span className="checkbox-icon material-icons-outlined">
        {config.isChecked(step.id) ? "check_box": "check_box_outline_blank"}
      </span>
      <b>{step.label}</b>
      { !!step.callout &&
        <CallOut
          step={step}
          config={config}
        />
      }
    </label>
  )

  // return (
  //     <Label className={step.type === 'critical-criteria' ? "text-danger" : "text-default"}>
  //       <Input
  //         type="checkbox"
  //         checked={config.isChecked(step.id)}
  //         onChange={() => config.toggleChecked(step.id)}
  //       />
  //       <b>{step.label}</b>
  //       { !!step.callout &&
  //         <CallOut
  //           step={step}
  //           config={config}
  //         />
  //       }
  //     </Label>
  // );

}

export default CheckBox;
