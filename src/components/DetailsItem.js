import React from "react"

import CheckBox from "./CheckBox"

const DetailsItem = ({item, isChecked, toggleChecked, showCallouts=true}) => {

    if ("assessment" === item.type) {
        return <CheckBox
                    step={item}
                    isChecked={isChecked}
                    toggleChecked={toggleChecked}
                    showCallouts={showCallouts}
                />
    } else {
        return <p>{JSON.stringify(item, null, 4)}</p>
    }
}

export default DetailsItem;