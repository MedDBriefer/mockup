import React from "react";

import MDBContainer from "./components/MDBContainer"

import Accordian from "./components/Accordian"
import RaterInfo from "./components/RaterInfo"

class Mockup3 extends React.Component {

 constructor(props) {
   super(props);
   this.state = {
     callouts: {},
     vitals: {},
     checkListItems: {},
     criticalCriteria: {}
   };
   // bind event handlers and other methods being passed down as props
   this.toggleChecked = this.toggleChecked.bind(this)
   this.setChecked = this.setChecked.bind(this)
   this.isChecked = this.isChecked.bind(this)
  }

  isChecked(id) {
    return (id in this.state.checkListItems) ? this.state.checkListItems[id] : false
  }

  setChecked(id, boolVal) {
    this.setState((prevState) => ({
      checkListItems: { ...prevState.children, [id]: boolVal }
    }))
  }

  toggleChecked(id) {
    this.setState((prevState) => ({
      checkListItems: { ...prevState.checkListItems, [id]: !prevState.checkListItems[id] }
    }))
  }

  componentDidMount() {
    let scen = this.props.scenario;
    let crits = {}
    scen.criticalCriteria.forEach((cc) => { crits[cc.id] = false });
    let cli = {}
    // eslint-disable-next-line
    for (const [key, value] of Object.entries(scen.items)) {
      value.forEach((item) => {
        cli[item.id] = false;
      })
    }
    this.setState({
      // ui-related state vars
      callouts: {},
      vitals: {},
      // domain stuff (log to db)
      checkListItems: cli,
      criticalCriteria: crits
    });
  }


  mkConfig(dispCalloutIcons, dispCalloutText, dispForms) {
    return {
      isChecked: this.isChecked,
      toggleChecked: this.toggleChecked,
      setChecked: this.setChecked,
      displayCalloutIcons: dispCalloutIcons,
      displayCalloutText: dispCalloutText,
      displayInterventionForms: dispForms,
    }
  }

  render() {
    const scen = this.props.scenario;

    const lhsConfig = this.mkConfig(true, false, true)
    const rhsConfig = this.mkConfig(false, true, false)

    const lhs = <Accordian
                  scenario={scen}
                  steps={scen.steps}
                  heading="Checklist"
                  first={true}
                  config={lhsConfig}
                />
    const rhs = <RaterInfo
                  scenario={scen}
                  defaultTab={rhsConfig.dispCalloutText ? "callouts" : "initialVitals"}
                  config={rhsConfig}
                />

    return <MDBContainer
              lhs={lhs}
              rhs={rhs}
              lhsWidth={7}
              rhsWidth={5}
            />;
    }
}

export default Mockup3;
