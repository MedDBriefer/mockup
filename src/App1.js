import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import MDBNavBar from "./components/mdb-navbar"
import MDBContainer from "./components/MDBContainer"
import MDBModal from "./components/MDBModal"
import MDBDetailsPane from "./components/MDBDetailsPane"
import Outline from "./components/Outline";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // bind event event handlers;
    this.toggleScenarioInfoModal = this.toggleScenarioInfoModal.bind(this)
    this.setCurrentNode          = this.setCurrentNode.bind(this)
    this.toggleCheckListItem     = this.toggleCheckListItem.bind(this)
    // don't *think* I need to bind this
    this.getCheckedState         = this.getCheckedState.bind(this)
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
        checkListItems: {...prevState.checkListItems, [node]: !prevState.checkListItems[node]}
    }))
  }

  componentDidMount() {
    let scen = this.props.scenario;
    // console.log(scen)
    let crits = {}
    scen.criticalCriteria.forEach((cc) => {crits[cc.id] = false});
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
    const lhs = <Outline
                  switcher={this.setCurrentNode}
                  heading="Navigation"
                  steps={this.props.scenario.steps}
                />
    const currentNode = this.props.scenario.items[this.state.currentNode] || [];
    const rhs = <MDBDetailsPane
                  children={currentNode}
                  stateGetter={this.getCheckedState}
                  stateToggler={this.toggleCheckListItem}
                />

    return (
      <>
        <MDBNavBar
          branding={this.props.branding}
          title={this.props.scenario.info.name}
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
          <p>{this.props.scenario.info.dispatchInfo}</p>
          <h3>Scene Assessment</h3>
          <p>{this.props.scenario.info.sceneAssessment}</p>
        </MDBModal>
      </>
    );
  }
}

export default App;
