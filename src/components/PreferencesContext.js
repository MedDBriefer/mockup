import React from "react"

export const defaultPrefs = {
    dispCheckBoxesInline: false,
    dispCallOutsInline: false,
    dispFormsInline: false,
    hideRaterInfo: false
}

function placeHolder() {
    console.log("placeHolder was called")
}
export const PreferencesContext = React.createContext({
    getPrefs: () => placeHolder(),
    setPrefs: () => placeHolder()
})
