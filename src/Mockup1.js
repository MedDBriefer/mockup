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
    // need to bind this as well as functional components don't have a 'this'
    this.isChecked         = this.isChecked.bind(this)
  }

  setCurrentNode(node) {
    this.setState({
      currentNode: node
    });
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
                  switcher={this.setCurrentNode}
                  heading="Navigation"
                  steps={scen.steps}
                  first={true}
                />
    const currentNode = scen.items[this.state.currentNode] || [];
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
