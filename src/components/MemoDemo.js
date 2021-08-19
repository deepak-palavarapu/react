import React from 'react'

// Demonstrate react memo 
function MemoDemo() {
    return (
        <div>
         <h1>Memo component demonstration</h1>   
        </div>
    )
}

export default React.memo(MemoDemo)