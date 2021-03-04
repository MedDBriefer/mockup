import React, { useState } from "react"

import { usePrefs } from "../contexts/PreferencesContext"

import classnames from "classnames"


export default function RevealTableRow({label, values}) {
    const {inhibitRaterOversharing} = usePrefs()
    const [show, setShow] = useState(false)
    const toggle = () => setShow(!show)

    return (
        <tr>
            { (!inhibitRaterOversharing)
            ?
                <th>{label}</th>
            :
                <th onClick={() => toggle()}>{label} </th>
            }
            {
                values.map((value, index) => (
                    <td key={ index }>
                        {(!inhibitRaterOversharing)
                            ?
                            <span >{value}</span>
                            :
                            <span className={classnames({ hidden: !show })}>
                                {value}
                            </span>
                        }
                    </td>
                ))
            }
        </tr>
    )

}