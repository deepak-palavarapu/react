import React from 'react'

//Demonstrate css using inline stylings
const heading = {
    fontSize: '42px',
    color: 'green'
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>
                Inline
            </h1>    
        </div>
    )
}

export default Inline
