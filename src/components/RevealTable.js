import React from "react"

import {
    // Card,
    // CardHeader,
    // CardTitle,
    // CardBody,
    Table
} from "reactstrap"

// eslint-disable-next-line no-unused-vars
import classnames from "classnames"

import Panel from "./Panel"
import RevealTableRow from "./RevealTableRow"

export default function RevealTable({heading, rows=[]}) {

    return (
        <Panel title={heading} titleSize={"h5"}>
            <Table striped={true}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) =>
                        <RevealTableRow
                            key={index}
                            label={row.label}
                            value={row.value}
                        />
                    )}
                </tbody>
            </Table>
        </Panel>
    )
}