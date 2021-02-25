import React from "react"

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


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false
        }
        this.toggleShowInfo = this.toggleShowInfo.bind(this)
        this.scen = traumaScenarioIndexer(scenarioData)
        console.log(this.scen)
    }

    toggleShowInfo() {
        this.setState((prevState) => ({
            showInfo: !prevState.showInfo
        }))
    }

    render() {
        return (
            <Router>
                <MDBNavBar
                    title={this.scen.id}
                    toggler={this.toggleShowInfo}
                />

                <Switch>
                    <Route path="/mockup1">
                        <Mockup1 scenario={this.scen} />
                    </Route>
                    <Route path="/mockup2">
                        <Mockup2 scenario={this.scen} />
                    </Route>
                    <Route path="/mockup3">
                        <Mockup3 scenario={this.scen} />
                    </Route>
                    <Route path="*">
                        <h3>Click on one of the mockups listed above</h3>
                    </Route>
                </Switch>

                <MDBModal
                    title="Scenario Info"
                    show={this.state.showInfo}
                    toggler={this.toggleShowInfo}
                >
                    <ScenarioInfo scenario={this.scen} />
                </MDBModal>

            </Router>
        )
    }
}

export default App;