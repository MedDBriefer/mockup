import React, {useState} from "react"

import MDBNavBar from "./components/MDBNavBar"
import MDBModal from "./components/MDBModal"
import ScenarioInfo from "./components/ScenarioInfo"

import Mockup1 from "./Mockup1"
import Mockup2 from "./Mockup2"
import Mockup3 from "./Mockup3"

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import scenarioData  from "./data/scenario"
import traumaScenarioIndexer from "./data/traumaScenarioIndexer"

const scen = traumaScenarioIndexer(scenarioData)
console.log(scen)

const App = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const toggleShowInfo = () => {
        setShowInfo(!showInfo);
    }

    return (
        <Router>
            <MDBNavBar
                title={scen.id}
                toggler={toggleShowInfo}
            />

            <Switch>
                <Route path="/mockup1">
                    <Mockup1 scenario={scen} />
                </Route>
                <Route path="/mockup2">
                    <Mockup2 scenario={scen} />
                </Route>
                <Route path="/mockup3">
                    <Mockup3 scenario={scen} />
                </Route>
                <Route path="*">
                    <h3>Click on one of the mockups listed above</h3>
                </Route>
            </Switch>

            <MDBModal
                title="Scenario Info"
                show={showInfo}
                toggler={toggleShowInfo}
            >
                <ScenarioInfo scenario={scen} />
            </MDBModal>

        </Router>
    )
}

export default App;