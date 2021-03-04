import React from 'react';

import {
    Button,
    Nav,
    // NavItem,
    Navbar,
    NavbarBrand,
    NavbarText,
} from "reactstrap";


const MDBNavBar = ({title, scenInfoToggler, prefsToggler}) => {
    return (
        <Navbar color="dark" dark>
            <NavbarBrand href="#">
                MedDBriefer
            </NavbarBrand>

           {!!title &&
                <NavbarText tag="h3">{title}</NavbarText>
            }
            <Nav>
                <Button color="success" onClick={scenInfoToggler}>
                    Scenario Info
                </Button>
                <Button color="primary" onClick={prefsToggler}>
                    Preferences
                </Button>
            </Nav>
        </Navbar>
    )
}

export default MDBNavBar;
