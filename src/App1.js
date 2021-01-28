import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import MDBNavBar from "./components/mdb-navbar"
import MDBContainer from "./components/MDBContainer"
import MDBModal from "./components/MDBModal"

import Outline from "./components/Outline";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.scenario.steps);
    this.toggleScenarioInfoModal = this.toggleScenarioInfoModal.bind(this)
    this.setCurrentNode = this.setCurrentNode.bind(this)
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

  componentDidMount() {
    let scen = this.props.scenario;
    console.log(scen)
    let crits = {}
    scen.criticalCriteria.forEach((cc) => {crits[cc.id] = false});

    this.setState({
      // ui-related state vars
      callouts: {},
      vitals: {},
      showScenarioInfoModal: false,
      currentNode: null,
      // domain stuff (log to db)
      checkListItems: {},
      criticalCriteria: crits
    });
  }

  render() {
    const lhs = <Outline
                  switcher={this.setCurrentNode}
                  heading="Navigation"
                  steps={this.props.scenario.steps}
                />
    const rhs = <div>Right hand side stuff</div>

    return (
      <>
        <MDBNavBar
          branding={this.props.branding}
          title={this.props.scenario.info.name}
          toggler={this.toggleScenarioInfoModal}
        />
        <MDBContainer lhs={lhs} rhs={rhs}/>
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
