
import React,{ useState, useContext, useEffect } from "react"

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
    const activateTab = (tab) => {
        if (activeTab !== tab) setActiveTab(tab)
    }
    const isActiveTab = (tab) => tab === activeTab

    useEffect(
        () => {
            console.log(activeTab)
            // disable the callouts tab ability to be active if assessment findings
            // are supposed to be displayed inline
            if (activeTab === "callouts" && dispAssessmentFindingsInline) {
                setActiveTab("vitals")
            }
        }, [activeTab]
    )

    const getAssessmentFindingsTabPane = () => {
        const callouts = scenario.assessmentSteps.map(step => {
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
        return (
            <TabPane tabId = "callouts" >
                <RevealTable
                    title="Assessment Findings"
                    headings={["Asssesment", "Finding"]}
                    rows={callouts}
                />
            </TabPane >
        )
    }

    const getSampleTabPane = () => {
        const sample = Object.entries(scenario.SAMPLE).map(rec => {
            return { label: rec[0], value: [rec[1]] }
        })
        return (
            <TabPane tabId = "sample" >
                <RevealTable
                    title="SAMPLE"
                    headings={["Type", "Value"]}
                    rows={sample}
                />
            </TabPane >
        )
    }

    const getVitalsTabPane = () => {
        // vitals tab will display either 2 or 3 columns, depending on
        // whether vitals have been recomputed, and thus we need to display
        // both the initial and current value
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
            <TabPane tabId = "vitals" >
                <RevealTable
                    title="Vitals"
                    headings={vitalsHeaders}
                    rows={vitals}
                />
            </TabPane >
        )
    }

    return (
        <>
            <Nav tabs>
                {!dispAssessmentFindingsInline &&
                    <NavItem>
                        <NavLink
                            className={classnames({ active: isActiveTab('callouts') })}
                            onClick={() => activateTab('callouts')}
                        >
                            Assessment Findings
                        </NavLink>
                    </NavItem>
                }
                <NavItem>
                    <NavLink
                        className={classnames({ active: isActiveTab('vitals') })}
                        onClick={() => activateTab('vitals')}
                    >
                        Vitals
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: isActiveTab('sample') })}
                        onClick={() => activateTab('sample')}
                    >
                        SAMPLE
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                {!dispAssessmentFindingsInline && getAssessmentFindingsTabPane() }
                { getVitalsTabPane() }
                { getSampleTabPane() }
            </TabContent>
        </>
    );
}