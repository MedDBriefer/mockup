import React from "react"

import {Button} from "reactstrap"

// I guess I don't need these functions anymore, now that they are only
// evaluated in a single location
function hasChildren(step) {
    return step.children && step.children.length > 0
}
function allChildrenAreHeadings(step) {
    return step.children.every((child) => child.type === 'heading')
}


const Outline = ({ scenario, steps, depth = 3, switcher, first=false}) => {

    return (
        <ul className={first ? "first" : ""}>
        {steps.map((step) => (
            <li key={step.id}>
            {
                (hasChildren(step) && allChildrenAreHeadings(step))
                ?
                    <>
                        <div className={`h${depth + 1} text-primary empty-heading`}>
                            {step.label}
                        </div>
                        <Outline
                            scenario={scenario}
                            steps={step.children}
                            depth={depth + 1}
                            switcher={switcher}
                        />
                    </>
                :
                    <Button
                        color="link"
                        onClick={() => switcher(step.id)}>
                        <span className={`h${depth + 1}`}>
                            {step.label}
                        </span>
                    </Button>
            }
            </li>

        ))}
        </ul>
    )
}

export default Outline;