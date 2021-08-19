import React, {Component} from 'react'

// Demonstration of state concept
class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Alright deepak! Lets get started.'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thanks for subsribing.'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>
                    Subscribe
                </button>
            </div>
        )
    }
}
export default Message;