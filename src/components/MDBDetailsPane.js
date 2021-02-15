import React from 'react'

import CheckListItem from "./CheckListItem"
import RaterInfo from "./RaterInfo"

import Panel from "./Panel"

const MDBDetailsPane = ({scenario, getCurrentNode, isChecked, toggleChecked, setChecked, showCallouts, showCalloutIcon}) => {

    const {label, children} = getCurrentNode()
    if (null === label) {
        return <div></div>
    }
    return (
        <>
        <Panel title={`${label} Details`}>
            <ul>
                {children.map((child) =>
                    <li key={child.id}>
                        <CheckListItem
                            scenario={scenario}
                            item={child}
                            isChecked={isChecked}
                            toggleChecked={toggleChecked}
                            setChecked={setChecked}
                            showCallouts={showCallouts}
                            showCalloutIcon={showCalloutIcon}
                        />
                    </li>
                )}
            </ul>
        </Panel>
        <RaterInfo
            scenario={scenario}
            defaultTab={"initialVitals"}
            showCallouts={false}
            showCalloutIcon={false}
        />
        </>
    )
}

export default MDBDetailsPane;