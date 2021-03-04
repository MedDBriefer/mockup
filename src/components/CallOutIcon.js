import React, { useContext } from "react";

import { ScenarioContext } from "../contexts/ScenarioContext"

const CallOutIcon = ({ step }) => {

  const { isChecked } = useContext(ScenarioContext)

  return (
    isChecked(step.id)
    ?
      <span
        className="callout-icon material-icons-outlined"
        style={{color:'grey'}}
      >
        message
      </span>
    :
      <span
        className="callout-icon material-icons-outlined"
      >
        message
      </span>
  )
}
export default CallOutIcon;
