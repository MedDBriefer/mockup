import React from "react"

import {
    Table
} from "reactstrap"


import Panel from "./Panel"
import RevealTableRow from "./RevealTableRow"

export default function RevealTable({title, headings=[], rows=[], config}) {

    return (
        <Panel title={title} titleSize={"h5"}>
            <Table striped={true} size="sm">
                <thead>
                    <tr>
                        {
                            headings.map((heading, index) => (
                                <th key={index}>{heading}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) =>
                        <RevealTableRow
                            key={index}
                            label={row.label}
                            values={row.value}
                            config={config}
                        />
                    )}
                </tbody>
            </Table>
        </Panel>
    )
}