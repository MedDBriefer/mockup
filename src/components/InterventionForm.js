import React, { useContext, useState, useEffect } from "react"

import { ScenarioContext } from "../contexts/ScenarioContext"

const InterventionForm = ({step}) => {

    const { scenario, shouldDisplayInterventionForm, toggleChecked } = useContext(ScenarioContext)

    const [interventions, setInterventions] = useState([])
    const [steps, setSteps ] = useState([])
    const [criticalCriteria, setCriticalCriteria] = useState([])

    useEffect(
        () => {
            const formData = scenario.interventionForms[step.id]
            setInterventions(formData.interventions)
            setSteps(formData.steps)
            setCriticalCriteria(formData.criticalCriteria)
        }, [scenario.interventionForms, step.id]
    )

    if (!shouldDisplayInterventionForm(step.id)) {
        return (
            <div></div>
        )
    } else {

        const ivs = (
            interventions.map((intv) => (
                <div key={intv.id}>
                    <label>
                        <input type="checkbox" />
                        {intv.label}
                    </label>
                </div>
            ))
        )
        const checklist = (
            steps.map((cl) => (
                <div key={cl.id}>
                    <label>
                        <input type="checkbox" />
                        {cl.label}
                    </label>
                </div>
            ))
        )
        const crits = (
            criticalCriteria.map((cc) => (
                <div key={cc.id}>
                    <label className="text-danger">
                        <input type="checkbox" />
                        {cc.label}
                    </label>
                </div>
            ))
        )
        return (
            <div className="intervention-form">
                <form>
                    <h5>Relevant Interventions</h5>
                    {ivs}
                    <h5>Checklist</h5>
                    {checklist}
                    <h5>Critical Criteria</h5>
                    {crits}
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