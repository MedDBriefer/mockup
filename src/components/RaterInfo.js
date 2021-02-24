
import React,
{ useState }
from "react"
import CallOutText from "./CallOutText"

import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
 } from "reactstrap"

import classnames from "classnames"

import RevealTable from "./RevealTable"

export default function RaterInfo({scenario, defaultTab = "callouts", config}) {

    const [activeTab, setActiveTab] = useState(defaultTab)
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab)
    }

    // conditionally compute callouts array only if they are supposed to be
    // displayed within this pane
    let callouts = []
    if (config.displayCalloutText) {
        // here you could be passing actual Callout components, which
        // initialized with the step and the config, would know when to
        // display and/or highlight itself, although we still need
        // to add some vars to the app state and some getters/setters for
        // those vars to get it to work.
        // if we want this component to make the labels clickable in order
        // to toggle the display of the callout, you could pass in a component
        // similar to calloutButton/calloutIcon (whatever you want to call it)
        // except it merely displays the callout label and calls the appropriate
        // setter(s) which would trigger the value's component to be displayed/highlighted
        callouts = scenario.assessmentSteps.map(step => {
            return {
                id: step.id,
                label: step.calloutLabel,
                value: 
                    <CallOutText
                        scenario={scenario}
                        step={step}
                        config={config}
                    />
            }
        })
    }

    const initVitals = Object.entries(scenario.initialVitalSigns).map(iv => {
        return {label: iv[0], value: iv[1]}
    })

    const sample = Object.entries(scenario.SAMPLE).map(rec => {
        return {label: rec[0], value: rec[1]}
    })

    // need to put some smarts in here or elsewhere
    const reassessVitals = Object.entries(scenario.reassessmentVitals).map(rec => {
        const [key, obj] = rec;
        return {label: key, value: obj.goodVitals}
    })

    return (
        <>
            <Nav tabs>
                {config.displayCalloutText &&
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === 'callouts' })}
                            onClick={() => toggle('callouts')}
                        >
                            Assessment Findings
                        </NavLink>
                    </NavItem>
                }
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'initialVitals' })}
                        onClick={() => toggle('initialVitals')}
                    >
                        Initial Vitals
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'sample' })}
                        onClick={() => toggle('sample')}
                    >
                        SAMPLE
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'reassessmentVitals' })}
                        onClick={() => toggle('reassessmentVitals')}
                    >
                        Reassessment Vitals
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                {config.displayCalloutText &&
                    <TabPane tabId="callouts">
                        <RevealTable
                            heading="Assessment Findings"
                            rows={callouts}
                            config={config}
                        />
                    </TabPane>
                }
                <TabPane tabId="initialVitals">
                    <RevealTable
                        heading="Initial Vitals"
                        rows={initVitals}
                        config={config}
                    />
                </TabPane>
                <TabPane tabId="sample">
                    <RevealTable
                        heading="SAMPLE"
                        rows={sample}
                        config={config}
                    />
                </TabPane>
                <TabPane tabId="reassessmentVitals">
                    <RevealTable
                        heading="Reassessment Vitals"
                        rows={reassessVitals}
                        config={config}
                    />
                </TabPane>
            </TabContent>
        </>
    );
}