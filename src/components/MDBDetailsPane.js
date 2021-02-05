import React from 'react'

import DetailsItem from "./DetailsItem"

const MDBDetailsPane = ({children, isChecked, toggleChecked, showCallouts=true}) => {

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