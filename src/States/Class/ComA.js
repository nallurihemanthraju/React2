import React, { Component } from 'react'

 class ComA extends Component {
   state={
       messagge:"hello"
   }
   gmHandler=()=>{
       this.setState({message:"GM"})
   }
   gnHandler=()=>{
       this.setState({message:"GN"})
   }

    render(){
    return (
      <div>
          <h1>Hemanth:{this.state.message}</h1>
          <h2></h2>
           <button onClick={this.gmHandler}>GoodMorning</button>
           <button onClick={this.gnHandler}>GoodNight</button>
      </div>
    )
  }
}

export default ComA