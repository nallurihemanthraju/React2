import React, { Component } from 'react'

class Elementvariable extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggnedin:false
        }
    }
  render() {
      let message
      if(this.state.isLoggnedin){
      message="raju"
      }
      else {
          message="heamnth"

      }
    return (
      <div>{message}</div>
    )
  }
}

export default Elementvariable

// o/p
// if we  give true then the op will be raju
// if we give false then the op will be hemanth