import React from "react";

const CallOut = ({ step, config }) => {

  return (config.isChecked(step.id))
          ?
            <span className="callout">{step.callout}</span>
          :
            <i className="callout-icon fa fa-comment" />;
}
export default CallOut;
