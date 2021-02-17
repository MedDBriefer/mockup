import React from "react"

import {
    Card,
    CardHeader,
    CardBody,
    // Collapse
} from "reactstrap"

import  CheckList  from "./CheckList"

const Accordian = ({scenario, steps, config }) => {

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
                            scenario={scenario}
                            steps={step.children}
                            config={config}
                        />
                      :  <CheckList
                            scenario={scenario}
                            steps={step.children}
                            config={config}
                        />
                    }
                </CardBody>
            </Card>
        ))}
        </>
    )
}

export default Accordian;