
import React, { useContext } from "react"

import MDBModal from "./MDBModal"

import { ScenarioContext } from "../contexts/ScenarioContext"

export default function ScenarioInfo({show, dismiss}) {

    const { scenario } = useContext(ScenarioContext)


    return (
        <MDBModal
            name="Scenario Info"
            show={show}
            dismiss={dismiss}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <h3>Instructor Information</h3>
                        <p>{scenario.info.instructorInformation}</p>
                    </div>
                    <div className="col-6">
                        <h3>Patient Information</h3>
                        <ul>
                            <li><b>Moulage:</b> {scenario.info.patientInformation.moulage}</li>
                            <li><b>Position:</b> {scenario.info.patientInformation.position}</li>
                            <li><b>Actions:</b> {scenario.info.patientInformation.actions}</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Dispatch Information</h3>
                        <p>{scenario.info.dispatchInfo}</p>
                    </div>
                    <div className="col-6">
                        <h3>Scene Assessment</h3>
                        <p>{scenario.info.sceneAssessment}</p>
                    </div>
                </div>
            </div>
        </MDBModal>

    )
}