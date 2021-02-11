import React,
{useState}
from "react"

// import { Button } from "reactstrap"
// <Button onClick={() => toggle()}>
//     {label}
// </Button>

import classnames from "classnames"

export default function RevealTableRow({label, value}) {
    const [show, setShow] = useState(false)
    const toggle = () => setShow(!show)

    return (
        <tr>
            <th onClick={() => toggle()}>
                {label}
            </th>
            <td>
                <span className={classnames({hidden: !show})}>
                    {value}
                </span>
            </td>
        </tr>
    )

}