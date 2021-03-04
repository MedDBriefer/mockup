import React, { useContext } from "react";

import classnames from "classnames";

import { ScenarioContext } from "../contexts/ScenarioContext"


const CallOutText = ({ step }) => {

  const {isCurrentAssessmentFinding} = useContext(ScenarioContext)

  return  (
    <span className={classnames("callout", {currentCallOut: isCurrentAssessmentFinding(step.id)})}>
      {step.callout}
    </span>
  )

}

export default CallOutText;