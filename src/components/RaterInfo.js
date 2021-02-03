
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

export default function RaterInfo({scenario, dispCallouts=true}) {

    const [activeTab, setActiveTab] = useState('scenInfo')
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab)
    }

    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({active: activeTab === 'scenInfo'})}
                        onClick={() => toggle('scenInfo')}
                    >
                        Scenario Info
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'callouts' })}
                        onClick={() => toggle('callouts')}
                    >
                        Callouts
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'initVitals' })}
                        onClick={() => toggle('initVitals')}
                    >
                        Initial Vitals
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === 'reassessVitals' })}
                        onClick={() => toggle('reassessVitals')}
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
                        heading="Callouts"
                        rows={[{label: 'Foo', value: "Foo Value"}, {label: "Bar", value: "Bar Value"}]}
                    />
                </TabPane>
                <TabPane tabId="initVitals">
                    <RevealTable heading="Initial Vitals" />
                </TabPane>
                <TabPane tabId="reassessVitals">
                    <RevealTable heading="Reassessment Vitals" />
                </TabPane>
            </TabContent>
        </>
    );
}