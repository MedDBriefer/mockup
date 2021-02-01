import React, { useState } from "react"

import { Button } from "reactstrap"
import { NavLink } from "react-router-dom"

// This component wraps a bootstrap Button with a Link.  We're using NavLink
// rather than Link, as it has an isActive() method.  I'm using the defalt
// behavior for this method, but as a side-effect, setting some state within
// the componenet so I can style the Button with the color I want when Link
// is active
const MockupButton = ({ to, label }) => {

    const [isCurrent, toggleCurrent] = useState(false);

    const setCurrent = (match, location) => {
        toggleCurrent(!match ? false : true);
        // console.log(to, isCurrent)
        return isCurrent;
    }

    return (
        <NavLink
            to={to}
            isActive={setCurrent}
        >
            <Button color={isCurrent ? "success" : "primary"}>
                {label}
            </Button>
        </NavLink>
    )
}

export default MockupButton