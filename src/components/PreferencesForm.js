import React, {
    useContext
} from "react"

import {
    Button,
} from "reactstrap"

import {PreferencesContext} from "./PreferencesContext"

const PreferencesForm = (props) => {

    const {getPref, setPref} = useContext(PreferencesContext)

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name
        setPref(name, value)

    }

    return (
        <div className="container">
            <div className="row">
                <label>
                    <input
                        type="checkbox"
                        name="dispCheckBoxesInline"
                        checked={getPref("dispCheckBoxesInline")}
                        onChange={handleInputChange}
                    />
                    &nbsp; Embed Checkboxes within Checklist Outline
                </label>
            </div>
            <div className="row">
                <label>
                    <input
                        type="checkbox"
                        name="dispCallOutsInline"
                        checked={getPref("dispCallOutsInline")}
                        onChange={handleInputChange}
                    />
                    &nbsp; Embed Assessment Findings within checklist
                </label>
            </div>
            <div className="row">
                <label>
                    <input
                        type="checkbox"
                        name="dispFormsInline"
                        checked={getPref("dispFormsInline")}
                        onChange={handleInputChange}
                    />
                    &nbsp; Embed Intervention Forms within checklist
                </label>
            </div>
            <div className="row">
                <label>
                    <input
                        type="checkbox"
                        name="hideRaterInfo"
                        checked={getPref("hideRaterInfo")}
                        onChange={handleInputChange}
                    />
                    &nbsp; Inhibit Oversharing of Information
                </label>
            </div>

            <Button
                type="button"
                className="btn btn-success"
                onClick={() => props.hideModal()}
            >
                Dismiss
            </Button>
        </div>
    )
}

export default PreferencesForm