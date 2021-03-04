import React from "react"

import { PreferencesProvider } from "./contexts/PreferencesContext"

import Scenario from "./routes/Scenario"

import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";


const App = (props) => {

    return (
        <PreferencesProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={Scenario} />
                </Switch>
            </Router>
        </PreferencesProvider>
    )
}


export default App;