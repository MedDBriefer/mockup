import React from "react"
// , {useState}

import {
    Card,
    CardHeader,
    CardBody,
    // Collapse
} from "reactstrap"

import  CheckList  from "./CheckList"

const Accordian = ({isChecked, toggleChecked, steps, showCallouts, showCalloutIcon}) => {

    const childrenAreHeadings = (step) => {
        return step.children && step.children[0].type === 'heading'
    }
    return (
        <>
        {steps.map((step) => (
            <Card key={`card-${step.id}`}>
                <CardHeader>
                    {step.label}
                </CardHeader>
                <CardBody>
                    { childrenAreHeadings(step)
                      ?  <Accordian
                            isChecked={isChecked}
                            toggleChecked={toggleChecked}
                            steps={step.children}
                            showCallouts={showCallouts}
                            showCalloutIcon={showCalloutIcon}
                        />
                      :  <CheckList
                            isChecked={isChecked}
                            toggleChecked={toggleChecked}
                            steps={step.children}
                            showCallouts={showCallouts}
                            showCalloutIcon={showCalloutIcon}
                        />
                    }
                </CardBody>
            </Card>
        ))}
        </>
    )
}

export default Accordian;