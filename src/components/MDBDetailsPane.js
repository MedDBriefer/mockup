import React from 'react'

import DetailsItem from "./DetailsItem"

const MDBDetailsPane = ({children, stateGetter, stateToggler}) => {

    return (
    <div>
        {children.map((child) =>
            <DetailsItem key={child.id} item={child} stateGetter={stateGetter} stateToggler={stateToggler} />
        )}
    </div>
    )
}

export default MDBDetailsPane;