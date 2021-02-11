import React from 'react'

import DetailsItem from "./DetailsItem"

const MDBDetailsPane = ({scenario, getCurrentNode, isChecked, toggleChecked, showCallouts=true}) => {

    const {label, children} = getCurrentNode()
    return (
    <ul>
        {children.map((child) =>
            <li key={child.id}>
                <DetailsItem
                    item={child}
                    isChecked={isChecked}
                    toggleChecked={toggleChecked}
                    showCallouts={showCallouts}
                />
            </li>

        )}
    </ul>
    )
}

export default MDBDetailsPane;