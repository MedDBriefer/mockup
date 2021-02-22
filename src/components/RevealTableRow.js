import React, {
    useState
} from "react"


import classnames from "classnames"


export default function RevealTableRow({label, value, config}) {
    const [show, setShow] = useState(false)
    const toggle = () => setShow(!show)

    return (
        <tr>
            { (config.autoRevealRaterInfo)
            ?
                <th>{label}</th>
            :
                <th onClick={() => toggle()}>{label} </th>
            }
            <td>
                {(config.autoRevealRaterInfo)
                ?
                    <span>{value}</span>
                :
                    <span className={classnames({hidden: !show})}>
                        {value}
                    </span>
                }
            </td>
        </tr>
    )

}