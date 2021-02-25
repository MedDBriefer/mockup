import React from "react";
import classnames from "classnames"; 

const CallOut = ({ step, config }) => {

  return  (
    <span className={classnames("callout", {currentCallOut: config.getCurrentCallout() === step.id})}>
      {step.callout}
    </span>
  )
          
}
export default CallOut;

