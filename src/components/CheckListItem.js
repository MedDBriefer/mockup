import React from "react"

import CheckBox from "./CheckBox"
import CallOutText from "./CallOutText"
import CallOutIcon from "./CallOutIcon"

const CheckListItem = ({scenario, step, config}) => {

    switch (step.type) {
        case 'assessment':
            // while I see you got this working, you may see the warnings reported by the "npm watch" script.
            // I fixed the curly braces, etc and wrapped the entire thing (as it might contain more than 1 componet) with a
            // react fragment, <> </>  (simply acts like a div to wrap multiple components) which I believe is the same as
            // <React.Fragment> </React.Fragment>
            //  (see the react docs, under Fragment - could be hidden under Advanced if you don't see elsewhere)
            //
            // const inlines = (
            //     <>
            //         { config.showOnlyIcon &&
            //             <CallOutIcon
            //                 scenario={scenario}
            //                 step={step}
            //                 config={config}
            //             />
            //         }
            //         { !config.showOnlyIcon &&
            //             <CallOut
            //                 scenario={scenario}
            //                 step={step}
            //                 config={config}
            //             />
            //         }
            //     </>
            // )

            // replace this:
            const inlines = (
                     <>
                            <CallOutIcon
                                scenario={scenario}
                                step={step}
                                config={config}
                            />
                         { config.displayCalloutText &&
                             <CallOutText
                                 scenario={scenario}
                                 step={step}
                                 config={config}
                             />
                         }
                     </>
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


            /*in CheckListItem, for assessment steps, 
            you'd pass toggleCallout as the clickHandler prop to CheckBox rather than toggleChecked, 
            so you get both behaviors instead of simply the checking of the checkbox*/

            return (
                <CheckBox
                    scenario={scenario}
                    step={step}
                    config={config}
                    clickHandler={config.toggleCallout}
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