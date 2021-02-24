import React from "react";

import MDBContainer from "./components/MDBContainer"

import CheckList from "./components/CheckList"
import RaterInfo from "./components/RaterInfo"

class Mockup2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      callouts: {},
      currentVitals: {},
      vitalsRecomputed: false,
      checkListItems: {},
      criticalCriteria: {}
    };
    // bind event handlers and other methods being passed down as props
    this.toggleChecked     = this.toggleChecked.bind(this)
    this.setChecked        = this.setChecked.bind(this)
    this.isChecked         = this.isChecked.bind(this)
    this.getCurrentVital   = this.getCurrentVital.bind(this)
    this.setCurrentVital   = this.setCurrentVital.bind(this)
    this.recomputeVitals   = this.recomputeVitals.bind(this)
    this.getVitalsRecomputed = this.getVitalsRecomputed.bind(this)

    // total hack for now
    window.recomputeVitals = this.recomputeVitals
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

  getCurrentVital(vital) {
    return this.state.currentVitals[vital]
  }

  setCurrentVital(vital, value) {
    this.setState((prevState) => ({
      currentVitals: { ...prevState.currentVitals, [vital]: value }
    }))
  }


  getVitalsRecomputed() {
    return this.state.vitalsRecomputed
  }

  recomputeVitals() {
    let scen = this.props.scenario
    for (const [vital, obj] of Object.entries(scen.reassessmentVitals)) {
      this.setCurrentVital(vital, (Math.random() > 0.5) ? obj.goodVitals : obj.badVitals)
    }
    this.setState((prevState) => ({
      vitalsRecomputed: true
    }));
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
      callouts: {},
      currentVitals: Object.assign({}, scen.initialVitalSigns),
      checkListItems: cli,
      criticalCriteria: crits
    });
  }

  mkConfig(dispCalloutIcons, dispCalloutText, dispForms, autoRevealRaterInfo) {
    return {
      isChecked: this.isChecked,
      toggleChecked: this.toggleChecked,
      setChecked: this.setChecked,
      getCurrentVital: this.getCurrentVital,
      getVitalsRecomputed: this.getVitalsRecomputed,
      showOnlyIcon: false,
      displayCalloutIcons: dispCalloutIcons,
      displayCalloutText: dispCalloutText,
      displayInterventionForms: dispForms,
      autoRevealRaterInfo: autoRevealRaterInfo,
    }
  }

  render() {
    const scen = this.props.scenario;

    const lhsConfig = this.mkConfig(false, false, true, false)
    const rhsConfig = this.mkConfig(false, true, false, false)

    const lhs = <CheckList
                    scenario={scen}
                    steps={scen.steps}
                    heading="Checklist"
                    first={true}
                    config={lhsConfig}
                />
    const rhs = <RaterInfo
                  scenario={scen}
                  defaultTab={rhsConfig.dispCalloutText ? "callouts" : "vitals"}
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

export default Mockup2;
