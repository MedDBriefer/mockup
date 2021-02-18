import React from "react"

import CheckBox from "./CheckBox"

const CheckListItem = ({scenario, item, config}) => {

    switch (item.type) {
        case "assessment":
        case "critical-criteria":
        case "required-action":
            return <CheckBox
                        step={item}
                        config={config}
                    />
        default:
            return <p>{JSON.stringify(item, null, 4)}</p>
    }
}

export default CheckListItem;