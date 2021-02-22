import React from "react"

import {
    Table
} from "reactstrap"


import Panel from "./Panel"
import RevealTableRow from "./RevealTableRow"

export default function RevealTable({heading, rows=[], config}) {

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
                            config={config}
                        />
                    )}
                </tbody>
            </Table>
        </Panel>
    )
}