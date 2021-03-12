import React, { useContext, useEffect, useState } from 'react'

import { ScenarioContext } from "../contexts/ScenarioContext"

import CheckListItem from "./CheckListItem"
// import Panel from "./Panel"
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
        return (
            <div style={{verticalAlign: "center"}}>
                <p className="text-center">
                    Please click on an outline step to the left to see it's details
                </p>
            </div>
        )
    }
    return (
        <>
            <h3 className="text-center">
                {`${label} Details`}
            </h3>
            <ul className="first">
                {children.map((child) =>
                    <li key={child.id}>
                        <CheckListItem step={child} />
                    </li>
                )}
            </ul>
            <RaterInfo defaultTab={"vitals"} />
        </>
    )
}

export default MDBDetailsPane;