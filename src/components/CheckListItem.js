import React from "react"

import CheckBox from "./CheckBox"
import CallOut from "./CallOut"
import CallOutIcon from "./CallOutIcon"

const CheckListItem = ({scenario, step, config}) => {

    switch (step.type) {
        case 'assessment':
            // replace this:
            const inlines = (
                config.showOnlyIcon === true && 
                <CallOutIcon
                    scenario={scenario}
                    step={step}
                    config={config}
                /> || config.showOnlyIcon === false && 
                <CallOut
                    scenario={scenario}
                    step={step}
                    config={config}
                />
            )
            // with both CallOutIcon and CallOutText
            // make CallOutText conditional based on config.dispCalloutText
            // something like::
            // const inlines = (
            //     <>
            //         <CallOutIcon scenario={scenario} step={step} config={config} />
            //         { config.dispCallOutText &&
            //             <CallOutText scenario={scenario} step={step} config={config} />
            //         }
            //     </>
            // )
            // or, if you'd rather have CalloutText appear *below* the checkbox line
            // do a
            // <CheckBox props>
            //     {config.dispCalloutText && <CallOutText props> }
            // </Checkbox>
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
            // perhaps this should just be the 'default'
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