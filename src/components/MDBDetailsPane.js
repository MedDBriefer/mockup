import React, { useContext, useEffect, useState } from 'react'

import { ScenarioContext } from "../contexts/ScenarioContext"

import CheckListItem from "./CheckListItem"
import Panel from "./Panel"
import RaterInfo from "./RaterInfo"


const MDBDetailsPane = () => {
    const { scenario, currentNode } = useContext(ScenarioContext)
    const [label, setLabel] = useState(null)
    const [children, setChildren] = useState([])


    useEffect(
        () => {
            if(!!currentNode) {
                setLabel(scenario.nodeLabels[currentNode])
                setChildren(scenario.items[currentNode])
            } else {
                setLabel(null)
                setChildren([])
            }
        },[scenario, currentNode]
    )

    if (null === label) {
        return <div></div>
    }
    return (
        <>
            <Panel title={`${label} Details`}>
                <ul>
                    {children.map((child) =>
                        <li key={child.id}>
                            <CheckListItem step={child} />
                        </li>
                    )}
                </ul>
            </Panel>
            <RaterInfo defaultTab={"vitals"} />
        </>
    )
}

export default MDBDetailsPane;