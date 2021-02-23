import React, {
    // useState
} from "react"

import MDBNavBar from "./components/MDBNavBar"
import MDBModal from "./components/MDBModal"
import ScenarioInfo from "./components/ScenarioInfo"
import PreferencesForm from "./components/PreferencesForm"
import {defaultPrefs, PreferencesContext} from "./components/PreferencesContext"

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
        console.log("App constructor called")
        super(props)
        this.state = {
            showInfo: false,
            showPrefs: false,
            ...defaultPrefs
        }
        // dispCheckBoxesInline: false,
        //     dispCallOutsInline: false,
        //         dispFormsInline: false,
        //             hideRaterInfo: false

        this.scen = traumaScenarioIndexer(scenarioData)
        console.log(this.scen)

        this.toggleShowInfo = this.toggleShowInfo.bind(this)
        this.toggleShowPrefs = this.toggleShowPrefs.bind(this)
        this.getPref = this.getPref.bind(this)
        this.setPref = this.setPref.bind(this)
        this.saveState = this.saveState.bind(this)
    }

    toggleShowInfo() {
        this.setState((prevState) => ({
            showInfo: !prevState.showInfo
        }))
    }
    toggleShowPrefs() {
        this.setState((prevState) => ({
            showPrefs: !prevState.showPrefs
        }))
    }

    getPref(pref) {
        return this.state[pref]
    }

    setPref(pref, value) {
        this.setState({
            [pref]: value
        }, () => this.saveState())
    }


    saveState() {
        // simply dump to console for now. will eventually persist to db
        console.log(this.state)
    }

    // const [showInfo, setShowInfo] = useState(false);
    // const toggleShowInfo = () => {
    //     setShowInfo(!showInfo);
    // }
    // const [showPrefs, setShowPrefs] = useState(false);
    // const


    render () {

        return (
            <Router>

                <MDBNavBar
                    title={this.scen.id}
                    scenInfoToggler={this.toggleShowInfo}
                    prefsFormToggler={this.toggleShowPrefs}
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
                    <MDBModal
                        title="User Preferences"
                        show={this.state.showPrefs}
                        toggler={this.toggleShowPrefs}
                    >
                        <PreferencesContext.Provider value={{ getPref: this.getPref, setPref: this.setPref }}>
                            <PreferencesForm hideModal={this.toggleShowPrefs} />
                        </PreferencesContext.Provider>
                    </MDBModal>
            </Router>
        )

    }
}

export default App;