import React, {
    useState,
    useEffect
} from "react"

export const ScenarioContext = React.createContext()

export const ScenarioProvider = ({scenario, defaultValues, children}) =>{

    const [currentNode, setCurrentNode] = useState(defaultValues.currentNode)
    const [currentAssessmentFinding, setCurrentAssessmentFinding] = useState(null)
    const [checkListItems, setCheckListItems] = useState(defaultValues.checkListItems)
    const [criticalCriteria, setCriticalCriteria] = useState(defaultValues.criticalCriteria)
    const [showInterventionForm, setShowInterventionForm] = useState(defaultValues.showForm)
    const [currentVitals, setCurrentVitals] = useState(defaultValues.vitals)
    const [vitalsRecomputed, setVitalsRecomputed] = useState(defaultValues.vitalsRecomputed)

    const isChecked = (id) => {
        return checkListItems[id]
    }

    const setChecked = (id, boolVal) => {
        setCheckListItems(prevState => ({
            ...prevState, [id]: boolVal
        }))
    }

    const toggleChecked = (id) => {
        setChecked(id, !checkListItems[id])
    }

    const isCurrentAssessmentFinding = (id) => {
        return !!currentAssessmentFinding && currentAssessmentFinding === id
    }

    const toggleAssessmentFinding = (id) => {
        const stepIsChecked = isChecked(id)
        setCurrentAssessmentFinding(!stepIsChecked ? id : null)
        toggleChecked(id)
    }

    const shouldDisplayInterventionForm = (id) => {
        return Object.keys(showInterventionForm).includes(id) && showInterventionForm[id]
    }

    const setDisplayInterventionForm = (id, boolVal) => {
        setShowInterventionForm(prevState => ({
            ...prevState, [id]: boolVal
        }))
    }

    const toggleDisplayInterventionForm = (id) => {
        setDisplayInterventionForm(id, !showInterventionForm[id])
    }

    const setVital = (vital, value) => {
        setCurrentVitals(prevState => ({
            ...prevState, [vital]: value
        }))
    }

    useEffect(
        () => {
            // as both class components .setState() and functional components useState() setters
            // both actually queue the setting of state, as an performance optimization for when
            // there are individual requests for state changes made in a relatively short period
            // of time,  making use of a useEffect() with a dependency array of all state variables
            // we're interested in persisting to the db is a perfect place to capture when they
            // have actually been changed, and thus persist those changes.  since we're not hooked
            // up to the db yet, I'm merely console.log()ing that things have changed, and listing
            // what state we'll be persisting to the db.
            console.log("current state", {
                currentNode,
                currentAssessmentFinding,
                checkListItems,
                criticalCriteria,
                showInterventionForm,
                currentVitals,
                vitalsRecomputed
            })
        },
        [
            currentNode,
            currentAssessmentFinding,
            checkListItems,
            criticalCriteria,
            showInterventionForm,
            currentVitals,
            vitalsRecomputed
        ]
    )

    return (
        <ScenarioContext.Provider
            value={{
                scenario,
                isChecked,
                setChecked,
                toggleChecked,
                currentNode,
                setCurrentNode,
                isCurrentAssessmentFinding,
                toggleAssessmentFinding,
                shouldDisplayInterventionForm,
                setDisplayInterventionForm,
                toggleDisplayInterventionForm,
                setCriticalCriteria,
                currentVitals,
                setVital,
                vitalsRecomputed,
                setVitalsRecomputed
            }}
        >
            {children}
        </ScenarioContext.Provider>
    )
}