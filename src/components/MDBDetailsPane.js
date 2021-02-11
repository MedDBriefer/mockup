import React from 'react'

import {
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from "reactstrap"

import DetailsItem from "./DetailsItem"
import RaterInfo from "./RaterInfo"

const MDBDetailsPane = ({scenario, getCurrentNode, isChecked, toggleChecked, showCallouts=true}) => {

    const {label, children} = getCurrentNode()
    return (
        <>
        <Card>
            <CardHeader>
                <CardTitle className="h3 text-center">{label} Details</CardTitle>
            </CardHeader>
            <CardBody>
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
            </CardBody>
        </Card>
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