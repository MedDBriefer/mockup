import React, { useContext } from "react"

import { ScenarioContext } from "../contexts/ScenarioContext"

const InterventionForm = ({step}) => {

    const { scenario, shouldDisplayInterventionForm, toggleChecked } = useContext(ScenarioContext)

    const getInterventionsList = () => {
        return (
            scenario.interventionForms[step.id].interventions.map((intv) => (
                <div key={intv.id}>
                    <label>
                        <input type="checkbox" />
                        &nbsp; {intv.label}
                    </label>
                </div>
            ))
        )
    }


    if (!shouldDisplayInterventionForm(step.id)) {
        return (<div></div>)
    } else {
        return (
            <div className="intervention-form">
                <form>
                    { getInterventionsList() }
                    <button
                        type="button"
                        className="btn btn-primary btn-small"
                        onClick={() => toggleChecked(step.id)}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default InterventionForm