import React from "react"

import { Table } from "reactstrap"

import RevealTableRow from "./RevealTableRow"

export default function RevealTable({title, headings=[], rows=[]}) {

    return (
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
                    />
                )}
            </tbody>
        </Table>
    )
}