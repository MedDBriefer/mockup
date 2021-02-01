import React, {useState} from "react"

import MDBNavBar from "./components/mdb-navbar"
import MDBModal from "./components/MDBModal"

import Mockup1 from "./Mockup1"
import Mockup2 from "./Mockup2"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const toggleShowInfo = () => {
        setShowInfo(!showInfo);
    }
    const scen = props.scenario;

    return (
        <Router>
            <MDBNavBar
                title={scen.info.name}
                toggler={toggleShowInfo}
            />
            <Switch>
                <Route exact path="/">
                    <h3>Click on one of the mockups listed above</h3>
                </Route>
                <Route path="/mockup1">
                    <Mockup1 scenario={props.scenario} />
                </Route>
                <Route path="/mockup2">
                    <Mockup2 scenario={props.scenario} />
                </Route>
            </Switch>

            <MDBModal
                title="Scenario Info"
                show={showInfo}
                toggler={toggleShowInfo}
            >
                <h3>Dispatch Information</h3>
                <p>{scen.info.dispatchInfo}</p>
                <h3>Scene Assessment</h3>
                <p>{scen.info.sceneAssessment}</p>
            </MDBModal>

        </Router>
    )
}

export default App;