import React from "react";

import MDBContainer from "./components/MDBContainer"
import MDBDetailsPane from "./components/MDBDetailsPane"
import Outline from "./components/Outline";


class Mockup1 extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      callouts: {},
      vitals: {},
      currentNode: null,
      checkListItems: {},
      criticalCriteria: {}
    };
    // bind event event handlers;
    this.setCurrentNode          = this.setCurrentNode.bind(this)
    this.toggleChecked     = this.toggleChecked.bind(this)
    // need to bind these as well as functional components don't have a 'this'
    this.isChecked         = this.isChecked.bind(this)
    this.getCurrentNode    = this.getCurrentNode.bind(this)
  }

  setCurrentNode(node) {
    this.setState({
      currentNode: node
    });
  }

  getCurrentNode() {
    const retVal = {
      label: null,
      children: []
    }
    const nodeId = this.state.currentNode || null;
    if (nodeId) {
      retVal.label = this.props.scenario.nodeLabels[nodeId]
      retVal.children = this.props.scenario.items[nodeId]
    }
    return retVal;
  }

  isChecked(id) {
    return this.state.checkListItems[id]
  }

  toggleChecked(id) {
    this.setState((prevState) => ({
        checkListItems: {...prevState.checkListItems, [id]: !prevState.checkListItems[id]}
    }))
  }

  componentDidMount() {
    let scen = this.props.scenario;
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
      currentNode: null,
      // domain stuff (log to db)
      checkListItems: cli,
      criticalCriteria: crits
    });
  }

  render() {
    const scen = this.props.scenario;

    const lhs = <Outline
                  heading="Navigation"
                  scenario={scen}
                  steps={scen.steps}
                  switcher={this.setCurrentNode}
                  first={true}
                />
    const rhs = <MDBDetailsPane
                  children={currentNode}
                  isChecked={this.isChecked}
                  toggleChecked={this.toggleChecked}
                />

    return <MDBContainer
            lhs={lhs}
            rhs={rhs}
            />;
  }
}

export default Mockup1;
