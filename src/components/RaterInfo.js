
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
        // here you'd be passing actual Callout/CalloutText (whatever you call it)
        // components as the value instead of merely step.callout
        callouts = scenario.assessmentSteps.map(step => {
            return {
                id: step.id,
                label: step.calloutLabel,
                value: [
                    <CallOutText
                        scenario={scenario}
                        step={step}
                        config={config}
                    />]
            }
        })
    }


    const sample = Object.entries(scenario.SAMPLE).map(rec => {
        return {label: rec[0], value: [rec[1]]}
    })


    const vitalsHeaders =
        (config.getVitalsRecomputed())
        ? ["Type", "Initial Value", "Current Value"]
        : ["Type", "Current Value"]

    const vitals = Object.entries(scenario.initialVitalSigns).map(iv => {
        const value =
            (config.getVitalsRecomputed())
            ? [ iv[1], config.getCurrentVital(iv[0]) ]
            : [ iv[1] ]

        return {
            label: iv[0],
            value: value
        }
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
                        className={classnames({ active: activeTab === 'vitals' })}
                        onClick={() => toggle('vitals')}
                    >
                        Vitals
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
            </Nav>
            <TabContent activeTab={activeTab}>
                {config.displayCalloutText &&
                    <TabPane tabId="callouts">
                        <RevealTable
                            title="Assessment Findings"
                            headings={["Type", "Value"]}
                            rows={callouts}
                            config={config}
                        />
                    </TabPane>
                }
                <TabPane tabId="vitals">
                    <RevealTable
                        title="Vitals"
                        headings={vitalsHeaders}
                        rows={vitals}
                        config={config}
                    />
                </TabPane>
                <TabPane tabId="sample">
                    <RevealTable
                        title="SAMPLE"
                        headings={["Type", "Value"]}
                        rows={sample}
                        config={config}
                    />
                </TabPane>
            </TabContent>
        </>
    );
}