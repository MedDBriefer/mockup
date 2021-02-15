import React from "react"

import CheckBox from "./CheckBox"

const DetailsItem = ({item, isChecked, toggleChecked, showCallouts=true}) => {

    switch (item.type) {
        case "assessment":
        case "critical-criteria":
        case "required-action":
            return <CheckBox
                step={item}
                isChecked={isChecked}
                toggleChecked={toggleChecked}
                showCallouts={showCallouts}
            />
        default:
            return <p>{JSON.stringify(item, null, 4)}</p>
    }
}

export default DetailsItem;