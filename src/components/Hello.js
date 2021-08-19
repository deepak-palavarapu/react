import React from "react";

function Hello() {
    // logic with JSX
    return (
        <div>
            <h1>
                Hello Mr.Cool!
            </h1>
        </div>
    )

    // logic without JSX
    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement(
    //         'h1',
    //         null,
    //         'Hello Mr.Cool'
    //     )
    // )
}

export default Hello;