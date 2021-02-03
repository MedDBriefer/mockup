
import React from "react"

export default function ScenarioInfo({scenario}) {

    return (
        <>
            <h3>Dispatch Information</h3>
            <p>{scenario.info.dispatchInfo}</p>
            <h3>Scene Assessment</h3>
            <p>{scenario.info.sceneAssessment}</p>
        </>
    )
}