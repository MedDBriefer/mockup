import React from "react";

// import CallOut from "./CallOut";

import classnames from "classnames"


const CheckBox = (props) => {
  // need props param to exist in order to access props.children
  const { scenario, step, clickHandler, inlineChildren = [], config } = props

  return (
    <>
      <label className={classnames({"text-danger": step.type === 'critical-criteria'})}
        onClick={() => clickHandler(step.id)}>
        <span className="checkbox-icon material-icons-outlined">
          {config.isChecked(step.id) ? "check_box": "check_box_outline_blank"}
        </span>
        <b>{step.label}</b>
        {inlineChildren}
      </label>
      { !!props.children &&
        props.children
      }
    </>
  )

}

export default CheckBox;
