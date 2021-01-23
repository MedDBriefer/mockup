import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
} from 'reactstrap'

import MDBNavBar from "./components/mdb-navbar"
import InfoPane from "./components/InfoPane";
import CheckListPane from "./components/CheckListPane"

const App = (props) => {
    const [infoPaneCollapsed, setInfoPaneCollapsed] = useState(true);
    const toggleInfoPane = () => setInfoPaneCollapsed(!infoPaneCollapsed);

   return (
      <>
        <MDBNavBar branding={props.branding} toggler={toggleInfoPane} />
        <Container fluid={true} className="main">
          <Row>
            <CheckListPane steps={props.scenario.steps} />
            <InfoPane info={props.scenario.info} show={!infoPaneCollapsed} />
          </Row>
        </Container>
      </>
    );

}

export default App;
