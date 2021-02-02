import React from 'react'
import {Container, Row, Col} from 'reactstrap'
// import CheckListPane from "./CheckListPane"
// import CheckList from "./CheckList"
// import InfoPane from "./InfoPane";

const MDBContainer = ({lhs, rhs, lhsWidth=6, rhsWidth=6}) => {

    return (
        <Container fluid={true} className="main">
            <Row>
                <Col md={lhsWidth} className="col">
                    {lhs}
                </Col>
                <Col md={rhsWidth} className="col">
                    {rhs}
                </Col>
            </Row>
        </Container>
    )
}

export default MDBContainer