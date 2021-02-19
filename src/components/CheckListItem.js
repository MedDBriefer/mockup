import React from "react"

import CheckBox from "./CheckBox"
import CallOut from "./CallOut"

const CheckListItem = ({scenario, step, config}) => {

    switch (step.type) {
        case 'assessment':
            // replace this with both CallOutIcon and CallOutText (or whatever you name them)
            const inlines = (<CallOut scenario={scenario} step={step} config={config} />)
            return (
                <CheckBox
                    scenario={scenario}
                    step={step}
                    config={config}
                    clickHandler={config.toggleChecked}
                    inlineChildren={inlines}
                />
            )
        case 'required-action':
        case 'critical-criteria':
        case 'execution-error':
            return (
                <CheckBox
                    scenario={scenario}
                    step={step}
                    clickHandler={config.toggleChecked}
                    config={config}
                />
            )
        // case 'intervention':
            // const inlines = (
            //     <InterventionButton
            //         scenario={scenario}
            //         step={step}
            //         config={config}
            //     />
            // )
            //
            // pass some component which simply wraps an InterventionForm with a div and determines
            // whether to display itself based by setting .hidden if getDispForm(step.id) or something like that.
            // return (
            //     <CheckBox
            //         scenario={scenario}
            //         step={step}
            //         config={config}
            //         clickHandler={config.toggleForm}
            //         inlineChildren={inlines}
            //     >
            //         <WrappedInterventionForm
            //             scenario={scenario}
            //             step={step}
            //             config={config}
            //         />
            //     </CheckBox>
            // )
        default:
            return <p>{JSON.stringify(step, null, 4)}</p>
        }

}



export default CheckListItem;