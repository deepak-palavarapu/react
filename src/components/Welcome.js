import React, { Component } from "react";

// stateful class component
class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name}</h1>
    }
}

export default Welcome;