import React from "react";

import MDBContainer from "./components/MDBContainer"
import MDBDetailsPane from "./components/MDBDetailsPane"
import Outline from "./components/Outline";


class Mockup1 extends React.Component {
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
    this.setCurrentNode          = this.setCurrentNode.bind(this)
    this.toggleCheckListItem     = this.toggleCheckListItem.bind(this)
    // need to bind this as well as functional components don't have a 'this'
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
    const scen = this.props.scenario;

    const lhs = <Outline
                  switcher={this.setCurrentNode}
                  heading="Navigation"
                  steps={scen.steps}
                  first={true}
                />
    const currentNode = scen.items[this.state.currentNode] || [];
    const rhs = <MDBDetailsPane
                  children={currentNode}
                  stateGetter={this.getCheckedState}
                  stateToggler={this.toggleCheckListItem}
                />

    return <MDBContainer
            lhs={lhs}
            rhs={rhs}
            />;
  }
}

export default Mockup1;
