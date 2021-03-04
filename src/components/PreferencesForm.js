import React from "react"

import { Button } from "reactstrap"

import { usePrefs } from "../contexts/PreferencesContext"

import MDBModal from "./MDBModal"

const PreferencesForm = ({show, dismiss}) => {

    const {
        dispLeafNodesInline,
        dispAssessmentFindingsInline,
        inhibitRaterOversharing,
        setPref
    } = usePrefs()

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name
        setPref(name, value)
    }

    return (
        <MDBModal
            title="User Preferences"
            show={show}
            dismiss={dismiss}
        >
            <div className="container">
                <div className="row">
                    <label>
                        <input
                            type="checkbox"
                            name="dispLeafNodesInline"
                            checked={dispLeafNodesInline}
                            onChange={handleInputChange}
                        />
                        &nbsp; Embed Checkboxes within Checklist Outline
                    </label>
                </div>
                <div className="row">
                    <label>
                        <input
                            type="checkbox"
                            name="dispAssessmentFindingsInline"
                            checked={dispAssessmentFindingsInline}
                            onChange={handleInputChange}
                        />
                        &nbsp; Embed Assessment Findings within Checklist
                    </label>
                </div>
                <div className="row">
                    <label>
                        <input
                            type="checkbox"
                            name="inhibitRaterOversharing"
                            checked={inhibitRaterOversharing}
                            onChange={handleInputChange}
                        />
                        &nbsp; Inhibit Rater Oversharing of Information
                    </label>
                </div>

                <Button
                    type="button"
                    className="btn btn-success"
                    onClick={dismiss}
                >
                    Dismiss
                </Button>
            </div>
        </MDBModal>
    )
}

export default PreferencesForm