import React from "react"

import {Button} from "reactstrap"

const Outline = ({switcher, steps, depth=2}) => {

    // console.log(heading, steps, depth);

    return (
        <>
        <ul>
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
                    step.children &&
                    <Outline
                        switcher={switcher}
                        steps={step.children}
                        depth={depth+1} />
                }
            </li>

            ))}

        </ul>
        </>
    )
}

export default Outline;