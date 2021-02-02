import React from "react"
// , {useState}

import {
    Card,
    CardHeader,
    CardBody,
    // Collapse
} from "reactstrap"

import  CheckList  from "./CheckList"

const Accordian = ({stateGetter, stateToggler, steps}) => {

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
                      ?  <Accordian stateGetter={stateGetter} stateToggler={stateToggler} steps={step.children} />
                      :  <CheckList stateGetter={stateGetter} stateToggler={stateToggler} steps={step.children} />
                    }
                </CardBody>
            </Card>
        ))}
        </>
    )
}

export default Accordian;