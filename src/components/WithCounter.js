import React from 'react'

//demonstrate high order component in react
const WithCounter = WrappedComponent => {
    class WithCounter extends React.Component {
        render() {
            return <WrappedComponent name="vishwas" />
        }
    }
    return WithCounter
}

export default WithCounter