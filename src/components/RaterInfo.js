
import React,
{ useState }
from "react"

import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
 } from "reactstrap"

import classnames from "classnames"

import ScenarioInfo from "./ScenarioInfo"

import RevealTable from "./RevealTable"

export default function RaterInfo({scenario, defaultTab = "callouts", showCallouts=true}) {

    const [activeTab, setActiveTab] = useState(defaultTab)
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab)
    }

    const callouts = scenario.callouts.map(co => {
        return {
            id: co.stepId,
            label: co.calloutLabel,
            value: co.calloutText
        }
    })

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
                {/* <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === 'scenInfo'})}
                        onClick={() => toggle('scenInfo')}
                    >
                        Scenario Info
                    </NavLink>
                </NavItem> */}
                {showCallouts &&
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
                <TabPane tabId="scenInfo">
                    <ScenarioInfo scenario={scenario} />
                </TabPane>
                <TabPane tabId="callouts">
                    <RevealTable
                        heading="Assessment Findings"
                        rows={callouts}
                    />
                </TabPane>
                <TabPane tabId="initialVitals">
                    <RevealTable
                        heading="Initial Vitals"
                        rows={initVitals}
                    />
                </TabPane>
                <TabPane tabId="sample">
                    <RevealTable
                        heading="SAMPLE"
                        rows={sample}
                    />
                </TabPane>
                <TabPane tabId="reassessmentVitals">
                    <RevealTable
                        heading="Reassessment Vitals"
                        rows={reassessVitals}
                    />
                </TabPane>
            </TabContent>
        </>
    );
}