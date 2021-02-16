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
    // bind event handlers and other methods being passed down as props
    this.setCurrentNode    = this.setCurrentNode.bind(this)
    this.getCurrentNode    = this.getCurrentNode.bind(this)
    this.toggleChecked     = this.toggleChecked.bind(this)
    this.setChecked        = this.setChecked.bind(this)
    this.isChecked         = this.isChecked.bind(this)
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

  setChecked(id, boolVal) {
    this.setState((prevState) => ({
      checkListItems: {...prevState.children, [id]: boolVal}
    }))
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

  mkConfig(dispCalloutIcons, dispCalloutText, dispForms) {
    return {
      getCurrentNode: this.getCurrentNode,
      setCurrentNode: this.setCurrentNode,
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

    const lhsConfig = this.mkConfig(false, false, false)
    const rhsConfig = this.mkConfig(true, true, true)

    const lhs = <Outline
                  heading="Navigation"
                  scenario={scen}
                  steps={scen.steps}
                  first={true}
                  config={lhsConfig}
                />
    const rhs = <MDBDetailsPane
                  scenario={scen}
                  config={rhsConfig}
                />

    return <MDBContainer
              lhs={lhs}
              rhs={rhs}
              lhsWidth={5}
              rhsWidth={7}
           />;
  }
}

export default Mockup1;
