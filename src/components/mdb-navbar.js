import React from 'react';

import {
    Button,
    Navbar,
    NavbarBrand,
} from "reactstrap";
// Nav,
//     NavItem,
// NavLink



class MDBNavBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     let foo=1;
    // }

    render() {
        return (
            <Navbar color="primary" dark>
                <NavbarBrand href="#">
                    {this.props.branding}
                </NavbarBrand>
                <Button color="success" onClick={this.props.toggler}>
                    Info
                </Button>
            </Navbar>
        )
    }
}

export default MDBNavBar;
