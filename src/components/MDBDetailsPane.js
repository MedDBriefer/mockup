import React from 'react'

import DetailsItem from "./DetailsItem"

const MDBDetailsPane = ({children, stateGetter, stateToggler}) => {

    return (
    <ul>
        {children.map((child) =>
            <li key={child.id}>
                <DetailsItem
                    item={child}
                    stateGetter={stateGetter}
                    stateToggler={stateToggler} />
            </li>

        )}
    </ul>
    )
}

export default MDBDetailsPane;