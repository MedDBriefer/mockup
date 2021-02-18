import React, {
    useState
} from "react"


import classnames from "classnames"

// const noop = () => { }

export default function RevealTableRow({label, value, config}) {
    const [show, setShow] = useState(false)
    const toggle = () => setShow(!show)
    // you can make use of noop() conditionally, to turn of requirement of
    // clicking on label to reveal the value, as this might be kind of wierd
    // if clicking on a callout or whatever is supposed to display automatatically
    //  probably better to pass a clickhandler (perhaps defaulted to noop() or just null)
    // down if youwant one rather the way this is currently working
    // useState is probably a bad use case anyway, as it's state is local to the
    // component (like a variable initialized as context available to a closure(), but not
    // accessible from anywhere else.  we'd probably want the state regarding whether
    // something is to be shown or not to be persisted to the db, and should be part of
    // the global app state)
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