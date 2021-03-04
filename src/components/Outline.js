import React, { useContext } from "react"

import { ScenarioContext } from "../contexts/ScenarioContext"

import { Button } from "reactstrap"

// I guess I don't need these functions anymore, now that they are only
// evaluated in a single location
function hasChildren(step) {
    return step.children && step.children.length > 0
}
function allChildrenAreHeadings(step) {
    return step.children.every((child) => child.type === 'heading')
}

const Outline = ({ steps, depth = 3, first=false}) => {

    const {setCurrentNode} = useContext(ScenarioContext)
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
                            steps={step.children}
                            depth={depth + 1}
                        />
                    </>
                :
                    <Button
                        color="link"
                        onClick={() => setCurrentNode(step.id)}>
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