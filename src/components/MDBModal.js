import React from 'react'

import {Modal, ModalHeader, ModalBody} from 'reactstrap';


const MDBModal = (props) => {
    const {title, show, dismiss, children} = props;
    return (
        <Modal isOpen={show} toggle={dismiss} size="xl" backdrop="static">
            <ModalHeader toggle={dismiss}>
                <span className="h2">{title}</span>
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    );
}

export default MDBModal;