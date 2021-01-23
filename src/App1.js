import React from "react";
import "./styles.css";

import CheckList from "./components/CheckList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.scenario = this.props.scenario;
    this.state = {};
    // console.log(this.scenario.steps);
  }
  render() {
    return (
      <>
        <h1>{this.props.branding}</h1>
        <div className="wrapper dev">
          <CheckList steps={this.scenario.steps} first={true} />
        </div>
      </>
    );
  }
}

export default App;
