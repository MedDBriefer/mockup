import React, { useContext } from "react"

import { ScenarioContext } from "../contexts/ScenarioContext"
import { usePrefs } from "../contexts/PreferencesContext"

import CheckBox from "./CheckBox"
import CallOutText from "./CallOutText"
import CallOutIcon from "./CallOutIcon"
import InterventionButton from "./InterventionButton"
import InterventionForm from "./InterventionForm"

const CheckListItem = ({step}) => {
    const { dispAssessmentFindingsInline } = usePrefs()
    const {
        isChecked,
        toggleChecked,
        toggleAssessmentFinding,
        toggleDisplayInterventionForm
    } = useContext(ScenarioContext)

    switch (step.type) {
        case 'assessment':
            const inlines = (<CallOutIcon step={step} />)
            return (
                <CheckBox
                    step={step}
                    clickHandler={toggleAssessmentFinding}
                    inlineChildren={inlines}
                >
                    {dispAssessmentFindingsInline &&
                        <div>
                            {isChecked(step.id) &&
                                <CallOutText step={step} />
                            }
                        </div>
                    }
                </CheckBox>
            )
        case 'intervention':
            const clickHandler = (step.intervention === "say")
                ? toggleChecked
                : toggleDisplayInterventionForm

            // const ib = (<InterventionButton step={step} /> )

            return (
                <CheckBox
                    step={step}
                    clickHandler={clickHandler}
                    // inlineChildren={ib}
                >
                    <InterventionForm step={step} />
                </CheckBox>
            )
        default:
            // case 'required-action':
            // case 'critical-criteria':
            // case 'execution-error':
            return (
                <CheckBox
                    step={step}
                    clickHandler={toggleChecked}
                />
            )
        }

}


export default CheckListItem;