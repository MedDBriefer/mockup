import React, {useState, useContext} from "react"

const defaultPrefs = {
    dispLeafNodesInline: true,
    dispAssessmentFindingsInline: true,
    inhibitRaterOversharing: false
}

const noop = () => {}
export const PreferencesContext = React.createContext({...defaultPrefs, setPref: noop})


export const PreferencesProvider = (props) => {
    const [dispLeafNodesInline, setDispLeafNodesInline] = useState(defaultPrefs.dispLeafNodesInline)
    const [dispAssessmentFindingsInline, setDispAssessmentFindingsInline] = useState(defaultPrefs.dispAssessmentFindingsInline)
    const [inhibitRaterOversharing, setInhibitRaterOversharing] = useState(defaultPrefs.inhibitRaterOversharing)

    const setPref = (name, value) => {
        switch(name) {
            case "dispLeafNodesInline":
                setDispLeafNodesInline(value)
                break
            case "dispAssessmentFindingsInline":
                setDispAssessmentFindingsInline(value)
                break;
            case "inhibitRaterOversharing":
                setInhibitRaterOversharing(value)
                break
            default:
                console.log(`not setting unknown pref ${name} to ${value}`)
        }
    }

    return (
        <PreferencesContext.Provider
            value={{
                dispLeafNodesInline,
                dispAssessmentFindingsInline,
                inhibitRaterOversharing,
                setPref
            }}
        >
            {props.children}
        </PreferencesContext.Provider>
    )
}

export const usePrefs = () => useContext(PreferencesContext)
