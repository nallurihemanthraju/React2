import React, { Component } from 'react'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoginedIn:true
        }
    }
  render() {
      if(this.state.isLoginedIn){
          return(
            <div>
                HI hemanth
            </div>
          )
      }
      else  {
        return(
            <div>
                Hi Raju 
            </div>
        )
      }
    return (
        <div>
           
      
        </div>
    )
  }
}

export default Contact 

// o/p
// if we declear true then it show  hi hemanth
// if we declear then it show hi raju