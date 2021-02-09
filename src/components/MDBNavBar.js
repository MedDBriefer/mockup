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


const MDBNavBar = ({branding, title, toggler}) => {
    return (
        <Navbar color="dark" dark>
            {/* <NavbarBrand href="#">
                {branding}
            </NavbarBrand>
             */}
            <Nav tabs>
                <NavItem>
                    <MockupButton to="/mockup1" label="Mockup 1" />
                </NavItem>
                <NavItem>
                    <MockupButton to="/mockup2" label="Mockup 2" />
                </NavItem>
                <NavItem>
                    <MockupButton to="/mockup3" label="Mockup 3" />
                </NavItem>
            </Nav>
           {!!title &&
                <NavbarText tag="h3">{title}</NavbarText>
            }
            <Button color="success" onClick={toggler}>
                Scenario Info
            </Button>
        </Navbar>
    )
}

export default MDBNavBar;
