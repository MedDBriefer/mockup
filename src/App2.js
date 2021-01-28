import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MDBNavBar from "./components/mdb-navbar"
import MDBContainer from "./components/MDBContainer"
import MDBModal from "./components/MDBModal"

import CheckList from "./components/CheckList";

const App = (props) => {
    // const [infoPaneCollapsed, setInfoPaneCollapsed] = useState(true);
    // const toggleInfoPane = () => setInfoPaneCollapsed(!infoPaneCollapsed);
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    const lhs = <CheckList
                  key="first"
                  heading="Checklist"
                  steps={props.scenario.steps} />
    const rhs = (<div></div>)

   return (
      <>
        <MDBNavBar
          branding={props.branding}
          toggler={toggleModal}
        />
        <MDBContainer
          lhs={lhs}
          rhs={rhs}
        />
        <MDBModal
          title="Scenario Info"
          show={showModal}
          toggler={toggleModal}
        >
          <h3>Dispatch Information</h3>
          <p>{props.scenario.info.dispatchInfo}</p>
          <h3>Scene Assessment</h3>
          <p>{props.scenario.info.sceneAssessment}</p>
        </MDBModal>
      </>
    );

}

export default App;
