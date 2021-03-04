import React, { useContext } from "react";

import classnames from "classnames"

import { ScenarioContext } from "../contexts/ScenarioContext"

const CheckBox = (props) => {
  // need props param to exist in order to access props.children

  const { step, clickHandler, inlineChildren = [] } = props

  const { isChecked } = useContext(ScenarioContext)

  return (
    <>
      <label
        className={classnames({"text-danger": step.type === 'critical-criteria'})}
        onClick={() => clickHandler(step.id)}
      >
        <span
          className="checkbox-icon material-icons-outlined"
        >
          {isChecked(step.id) ? "check_box": "check_box_outline_blank"}
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
