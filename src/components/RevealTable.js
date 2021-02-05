import React from "react"

import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Table
} from "reactstrap"

// eslint-disable-next-line no-unused-vars
import classnames from "classnames"

import RevealTableRow from "./RevealTableRow"

export default function RevealTable({heading, rows=[]}) {

    return (
        <Card color={"dark"} inverse={true}>
            <CardHeader>
                <CardTitle className="h3 text-center">{heading}</CardTitle>
            </CardHeader>
            <CardBody>
                <Table striped={true} dark={true}>
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
            </CardBody>
        </Card>

    )
}