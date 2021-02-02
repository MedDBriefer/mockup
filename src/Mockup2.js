import React from "react";

import MDBContainer from "./components/MDBContainer"

import CheckList from "./components/CheckList";


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
    this.toggleCheckListItem = this.toggleCheckListItem.bind(this)
    // state accessor needs to be bound also as 'this' isn't defined in
    // function components
    this.getCheckedState = this.getCheckedState.bind(this)
  }

  getCheckedState(id) {
    return (id in this.state.checkListItems) ? this.state.checkListItems[id] : false
  }

  toggleCheckListItem(node) {
    // console.log(node)

    this.setState((prevState) => ({
      checkListItems: { ...prevState.checkListItems, [node]: !prevState.checkListItems[node] }
    }))
  }

  componentDidMount() {
    let scen = this.props.scenario;
    // console.log(scen)
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

    const lhs = <CheckList
                  stateGetter={this.getCheckedState}
                  stateToggler={this.toggleCheckListItem}
                  key="first"
                  heading="Checklist"
                  steps={scen.steps} />
    // const lhs = (<div>placeholder</div>)
    const rhs = (<div>placeholder</div>)

    return <MDBContainer
              lhs={lhs}
              rhs={rhs}
            />;

    }
}

export default Mockup2;
