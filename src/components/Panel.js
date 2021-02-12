// Implements a bootstrap 3 panel using Bootstrap4/5 card
// this *should* be a reusable, purely presentational component
// not making use of any of our app-specific props/state
import React from "react"

import {
    Card,
    CardHeader,
    CardTitle,
    CardBody
} from "reactstrap"

import classnames from "classnames"

export default function Panel(props) {
    const {centerTitle = true, titleSize = "h3"} = props
    return (
        <Card>
            <CardHeader>
                <CardTitle
                    className={classnames({"text-center": centerTitle}, titleSize)}
                >
                    {props.title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                {props.children}
            </CardBody>
        </Card>
    )
}