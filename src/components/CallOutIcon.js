import React from "react";

const CallOutIcon = ({ step, config }) => {

  return (config.isChecked(step.id))
          ?
            <span className="callout"></span>
          :
            // somehow show something in the rater info tab? the text 
            <span
              className="callout-icon material-icons-outlined"
            >
              message
            </span>
}
export default CallOutIcon;
