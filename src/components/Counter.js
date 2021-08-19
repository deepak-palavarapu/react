import React, { Component } from 'react'

// Demonstrate setState method
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    Incr(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick = {() => this.Incr()}>
                    Increment    
                </button>
            </div>
        )
    }
}

export default Counter
