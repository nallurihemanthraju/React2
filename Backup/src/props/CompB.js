import React from 'react'

let CompB =(props)=> {
    return <>
  <pre>{JSON.stringify(props)}</pre>
    <h1> empName {props.name}</h1>
    </>
}
export default CompB
