import React, {
    // useEffect,
    useState
} from 'react';

import { usePrefs } from "../contexts/PreferencesContext"

import {
    Button,
    Nav,
    // NavItem,
    Navbar,
    NavbarBrand,
    NavbarText,
} from "reactstrap";



// {/* <Button color="primary" onClick={prefsToggler}>
//     Preferences
// </Button> */}


const MDBNavBar = ({title, scenInfoToggler }) => {

    const { setPref } = usePrefs()
    const [activeMockup, setActiveMockup] = useState("mockup1")

    const isCurrentMockup = (mockup) => mockup === activeMockup

    const setMockup1Prefs = (event) => {
        event.preventDefault()
        setPref("dispLeafNodesInline", false)
        setPref("dispAssessmentFindingsInline", true)
        setPref("inhibitRaterOversharing", true)
        setActiveMockup("mockup1")
    }

    const setMockup2Prefs = (event) => {
        event.preventDefault()
        setPref("dispLeafNodesInline", true)
        setPref("dispAssessmentFindingsInline", true)
        setPref("inhibitRaterOversharing", true)
        setActiveMockup("mockup2")
    }

    // const setMockup3Prefs = (event) => {
    //     event.preventDefault()
    //     setPref("dispLeafNodesInline", true)
    //     setPref("dispAssessmentFindingsInline", false)
    //     setPref("inhibitRaterOversharing", false)
    //     setActiveMockup("mockup3")
    // }


    return (
        <Navbar color="dark" dark>

            <NavbarBrand href="#">
                MedDBriefer
            </NavbarBrand>

            <Nav>
                <Button
                    color={isCurrentMockup("mockup1") ? "success" : "primary"}
                    onClick={setMockup1Prefs}
                >
                    Layout 1
                </Button>
                <Button
                    color={isCurrentMockup("mockup2") ? "success" : "primary"}
                    onClick={setMockup2Prefs}
                >
                    Layout 2
                </Button>
            </Nav>

           {!!title &&
                <NavbarText tag="h3">{title}</NavbarText>
            }
            <Nav>
                <Button color="success" onClick={scenInfoToggler}>
                    Scenario Info
                </Button>
            </Nav>
        </Navbar>
    )
}

export default MDBNavBar;
