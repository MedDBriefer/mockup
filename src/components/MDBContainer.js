import React from 'react'
import {Container, Row, Col} from 'reactstrap'
// import CheckListPane from "./CheckListPane"
// import CheckList from "./CheckList"
// import InfoPane from "./InfoPane";

const MDBContainer = (props) => {

    return (
        <Container fluid={true} className="main">
            <Row>
                <Col>
                    {props.lhs}
                </Col>
                <Col>
                    {props.rhs}
                </Col>
            </Row>
        </Container>
    )
}

export default MDBContainer