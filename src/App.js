import React, {useState} from "react"

import MDBNavBar from "./components/MDBNavBar"
import MDBModal from "./components/MDBModal"
import ScenarioInfo from "./components/ScenarioInfo"
import PreferencesForm from "./components/PreferencesForm"

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
    const scen = traumaScenarioIndexer(scenarioData)
    console.log(scen)

    const [showInfo, setShowInfo] = useState(false);
    const toggleShowInfo = () => {
        setShowInfo(!showInfo);
    }
    const [showPrefs, setShowPrefs] = useState(false);
    const toggleShowPrefs = () => {
        setShowPrefs(!showPrefs);
    }

    return (
        <Router>
            <MDBNavBar
                title={scen.id}
                scenInfoToggler={toggleShowInfo}
                prefsFormToggler={toggleShowPrefs}
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
            <MDBModal
                title="User Preferences"
                show={showPrefs}
                toggler={toggleShowPrefs}
            >
                <PreferencesForm />
            </MDBModal>
        </Router>
    )
}

export default App;