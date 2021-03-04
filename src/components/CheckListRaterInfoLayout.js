import React, {
    useContext,
    // useState
} from "react"

import {usePrefs} from "../contexts/PreferencesContext"
import {ScenarioContext} from "../contexts/ScenarioContext"

import MDBContainer from "./MDBContainer"
import CheckList from "./CheckList"
import RaterInfo from "./RaterInfo"

const CheckListRaterInfoLayout = (props) => {
    const { scenario } = useContext(ScenarioContext)
    const {dispAssessmentFindingsInline} = usePrefs()

    const lhs = (
        <CheckList
            heading="Checklist"
            steps={scenario.steps}
            first={true}
            displayAssessmentFindings={dispAssessmentFindingsInline}
        />
    )
    const rhs = (
        <RaterInfo />
    )
    return (
        <MDBContainer
            lhs={lhs}
            rhs={rhs}
            lhsWidth={7}
            rhsWidth={5}
        />
    )
}

export default CheckListRaterInfoLayout