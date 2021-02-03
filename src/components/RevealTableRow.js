import React,
{useState}
from "react"

import { Button } from "reactstrap"

import classnames from "classnames"

export default function RevealTableRow({label, value}) {
    const [show, setShow] = useState(false)
    const toggle = () => setShow(!show)

    return (
        <tr>
            <th>
                <Button onClick={() => toggle()}>
                    {label}
                </Button>
            </th>
            <td>
                <p className={classnames({invisible: !show})}>
                    {value}
                </p>
            </td>
        </tr>
    )

}