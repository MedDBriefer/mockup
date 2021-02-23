import React, {
    useContext
} from "react"

import {
    Button,
    Label
} from "reactstrap"

import Panel from "./Panel"
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
        <Panel title="Preferences">
            <Label>
                <input
                    type="checkbox"
                    name="dispCheckBoxesInline"
                    checked={getPref("dispCheckBoxesInline")}
                    onChange={handleInputChange}
                />
                Display Checkboxes within Checklist Outline
            </Label>
            <br/>
            <Label>
                <input
                    type="checkbox"
                    name="dispCallOutsInline"
                    checked={getPref("dispCallOutsInline")}
                    onChange={handleInputChange}
                />
                Display Assessment Findings within checklist
            </Label>
            <br/>
            <Label>
                <input
                    type="checkbox"
                    name="dispFormsInline"
                    checked={getPref("dispFormsInline")}
                    onChange={handleInputChange}
                />
                Display Intervention Forms within checklist
            </Label>
            <br />
            <Label>
                <input
                    type="checkbox"
                    name="hideRaterInfo"
                    checked={getPref("hideRaterInfo")}
                    onChange={handleInputChange}
                />
                Prevent Evaluator Oversharing of Information
            </Label>
            <br />
            <Button
                type="button"
                className="btn btn-success"
                onClick={() => props.hideModal()}
            >
                Dismiss
            </Button>
        </Panel>
    )
}

export default PreferencesForm