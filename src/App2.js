import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MDBNavBar from "./components/mdb-navbar"
import MDBContainer from "./components/MDBContainer"
import MDBModal from "./components/MDBModal"

const App = (props) => {
    // const [infoPaneCollapsed, setInfoPaneCollapsed] = useState(true);
    // const toggleInfoPane = () => setInfoPaneCollapsed(!infoPaneCollapsed);
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

   return (
      <>
        <MDBNavBar branding={props.branding} toggler={toggleModal} />
        <MDBContainer scenario={props.scenario} />
        <MDBModal title="Scenario Info" show={showModal} toggler={toggleModal}>
          <h3>Dispatch Information</h3>
          <p>{props.scenario.info.dispatchInfo}</p>
          <h3>Scene Assessment</h3>
          <p>{props.scenario.info.sceneAssessment}</p>
        </MDBModal>
      </>
    );

}

export default App;
