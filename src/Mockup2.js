import React from "react";

import MDBContainer from "./components/MDBContainer"

// import CheckList from "./components/CheckList";
import Accordian from "./components/Accordian"
import RaterInfo from "./components/RaterInfo"

class Mockup2 extends React.Component {

 constructor(props) {
   super(props);
   this.state = {
     callouts: {},
     vitals: {},
     checkListItems: {},
     criticalCriteria: {}
   };
    // bind event event handlers;
    this.toggleChecked = this.toggleChecked.bind(this)
    // state accessor needs to be bound also as 'this' isn't defined in
    // function components
    this.isChecked = this.isChecked.bind(this)
  }

  isChecked(id) {
    return (id in this.state.checkListItems) ? this.state.checkListItems[id] : false
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

  render() {
    const scen = this.props.scenario;

    // const lhs = <CheckList
    //               isChecked = { this.isChecked }
    //               toggleChecked = { this.toggleChecked }
    //               key="first"
    //               heading="Checklist"
    //               steps={scen.steps}
    //               first={true}
    //             />
    const lhs = <Accordian
                  isChecked={this.isChecked}
                  toggleChecked={this.toggleChecked}
                  key="first"
                  heading="Checklist"
                  steps={scen.steps}
                  first={true}
                />
    // const lhs = (<div>placeholder</div>)
    const rhs = <RaterInfo scenario={scen} />
    // const rhs = (<div>placeholder</div>)

    return <MDBContainer
              lhs={lhs}
              rhs={rhs}
              lhsWidth={7}
              rhsWidth={5}
            />;
    }
}

export default Mockup2;
