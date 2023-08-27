import React from "react";
import "./App.css";

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.statemethod = this.statemethod.bind(this);
  }

  statemethod() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.statemethod}>Counter Value </button>
        <div>Counter Value is {this.state.counter}</div>
      </div>
    );
  }
}
