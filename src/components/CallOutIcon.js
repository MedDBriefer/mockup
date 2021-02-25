import React from "react";

// import classnames from "classnames"

const CallOutIcon = ({ step, config }) => {


  return (config.isChecked(step.id))
          ?
          <span
              className="callout-icon material-icons-outlined" style={{color:'grey'}}
            >
              message
            </span>
          :
            <span
              className="callout-icon material-icons-outlined"
            >
              message
            </span>

}
export default CallOutIcon;
