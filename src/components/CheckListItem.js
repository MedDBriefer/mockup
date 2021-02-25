import React from "react"

import CheckBox from "./CheckBox"
import CallOutText from "./CallOutText"
import CallOutIcon from "./CallOutIcon"
import InterventionButton from "./InterventionButton"
import InterventionForm from "./InterventionForm"

const CheckListItem = ({scenario, step, config}) => {

    switch (step.type) {
        case 'assessment':
            const inlines = (
                <CallOutIcon
                    scenario={scenario}
                    step={step}
                    config={config}
                />
            )
            return (
                <CheckBox
                    scenario={scenario}
                    step={step}
                    config={config}
                    clickHandler={config.toggleCallout}
                    inlineChildren={inlines}
                >
                    {config.displayCalloutText &&
                        <div>
                            {config.isChecked(step.id) &&
                                <CallOutText
                                    scenario={scenario}
                                    step={step}
                                    config={config}
                                />
                            }
                        </div>
                    }
                </CheckBox>
            )
        case 'required-action':
        case 'critical-criteria':
        case 'execution-error':
            // perhaps this should just be the 'default'
            return (
                <CheckBox
                    scenario={scenario}
                    step={step}
                    clickHandler={config.toggleChecked}
                    config={config}
                />
            )
        case 'intervention':
            const clickHandler = (step.intervention === "say")
                ? config.toggleChecked
                : config.toggleDisplayForm

            const ib = (
                <InterventionButton
                    scenario={scenario}
                    step={step}
                    config={config}
                />
            )

            return (
                <CheckBox
                    scenario={scenario}
                    step={step}
                    config={config}
                    clickHandler={clickHandler}
                    inlineChildren={ib}
                >
                    {config.displayInterventionForms &&
                        <InterventionForm
                            scenario={scenario}
                            step={step}
                            config={config}
                        />
                    }
                </CheckBox>
            )
        default:
            return <p>{JSON.stringify(step, null, 4)}</p>
        }

}


export default CheckListItem;