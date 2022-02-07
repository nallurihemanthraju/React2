import React from 'react'
import CompB from './props/CompB';
let CompA=()=>{
    let name='hemanth'
    return <div>
    <h1> Component</h1>
    <CompB Name={name}/>
    </div>
}
export default CompA