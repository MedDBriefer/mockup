
import React, {useState} from "react";
import classnames from "classnames"

import {
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from "reactstrap";
// Collapse,


const InfoPanel = (props) => {

    const [activeTab, setActiveTab] = useState('1')
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }
    return (
        // <Collapse isOpen={props.show}>
            <Col className={classnames("info-pane", "col-4", "collapse", props.show ? "show" : "")}>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === "1" })}
                            onClick={() => {toggle('1')}}
                        >
                            Scenario Info
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === "2"} )}
                            onClick={() => {toggle('2')}}
                        >
                            Rater Info
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <h3>Scenario Information</h3>
                        <h4>Dispatch Info</h4>
                        <p>{props.info.dispatchInfo}</p>
                        <h4>Scene Assessment/General Impression</h4>
                        <p>{props.info.sceneAssessment}</p>
                    </TabPane>
                    <TabPane tabId="2">
                        tab 2 contents
                    </TabPane>
                </TabContent>
            </Col>
        // </Collapse>
    )
}

export default InfoPanel;