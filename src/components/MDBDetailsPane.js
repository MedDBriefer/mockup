import React from 'react'

import {
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from "reactstrap"

import DetailsItem from "./DetailsItem"

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
    )
}

export default MDBDetailsPane;