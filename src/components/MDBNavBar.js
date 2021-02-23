import React from 'react';

import {
    Button,
    Nav,
    NavItem,
    // NavLink
    Navbar,
    // NavbarBrand,
    NavbarText,
} from "reactstrap";

import MockupButton from "./MockupButton"


const MDBNavBar = ({branding, title, scenInfoToggler, prefsFormToggler}) => {
    return (
        <Navbar color="dark" dark>
            {/* <NavbarBrand href="#">
                {branding}
            </NavbarBrand>
             */}
            <Nav tabs>
                <NavItem>
                    <MockupButton to="/mockup1" label="Navigation/Details 1" />
                </NavItem>
                <NavItem>
                    <MockupButton to="/mockup2" label="Checklist/Rater Info 1" />
                </NavItem>
                <NavItem>
                    <MockupButton to="/mockup3" label="Checklist/Rater Info 2" />
                </NavItem>
            </Nav>
           {!!title &&
                <NavbarText tag="h3">{title}</NavbarText>
            }
            <Button color="success" onClick={scenInfoToggler}>
                Scenario Info
            </Button>
            <Button color="primary" onClick={prefsFormToggler}>
                Preferences
            </Button>
        </Navbar>
    )
}

export default MDBNavBar;
