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
        <h1>This is App1</h1>
        <div className="wrapper dev">
          <CheckList steps={this.scenario.steps} first={true} />
        </div>
      </>
    );
  }
}

export default App;
