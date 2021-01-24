import React from 'react'
import {Container, Row, Col} from 'reactstrap'
// import CheckListPane from "./CheckListPane"
import CheckList from "./CheckList"
// import InfoPane from "./InfoPane";

const MDBContainer = (props) => {
    const {scenario} = props;

    return (
        <Container fluid={true} className="main">
            <Row>
                <Col>
                    <CheckList
                        key="first"
                        heading="checkist"
                        steps={scenario.steps} />
                </Col>
                {/* <CheckListPane steps={scenario.steps} /> */}
                {/* <InfoPane  /> */}
            </Row>
        </Container>
    )
}

export default MDBContainer