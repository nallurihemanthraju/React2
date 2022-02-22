import React, { Component } from 'react'

 class TernaryCondation  extends Component {
     constructor(props){
         super(props)
         this.state={
             isloggedIn:true
         }
     }
  render() {
    return (
        this.state.isloggedIn ? <>raju</> :<>HEmanth</>
      
    )
  }
}

export default TernaryCondation 
//   o/p
//    if we give true it show o/p as raju
//    if we give false it show o/p as hemanth