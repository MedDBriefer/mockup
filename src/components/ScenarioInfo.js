
import React from "react"

export default function ScenarioInfo({scenario}) {
    const info = scenario.info;
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <h3>Instructor Information</h3>
                    <p>{info.instructorInformation}</p>
                </div>
                <div className="col-6">
                    <h3>Patient Information</h3>
                    <ul>
                        <li><b>Moulage:</b> {info.patientInformation.moulage}</li>
                        <li><b>Position:</b> {info.patientInformation.position}</li>
                        <li><b>Actions:</b> {info.patientInformation.actions}</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h3>Dispatch Information</h3>
                    <p>{info.dispatchInfo}</p>
                </div>
                <div className="col-6">
                    <h3>Scene Assessment</h3>
                    <p>{info.sceneAssessment}</p>
                </div>
            </div>
        </div>
)
}