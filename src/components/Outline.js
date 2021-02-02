import React from "react"

import {Button} from "reactstrap"

const Outline = ({switcher, steps, depth=3, first=false}) => {


    return (
        <ul className={first ? "first" : ""}>
            {steps.map((step) => (
            <li key={step.id}>

                <Button
                    color="link"
                    onClick={() => switcher(step.id)}>
                    <span className={`h${depth + 1}`}>
                        {step.label}
                    </span>
                </Button>

                {
                    step.children && step.children.length > 0 && step.children[0].type === 'heading' &&
                    <Outline
                        switcher={switcher}
                        steps={step.children}
                        depth={depth+1} />
                }
            </li>

            ))}

        </ul>
    )
}

export default Outline;