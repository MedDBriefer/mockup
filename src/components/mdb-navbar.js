import React from 'react';

import {
    Button,
    Navbar,
    // NavItem,
    NavbarText,
    NavbarBrand,
} from "reactstrap";
// Nav,
//     NavItem,
// NavLink




const MDBNavBar = ({branding, title, toggler}) => {
    return (
        <Navbar color="primary" dark>
            <NavbarBrand href="#">
                {branding}
            </NavbarBrand>
           {!!title &&
                <NavbarText>{title}</NavbarText>
            }
            <Button color="success" onClick={toggler}>
                Info
            </Button>
        </Navbar>
    )
}

export default MDBNavBar;
