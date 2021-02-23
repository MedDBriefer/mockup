import React from "react"

export default function PreferencesForm(props) {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="checkbox" name="disp-callouts-inline" />
                Display Assessment Findings within checklist
            </label>
            <br/>
            <label>
                <input type="checkbox" name="disp-forms-inline" />
                Display Intervention Forms within checklist
            </label>
            <br />
            <label>
                <input type="checkbox" name="hide-rater-info" />
                Initially Hide Rater Info
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}