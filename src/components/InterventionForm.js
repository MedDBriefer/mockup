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
                        {intv.label}
                    </label>
                </div>
            ))
        )
    }

    const getChecklistItems = () => {
        return (
            scenario.interventionForms[step.id].steps.map((cl) => (
                <div key={cl.id}>
                    <label>
                        <input type="checkbox" />
                        {cl.label}
                    </label>
                </div>
            ))
        )
    }

    const getCriticalCriteria = () => {
        return (
            scenario.interventionForms[step.id].criticalCriteria.map((cc) => (
                <div key={cc.id}>
                    <label className="text-danger">
                        <input type="checkbox" />
                        {cc.label}
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