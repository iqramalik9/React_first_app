//import React, { useState } from "react";
import './App.css';
import App1 from "./App1";
import Demo from "./Demo";

function App() {

  return (
    <div>
      <Demo number="1"></Demo>
      <App1 name="Iqra"/>
      <Demo number="2"></Demo>
      <App1 name="Ali"/>
    </div>
  );
 /*const [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div >
    <h2>My First React Website!</h2>
    <button onClick={this.handleClick}>Counter Value </button>
            <div>Counter Value is {this.state.counter}</div>
    </div>
  );*/
};

export default App;
