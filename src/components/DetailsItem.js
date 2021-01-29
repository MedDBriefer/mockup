import React from "react"

import CheckBox from "./CheckBox"

const DetailsItem = ({item, stateGetter, stateToggler}) => {

    if ("assessment" === item.type) {
        return <CheckBox
                    step={item}
                    stateGetter={stateGetter}
                    stateToggler={stateToggler} />
    } else {
        return <p>{JSON.stringify(item, null, 4)}</p>
    }
}

export default DetailsItem;