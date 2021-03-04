import React from "react"

import {
    Card,
    CardHeader,
    CardBody,
    // Collapse
} from "reactstrap"

import  CheckList  from "./CheckList"

const Accordian = ({steps }) => {

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
                      ?  <Accordian steps={step.children} />
                      :  <CheckList steps={step.children} />
                    }
                </CardBody>
            </Card>
        ))}
        </>
    )
}

export default Accordian;