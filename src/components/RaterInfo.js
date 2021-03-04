
import React,{ useState, useContext } from "react"

import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from "reactstrap"

import classnames from "classnames"

import { usePrefs } from "../contexts/PreferencesContext"
import { ScenarioContext } from "../contexts/ScenarioContext"

import CallOutText from "./CallOutText"



import RevealTable from "./RevealTable"

export default function RaterInfo({defaultTab = "callouts"}) {
    const {dispAssessmentFindingsInline} = usePrefs()
    const {scenario, currentVitals, vitalsRecomputed} = useContext(ScenarioContext)
    const [activeTab, setActiveTab] = useState(defaultTab)
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab)
    }

    // conditionally compute callouts array only if they are supposed to be
    // displayed within this pane
    let callouts = []
    if (!dispAssessmentFindingsInline) {
        // here you'd be passing actual Callout/CalloutText (whatever you call it)
        // components as the value instead of merely step.callout
        callouts = scenario.assessmentSteps.map(step => {
            return {
                id: step.id,
                label: step.calloutLabel,
                value: [
                    <CallOutText
                        step={step}
                        displayAssessmentFindings={true}
                    />
                ]
            }
        })
    }


    const sample = Object.entries(scenario.SAMPLE).map(rec => {
        return {label: rec[0], value: [rec[1]]}
    })


    const vitalsHeaders =
        vitalsRecomputed
        ? ["Vital Sign", "Initial Value", "Current Value"]
        : ["Vital Sign", "Current Value"]

    const vitals = Object.entries(scenario.initialVitalSigns).map(iv => {
        const value =
            vitalsRecomputed
            ? [ iv[1], currentVitals[iv[0]] ]
            : [ iv[1] ]

        return {
            label: iv[0],
            value: value
        }
    })

    return (
        <>
            <Nav tabs>
                {!dispAssessmentFindingsInline &&
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
                {!dispAssessmentFindingsInline &&
                    <TabPane tabId="callouts">
                        <RevealTable
                            title="Assessment Findings"
                            headings={["Asssesment", "Finding"]}
                            rows={callouts}
                        />
                    </TabPane>
                }
                <TabPane tabId="vitals">
                    <RevealTable
                        title="Vitals"
                        headings={vitalsHeaders}
                        rows={vitals}
                    />
                </TabPane>
                <TabPane tabId="sample">
                    <RevealTable
                        title="SAMPLE"
                        headings={["Type", "Value"]}
                        rows={sample}
                    />
                </TabPane>
            </TabContent>
        </>
    );
}