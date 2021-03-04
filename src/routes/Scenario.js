import React, {
    useState,
    // useContext,
    useEffect
} from "react"

import traumaScenarioIndexer from "../data/traumaScenarioIndexer"
import scenarioData from "../data/scenario"

import { usePrefs } from "../contexts/PreferencesContext"
import { ScenarioProvider } from "../contexts/ScenarioContext"

import CheckListRaterInfoLayout from "../components/CheckListRaterInfoLayout"
import NavigationDetailsLayout from "../components/NavigationDetailsLayout"
import MDBNavBar from "../components/MDBNavBar"
import ScenarioInfo from "../components/ScenarioInfo"
import PreferencesForm from "../components/PreferencesForm"

function mapKeysToFalse(dict) {
    const newDict = Object.keys(dict).reduce((obj, key) => {
        obj[key] = false;
        return obj;
    }, {})
    return newDict;
}

function mapArrayOfObjKeysToFalse(array) {
    const dict = {}
    array.forEach((obj) => {dict[obj.id] = false})
    // console.log(dict)
    return dict
}

function mapChildObjKeysToFalse(parent) {
    const dict = {}
    Object.keys(parent).forEach((key) => {
        // console.log(key)
        parent[key].forEach(child => {
            dict[child.id] = false
        })
    })
    // console.log(dict)
    return dict
}

const getDefaultValues = (scen) => {
    return {
        vitals: scen.initialVitalSigns,
        vitalsRecomputed: false,
        currentNode: null,
        checkListItems: mapChildObjKeysToFalse(scen.items),
        criticalCriteria: mapArrayOfObjKeysToFalse(scen.criticalCriteria),
        showForm: mapKeysToFalse(scen.interventionForms)
    }
}


const Scenario = ({scenarioId}) => {

    const { dispLeafNodesInline } = usePrefs()

    const [scenario, setScenario] = useState(null)

    const [initValues, setInitValues] = useState(null)
    const [showPrefs, setShowPrefs] = useState(false)
    const [showScenInfo, setShowScenInfo] = useState(false)


    useEffect(
        () => {
            const loadScen = () => {
                console.log("loadScen() called")
                //ignore scenarioId for now importing hardcoded scen file
                const scen = traumaScenarioIndexer(scenarioData)
                setScenario(scen)
                // console.log(scen)
                const defaults = getDefaultValues(scen)
                setInitValues(defaults)
            }
            loadScen()
        }, []
    )

    useEffect(
        () => {
            if (!!scenario || !!initValues) {
                console.log("Scenario::useEffect()::values changed")
                // console.log(JSON.stringify(scenario, null, 4))
                // console.log(JSON.stringify(initValues, null, 4))
            }
        }, [scenario, initValues]
    )

    const togglePrefs = (event) => {
        event.preventDefault()
        setShowPrefs(!showPrefs)
    }
    const toggleScenInfo = (event) => {
        event.preventDefault()
        setShowScenInfo(!showScenInfo)
    }



    const getLayout = () => {
        return dispLeafNodesInline
        ? <CheckListRaterInfoLayout />
        : <NavigationDetailsLayout />
    }



    return (
        !scenario
        ? <div>still loading</div>
        :
        <ScenarioProvider
            scenario={scenario}
            defaultValues={initValues}
        >
            <MDBNavBar
                title={`Scenario: ${scenario.id}`}
                scenInfoToggler={toggleScenInfo}
                prefsToggler={togglePrefs}
            />
            {getLayout()}
            <PreferencesForm show={showPrefs} dismiss={togglePrefs} />
            <ScenarioInfo show={showScenInfo} dismiss={toggleScenInfo} />

        </ScenarioProvider>
    )
}

export default Scenario