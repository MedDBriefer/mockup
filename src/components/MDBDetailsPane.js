import React from 'react'

import CheckListItem from "./CheckListItem"
import RaterInfo from "./RaterInfo"

import Panel from "./Panel"

const MDBDetailsPane = ({scenario, config }) => {

    const raterInfoConfig = Object.assign(config, {displayCalloutText: false})
    const {label, children} = config.getCurrentNode()
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
                                step={child}
                                config={config}
                            />
                        </li>
                    )}
                </ul>
            </Panel>
            <RaterInfo
                scenario={scenario}
                defaultTab={"vitals"}
                config={raterInfoConfig}
            />
        </>
    )
}

export default MDBDetailsPane;