import React, {
    useContext,
    // useState
} from "react"

// import {usePrefs} from "../contexts/PreferencesContext"
import {ScenarioContext} from "../contexts/ScenarioContext"

import MDBContainer from "./MDBContainer"
import Outline from "./Outline"
import MDBDetailsPane from "./MDBDetailsPane"

const NavigationDetailsLayout = (props) => {
    const { scenario } = useContext(ScenarioContext)
    // const {dispAssessmentFindingsInline} = usePrefs()

    const lhs = (
        <Outline
            heading="Navigation"
            steps={scenario.steps}
            first={true}
        />
    )
    const rhs = (
        <MDBDetailsPane />
    )
    return (
        <MDBContainer lhs={lhs} rhs={rhs} lhsWidth="5" rhsWidth="7"/>
    )
}

export default NavigationDetailsLayout