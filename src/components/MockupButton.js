import React from "react"
// , { useState }

import { Button } from "reactstrap"
import { Link } from "react-router-dom"

// This component wraps a bootstrap Button with a Link.  We're using NavLink
// rather than Link, as it has an isActive() method.  I'm using the defalt
// behavior for this method, but as a side-effect, setting some state within
// the componenet so I can style the Button with the color I want when Link
// is active
const MockupButton = ({ to, label }) => {

    // the following seems to the be cause of a rendering compoment
    // with the function of another component error, so I'm disabling

    // const [isCurrent,  setIsCurrent] = useState(false);

    // const toggleCurrent = (match, location) => {
    //     setIsCurrent(!match ? false : true);
    //     return isCurrent;
    // }
    // { isCurrent ? "success" : "primary" }
    // isActive = { toggleCurrent }
    return (
        <Link to={to}>
            <Button color="primary">
                {label}
            </Button>
        </Link>
    )
}

export default MockupButton