import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MDBNavBar from "./components/mdb-navbar"
import MDBContainer from "./components/MDBContainer"
import MDBModal from "./components/MDBModal"

import CheckList from "./components/CheckList";

class App extends React.Component {

 constructor(props) {
   super(props);
   this.state = {
     callouts: {},
     vitals: {},
     showScenarioInfoModal: false,
     currentNode: null,
     checkListItems: {},
     criticalCriteria: {}
   };
    // bind event event handlers;
    this.toggleScenarioInfoModal = this.toggleScenarioInfoModal.bind(this)
    this.setCurrentNode = this.setCurrentNode.bind(this)
    this.toggleCheckListItem = this.toggleCheckListItem.bind(this)
    // state accessor needs to be bound also as 'this' isn't defined in
    // function components
    this.getCheckedState = this.getCheckedState.bind(this)
  }


  toggleScenarioInfoModal(event) {
    this.setState((state, props) => ({
      showScenarioInfoModal: !state.showScenarioInfoModal
    }))
  }

  setCurrentNode(node) {
    console.log(node);
    this.setState((state, props) => ({
      currentNode: node
    }));
  }

  getCheckedState(id) {
    return this.state.checkListItems[id]
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
      showScenarioInfoModal: false,
      currentNode: null,
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

    return (
        <>
          <MDBNavBar
            branding="Checklist w/Tabs"
            title={scen.info.name}
            toggler={this.toggleScenarioInfoModal}
          />
          <MDBContainer
            lhs={lhs}
            rhs={rhs}
          />
          <MDBModal
            title="Scenario Info"
            show={this.state.showScenarioInfoModal}
            toggler={this.toggleScenarioInfoModal}
          >
            <h3>Dispatch Information</h3>
            <p>{scen.info.dispatchInfo}</p>
            <h3>Scene Assessment</h3>
            <p>{scen.info.sceneAssessment}</p>
          </MDBModal>
        </>
      );
    }
}

export default App;
