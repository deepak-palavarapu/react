import React from 'react'

// demonstrate List renderding in react
function NameList() {
    const names = ["deepak", "santhosh", "jyo", "manasa"]
    const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
