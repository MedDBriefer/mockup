import React from 'react'

import DetailsItem from "./DetailsItem"
import RaterInfo from "./RaterInfo"

import Panel from "./Panel"

const MDBDetailsPane = ({scenario, getCurrentNode, isChecked, toggleChecked, showCallouts=true}) => {

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
                        <DetailsItem
                            scenario={scenario}
                            item={child}
                            isChecked={isChecked}
                            toggleChecked={toggleChecked}
                            showCallouts={showCallouts}
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