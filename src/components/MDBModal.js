import React from 'react'

import {Modal, ModalHeader, ModalBody} from 'reactstrap';


const MDBModal = (props) => {
    const {title, show, toggler, children} = props;
    return (
        <Modal isOpen={show} toggle={toggler} size="xl" backdrop="static">
            <ModalHeader toggle={toggler}>
                <span className="h2">{title}</span>
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    );
}

export default MDBModal;