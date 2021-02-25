import React from "react"

const InterventionForm = ({scenario, step, config}) => {

    const formData = scenario.interventionForms[step.id]
    if (!config.getDisplayForm(step.id)) {
        return (
            <div></div>
        )
    } else {

        const interventions = (
            formData.interventions.map((intv) => (
                <div key={intv.id}>
                    <label>
                        <input type="checkbox" />
                        {intv.label}
                    </label>
                </div>
            ))
        )
        const checklist = (
            formData.steps.map((cl) => (
                <div key={cl.id}>
                    <label>
                        <input type="checkbox" />
                        {cl.label}
                    </label>
                </div>
            ))
        )
        const crits = (
            formData.criticalCriteria.map((cc) => (
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
                    {interventions}
                    <h5>Checklist</h5>
                    {checklist}
                    <h5>Critical Criteria</h5>
                    {crits}
                    <button
                        type="button"
                        className="btn btn-primary btn-small"
                        onClick={() => config.toggleChecked(step.id)}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default InterventionForm