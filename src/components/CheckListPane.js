import React from "react"

import CheckList from "./CheckList";

import {Col} from "reactstrap";

const CheckListPane = ({steps}) => {
    return (
        <Col className="checklist-pane">
            <CheckList key="first" heading="Checklist" steps={steps} first={true} />
        </Col>
    )
}

export default  CheckListPane;