import React, { Component } from "react";
import './App.css';

class App1 extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            age: 21
        }
    }

    namehandler()
    {
        this.setState({name:"Ahmad"})
    }
    render() {
        return(
            <div>
                <h1>Hello! { this.props.name}, This is React Website!</h1>
                <h2>Age of {this.props.name} is {this.state.age} </h2><br></br>
               
            </div>
        )
    }
}







export default App1;